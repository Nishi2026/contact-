/* Contact records imported from the supplied directory spreadsheet. */
const CONTACTS = [
  {
    "sl": "1",
    "district": "Imphal East",
    "area": "Sangakpham, Laipham Khunou, Mantripukhri, Koirengei and surrounding area",
    "name": "Dayananda",
    "designation": "CRT Member",
    "ngo": "PEWA",
    "phone1": "7005783090",
    "phone2": "8837253957"
  },
  {
    "sl": "2",
    "district": "Imphal East",
    "area": "Hatta, Checkon, Telipati and surrounding",
    "name": "Kh.Ratan & Bimolchand",
    "designation": "CRT Members",
    "ngo": "RUSA",
    "phone1": "8257952797",
    "phone2": "7005155405"
  },
  {
    "sl": "3",
    "district": "Imphal East",
    "area": "Kshetrigao area",
    "name": "Athokpam Arish Luwang",
    "designation": "CRT Members",
    "ngo": "CBSED",
    "phone1": "8257953426",
    "phone2": "7628967977"
  },
  {
    "sl": "4",
    "district": "Imphal East",
    "area": "Ragailong , Sangakpham, Laipham Khunou, Zomi villa, Dewlahland,  Nagaram, Tangkhul Avenue,Chingmeirong",
    "name": "Palmei Adumei",
    "designation": "CRT Member",
    "ngo": "IAC",
    "phone1": "8415081740",
    "phone2": "7005196096"
  },
  {
    "sl": "5",
    "district": "Imphal East",
    "area": "Thongju, Keirao, Kiyamgei, Kongba area, Wangkhei area",
    "name": "Kh. Manichandra",
    "designation": "CRT Member",
    "ngo": "Kripa Society",
    "phone1": "7640976334",
    "phone2": "8730955636"
  },
  {
    "sl": "6",
    "district": "Imphal East",
    "area": "North AOC (BOC), Minuthong, Hatta and surrounding area",
    "name": "W. Hitani",
    "designation": "CRT Member",
    "ngo": "Nirvana Foundation FIDU",
    "phone1": "9863945895",
    "phone2": "8729811889"
  },
  {
    "sl": "7",
    "district": "Imphal East",
    "area": "Mntropukhri, Koirengei area",
    "name": "H Shilarani",
    "designation": "CRT Member",
    "ngo": "Nirvana Foundation FIDU",
    "phone1": "6009287099",
    "phone2": "8420246401"
  },
  {
    "sl": "8",
    "district": "Imphal East",
    "area": "Khurai Lamlong area, Tinsid road, Lamlong to Khabeisoi, Yaingangpakpi area",
    "name": "S. Ranjita & N. Nuribala",
    "designation": "CRT Member",
    "ngo": "UNICAM",
    "phone1": "9856093404",
    "phone2": "8974080637"
  },
  {
    "sl": "9",
    "district": "Imphal East",
    "area": "Wangkhei, Akampat, Kshetri leikai, Mahabali, Mange makhong, Palace compund",
    "name": "N.Mobikumar & R.K Romesh",
    "designation": "CRT Member (ORW)",
    "ngo": "SASO",
    "phone1": "9774568550",
    "phone2": "9362650815"
  },
  {
    "sl": "10",
    "district": "Imphal East",
    "area": "Keirao Bitra, Wangkhem, Langdum, Sandrok, Urup, Irilbung, Pagnong, Kalika, Yairipok Angtha, Laimanai, Tulihal, Top Chingtha & Changamdabi",
    "name": "Muzibur Rahaman, Thiyam Langamba",
    "designation": "CRT Member",
    "ngo": "SODAM",
    "phone1": "9774581535",
    "phone2": "8014452822"
  },
  {
    "sl": "11",
    "district": "Imphal East",
    "area": "Nongmeibung, Porompat, Ningthem Pukhri Mapal area",
    "name": "K. Anand Singh",
    "designation": "CRT Member",
    "ngo": "Care Foundation",
    "phone1": "9612554697",
    "phone2": "9862060049"
  },
  {
    "sl": "12",
    "district": "Imphal East",
    "area": "Khurai Konsam Leikai, Kairang, Khomidok, Pangei, Sagolmang",
    "name": "Soibam Chetan & Porei",
    "designation": "CRT Member",
    "ngo": "Nirvana Foundation IDU",
    "phone1": "8132881718",
    "phone2": "8256977405"
  },
  {
    "sl": "13",
    "district": "Imphal West",
    "area": "Khumbong, Keithelmanbi, Tera, Patsoi",
    "name": "Herojit",
    "designation": "CRT Member",
    "ngo": "Wide Angle",
    "phone1": "8794760770",
    "phone2": "8794760770"
  },
  {
    "sl": "14",
    "district": "Imphal West",
    "area": "Khumbong, Keithelmanbi, Tera, Patsoi",
    "name": "Anthony",
    "designation": "CRT Member",
    "ngo": "Wide Angle",
    "phone1": "9366627053",
    "phone2": ""
  },
  {
    "sl": "14",
    "district": "Imphal West",
    "area": "Khumbong, Keithelmanbi, Tera, Patsoi",
    "name": "Somokanta",
    "designation": "CRT Member",
    "ngo": "Wide Angle",
    "phone1": "9383238916",
    "phone2": ""
  },
  {
    "sl": "15",
    "district": "Imphal West",
    "area": "Taothong Apheiba, Lamshang, Lamdeng, Lairenkabi, Mayang langjing, Kameng, Koutruk, Kangchup, Akham etc",
    "name": "Angomba Khangembam & Amarca Ningthoujam",
    "designation": "CRT Member",
    "ngo": "KLWS",
    "phone1": "8837062117",
    "phone2": "8798133672"
  },
  {
    "sl": "16",
    "district": "Imphal West",
    "area": "Naroremthong Samushang to Iroisembe & DC Road",
    "name": "Irungbam Kenedy",
    "designation": "CRT Member",
    "ngo": "WESDEVS",
    "phone1": "9233231436",
    "phone2": "9612294598"
  },
  {
    "sl": "17",
    "district": "Imphal West",
    "area": "Naroremthong Samushang to Iroisembe & DC Road",
    "name": "Tulakanta",
    "designation": "CRT Member",
    "ngo": "WESDEVS",
    "phone1": "8119087588",
    "phone2": ""
  },
  {
    "sl": "18",
    "district": "Imphal West",
    "area": "Mayang Imphal Area",
    "name": "Heikrujam Paikhomba Singh",
    "designation": "CRT Member",
    "ngo": "VSC",
    "phone1": "8118942662",
    "phone2": "8837202018"
  },
  {
    "sl": "19",
    "district": "Imphal West",
    "area": "Bijoygovinda, Tera Amudon, Thangjam Leirak, Mabudou mantri Leikai, Keishampat Thokchom Leikai, Keishampat Mutum Leikai, Jailor Leirak, Dhobi Machu Leirak, Wahengbam Leikai, Sagolband Kangabam Leikai, Salam Leikai, Meino Leirak, Moirang Leirak, Meisanam Nongthongbam Leikai and Paona Bazar",
    "name": "Sinam Rishi",
    "designation": "CRT Member",
    "ngo": "Kripa Society",
    "phone1": "8787362607",
    "phone2": "8974546656"
  },
  {
    "sl": "20",
    "district": "Imphal West",
    "area": "Sagolband Sayang, Nepra Menjor, Killing Feild, Sayang Kuraomakhong, Konthoujam Leikai, Sayang Khwainingthou, Ingudam Leirak, Thingom Leikai, Haorakchambi Soibam Leikai, Thiyam Leikai, Kwakeithel, Thounaojam Leikai, Takhellambam  Leikai, Kwakeithel Akham Leikai, Kwakeithel Mayaikoibi and Sapam Leirak",
    "name": "Ch Leeson",
    "designation": "CRT Member",
    "ngo": "Kripa Society",
    "phone1": "8729806320",
    "phone2": ""
  },
  {
    "sl": "21",
    "district": "Imphal West",
    "area": "Keishampat, Hodam lairak, Thouda Bhabok leikai, Kwakeithel, Khagempali, Haobam Marak, Mongshangei, Langthabal",
    "name": "W.Surchandra & Thokchom Rohit",
    "designation": "CRT Member",
    "ngo": "Lifeline Foundation",
    "phone1": "9436655929",
    "phone2": "9378074296"
  },
  {
    "sl": "22",
    "district": "Imphal West",
    "area": "Malom, Sangaiprou, Ghari, Changangei",
    "name": "Hidam Priyokumar",
    "designation": "CRT Member",
    "ngo": "RULE",
    "phone1": "9362776911",
    "phone2": "8787491583"
  },
  {
    "sl": "23",
    "district": "Imphal West",
    "area": "Mekola, Bamdiar, Ningombam, Hiyangthang",
    "name": "Sanjram Sanahal",
    "designation": "CRT Member",
    "ngo": "RULE",
    "phone1": "8413972051",
    "phone2": ""
  },
  {
    "sl": "24",
    "district": "Imphal West",
    "area": "Govindagram, Utlou, Meijrao, Thiyam, Langpok, Kakyai",
    "name": "Ksh Khogendro",
    "designation": "CRT Member",
    "ngo": "RULE",
    "phone1": "7005765575",
    "phone2": ""
  },
  {
    "sl": "25",
    "district": "Imphal West",
    "area": "Yaiskul, Moirangkhom and Singjamei area",
    "name": "Irengbam Sanjit",
    "designation": "CRT Member",
    "ngo": "MNP+",
    "phone1": "7005452245",
    "phone2": "7005952364"
  },
  {
    "sl": "26",
    "district": "Imphal West",
    "area": "Singjamei, Naorem Leikai, Maibam Leikai and Langthabal Kunja",
    "name": "Kh. Chinglemba Meitei",
    "designation": "CRT Member",
    "ngo": "ISD",
    "phone1": "7005329447",
    "phone2": "7005275853"
  },
  {
    "sl": "27",
    "district": "Imphal West",
    "area": "Samurou, Dam area",
    "name": "Y imran",
    "designation": "CRT Member",
    "ngo": "ESDO",
    "phone1": "7005094266",
    "phone2": "9366584027"
  },
  {
    "sl": "28",
    "district": "Imphal West",
    "area": "Lamphel area, Sana Keithel, Langol, Naoremthong, Uripok, Nagamapal",
    "name": "Roshan & Hemchandra",
    "designation": "CRT Member",
    "ngo": "SASO",
    "phone1": "9774832056",
    "phone2": "8730926099"
  },
  {
    "sl": "29",
    "district": "Imphal West",
    "area": "Thangmeiband, Tharon, DM Campus, Khuyathong, Chingmeirong Yengkhoiba Bazar",
    "name": "Maibam Kamal",
    "designation": "CRT Member",
    "ngo": "IWCDC",
    "phone1": "7005499374",
    "phone2": ""
  },
  {
    "sl": "30",
    "district": "Imphal West",
    "area": "North AOC, Hatta , Mantripukhri, Game Village , Paona Bazar, Kshetrigao, Khomodok",
    "name": "Oinam Roshini Devi",
    "designation": "CRT Member",
    "ngo": "MLSS FIDU",
    "phone1": "9862193366",
    "phone2": "9774221702"
  },
  {
    "sl": "31",
    "district": "Imphal West",
    "area": "Paona Bazar, Tarung, Langol",
    "name": "Junny Seiza and Shanti Nandeibam",
    "designation": "CRT Member",
    "ngo": "MLSS FIDU",
    "phone1": "9612898926",
    "phone2": "6009888928"
  },
  {
    "sl": "32",
    "district": "Bishnupur",
    "area": "Keinou, Nachou, Potshangbam and Bishnupur",
    "name": "Thoudam Chaoba",
    "designation": "CRT Member (ORW)",
    "ngo": "Care Foundation",
    "phone1": "9089554774",
    "phone2": "9862060049"
  },
  {
    "sl": "33",
    "district": "Bishnupur",
    "area": "Utlou Nambol, Leimapokpam, Leimaram, Kamong, Maibam,Oinam",
    "name": "Ajit",
    "designation": "CRT Member",
    "ngo": "Care Foundation",
    "phone1": "8837398056",
    "phone2": "8787861354"
  },
  {
    "sl": "34",
    "district": "Bishnupur",
    "area": "Kumbi. Saiton",
    "name": "Kh. Rocky",
    "designation": "CRT Member",
    "ngo": "DPU",
    "phone1": "7005325801",
    "phone2": "8413961340"
  },
  {
    "sl": "35",
    "district": "Bishnupur",
    "area": "Thanga, Sagang, Wangoo",
    "name": "W. Wangthoi",
    "designation": "CRT Member",
    "ngo": "DPU",
    "phone1": "8731029137",
    "phone2": ""
  },
  {
    "sl": "36",
    "district": "Bishnupur",
    "area": "Laingoubi, Chairen, Pombikhok, Sandangkhong",
    "name": "Th Purnima",
    "designation": "CRT Member",
    "ngo": "DPU",
    "phone1": "7005474728",
    "phone2": ""
  },
  {
    "sl": "37",
    "district": "Bishnupur",
    "area": "Phabakchao, Tronglaobi, Moirang Khunou",
    "name": "Md. Abdul Gaffer",
    "designation": "CRT Member",
    "ngo": "ESEWOSSA",
    "phone1": "9366466022",
    "phone2": "9612950590"
  },
  {
    "sl": "38",
    "district": "Bishnupur",
    "area": "Upokpi, Ningthoukhong, Moirang",
    "name": "Heman Rajiv",
    "designation": "CRT Member",
    "ngo": "ESEWOSSA",
    "phone1": "8837207037",
    "phone2": "9378034961"
  },
  {
    "sl": "39",
    "district": "Chandel",
    "area": "Chandel Block",
    "name": "K Mamie Monsang",
    "designation": "CRT Member",
    "ngo": "RC-SWACD",
    "phone1": "9862042381",
    "phone2": "8131824262"
  },
  {
    "sl": "40",
    "district": "Chandel",
    "area": "Chandel Block",
    "name": "K Lata Devi",
    "designation": "CRT Member",
    "ngo": "RC-SWACD",
    "phone1": "9862879056",
    "phone2": ""
  },
  {
    "sl": "41",
    "district": "Chandel",
    "area": "Chandel Block",
    "name": "K Morling",
    "designation": "CRT Member",
    "ngo": "RC-SWACD",
    "phone1": "7085830358",
    "phone2": ""
  },
  {
    "sl": "42",
    "district": "Chandel",
    "area": "Chakpikarong Toupokpi to Shajik Tampak",
    "name": "Ps. Mono",
    "designation": "CRT Member",
    "ngo": "SASO Chandel",
    "phone1": "9862013349",
    "phone2": ""
  },
  {
    "sl": "43",
    "district": "Chandel",
    "area": "Chakpikarong Toupokpi to Shajik Tampak",
    "name": "Sr. Aphia",
    "designation": "CRT Member",
    "ngo": "SASO Chandel",
    "phone1": "8974612609",
    "phone2": ""
  },
  {
    "sl": "44",
    "district": "Chandel",
    "area": "Chakpikarong Toupokpi to Shajik Tampak",
    "name": "Thanghrin",
    "designation": "CRT Member",
    "ngo": "SASO Chandel",
    "phone1": "6909633372",
    "phone2": ""
  },
  {
    "sl": "45",
    "district": "Chandel",
    "area": "Chakpikarong Toupokpi to Shajik Tampak",
    "name": "Nula Thumpal",
    "designation": "CRT Member",
    "ngo": "SASO Chandel",
    "phone1": "9863124190",
    "phone2": ""
  },
  {
    "sl": "46",
    "district": "Churachandpur",
    "area": "Lamka Block",
    "name": "Esther and Niannuamching",
    "designation": "CRT Member",
    "ngo": "PPO FIDU",
    "phone1": "9612007822",
    "phone2": "7627920320"
  },
  {
    "sl": "47",
    "district": "Churachandpur",
    "area": "Tuibuong area",
    "name": "Chingkhohat",
    "designation": "CRT Member",
    "ngo": "PPO FIDU",
    "phone1": "8732846098",
    "phone2": ""
  },
  {
    "sl": "48",
    "district": "Churachandpur",
    "area": "Tuibuong, Lamka and Singngat",
    "name": "Nangchinzou and Kamminthang,",
    "designation": "CRT Member",
    "ngo": "DACO Led",
    "phone1": "8729948327",
    "phone2": "8730818347"
  },
  {
    "sl": "49",
    "district": "Churachandpur",
    "area": "Tuibuong, Lamka and Singngat",
    "name": "Thangmuankham",
    "designation": "CRT Member",
    "ngo": "DACO Led",
    "phone1": "8413826690",
    "phone2": ""
  },
  {
    "sl": "50",
    "district": "Churachandpur",
    "area": "Lamka Block,Tuibuong Block,Saikot Block,Lanva Block",
    "name": "Jeffrey and Hemminthang",
    "designation": "CRT Member",
    "ngo": "SHALOM",
    "phone1": "9612153147",
    "phone2": "8732097212"
  },
  {
    "sl": "51",
    "district": "Churachandpur",
    "area": "Lamka Block,Tuibuong Block,Saikot Block,Lanva Block",
    "name": "Lalringum and Pauzapaul",
    "designation": "CRT Member",
    "ngo": "SHALOM",
    "phone1": "8132905838",
    "phone2": "9077263039"
  },
  {
    "sl": "52",
    "district": "Jirbam",
    "area": "Jiribam and surrounding areas",
    "name": "H. Rajesh Singh and Y. Sanjoy Singh",
    "designation": "CRT Member",
    "ngo": "CWA",
    "phone1": "8256946711",
    "phone2": "8787827914"
  },
  {
    "sl": "53",
    "district": "Kakching",
    "area": "Wabagai Yangbi Leirak",
    "name": "H Bedajit",
    "designation": "CRT Member",
    "ngo": "HFAO",
    "phone1": "8837315758",
    "phone2": "7627998448"
  },
  {
    "sl": "54",
    "district": "Kakching",
    "area": "Wangoo Tangjeng and Near Wangoo Outpost",
    "name": "W Naresh",
    "designation": "CRT Member",
    "ngo": "HFAO",
    "phone1": "8119040997",
    "phone2": "9612346163"
  },
  {
    "sl": "55",
    "district": "Kakching",
    "area": "Wabagai Yangbi Leirak",
    "name": "M Romio",
    "designation": "CRT Member",
    "ngo": "HFAO",
    "phone1": "8837048466",
    "phone2": "7005777629"
  },
  {
    "sl": "56",
    "district": "Kakching",
    "area": "Kakching Khunou Lamhaba Leikai",
    "name": "Y Ranbir",
    "designation": "CRT Member",
    "ngo": "HFAO",
    "phone1": "8415991158",
    "phone2": "8415988290"
  },
  {
    "sl": "57",
    "district": "Kakching",
    "area": "Pallel and surrounding area",
    "name": "K Nilbash",
    "designation": "CRT Member",
    "ngo": "HFAO",
    "phone1": "7005123579",
    "phone2": "9862918893"
  },
  {
    "sl": "58",
    "district": "Kakching",
    "area": "Kakching, Irengban and Sora",
    "name": "Y. Joychand Singh",
    "designation": "CRT Member",
    "ngo": "SASO Kakching",
    "phone1": "8014003385",
    "phone2": ""
  },
  {
    "sl": "59",
    "district": "Kakching",
    "area": "Kakching, Irengban and Sora",
    "name": "Y Binata",
    "designation": "CRT Member",
    "ngo": "SASO Kakching",
    "phone1": "9862842881",
    "phone2": ""
  },
  {
    "sl": "60",
    "district": "Kakching",
    "area": "Kakching, Irengban and Sora",
    "name": "Ksh Suraj",
    "designation": "CRT Member",
    "ngo": "SASO Kakching",
    "phone1": "8787440658",
    "phone2": "70053153543"
  },
  {
    "sl": "61",
    "district": "Kakching",
    "area": "Kakching, Irengban and Sora",
    "name": "MD Hanif",
    "designation": "CRT Member",
    "ngo": "SASO Kakching",
    "phone1": "7005696276",
    "phone2": "8014003385"
  },
  {
    "sl": "62",
    "district": "Kamjong",
    "area": "Kamjong Area",
    "name": "Genialson Jajo",
    "designation": "CRT Member",
    "ngo": "Care Kamjong",
    "phone1": "8729912796",
    "phone2": "8974925341"
  },
  {
    "sl": "63",
    "district": "Kamjing",
    "area": "Kasom Block",
    "name": "Yuprangam, Phaningla and Peninah",
    "designation": "CRT Member",
    "ngo": "PASDO",
    "phone1": "7085229827",
    "phone2": "8974788058"
  },
  {
    "sl": "64",
    "district": "Kangpokpi",
    "area": "Saikul Block and Lhungtin Block",
    "name": "Janglet Doungel and Mangboi Singson",
    "designation": "CRT Member",
    "ngo": "RCDC",
    "phone1": "9362146052",
    "phone2": "9485272766"
  },
  {
    "sl": "65",
    "district": "Kangpokpi",
    "area": "Kangpokpi, Champhai Blocks and Saitu Block",
    "name": "Letneilhing Lhouvum and Thanghougin Sitlou",
    "designation": "CRT Member",
    "ngo": "SRARNO",
    "phone1": "9366131176",
    "phone2": "7085823218"
  },
  {
    "sl": "66",
    "district": "Senapati",
    "area": "Mao-Maram Block and Paomata Block",
    "name": "A. Lohrii",
    "designation": "CRT Member",
    "ngo": "SYDC",
    "phone1": "7085953356",
    "phone2": ""
  },
  {
    "sl": "67",
    "district": "Senapati",
    "area": "Purull Block",
    "name": "D Rakhu",
    "designation": "CRT Member",
    "ngo": "SDYC",
    "phone1": "6009422395",
    "phone2": ""
  },
  {
    "sl": "68",
    "district": "Tamenglong",
    "area": "Tamenglong Headquarters and surrounding area",
    "name": "Lumpangai Kamei",
    "designation": "CRT Member",
    "ngo": "AWARE",
    "phone1": "8257044409",
    "phone2": ""
  },
  {
    "sl": "69",
    "district": "Tengnoupal",
    "area": "Machi Block",
    "name": "Mechi Amos",
    "designation": "CRT Member",
    "ngo": "WODA",
    "phone1": "9862766891",
    "phone2": "9862918893"
  },
  {
    "sl": "70",
    "district": "Tengnoupal",
    "area": "Moreh Town",
    "name": "Doujathang Mate",
    "designation": "CRT Member",
    "ngo": "OSD",
    "phone1": "9612587020",
    "phone2": "8787439120"
  },
  {
    "sl": "71",
    "district": "Tengnoupal",
    "area": "Moreh Town & Surrounding area",
    "name": "Worneithang Rangla",
    "designation": "CRT Member",
    "ngo": "DPU Moreh",
    "phone1": "9612417784",
    "phone2": "8837211288"
  },
  {
    "sl": "72",
    "district": "Tengnoupal",
    "area": "Moreh Town & Surrounding area",
    "name": "Leisangthem Sushilla",
    "designation": "CRT Member",
    "ngo": "New Generation (FIDU)",
    "phone1": "7629875878",
    "phone2": "8798332955"
  },
  {
    "sl": "73",
    "district": "Tengnoupal",
    "area": "Moreh Town & Surrounding area",
    "name": "Sarita Adhikari",
    "designation": "CRT Member",
    "ngo": "New Generation (FIDU)",
    "phone1": "8736858539",
    "phone2": "8798332955"
  },
  {
    "sl": "74",
    "district": "Thoubal",
    "area": "Lilong area including inside localities",
    "name": "Fh. Hassim",
    "designation": "CRT Member",
    "ngo": "HCRC",
    "phone1": "7005206672",
    "phone2": "8787695703"
  },
  {
    "sl": "75",
    "district": "Thoubal",
    "area": "Wangjing, Khongjom & Khangabok",
    "name": "Joykumar, Rishikesh, Robert, Meena.",
    "designation": "CRT Member",
    "ngo": "RVS (Wangjing)",
    "phone1": "7005672861",
    "phone2": "9615414154"
  },
  {
    "sl": "76",
    "district": "Thoubal",
    "area": "Thoubal Kshetrileikai, Yairipok Bishnunaha",
    "name": "Waikhom Karnajit Singh & Momocha Singh",
    "designation": "CRT Member",
    "ngo": "YARD",
    "phone1": "9366055697",
    "phone2": "8132869166"
  },
  {
    "sl": "77",
    "district": "Thoubal",
    "area": "Thoubal & Kakching",
    "name": "Keisham Ibeyai",
    "designation": "CRT Member",
    "ngo": "CRUS",
    "phone1": "9366064604",
    "phone2": "9089546091"
  },
  {
    "sl": "78",
    "district": "Ukhrul",
    "area": "Ukhrul Area",
    "name": "Stella Shinglai",
    "designation": "CRT Member",
    "ngo": "CARE",
    "phone1": "8414922626",
    "phone2": "8415983373"
  },
  {
    "sl": "79",
    "district": "Ukhrul",
    "area": "Ukhrul Town",
    "name": "Asolu, Mayophy, Philocy",
    "designation": "CRT Member",
    "ngo": "PASDO",
    "phone1": "8794123599",
    "phone2": "6909742386"
  }
];
