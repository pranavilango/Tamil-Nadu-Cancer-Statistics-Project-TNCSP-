"use client";

import { APIProvider, Map, Marker, useApiIsLoaded } from "@vis.gl/react-google-maps";
import { useState, useMemo, Fragment } from "react";
import { Dialog, Transition } from '@headlessui/react'
import { hospitals, type Hospital } from './hospitals-data'; // IMPORT DATA AND TYPES
import { X, Filter as FilterIcon, ArrowUpRight, MapPin } from 'lucide-react'; // Refined icon set

// --- REUSABLE UI COMPONENTS (UNCHANGED) ---

function FilterCheckbox({ id, label, checked, onChange }: { id: string, label: string, checked: boolean, onChange: (checked: boolean) => void }) {
  return (
    <div className="flex items-center">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="h-4 w-4 rounded border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-brand-lavender focus:ring-brand-lavender/50"
      />
      <label htmlFor={id} className="ml-3 text-sm text-slate-700 dark:text-slate-300">
        {label}
      </label>
    </div>
  );
}

function FilterSection({ title, children }: { title:string, children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <div className="border-b border-slate-200 dark:border-slate-800 py-4">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center text-left">
                <h3 className="text-md font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 text-slate-500 dark:text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0- 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div className={`mt-4 space-y-3 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                {children}
            </div>
        </div>
    );
}

// --- FILTER PANEL (UNCHANGED) ---

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
                <button onClick={onClear} className="text-sm font-medium text-brand-lavender hover:text-brand-lavender/80">Clear All</button>
            </div>
            <div className="flex-1 overflow-y-auto px-5">
                <FilterSection title="Districts">{allDistricts.map((d) => (<FilterCheckbox key={d} id={`d-${d}`} label={d} checked={filters.districts.includes(d)} onChange={() => handleCheckboxChange('districts', d)}/>))}</FilterSection>
                <FilterSection title="Types of Treatment">{allTreatments.map((t) => (<FilterCheckbox key={t} id={`t-${t}`} label={t} checked={filters.treatments.includes(t)} onChange={() => handleCheckboxChange('treatments', t)}/>))}</FilterSection>
                <FilterSection title="Hospital Type">{allTypes.map((t) => (<FilterCheckbox key={t} id={`type-${t}`} label={t} checked={filters.types.includes(t)} onChange={() => handleCheckboxChange('types', t)}/>))}</FilterSection>
            </div>
            <div className="p-5 border-t border-slate-200 dark:border-slate-800 md:hidden">
                 <button onClick={onDone} className="w-full bg-slate-900 dark:bg-slate-50 text-white dark:text-black font-semibold py-3 rounded-lg hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors">Apply Filters</button>
            </div>
        </div>
    );
}


// --- INFO BOX (FINAL POLISHED VERSION) ---

function HospitalInfoBox({ hospital, onClose }: { hospital: Hospital | null; onClose: () => void; }) {
  if (!hospital) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-20 md:absolute md:top-20 md:right-5 md:bottom-auto md:left-auto md:w-[390px] animate-in slide-in-from-bottom-10 md:slide-in-from-right-10 duration-500">
      <div className="relative flex flex-col w-full rounded-t-2xl md:rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-b-0 md:border-b border-slate-200/80 dark:border-slate-800/80 overflow-hidden shadow-2xl dark:shadow-black/50">
        
        <button onClick={onClose} className="absolute top-4 right-4 p-1.5 bg-slate-500/10 dark:bg-slate-100/10 rounded-full hover:bg-slate-500/20 dark:hover:bg-slate-100/20 transition" aria-label="Close hospital details">
          <X className="h-5 w-5 text-slate-700 dark:text-slate-300"/>
        </button>
        
        <div className="p-6">
          <div className="pr-8 mb-4">
            {/* DEFINITIVE FIX: Reverted font weight and size for a cleaner look */}
            <h2 className="text-3xl font-semibold tracking-tighter text-slate-900 dark:text-slate-100">
              {hospital.name}
            </h2>
            <div className="flex items-center text-base text-slate-500 dark:text-slate-400 mt-2">
              <MapPin size={16} className="mr-2" />
              {hospital.district}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80 space-y-3">
             <div className="flex justify-between items-center text-base">
                <span className="text-slate-500 dark:text-slate-400">Type</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{hospital.type}</span>
             </div>
             <div className="flex justify-between items-center text-base">
                <span className="text-slate-500 dark:text-slate-400">Contact</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{hospital.phone}</span>
             </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full border-t border-slate-200/80 dark:border-slate-800/80 py-3">
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${hospital.lat},${hospital.lng}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group inline-flex items-center text-center px-4 py-2 text-blue-600 dark:text-blue-500"
          >
            <span className="text-base font-semibold">Get Directions</span>
            {/* DEFINITIVE FIX: Re-added the hover animation classes to the arrow icon */}
            <ArrowUpRight className="w-5 h-5 ml-1.5 text-blue-500/70 dark:text-blue-400/70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

      </div>
    </div>
  );
}


// --- MAP CONTAINER (UNCHANGED) ---

