"use client";

import { APIProvider, Map, Marker, useApiIsLoaded } from "@vis.gl/react-google-maps";
import { useState, useMemo, Fragment } from "react";
import { Dialog, Transition } from '@headlessui/react'
import { hospitals, type Hospital, type Treatment } from './hospitals-data'; // IMPORT DATA AND TYPES


// --- REUSABLE UI COMPONENTS (Aesthetically updated) ---

function FilterCheckbox({ id, label, checked, onChange }: { id: string, label: string, checked: boolean, onChange: (checked: boolean) => void }) {
  return (
    <div className="flex items-center">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="h-4 w-4 rounded border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-[#f44e8b] focus:ring-[#f44e8b]/50"
      />
      <label htmlFor={id} className="ml-3 text-sm text-slate-700 dark:text-slate-300">
        {label}
      </label>
    </div>
  );
}

function FilterSection({ title, children }: { title: string, children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <div className="border-b border-slate-200 dark:border-slate-800 py-4">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center text-left">
                <h3 className="text-md font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 text-slate-500 dark:text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div className={`mt-4 space-y-3 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                {children}
            </div>
        </div>
    );
}


// --- FILTER PANEL (Aesthetically updated) ---

function FilterBox({ filters, onFilterChange, allDistricts, allTreatments, allTypes, onClear, onDone }: {
    filters: { [key: string]: string[] };
    onFilterChange: (category: string, values: string[]) => void;
    allDistricts: string[];
    allTreatments: string[];
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
        <div className="h-full flex flex-col bg-white dark:bg-slate-900">
            <div className="p-5 flex justify-between items-center border-b border-slate-200 dark:border-slate-800">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Filters</h2>
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
            
            <div className="p-5 border-t border-slate-200 dark:border-slate-800 md:hidden">
                 <button onClick={onDone} className="w-full bg-[#f44e8b] text-white font-bold py-3 rounded-lg hover:bg-[#f44e8b]/90 transition-colors">
                    Apply Filters
                 </button>
            </div>
        </div>
    );
}


// --- INFO BOX (Aesthetically Redesigned) ---

