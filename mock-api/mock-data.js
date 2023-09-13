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


const flights = [
    {
        "flight_id": 1,
        "origin_airport": "İstanbul Havalimanı",
        "destination_airport": "Ankara Esenboğa Havalimanı",
        "flight_date": 'Sep 16, 2023',
        "flight_duration": 2,
        "departure_time": "08:00",
        "arrival_time": "10:00",
        "flight_price": "250.00"
    },

    {
        "flight_id": 2,
        "origin_airport": "İzmir Adnan Menderes Havalimanı",
        "destination_airport": "Antalya Havalimanı",
        "flight_date": 'Sep 16, 2023',
        "flight_duration": 1,
        "departure_time": "09:30",
        "arrival_time": "10:30",
        "flight_price": "120.50"
    },

    {
        "flight_id": 3,
        "origin_airport": "Adana Şakirpaşa Havalimanı",
        "destination_airport": "Dalaman Havalimanı",
        "flight_date": 'Sep 17, 2023',
        "flight_duration": 1,
        "departure_time": "11:15",
        "arrival_time": "12:15",
        "flight_price": "95.75"
    },
    {
        "flight_id": 4,
        "origin_airport": "Trabzon Havalimanı",
        "destination_airport": "Bodrum Milas Havalimanı",
        "flight_date": 'Sep 17, 2023',
        "flight_duration": 2,
        "departure_time": "13:45",
        "arrival_time": "15:45",
        "flight_price": "200.00"
    },
    {
        "flight_id": 5,
        "origin_airport": "Gaziantep Oğuzeli Havalimanı",
        "destination_airport": "Erzurum Havalimanı",
        "flight_date": 'Sep 17, 2023',
        "flight_duration": 2,
        "departure_time": "16:30",
        "arrival_time": "18:30",
        "flight_price": "180.25"
    },
    {
        "flight_id": 6,
        "origin_airport": "Diyarbakır Havalimanı",
        "destination_airport": "Eskişehir Anadolu Havalimanı",
        "flight_date": 'Sep 17, 2023',
        "flight_duration": 1,
        "departure_time": "19:20",
        "arrival_time": "20:20",
        "flight_price": "110.00"
    },
    {
        "flight_id": 7,
        "origin_airport": "Kayseri Erkilet Havalimanı",
        "destination_airport": "Nevşehir Kapadokya Havalimanı",
        "flight_date": 'Sep 17, 2023',
        "flight_duration": 0.5,
        "departure_time": "21:00",
        "arrival_time": "21:30",
        "flight_price": "75.50"
    },
    {
        "flight_id": 8,
        "origin_airport": "Samsun Çarşamba Havalimanı",
        "destination_airport": "Hatay Havalimanı",
        "flight_date": 'Sep 17, 2023',
        "flight_duration": 1.5,
        "departure_time": "22:15",
        "arrival_time": "23:45",
        "flight_price": "160.75"
    },
    {
        "flight_id": 9,
        "origin_airport": "Bursa Yenişehir Havalimanı",
        "destination_airport": "Konya Havalimanı",
        "flight_date": 'Sep 17, 2023',
        "flight_duration": 1.5,
        "departure_time": "08:30",
        "arrival_time": "10:00",
        "flight_price": "140.25"
    },
    {
        "flight_id": 10,
        "origin_airport": "Gazipaşa-Alanya Havalimanı",
        "destination_airport": "Malatya Erhaç Havalimanı",
        "flight_date": 'Sep 17, 2023',
        "flight_duration": 1.5,
        "departure_time": "11:30",
        "arrival_time": "13:00",
        "flight_price": "135.80"
    },
    {
        "flight_id": 11,
        "origin_airport": "John F. Kennedy International Airport",
        "destination_airport": "Los Angeles International Airport",
        "flight_date": 'Sep 17, 2023',
        "flight_duration": 10,
        "departure_time": "14:30",
        "arrival_time": "00:30",
        "flight_price": "800.00"
    },
    {
        "flight_id": 12,
        "origin_airport": "Heathrow Airport",
        "destination_airport": "Narita International Airport",
        "flight_date": 'Sep 18, 2023',
        "flight_duration": 11,
        "departure_time": "07:45",
        "arrival_time": "19:45",
        "flight_price": "850.50"
    },
    {
        "flight_id": 13,
        "origin_airport": "Sydney Airport",
        "destination_airport": "Charles de Gaulle Airport",
        "flight_date": 'Sep 18, 2023',
        "flight_duration": 21,
        "departure_time": "10:00",
        "arrival_time": "07:00",
        "flight_price": "1250.00"
    },
    {
        "flight_id": 14,
        "origin_airport": "Dubai International Airport",
        "destination_airport": "Beijing Capital International Airport",
        "flight_date": 'Sep 18, 2023',
        "flight_duration": 8,
        "departure_time": "15:30",
        "arrival_time": "23:30",
        "flight_price": "650.75"
    },
    {
        "flight_id": 15,
        "origin_airport": "Frankfurt Airport",
        "destination_airport": "Toronto Pearson International Airport",
        "flight_date": 'Sep 18, 2023',
        "flight_duration": 8.5,
        "departure_time": "09:15",
        "arrival_time": "17:45",
        "flight_price": "720.25"
    },
    {
        "flight_id": 16,
        "origin_airport": "Changi Airport",
        "destination_airport": "Incheon International Airport",
        "flight_date": 'Sep 18, 2023',
        "flight_duration": 5.5,
        "departure_time": "13:00",
        "arrival_time": "18:30",
        "flight_price": "450.00"
    },
    {
        "flight_id": 17,
        "origin_airport": "Munich Airport",
        "destination_airport": "Hartsfield-Jackson Atlanta International Airport",
        "flight_date": 'Sep 18, 2023',
        "flight_duration": 9,
        "departure_time": "11:30",
        "arrival_time": "20:30",
        "flight_price": "780.50"
    },
    {
        "flight_id": 18,
        "origin_airport": "Suvarnabhumi Airport",
        "destination_airport": "Benito Juárez International Airport",
        "flight_date": 'Sep 18, 2023',
        "flight_duration": 14,
        "departure_time": "08:00",
        "arrival_time": "22:00",
        "flight_price": "1100.00"
    },
    {
        "flight_id": 19,
        "origin_airport": "Jomo Kenyatta International Airport",
        "destination_airport": "O'Hare International Airport",
        "flight_date": 'Sep 19, 2023',
        "flight_duration": 15,
        "departure_time": "12:45",
        "arrival_time": "03:45",
        "flight_price": "1150.75"
    },
    {
        "flight_id": 20,
        "origin_airport": "Indira Gandhi International Airport",
        "destination_airport": "Kuala Lumpur International Airport",
        "flight_date": 'Sep 19, 2023',
        "flight_duration": 5,
        "departure_time": "09:30",
        "arrival_time": "14:30",
        "flight_price": "450.50"
    },
    {
        "flight_id": 21,
        "origin_airport": "Leonardo da Vinci-Fiumicino Airport",
        "destination_airport": "Cairo International Airport",
        "flight_date": 'Sep 19, 2023',
        "flight_duration": 3.5,
        "departure_time": "10:15",
        "arrival_time": "13:45",
        "flight_price": "280.25"
    },
    {
        "flight_id": 22,
        "origin_airport": "Shanghai Pudong International Airport",
        "destination_airport": "Murtala Muhammed International Airport",
        "flight_date": 'Sep 19, 2023',
        "flight_duration": 12,
        "departure_time": "14:00",
        "arrival_time": "02:00",
        "flight_price": "970.00"
    },
    {
        "flight_id": 23,
        "origin_airport": "Seattle-Tacoma International Airport",
        "destination_airport": "Kansai International Airport",
        "flight_date": 'Sep 19, 2023',
        "flight_duration": 10,
        "departure_time": "17:30",
        "arrival_time": "03:30",
        "flight_price": "800.75"
    },
    {
        "flight_id": 24,
        "origin_airport": "Copenhagen Airport",
        "destination_airport": "Johannesburg-OR Tambo International Airport",
        "flight_date": 'Sep 20, 2023',
        "flight_duration": 11.5,
        "departure_time": "08:45",
        "arrival_time": "20:15",
        "flight_price": "900.25"
    },
    {
        "flight_id": 25,
        "origin_airport": "Hamad International Airport",
        "destination_airport": "Adolfo Suárez Madrid-Barajas Airport",
        "flight_date": 'Sep 20, 2023',
        "flight_duration": 7,
        "departure_time": "12:00",
        "arrival_time": "19:00",
        "flight_price": "620.00"
    },
    {
        "flight_id": 26,
        "origin_airport": "Kempegowda International Airport",
        "destination_airport": "Dublin Airport",
        "flight_date": 'Sep 20, 2023',
        "flight_duration": 9,
        "departure_time": "15:30",
        "arrival_time": "00:30",
        "flight_price": "760.50"
    },
    {
        "flight_id": 27,
        "origin_airport": "Abu Dhabi International Airport",
        "destination_airport": "Denver International Airport",
        "flight_date": 'Sep 20, 2023',
        "flight_duration": 17,
        "departure_time": "08:15",
        "arrival_time": "01:15",
        "flight_price": "1350.00"
    },
    {
        "flight_id": 28,
        "origin_airport": "Kuala Namu International Airport",
        "destination_airport": "Dubrovnik Airport",
        "flight_date": 'Sep 20, 2023',
        "flight_duration": 15,
        "departure_time": "12:30",
        "arrival_time": "03:30",
        "flight_price": "1250.75"
    },
    {
        "flight_id": 29,
        "origin_airport": "Cancún International Airport",
        "destination_airport": "Vienna International Airport",
        "flight_date": 'Sep 21, 2023',
        "flight_duration": 11,
        "departure_time": "16:45",
        "arrival_time": "03:45",
        "flight_price": "980.50"
    },
    {
        "flight_id": 30,
        "origin_airport": "Mactan-Cebu International Airport",
        "destination_airport": "Dubai World Central - Al Maktoum International Airport",
        "flight_date": 'Sep 22, 2023',
        "flight_duration": 5,
        "departure_time": "08:00",
        "arrival_time": "13:00",
        "flight_price": "420.25"
    },

    {
        "flight_id": 31,
        "origin_airport": "Ankara Esenboğa Havalimanı",
        "destination_airport": "İstanbul Havalimanı",
        "flight_date": 'Sep 22, 2023',
        "flight_duration": 5,
        "departure_time": "15:30",
        "arrival_time": "20:30",
        "flight_price": "420.25"
    },

    {
        "flight_id": 32,
        "origin_airport": "Ankara Esenboğa Havalimanı",
        "destination_airport": "İstanbul Havalimanı",
        "flight_date": 'Sep 23, 2023',
        "flight_duration": 5,
        "departure_time": "15:30",
        "arrival_time": "20:30",
        "flight_price": "420.25"
    },

    {
        "flight_id": 33,
        "origin_airport": "Ankara Esenboğa Havalimanı",
        "destination_airport": "İstanbul Havalimanı",
        "flight_date": 'Sep 24, 2023',
        "flight_duration": 5,
        "departure_time": "15:30",
        "arrival_time": "20:30",
        "flight_price": "420.25"
    },

    {
        "flight_id": 34,
        "origin_airport": "Ankara Esenboğa Havalimanı",
        "destination_airport": "İstanbul Havalimanı",
        "flight_date": 'Sep 25, 2023',
        "flight_duration": 5,
        "departure_time": "15:30",
        "arrival_time": "20:30",
        "flight_price": "420.25"
    },

    {
        "flight_id": 35,
        "origin_airport": "Ankara Esenboğa Havalimanı",
        "destination_airport": "İstanbul Havalimanı",
        "flight_date": 'Sep 26, 2023',
        "flight_duration": 5,
        "departure_time": "15:30",
        "arrival_time": "20:30",
        "flight_price": "420.25"
    },

    {
        "flight_id": 36,
        "origin_airport": "Los Angeles International Airport",
        "destination_airport": "John F. Kennedy International Airport",
        "flight_date": 'Sep 18, 2023',
        "flight_duration": 10,
        "departure_time": "14:30",
        "arrival_time": "00:30",
        "flight_price": "800.00"
    },

    {
        "flight_id": 37,
        "origin_airport": "İstanbul Havalimanı",
        "destination_airport": "Ankara Esenboğa Havalimanı",
        "flight_date": 'Sep 28, 2023',
        "flight_duration": 2,
        "departure_time": "08:00",
        "arrival_time": "10:00",
        "flight_price": "250.00"
    },

    {
        "flight_id": 38,
        "origin_airport": "Ankara Esenboğa Havalimanı",
        "destination_airport": "İstanbul Havalimanı",
        "flight_date": 'Sep 29, 2023',
        "flight_duration": 2,
        "departure_time": "08:00",
        "arrival_time": "10:00",
        "flight_price": "250.00"
    },

    {
        "flight_id": 39,
        "origin_airport": "İstanbul Havalimanı",
        "destination_airport": "Ankara Esenboğa Havalimanı",
        "flight_date": 'Sep 28, 2023',
        "flight_duration": 3,
        "departure_time": "17:45",
        "arrival_time": "19:45",
        "flight_price": "439.99"
    },

    {
        "flight_id": 40,
        "origin_airport": "Ankara Esenboğa Havalimanı",
        "destination_airport": "İstanbul Havalimanı",
        "flight_date": 'Sep 28, 2023',
        "flight_duration": 2,
        "departure_time": "21:50",
        "arrival_time": "23:50",
        "flight_price": "199.99"
    },

    {
        "flight_id": 41,
        "origin_airport": "İstanbul Havalimanı",
        "destination_airport": "Ankara Esenboğa Havalimanı",
        "flight_date": 'Sep 28, 2023',
        "flight_duration": 4,
        "departure_time": "12:15",
        "arrival_time": "16:15",
        "flight_price": "117.00"
    },

    {
        "flight_id": 42,
        "origin_airport": "Ankara Esenboğa Havalimanı",
        "destination_airport": "İstanbul Havalimanı",
        "flight_date": 'Sep 28, 2023',
        "flight_duration": 3,
        "departure_time": "09:15",
        "arrival_time": "10:15",
        "flight_price": "99.99"
    }
]

module.exports = {airports, flights}