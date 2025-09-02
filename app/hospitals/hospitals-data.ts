// This interface defines the structure for each hospital object.
// Exporting it allows other files to use this type definition.
export interface Hospital {
  id: number;
  name: string;
  lat: number;
  lng: number;
  treatments: {
    medicalOncology: boolean;
    surgicalOncology: boolean;
    radiationOncology: boolean;
  };
  type: "Government" | "Private";
  phone: string;
  district: string;
}

// This is the comprehensive list of hospitals, now exported for use in other components.
export const hospitals: Hospital[] = [
{id:1,
name: "Sai Fertility Centre And Hospital.",
lat: 12.689812443525,
lng: 79.9801355239335,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "9940331305", district: "Chengalpattu"
},
 
{id:2,
name: "Government Hospital,Mahabalipuram",
lat: 12.6176938933842,
lng: 80.1809686417954,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "8056514694", district: "Chengalpattu"
},
 
{id:3,
name: "Government Hospital,Thirukalukundram",
lat: 12.6068190531804,
lng: 80.0587286251502,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9443597420", district: "Chengalpattu"
},
 
{id:4,
name: "Government Hospital,Injabakkam",
lat: 12.920260379868,
lng: 80.2520235352978,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9962871155", district: "Chengalpattu"
},
 
{id:5,
name: "Unittas Multi Speciality Hospital",
lat: 12.9300684023935,
lng: 80.1179006151625,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "9941909801", district: "Chengalpattu"
},
 
{id:6,
name: "Ich, Egmore",
lat: 13.0734860684369,
lng: 80.2568363301493,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Private", phone: "9840729083", district: "Chennai"
},
 
{id:7,
name: "Government. Omandhurar Medical College And Hospital",
lat: 13.0685472006595,
lng: 80.273246201135,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9443789221", district: "Chennai"
},
 
{id:8,
name: "Kauvery Hospital",
lat: 13.0382119252774,
lng: 80.2571094126933,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Private", phone: "8144938757", district: "Chennai"
},
 
{id:9,
name: "Government. Royapettah Hospital",
lat: 13.0550815335279,
lng: 80.2647621942976,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9840746584", district: "Chennai"
},
 
{id:10,
name: "Government Peripheral Hospital,Kk Nagar",
lat: 13.0350833916045,
lng: 80.2090451414998,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9444219729", district: "Chennai"
},
 
{id:11,
name: "Government Opthomology Hospital",
lat: 13.0716224334606,
lng: 80.2586343221505,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9444821439", district: "Chennai"
},
 
{id:12,
name: "Adayar Cancer Institute",
lat: 13.0066663258164,
lng: 80.2399457800206,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Private", phone: "9444061914", district: "Chennai"
},
 
{id:13,
name: "Vijaya Hospital",
lat: 13.0494959830393,
lng: 80.2085795457941,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Private", phone: "9884004144", district: "Chennai"
},
 
{id:14,
name: "Kgh, Chennai",
lat: 13.0595014367525,
lng: 80.2782795683204,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9094969039", district: "Chennai"
},
 
{id:15,
name: "Government Peripheral Hospital, Anna Nagar",
lat: 13.0956183579932,
lng: 80.2192130688536,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9894865959", district: "Chennai"
},
 
{id:16,
name: "Government Peripheral Hospital,Tondiarpet",
lat: 13.1259383831437,
lng: 80.2873253354951,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9710459310", district: "Chennai"
},
 
{id:17,
name: "Csi Kalyani General Hospital",
lat: 13.0433533880357,
lng: 80.2719978909334,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9840411877", district: "Chennai"
},
 
{id:18,
name: "Voluntary Health Services, Tharamani",
lat: 13.0025330272597,
lng: 80.2473151932245,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9841048487", district: "Chennai"
},
 
{id:19,
name: "Kumaran Hospital Kilpauk",
lat: 13.0789957652384,
lng: 80.2490435297478,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9940054344", district: "Chennai"
},
 
{id:20,
name: "Hycare Super Speciality Hospital",
lat: 13.0705480983695,
lng: 80.2155706905852,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9384060772", district: "Chennai"
},
 
{id:21,
name: "Noble Hospital",
lat: 13.0822972202573,
lng: 80.2531870632256,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "8508999999", district: "Chennai"
},
 
{id:22,
name: "K.V.T Speciality Hospital, Chennai Tn.",
lat: 13.1267571908554,
lng: 80.2488051199579,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Private", phone: "9444408237", district: "Chennai"
},
 
{id:23,
name: "Iog, Egmore",
lat: 13.072085729848,
lng: 80.2583596542312,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Private", phone: "9444303644", district: "Chennai"
},
 
{id:24,
name: "Government Hospital,Ayanavaram Esi",
lat: 13.0948287477843,
lng: 80.2393054416434,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9976046249", district: "Chennai"
},
 
{id:25,
name: "Rsrm,Tondiarpet",
lat: 13.1089723007724,
lng: 80.2884035343742,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9962139679", district: "Chennai"
},
 
{id:26,
name: "The Best Hospital, Kodambakkam",
lat: 13.053516791454,
lng: 80.2194811961226,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9840751860", district: "Chennai"
},
 
{id:27,
name: "Government Institute Of Mental Health",
lat: 13.0902211715883,
lng: 80.2393437496929,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9840109347", district: "Chennai"
},
 
{id:28,
name: "Billroth Hospitals Shenoy Nagar",
lat: 13.0756990531436,
lng: 80.2272959076805,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: true,
},
type: "Private", phone: "7299104050", district: "Chennai"
},
 
{id:29,
name: "Government. Stanley Medical College Hospital",
lat: 13.1052964339281,
lng: 80.2842858180925,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9442670002", district: "Chennai"
},
 
{id:30,
name: "Government Peripheral Hospital,Periyar Nagar",
lat: 13.1152139932458,
lng: 80.223230377569,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "7904898304", district: "Chennai"
},
 
{id:31,
name: "Government Peripheral Hospital, Saidapet",
lat: 13.0203776321679,
lng: 80.2239741926672,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "8248432292", district: "Chennai"
},
 