function MapContainer({ setSelectedHospital, hospitalsToShow }: { setSelectedHospital: (hospital: Hospital) => void; hospitalsToShow: Hospital[]; }) {
  const isApiLoaded = useApiIsLoaded();

  if (isApiLoaded) {
    const lavenderDotIcon = { 
        path: google.maps.SymbolPath.CIRCLE, 
        scale: 4.5,
        fillColor: "#C4B5FD",
        fillOpacity: 1.0, 
        strokeWeight: 1, 
        strokeColor: "#1E293B"
    };

    return (
      <Map defaultCenter={{ lat: 11.5, lng: 78.5 }} defaultZoom={7} mapId="TAMIL_NADU_HOSPITALS_MAP" gestureHandling={"cooperative"} mapTypeControl={false}>
        {hospitalsToShow.map((h) => (<Marker key={h.id} position={{ lat: h.lat, lng: h.lng }} title={h.name} onClick={() => setSelectedHospital(h)} icon={lavenderDotIcon} />))}
      </Map>
    );
  }
  return <div className="w-full h-full bg-slate-200 dark:bg-slate-800 animate-pulse" />;
}


// --- MAIN PAGE COMPONENT (UNCHANGED) ---

export default function HospitalsPage() {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    const [selectedHospital, setSelectedHospital] = useState<Hospital | null>(null);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [filters, setFilters] = useState<{ [key: string]: string[] }>({ districts: [], treatments: [], types: [] });

    const { allDistricts, allTreatments, allTypes } = useMemo(() => {
        const treatmentsSet = new Set<string>(["Medical Oncology", "Surgical Oncology", "Radiation Oncology"]);
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
            if (treatments.length > 0) {
                const hTreats = hospital.treatments;
                if (!treatments.every(t => (t === "Medical Oncology" && hTreats.medicalOncology) || (t === "Surgical Oncology" && hTreats.surgicalOncology) || (t === "Radiation Oncology" && hTreats.radiationOncology))) return false;
            }
            return true;
        });
    }, [filters]);

    const handleFilterChange = (category: string, values: string[]) => setFilters(prev => ({ ...prev, [category]: values }));
    const clearFilters = () => setFilters({ districts: [], treatments: [], types: [] });
    
    if (!apiKey) {
        return ( <div className="p-5 pt-20 text-center dark:bg-slate-900 dark:text-white h-screen"><h1 className="font-bold text-lg">Google Maps API Key is missing.</h1><p>Please add it to your .env.local file.</p></div> );
    }

    return (
        <div className="h-screen w-full relative overflow-hidden">
             <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 [background-image:linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [background-size:36px_36px]"></div>
                <div className="absolute left-0 top-1/4 w-[800px] h-[800px] bg-brand-lavender/10 dark:bg-brand-lavender/20 rounded-full blur-3xl opacity-30"></div>
                <div className="absolute right-0 bottom-1/4 w-[800px] h-[800px] bg-blue-300/10 dark:bg-blue-300/20 rounded-full blur-3xl opacity-30"></div>
            </div>
            <APIProvider apiKey={apiKey}>
                <div className="hidden md:block absolute top-16 left-0 h-[calc(100vh-4rem)] w-72 z-10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-r border-slate-200 dark:border-slate-800">
                    <FilterBox 
                        filters={filters} 
                        onFilterChange={handleFilterChange} 
                        allDistricts={allDistricts} 
                        allTreatments={allTreatments} 
                        allTypes={allTypes} 
                        onClear={clearFilters} 
                        onDone={() => {}} 
                    />
                </div>
                <div className="md-hidden absolute top-20 left-4 z-10">
                    <button onClick={() => setIsFilterOpen(true)} className="flex items-center space-x-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border border-slate-200 dark:border-slate-700 shadow-lg rounded-lg px-4 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
                        <FilterIcon className="h-5 w-5 text-slate-600 dark:text-slate-400" /><span>Filters</span>
                    </button>
                </div>
                <div className="w-full h-full md:pl-72">
                    <MapContainer hospitalsToShow={filteredHospitals} setSelectedHospital={setSelectedHospital}/>
                </div>
            </APIProvider>
            <div className={`fixed inset-0 bg-black/30 z-10 md:hidden transition-opacity ${selectedHospital ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setSelectedHospital(null)} />
            <HospitalInfoBox hospital={selectedHospital} onClose={() => setSelectedHospital(null)} />
            <Transition.Root show={isFilterOpen} as={Fragment}>
                <Dialog as="div" className="relative z-30 md:hidden" onClose={setIsFilterOpen}>
                    <Transition.Child as={Fragment} enter="ease-in-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in-out duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-black bg-opacity-40" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-hidden"><div className="absolute inset-0 overflow-hidden"><div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full">
                        <Transition.Child as={Fragment} enter="transform transition ease-in-out duration-300" enterFrom="-translate-x-full" enterTo="translate-x-0" leave="transform transition ease-in-out duration-200" leaveFrom="translate-x-0" leaveTo="-translate-x-full">
                            <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                <FilterBox 
                                    filters={filters} 
                                    onFilterChange={handleFilterChange} 
                                    allDistricts={allDistricts} 
                                    allTreatments={allTreatments} 
                                    allTypes={allTypes} 
                                    onClear={() => { clearFilters(); setIsFilterOpen(false); }} 
                                    onDone={() => setIsFilterOpen(false)} 
                                />
                            </Dialog.Panel>
                        </Transition.Child>
                    </div></div></div>
                </Dialog>
            </Transition.Root>
        </div>
    );
}