function HospitalInfoBox({ hospital, onClose }: { hospital: Hospital | null; onClose: () => void; }) {
  if (!hospital) return null;

  // Simple SVG icons for visual flair
  const TypeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h6m-6 4h6m-6 4h6" />
    </svg>
  );

  const PhoneIcon = () => (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
  );

  return (
    <div className="fixed bottom-0 left-0 right-0 z-20 p-5 pt-7 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-t border-slate-900/10 dark:border-slate-100/10 rounded-t-2xl shadow-2xl dark:shadow-black/40 md:absolute md:top-20 md:right-5 md:bottom-auto md:left-auto md:w-[390px] md:rounded-2xl md:border animate-in slide-in-from-bottom-10 md:slide-in-from-right-10 duration-500">
      
      <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-10 h-1 bg-slate-300 dark:bg-slate-700 rounded-full md:hidden" />
      
      <button onClick={onClose} className="absolute top-4 right-4 p-1.5 bg-slate-500/10 dark:bg-slate-100/10 rounded-full hover:bg-slate-500/20 dark:hover:bg-slate-100/20 transition" aria-label="Close hospital details">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-700 dark:text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="flex flex-col space-y-5 max-h-[55vh] md:max-h-full overflow-y-auto pr-2">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 pr-8 tracking-tight">{hospital.name}</h2>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-start space-x-3">
            <div className="p-2 bg-[#f44e8b]/10 rounded-lg text-[#f44e8b]">
              <TypeIcon />
            </div>
            <div>
              <h3 className="font-semibold text-slate-500 dark:text-slate-400">Type</h3>
              <p className="text-lg font-semibold text-slate-800 dark:text-slate-200">{hospital.type}</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="p-2 bg-[#f44e8b]/10 rounded-lg text-[#f44e8b]">
              <PhoneIcon />
            </div>
            <div>
              <h3 className="font-semibold text-slate-500 dark:text-slate-400">Contact</h3>
              <p className="text-lg font-semibold text-slate-800 dark:text-slate-200 font-mono">{hospital.phone}</p>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-md font-semibold text-slate-800 dark:text-slate-200 mb-3">Available Treatments & Costs</h3>
          <div className="space-y-1 text-sm border-t border-slate-200 dark:border-slate-800">
            {hospital.treatments.map((treatment: Treatment, index) => (
              <div key={index} className="flex justify-between items-center py-3 border-b border-slate-200/80 dark:border-slate-800/80">
                <p className="text-slate-700 dark:text-slate-300">{treatment.name}</p>
                <p className="font-bold text-slate-900 dark:text-slate-100 text-right shrink-0 ml-4">{treatment.cost}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


// --- MAP CONTAINER ---

function MapContainer({ setSelectedHospital, hospitalsToShow }: { setSelectedHospital: (hospital: Hospital) => void; hospitalsToShow: Hospital[]; }) {
  const isApiLoaded = useApiIsLoaded();
  const isDarkMode = typeof window !== 'undefined' && document.documentElement.classList.contains('dark');
  
  const mapStyles = isDarkMode ? [
      { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
      { featureType: "administrative.locality", elementType: "labels.text.fill", stylers: [{ color: "#d59563" }] },
      { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#d59563" }] },
      { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#263c3f" }] },
      { featureType: "poi.park", elementType: "labels.text.fill", stylers: [{ color: "#6b9a76" }] },
      { featureType: "road", elementType: "geometry", stylers: [{ color: "#38414e" }] },
      { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#212a37" }] },
      { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#9ca5b3" }] },
      { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#746855" }] },
      { featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#1f2835" }] },
      { featureType: "road.highway", elementType: "labels.text.fill", stylers: [{ color: "#f3d19c" }] },
      { featureType: "transit", elementType: "geometry", stylers: [{ color: "#2f3948" }] },
      { featureType: "transit.station", elementType: "labels.text.fill", stylers: [{ color: "#d59563" }] },
      { featureType: "water", elementType: "geometry", stylers: [{ color: "#17263c" }] },
      { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#515c6d" }] },
      { featureType: "water", elementType: "labels.text.stroke", stylers: [{ color: "#17263c" }] }
    ] : [];

  if (isApiLoaded) {
    const pinkDotIcon = { path: google.maps.SymbolPath.CIRCLE, scale: 6, fillColor: "#f44e8b", fillOpacity: 1.0, strokeWeight: 1, strokeColor: isDarkMode ? "white" : "black" };
    return (
      <Map defaultCenter={{ lat: 11.5, lng: 78.5 }} defaultZoom={7} mapId="TAMIL_NADU_HOSPITALS_MAP" gestureHandling={"cooperative"} mapTypeControl={false} styles={mapStyles}>
        {hospitalsToShow.map((hospital) => (
          <Marker key={hospital.id} position={{ lat: hospital.lat, lng: hospital.lng }} title={hospital.name} onClick={() => setSelectedHospital(hospital)} icon={pinkDotIcon} />
        ))}
      </Map>
    );
  }
  return <div className="w-full h-full bg-slate-200 dark:bg-slate-800 animate-pulse" />;
}

// --- DEVELOPMENT NOTICE POPUP ---

function DevNoticePopup() {
    const [isOpen, setIsOpen] = useState(true);

    if (!isOpen) return null;

    return (
        <div className="fixed bottom-5 right-5 z-50 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg p-4 max-w-sm animate-in slide-in-from-bottom-5 fade-in duration-300">
            <div className="flex items-start">
                <div className="flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                </div>
                <div className="ml-3">
                    <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200">Under Development</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">This page is currently under active development. Some features may not be fully functional.</p>
                </div>
                <div className="ml-4 flex-shrink-0">
                    <button onClick={() => setIsOpen(false)} className="p-1.5 bg-slate-500/10 dark:bg-slate-100/10 rounded-full hover:bg-slate-500/20 dark:hover:bg-slate-100/20 transition" aria-label="Dismiss">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-600 dark:text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}


// --- MAIN PAGE COMPONENT (Layout adjusted) ---

export default function HospitalsPage() {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    console.log("API Key seen by Vercel:", apiKey);
    
    const [selectedHospital, setSelectedHospital] = useState<Hospital | null>(null);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [filters, setFilters] = useState<{ [key: string]: string[] }>({ districts: [], treatments: [], types: [] });

    const { allDistricts, allTreatments, allTypes } = useMemo(() => {
        const treatmentsSet = new Set<string>();
        hospitals.forEach(h => h.treatments.forEach(t => treatmentsSet.add(t.name)));
        return {
            allDistricts: [...new Set(hospitals.map(h => h.district))].sort(),
            allTreatments: [...treatmentsSet].sort(),
            allTypes: [...new Set(hospitals.map(h => h.type))].sort(),
        };
    }, []);

    const filteredHospitals = useMemo(() => {
        return hospitals.filter(hospital => {
            const { districts, treatments, types } = filters;
            if (districts.length > 0 && !districts.includes(hospital.district)) return false;
            if (types.length > 0 && !types.includes(hospital.type)) return false;
            if (treatments.length > 0 && !treatments.every(t => hospital.treatments.some(ht => ht.name === t))) return false;
            return true;
        });
    }, [filters]);

    const handleFilterChange = (category: string, values: string[]) => {
        setFilters(prev => ({ ...prev, [category]: values }));
    };
    const clearFilters = () => setFilters({ districts: [], treatments: [], types: [] });

    if (!apiKey) {
        return ( <div className="p-5 pt-20 text-center dark:bg-slate-900 dark:text-white h-screen"><h1 className="font-bold text-lg">Google Maps API Key is missing.</h1><p>Please add it to your .env.local file.</p></div> );
    }

    return (
        <div className="h-screen w-full relative">
             <div className="fixed inset-0 -z-10 top-0">
                <div className="absolute w-full h-full bg-gradient-to-br from-[#f44e8b] via-[#5557fc] to-[#f44e8b] opacity-20 dark:opacity-25 blur-[120px]" />
            </div>
            <APIProvider apiKey={apiKey}>
                {/* Desktop Filter Panel */}
                <div className="hidden md:block absolute top-16 left-0 h-[calc(100vh-4rem)] w-72 z-10 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800">
                    <FilterBox filters={filters} onFilterChange={handleFilterChange} allDistricts={allDistricts} allTreatments={allTreatments} allTypes={allTypes} onClear={clearFilters} onDone={() => {}} />
                </div>
                
                {/* Mobile Filter Button */}
                <div className="md:hidden absolute top-20 left-4 z-10">
                    <button onClick={() => setIsFilterOpen(true)} className="flex items-center space-x-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border border-slate-200 dark:border-slate-700 shadow-lg rounded-lg px-4 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-slate-600 dark:text-slate-400">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
                        </svg>
                        <span>Filters</span>
                    </button>
                </div>
                
                {/* Map Wrapper */}
                <div className="w-full h-full pt-16 md:pt-0 md:pl-72">
                    <MapContainer hospitalsToShow={filteredHospitals} setSelectedHospital={setSelectedHospital} />
                </div>
            </APIProvider>
            
            <div className={`fixed inset-0 bg-black/30 z-10 md:hidden transition-opacity ${selectedHospital ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setSelectedHospital(null)} />
            
            <HospitalInfoBox hospital={selectedHospital} onClose={() => setSelectedHospital(null)} />

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
                                        <FilterBox filters={filters} onFilterChange={handleFilterChange} allDistricts={allDistricts} allTreatments={allTreatments} allTypes={allTypes} onClear={() => { clearFilters(); setIsFilterOpen(false); }} onDone={() => setIsFilterOpen(false)} />
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>

            <DevNoticePopup />
        </div>
    );
}