{id:32,
name: "Chennai Orthopedic Centre",
lat: 13.0471667018598,
lng: 80.181407495275,
treatments: {
medicalOncology: false,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9840299222", district: "Chennai"
},
 
{id:33,
name: "Prime Indian Hospitals (Pvt Ltd)",
lat: 13.0767202886626,
lng: 80.2057633172399,
treatments: {
medicalOncology: false,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9965583140", district: "Chennai"
},
 
{id:34,
name: "Medway Hospital",
lat: 13.0537149119721,
lng: 80.2272422872437,
treatments: {
medicalOncology: false,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9841026161", district: "Chennai"
},
 
{id:35,
name: "Promed Hospital, Kottivakkam",
lat: 12.9715771063859,
lng: 80.2582910297741,
treatments: {
medicalOncology: false,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9600046299", district: "Chennai"
},
 
{id:36,
name: "Vs Hospitals India (Pvt Ltd)",
lat: 13.0731102534263,
lng: 80.2526251981303,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Private", phone: "9444408400", district: "Chennai"
},
 
{id:37,
name: "Madras Medical College",
lat: 13.0797315970364,
lng: 80.27237752218,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9176553202", district: "Chennai"
},
 
{id:38,
name: "Government.Kilpauk Medical Collegehospital",
lat: 13.0768900873706,
lng: 80.2422130068976,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9788504014", district: "Chennai"
},
 
{id:39,
name: "Dr.Rai Memorial Cancer Institute",
lat: 13.0450405272263,
lng: 80.2477944362825,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Private", phone: "9444058906", district: "Chennai"
},
 
{id:40,
name: "Miot Hospital",
lat: 13.021268895101,
lng: 80.1857505449203,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Private", phone: "4422492288", district: "Chennai"
},
 
{id:41,
name: "Government Tb Hospital, Otteri",
lat: 13.0971786917232,
lng: 80.2443500225378,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9444231065", district: "Chennai"
},
 
{id:42,
name: "Murugan Hospital, Milbauk",
lat: 13.0833995399598,
lng: 80.2342113939157,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9840717032", district: "Chennai"
},
 
{id:43,
name: "Fortis Malar Hospital",
lat: 13.0101351287832,
lng: 80.2586203583574,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Private", phone: "8826877708", district: "Chennai"
},
 
{id:44,
name: "Km Hospital",
lat: 10.6626361124395,
lng: 77.0033949133263,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "9842857672", district: "Coimbatore"
},
 
{id:45,
name: "Kongunad Hospital",
lat: 11.0177039844893,
lng: 76.960475578919,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Private", phone: "9944400576", district: "Coimbatore"
},
 
{id:46,
name: "Gem Hospital And Research Center",
lat: 10.9998688610236,
lng: 76.9955820488838,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "9894200200", district: "Coimbatore"
},
 
{id:47,
name: "Vgm Hospital",
lat: 10.9984127788591,
lng: 77.0143606484352,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "9842204995", district: "Coimbatore"
},
 
{id:48,
name: "Alwa Hospital",
lat: 10.6375902854271,
lng: 76.9497584813927,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9486779942", district: "Coimbatore"
},
 
{id:49,
name: "Nataraj Medical Care Ctr Madukkarai",
lat: 10.9042440471697,
lng: 76.9586946425051,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "9865999890", district: "Coimbatore"
},
 
{id:50,
name: "Ashwin Polyclinic",
lat: 11.0241128585879,
lng: 76.9731416536465,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Private", phone: "9884080033", district: "Coimbatore"
},
 
{id:51,
name: "Sri Lakshmi Hospital",
lat: 11.0781999754637,
lng: 76.9409662950137,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9842249433", district: "Coimbatore"
},
 
{id:52,
name: "Fims Hospital",
lat: 10.9578491600113,
lng: 76.9723763036428,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "9787099699", district: "Coimbatore"
},
 
{id:53,
name: "Sri Bala Medical Ctr Ramanathapuram",
lat: 10.9966663245483,
lng: 76.9954583326311,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9842224624", district: "Coimbatore"
},
 
{id:54,
name: "Sree Abirami Hospital",
lat: 10.9526579196971,
lng: 76.9731036164164,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9842272972", district: "Coimbatore"
},
 
{id:55,
name: "K.J Hospital,Kuniamuthur",
lat: 10.9526579196971,
lng: 76.9731036164164,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "9025025125", district: "Coimbatore"
},
 
{id:56,
name: "Slv Hospital And Cancer Centre",
lat: 10.9851514561363,
lng: 77.0008587588021,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9842271007", district: "Coimbatore"
},
 
{id:57,
name: "Royal Care Super Specialty Hospital",
lat: 11.0076208286335,
lng: 76.9664033633362,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "0422- 4001000", district: "Coimbatore"
},
 
{id:58,
name: "Karpagam Hospital Mandapam",
lat: 10.8839851699074,
lng: 77.0070471223888,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9566760490", district: "Coimbatore"
},
 
{id:59,
name: "S.P.T Hospital Ramnagar",
lat: 11.0143220219232,
lng: 76.9615246316191,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "9842252852", district: "Coimbatore"
},
 
{id:60,
name: "Kiruba Hospital",
lat: 11.0335373336779,
lng: 76.929481810843,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "9366631399", district: "Coimbatore"
},
 
{id:61,
name: "Kovai Medical Center And Hospital",
lat: 11.0423501126347,
lng: 77.0404368403484,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Private", phone: "9994977833", district: "Coimbatore"
},
 
{id:62,
name: "Kg Hospital",
lat: 11.0001728388614,
lng: 76.9715764426687,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "9842221801", district: "Coimbatore"
},
 
{id:63,
name: "G.Kuppuswamy Naidu Memorial Hospital",
lat: 11.0122581538869,
lng: 76.9806730858308,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: true,
},
type: "Government", phone: "9600866692", district: "Coimbatore"
},
 
{id:64,
name: "Ram Polyclinic",
lat: 10.6624969056819,
lng: 77.0090711653204,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9842269339", district: "Coimbatore"
},
 
{id:65,
name: "Arun Hospital Pollachi",
lat: 10.6625773485839,
lng: 77.0129444983583,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9364309500", district: "Coimbatore"
},
 
{id:66,
name: "Pills Hospital Pollachi",
lat: 10.6641010082909,
lng: 77.0103998784302,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "8903130744", district: "Coimbatore"
},
 
{id:67,
name: "Sri Ramakrishna Hospital",
lat: 11.0231296432105,
lng: 76.9777239173197,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Private", phone: "4224500000", district: "Coimbatore"
},
 
{id:68,
name: "N.M.Hospital",
lat: 10.9981431534749,
lng: 76.9994204677914,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9443390263", district: "Coimbatore"
},
 
{id:69,
name: "K.G.M.Hospital",
lat: 11.0569766874655,
lng: 77.067225862355,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9943096666", district: "Coimbatore"
},
 
{id:70,
name: "Psg Hospitals",
lat: 11.0185653416532,
lng: 77.0068073400454,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Private", phone: "9944366616", district: "Coimbatore"
},
 
{id:71,
name: "Sathya Medical Center",
lat: 11.0237615107236,
lng: 76.9583219843562,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9994499585", district: "Coimbatore"
},
 
{id:72,
name: "Abinand Hospital",
lat: 10.9543804808031,
lng: 76.9733659978309,
treatments: {
medicalOncology: false,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9443295099", district: "Coimbatore"
},
 
{id:73,
name: "Hindusthan Hospital",
lat: 11.019623107642,
lng: 76.9950041033871,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "9943443333", district: "Coimbatore"
},
 
{id:74,
name: "Government Hospital Kurinjipadi",
lat: 11.5607683169531,
lng: 79.5976686507081,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "8870514257", district: "Cuddalore"
},
 
{id:75,
name: "Rajah Muthiah Med Coll And Hospital",
lat: 11.3920203279715,
lng: 79.7144744657994,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9842338163", district: "Cuddalore"
},
 
{id:76,
name: "Krishna Cancer Institute",
lat: 11.7659304441146,
lng: 79.7222527819209,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: true,
},
type: "Private", phone: "9367612970", district: "Cuddalore"
},
 
{id:77,
name: "Government. Chidambaram Hospital",
lat: 11.3951261614689,
lng: 79.6993944591777,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9176555345", district: "Cuddalore"
},
 
{id:78,
name: "Government.Head Quarters Hospital",
lat: 11.7566681890019,
lng: 79.7592603344432,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9442971280", district: "Cuddalore"
},
 
{id:79,
name: "Government Hospital Kattumannarkudi",
lat: 11.2841575427117,
lng: 79.5518309028476,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9791181264", district: "Cuddalore"
},
 
{id:80,
    name: "Government. Virudhachalam Hospital",
    lat: 11.5153339871644,
    lng: 79.3171059245849,
    treatments: {
    medicalOncology: true,
    surgicalOncology: true,
    radiationOncology: true,
},
type: "Government", phone: "9965311944", district: "Cuddalore"
},
 
{id:81,
name: "Government Hospital Panruti",
lat: 11.7672773341971,
lng: 79.5491917596041,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9486836132", district: "Cuddalore"
},
 
{id:82,
name: "Krishna Hospital",
lat: 11.7572457422469,
lng: 79.7613536476853,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: true,
},
type: "Private", phone: "9367612970", district: "Cuddalore"
},
 
{id:83,
name: "Arupadaiveedu Medical College",
lat: 11.8310965883999,
lng: 79.7796296334066,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Government", phone: "0413-2615185", district: "Cuddalore"
},
 
{id:84,
name: "Government Hospital Parangipetai",
lat: 11.4904399037414,
lng: 79.7571417582531,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9489840758", district: "Cuddalore"
},
 
{id:85,
name: "Government Hospital Tittakudi",
lat: 11.4013950590336,
lng: 79.1226481734663,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9443422828", district: "Cuddalore"
},
 
{id:86,
name: "Government Hospital, Palacode",
lat: 12.2964634263631,
lng: 78.0761684506117,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "4348222025", district: "Dharmapuri"
},
 
{id:87,
name: "Government. Dharmapuri Medical College",
lat: 12.1228134152753,
lng: 78.1581354763698,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "4342234833", district: "Dharmapuri"
},
 
{id:88,
name: "Government Hospital Harur",
lat: 12.0611069089817,
lng: 78.4755483258002,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "4346222800", district: "Dharmapuri"
},
 
{id:89,
name: "Government. Head Quarters Hospital",
lat: 12.1309160399509,
lng: 77.9043861262637,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "4342255674", district: "Dharmapuri"
},
 
{id:90,
name: "Kamalam Hospital",
lat: 12.1318387094182,
lng: 78.1588534835695,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "9865307744", district: "Dharmapuri"
},
 
{id:91,
name: "Government Hospital, Pappireddipatti",
lat: 11.9181675606988,
lng: 78.3645516808248,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "4346246222", district: "Dharmapuri"
},
 
{id:92,
name: "Government Hospital, Natham",
lat: 10.2261014978754,
lng: 78.2284201223586,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "7010742116", district: "Dindigul"
},
 
{id:93,
name: "Government Medical College",
lat: 10.3338280053714,
lng: 77.9816474275399,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9841236486", district: "Dindigul"
},
 
{id:94,
name: "Government Hospital, Pannaikadu",
lat: 10.2786288815673,
lng: 77.6288358534159,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "8610522232", district: "Dindigul"
},
 
{id:95,
name: "Government Hospital, Pattiveeranpatti",
lat: 10.2085044078736,
lng: 77.762773259758,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9788202403", district: "Dindigul"
},
 
{id:96,
name: "Government Hospital,Oddanchatteran",
lat: 10.4995446420571,
lng: 77.7461003352415,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9487748897", district: "Dindigul"
},
 
{id:97,
name: "Government Hospital, Athoor",
lat: 10.2877182351448,
lng: 77.8489317994148,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "8825969611", district: "Dindigul"
},
 
{id:98,
name: "Government. Head Quarters Hospital, Palani",
lat: 10.4485519849784,
lng: 77.5167345372973,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9842146066", district: "Dindigul"
},

{
id:99,
name: "Government Hospital, Batlagundu",
lat: 10.1635584678981,
lng: 77.754264800709,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9442361455", district: "Dindigul"
},

{id:100,
name: "Government Hospital, Vedachandur",
lat: 10.5283640127566,
lng: 77.9548001597575,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9443060118", district: "Dindigul"
},
 
 
{id:101,
name: "Government Hospital, Kodaikkanal",
lat: 10.2375425186414,
lng: 77.4925724362828,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9943842160", district: "Dindigul"
},
 
 
{id:102,
name: "Government Hospital, Nilakottai",
lat: 10.173547370862,
lng: 77.8581387082545,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9443805219", district: "Dindigul"
},
 
 
{id:103,
name: "Vadamalayan Hospitals Pvt Ltd",
lat: 10.3807460605575,
lng: 77.9689504434177,
treatments: {
medicalOncology: false,
surgicalOncology: false,
radiationOncology: true,
},
type: "Private", phone: "7708855111", district: "Dindigul"
},
 
 
{id:104,
name: "Government Hospital, Ayakudi, Palani",
lat: 10.4567729819835,
lng: 77.5625386348072,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9443250974", district: "Dindigul"
},
 
 
{id:105,
name: "Government Hospital, Thandikudi",
lat: 10.3089497188141,
lng: 77.6436188131658,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9597333064", district: "Dindigul"
},
 
 
{id:106,
name: "Government. Hospital,Anthiyur",
lat: 11.5814155505342,
lng: 77.5865154434862,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9688799551", district: "Erode"
},
 
 
{id:107,
name: "Government. Hospital Gobichettipalayam",
lat: 11.4564244344248,
lng: 77.4290638660375,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "8870889012", district: "Erode"
},
 
 
{id:108,
name: "City Hospital",
lat: 11.3451330711936,
lng: 77.7300796088536,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "9843025300", district: "Erode"
},
 
 
{id:109,
name: "Government Hospital Bhavani",
lat: 11.4509545412799,
lng: 77.6820317982583,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9566394643", district: "Erode"
},
 
 
{id:110,
name: "Kgr Surgical Nursing Home",
lat: 11.5050647003891,
lng: 77.2452924611267,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "9443320587", district: "Erode"
},
 
 
{id:111,
name: "Erode Cancer Center",
lat: 11.3136700286028,
lng: 77.668604360327,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: true,
},
type: "Private", phone: "9842334222", district: "Erode"
},
 
 
{id:112,
name: "Government. Hospital,Perundurai",
lat: 11.2759641051303,
lng: 77.5873833154813,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9843844789", district: "Erode"
},
 
 
{id:113,
name: "Maaruthi Mediccal Center And Hospitals",
lat: 11.3385382298765,
lng: 77.7130684950259,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "9842796660", district: "Erode"
},
 
 
{id:114,
name: "Lotus Hospitals Research Centre Ltd",
lat: 11.32600724783,
lng: 77.7301517829726,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "9994477725", district: "Erode"
},
 
 
{id:115,
name: "Care24 Medical Centre And Hospital",
lat: 11.3265282490915,
lng: 77.688113527618,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "8883311164", district: "Erode"
},
 
 
{id:116,
name: "Government Hospital Kodumudi",
lat: 11.0818683523184,
lng: 77.8845989407372,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "7358125823", district: "Erode"
},
 
 
{id:117,
name: "Government. Erode Medical College And Hospital",
lat: 11.2816978270816,
lng: 77.5645153488735,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9578917723", district: "Erode"
},
 
 
{id:118,
name: "Government.Head Quarters Hospital",
lat: 11.3398051659074,
lng: 77.717292675705,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9698920323", district: "Erode"
},
 
 
{id:119,
name: "Government Hospital Kavunthapadi",
lat: 11.4312665950455,
lng: 77.5580426290361,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9865171189", district: "Erode"
},
 
 
{id:120,
name: "Erode Medical Centre, Perundurai Road",
lat: 11.3348457469158,
lng: 77.7044886772939,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "9443063737", district: "Erode"
},
 
 
{id:121,
name: "Government. Hospital,Sathyamangalam",
lat: 11.5018195200783,
lng: 77.2583434045654,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9865782139", district: "Erode"
},
 
 
{id:122,
name: "Government.Head Quarters,Thirukovilur",
lat: 11.9699078412055,
lng: 79.2062833147862,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "8098969896", district: "Kallakurichi"
},
 
 
{id:123,
name: "Government Hospital Sankarapuram",
lat: 11.8870791502132,
lng: 78.9141410175801,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "7373549369", district: "Kallakurichi"
},
 
 
{id:124,
name: "Government Hospital Ulundurpet",
lat: 11.692707118876,
lng: 79.2858893613398,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9688576134", district: "Kallakurichi"
},
 
 
{id:125,
name: "Government.Medical College And Hospital",
lat: 11.7691089396635,
lng: 78.9612280938699,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "7010037578", district: "Kallakurichi"
},
 
 
{id:126,
name: "Government Hospital, Chinnasalem",
lat: 11.6284163811176,
lng: 78.8686073313324,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9629496196", district: "Kallakurichi"
},
 
 
{id:127,
name: "Government. Head Quarters Hospital",
lat: 12.8331137217525,
lng: 79.7102973943768,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9092034516", district: "Kancheepuram"
},
 
 
{id:128,
name: "Government Hospital,Uthiramerur",
lat: 12.6150199442423,
lng: 79.7608116608993,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "044-27272195", district: "Kancheepuram"
},
 
 
{id:129,
name: "Saveetha Medical Centre,Thandalam",
lat: 13.0240365226232,
lng: 80.016372275443,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9841185648", district: "Kancheepuram"
},
 
 
{id:130,
name: "Sri Ramachandra Medical Center",
lat: 13.0374793213767,
lng: 80.1445213641152,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Private", phone: "8939411868", district: "Kancheepuram"
},
 
 
{id:131,
name: "Government Hospital,Walajabad",
lat: 12.7943240087269,
lng: 79.8175172295058,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9994518953", district: "Kancheepuram"
},
 
 
{id:132,
name: "Sankara Multispecialty Hospital",
lat: 12.8551320491029,
lng: 79.7265849969655,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9080051015", district: "Kancheepuram"
},
 
 
{id:133,
name: "Government Arignaranna Cancer Hospital,",
lat: 12.8698531244621,
lng: 79.715872200663,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9442526244", district: "Kancheepuram"
},
 
 
{id:134,
name: "Government Hospital, Sriperambudur",
lat: 12.9571993390562,
lng: 79.9440448028119,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9443549747", district: "Kancheepuram"
},
 
 
{id:135,
name: "Government. Head Quarters Hospital, Tambaram",
lat: 12.9413940373622,
lng: 80.1303340069964,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9444135154", district: "Kancheepuram"
},
 
 
{id:136,
name: "St. Thomas Hospital",
lat: 13.0121276028261,
lng: 80.1964237164994,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9840382652", district: "Kancheepuram"
},
 
 
{id:137,
name: "Tagore Medical Coll And Hospital",
lat: 12.860331424945,
lng: 80.1366193721651,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9884398420", district: "Kancheepuram"
},
 
 
{id:138,
name: "Gleneagles Global Health City",
lat: 12.8978173036312,
lng: 80.2061801196235,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Private", phone: "9940559955", district: "Kancheepuram"
},
 
 
{id:139,
name: "Government. Hospital Cheyyur ",
lat: 12.3520146973483,
lng: 80.0025588144859,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9025492046", district: "Kancheepuram"
},
 
 
{id:140,
name: "Dr. Rela Inst. And Medical Centre",
lat: 12.9549384305552,
lng: 80.1387593944215,
treatments: {
medicalOncology: false,
surgicalOncology: false,
radiationOncology: true,
},
type: "Private", phone: "9842348885", district: "Kancheepuram"
},
 
 
{id:141,
name: "Dr Kamakshi Memorial Hospital",
lat: 12.9490137603013,
lng: 80.2090199982355,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: true,
},
type: "Private", phone: "9790961522", district: "Kancheepuram"
},
 
 
{id:142,
name: "Karpaga Vinyaga Institute",
lat: 12.5921342217073,
lng: 79.9129789093706,
treatments: {
medicalOncology: false,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9842966224", district: "Kancheepuram"
},
 
 
{id:143,
name: "Bharath Medical Col And Hospital",
lat: 12.9079727803408,
lng: 80.1397374591402,
treatments: {
medicalOncology: false,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9787303902", district: "Kancheepuram"
},
 
 
{id:144,
name: "Government. Hospital, Thiruporur",
lat: 12.7284827756818,
lng: 80.1882445210262,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "8778634244", district: "Kancheepuram"
},
 
 
{id:145,
name: "Srm Medical College Hospital",
lat: 12.8230356765072,
lng: 80.0476207736133,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9952980830", district: "Kancheepuram"
},
 
 
{id:146,
name: "Hindu Mission Hospital",
lat: 12.9236555454591,
lng: 80.1141270571873,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "8754591111", district: "Kancheepuram"
},
 
 
{id:147,
name: "Government. Madhurandaham Hospital",
lat: 12.5091168381831,
lng: 79.8899682878076,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9994453782", district: "Kancheepuram"
},
 
 
{id:148,
name: "M L Hospital",
lat: 8.16725891173952,
lng: 77.4200596937683,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "9443120793", district: "Kanniyakumari"
},
 
 
{id:149,
name: "Government. Hospital Karungal",
lat: 8.22940012484393,
lng: 77.2413685101179,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9894170489", district: "Kanniyakumari"
},
 
 
{id:150,
name: "Government Hospital,Kulithurai",
lat: 8.31035642569395,
lng: 77.2123386584083,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9894360423", district: "Kanniyakumari"
},
 
 
{id:151,
name: "C.S.I Mission Hospital",
lat: 8.30864211861866,
lng: 77.2155573186104,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: true,
},
type: "Private", phone: "9442383347", district: "Kanniyakumari"
},
 
 
{id:152,
name: "Kanyakumari Medical College Hospital",
lat: 8.17408454283799,
lng: 77.39621105769,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9443142633", district: "Kanniyakumari"
},
 
 
{id:153,
name: "Nims, Thiruvananthapuram (It'S In Kerala)",
lat: 8.41218700157333,
lng: 77.0659536683993,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "8289911463", district: "Kanniyakumari"
},
 
 
{id:154,
name: "Sri Mookambika Cancer Centre",
lat: 8.36132253178652,
lng: 77.2906925314978,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: true,
},
type: "Private", phone: "4651280742", district: "Kanniyakumari"
},
 
 
{id:155,
name: "Dr.Jeyasekharan Medical Trust",
lat: 8.18492438403437,
lng: 77.409850652409,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "9842136282", district: "Kanniyakumari"
},
 
 
{id:156,
name: "Government. Hospital Kanyakumari Taluk",
lat: 8.08349355094172,
lng: 77.5466536388042,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "8489788115", district: "Kanniyakumari"
},
 
 
{id:157,
name: "Government.Hq Hospital,Padmanabhapuram",
lat: 8.2476991018842,
lng: 77.3132048728331,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9894554032", district: "Kanniyakumari"
},
 
 
{id:158,
name: "Government Hospital Kulasekaram",
lat: 8.3724004628843,
lng: 77.2994388920859,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9487021570", district: "Kanniyakumari"
},
 
 
{id:159,
name: "Regional Cancer Centre",
lat: 8.12368674544377,
lng: 77.5115147418993,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: true,
},
type: "Government", phone: "9846520565", district: "Kanniyakumari"
},
 
 
{id:160,
name: "Government Hospital Bhoothapandi",
lat: 8.26480825589964,
lng: 77.443938671429,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9677326143", district: "Kanniyakumari"
},
 
 
{id:161,
name: "Kims Healthcare",
lat: 8.20662838151944,
lng: 77.3750526452961,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "8289911463", district: "Kanniyakumari"
},
 
 
{id:162,
name: "Government Hospital Arumanai ",
lat: 8.36335130378682,
lng: 77.2376005947435,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "8098233797", district: "Kanniyakumari"
},
 
 
{id:163,
name: "Government Hospital.Colachal",
lat: 8.17843881071726,
lng: 77.2578637910547,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9025685389", district: "Kanniyakumari"
},
 
 
{id:164,
name: "Joseph Sahaayam Speciality Hospital",
lat: 8.1792458732067,
lng: 77.4332442419805,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "9443357604", district: "Kanniyakumari"
},
 
 
{id:166,
name: "Chandrasekara Hospital, Hosur",
lat: 12.7418200494535,
lng: 77.8336478230349,
treatments: {
medicalOncology: false,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "7867016661", district: "Krishnagiri"
},
 
 
{id:167,
name: "Government Hospital Thirumangalam",
lat: 9.8255291445776,
lng: 77.986537301526,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9486779033", district: "Madurai"
},
 
 
{id:168,
name: "Government.Hq Hospital,Usilampatti",
lat: 9.96236046157151,
lng: 77.7886438472351,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9994242839", district: "Madurai"
},
 
 
{id:169,
name: "Saravana Hospital",
lat: 9.94148032641442,
lng: 78.1251313890269,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Private", phone: "9842153022", district: "Madurai"
},
 
 
{id:170,
name: "Lakshmana Multispeciality Hospital",
lat: 9.89828188839708,
lng: 78.090324300701,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "7373072104", district: "Madurai"
},
 
 
{id:171,
name: "Bgm Hospital",
lat: 9.96618359791543,
lng: 78.1358771347333,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "9047047148", district: "Madurai"
},
 
 
{id:172,
name: "Ashirvatha Speciality Hospital",
lat: 9.92305700268217,
lng: 78.1383434039357,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "9442619775", district: "Madurai"
},
 
 
{id:173,
name: "Government Hospital Peraiyur",
lat: 9.73561299054605,
lng: 77.7876275096733,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9443956602", district: "Madurai"
},
 
 
{id:174,
name: "Velammal Mc Hospital And Research Institute",
lat: 9.88663689632056,
lng: 78.1500097789491,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "0452 - 2510000", district: "Madurai"
},
 
 
{id:175,
name: "Apollo Speciality Hospital.",
lat: 9.92786926068325,
lng: 78.1488245658595,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: true,
},
type: "Private", phone: "9443692991, 861", district: "Madurai"
},
 
 
{id:176,
name: "Mohans Medicity Hospital",
lat: 9.9354607660811,
lng: 78.1423071917969,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: true,
},
type: "Private", phone: "9843050822", district: "Madurai"
},
 
 
{id:177,
name: "Guru Multispeciality Hospital",
lat: 9.94345481043389,
lng: 78.1649582812688,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: true,
},
type: "Private", phone: "9486467768", district: "Madurai"
},
 
 
{id:178,
name: "Government Hospital,Shozhavandan",
lat: 10.0220526488147,
lng: 77.963640830343,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9894315785", district: "Madurai"
},
 
 
{id:179,
name: "Government Hospital Tiruparankundram",
lat: 9.8787255771694,
lng: 78.0661694488254,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "8825839609", district: "Madurai"
},
 
 
{id:180,
name: "Government Hospital,Melur",
lat: 10.0337375813137,
lng: 78.3360022533203,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9894283906", district: "Madurai"
},
 
 
{id:181,
name: "Devaki Speciality Hospital",
lat: 9.92821878568645,
lng: 78.0985192659239,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: true,
},
type: "Private", phone: "9790111411", district: "Madurai"
},
 
 
{id:182,
name: "Preethi Hospital Pvt Ltd",
lat: 9.95169169029313,
lng: 78.1672803484325,
treatments: {
medicalOncology: false,
surgicalOncology: false,
radiationOncology: true,
},
type: "Private", phone: "9443033962", district: "Madurai"
},
 
 
{id:183,
name: "Skg Hospital",
lat: 9.82759022059047,
lng: 77.9897680690483,
treatments: {
medicalOncology: false,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9842122981", district: "Madurai"
},
 
 
{id:184,
name: "Shastha Kidney And Multispeciality Hospital",
lat: 9.9398627190147,
lng: 78.1751028370878,
treatments: {
medicalOncology: false,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "97875 28987", district: "Madurai"
},
 
 
{id:185,
name: "Shenbagam Hospitals Pvt Ltd",
lat: 9.92374366051945,
lng: 78.1435744644822,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "9750951115", district: "Madurai"
},
 
 
{id:186,
name: "R R Hospital",
lat: 9.92093710956664,
lng: 78.1488583974034,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "98421 35403", district: "Madurai"
},
 
 
{id:187,
name: "Bharathi Hospital",
lat: 9.94634234695763,
lng: 78.1441181169865,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "9789470605", district: "Madurai"
},
 
 
{id:188,
name: "Poobathiammal Hospital,",
lat: 9.9601690806259,
lng: 77.7889011385952,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "9443325340", district: "Madurai"
},
 
 
{id:189,
name: "Karunai Multispeciality Hospital",
lat: 9.94452348835669,
lng: 78.1267746201882,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "9443830249", district: "Madurai"
},
 
 
{id:190,
name: "Bala Hospitals, Usilampatti",
lat: 9.96479567454779,
lng: 77.7955154803414,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "9443548450", district: "Madurai"
},
 
 
{id:191,
name: "Pandian Heart Institute",
lat: 9.92849803317566,
lng: 78.0937207382287,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "94433 69870", district: "Madurai"
},
 
 
{id:192,
name: "Vadamalayan Hospital",
lat: 9.94275281646337,
lng: 78.1306894404786,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: true,
},
type: "Private", phone: "9843053736", district: "Madurai"
},
 
 
{id:193,
name: "Harshitha Hospitals Pvt Ltd",
lat: 9.87237109103121,
lng: 78.1085846327149,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: true,
},
type: "Private", phone: "9842159566", district: "Madurai"
},
 
 
{id:194,
name: "Government. Rajaji Hospital",
lat: 9.92581742219197,
lng: 78.1369149730688,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9677752252", district: "Madurai"
},
 
 
{id:195,
name: "Meenakshi Mission Hospital And Rsrch Centr",
lat: 9.94790035510548,
lng: 78.162523037088,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: true,
},
type: "Private", phone: "98421 56158", district: "Madurai"
},
 
 
{id:196,
name: "Government Hospital Vadipatti",
lat: 10.0817298833944,
lng: 77.9656771188525,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9865646365", district: "Madurai"
},
 
 
{id:197,
name: "Shanthi Nursing Home",
lat: 11.1015426542933,
lng: 79.6525945315333,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "9443311871", district: "Mayiladuthurai"
},
 
 



