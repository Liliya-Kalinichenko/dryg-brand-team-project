
  export const CATEGORIES_FILTER: { [category: string]: string } = {
    'all': 'View All',
   'hoodie': 'Hoodies',
    'tShirt': 'T-Shirts',
    'coat': 'Coats',
    'cropTopAndShort':'Crop Top and Shorts Sets',    
  }

  export const COLORS = {
    Beige: 'beige',
    Black: 'black',
    Blue: 'blue',
    Chocolate: 'chocolate',
    'Mocha coffee': 'mochaCoffee',
    Pink: 'pink',
    Pistachio: 'pistachio',
    Yellow: 'yellow',
    White: 'white',    
  }

  export const COLORS_HEX: { [color:string]: string } = {
    beige: '#B19F93',
    black: '#29211E',
    blue: '#799EC1',
    chocolate: '#3E2F28',
    'mochaCoffee': '#85706C',
    pink: '#D9BCC1',
    pistachio: '#B3BDA2',
    yellow: '#FFE8A3',
    white: '#CBCBCB',
  };

  export const SIZES = {
    S: 's',
    M: 'm',
    Oversize: 'oversize',
  }

  export const SORT_BY: { [sort:string]: string } = {
    'newest': 'date, new to old',
    'cheapest': 'price, low to high',
    'mostExpensive': 'price, high to low',
  }

  export const ITEMS_PER_PAGE = 12;

  export const OBLASTS = [
    {value: 'Cherkasy Oblast', label: 'Cherkasy Oblast'},
    {value: 'Chernihiv Oblast', label: 'Chernihiv Oblast'},
    {value: 'Chernivtsi Oblast', label: 'Chernivtsi Oblast'},
    {value: 'Dnipropetrovsk Oblast', label: 'Dnipropetrovsk Oblast'},
    {value: 'Donetsk Oblast', label: 'Donetsk Oblast'},
    {value: 'Ivano-Frankivsk Oblast', label: 'Ivano-Frankivsk Oblast'},
    {value: 'Kharkiv Oblast', label: 'Kharkiv Oblast'},
    {value: 'Kherson Oblast', label: 'Kherson Oblast'},
    {value: 'Khmelnytskyi Oblast', label: 'Khmelnytskyi Oblast'},
    {value: 'Kyiv Oblast', label: 'Kyiv Oblast'},
    {value: 'Kirovohrad Oblast', label: 'Kirovohrad Oblast'},
    {value: 'Luhansk Oblast', label: 'Luhansk Oblast'},
    {value: 'Lviv Oblast', label: 'Lviv Oblast'},
    {value: 'Mykolaiv Oblast', label: 'Mykolaiv Oblast'},
    {value: 'Odessa Oblast', label: 'Odessa Oblast'},
    {value: 'Poltava Oblast', label: 'Poltava Oblast'},
    {value: 'Rivne Oblast', label: 'Rivne Oblast'}, 
    {value: 'Sumy Oblast', label: 'Sumy Oblast'},
    {value: 'Ternopil Oblast', label: 'Ternopil Oblast'},
    {value: 'The Autonomous Republic of Crimea', label: 'The Autonomous Republic of Crimea'},
    {value: 'Vinnytsia Oblast', label: 'Vinnytsia Oblast'},
    {value: 'Volyn Oblast', label: 'Volyn Oblast'},
    {value: 'Zakarpattia Oblast', label: 'Zakarpattia Oblast'},
    {value: 'Zaporizhia Oblast', label: 'Zaporizhia Oblast'},
    {value: 'Zhytomyr Oblast', label: 'Zhytomyr Oblast'},
  ]


