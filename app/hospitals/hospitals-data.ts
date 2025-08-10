// This interface defines the structure for each treatment object.
export interface Treatment {
  name: string;
  cost: string; // Using string to allow for formatted values like "Approx. ₹X"
}

// This interface defines the structure for each hospital object.
// Exporting it allows other files to use this type definition.
export interface Hospital {
  id: number;
  name: string;
  lat: number;
  lng: number;
  treatments: Treatment[];
  type: "Government" | "Private";
  phone: string;
  district: string;
}

// This is the comprehensive list of hospitals, now exported for use in other components.
export const hospitals: Hospital[] = [
    // Ariyalur

    // Chengalpattu

    // Chennai

    // Coimbatore 

    // Cuddalore 

    // Dharmapuri

    // Dindigul

    // Erode 
    { id: 1, name: "Erode Cancer Centre", lat: 11.3137169, lng: 77.6691547, 
      treatments: [
        { name: "Chemotherapy", cost: "20,000" },
        { name: "Surgery", cost: "12,000" },
        { name: "Radiotherapy", cost: "80,000" }
      ], 
      type: "Private", phone: "0424 233 9704", district: "Erode" 
    },
    { id: 2, name: "Sudha Cancer Centre", lat: 11.3391197, lng: 77.7107163, 
      treatments: [
        { name: "Chemotherapy", cost: "" },
        { name: "Surgery", cost: "" },
        { name: "Radiotherapy", cost: "" }
      ], 
      type: "Private", phone: "070944 70073", district: "Erode" 
    },
    { id: 3, name: "Onco Foundation Cancer Hospital", lat: 11.333732, lng: 77.7180172, 
      treatments: [
        { name: "Chemotherapy", cost: "" },
        { name: "Surgery", cost: "" },
        { name: "Radiotherapy", cost: "" }
      ], 
      type: "Private", phone: "089404 04444", district: "Erode" 
    },

    // Kallakurichi 

    // Kancheepuram

    // Karur

    // Krishnagiri 

    // Madurai 

    // Mayiladuthurai 

    // Nagapattinam 

    // Kanyakumari 

    // Namakkal

    // Perambalur 

    // Pudukottai 

    // Ramanathapuram 

    // Ranipet 

    // Salem 

    // Sivaganga

    // Tenkasi 

    // Thanjavur 

    // Theni 

    // Thiruvallur 

    // Thiruvarur 

    // Thoothukudi 

    // Tiruchirapalli

    // Tirunelveli 

    // Tirupathur 

    // Tiruppur 

    // Tiruvannamalai
    
    // The Nilgiris 

    // Vellore 

    // Viluppuram

    // Virudhunagar
];