{id:199,
name: "Thangam Hospital",
lat: 11.2151841339051,
lng: 78.1719957636297,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Private", phone: "9843030685", district: "Namakkal"
},
 
 
{id:200,
name: "Government Hospital, Vennandur",
lat: 11.5169973377523,
lng: 78.0886701896593,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "8973505860", district: "Namakkal"
},
 
 
{id:201,
name: "Government Hospital, Sendamangalam",
lat: 11.279862343315,
lng: 78.2349682475388,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9443239222", district: "Namakkal"
},
 
 
{id:202,
name: "Government Hospital,Pallipalayam",
lat: 11.3608300293422,
lng: 77.7476616049929,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9842197134", district: "Namakkal"
},
 
 
{id:203,
name: "Government Hospital Kumarapalayam",
lat: 11.4433955253708,
lng: 77.6945239968919,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9442335163", district: "Namakkal"
},
 
 
{id:204,
name: "Government Medical College",
lat: 11.2591437401577,
lng: 78.1332094683617,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9092134058", district: "Namakkal"
},
 
 
{id:205,
name: "Government Hospital Paramathyvelur",
lat: 11.158788706978,
lng: 78.0227259026607,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9994433375", district: "Namakkal"
},
 
 
{id:206,
name: "Government Hospital Thiruchengodu",
lat: 11.3763741261968,
lng: 77.8942548088481,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9443292073", district: "Namakkal"
},
 
 
{id:207,
name: "Soorya Multispeciality Hospitals",
lat: 11.3785109687144,
lng: 77.8935640191102,
treatments: {
medicalOncology: false,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9842774574", district: "Namakkal"
},
 
 
{id:208,
name: "Government. Head Quarters Hospital, Rasipuram",
lat: 11.4610829276575,
lng: 78.1852051951494,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9443701369", district: "Namakkal"
},
 
 
{id:209,
name: "Swamy Vivekananda Mc",
lat: 11.3682347654056,
lng: 77.8888336121215,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9443791234", district: "Namakkal"
},
 
 
{id:210,
name: "Ashwini Gudalur Tribal Hospital",
lat: 11.5021390790583,
lng: 76.4989480150697,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9448367425", district: "Nilgiris"
},
 
 
{id:211,
name: "Dhanalakshmi Srinivasa Spr Spl Hos",
lat: 10.9293818436299,
lng: 78.7470020640008,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Private", phone: "9443846733", district: "Perambalur"
},
 
 
{id:212,
name: "Arputhaa Medical Care Hospital",
lat: 11.2341647602501,
lng: 78.8775731503987,
treatments: {
medicalOncology: false,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9443154364", district: "Perambalur"
},
 
 
{id:213,
name: "Puducherry Cancer Trust And Resctr",
lat: 11.8776790935354,
lng: 79.8049053837279,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: true,
},
type: "Government", phone: "9345456141", district: "Pondicherry"
},
 
 
{id:214,
name: "Pims",
lat: 12.04705229088,
lng: 79.8558809357391,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "9443721391", district: "Pondicherry"
},
 
 
{id:215,
name: "Jipmer Hospital",
lat: 11.9530044650289,
lng: 79.7966165764975,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: true,
},
type: "Private", phone: "0413-2296501", district: "Pondicherry"
},
 
 
{id:216,
name: "Manakula Vinayagar Medical College",
lat: 11.9213559046995,
lng: 79.6282224039588,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "9443228493", district: "Pondicherry"
},
 
 
{id:217,
name: "East Coast Hospital ",
lat: 11.9300439662409,
lng: 79.7794546142978,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "9842353322", district: "Pondicherry"
},
 
 
{id:218,
name: "Mahatma Gandhi Medical College",
lat: 11.8119904969903,
lng: 79.7780665079735,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "9442503636", district: "Pondicherry"
},
 
 
{id:219,
name: "Sri Venkateswara Medical College",
lat: 11.9036014668863,
lng: 79.7016376695638,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "9943439428", district: "Pondicherry"
},
 
 
{id:220,
name: "Government Hospital Gandarvakottai",
lat: 10.5730803637186,
lng: 79.0153446134634,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9787347111", district: "Pudukkottai"
},
 
 
{id:221,
name: "Sri Durga Surg Clinic",
lat: 10.2672424685238,
lng: 78.538735908562,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: true,
},
type: "Private", phone: "9344545449", district: "Pudukkottai"
},
 
 
{id:222,
name: "Government Hospital Keeranur",
lat: 10.5739916654604,
lng: 78.784064839634,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "04339-262228", district: "Pudukkottai"
},
 
 
{id:223,
name: "Government Hospital Viralimalai",
lat: 10.6043317227983,
lng: 78.5403027653719,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9487602238", district: "Pudukkottai"
},
 
 
{id:224,
name: "Government Hospital Annavasal",
lat: 10.4576238959518,
lng: 78.7028142931316,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9865797779", district: "Pudukkottai"
},
 
 
{id:225,
name: "Government Hospital Alangudi",
lat: 10.3675444964815,
lng: 78.9831381974031,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9750969955", district: "Pudukkottai"
},
 
 
{id:226,
name: "Government Hospital Valayapatti",
lat: 9.54440554851482,
lng: 78.5889189535592,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "4333262047", district: "Pudukkottai"
},
 
 
{id:227,
name: "Government Hospital,Thirumayam",
lat: 10.2450946214222,
lng: 78.746081746308,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9486541999", district: "Pudukkottai"
},
 
 
{id:228,
name: "Government Hospital Illuppur",
lat: 10.511742778906,
lng: 78.6235310494278,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9003686328", district: "Pudukkottai"
},
 
 
{id:229,
name: "Government Hospital Manamelkudi",
lat: 10.0389766631372,
lng: 79.2314670991584,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9940261919", district: "Pudukkottai"
},
 
 
{id:230,
name: "Sree Meenakshi Polyclinic",
lat: 10.378521059731,
lng: 78.8239490639595,
treatments: {
medicalOncology: false,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9443122012", district: "Pudukkottai"
},
 
 
{id:231,
name: "Dr Muthuraja Multi Speciality Hospitalt",
lat: 10.381368856283,
lng: 78.8154398470821,
treatments: {
medicalOncology: false,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9443131041", district: "Pudukkottai"
},
 
 
{id:232,
name: "M Malar Hospital",
lat: 10.3800171286007,
lng: 78.8192482012475,
treatments: {
medicalOncology: false,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9487406110", district: "Pudukkottai"
},
 
 
{id:233,
name: "Government Hospital Avudayar Kovil",
lat: 10.0771340782581,
lng: 79.0444395318091,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "04371-233400.", district: "Pudukkottai"
},
 
 
{id:234,
name: "Government.Head Quarters,Arranthangi",
lat: 10.1800340397687,
lng: 79.000099009923,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9486782509", district: "Pudukkottai"
},
 
 
{id:235,
name: "Government Pudukottai Mch",
lat: 10.4115097240664,
lng: 78.8460369753956,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9442449641", district: "Pudukkottai"
},
 
 
{id:236,
name: "Government Hospital Karambakudi",
lat: 10.4571776740953,
lng: 79.1403808742146,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9500609344", district: "Pudukkottai"
},
 
 
{id:237,
name: "Muthu Meenakshi Hospitals",
lat: 10.3793731299384,
lng: 78.8218339930178,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "7397781774", district: "Pudukkottai"
},
 
 
{id:238,
name: "Government Hospital,Mudukalathur",
lat: 9.34914896469752,
lng: 78.5155144021115,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "8807008455", district: "Ramanathapuram"
},
 
 
{id:239,
name: "Government Hospital,Uchipuli",
lat: 9.30967594561641,
lng: 79.0173432789142,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9841819841", district: "Ramanathapuram"
},
 
 
{id:240,
name: "Government Hospital Kamudhi",
lat: 9.41589179779913,
lng: 78.3659609730715,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9843977079 / 94", district: "Ramanathapuram"
},
 
 
{id:241,
name: "Government.Ramanathapuram Medical College",
lat: 9.36292950922981,
lng: 78.8560950535159,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9443920121", district: "Ramanathapuram"
},
 
 
{id:242,
name: "Government Hospital Keelakkarai",
lat: 9.23471950699242,
lng: 78.7857792890387,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9444463923", district: "Ramanathapuram"
},
 
 
{id:243,
name: "Government.Head Quarters Hospital Paramakudi",
lat: 9.5555797151553,
lng: 78.5754965801654,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9486819186", district: "Ramanathapuram"
},
 
 
{id:244,
name: "Government Hospital,Thiruvadanai",
lat: 9.78300470735734,
lng: 78.9193230951778,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9629259652", district: "Ramanathapuram"
},
 
 
{id:245,
name: "Government.Upgraded Phc,Sayalkudi,Paramakudi",
lat: 9.54389342307201,
lng: 78.5876971655619,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9994761143", district: "Ramanathapuram"
},
 
 
{id:246,
name: "Government Hospital,Rameshwaram",
lat: 9.2828308996873,
lng: 79.3120513436587,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9751453392", district: "Ramanathapuram"
},
 
 
{id:247,
name: "Government.Head Quarters Hospital,Wallajah",
lat: 12.926932012293,
lng: 79.3637618571803,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9894534634", district: "Ranipet"
},
 
 
{id:248,
name: "Dr.Sundararajan Neuro Hospital",
lat: 11.6744086120833,
lng: 78.1497611138875,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9659658111", district: "Salem"
},
 
 
{id:249,
name: "Dr. Suraksha Speciality Medical Centr",
lat: 11.6674294357742,
lng: 78.1228111035507,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "7373040635", district: "Salem"
},
 
 
{id:250,
name: "Deepam Hospital",
lat: 11.6269048694788,
lng: 78.1476716721646,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9787704400", district: "Salem"
},
 
 
{id:251,
name: "Shanmuga Hospital Private Limited",
lat: 11.6768402551182,
lng: 78.1529772013789,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Private", phone: "8754004099", district: "Salem"
},
 
 
{id:252,
name: "Universal Cancer Hospital Limited",
lat: 11.6335822045953,
lng: 78.1266995094149,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Private", phone: "6381221167", district: "Salem"
},
 
 
{id:253,
name: "Sks Hospital",
lat: 11.6700520109508,
lng: 78.143446838964,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "8883307777", district: "Salem"
},
 
 
{id:254,
name: "Eka Hospital, Fairlands",
lat: 11.6641260101666,
lng: 78.1484321125632,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "9842799639", district: "Salem"
},
 
 
{id:255,
name: "Karthik Media Centre Edappadi",
lat: 11.5821859845682,
lng: 77.8575362534018,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9382321880", district: "Salem"
},
 
 
{id:256,
name: "Priyam Speciality Hospital",
lat: 11.634443852023,
lng: 78.1240635217961,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9629921321", district: "Salem"
},
 
 
{id:257,
name: "Nitish Ge And Multispeciality Hospital",
lat: 11.6635417056224,
lng: 78.1458363061523,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9790018137", district: "Salem"
},
 
 
{id:258,
name: "Shanthi Nursing Home, Dadagapatti",
lat: 11.6407413867432,
lng: 78.1532438296012,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "9442563602", district: "Salem"
},
 
 
{id:259,
name: "Sri Gokulam Hospital",
lat: 11.6727007929634,
lng: 78.1338879093055,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9994979797", district: "Salem"
},
 
 
{id:260,
name: "Appu Venkatachalam Medical Research Ctr",
lat: 11.626490167134,
lng: 78.1394282675229,
treatments: {
medicalOncology: false,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9444575715", district: "Salem"
},
 
 
{id:261,
name: "Sundaram Multispeciality Hospital",
lat: 11.6005904503515,
lng: 78.5947600074194,
treatments: {
medicalOncology: false,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "8825958177", district: "Salem"
},
 
 
{id:262,
name: "Kurinji Hospital",
lat: 11.6770756540999,
lng: 78.1353104609919,
treatments: {
medicalOncology: false,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9443244774", district: "Salem"
},
 
 
{id:263,
name: "Kamala Hospital Agraharam",
lat: 11.6566148868587,
lng: 78.1642930594217,
treatments: {
medicalOncology: false,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9842711234", district: "Salem"
},
 
 
{id:264,
name: "Aishwaryam Speciality Hospital",
lat: 11.6716130508325,
lng: 78.1268472285823,
treatments: {
medicalOncology: false,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9443698255", district: "Salem"
},
 
 
{id:265,
name: "Aravind Hospital,Edappadi",
lat: 11.5707297577878,
lng: 77.9127311972369,
treatments: {
medicalOncology: false,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9842717351", district: "Salem"
},
 
 
{id:266,
name: "Vinayaka Mission Superspecialty Hospital",
lat: 11.5860070952851,
lng: 78.0634155413499,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "9362128563", district: "Salem"
},
 
 
{id:267,
name: "Sri Shellappa Hospital Rajaram Nagar",
lat: 11.6596555026584,
lng: 78.1549213683573,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9952401633", district: "Salem"
},
 
 
{id:268,
name: "Kiruba Hospital Rajaji Road",
lat: 11.6669944751554,
lng: 78.1560432358876,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Private", phone: "9843022961", district: "Salem"
},
 
 
{id:269,
name: "Spmm Hospital Ammapet",
lat: 11.6612019050259,
lng: 78.1920013497791,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9894550755", district: "Salem"
},
 
 
{id:270,
name: "Dharan Hospital",
lat: 11.6252554918599,
lng: 78.1452407853269,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9443259990, 994", district: "Salem"
},
 
 
{id:271,
name: "Sharon Cancer Ctr General Hsp Vinaya Rd",
lat: 11.7308808520563,
lng: 78.1720506044532,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "9787807964", district: "Salem"
},
 
 
{id:272,
name: "Srilakshmi Surgical Clinic",
lat: 10.0857517689321,
lng: 78.7757233510414,
treatments: {
medicalOncology: false,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9843019695", district: "Sivaganga"
},
 
 
{id:273,
name: "Rms Pusali Ammal Nursing Home",
lat: 10.1810425636465,
lng: 78.4211437363979,
treatments: {
medicalOncology: false,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9443218214", district: "Sivaganga"
},
 
 
{id:274,
name: "Devaki Surgical Clinic",
lat: 10.0740330879057,
lng: 78.7732715597914,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "9943339995", district: "Sivaganga"
},
 
 
{id:275,
name: "Senthil Hospital",
lat: 9.94814935845703,
lng: 78.8222101502434,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9361410220", district: "Sivaganga"
},
 
 
{id:276,
name: "Dist. Government. Head Quarters Hospital Tenkasi",
lat: 8.97077456990632,
lng: 77.303779475127,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "7373747521", district: "Tenkasi"
},
 
 
{id:277,
name: "Government Hospital Sivagiri",
lat: 9.34725144327062,
lng: 77.4329178545494,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9443043540", district: "Tenkasi"
},
 
 
{id:278,
name: "Government Hospital Sengkottai",
lat: 8.97182784400467,
lng: 77.2473899418958,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9487888777", district: "Tenkasi"
},
 
 
{id:279,
name: "Government Hospital Auikudi",
lat: 9.00163922156369,
lng: 77.3460652434354,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9791696209", district: "Tenkasi"
},
 
 
{id:280,
name: "Government Hospital Sankarankoil",
lat: 9.16728459453608,
lng: 77.5358305345144,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "8754758452", district: "Tenkasi"
},
 
 
{id:281,
name: "Government Hospital Puliangudi",
lat: 9.16946857210733,
lng: 77.3960271349923,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9698663340", district: "Tenkasi"
},
 
 
{id:282,
name: "Government Hospital Alangulam",
lat: 8.86695789478502,
lng: 77.4915474417551,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9999743488", district: "Tenkasi"
},
 
 
{id:283,
name: "Government Hospital Veerakeralampudur",
lat: 8.93908355266973,
lng: 77.4494164391702,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9578368743", district: "Tenkasi"
},
 
 
{id:284,
name: "Government Hospital Kadayanallur",
lat: 9.08439144592981,
lng: 77.3473208463511,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9600127965", district: "Tenkasi"
},
 
 
{id:285,
name: "Government Hospital Nachiyarkoil",
lat: 10.9189837364223,
lng: 79.4433475823436,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "7904151819", district: "Thanjavur"
},
 
 
{id:286,
name: "Rohini Hospital",
lat: 10.7686249785672,
lng: 79.1309823424757,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "7373705676", district: "Thanjavur"
},
 
 
{id:287,
name: "Government Hospital Papanasam",
lat: 10.9261340129225,
lng: 79.2629896264293,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9843627887", district: "Thanjavur"
},
 
 
{id:288,
name: "Thanjavur Medical College Hospital",
lat: 10.7608531811364,
lng: 79.1057239389485,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "04362-240124", district: "Thanjavur"
},
 
 
{id:289,
name: "Government Hospital,Boothalur",
lat: 10.7908001840416,
lng: 78.9779935565392,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "8220387014", district: "Thanjavur"
},
 
 
{id:290,
name: "Government Hospital Peravurani",
lat: 10.4211030067649,
lng: 79.3178312942695,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "4373252080", district: "Thanjavur"
},
 
 
{id:291,
name: "Government. Hospital, Aduthurai",
lat: 11.0140540752723,
lng: 79.4839478543748,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9443340248", district: "Thanjavur"
},
 
 
{id:292,
name: "Anu Multispeciality Hospital",
lat: 10.774821190432,
lng: 79.1377520178333,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "9443331875", district: "Thanjavur"
},
 
 
{id:293,
name: "Government Hospital Thiruvidaimaruthur",
lat: 10.9950630620408,
lng: 79.4498420663709,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9442141373", district: "Thanjavur"
},
 
 
{id:294,
name: "Government Hospital Adirampattinam",
lat: 10.3417868884335,
lng: 79.3834132425377,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9865540782", district: "Thanjavur"
},
 
 
{id:295,
name: "Meenakshi Multispeciality Hospital",
lat: 10.7452774299152,
lng: 79.1120110419348,
treatments: {
medicalOncology: false,
surgicalOncology: false,
radiationOncology: true,
},
type: "Private", phone: "7402605533", district: "Thanjavur"
},
 
 
{id:296,
name: "Government. Hospital, Thirupananthal",
lat: 11.0907659603967,
lng: 79.4527082161756,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9443485607", district: "Thanjavur"
},
 
 
{id:297,
name: "Dr R K Nursing Home",
lat: 10.7752337901812,
lng: 79.1372704444235,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "9443150520", district: "Thanjavur"
},
 
 
{id:298,
name: "Mr Hospital",
lat: 10.7643086905877,
lng: 79.1287891227447,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9443137228", district: "Thanjavur"
},
 
 
{id:299,
name: "Mvk Nursing Home",
lat: 10.7872914167686,
lng: 79.1336415486897,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "9788988933", district: "Thanjavur"
},
 
 
{id:300,
name: "Thanjavoor Cancer Hospital",
lat: 10.7341114312442,
lng: 79.1121387917131,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9442207580", district: "Thanjavur"
},
 
 
{id:301,
name: "Kg Multi Speciality Hospital",
lat: 10.7767035620662,
lng: 79.1367212514878,
treatments: {
medicalOncology: false,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9842436532", district: "Thanjavur"
},
 
 
{id:302,
name: "Government. Pattukottai Hospital",
lat: 10.421103832383,
lng: 79.3178530744263,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9443256390", district: "Thanjavur"
},
 
 
{id:303,
name: "Government. Raja Mirasdar Hospital",
lat: 10.7854535749165,
lng: 79.1365750370985,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9444138478", district: "Thanjavur"
},
 
 
{id:304,
name: "Vishnu Caner Centre And Research Ins",
lat: 10.7403781926281,
lng: 79.1117782847878,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Private", phone: "9443601021", district: "Thanjavur"
},
 
 
{id:305,
name: "Government.Head Quarters Hospital Kumbakonam",
lat: 10.9692391835842,
lng: 79.3856517062254,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9486218481", district: "Thanjavur"
},
 
 
{id:306,
name: "Government Hospital,Orathanadu",
lat: 10.9526579196971,
lng: 76.9731036164164,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "7358128826", district: "Thanjavur"
},
 
 
{id:307,
name: "Government Hospital Ayyampettai",
lat: 10.8956913109539,
lng: 79.1896736622281,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9080659261", district: "Thanjavur"
},
 
 
{id:308,
name: "Government. Hospital, Thiruvaiyaru",
lat: 10.8840720213642,
lng: 79.1096981203638,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9865124323", district: "Thanjavur"
},
 
 
{id:309,
name: "National Pharma Hospital",
lat: 10.7555307900511,
lng: 79.0976086618074,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "9443860890", district: "Thanjavur"
},
 
 
{id:310,
name: "T N K H N V Hospital,",
lat: 10.0152851320418,
lng: 77.480964958282,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9442462662", district: "Theni"
},
 
 
{id:311,
name: "Vidhya Hospital",
lat: 10.0007657214212,
lng: 77.4676435299264,
treatments: {
medicalOncology: false,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "8072556521", district: "Theni"
},
 
 
{id:312,
name: "Nrt Hospital",
lat: 10.0061577314588,
lng: 77.4865731766284,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "9894447717", district: "Theni"
},
 
 
{id:313,
name: "Government. Head Quarters Hospital Kovilpatti",
lat: 9.17599797671961,
lng: 77.8744917615787,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9842108804", district: "Thoothukudi"
},
 
 
{id:314,
name: "Government Hospital Kayalpattanam",
lat: 8.56751333582174,
lng: 78.1207489076448,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9442051485", district: "Thoothukudi"
},
 
 
{id:315,
name: "Thoothukudi Medical College",
lat: 8.78714587092676,
lng: 78.1171166928944,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9443282398", district: "Thoothukudi"
},
 
 
{id:316,
name: "Government Hospital Ettayapuram",
lat: 9.14800584618087,
lng: 77.9916168367462,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9442054871", district: "Thoothukudi"
},
 
 
{id:317,
name: "Government Hospital Srivaikundam",
lat: 8.62880147974338,
lng: 77.912403243537,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9443403252", district: "Thoothukudi"
},
 
 
{id:318,
name: "Government Hospital Sathankulam",
lat: 8.44304494014448,
lng: 77.909545857272,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9443269265", district: "Thoothukudi"
},
 
 
{id:319,
name: "Government Hospital Vilathikulam",
lat: 9.12901590750812,
lng: 78.1682458508962,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "8940654935", district: "Thoothukudi"
},
 
 
{id:320,
name: "Government Hospital Kalankudiyirrupu",
lat: 8.43032037713122,
lng: 78.0331970756025,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9486537530", district: "Thoothukudi"
},
 
 
{id:321,
name: "Government Hospital Ottapidaram",
lat: 8.90987016660604,
lng: 78.0213643239864,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9486083975", district: "Thoothukudi"
},
 
 
{id:322,
name: "Government Hospital,Thiruchendur",
lat: 8.4997546316192,
lng: 78.1184645169928,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9443625949", district: "Thoothukudi"
},
 
 
{id:323,
name: "Jeyam Multispeciality Hospital",
lat: 10.8290916882477,
lng: 78.6861787332391,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "9443167630", district: "Tiruchirappalli"
},
 
 
{id:324,
name: "Government. Hospital Srirangam",
lat: 10.8570021685539,
lng: 78.6914701236079,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9994301051", district: "Tiruchirappalli"
},
 
 
{id:325,
name: "Silverline Speciality Hospital",
lat: 10.8246809421728,
lng: 78.6819301717415,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9585068980", district: "Tiruchirappalli"
},
 
 
{id:326,
name: "Government Hospital Thuvakudi",
lat: 10.7533523067731,
lng: 78.8219058138711,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9952512035", district: "Tiruchirappalli"
},
 
 
{id:327,
name: "Government Hospital Thottiyam",
lat: 10.9838329748873,
lng: 78.3386818827429,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9444202309", district: "Tiruchirappalli"
},
 
 
{id:328,
name: "Maruti Hospital,Thennur",
lat: 10.8101349016181,
lng: 78.6805177938977,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "9884903187", district: "Tiruchirappalli"
},
 
 
{id:329,
name: "Srinivasan Super Speciality Hospital",
lat: 10.9295227004646,
lng: 78.746888356278,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9787332081", district: "Tiruchirappalli"
},
 
 
{id:330,
name: "Dr.G.Viswanathan Speciality Hospitals",
lat: 10.8239968779543,
lng: 78.6998756391379,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Private", phone: "9842455566", district: "Tiruchirappalli"
},
 
 
{id:331,
name: "Harshamitra Super Speciality Cancer Centre",
lat: 10.7039508366181,
lng: 78.6237446949732,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Private", phone: "9444014312", district: "Tiruchirappalli"
},
 
 
{id:332,
name: "G V N Hospital Pvt Ltd",
lat: 10.8243428165655,
lng: 78.6950910753795,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Private", phone: "9943105005", district: "Tiruchirappalli"
},
 
 
{id:333,
name: "Government Hospital Manachanallur",
lat: 10.9151498772489,
lng: 78.7011022819042,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "7538863433", district: "Tiruchirappalli"
},
 
 
{id:334,
name: "Government Hospital Omanthur",
lat: 11.033308060622,
lng: 78.6721964710409,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9443694460", district: "Tiruchirappalli"
},
 
 
{id:335,
name: "Amrish Oncology",
lat: 10.8143259634604,
lng: 78.6800909947711,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: true,
},
type: "Private", phone: "7622006950", district: "Tiruchirappalli"
},
 
 
{id:336,
name: "K.A.P.Viswanathan Government. Medical College",
lat: 10.7974331584888,
lng: 78.6767284470985,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9443003355", district: "Tiruchirappalli"
},
 
 
{id:337,
name: "Dayal Nursing Home,Manaparai",
lat: 10.607462408697,
lng: 78.4250981261195,
treatments: {
medicalOncology: false,
surgicalOncology: true,
radiationOncology: true,
},
type: "Private", phone: "9443160041", district: "Tiruchirappalli"
},
 
 
{id:338,
name: "Kavery Medical Centre And Hospital",
lat: 10.8167497507008,
lng: 78.6810635944366,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Private", phone: "9361388806", district: "Tiruchirappalli"
},
 
 
{id:339,
name: "Government Hospital,Musiri",
lat: 10.9497390770847,
lng: 78.4449051833538,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9042826972", district: "Tiruchirappalli"
},
 
 
{id:340,
name: "Kmc Speciality",
lat: 10.8022679349423,
lng: 78.6801192100143,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9344503284", district: "Tiruchirappalli"
},
 
 
{id:341,
name: "Government Hospital Thuraiyur",
lat: 11.1520207580367,
lng: 78.6120721399286,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9865144600", district: "Tiruchirappalli"
},
 
 
{id:342,
name: "Sinduja Hospital,Manaparai",
lat: 10.6039419620012,
lng: 78.4169275146785,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "9443163101", district: "Tiruchirappalli"
},
 
 
{id:343,
name: "A. J. Hospital",
lat: 10.6056483883745,
lng: 78.4200407220699,
treatments: {
medicalOncology: false,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9842472470", district: "Tiruchirappalli"
},
 
 
{id:344,
name: "Sri Kumaran Hospital",
lat: 10.6056370286146,
lng: 78.4289546856054,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Private", phone: "9865420095", district: "Tiruchirappalli"
},
 
 
{id:345,
name: "Sugam Hospital",
lat: 10.8627453133549,
lng: 78.7046162920917,
treatments: {
medicalOncology: false,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9944555522", district: "Tiruchirappalli"
},
 
 
{id:346,
name: "Government. Head Quarters Hospital Manaparai",
lat: 10.6041884983304,
lng: 78.4377410487343,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9940777157", district: "Tiruchirappalli"
},
 
 
{id:347,
name: "Government Hospital Thuvarankurichi",
lat: 10.3854329995036,
lng: 78.3794291419193,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "6380603540", district: "Tiruchirappalli"
},
 
 
{id:348,
name: "Government Hospital Lalgudi",
lat: 10.8788747747537,
lng: 78.8184827794274,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "7598926522", district: "Tiruchirappalli"
},

{id:349,
name: "Gkm Hospital,Manaparai",
lat: 10.6124043401174,
lng: 78.4260030096035,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Private", phone: "9944563568", district: "Tiruchirappalli"
},
 
 
{id:350,
name: "Government Hospital Cheranmahadevi",
lat: 8.68287222455594,
lng: 77.5640229738723,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9944654442", district: "Tirunelveli"
},
 
 
{id:351,
name: "Government.Head Quarters,Vallioor",
lat: 8.39775198178458,
lng: 77.5947254258622,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "8903674811", district: "Tirunelveli"
},
 
 
{id:352,
name: "Government Hospital Koodankulam",
lat: 8.20115643008217,
lng: 77.7105729981287,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9489936884", district: "Tirunelveli"
},
 
 
{id:353,
name: "Government Hospital Radhapuram",
lat: 8.26846508791815,
lng: 77.6864488659065,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9789390997", district: "Tirunelveli"
},
 
 
{id:354,
name: "Government Pathamadai Chc",
lat: 8.67175895982349,
lng: 77.5871068159804,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "4622552450", district: "Tirunelveli"
},
 
 
{id:355,
name: "Government Hospital Kalakad",
lat: 8.52134706645884,
lng: 77.5574533498906,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9443080854", district: "Tirunelveli"
},
 
 
{id:356,
name: "Government Hospital Nanguneri",
lat: 8.49105888656401,
lng: 77.6595429988036,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9840509959", district: "Tirunelveli"
},
 
 
{id:357,
name: "Sudharson Platinum Hospital",
lat: 8.72983081322502,
lng: 77.7195458917179,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9443328950", district: "Tirunelveli"
},
 
 
{id:358,
name: "Government Hospital Melapalayam",
lat: 8.7058469403102,
lng: 77.7100394286719,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9865690769", district: "Tirunelveli"
},
 
 
{id:359,
name: "Shifa Hospital",
lat: 8.70548332774013,
lng: 77.7129760410803,
treatments: {
medicalOncology: false,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9443152816", district: "Tirunelveli"
},
 
 
{id:360,
name: "Sri Kauvery Medical Care India",
lat: 8.73364444978429,
lng: 77.7229843626641,
treatments: {
medicalOncology: false,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9962439498", district: "Tirunelveli"
},
 
 
{id:361,
name: "Government Hospital,Ambasamudiram",
lat: 8.71205200508172,
lng: 77.4329416069879,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "8754093555", district: "Tirunelveli"
},
 
 
{id:362,
name: "Annai Velankanni Nursing Home",
lat: 8.72712069883958,
lng: 77.7301838151228,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "7540094100", district: "Tirunelveli"
},
 
 
{id:363,
name: "Tirunelveli Medical College Hospital",
lat: 8.71174176376885,
lng: 77.7508134536333,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9843051582", district: "Tirunelveli"
},
 
 
{id:365,
name: "Deepa Hospital",
lat: 11.1121792776949,
lng: 77.3368589749495,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9843397494", district: "Tiruppur"
},
 
 
{id:366,
name: "Sri Saran Hospital",
lat: 11.1488612653638,
lng: 77.3467445394354,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9443347975", district: "Tiruppur"
},
 
 
{id:367,
name: "L.G Medical Centre,Kangeyam Road",
lat: 11.0999767280401,
lng: 77.3902521712897,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9843082692", district: "Tiruppur"
},
 
 
{id:368,
name: "Sri Kumaran Hospital",
lat: 11.1307515943191,
lng: 77.341250400309,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9842201500", district: "Tiruppur"
},
 
 
{id:369,
name: "Tirupur Aadhar Medical Center",
lat: 11.1114268943776,
lng: 77.3383967696598,
treatments: {
medicalOncology: false,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9443292767", district: "Tiruppur"
},
 
 
{id:370,
name: "Revathi Medical Centr",
lat: 11.1202596989577,
lng: 77.3292187475457,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "9842247997", district: "Tiruppur"
},
 
 
{id:371,
name: "Government Medical College",
lat: 13.1382790163169,
lng: 79.8921042367427,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9840299870", district: "Tiruvallur"
},
 
 
{id:372,
name: "The Madras Medical Mission",
lat: 13.0859355487005,
lng: 80.1871033051242,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Private", phone: "9940593999", district: "Tiruvallur"
},
 
 
{id:373,
name: "Government. Hospital, Madhavaram",
lat: 13.1634515226406,
lng: 80.2431017741108,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "7358130083", district: "Tiruvallur"
},
 
 
{id:374,
name: "Government Hospital,Podadurpet",
lat: 13.2790806123613,
lng: 79.4822281217459,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "7358130121", district: "Tiruvallur"
},
 
 
{id:375,
name: "Government Hospital, Uthukottai",
lat: 13.3326263675102,
lng: 79.8983464759259,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "7358130220", district: "Tiruvallur"
},
 
 
{id:376,
name: "Government Hospital, Pallipattyu",
lat: 13.3368986046244,
lng: 79.4661352509541,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "7358130097", district: "Tiruvallur"
},
 
 
{id:377,
name: "Government. Hospital, Avadi",
lat: 13.1174333456535,
lng: 80.0976100819924,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "7358130064", district: "Tiruvallur"
},
 
 
{id:378,
name: "Government Hospital,Madhavaram Uchc",
lat: 13.1480956187697,
lng: 80.2300826603833,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "7299142026", district: "Tiruvallur"
},
 
 
{id:379,
name: "Acs Medical College",
lat: 13.0579413772787,
lng: 80.1272610532174,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "9840058930", district: "Tiruvallur"
},
 
 
{id:380,
name: "Government. Hospital, Poonamallee",
lat: 13.0504803151576,
lng: 80.099484348775,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "7358130136", district: "Tiruvallur"
},
 
 
{id:381,
name: "Government Hospital Thiruvotriyur",
lat: 13.1575574532531,
lng: 80.3011761028886,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "7358130184", district: "Tiruvallur"
},
 
 
{id:382,
name: "Government Hospital, Ponneri",
lat: 13.3330846653524,
lng: 80.1974318045891,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "7358130128", district: "Tiruvallur"
},
 
 
{id:383,
name: "Government Hospital,Pazhaverkadu",
lat: 13.4190217416245,
lng: 80.3178336250309,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "7358130109", district: "Tiruvallur"
},
 
 
{id:384,
name: "Government. Head Quarters Hospital, Tiruthani,",
lat: 13.1795886036701,
lng: 79.6118532692388,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "7358130198", district: "Tiruvallur"
},
 
 
{id:385,
name: "Government Hospital, Gummudipundi",
lat: 13.4161037911216,
lng: 80.129596876326,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "7358130075", district: "Tiruvallur"
},
 
 
{id:386,
name: "Government Hospital, Thandarampet",
lat: 12.1621277717148,
lng: 78.9423391163237,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9443846402", district: "Tiruvannamalai"
},
 
 
{id:387,
name: "Government Hospital, Chetpet",
lat: 12.4663051737554,
lng: 79.3494575715651,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9840286486", district: "Tiruvannamalai"
},
 
 
{id:388,
name: "Government. Hospital, Vembakkam",
lat: 12.7879811601892,
lng: 79.5863768440252,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9786908655", district: "Tiruvannamalai"
},
 
 
{id:389,
name: "Government. Medical Coll And Hospital",
lat: 12.2737114521698,
lng: 79.0778099297417,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9443269983", district: "Tiruvannamalai"
},
 
 
{id:390,
name: "Government. Hospital Vandavasi ",
lat: 12.5049416427857,
lng: 79.613557094838,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9080528904", district: "Tiruvannamalai"
},
 
 
{id:391,
name: "Government. Arani Hospital",
lat: 12.6695117960882,
lng: 79.2802009027249,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9787051518", district: "Tiruvannamalai"
},
 
 
{id:392,
name: "Government. Hospital, Thanipadi",
lat: 12.1086800385256,
lng: 78.837116110454,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9597610120", district: "Tiruvannamalai"
},
 
 
{id:393,
name: "Government. Head Quarters Hospital, Cheyyar",
lat: 12.6641259836219,
lng: 79.5414882853782,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9842091542", district: "Tiruvannamalai"
},
 
 
{id:394,
name: "Arunai Hospital",
lat: 12.1900148048198,
lng: 79.0817095001315,
treatments: {
medicalOncology: false,
surgicalOncology: true,
radiationOncology: false,
},
type: "Government", phone: "9994715487", district: "Tiruvannamalai"
},
 
 
{id:395,
name: "Government Hospital,Polur",
lat: 12.5146064122895,
lng: 79.1087195161661,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "04181-223048", district: "Tiruvannamalai"
},
 
 
{id:396,
name: "Government Hospital, Chengam",
lat: 12.3054915752564,
lng: 78.795975402902,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9176907690", district: "Tiruvannamalai"
},
 
 
{id:397,
name: "Lakshana Hospital",
lat: 10.7755224498957,
lng: 79.6285950690232,
treatments: {
medicalOncology: false,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9842436919", district: "Tiruvarur"
},
 
 
{id:398,
name: "Thiruvarur Medical Centre",
lat: 10.7748701937845,
lng: 79.6280903115457,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "8754036913", district: "Tiruvarur"
},
 
 
{id:399,
name: "Kumaran Hospital",
lat: 12.9459887977609,
lng: 79.1372716194391,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "9843045751", district: "Vellore"
},
 
 
{id:400,
name: "Christian Medical College And Hospital",
lat: 12.924408508225,
lng: 79.1353155936803,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Private", phone: "0416 - 2282010", district: "Vellore"
},
 
 
{id:401,
name: "Indira Nursing Home",
lat: 12.9244462380654,
lng: 79.1401739300417,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "9842342525", district: "Vellore"
},
 
 
{id:402,
name: "Sri Narayani Hospital And Res Ctr",
lat: 12.8688551141441,
lng: 79.089250670692,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: false,
},
type: "Private", phone: "9003916841", district: "Vellore"
},
 
 
{id:403,
name: "Government. Hospital, Arcot",
lat: 12.9039667231139,
lng: 79.3334015675568,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "7708897573", district: "Vellore"
},
 
 
{id:404,
name: "Government Hospital Sholingur",
lat: 13.1122604399058,
lng: 79.4204800027337,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9884431726", district: "Vellore"
},
 
 
{id:405,
name: "Government. Hospital Arakonam",
lat: 13.0849404173564,
lng: 79.6647358663668,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "7639134454", district: "Vellore"
},
 
 
{id:406,
name: "Government Hospital, Gingee",
lat: 12.2518621100542,
lng: 79.4196817445792,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9042828283", district: "Viluppuram"
},
 
 
{id:407,
name: "Government Hospital Vikravandi,",
lat: 12.0392133943272,
lng: 79.549926356038,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "8608046512", district: "Viluppuram"
},
 
 
{id:408,
name: "Government. Hospital.",
lat: 11.9416688322793,
lng: 79.48626880506,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9841259871", district: "Viluppuram"
},
 
 
{id:409,
name: "E.S.Hospital",
lat: 11.9364113984178,
lng: 79.4848750297788,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "9443147949", district: "Viluppuram"
},
 
 
{id:410,
name: "Government.Head Quarters,Tindivanam",
lat: 12.2411599104689,
lng: 79.6517236909273,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9952945647", district: "Viluppuram"
},
 
 
{id:411,
name: "Government Hospital Mugaiyur Phc",
lat: 11.9767008972798,
lng: 79.3061409524632,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9384362777", district: "Viluppuram"
},
 
 
{id:412,
name: "E S Nursing College Hospital",
lat: 12.0803979948142,
lng: 79.5568267882182,
treatments: {
medicalOncology: true,
surgicalOncology: false,
radiationOncology: false,
},
type: "Private", phone: "9443147949", district: "Viluppuram"
},
 
 
{id:413,
name: "Government.Of Villupuram Med Coll And Hsp",
lat: 11.9930908179617,
lng: 79.5174578628021,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9942520654", district: "Viluppuram"
},
 
 
{id:414,
name: "Government Hospital Marakanam",
lat: 12.1974980585511,
lng: 79.9494067743132,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9629300668", district: "Viluppuram"
},
 
 
{id:415,
name: "Government Hospital,Watrap",
lat: 9.64009821127628,
lng: 77.6354653165667,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9894529051", district: "Virudhunagar"
},
 
 
{id:416,
name: "Government Hospital,Kariapatti",
lat: 9.6740096134495,
lng: 78.0962029690818,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9443503351", district: "Virudhunagar"
},
 
 
{id:417,
name: "Government. Hospital, Srivilliputhur,",
lat: 9.51353137393722,
lng: 77.6326662575082,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9442058582", district: "Virudhunagar"
},
 
 
{id:418,
name: "Government.Hospital Thiruchuli",
lat: 9.53572267786664,
lng: 78.2035831710409,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9443271802", district: "Virudhunagar"
},
 
 
{id:419,
name: "Government. Head Quarters Hospital, Arupukottai",
lat: 9.50162638600331,
lng: 78.0973000153638,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9443444136", district: "Virudhunagar"
},
 
 
{id:420,
name: "Government. Hospital, Thiruthangal",
lat: 9.48802700453583,
lng: 77.8141387220717,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9843650105", district: "Virudhunagar"
},
 
 
{id:421,
name: "Government Hospital,Sattur",
lat: 9.36527651313168,
lng: 77.9126828095994,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "8778966106", district: "Virudhunagar"
},
 
 
{id:422,
name: "Government Medical College",
lat: 9.56263933452002,
lng: 77.9481630533276,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9843272876", district: "Virudhunagar"
},
 
 
{id:423,
name: "Government Hospital Kallamanayakanpati",
lat: 9.37757215542227,
lng: 77.710263982995,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9442665595", district: "Virudhunagar"
},
 
 
{id:424,
name: "Government Hospital,Sivakasi",
lat: 9.46058117293172,
lng: 77.786297708075,
treatments: {
medicalOncology: true,
surgicalOncology: true,
radiationOncology: true,
},
type: "Government", phone: "9843972362", district: "Virudhunagar"
},
];