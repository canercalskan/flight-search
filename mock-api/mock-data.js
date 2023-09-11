const airports = [
    {
     "id": 1,
     "name": "İstanbul Havalimanı",
     "code": "IST",
     "country": "Turkey",
     "city": "İstanbul"
    },
    {
     "id": 2,
     "name": "Ankara Esenboğa Havalimanı",
     "code": "ESB",
     "country": "Turkey",
     "city": "Ankara"
    },
    {
     "id": 3,
     "name": "İzmir Adnan Menderes Havalimanı",
     "code": "ADB",
     "country": "Turkey",
     "city": "İzmir"
    },
    {
     "id": 4,
     "name": "Antalya Havalimanı",
     "code": "AYT",
     "country": "Turkey",
     "city": "Antalya"
    },
    {
     "id": 5,
     "name": "Adana Şakirpaşa Havalimanı",
     "code": "ADA",
     "country": "Turkey",
     "city": "Adana"
    },
    {
     "id": 6,
     "name": "Dalaman Havalimanı",
     "code": "DLM",
     "country": "Turkey",
     "city": "Muğla"
    },
    {
     "id": 7,
     "name": "Trabzon Havalimanı",
     "code": "TZX",
     "country": "Turkey",
     "city": "Trabzon"
    },
    {
     "id": 8,
     "name": "Bodrum Milas Havalimanı",
     "code": "BJV",
     "country": "Turkey",
     "city": "Muğla"
    },
    {
     "id": 9,
     "name": "Gaziantep Oğuzeli Havalimanı",
     "code": "GZT",
     "country": "Turkey",
     "city": "Gaziantep"
    },
    {
     "id": 10,
     "name": "Erzurum Havalimanı",
     "code": "ERZ",
     "country": "Turkey",
     "city": "Erzurum"
    },
    {
     "id": 11,
     "name": "Diyarbakır Havalimanı",
     "code": "DIY",
     "country": "Turkey",
     "city": "Diyarbakır"
    },
    {
     "id": 12,
     "name": "Eskişehir Anadolu Havalimanı",
     "code": "AOE",
     "country": "Turkey",
     "city": "Eskişehir"
    },
    {
     "id": 13,
     "name": "Kayseri Erkilet Havalimanı",
     "code": "ASR",
     "country": "Turkey",
     "city": "Kayseri"
    },
    {
     "id": 14,
     "name": "Nevşehir Kapadokya Havalimanı",
     "code": "NAV",
     "country": "Turkey",
     "city": "Nevşehir"
    },
    {
     "id": 15,
     "name": "Samsun Çarşamba Havalimanı",
     "code": "SZF",
     "country": "Turkey",
     "city": "Samsun"
    },
    {
     "id": 16,
     "name": "Hatay Havalimanı",
     "code": "HTY",
     "country": "Turkey",
     "city": "Hatay"
    },
    {
     "id": 17,
     "name": "Bursa Yenişehir Havalimanı",
     "code": "YEI",
     "country": "Turkey",
     "city": "Bursa"
    },
    {
     "id": 18,
     "name": "Konya Havalimanı",
     "code": "KYA",
     "country": "Turkey",
     "city": "Konya"
    },
    {
     "id": 19,
     "name": "Gazipaşa-Alanya Havalimanı",
     "code": "GZP",
     "country": "Turkey",
     "city": "Antalya"
    },
    {
     "id": 20,
     "name": "Malatya Erhaç Havalimanı",
     "code": "MLX",
     "country": "Turkey",
     "city": "Malatya"
    },
    {
     "id": 21,
     "name": "John F. Kennedy International Airport",
     "code": "JFK",
     "country": "United States",
     "city": "New York"
    },
    {
     "id": 22,
     "name": "Los Angeles International Airport",
     "code": "LAX",
     "country": "United States",
     "city": "Los Angeles"
    },
    {
     "id": 23,
     "name": "Heathrow Airport",
     "code": "LHR",
     "country": "United Kingdom",
     "city": "London"
    },
    {
     "id": 24,
     "name": "Narita International Airport",
     "code": "NRT",
     "country": "Japan",
     "city": "Tokyo"
    },
    {
     "id": 25,
     "name": "Sydney Airport",
     "code": "SYD",
     "country": "Australia",
     "city": "Sydney"
    },
    {
     "id": 26,
     "name": "Charles de Gaulle Airport",
     "code": "CDG",
     "country": "France",
     "city": "Paris"
    },
    {
     "id": 27,
     "name": "Dubai International Airport",
     "code": "DXB",
     "country": "United Arab Emirates",
     "city": "Dubai"
    },
    {
     "id": 28,
     "name": "Beijing Capital International Airport",
     "code": "PEK",
     "country": "China",
     "city": "Beijing"
    },
    {
     "id": 29,
     "name": "Frankfurt Airport",
     "code": "FRA",
     "country": "Germany",
     "city": "Frankfurt"
    },
    {
     "id": 30,
     "name": "Toronto Pearson International Airport",
     "code": "YYZ",
     "country": "Canada",
     "city": "Toronto"
    },
    {
     "id": 31,
     "name": "Changi Airport",
     "code": "SIN",
     "country": "Singapore",
     "city": "Singapore"
    },
    {
     "id": 32,
     "name": "Incheon International Airport",
     "code": "ICN",
     "country": "South Korea",
     "city": "Seoul"
    },
    {
     "id": 33,
     "name": "Munich Airport",
     "code": "MUC",
     "country": "Germany",
     "city": "Munich"
    },
    {
     "id": 34,
     "name": "Hartsfield-Jackson Atlanta International Airport",
     "code": "ATL",
     "country": "United States",
     "city": "Atlanta"
    },
    {
     "id": 35,
     "name": "Suvarnabhumi Airport",
     "code": "BKK",
     "country": "Thailand",
     "city": "Bangkok"
    },
    {
     "id": 36,
     "name": "Benito Juárez International Airport",
     "code": "MEX",
     "country": "Mexico",
     "city": "Mexico City"
    },
    {
     "id": 37,
     "name": "Jomo Kenyatta International Airport",
     "code": "NBO",
     "country": "Kenya",
     "city": "Nairobi"
    },
    {
     "id": 38,
     "name": "O'Hare International Airport",
     "code": "ORD",
     "country": "United States",
     "city": "Chicago"
    },
    {
     "id": 39,
     "name": "Indira Gandhi International Airport",
     "code": "DEL",
     "country": "India",
     "city": "New Delhi"
    },
    {
     "id": 40,
     "name": "Kuala Lumpur International Airport",
     "code": "KUL",
     "country": "Malaysia",
     "city": "Kuala Lumpur"
    },
    {
     "id": 41,
     "name": "Leonardo da Vinci-Fiumicino Airport",
     "code": "FCO",
     "country": "Italy",
     "city": "Rome"
    },
    {
     "id": 42,
     "name": "Cairo International Airport",
     "code": "CAI",
     "country": "Egypt",
     "city": "Cairo"
    },
    {
     "id": 43,
     "name": "Shanghai Pudong International Airport",
     "code": "PVG",
     "country": "China",
     "city": "Shanghai"
    },
    {
     "id": 44,
     "name": "Murtala Muhammed International Airport",
     "code": "LOS",
     "country": "Nigeria",
     "city": "Lagos"
    },
    {
     "id": 45,
     "name": "Seattle-Tacoma International Airport",
     "code": "SEA",
     "country": "United States",
     "city": "Seattle"
    },
    {
     "id": 46,
     "name": "Kansai International Airport",
     "code": "KIX",
     "country": "Japan",
     "city": "Osaka"
    },
    {
     "id": 47,
     "name": "Copenhagen Airport",
     "code": "CPH",
     "country": "Denmark",
     "city": "Copenhagen"
    },
    {
     "id": 48,
     "name": "Johannesburg-OR Tambo International Airport",
     "code": "JNB",
     "country": "South Africa",
     "city": "Johannesburg"
    },
    {
     "id": 49,
     "name": "Hamad International Airport",
     "code": "DOH",
     "country": "Qatar",
     "city": "Doha"
    },
    {
     "id": 50,
     "name": "Adolfo Suárez Madrid-Barajas Airport",
     "code": "MAD",
     "country": "Spain",
     "city": "Madrid"
    },
    {
     "id": 51,
     "name": "Kempegowda International Airport",
     "code": "BLR",
     "country": "India",
     "city": "Bangalore"
    },
    {
     "id": 52,
     "name": "Dublin Airport",
     "code": "DUB",
     "country": "Ireland",
     "city": "Dublin"
    },
    {
     "id": 53,
     "name": "Abu Dhabi International Airport",
     "code": "AUH",
     "country": "United Arab Emirates",
     "city": "Abu Dhabi"
    },
    {
     "id": 54,
     "name": "Denver International Airport",
     "code": "DEN",
     "country": "United States",
     "city": "Denver"
    },
    {
     "id": 55,
     "name": "Kuala Namu International Airport",
     "code": "KNO",
     "country": "Indonesia",
     "city": "Medan"
    },
    {
     "id": 56,
     "name": "Dubrovnik Airport",
     "code": "DBV",
     "country": "Croatia",
     "city": "Dubrovnik"
    },
    {
     "id": 57,
     "name": "Cancún International Airport",
     "code": "CUN",
     "country": "Mexico",
     "city": "Cancún"
    },
    {
     "id": 58,
     "name": "Vienna International Airport",
     "code": "VIE",
     "country": "Austria",
     "city": "Vienna"
    },
    {
     "id": 59,
     "name": "Mactan-Cebu International Airport",
     "code": "CEB",
     "country": "Philippines",
     "city": "Cebu"
    },
    {
     "id": 60,
     "name": "Dubai World Central - Al Maktoum International Airport",
     "code": "DWC",
     "country": "United Arab Emirates",
     "city": "Dubai"
    }
]

module.exports = airports