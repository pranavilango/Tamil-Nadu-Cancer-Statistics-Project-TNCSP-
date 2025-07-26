// This interface defines the structure for each hospital object.
// Exporting it allows other files to use this type definition.
export interface Hospital {
  id: number;
  name: string;
  lat: number;
  lng: number;
  treatments: string;
  cost: string;
  type: "Government" | "Private";
  phone: string;
  languages: string[];
  district: string;
}

// This is the comprehensive list of hospitals, now exported for use in other components.
export const hospitals: Hospital[] = [
    // --- Chennai District ---
    { id: 1, name: "Adyar Cancer Institute (WIA)", lat: 13.0060, lng: 80.2550, treatments: "Chemotherapy, Surgery, Radiotherapy, Immunotherapy", cost: "₹₹", type: "Government", phone: "044 2491 1526", languages: ["Tamil", "English"], district: "Chennai" },
    { id: 2, name: "Apollo Cancer Centre, Teynampet", lat: 13.0510, lng: 80.2520, treatments: "Chemotherapy, Radiotherapy, Immunotherapy, Surgery, Robotic Surgery", cost: "₹₹₹₹₹", type: "Private", phone: "044 2433 6119", languages: ["Tamil", "English"], district: "Chennai" },
    { id: 3, name: "MIOT International", lat: 13.0185, lng: 80.1746, treatments: "Chemotherapy, Surgery, Radiotherapy, Immunotherapy", cost: "₹₹₹₹₹", type: "Private", phone: "044 4200 2288", languages: ["Tamil", "English"], district: "Chennai" },
    { id: 4, name: "Dr. Kamakshi Memorial Hospital", lat: 12.9492, lng: 80.2096, treatments: "Radiotherapy, Surgery, Chemotherapy", cost: "₹₹₹₹", type: "Private", phone: "044 6630 0300", languages: ["Tamil", "English"], district: "Chennai" },
    { id: 5, name: "Fortis Malar Hospital", lat: 13.0101, lng: 80.2586, treatments: "Chemotherapy, Immunotherapy, Surgery", cost: "₹₹₹₹", type: "Private", phone: "044 4289 2222", languages: ["Tamil", "English"], district: "Chennai" },
    { id: 7, name: "Kauvery Hospital, Alwarpet", lat: 13.0335, lng: 80.2516, treatments: "Chemotherapy, Radiotherapy, Surgery", cost: "₹₹₹₹", type: "Private", phone: "044 4000 6000", languages: ["Tamil", "English"], district: "Chennai" },
    { id: 11, name: "SIMS Hospital, Vadapalani", lat: 13.0594, lng: 80.2078, treatments: "Chemotherapy, Radiotherapy, Surgery", cost: "₹₹₹₹", type: "Private", phone: "044 2000 2001", languages: ["Tamil", "English"], district: "Chennai" },
    { id: 12, name: "Dr. Rai Memorial Medical Centre", lat: 13.0475, lng: 80.2490, treatments: "Chemotherapy, Surgery, Radiotherapy", cost: "₹₹₹", type: "Private", phone: "044 2827 3496", languages: ["Tamil", "English"], district: "Chennai" },

    // --- Coimbatore District ---
    { id: 9, name: "G. Kuppuswamy Naidu Memorial Hospital", lat: 11.0200, lng: 76.9650, treatments: "Chemotherapy, Surgery, Radiotherapy", cost: "₹₹₹", type: "Private", phone: "0422 224 3501", languages: ["Tamil", "English"], district: "Coimbatore" },
    { id: 13, name: "Kovai Medical Center and Hospital (KMCH)", lat: 11.0456, lng: 77.0216, treatments: "Chemotherapy, Radiotherapy, Surgery, Robotic Surgery", cost: "₹₹₹₹₹", type: "Private", phone: "0422 432 3800", languages: ["Tamil", "English"], district: "Coimbatore" },
    { id: 14, name: "PSG Hospitals", lat: 11.0234, lng: 77.0021, treatments: "Chemotherapy, Radiotherapy, Surgery", cost: "₹₹₹", type: "Private", phone: "0422 257 0170", languages: ["Tamil", "English"], district: "Coimbatore" },
    { id: 15, name: "Gem Hospital & Research Centre", lat: 11.0141, lng: 76.9806, treatments: "Surgical Oncology", cost: "₹₹₹₹", type: "Private", phone: "0422 232 4100", languages: ["Tamil", "English"], district: "Coimbatore" },

    // --- Vellore District ---
    { id: 6, name: "Christian Medical College (CMC)", lat: 12.9249, lng: 79.1358, treatments: "Chemotherapy, Surgery, Radiotherapy, Immunotherapy", cost: "₹₹₹", type: "Private", phone: "0416 228 1000", languages: ["Tamil", "English"], district: "Vellore" },

    // --- Kancheepuram District ---
    { id: 8, name: "Arignar Anna Memorial Cancer Hospital & Research Institute", lat: 12.8860, lng: 79.7150, treatments: "Chemotherapy, Radiotherapy, Surgery", cost: "₹", type: "Government", phone: "044 2722 2292", languages: ["Tamil", "English"], district: "Kancheepuram" },

    // --- Tiruchirappalli District ---
    { id: 10, name: "Harshamitra Superspeciality Cancer Hospital", lat: 10.8358, lng: 78.6767, treatments: "Chemotherapy, Radiotherapy, Surgery", cost: "₹₹₹", type: "Private", phone: "073737 31008", languages: ["Tamil", "English"], district: "Tiruchirappalli" },
    { id: 16, name: "Kauvery Hospital, Tennur", lat: 10.8173, lng: 78.6763, treatments: "Chemotherapy, Surgery", cost: "₹₹₹₹", type: "Private", phone: "0431 402 2555", languages: ["Tamil", "English"], district: "Tiruchirappalli" },

    // --- Madurai District ---
    { id: 17, name: "Meenakshi Mission Hospital & Research Centre", lat: 9.9392, lng: 78.1561, treatments: "Chemotherapy, Radiotherapy, Surgery", cost: "₹₹₹₹", type: "Private", phone: "0452 258 8741", languages: ["Tamil", "English"], district: "Madurai" },
    { id: 18, name: "Apollo Speciality Hospitals, Madurai", lat: 9.9079, lng: 78.1394, treatments: "Chemotherapy, Radiotherapy, Surgery", cost: "₹₹₹₹₹", type: "Private", phone: "0452 258 0897", languages: ["Tamil", "English"], district: "Madurai" },
    { id: 19, name: "Government Rajaji Hospital", lat: 9.9248, lng: 78.1256, treatments: "Chemotherapy, Radiotherapy, Surgery", cost: "₹", type: "Government", phone: "0452 253 2535", languages: ["Tamil", "English"], district: "Madurai" },

    // --- Salem District ---
    { id: 20, name: "Kauvery Hospital, Salem", lat: 11.6643, lng: 78.1460, treatments: "Chemotherapy, Surgery", cost: "₹₹₹₹", type: "Private", phone: "0427 267 7777", languages: ["Tamil", "English"], district: "Salem" },
];