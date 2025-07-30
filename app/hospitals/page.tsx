"use client";

import { APIProvider, Map, Marker, useApiIsLoaded } from "@vis.gl/react-google-maps";
import { useState, useMemo, Fragment } from "react";
import { Dialog, Transition } from '@headlessui/react'
import { hospitals, type Hospital } from './hospitals-data'; // IMPORT DATA FROM THE NEW FILE


// --- REUSABLE UI COMPONENTS ---

function FilterCheckbox({ id, label, checked, onChange }: { id: string, label: string, checked: boolean, onChange: (checked: boolean) => void }) {
  return (
    <div className="flex items-center">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="h-4 w-4 rounded border-gray-300 text-[#f44e8b] focus:ring-[#f44e8b]/50"
      />
      <label htmlFor={id} className="ml-3 text-sm text-zinc-800">
        {label}
      </label>
    </div>
  );
}

function FilterSection({ title, children }: { title: string, children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <div className="border-b border-zinc-200 py-4">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center text-left">
                <h3 className="text-md font-semibold text-zinc-900">{title}</h3>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 text-zinc-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div className={`mt-4 space-y-3 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                {children}
            </div>
        </div>
    );
}


// --- FILTER PANEL ---

function FilterBox({ filters, onFilterChange, allDistricts, allTreatments, allCosts, allTypes, onClear, onDone }: {
    filters: { [key: string]: string[] };
    onFilterChange: (category: string, values: string[]) => void;
    allDistricts: string[];
    allTreatments: string[];
    allCosts: string[];
    allTypes: string[];
    onClear: () => void;
    onDone: () => void;
}) {
    const handleCheckboxChange = (category: string, value: string) => {
        const currentValues = filters[category] || [];
        const newValues = currentValues.includes(value)
            ? currentValues.filter((v: string) => v !== value)
            : [...currentValues, value];
        onFilterChange(category, newValues);
    };

    return (
        <div className="h-full flex flex-col bg-zinc-100/95 backdrop-blur-sm">
            <div className="p-5 flex justify-between items-center border-b border-zinc-200">
                <h2 className="text-xl font-bold text-zinc-900">Filters</h2>
                <button
                    onClick={onClear}
                    className="text-sm font-medium text-[#f44e8b] hover:text-[#f44e8b]/80"
                >
                    Clear All
                </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5">
                <FilterSection title="Districts">
                    {allDistricts.map((district: string) => (
                        <FilterCheckbox
                            key={district}
                            id={`district-${district}`}
                            label={district}
                            checked={filters.districts.includes(district)}
                            onChange={() => handleCheckboxChange('districts', district)}
                        />
                    ))}
                </FilterSection>

                <FilterSection title="Types of Treatment">
                    {allTreatments.map((treatment: string) => (
                        <FilterCheckbox
                            key={treatment}
                            id={`treatment-${treatment}`}
                            label={treatment}
                            checked={filters.treatments.includes(treatment)}
                            onChange={() => handleCheckboxChange('treatments', treatment)}
                        />
                    ))}
                </FilterSection>

                <FilterSection title="Cost Range">
                    {allCosts.map((cost: string) => (
                        <FilterCheckbox
                            key={cost}
                            id={`cost-${cost}`}
                            label={cost}
                            checked={filters.costs.includes(cost)}
                            onChange={() => handleCheckboxChange('costs', cost)}
                        />
                    ))}
                </FilterSection>

                <FilterSection title="Hospital Type">
                    {allTypes.map((type: string) => (
                        <FilterCheckbox
                            key={type}
                            id={`type-${type}`}
                            label={type}
                            checked={filters.types.includes(type)}
                            onChange={() => handleCheckboxChange('types', type)}
                        />
                    ))}
                </FilterSection>
            </div>
            
            <div className="p-5 border-t border-zinc-200 md:hidden">
                 <button onClick={onDone} className="w-full bg-[#f44e8b] text-white font-bold py-3 rounded-lg hover:bg-[#f44e8b]/90 transition-colors">
                    Apply Filters
                 </button>
            </div>
        </div>
    );
}


// --- INFO BOX (Responsive Side Panel / Bottom Sheet) ---

function HospitalInfoBox({ hospital, onClose }: { hospital: Hospital | null; onClose: () => void; }) {
  if (!hospital) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-20 p-5 pt-7 bg-zinc-100/95 backdrop-blur-sm border-t border-zinc-200 rounded-t-2xl shadow-lg md:absolute md:top-24 md:right-5 md:bottom-auto md:left-auto md:w-[380px] md:rounded-2xl md:border md:max-h-[calc(100vh-8rem)] animate-in slide-in-from-bottom-10 md:slide-in-from-right-10 duration-300">
      <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-10 h-1 bg-zinc-300 rounded-full md:hidden" />
      <button onClick={onClose} className="absolute top-3 right-3 p-1.5 bg-black/10 rounded-full hover:bg-black/20 transition" aria-label="Close hospital details">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-zinc-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div className="flex flex-col space-y-4 max-h-[50vh] md:max-h-full overflow-y-auto">
        <h2 className="text-2xl font-bold text-zinc-900 pr-8">{hospital.name}</h2>
        <div><h3 className="text-sm font-semibold text-zinc-600 uppercase mb-1">Type</h3><p className="text-lg text-zinc-800">{hospital.type}</p></div>
        <div><h3 className="text-sm font-semibold text-zinc-600 uppercase mb-1">Treatments Offered</h3><p className="text-lg text-zinc-800">{hospital.treatments}</p></div>
        <div className="flex space-x-6">
          <div className="flex-1"><h3 className="text-sm font-semibold text-zinc-600 uppercase mb-1">Cost</h3><p className="text-2xl font-bold text-zinc-900">{hospital.cost}</p></div>
          <div className="flex-1"><h3 className="text-sm font-semibold text-zinc-600 uppercase mb-1">Languages</h3><p className="text-lg text-zinc-800">{hospital.languages.join(", ")}</p></div>
        </div>
        <div><h3 className="text-sm font-semibold text-zinc-600 uppercase mb-1">Contact</h3><p className="text-lg text-zinc-800 font-mono">{hospital.phone}</p></div>
      </div>
    </div>
  );
}


// --- MAP CONTAINER ---

function MapContainer({ setSelectedHospital, hospitalsToShow }: { setSelectedHospital: (hospital: Hospital) => void; hospitalsToShow: Hospital[]; }) {
  const isApiLoaded = useApiIsLoaded();

  if (isApiLoaded) {
    const pinkDotIcon = { path: google.maps.SymbolPath.CIRCLE, scale: 6, fillColor: "#f44e8b", fillOpacity: 1.0, strokeWeight: 1, strokeColor: "black" };
    return (
      <Map defaultCenter={{ lat: 11.5, lng: 78.5 }} defaultZoom={7} mapId="TAMIL_NADU_HOSPITALS_MAP" gestureHandling={"cooperative"} mapTypeControl={false}>
        {hospitalsToShow.map((hospital) => (
          <Marker key={hospital.id} position={{ lat: hospital.lat, lng: hospital.lng }} title={hospital.name} onClick={() => setSelectedHospital(hospital)} icon={pinkDotIcon} />
        ))}
      </Map>
    );
  }
  return null;
}


// --- MAIN PAGE COMPONENT ---

export default function HospitalsPage() {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    
    // State management
    const [selectedHospital, setSelectedHospital] = useState<Hospital | null>(null);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [filters, setFilters] = useState<{ [key: string]: string[] }>({ districts: [], treatments: [], costs: [], types: [] });

    // Derive filter options from the main hospital list
    const { allDistricts, allTreatments, allCosts, allTypes } = useMemo(() => {
        const treatmentsSet = new Set<string>();
        hospitals.forEach(h => h.treatments.split(', ').forEach(t => treatmentsSet.add(t.trim())));
        return {
            allDistricts: [...new Set(hospitals.map(h => h.district))].sort(),
            allTreatments: [...treatmentsSet].sort(),
            allCosts: [...new Set(hospitals.map(h => h.cost))].sort((a,b) => a.length - b.length),
            allTypes: [...new Set(hospitals.map(h => h.type))].sort(),
        };
    }, []);

    // Apply filters to the hospital list
    const filteredHospitals = useMemo(() => {
        return hospitals.filter(hospital => {
            const { districts, treatments, costs, types } = filters;
            if (districts.length > 0 && !districts.includes(hospital.district)) return false;
            if (costs.length > 0 && !costs.includes(hospital.cost)) return false;
            if (types.length > 0 && !types.includes(hospital.type)) return false;
            if (treatments.length > 0 && !treatments.every(t => hospital.treatments.includes(t))) return false;
            return true;
        });
    }, [filters]);

    // Handlers for updating and clearing filters
    const handleFilterChange = (category: string, values: string[]) => {
        setFilters(prev => ({ ...prev, [category]: values }));
    };
    const clearFilters = () => setFilters({ districts: [], treatments: [], costs: [], types: [] });


    if (!apiKey) {
        return ( <div className="p-5 text-center"><h1 className="font-bold text-lg">Google Maps API Key is missing.</h1><p>Please add it to your .env.local file.</p></div> );
    }

    return (
        <div className="h-screen w-full relative">
            <APIProvider apiKey={apiKey}>
                {/* Desktop Filter Panel */}
                <div className="hidden md:block absolute top-0 left-0 h-full w-72 z-10 shadow-lg">
                    <FilterBox filters={filters} onFilterChange={handleFilterChange} allDistricts={allDistricts} allTreatments={allTreatments} allCosts={allCosts} allTypes={allTypes} onClear={clearFilters} onDone={() => {}} />
                </div>
                
                {/* Mobile Filter Entry Button */}
                <div className="md:hidden absolute top-20 left-4 z-10">
                    <button onClick={() => setIsFilterOpen(true)} className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm border border-zinc-200 shadow-lg rounded-lg px-4 py-2 text-sm font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L16 11.414V16a1 1 0 01-.293.707l-2 2A1 1 0 0113 18v-1.586l-3.707-3.707A1 1 0 019 12V6a1 1 0 01-.293-.707L8 4H4a1 1 0 01-1-1z" /></svg>
                        <span>Filters</span>
                    </button>
                </div>
                
                <MapContainer hospitalsToShow={filteredHospitals} setSelectedHospital={setSelectedHospital} />
            </APIProvider>
            
            {/* Backdrop for mobile overlays */}
            <div className={`fixed inset-0 bg-black/30 z-10 md:hidden transition-opacity ${selectedHospital ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setSelectedHospital(null)} />
            
            <HospitalInfoBox hospital={selectedHospital} onClose={() => setSelectedHospital(null)} />

            {/* Mobile Filter Modal (using Headless UI) */}
            <Transition.Root show={isFilterOpen} as={Fragment}>
                <Dialog as="div" className="relative z-30 md:hidden" onClose={setIsFilterOpen}>
                    <Transition.Child as={Fragment} enter="ease-in-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in-out duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-black bg-opacity-40 transition-opacity" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full">
                                <Transition.Child as={Fragment} enter="transform transition ease-in-out duration-300" enterFrom="-translate-x-full" enterTo="translate-x-0" leave="transform transition ease-in-out duration-200" leaveFrom="translate-x-0" leaveTo="-translate-x-full">
                                    <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                        <FilterBox filters={filters} onFilterChange={handleFilterChange} allDistricts={allDistricts} allTreatments={allTreatments} allCosts={allCosts} allTypes={allTypes} onClear={() => { clearFilters(); setIsFilterOpen(false); }} onDone={() => setIsFilterOpen(false)} />
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    );
}