export const CITIES: {[key:string]: {value: string, label: string}[]} = {
  'Cherkasy Oblast': [
    {value: 'Cherkasy', label: 'Cherkasy'},
    {value: 'Chyhyryn', label: 'Chyhyryn'},
    {value: 'Horodyshche', label: 'Horodyshche'},
    {value: 'Kamianka', label: 'Kamianka'},
    {value: 'Kaniv', label: 'Kaniv'},
    {value: 'Uman', label: 'Uman'},
    {value: 'Shpola', label: 'Shpola'},
    {value: 'Smila', label: 'Smila'},
    {value: 'Zhashkiv', label: 'Zhashkiv'},
    {value: 'Zolotonosha', label: 'Zolotonosha'},
    {value: 'Zvenyhorodka', label: 'Zvenyhorodka'},
  ],
  'Chernihiv Oblast': [
    {value: 'Bakhmach', label: 'Bakhmach'},
    {value: 'Baturyn', label: 'Baturyn'},
    {value: 'Bobrovytsia', label: 'Bobrovytsia'},    
    {value: 'Borzna', label: 'Borzna'},
    {value: 'Chernihiv', label: 'Chernihiv'},
    {value: 'Horodnia', label: 'Horodnia'},
    {value: 'Ichnia', label: 'Ichnia'},
    {value: 'Koriukivka', label: 'Koriukivka'},
    {value: 'Nizhyn', label: 'Nizhyn'},
    {value: 'Nosivka', label: 'Nosivka'},
    {value: 'Novhorod-Siverskyi', label: 'Novhorod-Siverskyi'},
    {value: 'Oster', label: 'Oster'},
    {value: 'Pryluky', label: 'Pryluky'},
    {value: 'Semenivka', label: 'Semenivka'},
    {value: 'Snovsk', label: 'Snovsk'},
  ],
  'Chernivtsi Oblast': [
    {value: 'Chernivtsi', label: 'Chernivtsi'},
    {value: 'Hertsa', label: 'Hertsa'},
    {value: 'Khotyn', label: 'Khotyn'},
    {value: 'Kitsman', label: 'Kitsman'},
    {value: 'Novodnistrovsk', label: 'Novodnistrovsk'},
    {value: 'Novoselytsia', label: 'Novoselytsia'},
    {value: 'Sokyriany', label: 'Sokyriany'},
    {value: 'Storozhynets', label: 'Storozhynets'},
    {value: 'Vashkivtsi', label: 'Vashkivtsi'},
    {value: 'Vyzhnytsia', label: 'Vyzhnytsia'},
    {value: 'Zastavna', label: 'Zastavna'},    
  ],
  'Dnipropetrovsk Oblast': [
    {value: 'Apostolove', label: 'Apostolove'},
    {value: 'Dnipro', label: 'Dnipro'},
    {value: 'Kamianske', label: 'Kamianske'},
    {value: 'Kryvyi Rih', label: 'Kryvyi Rih'},
    {value: 'Marhanets', label: 'Marhanets'},
    {value: 'Nikopol', label: 'Nikopol'},
    {value: 'Novomoskovsk', label: 'Novomoskovsk'},
    {value: 'Pavlohrad', label: 'Pavlohrad'},
    {value: 'Pereshchepyne', label: 'Pereshchepyne'},
    {value: 'Pershotravensk', label: 'Pershotravensk'},
    {value: 'Piatykhatky', label: 'Piatykhatky'},
    {value: 'Pidhorodne', label: 'Pidhorodne'},
    {value: 'Synelnykove', label: 'Synelnykove'},
    {value: 'Ternivka', label: 'Ternivka'},
    {value: 'Verkhivtseve', label: 'Verkhivtseve'},
    {value: 'Verkhnodniprovsk', label: 'Verkhnodniprovsk'},
    {value: 'Vilnohirsk', label: 'Vilnohirsk'},
    {value: 'Zhovti Vody', label: 'Zhovti Vody'},    
  ],
  'Donetsk Oblast': [
    {value: 'Avdiivka', label: 'Avdiivka'},
    {value: 'Chasiv Yar', label: 'Chasiv Yar'},
    {value: 'Dobropillia', label: 'Dobropillia'},
    {value: 'Kalmiuske', label: 'Kalmiuske'},
    {value: 'Kostiantynivka', label: 'Kostiantynivka'},
    {value: 'Kramatorsk', label: 'Kramatorsk'},
    {value: 'Krasnohorivka', label: 'Krasnohorivka'},
    {value: 'Lyman', label: 'Lyman'},
    {value: 'Marinka', label: 'Marinka'},
    {value: 'Mariupol', label: 'Mariupol'},
    {value: 'Mospyne', label: 'Mospyne'},
    {value: 'Novoazovsk', label: 'Novoazovsk'},
    {value: 'Novohrodivka', label: 'Novohrodivka'},
    {value: 'Rodynske', label: 'Rodynske'},
    {value: 'Sloviansk', label: 'Sloviansk'},
    {value: 'Snizhne', label: 'Snizhne'},
    {value: 'Sviatohirsk', label: 'Sviatohirsk'},
    {value: 'Volnovakha', label: 'Volnovakha'},
    {value: 'Vuhledar', label: 'Vuhledar'},
    {value: 'Yasynuvata', label: 'Yasynuvata'},
    {value: 'Zalizne', label: 'Zalizne'},
    {value: 'Zhdanivka', label: 'Zhdanivka'},    
  ],
  'Ivano-Frankivsk Oblast': [
    {value: 'Bolekhiv', label: 'Bolekhiv'},
    {value: 'Burshtyn', label: 'Burshtyn'},
    {value: 'Dolyna', label: 'Dolyna'},
    {value: 'Halych', label: 'Halych'},
    {value: 'Horodenka', label: 'Horodenka'},
    {value: 'Ivano-Frankivsk', label: 'Ivano-Frankivsk'},
    {value: 'Kalush', label: 'Kalush'},
    {value: 'Kolomyia', label: 'Kolomyia'},
    {value: 'Kosiv', label: 'Kosiv'},
    {value: 'Nadvirna', label: 'Nadvirna'},
    {value: 'Rohatyn', label: 'Rohatyn'},
    {value: 'Sniatyn', label: 'Sniatyn'},
    {value: 'Tlumach', label: 'Tlumach'},
    {value: 'Tysmenytsia', label: 'Tysmenytsia'},
    {value: 'Yaremche', label: 'Yaremche'},    
  ],
  'Kharkiv Oblast': [
    {value: 'Balakliia', label: 'Balakliia'},
    {value: 'Barvinkove', label: 'Barvinkove'},
    {value: 'Bohodukhiv', label: 'Bohodukhiv'},
    {value: 'Chuhuiv', label: 'Chuhuiv'},
    {value: 'Derhachi', label: 'Derhachi'},
    {value: 'Izium', label: 'Izium'},
    {value: 'Kharkiv', label: 'Kharkiv'},
    {value: 'Krasnohrad', label: 'Krasnohrad'},
    {value: 'Kupiansk', label: 'Kupiansk'},
    {value: 'Liubotyn', label: 'Liubotyn'},
    {value: 'Lozova', label: 'Lozova'},
    {value: 'Merefa', label: 'Merefa'},
    {value: 'Pervomaiskyi', label: 'Pervomaiskyi'},
    {value: 'Pivdenne', label: 'Pivdenne'},
    {value: 'Valky', label: 'Valky'},
    {value: 'Vovchansk', label: 'Vovchansk'},
    {value: 'Zmiiv', label: 'Zmiiv'},    
  ],
  'Kherson Oblast': [
    {value: 'Beryslav', label: 'Beryslav'},
    {value: 'Henichesk', label: 'Henichesk'},
    {value: 'Hola Prystan', label: 'Hola Prystan'},
    {value: 'Kakhovka', label: 'Kakhovka'},
    {value: 'Kherson', label: 'Kherson'},
    {value: 'Nova Kakhovka', label: 'Nova Kakhovka'},
    {value: 'Novooleksiivka', label: 'Novooleksiivka'},
    {value: 'Oleshky', label: 'Oleshky'},
    {value: 'Skadovsk', label: 'Skadovsk'},
    {value: 'Tavriisk', label: 'Tavriisk'},    
  ],
  'Khmelnytskyi Oblast': [
    {value: 'Derazhnia', label: 'Derazhnia'},
    {value: 'Dunaivtsi', label: 'Dunaivtsi'},
    {value: 'Iziaslav', label: 'Iziaslav'},
    {value: 'Kamianets-Podilskyi', label: 'Kamianets-Podilskyi'},
    {value: 'Khmelnytskyi', label: 'Khmelnytskyi'},
    {value: 'Krasyliv', label: 'Krasyliv'},
    {value: 'Netishyn', label: 'Netishyn'},
    {value: 'Polonne', label: 'Polonne'},
    {value: 'Shepetivka', label: 'Shepetivka'},
    {value: 'Slavuta', label: 'Slavuta'},
    {value: 'Starokostiantyniv', label: 'Starokostiantyniv'},
    {value: 'Volochysk', label: 'Volochysk'},    
  ],
  'Kyiv Oblast': [
    {value: 'Berezan', label: 'Berezan'},
    {value: 'Bila Tserkva', label: 'Bila Tserkva'},
    {value: 'Bohuslav', label: 'Bohuslav'},
    {value: 'Boiarka', label: 'Boiarka'},
    {value: 'Boryspil', label: 'Boryspil'},
    {value: 'Brovary', label: 'Brovary'},
    {value: 'Bucha', label: 'Bucha'},
    {value: 'Fastiv', label: 'Fastiv'},
    {value: 'Irpin', label: 'Irpin'},
    {value: 'Kaharlyk', label: 'Kaharlyk'},
    {value: 'Myronivka', label: 'Myronivka'},
    {value: 'Obukhiv', label: 'Obukhiv'},
    {value: 'Pereiaslav', label: 'Pereiaslav'},
    {value: 'Rzhyshchiv', label: 'Rzhyshchiv'},
    {value: 'Slavutych', label: 'Slavutych'},
    {value: 'Tarashcha', label: 'Tarashcha'},
    {value: 'Tetiiv', label: 'Tetiiv'},
    {value: 'Ukrainka', label: 'Ukrainka'},
    {value: 'Uzyn', label: 'Uzyn'},
    {value: 'Vasylkiv', label: 'Vasylkiv'},
    {value: 'Vyshhorod', label: 'Vyshhorod'},
    {value: 'Vyshneve', label: 'Vyshneve'},
    {value: 'Yahotyn', label: 'Yahotyn'},    
  ],
  'Kirovohrad Oblast': [
    {value: 'Blahovishchenske', label: 'Blahovishchenske'},
    {value: 'Bobrynets', label: 'Bobrynets'},
    {value: 'Dolynska', label: 'Dolynska'},    
    {value: 'Haivoron', label: 'Haivoron'},
    {value: 'Kropyvnytskyi', label: 'Kropyvnytskyi'},
    {value: 'Mala Vyska', label: 'Mala Vyska'},
    {value: 'Novomyrhorod', label: 'Novomyrhorod'},
    {value: 'Novoukrainka', label: 'Novoukrainka'},
    {value: 'Oleksandriia', label: 'Oleksandriia'},
    {value: 'Pomichna', label: 'Pomichna'},
    {value: 'Svitlovodsk', label: 'Svitlovodsk'},
    {value: 'Znamianka', label: 'Znamianka'},    
  ],
  'Luhansk Oblast': [
    {value: 'Alchevsk', label: 'Alchevsk'},
    {value: 'Kadiivka', label: 'Kadiivka'},
    {value: 'Khrustalnyi', label: 'Khrustalnyi'},
    {value: 'Kreminna', label: 'Kreminna'},
    {value: 'Kypuche', label: 'Kypuche'},
    {value: 'Luhansk', label: 'Luhansk'},
    {value: 'Lutuhyne', label: 'Lutuhyne'},
    {value: 'Lysychansk', label: 'Lysychansk'},
    {value: 'Popasna', label: 'Popasna'},
    {value: 'Rubizhne', label: 'Rubizhne'},
    {value: 'Shchastia', label: 'Shchastia'},
    {value: 'Sievierodonetsk', label: 'Sievierodonetsk'},
    {value: 'Starobilsk', label: 'Starobilsk'},
    {value: 'Svatove', label: 'Svatove'},
    {value: 'Zolote', label: 'Zolote'},    
  ],
  'Lviv Oblast': [
    {value: 'Bibrka', label: 'Bibrka'},
    {value: 'Boryslav', label: 'Boryslav'},
    {value: 'Brody', label: 'Brody'},
    {value: 'Busk', label: 'Busk'},
    {value: 'Chervonohrad', label: 'Chervonohrad'},
    {value: 'Dobromyl', label: 'Dobromyl'},
    {value: 'Drohobych', label: 'Drohobych'},
    {value: 'Kamianka-Buzka', label: 'Kamianka-Buzka'},
    {value: 'Khodoriv', label: 'Khodoriv'},
    {value: 'Khyriv', label: 'Khyriv'},
    {value: 'Lviv', label: 'Lviv'},
    {value: 'Morshyn', label: 'Morshyn'},
    {value: 'Mostyska', label: 'Mostyska'},
    {value: 'Novoiavorivsk', label: 'Novoiavorivsk'},
    {value: 'Novyi Kalyniv', label: 'Novyi Kalyniv'},
    {value: 'Peremyshliany', label: 'Peremyshliany'},
    {value: 'Sokal', label: 'Sokal'},
    {value: 'Sosnivka', label: 'Sosnivka'},
    {value: 'Staryi Sambir', label: 'Staryi Sambir'},
    {value: 'Stebnyk', label: 'Stebnyk'},
    {value: 'Stryi', label: 'Stryi'},
    {value: 'Truskavets', label: 'Truskavets'},
    {value: 'Uhniv', label: 'Uhniv'},
    {value: 'Velyki Mosty', label: 'Velyki Mosty'},
    {value: 'Vynnyky', label: 'Vynnyky'},
    {value: 'Yavoriv', label: 'Yavoriv'},
    {value: 'Zhovkva', label: 'Zhovkva'},
    {value: 'Zhydachiv', label: 'Zhydachiv'},
    {value: 'Zolochiv', label: 'Zolochiv'},    
  ],
  'Mykolaiv Oblast': [
    {value: 'Bashtanka', label: 'Bashtanka'},
    {value: 'Mykolaiv', label: 'Mykolaiv'},
    {value: 'Nova Odesa', label: 'Nova Odesa'},
    {value: 'Novyi Buh', label: 'Novyi Buh'},
    {value: 'Ochakiv', label: 'Ochakiv'},
    {value: 'Snihurivka', label: 'Snihurivka'},
    {value: 'Voznesensk', label: 'Voznesensk'},
    {value: 'Yuzhnoukrainsk', label: 'Yuzhnoukrainsk'},    
  ],
  'Odessa Oblast': [
    {value: 'Ananiv', label: ''},
    {value: 'Balta', label: ''},
    {value: 'Berezivka', label: ''},
    {value: 'Bilhorod-Dnistrovskyi', label: ''},
    {value: 'Chornomorsk', label: ''},
    {value: 'Izmail', label: ''},
    {value: 'Kiliia', label: ''},
    {value: 'Kodyma', label: ''},
    {value: 'Odesa', label: ''},
    {value: 'Podilsk', label: ''},
    {value: 'Reni', label: ''},
    {value: 'Rozdilna', label: ''},
    {value: 'Tatarbunary', label: ''},
    {value: 'Teplodar', label: ''},
    {value: 'Vylkove', label: ''},
    {value: 'Yuzhne', label: ''},
    
  ],
  'Poltava Oblast': [
    {value: 'Hadiach', label: 'Hadiach'},
    {value: 'Hlobyne', label: 'Hlobyne'},
    {value: 'Horishni Plavni', label: 'Horishni Plavni'},
    {value: 'Hrebinka', label: 'Hrebinka'},
    {value: 'Karlivka', label: 'Karlivka'},
    {value: 'Khorol', label: 'Khorol'},
    {value: 'Kobeliaky', label: 'Kobeliaky'},
    {value: 'Kremenchuk', label: 'Kremenchuk'},
    {value: 'Lokhvytsia', label: 'Lokhvytsia'},
    {value: 'Lubny', label: 'Lubny'},
    {value: 'Lutovynivka', label: 'Lutovynivka'},
    {value: 'Myrhorod', label: 'Myrhorod'},
    {value: 'Poltava', label: 'Poltava'},
    {value: 'Pyriatyn', label: 'Pyriatyn'},
    {value: 'Zavodske', label: 'Zavodske'},    
  ],
  'Rivne Oblast': [
    {value: 'Berezne', label: 'Berezne'},
    {value: 'Dubno', label: 'Dubno'},
    {value: 'Dubrovytsia', label: 'Dubrovytsia'},
    {value: 'Korets', label: 'Korets'},
    {value: 'Kostopil', label: 'Kostopil'},
    {value: 'Ostroh', label: 'Ostroh'},
    {value: 'Radyvyliv', label: 'Radyvyliv'},
    {value: 'Rivne', label: 'Rivne'},
    {value: 'Sarny', label: 'Sarny'},
    {value: 'Varash', label: 'Varash'},
    {value: 'Zdolbuniv', label: 'Zdolbuniv'},
    
  ], 
  'Sumy Oblast': [
    {value: 'Bilopillia', label: 'Bilopillia'},
    {value: 'Buryn', label: 'Buryn'},
    {value: 'Hlukhiv', label: 'Hlukhiv'},
    {value: 'Konotop', label: 'Konotop'},
    {value: 'Krolevets', label: 'Krolevets'},
    {value: 'Lebedyn', label: 'Lebedyn'},
    {value: 'Okhtyrka', label: 'Okhtyrka'},
    {value: 'Putyvl', label: 'Putyvl'},
    {value: 'Romny', label: 'Romny'},
    {value: 'Seredyna-Buda', label: 'Seredyna-Buda'},
    {value: 'Shostka', label: 'Shostka'},
    {value: 'Sumy', label: 'Sumy'},
    {value: 'Trostianets', label: 'Trostianets'},
    {value: 'Vorozhba', label: 'Vorozhba'},    
  ],
  'Ternopil Oblast': [
    {value: 'Berezhany', label: 'Berezhany'},
    {value: 'Borshchiv', label: 'Borshchiv'},
    {value: 'Buchach', label: 'Buchach'},
    {value: 'Chortkiv', label: 'Chortkiv'},
    {value: 'Khorostkiv', label: 'Khorostkiv'},
    {value: 'Kopychyntsi', label: 'Kopychyntsi'},
    {value: 'Kremenets', label: 'Kremenets'},
    {value: 'Lanivtsi', label: 'Lanivtsi'},
    {value: 'Monastyryska', label: 'Monastyryska'},
    {value: 'Pidhaitsi', label: 'Pidhaitsi'},
    {value: 'Pochaiv', label: 'Pochaiv'},
    {value: 'Shumsk', label: 'Shumsk'},
    {value: 'Skalat', label: 'Skalat'},
    {value: 'Terebovlia', label: 'Terebovlia'},
    {value: 'Ternopil', label: 'Ternopil'},
    {value: 'Zalishchyky', label: 'Zalishchyky'},
    {value: 'Zbarazh', label: 'Zbarazh'},
    {value: 'Zboriv', label: 'Zboriv'},    
  ],
  'The Autonomous Republic of Crimea': [
    {value: '', label: ''},
  ],
  'Vinnytsia Oblast': [
    {value: 'Bar', label: 'Bar'},
    {value: 'Bershad', label: 'Bershad'},
    {value: 'Haisyn', label: 'Haisyn'},
    {value: 'Hnivan', label: 'Hnivan'},
    {value: 'Illintsi', label: 'Illintsi'},
    {value: 'Kalynivka', label: 'Kalynivka'},
    {value: 'Khmilnyk', label: 'Khmilnyk'},
    {value: 'Koziatyn', label: 'Koziatyn'},
    {value: 'Ladyzhyn', label: 'Ladyzhyn'},
    {value: 'Lypovets', label: 'Lypovets'},
    {value: 'Mohyliv-Podilskyi', label: 'Mohyliv-Podilskyi'},
    {value: 'Nemyriv', label: 'Nemyriv'},
    {value: 'Pohrebyshche', label: 'Pohrebyshche'},
    {value: 'Sharhorod', label: 'Sharhorod'},
    {value: 'Tulchyn', label: 'Tulchyn'},
    {value: 'Vinnytsia', label: 'Vinnytsia'},
    {value: 'Yampil', label: 'Yampil'},
    {value: 'Zhmerynka', label: 'Zhmerynka'},
  ],
  'Volyn Oblast': [
    {value: 'Berestechko', label: 'Berestechko'},
    {value: 'Horokhiv', label: 'Horokhiv'},
    {value: 'Kamin-Kashyrskyi', label: 'Kamin-Kashyrskyi'},
    {value: 'Kivertsi', label: 'Kivertsi'},
    {value: 'Kovel', label: 'Kovel'},
    {value: 'Liuboml', label: 'Liuboml'},
    {value: 'Lutsk', label: 'Lutsk'},
    {value: 'Novovolynsk', label: 'Novovolynsk'},
    {value: 'Rozhyshche', label: 'Rozhyshche'},
    {value: 'Ustyluh', label: 'Ustyluh'},    
  ],
  'Zakarpattia Oblast': [
    {value: 'Berehove', label: 'Berehove'},
    {value: 'Chop', label: 'Chop'},
    {value: 'Irshava', label: 'Irshava'},
    {value: 'Khust', label: 'Khust'},
    {value: 'Mukachevo', label: 'Mukachevo'},
    {value: 'Perechyn', label: 'Perechyn'},
    {value: 'Rakhiv', label: 'Rakhiv'},
    {value: 'Svaliava', label: 'Svaliava'},
    {value: 'Tiachiv', label: 'Tiachiv'},
    {value: 'Uzhhorod', label: 'Uzhhorod'},
    {value: 'Vynohradiv', label: 'Vynohradiv'},    
  ],
  'Zaporizhia Oblast': [
    {value: 'Berdiansk', label: 'Berdiansk'},
    {value: 'Dniprorudne', label: 'Dniprorudne'},
    {value: 'Enerhodar', label: 'Enerhodar'},
    {value: 'Huliaipole', label: 'Huliaipole'},
    {value: 'Kamianka-Dniprovska', label: 'Kamianka-Dniprovska'},
    {value: 'Melitopol', label: 'Melitopol'},
    {value: 'Molochansk', label: 'Molochansk'},
    {value: 'Orikhiv', label: 'Orikhiv'},
    {value: 'Polohy', label: 'Polohy'},
    {value: 'Prymorsk', label: 'Prymorsk'},
    {value: 'Tokmak', label: 'Tokmak'},
    {value: 'Vasylivka', label: 'Vasylivka'},
    {value: 'Vilniansk', label: 'Vilniansk'},    
  ],
  'Zhytomyr Oblast': [
    {value: 'Andrushivka', label: 'Andrushivka'},
    {value: 'Baranivka', label: 'Baranivka'},
    {value: 'Berdychiv', label: 'Berdychiv'},
    {value: 'Chudniv', label: 'Chudniv'},
    {value: 'Korosten', label: 'Korosten'},
    {value: 'Korostyshiv', label: 'Korostyshiv'},
    {value: 'Malyn', label: 'Malyn'},
    {value: 'Olevsk', label: 'Olevsk'},
    {value: 'Ovruch', label: 'Ovruch'},
    {value: 'Radomyshl', label: 'Radomyshl'},
    {value: 'Zhytomyr', label: 'Zhytomyr'},
    {value: 'Zviahel', label: 'Zviahel'},    
  ],
}

export const NP_BRANCHES = [
  {value: 1, label: 'Post branch #1'},
  {value: 2, label: 'Post branch #2'},
  {value: 3, label: 'Post branch #3'},
  {value: 4, label: 'Post branch #4'},
  {value: 5, label: 'Post branch #5'},
  {value: 6, label: 'Post branch #6'},
  {value: 7, label: 'Post branch #7'},
  {value: 8, label: 'Post branch #8'},
  {value: 9, label: 'Post branch #9'},
  {value: 10, label: 'Post branch #1p'},
  {value: 11, label: 'Post branch #11'},
  {value: 12, label: 'Post branch #12'},
]