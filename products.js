const catalogueProducts = [
    {
        name: "Johnnie Walker Black Label",
        category: "whisky",
        size: "750ml",
        price: "Ksh 4,500",
        description: "Johnnie Walker is a brand of Scotch whisky produced by Diageo in Scotland. It was established in the Scottish burgh of Kilmarnock in 1820, and continued to ...",
        image: "assets/images/real/johnnie_walker_black_label.png",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "4Th Roset",
        category: "other",
        size: "1.5L",
        price: "Ksh 2,640",
        description: "The company was founded by Antoine Roset in 1860 in Montagnieu, France as a small business manufacturing bentwood walking sticks. In 1936, the company started ...",
        image: "assets/images/real/4th_roset.jpg",
        isKenyan: false,
        country: "France"
    },
    {
        name: "4Th Street Red Swtt",
        category: "wine",
        size: "5L",
        price: "Ksh 6,600",
        description: "The South African lightly sparkled, naturally sweet, palate-pleasing rosé, 4th Street Sweet Red, is inspired by a passion for friendship and sharing.",
        image: "assets/images/real/4th_street_red_swtt.jpg",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "4Th Street Rosetr",
        category: "wine",
        size: "5L",
        price: "Ksh 5,370",
        description: "Our wines are made from high quality grapes sourced from selected premium vineyards throughout the lush Western Cape. Our grapes are harvested in the warm ...",
        image: "assets/images/real/4th_street_rosetr.jpg",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "4Th Street White",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,425",
        description: "Our wines are made from high quality grapes sourced from selected premium vineyards throughout the lush Western Cape. Our grapes are harvested in the warm ...",
        image: "assets/images/real/4th_street_white.jpg",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "4Th Strt Redt",
        category: "other",
        size: "1.5L",
        price: "Ksh 2,640",
        description: "Our wines are made from high quality grapes sourced from selected premium vineyards throughout the lush Western Cape. Our grapes are harvested in the warm ...",
        image: "assets/images/real/4th_strt_redt.jpg",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "4Th Strt Red",
        category: "other",
        size: "750ML",
        price: "Ksh 1,342",
        description: "The South African lightly sparkled, naturally sweet, palate-pleasing rosé, 4th Street Sweet Red, is inspired by a passion for friendship and sharing.",
        image: "assets/images/real/4th_strt_redt.jpg",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "4Th Strt White Sweett",
        category: "other",
        size: "5L",
        price: "Ksh 6,600",
        description: "This delightfully refreshing wine displays loads of tropical fruit notes on the nose and a burst of sweet fruity flavours on the palate.",
        image: "assets/images/real/4th_strt_white_sweett.jpg",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Assic Gin",
        category: "gin",
        size: "58 CL",
        price: "Ksh 2,055",
        description: "Gin originated as a medicinal liquor made by monks and alchemists across Europe. The modern gin was modified in Flanders and the Netherlands to provide aqua ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Classic+Gin",
        isKenyan: false,
        country: "Netherlands"
    },
    {
        name: "Assic G&T Can",
        category: "other",
        size: "58 CL",
        price: "Ksh 315",
        description: "The first carbonated quinine drink was launched by Schweppes in 1870. Due to its popularity in India, it was branded Indian Tonic Water. The amount of quinine ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "58 Spiced Orange",
        category: "other",
        size: "350ML",
        price: "Ksh 1,050",
        description: "KO 58 gin Spiced Orange is a light refreshing citrus-forward gin. It is made with ingredients grown in Kenya including; Orange, Dried Mango, Chilli and Turmeric ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "58 Spiced Orange",
        category: "other",
        size: "750ML",
        price: "Ksh 2,055",
        description: "KO 58 gin Spiced Orange is a light refreshing citrus-forward gin. It is made with ingredients grown in Kenya including; Orange, Dried Mango, Chilli and Turmeric ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "58 Spiced Orange G&T Can",
        category: "other",
        size: "750ML",
        price: "Ksh 315",
        description: "58 Gin Spiced Orange 750ml is a popular Kenyan Gin mostly taken during special occasions. It contains 40% alcohol. Best enjoyed with grilled chicken, ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "58 Very Berry G&T Can",
        category: "other",
        size: "750ML",
        price: "Ksh 315",
        description: "5.8 Gin & Tonic Very Berry 330ml ; Country of Origin. Kenya ; Alcohol Content. 5% ; Flavours & Spices. Berries ; Size. 330ml ; EAN, 5065010192713 ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "5Th Generationtr Red",
        category: "other",
        size: "5L",
        price: "Ksh 4,500",
        description: "5th Generation Red is a South African boxed wine that comes in a 5-liter format. It is a blend of Shiraz, Pinotage, and Cabernet Sauvignon grapes, and is ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "5Th Generation Whitetr",
        category: "other",
        size: "5L",
        price: "Ksh 4,500",
        description: "Tasting Note. LIGHT STRAW COLOR. FRESH AROMA OF WHITE PEACH AND TROPICAL FRUITS. BOLD FRUIT FLAVORS REMINISCENT OF PEAR AND MELON. RICH AND LONG FINISH.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "#7Gin Blueberry",
        category: "gin",
        size: "750ML",
        price: "Ksh 1,500",
        description: "#7 Blueberry Flavoured Gin 750ml ; Alcohol Content. 35% ; Country of Origin. South Africa ; Size. 750ml ; Flavours & Spices. Blueberry ; SKU: #74536 ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Classic+Gin",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "#7Gin Lime And Lemon",
        category: "gin",
        size: "750ML",
        price: "Ksh 1,500",
        description: "#7 Lemon & Lime Flavoured Gin 750ml ; Alcohol Content. 35% ; Flavours & Spices. Lemon ; Country of Origin. South Africa ; Size. 750ml ; SKU: GI#74540 ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Classic+Gin",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "#7Gin Mixed Berry",
        category: "gin",
        size: "750ML",
        price: "Ksh 1,500",
        description: "#7 Mixed Berry Flavoured Gin ; Country of Origin. South Africa ; Size. 750ml ; Flavours & Spices. Mixed Berry ; SKU: #74537 ; Brand · #7 ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Classic+Gin",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "#7Gin Orange",
        category: "gin",
        size: "750ML",
        price: "Ksh 1,500",
        description: "This gin, hailing from Italy, is certainly worth drinking and it also comes in a uniquely attractive bottle that invites tasters to enjoy “La ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Classic+Gin",
        isKenyan: false,
        country: "Italy"
    },
    {
        name: "#7Gin Original",
        category: "gin",
        size: "750ML",
        price: "Ksh 1,500",
        description: "South Africa's #7 Gin is a blended gin enhanced with flavor from seven botanicals for an exceptionally smooth finish. Product Details: Product Name: #7 Original ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Classic+Gin",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "#7Gin Passion",
        category: "gin",
        size: "750ML",
        price: "Ksh 1,500",
        description: "#7 Gin Passion Fruit 750ml + 2 Free Brothers Indian Tonic 330ml ; Country of Origin. South Africa ; Flavours & Spices. Passion ; Weight, N/A ; Dimensions, N/A ; Size.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Classic+Gin",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "#7Gin Pineapple",
        category: "gin",
        size: "750ML",
        price: "Ksh 1,500",
        description: "Blend of Plantation Original Dark Rum macerated with Queen Victoria pineapple flesh and a portion of white rum distilled with the rinds, finished as a ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Classic+Gin",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "7 Hills  Sweetred",
        category: "other",
        size: "750ML",
        price: "Ksh 1,328",
        description: "7 Hills Sweet Red 750ml is a South African Wine mostly taken during special occasions. It contains 8.4% alcohol. 7 Hills wine pairs well with red meat and ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "7 Hills Sweet White",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,328",
        description: "7 Hills Sweet White 750ml is a South African Wine mostly taken during special occasions. 7 Hills Sweet White 750ml contains 12% alcohol.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "8Pmt",
        category: "other",
        size: "1L",
        price: "Ksh 1,950",
        description: "Most wine names tie to the region where they're crafted or the grapes used during their production. While there are exceptions to the rule, most wineries stick ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "India"
    },
    {
        name: "8Pm Fire",
        category: "other",
        size: "750ML",
        price: "Ksh 1,680",
        description: "8PM Fire 750ml is a popular Indian Liqueur mostly taken during special occasions. This whisky delivers a rich, smoky flavour with a tantalizing hint of fiery ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "India"
    },
    {
        name: "8Pm Honey",
        category: "other",
        size: "750ML",
        price: "Ksh 1,680",
        description: "Product Name: 8PM Honey; Price: Ksh. 1200; Country of Origin: India; Type: Liqueur; Availability: In Stock. Discover an extensive range of drinks, including ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "India"
    },
    {
        name: "8Pm Whisky",
        category: "whisky",
        size: "750ML",
        price: "Ksh 1,500",
        description: "It is a Radico Khaitan brand, one of india's largest liquor manufacturers, which founded the company in 1999. The name “8pm” refers to the hour ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Premium+Whisky",
        isKenyan: false,
        country: "India"
    },
    {
        name: "99 Rosas Chardonnay Viog",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,920",
        description: "The 99 Rosas Chardonnay Viognier 75cl offers a delightful fusion of two of Spain's most cherished grape varieties. Produced in the sunlit ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Spain"
    },
    {
        name: "99 Rosas Temp Cab Sauv",
        category: "other",
        size: "750ML",
        price: "Ksh 1,920",
        description: "99 Rosas Tempranillo - Cabernet Sauvignon is produced on our Estate from organically grown grapes. Night harvested and cold macerated before fermenting. TASTING ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Spain"
    },
    {
        name: "Absolute (Pernod)",
        category: "vodka",
        size: "750ML",
        price: "Ksh 3,825",
        description: "Pernod Ricard is a French company best known for its anise-flavoured pastis apéritifs Pernod Anise and Ricard Pastis The world's second-largest wine and ...",
        image: "assets/images/real/absolute__pernod.jpg",
        isKenyan: false,
        country: "Sweden"
    },
    {
        name: "Absolute Vodkat",
        category: "vodka",
        size: "1L",
        price: "Ksh 3,075",
        description: "Absolut Vodka is a brand of vodka, produced near Åhus, in southern Sweden. Absolut is a part of the French group Pernod Ricard. Pernod Ricard bought Absolut ...",
        image: "assets/images/real/absolute_vodkat.jpg",
        isKenyan: false,
        country: "Sweden"
    },
    {
        name: "Absolute Vodka",
        category: "vodka",
        size: "750ML",
        price: "Ksh 2,925",
        description: "Absolut Vodka is a brand of vodka, produced near Åhus, in southern Sweden. Absolut is a part of the French group Pernod Ricard.",
        image: "assets/images/real/absolute_vodka.jpg",
        isKenyan: false,
        country: "Sweden"
    },
    {
        name: "Ac Blackitre",
        category: "other",
        size: "1L",
        price: "Ksh 2,100",
        description: "AC Black Whisky pays homage to a man's penchant for enjoying the pleasurable things in life. With its superior's blend of fine malt whisky from Scotland.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Ac Black",
        category: "other",
        size: "750ML",
        price: "Ksh 1,620",
        description: "AC Black Whisky is produced from a blend of imported scotch malts and selected Indian spirits. That same website tells me this is a semi-premium IMFL spirit.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "India"
    },
    {
        name: "Afia Energy",
        category: "other",
        size: "330ML",
        price: "Ksh 75",
        description: "afia Energy drink is a product of Kevian Kenya Ltd, your trusted home of pure African delights . For more info; www.afiaea.co.ke ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Afribullcafe",
        category: "other",
        size: "750ML",
        price: "Ksh 2,070",
        description: "Afri Bull Cafe Rum is a premium dark rum under the Afri Bull brand, expertly crafted in India. This rum has an Alcohol by Volume (ABV) of 45.0. Ideal for ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Air Vodka",
        category: "vodka",
        size: "700ML",
        price: "Ksh 825",
        description: "Historians are not clear on the exact origin of vodka since different sources link its beginning to both Russia and Poland. But one thing is clear: this ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Smooth+Vodka",
        isKenyan: false,
        country: "Russia"
    },
    {
        name: "Alandra Red",
        category: "other",
        size: "750ML",
        price: "Ksh 1,800",
        description: "The Alandra Alandra Red is a captivating red blend from Portugal, showcasing the region's rich winegrowing heritage. This 2018 vintage offers a delightful ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Portugal"
    },
    {
        name: "Alandra White",
        category: "other",
        size: "750ML",
        price: "Ksh 1,800",
        description: "Created from the Douro Superior traditional grapes, this vinegar matured in oak barrels, providing a rounded and fresh taste. Ingredients: Wine vinegar, water,.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Portugal"
    },
    {
        name: "All Seasons Whisky",
        category: "whisky",
        size: "250ML",
        price: "Ksh 570",
        description: "Description : All Seasons is an Indian whiskey brand launched by Oasis Group India. All-Season is India's fastest-growing brand of whiskey, ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Premium+Whisky",
        isKenyan: false,
        country: "India"
    },
    {
        name: "All Seasons Whisky",
        category: "whisky",
        size: "500ML",
        price: "Ksh 1,178",
        description: "Description : All Seasons is an Indian whiskey brand launched by Oasis Group India. All-Season is India's fastest-growing brand of whiskey, ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Premium+Whisky",
        isKenyan: false,
        country: "India"
    },
    {
        name: "All Seasons Whsky",
        category: "other",
        size: "375ML",
        price: "Ksh 878",
        description: "All Seasons is an Indian whiskey brand launched by Oasis Group India. Oasis Group is one of the top player amongst the emerging Indian spirits market with their ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "India"
    },
    {
        name: "All Seasons Whsky",
        category: "other",
        size: "750ML",
        price: "Ksh 1,763",
        description: "All Seasons is an Indian whiskey brand launched by Oasis Group India. Oasis Group is one of the top player amongst the emerging Indian spirits market with their ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "India"
    },
    {
        name: "Allsops Beer",
        category: "beer",
        size: "750ML",
        price: "Ksh 203",
        description: "The first drop of bona fide Allsopp family beeris brewed in Burton-on-Trent – the beer capital of Britain – by Benjamin Wilson Sr. ... To expand operations, ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Chilled+Beer",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Alta Wine",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,740",
        description: "Through meticulous attention to detail in the vineyard, our wines are able to express the unique and diverse character of Napa Valley's soils and climate. Our ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Fine+Wine",
        isKenyan: false,
        country: "USA"
    },
    {
        name: "Amani Sweet Red",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,065",
        description: "The Amani Bay Sweet Red is an easy drinking blend with plenty of berry fruit flavors. The palate entrance is soft and smooth with ripe tannins that balance ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Amani Sweet White",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,065",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Amarula",
        category: "liqueur",
        size: "1 L",
        price: "Ksh 3,375",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Amarula",
        category: "liqueur",
        size: "350ML",
        price: "Ksh 1,500",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Amarula",
        category: "liqueur",
        size: "750ML",
        price: "Ksh 2,850",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Analivia Sav",
        category: "other",
        size: "750ML",
        price: "Ksh 2,550",
        description: "Analivia Sauvignon Blanc is made in our Pagos del Rey winery in Rueda, in the province of Valladolid. Sauvignon Blanc is an international variety originally ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Spain"
    },
    {
        name: "Angostura Bitters",
        category: "other",
        size: "200ML",
        price: "Ksh 3,900",
        description: "The bitters were first produced in the namesake town of Angostura (now Ciudad Bolívar, Venezuela) but do not contain angostura bark. The bottle is recognisable ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Trinidad and Tobago"
    },
    {
        name: "Annabelle Cuvee Rose",
        category: "other",
        size: "750ML",
        price: "Ksh 2,093",
        description: "WINE OF ORIGIN: Western Cape. ABOUT THE AREA: South Africa's vineyards ... WINE DESCRIPTION: This easy drinking sweet rosé has upfront tropical fruit ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Appleton",
        category: "other",
        size: "700ML",
        price: "Ksh 5,700",
        description: "Rooted in Jamaica's Nassau Valley, Appleton Estate leverages unique terroir, limestone water and tropical climate to craft our aged rums. With naturally derived ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Jamaica"
    },
    {
        name: "Aqula",
        category: "other",
        size: "500ML",
        price: "Ksh 750",
        description: "The Aquila Liqueurs distillery, founded in 1992, reached a remarkable development in a short time in the Albanian market. In its beginnings, a new modern plant ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Albania"
    },
    {
        name: "Arcadia Rum",
        category: "rum",
        size: "750ML",
        price: "Ksh 1,020",
        description: "Acadian is a grassy and vegetal spirit with a citrus spark and notes of warm hay and green pears. It is plays well in cocktails designed for agricole and cacha ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Arcadia Whisky",
        category: "whisky",
        size: "750ML",
        price: "Ksh 1,335",
        description: "Browse our handpicked collections of premium whiskey, wine, and spirits. Shop exclusive liquor selections, curated for your taste from ARCADIA WINE ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Premium+Whisky",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Arcadia White Swt",
        category: "other",
        size: "750ML",
        price: "Ksh 1,170",
        description: "This drink is prepared from the finest vineyards of France to give you absolute perfection. It is brewed by experienced artists of the winery industry-Arcadia ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Asconi Agorlux",
        category: "other",
        size: "750ML",
        price: "Ksh 2,187",
        description: "Varietal 75.03% Merlot, 11.24% Petite Sirah; 13.73% Cabernet Sauvignon Alcohol: 13.4% Region: California Taste: Taste Dominated by earth ...",
        image: "assets/images/real/asconi_agorlux.jpg",
        isKenyan: false,
        country: "Moldova"
    },
    {
        name: "Asconi Kiss Me Now",
        category: "other",
        size: "750ML",
        price: "Ksh 2,268",
        description: "If you want a red wine that feels lush, friendly and uncomplicated, Kiss Me Now Cabernet Sauvignon 75cl is a strong pick. Its Moldovan origin, semi-sweet style ...",
        image: "assets/images/real/asconi_kiss_me_now.jpg",
        isKenyan: false,
        country: "Moldova"
    },
    {
        name: "Asconi Moscato Rose",
        category: "other",
        size: "750ML",
        price: "Ksh 2,268",
        description: "Asconi Moscato Rose is a premium rose wine under the Asconi Wines brand, expertly crafted in Moldova. This wine has an Alcohol by Volume (ABV) of 7.0. Ideal for ...",
        image: "assets/images/real/asconi_moscato_rose.jpg",
        isKenyan: false,
        country: "Moldova"
    },
    {
        name: "Asconi Moscato Swt Wht",
        category: "other",
        size: "750ML",
        price: "Ksh 2,187",
        description: "Asconi Moscato is a charming and aromatic sweet wine from Moldova, known for its light and fruity character. This Moscato offers a refreshing taste, making it a ...",
        image: "assets/images/real/asconi_moscato_swt_wht.jpg",
        isKenyan: false,
        country: "Moldova"
    },
    {
        name: "Asconi Pastoral",
        category: "other",
        size: "750ML",
        price: "Ksh 2,349",
        description: "This red wine from Moldova is uniquely curated from Cabernet Sauvignon grapes. Nose: Expressive notes of plum and cherry merging with vanilla and hints of spice ...",
        image: "assets/images/real/asconi_pastoral.jpg",
        isKenyan: false,
        country: "Moldova"
    },
    {
        name: "Asconi Semi Dry",
        category: "other",
        size: "750ML",
        price: "Ksh 2,106",
        description: "Asconi Red Semidry 75cl ; Size. 750ml ; Country of Origin. Moldova ; Packaging. Bottle ; Sweetness. Semi-Dry ; Flavours & Spices. Blackberry, Plum, Vanilla.",
        image: "assets/images/real/asconi_semi_dry.jpg",
        isKenyan: false,
        country: "Moldova"
    },
    {
        name: "Asconi Sol Negru",
        category: "other",
        size: "750ML",
        price: "Ksh 2,187",
        description: "Tonight we are going to review a single varietal feteasca neagra wine, which is an indigenous romanian grape variety with moldovan origins – Sol ...",
        image: "assets/images/real/asconi_sol_negru.jpg",
        isKenyan: false,
        country: "Moldova"
    },
    {
        name: "Aspera Gin",
        category: "gin",
        size: "250ML",
        price: "Ksh 277",
        description: "Alcohol Content: 40% ; Type: Dry Gin ; Origin: Kenya ; Colour: Clear ; Perfect For: Mixing in cocktails, sipping, or pairing with tonic and garnishes for a ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Classic+Gin",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Aspera Gin",
        category: "gin",
        size: "750ML",
        price: "Ksh 802",
        description: "Alcohol Content: 40% ; Type: Dry Gin ; Origin: Kenya ; Colour: Clear ; Perfect For: Mixing in cocktails, sipping, or pairing with tonic and garnishes for a ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Classic+Gin",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Atlas 12 %",
        category: "other",
        size: "750ML",
        price: "Ksh 330",
        description: "Atlas 12 is a European Strong Lager style beer brewed by Union Export Brewery in Breda, Netherlands. Score: - with 7 ratings and reviews.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Netherlands"
    },
    {
        name: "Atlas 14%",
        category: "other",
        size: "750ML",
        price: "Ksh 420",
        description: "Wine consumption in Japan has experienced significant growth since the 1960s, but wine as a share of total alcoholic beverage consumption is low ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Japan"
    },
    {
        name: "Avalon Gin",
        category: "gin",
        size: "250ML",
        price: "Ksh 285",
        description: "Alcohol Content: 40% ; Country of Origin: Ireland ; Colour: Clear ; Type: Dry Gin ; Perfect For: Neat sipping, on the rocks, or in classic gin cocktails. Great for ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Classic+Gin",
        isKenyan: false,
        country: "Ireland"
    },
    {
        name: "Avalon Gin",
        category: "gin",
        size: "750ML",
        price: "Ksh 825",
        description: "Alcohol Content: 40% ; Country of Origin: Ireland ; Colour: Clear ; Type: Dry Gin ; Perfect For: Neat sipping, on the rocks, or in classic gin cocktails. Great for ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Classic+Gin",
        isKenyan: false,
        country: "Ireland"
    },
    {
        name: "Avalon Vodka",
        category: "vodka",
        size: "250ML",
        price: "Ksh 285",
        description: "Alcohol Content: 40% ; Country of Origin: Ireland ; Colour: Clear ; Type: Grain Vodka ; Perfect For: Mixing into cocktails, sipping neat, or enjoying on the rocks.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Smooth+Vodka",
        isKenyan: false,
        country: "Ireland"
    },
    {
        name: "Avalon Vodka",
        category: "vodka",
        size: "750ML",
        price: "Ksh 825",
        description: "Alcohol Content: 40% ; Country of Origin: Ireland ; Colour: Clear ; Type: Grain Vodka ; Perfect For: Mixing into cocktails, sipping neat, or enjoying on the rocks.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Smooth+Vodka",
        isKenyan: false,
        country: "Ireland"
    },
    {
        name: "Bacardi Blance",
        category: "rum",
        size: "1L",
        price: "Ksh 3,420",
        description: "Founded in Cuba in 1862 by Facundo Bacardí i Massó, a Spanish businessman born in Sitges, Bacardi Limited has been family-owned for seven generations, and ...",
        image: "assets/images/real/bacardi_blance_3_4.jpg",
        isKenyan: false,
        country: "Puerto Rico"
    },
    {
        name: "Bacardi Blance 3/4",
        category: "rum",
        size: "750ML",
        price: "Ksh 2,700",
        description: "Floral and fruity, BACARDÍ Carta Blanca rum serves up orange blossom, lavender and rose, teamed with apricot, lime, light coconut and ripe banana.",
        image: "assets/images/real/bacardi_blance_3_4.jpg",
        isKenyan: false,
        country: "Puerto Rico"
    },
    {
        name: "Bacardi Carta Orot",
        category: "rum",
        size: "1L",
        price: "Ksh 3,420",
        description: "BACARDÍ Carta Oro rum brings together rich, soothing flavours like vanilla, buttery caramel, toasted almond and sweet banana notes.",
        image: "assets/images/real/bacardi_carta_orot.jpg",
        isKenyan: false,
        country: "Puerto Rico"
    },
    {
        name: "Bacardi Carte Oro 3/4",
        category: "rum",
        size: "750ML",
        price: "Ksh 2,550",
        description: "BACARDÍ Carta Oro rum brings together rich, soothing flavours like vanilla, buttery caramel, toasted almond and sweet banana notes.",
        image: "assets/images/real/bacardi_carte_oro_3_4.jpg",
        isKenyan: false,
        country: "Puerto Rico"
    },
    {
        name: "Bacardi Negra 3/4",
        category: "rum",
        size: "750ML",
        price: "Ksh 2,550",
        description: "Dark in color, light-medium in body, rich and robust in taste, BACARDÍ Black Rum imparts impressions of tropical fruit and molasses, with a smoky finish. Nose.",
        image: "assets/images/real/bacardi_negra_3_4.jpg",
        isKenyan: false,
        country: "Puerto Rico"
    },
    {
        name: "Bacardi Oak Heart",
        category: "rum",
        size: "750ML",
        price: "Ksh 2,550",
        description: ": Bacardi Alcohol by volume: 35% Alcohol proof: Age: Spices: Produced since: Country of Origin: Cuba / Puerto Rico. (0 votes). Info: Bacardi – originating in ...",
        image: "assets/images/real/bacardi_oak_heart.jpg",
        isKenyan: false,
        country: "Puerto Rico"
    },
    {
        name: "Bacardi Spcd",
        category: "rum",
        size: "750ML",
        price: "Ksh 2,550",
        description: "Made with aged rum and with a hint of smokiness from charred American oak barrels, BACARDÍ Spiced is a Gluten free rum blended with natural flavors and spices.",
        image: "assets/images/real/bacardi_spcd.jpg",
        isKenyan: false,
        country: "Puerto Rico"
    },
    {
        name: "Back Bencher Wsky",
        category: "other",
        size: "750ML",
        price: "Ksh 1,575",
        description: "Tonight's Cocktail uses El Tesoro de Don Felipe Blanco, with flavors of Agave, Black Pepper, Citrus, Earthy, Vegetal, Minerally and Grass notes ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "India"
    },
    {
        name: "Baileys",
        category: "liqueur",
        size: "1L",
        price: "Ksh 4,125",
        description: "Baileys Irish Cream is a liqueur made of cream, cocoa and Irish whiskey emulsified together with vegetable oil. Baileys is made by Diageo at Nangor Road, ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Ireland"
    },
    {
        name: "Baileys",
        category: "liqueur",
        size: "375ML",
        price: "Ksh 1,830",
        description: "Baileys Irish Cream is a liqueur made of cream, cocoa and Irish whiskey emulsified together with vegetable oil. Baileys is made by Diageo at Nangor Road, ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Ireland"
    },
    {
        name: "Baileys",
        category: "liqueur",
        size: "750ML",
        price: "Ksh 3,750",
        description: "Baileys Irish Cream is a liqueur made of cream, cocoa and Irish whiskey emulsified together with vegetable oil. Baileys is made by Diageo at Nangor Road, ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Ireland"
    },
    {
        name: "Baileys Delight",
        category: "liqueur",
        size: "350ML",
        price: "Ksh 682",
        description: "Baileys Delight Cream Liqueur combines the finest Irish dairy cream with sweet African honey, creating a unique and indulgent drinking experience. Its smooth, ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Ireland"
    },
    {
        name: "Baileys Delight",
        category: "liqueur",
        size: "750ML",
        price: "Ksh 1,230",
        description: "Baileys Delight Cream Liqueur combines the finest Irish dairy cream with sweet African honey, creating a unique and indulgent drinking experience. Its smooth, ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Ireland"
    },
    {
        name: "Baileys Strawberry",
        category: "liqueur",
        size: "750ML",
        price: "Ksh 2,250",
        description: "ABV / Proof, 17% ABV (~34 Proof) ; Origin / Region, Ireland ; Production / Base, Irish cream liqueur (cream + Irish whiskey) ; Aging or Maturation, Ready-to-drink; ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Ireland"
    },
    {
        name: "Ballantinest",
        category: "other",
        size: "1L",
        price: "Ksh 3,450",
        description: "Ballantine's is a brand of blended Scotch whisky produced by the Chivas Brothers subsidiary of Pernod Ricard in Dumbarton, Scotland.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Ballantines",
        category: "other",
        size: "350ML",
        price: "Ksh 1,680",
        description: "Ballantine's is a brand of blended Scotch whisky produced by the Chivas Brothers subsidiary of Pernod Ricard in Dumbarton, Scotland.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Ballantines",
        category: "other",
        size: "750 ML",
        price: "Ksh 3,000",
        description: "Ballantine's is a brand of blended Scotch whisky produced by the Chivas Brothers subsidiary of Pernod Ricard in Dumbarton, Scotland.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Ballantines(Pernod)",
        category: "other",
        size: "750ML",
        price: "Ksh 3,870",
        description: "Ballantine's is a brand of blended Scotch whisky produced by the Chivas Brothers subsidiary of Pernod Ricard in Dumbarton, Scotland.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Balozi Beer",
        category: "beer",
        size: "750ML",
        price: "Ksh 254",
        description: "Balozi is a European Pale Lager style beer brewed by East African Breweries Ltd (Kenya Breweries) in Nairobi, Kenya. Score: - with 5 ratings and reviews.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Chilled+Beer",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Balozi Can",
        category: "beer",
        size: "750ML",
        price: "Ksh 305",
        description: "A rich, natural tasting beer made from pure water originating from the heart of the Aberdares and the finest malted barley with no added sugar.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Balvenie 14",
        category: "other",
        size: "700ML",
        price: "Ksh 30,000",
        description: "An exceptional single malt whisky with the traditional smooth, honeyed character of The Balvenie married with notes of toffee and a hint of fruit.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Banana Beer",
        category: "beer",
        size: "500ML",
        price: "Ksh 108",
        description: "Banana beer is an alcoholic beverage made from fermentation of mashed bananas. Sorghum, millet or maize flour are added as a source of wild yeast.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Chilled+Beer",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Base Qube Energy",
        category: "other",
        size: "750ML",
        price: "Ksh 165",
        description: "With its origins in the UK, Qube brings a unique blend of excellence and refreshment to the Kenyan market. Join the Qube Movement: A Stellar Addition to Kenya's ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Bavaria(8.6)",
        category: "other",
        size: "750ML",
        price: "Ksh 413",
        description: "ABV is 7.9%. Golden colour, large lasting head, decent lacing. Malty and fruity aroma with some alcoholic notes, but not unpleasant. Hints of oak and leather.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Netherlands"
    },
    {
        name: "Bavaria Apple",
        category: "other",
        size: "750ML",
        price: "Ksh 203",
        description: "German ciders are made from various kinds of sour tasting apples (such as 'Bohnapfel') and are distinguished by an alcohol content of 4.8–7.0% alongside a tart, ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Netherlands"
    },
    {
        name: "Bavaria Orange",
        category: "other",
        size: "750ML",
        price: "Ksh 203",
        description: "Bavaria 0.0% Orange Malt Drink is a non-alcoholic beverage crafted with ... Country of Origin. Netherland. Flavours & Spices. Orange. GTIN-8, 8714800050494 ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Netherlands"
    },
    {
        name: "Bavaria Original 0.0",
        category: "gin",
        size: "750ML",
        price: "Ksh 203",
        description: "Bavaria 0.0% has a strong bite in its aftertaste, without alcohol. Brewed with the best natural ingredients and natural mineral water from Bavaria's own spring.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Classic+Gin",
        isKenyan: false,
        country: "Netherlands"
    },
    {
        name: "Beefeater Cleart",
        category: "gin",
        size: "1L",
        price: "Ksh 5,077",
        description: "Beefeater Gin is a brand of gin owned by Pernod Ricard and bottled and distributed in the United Kingdom. Beefeater remained in the control of its founding ...",
        image: "assets/images/real/beefeater_cleart.jpg",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Beefeater Clear",
        category: "gin",
        size: "750ML",
        price: "Ksh 3,870",
        description: "Beefeater Gin is a brand of gin owned by Pernod Ricard and bottled and distributed in the United Kingdom. Beefeater remained in the control of its founding ...",
        image: "assets/images/real/beefeater_cleart.jpg",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Beefeater Orange",
        category: "gin",
        size: "750ML",
        price: "Ksh 3,600",
        description: "Beefeater Gin founder James Burrough hand selected oranges from London's Covent Garden Market in 1876 to create an Orange Gin. This recipe inspired their new ...",
        image: "assets/images/real/beefeater_orange.jpg",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Beefeater Pinkt",
        category: "gin",
        size: "1L",
        price: "Ksh 3,975",
        description: "The 'pink' element of the Beefeater Pink Strawberry gin is a beautiful, natural strawberry flavour. We use the original recipe of the Beefeater London Dry and ...",
        image: "assets/images/real/beefeater_pinkt.jpg",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Beefeater Pink",
        category: "gin",
        size: "750ML",
        price: "Ksh 4,125",
        description: "The 'pink' element of the Beefeater Pink Strawberry gin is a beautiful, natural strawberry flavour. We use the original recipe of the Beefeater London Dry and ...",
        image: "assets/images/real/beefeater_pinkt.jpg",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Belaire Bleu",
        category: "wine",
        size: "750ML",
        price: "Ksh 6,300",
        description: "Its spectacular sapphire color, inspired by the beautiful blue waters of the Côte d'Azur, is ideal for dramatic cocktails as well! Our wines are crafted by 5th ...",
        image: "assets/images/real/belaire_bleu.jpg",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Belaire Brut",
        category: "wine",
        size: "750ML",
        price: "Ksh 6,300",
        description: "The Belaire range is made in Burgundy, one of France's most historically significant winemaking regions. We began with our iconic Rare Rosé, instantly ...",
        image: "assets/images/real/belaire_brut.jpg",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Belaire Fantome Gold",
        category: "wine",
        size: "750ML",
        price: "Ksh 6,600",
        description: "Produced in Burgundy, France from fine Chardonnay and Pinot Noir grapes, Belaire Gold is stunning inside and out. Balanced and elegant, this classic cuvée is ...",
        image: "assets/images/real/belaire_fantome_gold.jpg",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Belaire Gold",
        category: "wine",
        size: "750ML",
        price: "Ksh 6,600",
        description: "Originating from the renowned wine-producing regions in France, primarily Provence-Alpes-Côte d'Azur and Burgundy, Belaire Champagne stands as a ...",
        image: "assets/images/real/belaire_gold_pernod_.jpg",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Belaire Gold(Pernod)",
        category: "wine",
        size: "750ML",
        price: "Ksh 8,340",
        description: "Created in the heart of Burgundy from a blend of handpicked Chardonnay and Pinot Noir grapes, Belaire Brut Gold is stunning inside and out, adding a touch of ...",
        image: "assets/images/real/belaire_gold_pernod_.jpg",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Belaire Luxe",
        category: "wine",
        size: "750ML",
        price: "Ksh 6,600",
        description: "America's #1 sparkling wine or Champagne brand – Luc Belaire exemplifies quality, heritage and style. An unforgettable experience in every bottle.",
        image: "assets/images/real/belaire_luxe__pernod_.jpg",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Belaire Luxe (Pernod)",
        category: "wine",
        size: "750ML",
        price: "Ksh 7,485",
        description: "Its Luxe and Gold cuvées are crafted in Burgundy, while Rare Rosé and Luxe Rosé originate from the Provence-Alpes-Côte d'Azur region, renowned for its ...",
        image: "assets/images/real/belaire_luxe__pernod_.jpg",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Belaire Rose Black",
        category: "wine",
        size: "750ML",
        price: "Ksh 6,600",
        description: "Belaire Rosé is a French sparkling wine produced in the Provence-Alpes-Côte d'Azur region of the South of France. Officially labelled 'Luc Belaire Rare Rosé ...",
        image: "assets/images/real/belaire_rose_black_fantome.jpg",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Belaire Rose Black(Fantome)",
        category: "wine",
        size: "750ML",
        price: "Ksh 6,750",
        description: "Each bottle of Belaire Rose is born in southeastern France's Provence-Alpes-Cote d'Azur region, stretching 150 miles from the French Riviera, Monaco, and the ...",
        image: "assets/images/real/belaire_rose_black_fantome.jpg",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Belaire Rose Black(Pernod)",
        category: "wine",
        size: "750ML",
        price: "Ksh 7,485",
        description: "Belaire Rosé is a French sparkling wine produced in the Provence-Alpes-Côte d'Azur region of the South of France. Officially labelled 'Luc Belaire Rare Rosé ...",
        image: "assets/images/real/belaire_rose_black_pernod_.jpg",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Belaire Rose Pink",
        category: "wine",
        size: "750ML",
        price: "Ksh 6,600",
        description: "Belaire Rosé is a French sparkling wine produced in the Provence-Alpes-Côte d'Azur region of the South of France. Officially labelled 'Luc Belaire Rare Rosé ...",
        image: "assets/images/real/belaire_rose_pink.jpg",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Bertrams Vo Brdy",
        category: "other",
        size: "750ML",
        price: "Ksh 1,275",
        description: "Introduced in 1950, Bertrams VO™ can trace its roots back to the early pioneering days of brandy distilling in South Africa, and relies on the best, traditional ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Best Cream",
        category: "liqueur",
        size: "250ML",
        price: "Ksh 525",
        description: "The combination of Austrian origin, clearly defined branding, and consistent product ... Hailing from South Africa, this cream liqueur is produced ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Best Cream",
        category: "liqueur",
        size: "750ML",
        price: "Ksh 1,463",
        description: "The combination of Austrian origin, clearly defined branding, and consistent product ... Hailing from South Africa, this cream liqueur is produced ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Best Gin",
        category: "gin",
        size: "250ML",
        price: "Ksh 390",
        description: "The Botanist is a Scottish gin made on Islay, the region best known for its smoky, peated scotch. “The Botanist incorporates a whole lot of local flavors by ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Classic+Gin",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Best Gin",
        category: "gin",
        size: "750ML",
        price: "Ksh 1,103",
        description: "The Botanist is a Scottish gin made on Islay, the region best known for its smoky, peated scotch. “The Botanist incorporates a whole lot of local flavors by ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Classic+Gin",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Best Vodka",
        category: "vodka",
        size: "250ML",
        price: "Ksh 368",
        description: "17 Best Vodkas for Every Home Bar · Broken Shed Premium Vodka · Carbonadi Vodka · Chopin Family Reserve Extra Rare Young Potato Vodka · FAIR Quinoa ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Smooth+Vodka",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Best Vodka",
        category: "vodka",
        size: "750ML",
        price: "Ksh 1,043",
        description: "17 Best Vodkas for Every Home Bar · Broken Shed Premium Vodka · Carbonadi Vodka · Chopin Family Reserve Extra Rare Young Potato Vodka · FAIR Quinoa ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Smooth+Vodka",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Best Whisky",
        category: "whisky",
        size: "250ML",
        price: "Ksh 465",
        description: "Every year at VinePair HQ, we taste through thousands of spirits to choose the cream of the crop. Here are the 50 best spirits for 2025.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Premium+Whisky",
        isKenyan: false,
        country: "USA"
    },
    {
        name: "Best Whisky",
        category: "whisky",
        size: "750ML",
        price: "Ksh 1,365",
        description: "Every year at VinePair HQ, we taste through thousands of spirits to choose the cream of the crop. Here are the 50 best spirits for 2025.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Premium+Whisky",
        isKenyan: false,
        country: "USA"
    },
    {
        name: "Bittolla Red",
        category: "other",
        size: "750ML",
        price: "Ksh 1,800",
        description: "Bitola red is a popular Portugal wine mostly taken during special occasions. Bitola Red contain 14% alcohol. This Wine pairs well with grilled meats, roasted ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Portugal"
    },
    {
        name: "Bl",
        category: "other",
        size: "750ML",
        price: "Ksh 3,225",
        description: "The TTB.gov Wine Appellations of Origin homepage serves as a virtual warehouse of all US and foreign appellations of origin.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Black Bird Swt Red",
        category: "other",
        size: "750ML",
        price: "Ksh 1,425",
        description: "Crafted from grapes grown in the heart of the Western Cape, our wine reflects the unique terroir, delivering a flavor profile that is distinctly coastal and ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Black Bird Swt  White",
        category: "other",
        size: "750ML",
        price: "Ksh 1,425",
        description: "Crafted from grapes grown in the heart of the Western Cape, our wine reflects the unique terroir, delivering a flavor profile that is distinctly coastal and ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Black Ice Beer",
        category: "beer",
        size: "750ML",
        price: "Ksh 242",
        description: "An 'ice-brewed' beer with a clean, fresh, snappy taste and a mellow aftertaste from its unique ice-filtering process. 6.1% alcohol by volume.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Chilled+Beer",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Black Ice Can",
        category: "other",
        size: "330ML",
        price: "Ksh 267",
        description: "Black Ice. An 'ice-brewed' beer with a clean, fresh, snappy taste and a mellow aftertaste from its unique ice-filtering process. 6.1% alcohol by volume.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Black Ram Honey",
        category: "other",
        size: "750ML",
        price: "Ksh 1,200",
        description: "Black Ram Honey spirit drink is made with Black Ram blended whisky and infused with rich honey Flavourings. The delicate sweetness of honey and ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Bulgaria"
    },
    {
        name: "Black Ram Whskyt",
        category: "other",
        size: "1L",
        price: "Ksh 1,560",
        description: "Black Ram is pleasant to drink, has a smooth finish and little residual smoke which envelopes its legendary character – aged to perfection, made for everyday ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Bulgaria"
    },
    {
        name: "Black Ram Whsky",
        category: "other",
        size: "750ML",
        price: "Ksh 1,178",
        description: "Black Ram is pleasant to drink, has a smooth finish and little residual smoke which envelopes its legendary character – aged to perfection, made for everyday ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Bulgaria"
    },
    {
        name: "Black & Whitet",
        category: "whisky",
        size: "1L",
        price: "Ksh 2,250",
        description: "Black & White is a blended Scotch whisky produced by Diageo in Scotland. It was originally produced by the London-based James Buchanan & Co Ltd.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Black & White",
        category: "whisky",
        size: "250ML",
        price: "Ksh 593",
        description: "Black & White is a blended Scotch whisky produced by Diageo in Scotland. It was originally produced by the London-based James Buchanan & Co Ltd.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Black & White",
        category: "whisky",
        size: "375ML",
        price: "Ksh 863",
        description: "Black & White is a blended Scotch whisky produced by Diageo in Scotland. It was originally produced by the London-based James Buchanan & Co Ltd.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Black & White",
        category: "whisky",
        size: "750ML",
        price: "Ksh 1,695",
        description: "Black & White is a blended Scotch whisky produced by Diageo in Scotland. It was originally produced by the London-based James Buchanan & Co Ltd.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Blue Curacao Liqueur",
        category: "liqueur",
        size: "700ML",
        price: "Ksh 3,225",
        description: "Curaçao is a liqueur flavored with the dried peel of the bitter orange variety laraha, a citrus fruit grown on the Caribbean island of Curaçao. Curaçao ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Fine+Liqueur",
        isKenyan: false,
        country: "Curacao"
    },
    {
        name: "Blue Curacao Syrup",
        category: "other",
        size: "700ML",
        price: "Ksh 2,145",
        description: "Curaçao is a liqueur flavored with the dried peel of the bitter orange variety laraha, a citrus fruit grown on the Caribbean island of Curaçao. Curaçao ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Curacao"
    },
    {
        name: "Blue Ice Coco 1/4",
        category: "other",
        size: "750ML",
        price: "Ksh 630",
        description: "We are handcrafted and American made with a singular goal – to create the best tasting vodka ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "USA"
    },
    {
        name: "Blue Ice Vodka",
        category: "vodka",
        size: "250ML",
        price: "Ksh 225",
        description: "We are handcrafted and American made with a singular goal – to create the best tasting vodka ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Smooth+Vodka",
        isKenyan: false,
        country: "USA"
    },
    {
        name: "Blue Ice Vodka",
        category: "vodka",
        size: "750ML",
        price: "Ksh 630",
        description: "We are handcrafted and American made with a singular goal – to create the best tasting vodka ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Smooth+Vodka",
        isKenyan: false,
        country: "USA"
    },
    {
        name: "Blue Moon",
        category: "other",
        size: "250ML",
        price: "Ksh 270",
        description: "Blue Moon Belgian White is a Belgian-style witbier brewed by Molson Coors under the name the Blue Moon Brewing Co. It was launched in 1995.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "USA"
    },
    {
        name: "Blue Moon 750M",
        category: "other",
        size: "750ML",
        price: "Ksh 705",
        description: "A medium bodied pure blueberry wine with intense blueberry character and a wonderful blueberry finish. Extremely tasty with cheesecake.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "USA"
    },
    {
        name: "Bols Blue Curacao",
        category: "other",
        size: "750ML",
        price: "Ksh 2,775",
        description: "The Curaçao liqueur was first made by the Dutch settlers who colonized the island in the 17th century, and it quickly became popular in Europe.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Curacao"
    },
    {
        name: "Bols Elderflower",
        category: "other",
        size: "750ML",
        price: "Ksh 2,775",
        description: "Bols Elderflower Liqueur from Netherlands - Bols Elderflower is a clear liqueur made from honey scented blossoms of the elder tree, also called the sambucus ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Netherlands"
    },
    {
        name: "Bols Triple Sec",
        category: "other",
        size: "700ML",
        price: "Ksh 2,775",
        description: "Triple Sec is a type of orange-flavored liqueur that originated in France in the mid-19th century. The term 'Triple Sec' refers to the triple ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Bols Vodka",
        category: "vodka",
        size: "750ML",
        price: "Ksh 1,425",
        description: "Bols is a brand name used by Lucas Bols, a Dutch distiller of alcoholic beverages. The brand line consists of vodkas, gins, genevers, advocaats and liqueurs.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Smooth+Vodka",
        isKenyan: false,
        country: "Netherlands"
    },
    {
        name: "Bombay Dry Gint",
        category: "gin",
        size: "1L",
        price: "Ksh 2,400",
        description: "Bombay Sapphire is a brand of infused gin distilled by the Bombay Spirits Company, a subsidiary company of Bacardi, at Laverstoke Mill in the village of ...",
        image: "assets/images/real/bombay_dry_gint.jpg",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Bombay Dry Gin",
        category: "gin",
        size: "750ML",
        price: "Ksh 2,400",
        description: "Bombay Dry Gin, similar to its more famous sister Bombay Sapphire, is distilled from a base of grain and imparts the botanicals through vapor infusion.",
        image: "assets/images/real/bombay_dry_gint.jpg",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Bombay Sapphireitre",
        category: "gin",
        size: "1L",
        price: "Ksh 4,050",
        description: "Bombay Sapphire is a brand of infused gin distilled by the Bombay Spirits Company, a subsidiary company of Bacardi, at Laverstoke Mill in the village of ...",
        image: "assets/images/real/bombay_sapphireitre.jpg",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Bombay Sapphire",
        category: "gin",
        size: "750ML",
        price: "Ksh 3,600",
        description: "Bombay Sapphire is a brand of infused gin distilled by the Bombay Spirits Company, a subsidiary company of Bacardi, at Laverstoke Mill in the village of ...",
        image: "assets/images/real/bombay_sapphireitre.jpg",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Bond7",
        category: "other",
        size: "250ML",
        price: "Ksh 623",
        description: "The original Bond Seven Whisky was distilled & bottled in warehouse No. 7 of Milne & Co, wine merchants in South Australia during the 1950s.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Bond7",
        category: "other",
        size: "350ML",
        price: "Ksh 864",
        description: "The original Bond Seven Whisky was distilled & bottled in warehouse No. 7 of Milne & Co, wine merchants in South Australia during the 1950s.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Bond7",
        category: "other",
        size: "750ML",
        price: "Ksh 1,905",
        description: "The original Bond Seven Whisky was distilled & bottled in warehouse No. 7 of Milne & Co, wine merchants in South Australia during the 1950s.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Bonne Esperance Dry Reditre",
        category: "other",
        size: "5L",
        price: "Ksh 6,075",
        description: "The Cape of Good Hope or Bonne Esperance, is a magical place where sunshine and rich soil combine to create the ideal conditions for the perfect wine.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Bonne Esperance Dry Red",
        category: "other",
        size: "750ML",
        price: "Ksh 1,500",
        description: "A Red wine from Paarl, Coastal Region, Western Cape, South Africa. Made from Shiraz/Syrah, Cabernet Sauvignon, Merlot, Pinotage.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Bonne Esperance Red Sweet",
        category: "other",
        size: "750ML",
        price: "Ksh 1,500",
        description: "The Cape of Good Hope or Bonne Esperance, is a magical place where sunshine and rich soil combine to create the ideal conditions for the perfect wine.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Bravado",
        category: "other",
        size: "330ML",
        price: "Ksh 51",
        description: "The first premium vodka made in Puerto Rico, crafted with the skill, knowledge and passion of Puerto Rican craftsmen.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Chile"
    },
    {
        name: "Breezer Lime",
        category: "other",
        size: "750ML",
        price: "Ksh 323",
        description: "Bacardi Breezer is an alcoholic fruit-flavoured drink made by Bacardi that comes in a variety of fruit flavours: lemon, peach, lychee, pineapple, apple, ruby ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Puerto Rico"
    },
    {
        name: "Breezer Peach",
        category: "other",
        size: "750ML",
        price: "Ksh 323",
        description: "BACARDI Breezer Peach is a tasty and refreshing alcohol drink containing genuine imported BACARDI Rum, fruit flavours and sparkling water.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Puerto Rico"
    },
    {
        name: "Breezer Pineapple",
        category: "other",
        size: "750ML",
        price: "Ksh 323",
        description: "Bacardi Breezer is an alcoholic fruit-flavoured drink made by Bacardi that comes in a variety of fruit flavours: lemon, peach, lychee, pineapple, apple, ruby ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Puerto Rico"
    },
    {
        name: "Breezer W.Lemon",
        category: "other",
        size: "750ML",
        price: "Ksh 323",
        description: "Bacardi Breezer is an alcoholic fruit-flavoured drink made by Bacardi that comes in a variety of fruit flavours: lemon, peach, lychee, pineapple, apple, ruby ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Puerto Rico"
    },
    {
        name: "Brokers",
        category: "other",
        size: "750ML",
        price: "Ksh 1,350",
        description: "Our mission is to educate the consumer by offering knowledge and tasting of your product. We are based in Houston, Texas with our services extending ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Bull Dog",
        category: "other",
        size: "750ML",
        price: "Ksh 2,955",
        description: "Bulldog London Dry Gin was developed by a globe-trotting American and is distilled in the United Kingdom. While tagged as a London dry, ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Bulleit Bourbont",
        category: "other",
        size: "1L",
        price: "Ksh 5,700",
        description: "Bulleit Bourbon is a brand of Kentucky straight bourbon whiskey produced at the Bulleit Distillery in Shelbyville, Kentucky and the Bulleit Distillery in ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "USA"
    },
    {
        name: "Bulleit Bourbon",
        category: "other",
        size: "750ML",
        price: "Ksh 4,800",
        description: "Bulleit Bourbon is a brand of Kentucky straight bourbon whiskey produced at the Bulleit Distillery in Shelbyville, Kentucky and the Bulleit Distillery in ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "USA"
    },
    {
        name: "Bullet Vodka",
        category: "vodka",
        size: "250ML",
        price: "Ksh 315",
        description: "Alcohol Content. 18%. Country of Origin. Belgium. Size. 250ml. Packaging. Can. Reviews. There are no reviews yet. Add a review. You must be logged in to post a ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Smooth+Vodka",
        isKenyan: false,
        country: "Belgium"
    },
    {
        name: "Bumbu",
        category: "other",
        size: "750ML",
        price: "Ksh 6,300",
        description: "At Bumbu Rum Company, our flagship product is distilled and blended in Barbados, the birthplace of rum, where the spirit was first created some 400 years ago.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Barbados"
    },
    {
        name: "Buono  Amici   Brut",
        category: "other",
        size: "750ML",
        price: "Ksh 3,975",
        description: "Crafted in the prestigious Veneto region of Italy, Buono Amici Prosecco Brut is made from the finest Glera grapes, handpicked and carefully vinified to achieve ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Italy"
    },
    {
        name: "Buono Amici Cuvee",
        category: "other",
        size: "750ML",
        price: "Ksh 3,525",
        description: "Experience the refined sparkle of Buono Amici Cuvee 750ML, a premium Italian sparkling wine known for its crisp, fruity profile and elegant effervescence.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Italy"
    },
    {
        name: "Buono Amici  Rose",
        category: "other",
        size: "750ML",
        price: "Ksh 4,425",
        description: "Brand: Bon Ami. Country: France. Region: Vin de France. Grapes Varietal: Grenache. Type: Still Sparkling Wine. Wine Type: Sparkling Wine. Wine Style: Rose ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Bushmill 10Yrs",
        category: "other",
        size: "750ML",
        price: "Ksh 7,275",
        description: "10 year old is triple distilled from 100% malted barley and matured for a minimum of 10 years in former Sherry casks and bourbon-seasoned casks.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Bushmill Black Bush",
        category: "other",
        size: "750ML",
        price: "Ksh 5,100",
        description: "Black Bush is triple distilled from unpeated and malted barley, then blended with a single grain Irish whiskey. The blend contains 80% Bushmills malt whiskey, ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Bushmills Original",
        category: "gin",
        size: "750ML",
        price: "Ksh 3,750",
        description: "The Old Bushmills Distillery is an Irish whiskey distillery in Bushmills, County Antrim, Northern Ireland, established in 1784 and owned by Proximo Spirits.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Classic+Gin",
        isKenyan: false,
        country: "Ireland"
    },
    {
        name: "Cabernet Sauv Merlot Red Sweet",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,605",
        description: "Cabernet Sauvignon Description – How Cabernet Differs from Merlot. Cabernet sauvignon hails from the legendary wine region of Bordeaux, France.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Cabernet Sav Rose  Sweet",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,605",
        description: "Cabernet Sauvignon's story begins in the 18th century in France's Bordeaux region. This remarkable grape arose through a serendipitous crossing ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Calvet Chardonny",
        category: "other",
        size: "750ML",
        price: "Ksh 2,625",
        description: "Very expressive nose that reveals floral, creamy and exotic aromas. A fleshy, full and lively wine, with a perfect balance.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Campari 3/4",
        category: "other",
        size: "750ML",
        price: "Ksh 2,925",
        description: "It is a type of bitters, characterised by its dark red colour. It is produced by the Davide Campari Group, a multinational company based in Italy. Campari. Logo.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Italy"
    },
    {
        name: "Camus Vs",
        category: "other",
        size: "700ML",
        price: "Ksh 6,300",
        description: "Camus Cognac is a brand of cognac that has been produced by five generations of the Camus family, since 1863",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Candy Floss",
        category: "other",
        size: "750ML",
        price: "Ksh 1,395",
        description: "Candyfloss Natural Sweet Wines are a jubilant symphony of juicy fruits and delicate florals, spun with a weave of sweet nostalgia. Picture yourself biting into ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Candy Floss Sweet Red",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,395",
        description: "... drinking experience. Origin: South Africa; Alcohol Percentage: 13% ABV; Food Pairings: Best enjoyed with grilled meats, spicy dishes, creamy desserts, or a ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Candy Sweet White",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,395",
        description: "White wine is a wine that is fermented without undergoing the process of maceration, which involves prolonged contact between the juice and the grape skins, ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Caprice Dry Red(Tetra) -",
        category: "other",
        size: "1L",
        price: "Ksh 1,343",
        description: "Caprice Dry Red Tetra is a popular South African Red dry wine mostly taken during special occasions. The wine gets its dark colour from the long fermentation ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Caprice Red Sweet(Tetra)T",
        category: "other",
        size: "1L",
        price: "Ksh 1,343",
        description: "Caprice Sweet Red is a popular South African Sweet Red wine mostly taken during special occasions. It is a charming wine that offers a perfect balance of ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Captain Cola Bottle",
        category: "other",
        size: "750ML",
        price: "Ksh 210",
        description: "Things I overlooked. captmorgan label Lots of different labels over the years. Note the prominence of Puerto Rico as the origin of the rum.",
        image: "assets/images/real/captain_cola_bottle.jpg",
        isKenyan: false,
        country: "Italy"
    },
    {
        name: "Captain Cola Can",
        category: "other",
        size: "750ML",
        price: "Ksh 240",
        description: "With the Captain Morgan Original Spiced Gold and Cola premixed drink the Captain's tastiest combination is always at hand and always ready to drink.",
        image: "assets/images/real/captain_cola_can.jpg",
        isKenyan: false,
        country: "Italy"
    },
    {
        name: "Captain Dark Rumitre",
        category: "rum",
        size: "1L",
        price: "Ksh 3,075",
        description: "Captain Morgan Dark Rum is made with a secret blend of fine Caribbean rums and exotic spices to make our darkest flavour rum. Captain Morgan Dark Rum bursts ...",
        image: "assets/images/real/captain_dark_rumitre.jpg",
        isKenyan: false,
        country: "Jamaica"
    },
    {
        name: "Captain Darkrum",
        category: "rum",
        size: "750ML",
        price: "Ksh 2,850",
        description: "Captain Morgan is a brand of flavoured rums produced by British alcohol conglomerate Diageo. It is named after the 17th-century Welsh privateer of the ...",
        image: "assets/images/real/captain_darkrum.jpg",
        isKenyan: false,
        country: "Jamaica"
    },
    {
        name: "Captain Morgan",
        category: "rum",
        size: "250ML",
        price: "Ksh 498",
        description: "Captain Morgan is a brand of flavoured rums produced by British alcohol conglomerate Diageo. It is named after the 17th-century Welsh privateer of the ...",
        image: "assets/images/real/captain_morgan_spcd.jpg",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Captain Morgan Gold",
        category: "rum",
        size: "750ML",
        price: "Ksh 1,373",
        description: "Captain Morgan is a brand of flavoured rums produced by British alcohol conglomerate Diageo. It is named after the 17th-century Welsh privateer of the ...",
        image: "assets/images/real/captain_morgan_gold.jpg",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Captain Morgan Spcd",
        category: "rum",
        size: "750ML",
        price: "Ksh 2,775",
        description: "Captain Morgan is a brand of flavoured rums produced by British alcohol conglomerate Diageo. It is named after the 17th-century Welsh privateer of the ...",
        image: "assets/images/real/captain_morgan_spcd.jpg",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Captain Morgan Spiced",
        category: "rum",
        size: "1L",
        price: "Ksh 3,225",
        description: "Captain Morgan is a brand of flavoured rums produced by British alcohol conglomerate Diageo. It is named after the 17th-century Welsh privateer of the ...",
        image: "assets/images/real/captain_morgan_spiced.jpg",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Cardhu",
        category: "other",
        size: "700ML",
        price: "Ksh 7,650",
        description: "Cardhu distillery is a Speyside single malt Scotch whisky distillery near Archiestown, Moray, Scotland. It was founded in 1824 by whisky smuggler John Cumming ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Caribia Cane",
        category: "rum",
        size: "250ML",
        price: "Ksh 278",
        description: "Caribia is a finely crafted smooth cane spirit that is designed to mirror the progressive attitudes and behaviours of the Kenyan Millennial.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Caribia Cane",
        category: "rum",
        size: "750ML",
        price: "Ksh 750",
        description: "Caribia is a finely crafted smooth cane spirit that is designed to mirror the progressive attitudes and behaviours of the Kenyan Millennial.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Caribia Gin",
        category: "gin",
        size: "250ML",
        price: "Ksh 368",
        description: "Caribia Gin 750ml is a popular gin from Kenya mostly taken during special occasions. It is a well-balanced gin with an incredibly smooth palate.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Classic+Gin",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Caribia Gin",
        category: "gin",
        size: "350ML",
        price: "Ksh 537",
        description: "Caribia Gin 750ml is a popular gin from Kenya mostly taken during special occasions. It is a well-balanced gin with an incredibly smooth palate.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Classic+Gin",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Caribia Gin",
        category: "gin",
        size: "750ML",
        price: "Ksh 1,080",
        description: "Caribia Gin 750ml is a popular gin from Kenya mostly taken during special occasions. It is a well-balanced gin with an incredibly smooth palate.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Classic+Gin",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Carlo Rossit",
        category: "other",
        size: "4L",
        price: "Ksh 4,500",
        description: "Our Wines. From Red & White to Pink & Sangria. Carlo Rossi wines always start with the most delicious grapes from California's Central Valley.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "USA"
    },
    {
        name: "Carlo Rossi Red",
        category: "other",
        size: "750ML",
        price: "Ksh 1,500",
        description: "This sweet red wine is well balanced, light to medium-bodied red wine that has flavors of bright red fruits and fresh floral notes with a nice crisp finish.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "USA"
    },
    {
        name: "Carmela",
        category: "other",
        size: "750ML",
        price: "Ksh 2,250",
        description: "Rooted in tradition, yet embracing innovation, Carmela embodies the spirit of Spain's sun-soaked vineyards and the extensive heritage of Bodegas Fernando Castro ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Spain"
    },
    {
        name: "Casa Buena Red",
        category: "other",
        size: "750ML",
        price: "Ksh 1,103",
        description: "We offer free delivery within and around Nairobi CBD. Alcohol by Volume: 8% ABV. Country of Origin: Spain. Size/Volume: 1 Litre. Status: In stock.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Spain"
    },
    {
        name: "Casa Buena White",
        category: "other",
        size: "750ML",
        price: "Ksh 1,103",
        description: "Casa Buena Sweet white is a popular Spanish sweet white Wine mostly taken during special occasions. Casa Buena Sweet white contains 8% alcohol.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Paraguay"
    },
    {
        name: "Casamigos Anejo",
        category: "other",
        size: "750ML",
        price: "Ksh 10,575",
        description: "Casamigos Añejo Tequila, crafted from 100% Blue Weber agaves, offers a perfect balance of natural sweetness, subtle spice, and oak-aged complexity, ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Mexico"
    },
    {
        name: "Casamigos Blanco",
        category: "other",
        size: "750ML",
        price: "Ksh 10,050",
        description: "Our Bottled Tequilas are made from 100% Blue Weber agave from the rich clay soil of Jalisco, Mexico, and then hand-selected to ensure highest quality. Our agave ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Mexico"
    },
    {
        name: "Casamigos Reposado",
        category: "other",
        size: "750ML",
        price: "Ksh 9,525",
        description: "Casamigos Reposado Tequila is made from 100% Blue Weber agaves. It is soft, slightly oaky with hints of caramel and cocoa, it has a medium to long smooth ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Mexico"
    },
    {
        name: "Castle Bottle",
        category: "other",
        size: "750ML",
        price: "Ksh 24",
        description: "Its core spirits include rum, whiskey/bourbon and liqueurs, which are marketed and sold in the United States, Canada, Europe, Latin America and Asia. Castle ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Canada"
    },
    {
        name: "Castle Lite Beer",
        category: "beer",
        size: "750ML",
        price: "Ksh 180",
        description: "What Does It Taste Like? ... smoother, crisper and even more refreshing. ... Not For Sale To Persons Under The Age Of 18. Don't Drink And Drive. Enjoy Responsibly.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Chilled+Beer",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Castle Lite Can",
        category: "other",
        size: "750ML",
        price: "Ksh 225",
        description: "Castle Lite is SA's Favourite Draught. But that crisp, refreshing taste isn't always within reach. Until now. With Castle Lite Draught in a Can, Your favourite ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Cellar Cask Redtrs",
        category: "wine",
        size: "5L",
        price: "Ksh 6,600",
        description: "Cellar Cask Sweet Red is a popular South African Sweet Red Wine mostly taken during special occasions. It is a clean, bright, ruby young wine.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Cellar Cask Red",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,530",
        description: "Cellar Cask is renowned for its commitment to quality and tradition. Originating from the fertile vineyards of South Africa, this wine reflects ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Cellar Cask White",
        category: "wine",
        size: "5L",
        price: "Ksh 6,600",
        description: "Cellar Cask Natural Lively White Wine 5L ; Alcohol Content. 11% ; Packaging. Boxed ; Flavour Profile. Light & fruity ; Country of Origin. South Africa ; SKU: ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Cellar Cask White",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,530",
        description: "Cellar Cask Natural Lively White Wine 5L ; Alcohol Content. 11% ; Packaging. Boxed ; Flavour Profile. Light & fruity ; Country of Origin. South Africa ; SKU: ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Cellar Redt",
        category: "other",
        size: "1L",
        price: "Ksh 1,140",
        description: "Appellations Cellar was founded by Ivonne Zhu in 2016. She was born in Guangdong Province (formerly Canton) in China and immigrated to the U.S. in 2002 by ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "China"
    },
    {
        name: "Cellar Whitet",
        category: "other",
        size: "1L",
        price: "Ksh 1,140",
        description: "Cellar Cask Natural Lively White Wine 5L ; Alcohol Content. 11% ; Packaging. Boxed ; Flavour Profile. Light & fruity ; Country of Origin. South Africa ; SKU: ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Chamdor Red",
        category: "other",
        size: "750ML",
        price: "Ksh 1,110",
        description: "It has a rich and refreshing taste that makes it a good choice for celebrations. Chamdor Sparkling Red Grape is an alcohol ... Country of origin: South Africa.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Chamdor 750 White",
        category: "other",
        size: "750ML",
        price: "Ksh 1,110",
        description: "Alcohol Content. 0.0%. Size. 750ml. Country of Origin. South Africa. 1 review for Chamdor Sparkling White Grape 75cl. 4.0. Based on 1 review.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Chivas 12Yrs",
        category: "whisky",
        size: "750ML",
        price: "Ksh 6,000",
        description: "Discover Chivas Regal 12, a 12-year-old blended Scotch whisky renowned for its signature blend of the finest malt and grain whiskies.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Chivas",
        category: "whisky",
        size: "375ML",
        price: "Ksh 3,195",
        description: "Chivas Regal is a blended Scotch whisky produced by the Chivas Brothers subsidiary of Pernod Ricard in Scotland. Chivas Regal. Type, Scotch whiskey.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Chivas Regalt",
        category: "whisky",
        size: "1L",
        price: "Ksh 6,900",
        description: "Chivas Regal is a blended Scotch whisky produced by the Chivas Brothers subsidiary of Pernod Ricard in Scotland. Chivas Regal. Type, Scotch whiskey.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Choco Toffee Red Wine",
        category: "wine",
        size: "750ML",
        price: "Ksh 2,040",
        description: "Deep dark red wine, with delicate nuances of toffee and a light breath of a noble chocolate taste. An enjoyment, that lets you melt away on every occassion.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Fine+Wine",
        isKenyan: false,
        country: "Germany"
    },
    {
        name: "Chrome Gin",
        category: "vodka",
        size: "250ML",
        price: "Ksh 315",
        description: "Chrome Gin 250ml is a Kenyan gin ,Launched by Kenya Breweries Limited, it is packaged in a 250ml bottle and made in a smooth, crisp style for ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Classic+Gin",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Chrome Gin",
        category: "vodka",
        size: "750ML",
        price: "Ksh 863",
        description: "Chrome Gin 250ml is a Kenyan gin ,Launched by Kenya Breweries Limited, it is packaged in a 250ml bottle and made in a smooth, crisp style for ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Classic+Gin",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Chrome Lemon",
        category: "vodka",
        size: "250ML",
        price: "Ksh 315",
        description: "Chrome Lemon 250ml ; Alcohol Content. 40% ; Country of Origin. Kenya ; Flavours & Spices. Lemon ; SKU: VOCH1582 ; Brand · Chrome ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Chrome Vodka",
        category: "vodka",
        size: "250ML",
        price: "Ksh 315",
        description: "Launched in 2014, Chrome Vodka is produced by Kenya Breweriesfor young, modern Kenyans looking for a great value brand that they can identify with. Chrome Gin ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Smooth+Vodka",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Chrome Vodka",
        category: "vodka",
        size: "750ML",
        price: "Ksh 863",
        description: "Launched in 2014, Chrome Vodka is produced by Kenya Breweriesfor young, modern Kenyans looking for a great value brand that they can identify with. Chrome Gin ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Smooth+Vodka",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Ch.Valac Dry Wine",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,598",
        description: "This CH Valac is a rich dry red blend from the highlands of Spain. On the nose are the powerful and complex aromas of blackcurrant.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Fine+Wine",
        isKenyan: false,
        country: "Spain"
    },
    {
        name: "Ciroct",
        category: "vodka",
        size: "1.75L",
        price: "Ksh 6,000",
        description: "Cîroc is a brand of alcoholic beverages produced in France since 2003 and owned by the British multinational alcoholic beverage company Diageo.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Ciroc Vodkat",
        category: "vodka",
        size: "1L",
        price: "Ksh 7,350",
        description: "Cîroc is a brand of alcoholic beverages produced in France since 2003 and owned by the British multinational alcoholic beverage company Diageo.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Smooth+Vodka",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Ciroc Vodka",
        category: "vodka",
        size: "750ML",
        price: "Ksh 6,900",
        description: "Unlike most vodkas, which are made from grain, CÎROC Vodka is distilled from fine French grapes; a process inspired by over a century of wine-making expertise ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Smooth+Vodka",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Clan Macgregor",
        category: "other",
        size: "750ML",
        price: "Ksh 1,290",
        description: "Brand: Clan MacGregor Type drink: Blended Scotch Whisky Origin: Scotland Special Feature: Blend of Scottish malt and grain whiskies, resulting in a smooth ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Clase Azul",
        category: "other",
        size: "750ML",
        price: "Ksh 67,500",
        description: "Today, our brand proudly reveals Mexico's rich legacy through exquisite creations, amazing experiences, unique destinations, and more. SEE MORE.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Mexico"
    },
    {
        name: "Class 21",
        category: "other",
        size: "750ML",
        price: "Ksh 1,050",
        description: "•Wines that do not meet the definition of any of the standards of identity are considered wine specialty products, and are subject to different class/type.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Claymore",
        category: "other",
        size: "750ML",
        price: "Ksh 1,050",
        description: "The Claymore Blended Scotch Whisky is a renowned blended whisky produced by Whyte & Mackay Ltd, a Scottish whisky producer with a rich history. The ---",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Club Class Whisky",
        category: "whisky",
        size: "750ML",
        price: "Ksh 870",
        description: "An American classic, this whiskey has been masterfully blended to produce a smooth and flavorful spirit. Perfect for many different cocktails.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Premium+Whisky",
        isKenyan: false,
        country: "Canada"
    },
    {
        name: "Clubman",
        category: "other",
        size: "250ML",
        price: "Ksh 405",
        description: "Using cereal grains, Haig Club Clubman is distilled in one distillery – Cameronbridge. It is then matured exclusively in American ex-bourbon casks, ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Clubman  350",
        category: "other",
        size: "750ML",
        price: "Ksh 375",
        description: "Using cereal grains, Haig Club Clubman is distilled in one distillery – Cameronbridge. It is then matured exclusively in American ex-bourbon casks, ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Clubman -",
        category: "other",
        size: "750ML",
        price: "Ksh 1,095",
        description: "Using cereal grains, Haig Club Clubman is distilled in one distillery – Cameronbridge. It is then matured exclusively in American ex-bourbon casks, ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Cointreaut",
        category: "other",
        size: "1L",
        price: "Ksh 4,425",
        description: "Cointreau is a brand of orange-flavoured triple sec liqueur produced in Saint-Barthélemy-d'Anjou, France. It is consumed as an apéritif and digestif, ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Cointreau",
        category: "other",
        size: "750ML",
        price: "Ksh 4,050",
        description: "Cointreau is a brand of orange-flavoured triple sec liqueur produced in Saint-Barthélemy-d'Anjou, France. It is consumed as an apéritif and digestif, ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Corona Extra",
        category: "other",
        size: "330ML",
        price: "Ksh 375",
        description: "Corona is a Mexican brand of beer produced by Grupo Modelo in Mexico and exported to markets around the world. Constellation Brands is the exclusive ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Mexico"
    },
    {
        name: "County",
        category: "other",
        size: "250ML",
        price: "Ksh 353",
        description: "100% of the wine is derived from grapes (or other agricultural commodity) grown in the labeled counties; The percentage of wine derived from ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "County",
        category: "other",
        size: "750ML",
        price: "Ksh 990",
        description: "100% of the wine is derived from grapes (or other agricultural commodity) grown in the labeled counties; The percentage of wine derived from ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Courvoisier Vs 3/4",
        category: "other",
        size: "750ML",
        price: "Ksh 6,375",
        description: "Courvoisier VS cognac is a blend of several crus aged between three and seven years, composed principally of Fins Bois with a balancing hand of Petite ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Courvosier Vsop",
        category: "other",
        size: "700ML",
        price: "Ksh 9,900",
        description: "Courvoisier V.S.O.P. Cognac 750ml offers a refined, smooth, and well-balanced cognac crafted from a selection of carefully aged eaux-de-vie.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Courvosier Vsop Litre",
        category: "other",
        size: "750ML",
        price: "Ksh 10,650",
        description: "Courvoisier is a rich and full-flavored cognac that won't break the bank. Flavors of stone fruit, almonds, raisins, and sweet spice lead to a dry, woody finish.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Crazy Cock",
        category: "other",
        size: "250ML",
        price: "Ksh 548",
        description: "Crazy Cock 'RARE' is a exquisite single malt whisky from India, rare and exquisite, full-bodied single malt whisky from India matured to perfection in two kinds ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "India"
    },
    {
        name: "Crazy Cock",
        category: "other",
        size: "350ML",
        price: "Ksh 758",
        description: "Crazy Cock 'RARE' is a exquisite single malt whisky from India, rare and exquisite, full-bodied single malt whisky from India matured to perfection in two kinds ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "India"
    },
    {
        name: "Crazy Cock",
        category: "other",
        size: "750ML",
        price: "Ksh 1,605",
        description: "Crazy Cock 'RARE' is a exquisite single malt whisky from India, rare and exquisite, full-bodied single malt whisky from India matured to perfection in two kinds ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "India"
    },
    {
        name: "Cruxland Gin",
        category: "gin",
        size: "750ML",
        price: "Ksh 3,975",
        description: "Cruxland Gin infused with Kalahari Truffles brings together the rare Kalahari truffle and nine Southern African botanicals.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Classic+Gin",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Cruz Vodka",
        category: "vodka",
        size: "750ML",
        price: "Ksh 1,950",
        description: "Cruz Chamber gives you access to limited-edition capsule collections by the hottest designers, the latest Cruz news and highly-curated Cruz content. SIGN UP.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Smooth+Vodka",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Curonia  Beer 10%",
        category: "beer",
        size: "750ML",
        price: "Ksh 338",
        description: "Curonia 10% Strong Beer 500ml. KShs 260. Size: 500ml; Alcohol Content: 16%; Country of Origin: Latvia.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Chilled+Beer",
        isKenyan: false,
        country: "Lithuania"
    },
    {
        name: "Cutty Sark Whiskyt",
        category: "whisky",
        size: "1L",
        price: "Ksh 2,730",
        description: "Cutty Sark is a brand of blended Scotch whisky produced by La Martiniquaise in Scotland. Cutty Sark. A bottle of Cutty Sark. Type, Scotch whisky.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Premium+Whisky",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Cutty Sark Whisky",
        category: "whisky",
        size: "750ML",
        price: "Ksh 2,130",
        description: "Cutty Sark is a brand of blended Scotch whisky produced by La Martiniquaise in Scotland. Cutty Sark. A bottle of Cutty Sark. Type, Scotch whisky.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Premium+Whisky",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Dallas Brandy",
        category: "brandy",
        size: "250ML",
        price: "Ksh 188",
        description: "Cognac traces its origins to the 17th century, when wines of the Charente region were distilled to withstand shipment to distant European ports.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Dallas Brandy",
        category: "brandy",
        size: "750ML",
        price: "Ksh 780",
        description: "Cognac traces its origins to the 17th century, when wines of the Charente region were distilled to withstand shipment to distant European ports.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Dargent Gin",
        category: "gin",
        size: "750ML",
        price: "Ksh 1,800",
        description: "Award-winning internationally, the Blue d'Argent gin has a distinctive London style but is made in France's north. Les Grands Chais de France (GCF) is a group ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Classic+Gin",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Dargent Rose",
        category: "other",
        size: "750ML",
        price: "Ksh 1,575",
        description: "Created wine from the best grapes of Pinot Noir grown in the Jura region, which is the smallest wine region in France. ... production and aging of wine before ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Darling Ice",
        category: "other",
        size: "250ML",
        price: "Ksh 195",
        description: "Darling Cellars De-Alcoholised is a product range of varietals where the focus is on fruit driven, varietal true, value for money products.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Delmonte Applet",
        category: "other",
        size: "1L",
        price: "Ksh 372",
        description: "Del Monte Apple Juice ; Palate: Crisp, lightly sweet apple flavour with balanced acidity ; Finish: Clean, refreshing, and smooth ; Country of Origin. Kenya ; Size.",
        image: "assets/images/real/delmonte_applet.jpg",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Delmonte Mango-",
        category: "other",
        size: "1L",
        price: "Ksh 372",
        description: "Del Monte's MANGO juice is made with real fruits. Get information about the ingredients and nutritional values right here!",
        image: "assets/images/real/delmonte_mango.jpg",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Delmonte Mixd Berry",
        category: "other",
        size: "750ML",
        price: "Ksh 372",
        description: "Del Monte Juice Blend Mixed Berry 1L ; Size. 1L ; Country of Origin. Kenya ; Flavours & Spices. Mixed Berry ; EAN, 024000150138 ...",
        image: "assets/images/real/delmonte_mixd_berry.jpg",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Delmonte Oranget",
        category: "other",
        size: "1L",
        price: "Ksh 372",
        description: "Del Monte offers a variety of juice products, ranging from 100% pure juices such as Farmer's Juice Bar premium extract juice;",
        image: "assets/images/real/delmonte_oranget.jpg",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Delmonte Passiont",
        category: "other",
        size: "1L",
        price: "Ksh 372",
        description: "Excellent source of Vitamin C Water, Sugars (sugar/glucose-fructose, concentrated passion fruit juice), Guar gum, Citric acid, Vitamin C, Natural flavour, Beta ...",
        image: "assets/images/real/delmonte_passiont.jpg",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Delmonte Pineaple Goldt",
        category: "other",
        size: "1L",
        price: "Ksh 372",
        description: "These are carefully quality selected and handpicked at Del Monte plantations in Costa Rica at optimal ripeness to guarantee the best tasting experience. They ...",
        image: "assets/images/real/delmonte_pineaple_goldt.jpg",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Delmonte Pineapple",
        category: "other",
        size: "750ML",
        price: "Ksh 372",
        description: "Delmonte pineapple is a premium under the Delmonte-Juice brand, expertly crafted in kenya. This has an Alcohol by Volume (ABV) of 0.0. Ideal for sipping neat, ...",
        image: "assets/images/real/delmonte_pineapple.jpg",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Delmonte Pnapple/Mangot",
        category: "other",
        size: "1L",
        price: "Ksh 372",
        description: "Del Monte® mango and pineapple in extra light syrup delivers the sweet tropical taste you crave. Enjoy the convenience of sweet mango in a jar!",
        image: "assets/images/real/delmonte_pnapple_mangot.jpg",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Delmonte Tropicalt",
        category: "other",
        size: "1L",
        price: "Ksh 372",
        description: "Water, Cane sugar, Citric acid, Natural flavour, Natural colour (concentrated apple and lemon juices, safflower, paprika extract). Serve on ice, enjoy!",
        image: "assets/images/real/delmonte_tropicalt.jpg",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Delush Redt",
        category: "other",
        size: "5L",
        price: "Ksh 4,200",
        description: "Delush Natural Sweet Red Wine has a creamy butterscotch and caramel flavour. Delush Sweet Red 750ml quantity. Add to cart.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Delush Sweet Rose",
        category: "other",
        size: "750ML",
        price: "Ksh 1,500",
        description: "Delush Sweet Rose 750ml is a popular South African sweet rose Wine mostly taken during special occasions. It is known for its sweet and fruity taste with ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Delush Whitet",
        category: "other",
        size: "5L",
        price: "Ksh 4,200",
        description: "Delush Natural Sweet White 75cl ; Alcohol Content. 8.5% ; Size. 750ml ; Sweetness. Sweet ; Country of Origin. South Africa ; Packaging. Bottle.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Delush Wine Red",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,320",
        description: "Delush Sweet Red 750ml is a popular South African Red sweet Wine mostly taken during special occasions. It contains 9% alcohol. Delush Sweet Red can Best be ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Fine+Wine",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Delush Wine White",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,500",
        description: "Facts about the wine. Winery. Delush. Region. South Africa / Northern Cape. Wine style. South African Dessert. Alcohol content. 8.5%. Allergens. Contains ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Fine+Wine",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Desperados",
        category: "other",
        size: "750ML",
        price: "Ksh 428",
        description: "Desperados is an agave spirit flavoured pale lager beer with 5.9% alcohol by volume (ABV) originally created and produced by the French brewing company Fischer ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Dimple 15Yrs",
        category: "other",
        size: "750ML",
        price: "Ksh 6,000",
        description: "Details about this bottle, Edit. Whisky-ID: 4586. Distillery: Blend-Scotch. Country, Region: Scotland. Type: Blended Whisky. Age: 15 Years. ABV: 40%. Bottle ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Dompo Sweetred",
        category: "other",
        size: "750ML",
        price: "Ksh 1,350",
        description: "Dompo is a full-bodied, deep garnet red wine, made using distinctive overripe red grapes, sourced from a range of first-class vineyards.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Tanzania"
    },
    {
        name: "Don Julio 1942",
        category: "other",
        size: "750ML",
        price: "Ksh 38,940",
        description: "The iconic Don Julio 1942® Tequila is the choice of connoisseurs around the globe. Produced in small batches and aged for a minimum of two and a half years.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Mexico"
    },
    {
        name: "Don Julio Anejo",
        category: "other",
        size: "750ML",
        price: "Ksh 15,750",
        description: "Don Julio Añejo Tequila is a testament to the craft of making a superior tasting, aged tequila. Rich, distinctive and wonderfully complex.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Mexico"
    },
    {
        name: "Don Julio Blanco",
        category: "other",
        size: "750ML",
        price: "Ksh 10,500",
        description: "Don Julio is a brand of tequila produced in Mexico. It is owned by the British-based multinational alcoholic beverage company Diageo.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Mexico"
    },
    {
        name: "Don Julio Reposado",
        category: "other",
        size: "75CL",
        price: "Ksh 11,400",
        description: "Aged for eight months in American white-oak barrels, Don Julio® Reposado Tequila is golden amber in color, and offers a rich, smooth finish.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Mexico"
    },
    {
        name: "Don Montego",
        category: "other",
        size: "250ML",
        price: "Ksh 930",
        description: "Don Montego 750ml is an exquisite French brandy produced by the KVINT distillery, since the year 1897. It is produced by a classical process of ageing the ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Moldova"
    },
    {
        name: "Don Montego",
        category: "other",
        size: "500ML",
        price: "Ksh 1,770",
        description: "Don Montego 750ml is an exquisite French brandy produced by the KVINT distillery, since the year 1897. It is produced by a classical process of ageing the ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Moldova"
    },
    {
        name: "Don Montego",
        category: "other",
        size: "750ML",
        price: "Ksh 2,520",
        description: "Don Montego 750ml is an exquisite French brandy produced by the KVINT distillery, since the year 1897. It is produced by a classical process of ageing the ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Moldova"
    },
    {
        name: "Drambuie",
        category: "other",
        size: "700ML",
        price: "Ksh 3,975",
        description: "Drambuie /dræmˈbuːi/ is a golden-coloured, 40% ABV liqueur made from Scotch whisky, heather honey, herbs and spices. The brand was owned by the MacKinnon ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Drostdy -Hof Red",
        category: "other",
        size: "5L",
        price: "Ksh 6,600",
        description: "As we have seen in the Introduction, this company had pioneered the export of Australian wines to Britain in the later nineteenth century. Despite earlier ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Drostdy Hof Red.",
        category: "other",
        size: "750ML",
        price: "Ksh 1,380",
        description: "Drostdy-Hof was launched in South Africa in 1973 and has extended its reach into African and key international markets. The team of skilled winemakers uses ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Drostdy Hof Wh.",
        category: "other",
        size: "5L",
        price: "Ksh 6,675",
        description: "Drostdy Hof is South Africa's most trusted and accessible wine brand, producing quality wines that have been the backbone of SA wine culture.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Drostdy Wht",
        category: "other",
        size: "750ML",
        price: "Ksh 1,500",
        description: "Enjoy the refreshing Drostdy Hof Sweet White 5L from South Africa: crisp, fruity, lightly sweet perfect for casual sipping or chilled gatherings in Nairobi.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Drostyt",
        category: "other",
        size: "3L",
        price: "Ksh 2,850",
        description: "Icewine (or ice wine; German: Eiswein) is a type of dessert wine produced from grapes that have been frozen while still on the vine.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Dunhill Dbl Capsule",
        category: "other",
        size: "750ML",
        price: "Ksh 668",
        description: "Vail Fine Wines. Inventory Summary. Department. Item Description. Regular Price. Avail Qty. Accessories. True Bear Keychain Bottle Opener. $0.93.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Dunhill Switch",
        category: "other",
        size: "750ML",
        price: "Ksh 668",
        description: "The quality of a Dunhill cigarette is undeniable with its firm filter and slow burn which enables you to enjoy a smooth taste. It's a pity they ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Dusse Vsop",
        category: "other",
        size: "750ML",
        price: "Ksh 18,000",
        description: "Cognac is a wine-based spirit solely produced in the Cognac area of France. To be considered Cognac, it must be made from white grapes from one or more of 6 ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Elderflower Liqueur",
        category: "liqueur",
        size: "700ML",
        price: "Ksh 3,225",
        description: "St‑Germain is a French liqueur made with fresh elderflowers, handpicked in full bloom every spring. Up to one thousand carefully selected flowers to fill every ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Fine+Liqueur",
        isKenyan: false,
        country: "USA"
    },
    {
        name: "Electio  Red",
        category: "other",
        size: "750ML",
        price: "Ksh 1,650",
        description: "Electio Cabernet Sauvignon is a dry red wine, distinguished by its elegant ruby colour and fresh fruity aroma, featuring hints of Moroccan leather and violets.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Moldova"
    },
    {
        name: "Electio White",
        category: "other",
        size: "750ML",
        price: "Ksh 1,650",
        description: "Electio Sauvignon Blanc 750ml ; Producer: Five ; Origin: Republic of Moldova ; Variety: Sauvignon Blanc ; Color: Red ; Type: Dry.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Moldova"
    },
    {
        name: "Embassy",
        category: "other",
        size: "750ML",
        price: "Ksh 653",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Embassy King",
        category: "other",
        size: "750ML",
        price: "Ksh 653",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Eristoff Vodka",
        category: "vodka",
        size: "750ML",
        price: "Ksh 1,380",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Smooth+Vodka",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Espanature Cab Sauv",
        category: "other",
        size: "750ML",
        price: "Ksh 1,545",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Spain"
    },
    {
        name: "Espanature Viura Ver",
        category: "other",
        size: "750ML",
        price: "Ksh 1,545",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Spain"
    },
    {
        name: "Expresion Sweet Red",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,800",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Famouse 1/2",
        category: "other",
        size: "750ML",
        price: "Ksh 1,470",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Famouse G Smky Blkt",
        category: "other",
        size: "1L",
        price: "Ksh 3,750",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Famous Grouse 3/4",
        category: "whisky",
        size: "750ML",
        price: "Ksh 2,925",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Famous Grouse Il",
        category: "whisky",
        size: "750ML",
        price: "Ksh 3,270",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Famous Smoky Black",
        category: "other",
        size: "750ML",
        price: "Ksh 3,495",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Famous Toasted Casklitre",
        category: "other",
        size: "750ML",
        price: "Ksh 3,225",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Faxe 10%Itre",
        category: "other",
        size: "1L",
        price: "Ksh 0",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Denmark"
    },
    {
        name: "Faxe",
        category: "other",
        size: "500ML",
        price: "Ksh 420",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Denmark"
    },
    {
        name: "Ferari Ice Can",
        category: "other",
        size: "750ML",
        price: "Ksh 120",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Fernet Branca",
        category: "other",
        size: "750ML",
        price: "Ksh 3,375",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Italy"
    },
    {
        name: "First Choice",
        category: "other",
        size: "250ML",
        price: "Ksh 795",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "First Choice",
        category: "other",
        size: "750ML",
        price: "Ksh 1,125",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Flirt Blackt",
        category: "vodka",
        size: "1L",
        price: "Ksh 2,175",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/flirt_blackt.jpg",
        isKenyan: false,
        country: "Bulgaria"
    },
    {
        name: "Flirt Caramelt",
        category: "vodka",
        size: "1L",
        price: "Ksh 2,175",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/flirt_caramelt.jpg",
        isKenyan: false,
        country: "Bulgaria"
    },
    {
        name: "Flirt Chocoitre",
        category: "vodka",
        size: "1L",
        price: "Ksh 2,175",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/flirt_chocoitre.jpg",
        isKenyan: false,
        country: "Bulgaria"
    },
    {
        name: "Flirt Choco",
        category: "vodka",
        size: "250ML",
        price: "Ksh 375",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/flirt_choco.jpg",
        isKenyan: false,
        country: "Bulgaria"
    },
    {
        name: "Flirt Choco",
        category: "vodka",
        size: "350ML",
        price: "Ksh 525",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/flirt_choco.jpg",
        isKenyan: false,
        country: "Bulgaria"
    },
    {
        name: "Flirt Choco",
        category: "vodka",
        size: "700ML",
        price: "Ksh 1,650",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/flirt_choco.jpg",
        isKenyan: false,
        country: "Bulgaria"
    },
    {
        name: "Flirt Green Applet",
        category: "vodka",
        size: "1L",
        price: "Ksh 2,175",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/flirt_green_applet.jpg",
        isKenyan: false,
        country: "Bulgaria"
    },
    {
        name: "Flirt Green Apple",
        category: "vodka",
        size: "250ML",
        price: "Ksh 375",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/flirt_green_applet.jpg",
        isKenyan: false,
        country: "Bulgaria"
    },
    {
        name: "Flirt Green Apple",
        category: "vodka",
        size: "700ML",
        price: "Ksh 1,650",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/flirt_green_applet.jpg",
        isKenyan: false,
        country: "Bulgaria"
    },
    {
        name: "Flirt Lemont",
        category: "vodka",
        size: "1L",
        price: "Ksh 2,175",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/flirt_lemont.jpg",
        isKenyan: false,
        country: "Bulgaria"
    },
    {
        name: "Flirt Lemon",
        category: "vodka",
        size: "750ML",
        price: "Ksh 1,650",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/flirt_lemont.jpg",
        isKenyan: false,
        country: "Bulgaria"
    },
    {
        name: "Flirt Oranget",
        category: "vodka",
        size: "1L",
        price: "Ksh 2,175",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/flirt_oranget.jpg",
        isKenyan: false,
        country: "Bulgaria"
    },
    {
        name: "Flirt Orange",
        category: "vodka",
        size: "250ML",
        price: "Ksh 375",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/flirt_oranget.jpg",
        isKenyan: false,
        country: "Bulgaria"
    },
    {
        name: "Flirt Orange",
        category: "vodka",
        size: "350ML",
        price: "Ksh 525",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/flirt_oranget.jpg",
        isKenyan: false,
        country: "Bulgaria"
    },
    {
        name: "Flirt Orange",
        category: "vodka",
        size: "700ML",
        price: "Ksh 1,650",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/flirt_oranget.jpg",
        isKenyan: false,
        country: "Bulgaria"
    },
    {
        name: "Flirt Originalt",
        category: "vodka",
        size: "1L",
        price: "Ksh 2,175",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/flirt_originalt.jpg",
        isKenyan: false,
        country: "Bulgaria"
    },
    {
        name: "Flirt Original",
        category: "vodka",
        size: "350ML",
        price: "Ksh 525",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/flirt_originalt.jpg",
        isKenyan: false,
        country: "Bulgaria"
    },
    {
        name: "Flirt Raspberryt",
        category: "vodka",
        size: "1L",
        price: "Ksh 2,175",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/flirt_raspberryt.jpg",
        isKenyan: false,
        country: "Bulgaria"
    },
    {
        name: "Flirt Strawberryt",
        category: "vodka",
        size: "1L",
        price: "Ksh 2,175",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Bulgaria"
    },
    {
        name: "Flirt Strawberry",
        category: "vodka",
        size: "250ML",
        price: "Ksh 375",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/flirt_strawberry.jpg",
        isKenyan: false,
        country: "Bulgaria"
    },
    {
        name: "Flirt Strawberry",
        category: "vodka",
        size: "350ML",
        price: "Ksh 525",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/flirt_strawberry.jpg",
        isKenyan: false,
        country: "Bulgaria"
    },
    {
        name: "Flirt Strawberry",
        category: "vodka",
        size: "750ML",
        price: "Ksh 1,650",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/flirt_strawberry.jpg",
        isKenyan: false,
        country: "Bulgaria"
    },
    {
        name: "Flirt Vodka",
        category: "vodka",
        size: "250ML",
        price: "Ksh 375",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/flirt_vodka.png",
        isKenyan: false,
        country: "Bulgaria"
    },
    {
        name: "Flirt Vodka",
        category: "vodka",
        size: "750ML",
        price: "Ksh 1,650",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/flirt_vodka.png",
        isKenyan: false,
        country: "Bulgaria"
    },
    {
        name: "Footprint Cab Sauv",
        category: "other",
        size: "750ML",
        price: "Ksh 1,950",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Footprint Chenin Blanc",
        category: "other",
        size: "750ML",
        price: "Ksh 1,800",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Footprint Merlot",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,800",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Footprint Sauv Blanc",
        category: "other",
        size: "750ML",
        price: "Ksh 1,950",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Four Cousin Redt",
        category: "other",
        size: "1.5L",
        price: "Ksh 2,400",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Four Cousin Red",
        category: "other",
        size: "750ML",
        price: "Ksh 1,335",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Four Cousinst",
        category: "other",
        size: "3L",
        price: "Ksh 2,400",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Four Cousins  Marula",
        category: "other",
        size: "750ML",
        price: "Ksh 2,730",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Four Cousins Redt",
        category: "other",
        size: "5L",
        price: "Ksh 5,475",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Four Cousins Red Sparkling",
        category: "other",
        size: "750ML",
        price: "Ksh 1,440",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Four Cousins  Strawberry",
        category: "other",
        size: "750ML",
        price: "Ksh 2,730",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Four Cousins  Sweetrose Can",
        category: "other",
        size: "750ML",
        price: "Ksh 540",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Four Cousins Whitet",
        category: "other",
        size: "5L",
        price: "Ksh 5,475",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Four Cousins White",
        category: "other",
        size: "750ML",
        price: "Ksh 1,335",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Four Cousin Whitet",
        category: "other",
        size: "1.5L",
        price: "Ksh 2,400",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Fragolino Red",
        category: "other",
        size: "750ML",
        price: "Ksh 2,153",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Italy"
    },
    {
        name: "Fragolino White",
        category: "other",
        size: "750ML",
        price: "Ksh 2,153",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Italy"
    },
    {
        name: "Freedom",
        category: "other",
        size: "750ML",
        price: "Ksh 765",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Frontera After Mid9T",
        category: "other",
        size: "750ML",
        price: "Ksh 1,440",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Chile"
    },
    {
        name: "Frontera Cab Sauvt",
        category: "other",
        size: "1.5L",
        price: "Ksh 2,400",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Chile"
    },
    {
        name: "Frontera Cab Sauv",
        category: "other",
        size: "750ML",
        price: "Ksh 1,440",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Chile"
    },
    {
        name: "Fronteracabsav Blush 750",
        category: "other",
        size: "750ML",
        price: "Ksh 1,440",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Chile"
    },
    {
        name: "Frontera Chardonaytr",
        category: "other",
        size: "1.5 L",
        price: "Ksh 2,400",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Chile"
    },
    {
        name: "Frontera Chardonnay",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,440",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Chile"
    },
    {
        name: "Frontera Lt Harvest",
        category: "other",
        size: "750ML",
        price: "Ksh 1,440",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Chile"
    },
    {
        name: "Frontera Merlottrs",
        category: "wine",
        size: "1.5L",
        price: "Ksh 2,355",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Chile"
    },
    {
        name: "Frontera Merlot 750",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,440",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Chile"
    },
    {
        name: "Frontera Sauv Blanct",
        category: "other",
        size: "1.5L",
        price: "Ksh 2,400",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Chile"
    },
    {
        name: "Frontera Sav Blanc 750",
        category: "other",
        size: "750ML",
        price: "Ksh 1,440",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Chile"
    },
    {
        name: "Frontera Shiraz",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,440",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Chile"
    },
    {
        name: "Frontera Sweet Red",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,440",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Chile"
    },
    {
        name: "Frosti Berries",
        category: "other",
        size: "750ML",
        price: "Ksh 150",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "USA"
    },
    {
        name: "Frosti Tropical",
        category: "other",
        size: "750ML",
        price: "Ksh 150",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Fruitville Apple",
        category: "other",
        size: "750ML",
        price: "Ksh 282",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Fruitville Berry",
        category: "other",
        size: "750ML",
        price: "Ksh 282",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Fruitville Mango",
        category: "other",
        size: "750ML",
        price: "Ksh 282",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Fruitville Tropical",
        category: "other",
        size: "750ML",
        price: "Ksh 282",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Furaha",
        category: "other",
        size: "250ML",
        price: "Ksh 233",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "G1",
        category: "other",
        size: "750ML",
        price: "Ksh 855",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Gatonegro Cab Sauvt",
        category: "other",
        size: "1.5L",
        price: "Ksh 2,250",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Chile"
    },
    {
        name: "Gatonegro Cab Sauv",
        category: "other",
        size: "750ML",
        price: "Ksh 1,620",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Chile"
    },
    {
        name: "Gatonegro Cabsav Mrlt",
        category: "other",
        size: "750ML",
        price: "Ksh 1,320",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Chile"
    },
    {
        name: "Gatonegro Chardonnay",
        category: "wine",
        size: "1.5ML",
        price: "Ksh 2,250",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Chile"
    },
    {
        name: "Gatonegro Chardony",
        category: "other",
        size: "750ML",
        price: "Ksh 1,320",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Chile"
    },
    {
        name: "Gatonegro Merlot",
        category: "wine",
        size: "1.5ML",
        price: "Ksh 2,250",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Chile"
    },
    {
        name: "Gatonegro Merlot",
        category: "wine",
        size: "750ML",
        price: "Ksh 2,835",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Chile"
    },
    {
        name: "Gatonegro Mix",
        category: "other",
        size: "750ML",
        price: "Ksh 1,320",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Chile"
    },
    {
        name: "Gatonegro Sauv Blanc",
        category: "other",
        size: "1.5L",
        price: "Ksh 2,250",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Chile"
    },
    {
        name: "Gatonegro Sauv Blnc",
        category: "other",
        size: "750ML",
        price: "Ksh 1,320",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Chile"
    },
    {
        name: "Gatonegro Semiswt Red",
        category: "other",
        size: "750ML",
        price: "Ksh 1,320",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Chile"
    },
    {
        name: "General Meakins",
        category: "other",
        size: "250ML",
        price: "Ksh 327",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "General Meakins",
        category: "other",
        size: "750ML",
        price: "Ksh 983",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Genius Gin",
        category: "gin",
        size: "250ML",
        price: "Ksh 173",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Classic+Gin",
        isKenyan: false,
        country: "USA"
    },
    {
        name: "Gentleman Jackitre",
        category: "other",
        size: "1L",
        price: "Ksh 7,500",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "USA"
    },
    {
        name: "Gentleman Jack",
        category: "other",
        size: "750ML",
        price: "Ksh 7,200",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "USA"
    },
    {
        name: "Gibson Orange",
        category: "other",
        size: "750ML",
        price: "Ksh 2,175",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Gibson Pink",
        category: "other",
        size: "750ML",
        price: "Ksh 2,175",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Gibsons Gint",
        category: "gin",
        size: "1L",
        price: "Ksh 2,400",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Classic+Gin",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Gibsons Gin",
        category: "gin",
        size: "750ML",
        price: "Ksh 2,070",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Classic+Gin",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Gilbeyst",
        category: "gin",
        size: "1L",
        price: "Ksh 2,775",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Gilbeys",
        category: "gin",
        size: "250ML",
        price: "Ksh 624",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Gilbeys",
        category: "gin",
        size: "350ML",
        price: "Ksh 864",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Gilbeys",
        category: "gin",
        size: "750ML",
        price: "Ksh 1,860",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Gilbeys Mxd B",
        category: "gin",
        size: "250ML",
        price: "Ksh 624",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Gilbeys Pink",
        category: "gin",
        size: "250ML",
        price: "Ksh 630",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Gilbeys Pink",
        category: "gin",
        size: "350ML",
        price: "Ksh 864",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Gilbeys Pink 750M",
        category: "gin",
        size: "750ML",
        price: "Ksh 1,875",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Glendale Whskyt",
        category: "other",
        size: "1L",
        price: "Ksh 4,500",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Glendale Whsky 750M",
        category: "other",
        size: "750ML",
        price: "Ksh 3,975",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Glenfiddich 12Yrstr",
        category: "whisky",
        size: "1L",
        price: "Ksh 12,000",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Glenfiddich 21Yrs",
        category: "whisky",
        size: "750ML",
        price: "Ksh 37,500",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Glenfiddich Ipa",
        category: "whisky",
        size: "750ML",
        price: "Ksh 9,000",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Glenfiddich Project Xx",
        category: "whisky",
        size: "750ML",
        price: "Ksh 9,750",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Glengrant",
        category: "other",
        size: "750ML",
        price: "Ksh 3,150",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Glenlivet 12Yrst",
        category: "other",
        size: "1L",
        price: "Ksh 8,700",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Glenlivet 12Yrs",
        category: "other",
        size: "700ML",
        price: "Ksh 8,550",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Glenlivet Founder",
        category: "other",
        size: "700ML",
        price: "Ksh 8,100",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Glenmorangie 10Yrsitre",
        category: "whisky",
        size: "1L",
        price: "Ksh 15,000",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Glenmorangie 18Yrs",
        category: "whisky",
        size: "750ML",
        price: "Ksh 16,500",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Glenmorangie",
        category: "whisky",
        size: "75CL",
        price: "Ksh 7,200",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Glen Scanlan W",
        category: "other",
        size: "350ML",
        price: "Ksh 1,170",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Glen Silverst",
        category: "other",
        size: "1L",
        price: "Ksh 2,175",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Glen Silvers",
        category: "other",
        size: "750ML",
        price: "Ksh 1,755",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Gold Seal 16%",
        category: "other",
        size: "750ML",
        price: "Ksh 285",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "USA"
    },
    {
        name: "Gold Supreme",
        category: "other",
        size: "750ML",
        price: "Ksh 795",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Gordon Gin",
        category: "gin",
        size: "350ML",
        price: "Ksh 1,275",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Classic+Gin",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Gordon Greent",
        category: "gin",
        size: "1L",
        price: "Ksh 2,775",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Gordon Green",
        category: "gin",
        size: "750ML",
        price: "Ksh 2,400",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Gordon Lemont",
        category: "gin",
        size: "1L",
        price: "Ksh 3,225",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Gordon Lemon",
        category: "gin",
        size: "70CL",
        price: "Ksh 2,850",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Gordon Orange",
        category: "gin",
        size: "700ML",
        price: "Ksh 2,805",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Gordon Pinkt",
        category: "gin",
        size: "1L",
        price: "Ksh 3,075",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Gordon Pink",
        category: "gin",
        size: "700ML",
        price: "Ksh 2,775",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Gordons Dry & Tonic Can",
        category: "gin",
        size: "750ML",
        price: "Ksh 293",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Gordons Gintr",
        category: "gin",
        size: "1L",
        price: "Ksh 3,480",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Classic+Gin",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Gordons Gin",
        category: "gin",
        size: "250ML",
        price: "Ksh 375",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Classic+Gin",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Gordons Gin 3/4",
        category: "gin",
        size: "750ML",
        price: "Ksh 3,000",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Classic+Gin",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Gordons Pink &Tonic Can",
        category: "gin",
        size: "750ML",
        price: "Ksh 293",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Grace O Malley Whiskey",
        category: "whisky",
        size: "750ML",
        price: "Ksh 6,195",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Premium+Whisky",
        isKenyan: false,
        country: "Ireland"
    },
    {
        name: "Grand Master Whisky",
        category: "whisky",
        size: "750ML",
        price: "Ksh 1,035",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Premium+Whisky",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Gran Mirador Dark",
        category: "other",
        size: "750ML",
        price: "Ksh 2,970",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Spain"
    },
    {
        name: "Gran Mirador Red",
        category: "other",
        size: "750ML",
        price: "Ksh 2,970",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Spain"
    },
    {
        name: "Grants 1/2",
        category: "other",
        size: "750ML",
        price: "Ksh 1,155",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Grantst With Glass",
        category: "other",
        size: "1L",
        price: "Ksh 3,150",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Grants With Glass",
        category: "other",
        size: "750ML",
        price: "Ksh 2,550",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Grants Smoky",
        category: "other",
        size: "750ML",
        price: "Ksh 2,100",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Grants Triple W 12Yrs",
        category: "other",
        size: "750ML",
        price: "Ksh 5,625",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Grayson Gold",
        category: "other",
        size: "750ML",
        price: "Ksh 1,950",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Grayson Whiskey",
        category: "whisky",
        size: "750ML",
        price: "Ksh 1,170",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Premium+Whisky",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Grayson Whisky",
        category: "whisky",
        size: "250ML",
        price: "Ksh 390",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Premium+Whisky",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Grenadine Syrup",
        category: "other",
        size: "750ML",
        price: "Ksh 570",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Grey Goose Vodkat",
        category: "vodka",
        size: "1L",
        price: "Ksh 5,325",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Smooth+Vodka",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Grouse Sherry Whsky",
        category: "whisky",
        size: "750ML",
        price: "Ksh 4,125",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Guarana",
        category: "other",
        size: "440ML",
        price: "Ksh 240",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Guarana Can",
        category: "other",
        size: "750ML",
        price: "Ksh 267",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Guarana Iceberg",
        category: "other",
        size: "750ML",
        price: "Ksh 255",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Guiness Smooth Beer",
        category: "beer",
        size: "330ML",
        price: "Ksh 240",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Chilled+Beer",
        isKenyan: false,
        country: "Ireland"
    },
    {
        name: "Guinness Beer",
        category: "beer",
        size: "750ML",
        price: "Ksh 308",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Chilled+Beer",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Guinness Can",
        category: "beer",
        size: "500ML",
        price: "Ksh 329",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Guinness Smooth Beer",
        category: "beer",
        size: "500ML",
        price: "Ksh 254",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Chilled+Beer",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Guinness Smooth Can",
        category: "beer",
        size: "750ML",
        price: "Ksh 303",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Guinness Smooth  Can",
        category: "beer",
        size: "330ML",
        price: "Ksh 263",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Hampton Whisky",
        category: "whisky",
        size: "750ML",
        price: "Ksh 1,950",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Premium+Whisky",
        isKenyan: false,
        country: "India"
    },
    {
        name: "Hart Blueberry",
        category: "other",
        size: "750ML",
        price: "Ksh 2,250",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "China"
    },
    {
        name: "Hart Grape Ice",
        category: "other",
        size: "750ML",
        price: "Ksh 2,250",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "China"
    },
    {
        name: "Hart Manhattan Mint",
        category: "other",
        size: "750ML",
        price: "Ksh 2,250",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "China"
    },
    {
        name: "Hart Pineappleice",
        category: "other",
        size: "750ML",
        price: "Ksh 2,250",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "China"
    },
    {
        name: "Hart Strawberry Cosmo",
        category: "other",
        size: "750ML",
        price: "Ksh 2,250",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "China"
    },
    {
        name: "Harveys",
        category: "other",
        size: "750ML",
        price: "Ksh 2,775",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Spain"
    },
    {
        name: "Havana Anejo Especial Plus",
        category: "other",
        size: "750ML",
        price: "Ksh 3,720",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Cuba"
    },
    {
        name: "Havana Club 3Yrs",
        category: "other",
        size: "750 ML",
        price: "Ksh 2,880",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Cuba"
    },
    {
        name: "H B",
        category: "other",
        size: "750ML",
        price: "Ksh 270",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Germany"
    },
    {
        name: "H C",
        category: "other",
        size: "750ML",
        price: "Ksh 240",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Cuba"
    },
    {
        name: "Heineken Bottle",
        category: "beer",
        size: "330ML",
        price: "Ksh 398",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Netherlands"
    },
    {
        name: "Heineken Can",
        category: "beer",
        size: "500ML",
        price: "Ksh 420",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Netherlands"
    },
    {
        name: "Heineken Zero%",
        category: "beer",
        size: "750ML",
        price: "Ksh 315",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Netherlands"
    },
    {
        name: "Hendricks Dry Gint",
        category: "gin",
        size: "1L",
        price: "Ksh 9,750",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Classic+Gin",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Hendricks Dry Gin",
        category: "gin",
        size: "70CL",
        price: "Ksh 7,950",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Classic+Gin",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Hennessy Vst",
        category: "brandy",
        size: "1L",
        price: "Ksh 11,325",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Hennessy Vs 3/4",
        category: "brandy",
        size: "750ML",
        price: "Ksh 6,975",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Hennessy Vs",
        category: "brandy",
        size: "350ML",
        price: "Ksh 3,600",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Hennessy Vsop",
        category: "brandy",
        size: "700ML",
        price: "Ksh 13,500",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Hennessy  Xo",
        category: "brandy",
        size: "700ML",
        price: "Ksh 54,750",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Herdsman",
        category: "other",
        size: "250ML",
        price: "Ksh 420",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Herdsman",
        category: "other",
        size: "500ML",
        price: "Ksh 855",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Highland Queent",
        category: "other",
        size: "1L",
        price: "Ksh 1,560",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Highland Queen",
        category: "other",
        size: "350ML",
        price: "Ksh 600",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Highland Queen",
        category: "other",
        size: "750ML",
        price: "Ksh 1,170",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Hlibny Dar Crafted Cornitre",
        category: "other",
        size: "1L",
        price: "Ksh 2,700",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Ukraine"
    },
    {
        name: "Hlibny Dar Crafted  Ginger &Honey Litre",
        category: "gin",
        size: "750ML",
        price: "Ksh 2,700",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Classic+Gin",
        isKenyan: false,
        country: "Ukraine"
    },
    {
        name: "Hunter Cider Dry",
        category: "whisky",
        size: "330ML",
        price: "Ksh 296",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Hunter Cider Gold",
        category: "whisky",
        size: "330ML",
        price: "Ksh 296",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Hunters",
        category: "whisky",
        size: "250ML",
        price: "Ksh 447",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Hunters",
        category: "whisky",
        size: "350ML",
        price: "Ksh 653",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Hunters",
        category: "whisky",
        size: "750ML",
        price: "Ksh 1,380",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Hunting Apple",
        category: "other",
        size: "750ML",
        price: "Ksh 1,440",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Hunting Choco",
        category: "other",
        size: "750ML",
        price: "Ksh 1,440",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Hunting Ldg Vodka",
        category: "vodka",
        size: "750ML",
        price: "Ksh 1,440",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Smooth+Vodka",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Hunting  Lg Gin",
        category: "gin",
        size: "750ML",
        price: "Ksh 1,440",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Classic+Gin",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Hunting Whisky",
        category: "whisky",
        size: "750ML",
        price: "Ksh 1,620",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Premium+Whisky",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Ice Vodka",
        category: "vodka",
        size: "750ML",
        price: "Ksh 825",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Smooth+Vodka",
        isKenyan: false,
        country: "USA"
    },
    {
        name: "Icon Golden Brandy",
        category: "brandy",
        size: "250ML",
        price: "Ksh 203",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "India"
    },
    {
        name: "Icon Vodka",
        category: "vodka",
        size: "250ML",
        price: "Ksh 203",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Smooth+Vodka",
        isKenyan: false,
        country: "India"
    },
    {
        name: "Identity Brandy",
        category: "brandy",
        size: "250ML",
        price: "Ksh 255",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Identity Gin",
        category: "gin",
        size: "250ML",
        price: "Ksh 255",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Classic+Gin",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Identity Vodka",
        category: "vodka",
        size: "250ML",
        price: "Ksh 255",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Smooth+Vodka",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Imperial Blue",
        category: "other",
        size: "250ML",
        price: "Ksh 548",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "India"
    },
    {
        name: "Imperial Blue",
        category: "other",
        size: "375ML",
        price: "Ksh 825",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "India"
    },
    {
        name: "Imperial Blue",
        category: "other",
        size: "750ML",
        price: "Ksh 1,605",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "India"
    },
    {
        name: "Imperial Blue Giftpack",
        category: "other",
        size: "750ML",
        price: "Ksh 1,380",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "India"
    },
    {
        name: "Inverroche Gin",
        category: "gin",
        size: "750ML",
        price: "Ksh 7,350",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Classic+Gin",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Iris Whisky",
        category: "whisky",
        size: "375ML",
        price: "Ksh 548",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Premium+Whisky",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Iris Whisky",
        category: "whisky",
        size: "750ML",
        price: "Ksh 1,035",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Premium+Whisky",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Jack Danieltr",
        category: "whisky",
        size: "1 L",
        price: "Ksh 4,950",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "USA"
    },
    {
        name: "Jack Daniel Applet",
        category: "whisky",
        size: "1L",
        price: "Ksh 5,175",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "USA"
    },
    {
        name: "Jack Daniel Apple",
        category: "whisky",
        size: "700ML",
        price: "Ksh 5,550",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "USA"
    },
    {
        name: "Jack Daniel Can Cola",
        category: "whisky",
        size: "750ML",
        price: "Ksh 375",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "USA"
    },
    {
        name: "Jack Daniel Can Lynchburg",
        category: "whisky",
        size: "750ML",
        price: "Ksh 420",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "USA"
    },
    {
        name: "Jack Daniel Firet",
        category: "whisky",
        size: "1L",
        price: "Ksh 5,475",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "USA"
    },
    {
        name: "Jack Daniel Fire",
        category: "whisky",
        size: "700ML",
        price: "Ksh 4,350",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "USA"
    },
    {
        name: "Jack Daniel Honey",
        category: "whisky",
        size: "750ML",
        price: "Ksh 5,400",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "USA"
    },
    {
        name: "Jack Daniels 3/4",
        category: "whisky",
        size: "750ML",
        price: "Ksh 4,163",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "USA"
    },
    {
        name: "Jack Daniels",
        category: "whisky",
        size: "350ML",
        price: "Ksh 2,925",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/jack_daniels_old_no._7.png",
        isKenyan: false,
        country: "USA"
    },
    {
        name: "Jack Daniels Honeyt",
        category: "whisky",
        size: "1L",
        price: "Ksh 5,850",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "USA"
    },
    {
        name: "Jack Daniels Honey",
        category: "whisky",
        size: "350ML",
        price: "Ksh 2,400",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "USA"
    },
    {
        name: "Jack D Single Barrel",
        category: "other",
        size: "700ML",
        price: "Ksh 8,400",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "USA"
    },
    {
        name: "Jacob Creek Chardonnay",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,950",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Australia"
    },
    {
        name: "Jacob Creek Merlot",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,950",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Australia"
    },
    {
        name: "Jacob Creek Rose",
        category: "other",
        size: "750ML",
        price: "Ksh 1,950",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Australia"
    },
    {
        name: "Jacob Creek Shiraz",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,950",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Australia"
    },
    {
        name: "Jagermeister Giftpack",
        category: "other",
        size: "1L",
        price: "Ksh 4,800",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Germany"
    },
    {
        name: "Jagermeister 700 With Cork",
        category: "other",
        size: "750ML",
        price: "Ksh 3,525",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Germany"
    },
    {
        name: "Jagermestert",
        category: "other",
        size: "1L",
        price: "Ksh 4,425",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Germany"
    },
    {
        name: "Jagermester",
        category: "other",
        size: "350ML",
        price: "Ksh 2,025",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Germany"
    },
    {
        name: "Jagermester",
        category: "other",
        size: "750ML",
        price: "Ksh 3,525",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Germany"
    },
    {
        name: "Jamaican Rum",
        category: "rum",
        size: "750ML",
        price: "Ksh 1,050",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Jamaica"
    },
    {
        name: "Jambo Vodka",
        category: "vodka",
        size: "250ML",
        price: "Ksh 150",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Smooth+Vodka",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Jameson Cask Mate",
        category: "whisky",
        size: "750ML",
        price: "Ksh 4,575",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/jameson_cask_mate.jpg",
        isKenyan: false,
        country: "Ireland"
    },
    {
        name: "Jameson Crested",
        category: "whisky",
        size: "750ML",
        price: "Ksh 4,875",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Ireland"
    },
    {
        name: "Jamesonst",
        category: "whisky",
        size: "1L",
        price: "Ksh 4,950",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/jamesonst.jpg",
        isKenyan: false,
        country: "Ireland"
    },
    {
        name: "Jamesons",
        category: "whisky",
        size: "350ML",
        price: "Ksh 1,935",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/jamesonst.jpg",
        isKenyan: false,
        country: "Ireland"
    },
    {
        name: "Jamesons",
        category: "whisky",
        size: "750ML",
        price: "Ksh 3,750",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/jamesonst.jpg",
        isKenyan: false,
        country: "Ireland"
    },
    {
        name: "Jamesons Black Barrel",
        category: "whisky",
        size: "750ML",
        price: "Ksh 6,075",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Ireland"
    },
    {
        name: "J & Btr",
        category: "other",
        size: "1L",
        price: "Ksh 3,135",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "J & B 3/4",
        category: "other",
        size: "750ML",
        price: "Ksh 2,370",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "J & B",
        category: "other",
        size: "375ML",
        price: "Ksh 1,208",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "J & B Honey",
        category: "other",
        size: "700ML",
        price: "Ksh 2,775",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Jc Le Roux Domaine",
        category: "other",
        size: "750ML",
        price: "Ksh 2,190",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Jc Le Roux Flrte",
        category: "other",
        size: "750ML",
        price: "Ksh 2,190",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Jezlin Vodka",
        category: "vodka",
        size: "750ML",
        price: "Ksh 1,140",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Smooth+Vodka",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Jim Beamt",
        category: "other",
        size: "1L",
        price: "Ksh 3,375",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "USA"
    },
    {
        name: "Jim Beam",
        category: "other",
        size: "750ML",
        price: "Ksh 2,925",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "USA"
    },
    {
        name: "Jim Beam Apple",
        category: "other",
        size: "700ML",
        price: "Ksh 2,250",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "USA"
    },
    {
        name: "Jim Beam Blackt",
        category: "other",
        size: "1L",
        price: "Ksh 3,525",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "USA"
    },
    {
        name: "Jim Beam Hnyt",
        category: "other",
        size: "1L",
        price: "Ksh 3,000",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "USA"
    },
    {
        name: "Jim Beam Honey",
        category: "other",
        size: "750ML",
        price: "Ksh 2,250",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "USA"
    },
    {
        name: "John Bannermans 750M",
        category: "other",
        size: "750ML",
        price: "Ksh 1,875",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "John Barr Blackt",
        category: "other",
        size: "1L",
        price: "Ksh 2,550",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "John Barr Black",
        category: "other",
        size: "750ML",
        price: "Ksh 2,325",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "John Barr Redt",
        category: "other",
        size: "1L",
        price: "Ksh 2,400",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "John Barr Red",
        category: "other",
        size: "750ML",
        price: "Ksh 2,250",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "John Walker 18Yrs",
        category: "whisky",
        size: "750ML",
        price: "Ksh 14,775",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "John Walker Blackt",
        category: "whisky",
        size: "1L",
        price: "Ksh 5,325",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "John Walker Black",
        category: "whisky",
        size: "375ML",
        price: "Ksh 2,355",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "John Walker Black",
        category: "whisky",
        size: "750ML",
        price: "Ksh 4,425",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "John Walker Blue  Lblt",
        category: "whisky",
        size: "1L",
        price: "Ksh 48,000",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "John Walker Blue Lbl",
        category: "whisky",
        size: "750ML",
        price: "Ksh 39,750",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "John Walker Gold Lbl Rsrv",
        category: "whisky",
        size: "750ML",
        price: "Ksh 10,800",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "John Walker Green",
        category: "whisky",
        size: "750ML",
        price: "Ksh 10,200",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "John Walker Ice/Fire",
        category: "whisky",
        size: "750ML",
        price: "Ksh 6,300",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "John Walker Red 1/2",
        category: "whisky",
        size: "750ML",
        price: "Ksh 1,320",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "John Walker Redt",
        category: "whisky",
        size: "3L",
        price: "Ksh 10,200",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "John Walker Red Label",
        category: "whisky",
        size: "1L",
        price: "Ksh 3,075",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "John Walker Red Label 3/4",
        category: "whisky",
        size: "750ML",
        price: "Ksh 2,535",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "John Walker Whtt",
        category: "whisky",
        size: "1L",
        price: "Ksh 8,100",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "John W Black",
        category: "other",
        size: "250ML",
        price: "Ksh 1,575",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "John W Dbl Black",
        category: "other",
        size: "750ML",
        price: "Ksh 6,150",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "John W Red",
        category: "other",
        size: "250ML",
        price: "Ksh 870",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Jose Cuervo Goldt",
        category: "other",
        size: "1L",
        price: "Ksh 4,125",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Mexico"
    },
    {
        name: "Jose Cuervo Gold",
        category: "other",
        size: "750ML",
        price: "Ksh 3,525",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Mexico"
    },
    {
        name: "Jose Cuervo Silvert",
        category: "other",
        size: "1L",
        price: "Ksh 4,200",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Mexico"
    },
    {
        name: "Jose Cuervo Silver",
        category: "other",
        size: "750ML",
        price: "Ksh 3,825",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Mexico"
    },
    {
        name: "Jp Azeltao",
        category: "other",
        size: "750ML",
        price: "Ksh 2,025",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Portugal"
    },
    {
        name: "Jp Chenet Nobless",
        category: "other",
        size: "70CL",
        price: "Ksh 1,920",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Jumping Goat Whisky",
        category: "whisky",
        size: "700ML",
        price: "Ksh 4,800",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Premium+Whisky",
        isKenyan: false,
        country: "New Zealand"
    },
    {
        name: "Just Right Smooth",
        category: "other",
        size: "250ML",
        price: "Ksh 311",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "J.W White Walker",
        category: "whisky",
        size: "750ML",
        price: "Ksh 5,700",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Kahawa Gold",
        category: "other",
        size: "750ML",
        price: "Ksh 1,928",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Kahlua Liquert",
        category: "other",
        size: "1L",
        price: "Ksh 2,925",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Mexico"
    },
    {
        name: "Kahlua Liquer",
        category: "other",
        size: "750ML",
        price: "Ksh 2,250",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Mexico"
    },
    {
        name: "Kakira Coffee Vodka",
        category: "vodka",
        size: "250ML",
        price: "Ksh 720",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Smooth+Vodka",
        isKenyan: false,
        country: "Uganda"
    },
    {
        name: "Kakira Coffee Vodka",
        category: "vodka",
        size: "750ML",
        price: "Ksh 1,995",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Smooth+Vodka",
        isKenyan: false,
        country: "Uganda"
    },
    {
        name: "Kakira Gin",
        category: "gin",
        size: "250ML",
        price: "Ksh 540",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Classic+Gin",
        isKenyan: false,
        country: "Uganda"
    },
    {
        name: "Kakira Gin",
        category: "gin",
        size: "750ML",
        price: "Ksh 1,688",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Classic+Gin",
        isKenyan: false,
        country: "Uganda"
    },
    {
        name: "Kakira Gold Rum",
        category: "rum",
        size: "750ML",
        price: "Ksh 1,950",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Uganda"
    },
    {
        name: "Kalanov Vdka",
        category: "other",
        size: "750ML",
        price: "Ksh 825",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "India"
    },
    {
        name: "Kane Extra",
        category: "other",
        size: "750ML",
        price: "Ksh 893",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Kane Extra Gold",
        category: "other",
        size: "250ML",
        price: "Ksh 293",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Karigen Watert",
        category: "other",
        size: "1L",
        price: "Ksh 53",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Japan"
    },
    {
        name: "Kb",
        category: "other",
        size: "750ML",
        price: "Ksh 225",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Keg Empties",
        category: "other",
        size: "750ML",
        price: "Ksh 5,250",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Service"
    },
    {
        name: "Kensington Gin",
        category: "gin",
        size: "750ML",
        price: "Ksh 1,200",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Classic+Gin",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Kenya Cane",
        category: "other",
        size: "350ML",
        price: "Ksh 540",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Kenya Cane Citrus",
        category: "other",
        size: "250ML",
        price: "Ksh 383",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Kenya Cane Citrus",
        category: "other",
        size: "750ML",
        price: "Ksh 1,013",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Kenya Cane Coco",
        category: "other",
        size: "250ML",
        price: "Ksh 383",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Kenya Cane Coco",
        category: "other",
        size: "750ML",
        price: "Ksh 1,013",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Kenya Cane Lemon",
        category: "other",
        size: "250ML",
        price: "Ksh 383",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Kenya Cane Lemon",
        category: "other",
        size: "750ML",
        price: "Ksh 1,013",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Kenya Cane Pineapple",
        category: "other",
        size: "250ML",
        price: "Ksh 383",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Kenya Cane Pineapple",
        category: "other",
        size: "750ML",
        price: "Ksh 1,013",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Kenya Cane Smooth",
        category: "other",
        size: "250ML",
        price: "Ksh 383",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Kenya Cane Smooth",
        category: "other",
        size: "750ML",
        price: "Ksh 1,013",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Kenya Gold",
        category: "other",
        size: "250ML",
        price: "Ksh 278",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Kenya King",
        category: "other",
        size: "250ML",
        price: "Ksh 345",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Kenya King",
        category: "other",
        size: "750ML",
        price: "Ksh 990",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Keror White Grape",
        category: "other",
        size: "750ML",
        price: "Ksh 750",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Ketel One",
        category: "vodka",
        size: "750ML",
        price: "Ksh 4,440",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Netherlands"
    },
    {
        name: "Kgb Classic",
        category: "other",
        size: "750ML",
        price: "Ksh 930",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "New Zealand"
    },
    {
        name: "Kgb Limon",
        category: "other",
        size: "750ML",
        price: "Ksh 1,065",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "New Zealand"
    },
    {
        name: "Kibao Gin",
        category: "vodka",
        size: "250ML",
        price: "Ksh 341",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Classic+Gin",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Kibao Gin",
        category: "vodka",
        size: "350ML",
        price: "Ksh 525",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Classic+Gin",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Kibao Gin",
        category: "vodka",
        size: "750ML",
        price: "Ksh 957",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Classic+Gin",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Kibao Vodka",
        category: "vodka",
        size: "250ML",
        price: "Ksh 341",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Smooth+Vodka",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Kibao Vodka",
        category: "vodka",
        size: "350ML",
        price: "Ksh 525",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Smooth+Vodka",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Kibao Vodka",
        category: "vodka",
        size: "750ML",
        price: "Ksh 957",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Smooth+Vodka",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Kienyeji",
        category: "other",
        size: "250ML",
        price: "Ksh 320",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Kienyeji",
        category: "other",
        size: "750ML",
        price: "Ksh 930",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Kingfisher",
        category: "other",
        size: "750ML",
        price: "Ksh 297",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Kingrobert Ii",
        category: "other",
        size: "750ML",
        price: "Ksh 1,200",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Kingroberts Ginitre",
        category: "gin",
        size: "1L",
        price: "Ksh 1,350",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Classic+Gin",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Kingroberts Vodkaitre",
        category: "vodka",
        size: "1L",
        price: "Ksh 1,500",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Smooth+Vodka",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Kingroberts Whsky",
        category: "other",
        size: "75CL",
        price: "Ksh 1,125",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Kingroberts Wskyt",
        category: "other",
        size: "1L",
        price: "Ksh 1,800",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Kingstone Gin Litre",
        category: "gin",
        size: "750ML",
        price: "Ksh 1,170",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Classic+Gin",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Klar H2O",
        category: "other",
        size: "500ML",
        price: "Ksh 45",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Klar H2O Litre",
        category: "other",
        size: "750ML",
        price: "Ksh 83",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Klubemonade",
        category: "other",
        size: "101 L",
        price: "Ksh 75",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Ko Apple",
        category: "other",
        size: "750ML",
        price: "Ksh 345",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/ko_apple_can.jpg",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Ko Apple Can",
        category: "other",
        size: "750ML",
        price: "Ksh 345",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/ko_apple_can.jpg",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Ko Classic Gin",
        category: "gin",
        size: "750ML",
        price: "Ksh 3,150",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Classic+Gin",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Ko Classic Tonic Can",
        category: "other",
        size: "750ML",
        price: "Ksh 158",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/ko_classic_tonic_can.jpg",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Ko Honey",
        category: "other",
        size: "750ML",
        price: "Ksh 345",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Ko Light Toniccan",
        category: "other",
        size: "750ML",
        price: "Ksh 158",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/ko_light_toniccan.jpg",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Ko Lime",
        category: "other",
        size: "750ML",
        price: "Ksh 345",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/ko_lime_can.jpg",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Ko Lime Can",
        category: "other",
        size: "750ML",
        price: "Ksh 345",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/ko_lime_can.jpg",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Ko Mango",
        category: "other",
        size: "750ML",
        price: "Ksh 345",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/ko_mango.jpg",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Konyagi 1/2",
        category: "other",
        size: "750ML",
        price: "Ksh 788",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Tanzania"
    },
    {
        name: "Konyagi",
        category: "other",
        size: "750ML",
        price: "Ksh 1,065",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/konyagi.jpg",
        isKenyan: false,
        country: "Tanzania"
    },
    {
        name: "Ko Passion",
        category: "other",
        size: "750ML",
        price: "Ksh 345",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/ko_passion_can.jpg",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Ko Passion Can",
        category: "other",
        size: "750ML",
        price: "Ksh 345",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/ko_passion_can.jpg",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Ko Passion Ice Tea Can",
        category: "other",
        size: "750ML",
        price: "Ksh 210",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/ko_passion_ice_tea_can.jpg",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Ko Pineapple",
        category: "other",
        size: "750ML",
        price: "Ksh 345",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/ko_pineapple.jpg",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Ko Tambuzi",
        category: "other",
        size: "750ML",
        price: "Ksh 3,300",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/ko_tambuzi.jpg",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Ko Tropical Ice Tea Can",
        category: "other",
        size: "750ML",
        price: "Ksh 210",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/ko_tropical_ice_tea_can.jpg",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "K Vant",
        category: "other",
        size: "250ML",
        price: "Ksh 458",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Tanzania"
    },
    {
        name: "K Vant",
        category: "other",
        size: "750ML",
        price: "Ksh 1,650",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Tanzania"
    },
    {
        name: "Kwv 20Yrs",
        category: "other",
        size: "750ML",
        price: "Ksh 15,000",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/kwv_20yrs.jpg",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Kwv 3Yrs",
        category: "other",
        size: "750ML",
        price: "Ksh 1,800",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/kwv_3yrs.jpg",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Kwv Cape Ruby",
        category: "other",
        size: "750ML",
        price: "Ksh 2,550",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/kwv_cape_ruby.jpg",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Kwv Cevee Brut",
        category: "other",
        size: "750ML",
        price: "Ksh 1,200",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/kwv_cevee_brut.jpg",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Kwv Chenin Blanc",
        category: "other",
        size: "750ML",
        price: "Ksh 2,100",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/kwv_chenin_blanc.jpg",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Kwv Roodeberg Black",
        category: "other",
        size: "750ML",
        price: "Ksh 2,550",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/kwv_roodeberg_black.jpg",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Kwv Sauvignon Blanc",
        category: "other",
        size: "750ML",
        price: "Ksh 2,100",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/kwv_sauvignon_blanc.jpg",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Label 5 Whisky",
        category: "whisky",
        size: "750ML",
        price: "Ksh 2,190",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Premium+Whisky",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Larios Gint",
        category: "gin",
        size: "1L",
        price: "Ksh 2,100",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Classic+Gin",
        isKenyan: false,
        country: "Spain"
    },
    {
        name: "Larios Premium",
        category: "other",
        size: "750ML",
        price: "Ksh 2,250",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Spain"
    },
    {
        name: "Legend",
        category: "other",
        size: "250ML",
        price: "Ksh 270",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Legend",
        category: "other",
        size: "750ML",
        price: "Ksh 780",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Leopard Cab Sauv",
        category: "other",
        size: "750ML",
        price: "Ksh 2,235",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Leopard Cab Sav Merlot",
        category: "wine",
        size: "750ML",
        price: "Ksh 2,235",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Leopard Chardonnay",
        category: "wine",
        size: "750ML",
        price: "Ksh 2,235",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Leopard Chenin Blanc",
        category: "other",
        size: "750ML",
        price: "Ksh 2,235",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Leopard Merlot",
        category: "wine",
        size: "750ML",
        price: "Ksh 2,235",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Leopard Sav Blanc",
        category: "other",
        size: "750ML",
        price: "Ksh 2,235",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Lime Juice",
        category: "other",
        size: "1.5L",
        price: "Ksh 368",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Lime Juice",
        category: "other",
        size: "700ML",
        price: "Ksh 210",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Lion Export Premium(8.8%)",
        category: "other",
        size: "750ML",
        price: "Ksh 323",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Sri Lanka"
    },
    {
        name: "Lion Extra Strong (12%_",
        category: "other",
        size: "750ML",
        price: "Ksh 338",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Sri Lanka"
    },
    {
        name: "Lion Stout(8.8)",
        category: "other",
        size: "750ML",
        price: "Ksh 413",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Sri Lanka"
    },
    {
        name: "Luksusowa Vodka",
        category: "vodka",
        size: "750ML",
        price: "Ksh 1,035",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Smooth+Vodka",
        isKenyan: false,
        country: "Poland"
    },
    {
        name: "Lupini Black",
        category: "other",
        size: "750ML",
        price: "Ksh 1,575",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Italy"
    },
    {
        name: "Lupini Gold",
        category: "other",
        size: "750ML",
        price: "Ksh 1,200",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Italy"
    },
    {
        name: "Macallan 12Yrs",
        category: "other",
        size: "750ML",
        price: "Ksh 20,250",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Madafu Liqueor",
        category: "other",
        size: "750ML",
        price: "Ksh 1,200",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Magic Momentt",
        category: "other",
        size: "1.75L",
        price: "Ksh 2,190",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "India"
    },
    {
        name: "Magic Moment 3/4",
        category: "other",
        size: "750ML",
        price: "Ksh 1,275",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "India"
    },
    {
        name: "Magic Moments Apple",
        category: "other",
        size: "750ML",
        price: "Ksh 1,305",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "India"
    },
    {
        name: "Magic Moments Choco",
        category: "other",
        size: "750ML",
        price: "Ksh 1,305",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "India"
    },
    {
        name: "Magic Moments Original",
        category: "gin",
        size: "750ML",
        price: "Ksh 1,305",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Classic+Gin",
        isKenyan: false,
        country: "India"
    },
    {
        name: "Magic Momenys Orange",
        category: "other",
        size: "750ML",
        price: "Ksh 1,305",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "India"
    },
    {
        name: "Magic Times",
        category: "other",
        size: "250ML",
        price: "Ksh 150",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "India"
    },
    {
        name: "Magnumt",
        category: "other",
        size: "1L",
        price: "Ksh 2,250",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Magnum",
        category: "other",
        size: "750ML",
        price: "Ksh 1,725",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Malbec",
        category: "other",
        size: "750ML",
        price: "Ksh 3,105",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Argentina"
    },
    {
        name: "Malfy Con Limone",
        category: "other",
        size: "750ML",
        price: "Ksh 6,240",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Italy"
    },
    {
        name: "Malfy Con Rosa",
        category: "other",
        size: "750ML",
        price: "Ksh 6,240",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Italy"
    },
    {
        name: "Malfy Gin Originale",
        category: "gin",
        size: "750ML",
        price: "Ksh 6,240",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Classic+Gin",
        isKenyan: false,
        country: "Italy"
    },
    {
        name: "Malibutr",
        category: "other",
        size: "1L",
        price: "Ksh 3,150",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Barbados"
    },
    {
        name: "Malibu 750",
        category: "other",
        size: "750ML",
        price: "Ksh 2,745",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Barbados"
    },
    {
        name: "Manyatta Lemon",
        category: "other",
        size: "750ML",
        price: "Ksh 338",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Manyatta Mango",
        category: "other",
        size: "750ML",
        price: "Ksh 338",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Manyatta Pineapple",
        category: "other",
        size: "750ML",
        price: "Ksh 338",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Marengo Sweet Rose Wine",
        category: "wine",
        size: "750ML",
        price: "Ksh 2,250",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Fine+Wine",
        isKenyan: false,
        country: "Italy"
    },
    {
        name: "Marengo Sweet White Sparkling",
        category: "wine",
        size: "750ML",
        price: "Ksh 2,250",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Italy"
    },
    {
        name: "Marte",
        category: "other",
        size: "750ML",
        price: "Ksh 10,500",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Martel Blue Swift",
        category: "other",
        size: "700ML",
        price: "Ksh 13,500",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Martel Vs Litre",
        category: "other",
        size: "750ML",
        price: "Ksh 10,500",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Martel V.S.O.Pt",
        category: "other",
        size: "1L",
        price: "Ksh 16,800",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Martel Vsop 3/4",
        category: "other",
        size: "750ML",
        price: "Ksh 12,225",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Martel Vssd",
        category: "other",
        size: "750ML",
        price: "Ksh 7,605",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Martel Xo",
        category: "other",
        size: "750ML",
        price: "Ksh 51,750",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Martens 10%",
        category: "other",
        size: "750ML",
        price: "Ksh 345",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Belgium"
    },
    {
        name: "Martens  Beer 16%",
        category: "beer",
        size: "750ML",
        price: "Ksh 375",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Chilled+Beer",
        isKenyan: false,
        country: "Belgium"
    },
    {
        name: "Martin Biancotr",
        category: "other",
        size: "1L",
        price: "Ksh 2,100",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Italy"
    },
    {
        name: "Martin Bianco 3/4",
        category: "other",
        size: "750ML",
        price: "Ksh 2,250",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Italy"
    },
    {
        name: "Martini Dry",
        category: "other",
        size: "750ML",
        price: "Ksh 1,950",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Italy"
    },
    {
        name: "Martin Rosso -",
        category: "wine",
        size: "1L",
        price: "Ksh 2,850",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Italy"
    },
    {
        name: "Martin Rosso 3/4",
        category: "wine",
        size: "750ML",
        price: "Ksh 2,325",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Italy"
    },
    {
        name: "Mateus Original Rose",
        category: "gin",
        size: "750ML",
        price: "Ksh 1,200",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Classic+Gin",
        isKenyan: false,
        country: "Portugal"
    },
    {
        name: "Mc Mohan With Glass",
        category: "other",
        size: "750ML",
        price: "Ksh 1,425",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "India"
    },
    {
        name: "Mikado Cherry Red",
        category: "other",
        size: "750ML",
        price: "Ksh 1,875",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Ukraine"
    },
    {
        name: "Mikado Red Plum",
        category: "other",
        size: "750ML",
        price: "Ksh 1,500",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Ukraine"
    },
    {
        name: "Mikado Wht Apricot",
        category: "other",
        size: "750ML",
        price: "Ksh 1,875",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Ukraine"
    },
    {
        name: "Mikado Wht Lychee",
        category: "other",
        size: "750ML",
        price: "Ksh 1,875",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Ukraine"
    },
    {
        name: "Mikado Wht Passion",
        category: "other",
        size: "750ML",
        price: "Ksh 1,875",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Ukraine"
    },
    {
        name: "Mikado Wht Pineapple",
        category: "other",
        size: "750ML",
        price: "Ksh 1,875",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Ukraine"
    },
    {
        name: "Mikado Wht Plum",
        category: "other",
        size: "750ML",
        price: "Ksh 1,695",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Ukraine"
    },
    {
        name: "Minute Maid Juice",
        category: "other",
        size: "750ML",
        price: "Ksh 90",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "USA"
    },
    {
        name: "Mistral Apple",
        category: "other",
        size: "750ML",
        price: "Ksh 990",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "India"
    },
    {
        name: "Mistral Chocolate",
        category: "other",
        size: "750ML",
        price: "Ksh 990",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "India"
    },
    {
        name: "Mistral Mango",
        category: "other",
        size: "750ML",
        price: "Ksh 990",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Mistral Plain",
        category: "other",
        size: "750ML",
        price: "Ksh 990",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "India"
    },
    {
        name: "Mistral Strawberry",
        category: "other",
        size: "750ML",
        price: "Ksh 990",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "India"
    },
    {
        name: "Modern Gin",
        category: "gin",
        size: "250ML",
        price: "Ksh 180",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Classic+Gin",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Moet Ice Imperial",
        category: "other",
        size: "750ML",
        price: "Ksh 17,250",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Moet Imperial Brut",
        category: "other",
        size: "750ML",
        price: "Ksh 14,700",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Moet Nectar Rose",
        category: "other",
        size: "750ML",
        price: "Ksh 12,000",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Mohan Dry Red",
        category: "other",
        size: "750ML",
        price: "Ksh 825",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Mohans Dry White",
        category: "other",
        size: "750ML",
        price: "Ksh 825",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Mohans Sweetred",
        category: "other",
        size: "750ML",
        price: "Ksh 1,200",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Mohans  White Sweet",
        category: "other",
        size: "750ML",
        price: "Ksh 825",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Monkey Shouldert",
        category: "other",
        size: "1L",
        price: "Ksh 7,800",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Monkey Shoulder",
        category: "other",
        size: "700ML",
        price: "Ksh 7,200",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Monster Mucho Loco(Blue)",
        category: "other",
        size: "750ML",
        price: "Ksh 225",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "USA"
    },
    {
        name: "Monster Mule(Brown",
        category: "other",
        size: "750ML",
        price: "Ksh 225",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "USA"
    },
    {
        name: "Monster Original",
        category: "gin",
        size: "750ML",
        price: "Ksh 270",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Classic+Gin",
        isKenyan: false,
        country: "USA"
    },
    {
        name: "Monster Rossi(Yellow)",
        category: "other",
        size: "750ML",
        price: "Ksh 225",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "USA"
    },
    {
        name: "Monster White",
        category: "other",
        size: "750ML",
        price: "Ksh 225",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "USA"
    },
    {
        name: "Mr Dowells",
        category: "other",
        size: "250ML",
        price: "Ksh 413",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "India"
    },
    {
        name: "Mr Dowels",
        category: "other",
        size: "750ML",
        price: "Ksh 1,238",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "India"
    },
    {
        name: "Mt Kenyan H20",
        category: "other",
        size: "500ML",
        price: "Ksh 60",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Mucho Mas",
        category: "other",
        size: "1.5L",
        price: "Ksh 6,000",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Spain"
    },
    {
        name: "Mucho Mas Red (Black Edition)",
        category: "other",
        size: "750ML",
        price: "Ksh 3,030",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Spain"
    },
    {
        name: "Mucho Mas White",
        category: "other",
        size: "750ML",
        price: "Ksh 2,745",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Spain"
    },
    {
        name: "Muscat White Sweet750",
        category: "other",
        size: "750ML",
        price: "Ksh 1,605",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Musketeer Brdy",
        category: "other",
        size: "250ML",
        price: "Ksh 263",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "India"
    },
    {
        name: "Musketeer Brndy",
        category: "other",
        size: "750ML",
        price: "Ksh 1,125",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "India"
    },
    {
        name: "Myers Rumt",
        category: "rum",
        size: "1 L",
        price: "Ksh 2,775",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Jamaica"
    },
    {
        name: "Myers Rum 750",
        category: "rum",
        size: "750ML",
        price: "Ksh 2,700",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Jamaica"
    },
    {
        name: "Naked Maltt",
        category: "other",
        size: "1L",
        price: "Ksh 4,950",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Naked Malt",
        category: "other",
        size: "700ML",
        price: "Ksh 3,975",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Namaqua Dry Redtr",
        category: "other",
        size: "5L",
        price: "Ksh 5,025",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Namaqua Dry Whitetrs",
        category: "other",
        size: "5L",
        price: "Ksh 3,750",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Namaqua Sweet Red",
        category: "wine",
        size: "5L",
        price: "Ksh 5,025",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Namaqua Sweet Red",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,560",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Namaqua White Swt",
        category: "other",
        size: "750ML",
        price: "Ksh 1,560",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Napoleon Crown",
        category: "other",
        size: "250ML",
        price: "Ksh 390",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Napoleon Crown",
        category: "other",
        size: "750ML",
        price: "Ksh 1,095",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Napoleon Gold",
        category: "other",
        size: "250ML",
        price: "Ksh 330",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Napoleon Gold",
        category: "other",
        size: "750ML",
        price: "Ksh 998",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Nature'S Mango & Apple",
        category: "other",
        size: "750ML",
        price: "Ksh 258",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Nederberg Rose",
        category: "other",
        size: "750ML",
        price: "Ksh 2,250",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Nederburg Barone",
        category: "other",
        size: "750ML",
        price: "Ksh 2,250",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Nederburg Cab Sav",
        category: "other",
        size: "750ML",
        price: "Ksh 2,250",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Nederburg Chardonnay",
        category: "wine",
        size: "750ML",
        price: "Ksh 2,250",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Nederburg Merlot",
        category: "wine",
        size: "750ML",
        price: "Ksh 2,250",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Nederburg Pinotage",
        category: "other",
        size: "750ML",
        price: "Ksh 2,250",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Nederburg Sav Blanc",
        category: "other",
        size: "750ML",
        price: "Ksh 2,250",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Nederburg Shiraz",
        category: "wine",
        size: "750ML",
        price: "Ksh 2,250",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Neon",
        category: "other",
        size: "350ML",
        price: "Ksh 435",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "India"
    },
    {
        name: "Neon Chocolate",
        category: "other",
        size: "750ML",
        price: "Ksh 675",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "India"
    },
    {
        name: "Neon Coffee",
        category: "other",
        size: "750ML",
        price: "Ksh 675",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "India"
    },
    {
        name: "New Groove Flvd",
        category: "other",
        size: "750ML",
        price: "Ksh 1,635",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Mauritius"
    },
    {
        name: "Nicotine Mango",
        category: "other",
        size: "750ML",
        price: "Ksh 615",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Nicotine Mint",
        category: "other",
        size: "750ML",
        price: "Ksh 615",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Nicotine Passion Fruit",
        category: "other",
        size: "750ML",
        price: "Ksh 615",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Oak Cask",
        category: "other",
        size: "700ML",
        price: "Ksh 1,193",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Argentina"
    },
    {
        name: "Ocean Energy Drink",
        category: "other",
        size: "750ML",
        price: "Ksh 173",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "India"
    },
    {
        name: "Officers Choice Red",
        category: "other",
        size: "750ML",
        price: "Ksh 1,125",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "India"
    },
    {
        name: "Oj 12%",
        category: "other",
        size: "750ML",
        price: "Ksh 413",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Belgium"
    },
    {
        name: "Oj 16%",
        category: "other",
        size: "750ML",
        price: "Ksh 413",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Belgium"
    },
    {
        name: "Oj 20%",
        category: "other",
        size: "750ML",
        price: "Ksh 428",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Belgium"
    },
    {
        name: "Oj 5%",
        category: "other",
        size: "750ML",
        price: "Ksh 375",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Belgium"
    },
    {
        name: "Oj 8.5%",
        category: "other",
        size: "750ML",
        price: "Ksh 278",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Belgium"
    },
    {
        name: "Old Cock",
        category: "other",
        size: "750ML",
        price: "Ksh 2,625",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Old Monk",
        category: "other",
        size: "375ML",
        price: "Ksh 525",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "India"
    },
    {
        name: "Old Monk Rum",
        category: "rum",
        size: "750ML",
        price: "Ksh 1,500",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "India"
    },
    {
        name: "Old Nickdark",
        category: "other",
        size: "700ML",
        price: "Ksh 1,830",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Old Nick Dark Litre",
        category: "other",
        size: "750ML",
        price: "Ksh 2,205",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Old Nick Spiced",
        category: "other",
        size: "700ML",
        price: "Ksh 1,830",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Old Nick Whiteitre",
        category: "other",
        size: "1L",
        price: "Ksh 2,205",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Old Nick White",
        category: "other",
        size: "700ML",
        price: "Ksh 1,830",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Old Smuggler 3/4",
        category: "other",
        size: "750ML",
        price: "Ksh 1,665",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Olepasu Red Wine",
        category: "wine",
        size: "70CL",
        price: "Ksh 1,050",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Fine+Wine",
        isKenyan: false,
        country: "Italy"
    },
    {
        name: "Olepasu White Wine",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,050",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Fine+Wine",
        isKenyan: false,
        country: "Italy"
    },
    {
        name: "Olmeca Blanco",
        category: "other",
        size: "750ML",
        price: "Ksh 3,975",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Mexico"
    },
    {
        name: "Olmeca Choco",
        category: "other",
        size: "750ML",
        price: "Ksh 3,975",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Mexico"
    },
    {
        name: "Olmeca Gold",
        category: "other",
        size: "750ML",
        price: "Ksh 4,020",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Mexico"
    },
    {
        name: "Opm",
        category: "other",
        size: "375ML",
        price: "Ksh 698",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "India"
    },
    {
        name: "Opm Vodka",
        category: "vodka",
        size: "250ML",
        price: "Ksh 465",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Smooth+Vodka",
        isKenyan: false,
        country: "India"
    },
    {
        name: "Opm Vodka",
        category: "vodka",
        size: "750ML",
        price: "Ksh 1,575",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Smooth+Vodka",
        isKenyan: false,
        country: "India"
    },
    {
        name: "Opulenza",
        category: "other",
        size: "750ML",
        price: "Ksh 2,700",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Chile"
    },
    {
        name: "Orange Rum Can",
        category: "rum",
        size: "750ML",
        price: "Ksh 255",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Jamaica"
    },
    {
        name: "Orchid Apple",
        category: "other",
        size: "750ML",
        price: "Ksh 323",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Orchid Guava",
        category: "other",
        size: "750ML",
        price: "Ksh 323",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Orchid Mango",
        category: "other",
        size: "750ML",
        price: "Ksh 323",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Orchid Orange",
        category: "other",
        size: "750ML",
        price: "Ksh 323",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Orchid Passion",
        category: "other",
        size: "750ML",
        price: "Ksh 323",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Orchid Tropical",
        category: "other",
        size: "750ML",
        price: "Ksh 323",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Orijin Herbal",
        category: "other",
        size: "250ML",
        price: "Ksh 353",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Nigeria"
    },
    {
        name: "Orijin Herbal",
        category: "other",
        size: "750ML",
        price: "Ksh 938",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Nigeria"
    },
    {
        name: "Overmeer Redit",
        category: "other",
        size: "5L",
        price: "Ksh 3,675",
        description: "Ripe with intense fruity flavours with a spicy background, which is easy to drink; Product of Africa (Stellenbosch). Actual Weight: 5.2 KGs. Product Dimensions: ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Overmeer White",
        category: "other",
        size: "5L",
        price: "Ksh 3,375",
        description: "This wine is crisp and fresh with fresh fruit flavours and undertones of dried fruit. On the palate it is well balanced with a delicate freshness and a ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Pall Mall Green",
        category: "other",
        size: "750ML",
        price: "Ksh 317",
        description: "Experience the smooth taste of Pall Mall Green cigarettes. Enjoy a blend of rich flavors and quality tobacco for a satisfying smoking experience. Shop now!",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Pall Mall Plus",
        category: "other",
        size: "750ML",
        price: "Ksh 252",
        description: "Super excited to share this episode with you. Find out how Amy got into the wine world, her favourite region and why? As well as her views on AI ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Passport",
        category: "other",
        size: "750ML",
        price: "Ksh 1,650",
        description: "Originally from the Glen Keith Distillery in Scotland, Passport takes its roots in the 60s, to which it owes its unconventional spirit and unique & colourful ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Peach Liqueur",
        category: "liqueur",
        size: "700ML",
        price: "Ksh 3,225",
        description: "Peachtree is the first liqueur that has the taste and smell of tree-ripe peaches, made following a well-balanced recipe and delicate distillation.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Fine+Liqueur",
        isKenyan: false,
        country: "Variety"
    },
    {
        name: "Pearly Bay Dry Red",
        category: "other",
        size: "750ML",
        price: "Ksh 1,170",
        description: "This is an easy-drinking wine with an abundance of strawberry and red fruit flavours and aromas. It is soft, juicy, and smooth on the.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Pearly Bay Dry White",
        category: "other",
        size: "750ML",
        price: "Ksh 1,170",
        description: "This easy-drinking wine range will appeal to those looking for a wine partner for a jovial meeting with friends, a day out at the beach, an unplanned lunch and ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Pearly Bay Rose",
        category: "other",
        size: "750ML",
        price: "Ksh 1,170",
        description: "The wine is soft and smooth with a lingering sweet, juicy finish. South Africa's vineyards are mostly situated in the. Western Cape near the coast. This is the.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Pearly Bay Sweetred",
        category: "other",
        size: "750ML",
        price: "Ksh 1,470",
        description: "Wine of Origin. Western Cape. Wine description. This is an easy-drinking wine with an abundance of ... Wine Analysis. Alcohol: 13.25 % v/v. pH: 3.52. Total ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Penasal Red Bttl",
        category: "other",
        size: "750ML",
        price: "Ksh 833",
        description: "From the heart of Castilla – La Mancha comes our wide variety of wines, sangrias and grape juice, for those moments when you just need to enjoy.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Spain"
    },
    {
        name: "Penasol Dry Redt",
        category: "other",
        size: "1L",
        price: "Ksh 840",
        description: "From the heart of Castilla – La Mancha comes our wide variety of wines, sangrias and grape juice, for those moments when you just need to enjoy.",
        image: "assets/images/real/penasol_dry_redt.jpg",
        isKenyan: false,
        country: "Spain"
    },
    {
        name: "Penasol Dry  White",
        category: "other",
        size: "1L",
        price: "Ksh 840",
        description: "Spain's most widely planted white grape shines here with a light straw colour and floral and white fruit aromas. Crisp, fruity, and lively in the mouth. Food ...",
        image: "assets/images/real/penasol_dry__white.jpg",
        isKenyan: false,
        country: "Spain"
    },
    {
        name: "Penasol Red Sweet Blue",
        category: "other",
        size: "1L",
        price: "Ksh 848",
        description: "From the heart of Castilla – La Mancha comes our wide variety of wines, sangrias and grape juice, for those moments when you just need to enjoy.",
        image: "assets/images/real/penasol_red_sweet_blue.jpg",
        isKenyan: false,
        country: "Spain"
    },
    {
        name: "Penasol Sangiria Tetra",
        category: "other",
        size: "750ML",
        price: "Ksh 840",
        description: "Very bright cherry red. Intense aromas of citrus fruits mixed with ripe red fruits. A gentle palate slightly sweet and very pleasant. Food Pairing. A perfect ...",
        image: "assets/images/real/penasol_sangiria_tetra.jpg",
        isKenyan: false,
        country: "Spain"
    },
    {
        name: "Penasol Sangria",
        category: "other",
        size: "1.5L",
        price: "Ksh 1,440",
        description: "Sangria is the typical summer drink enjoyed on gorgeous Spanish beaches and around the world. A delicious blend of wine and citrus. This sangria can be ...",
        image: "assets/images/real/penasol_sangria.jpg",
        isKenyan: false,
        country: "Spain"
    },
    {
        name: "Penasol Sangria Btlt",
        category: "other",
        size: "1L",
        price: "Ksh 990",
        description: "From the heart of Castilla – La Mancha comes our wide variety of wines, sangrias and grape juice, for those moments when you just need to enjoy.",
        image: "assets/images/real/penasol_sangria_btlt.jpg",
        isKenyan: false,
        country: "Spain"
    },
    {
        name: "Penasol White Bttl",
        category: "other",
        size: "750ML",
        price: "Ksh 900",
        description: "Spain's most widely planted white grape shines here with a light straw colour and floral and white fruit aromas. Crisp, fruity, and lively in the mouth. Food ...",
        image: "assets/images/real/penasol_white_bttl.jpg",
        isKenyan: false,
        country: "Spain"
    },
    {
        name: "Penasol White Sweett",
        category: "other",
        size: "1L",
        price: "Ksh 870",
        description: "Spain's most widely planted white grape shines here with a light straw colour and floral and white fruit aromas. Crisp, fruity, and lively in the mouth. Food ...",
        image: "assets/images/real/penasol_white_sweett.jpg",
        isKenyan: false,
        country: "Spain"
    },
    {
        name: "People",
        category: "other",
        size: "250ML",
        price: "Ksh 177",
        description: "Purposeful production of alcoholic beverages is common and often reflects cultural and religious peculiarities as much as geographical and sociological ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "India"
    },
    {
        name: "Pick & Peel Apple",
        category: "other",
        size: "750ML",
        price: "Ksh 383",
        description: "Picked n Peeled from fresh-eating, thirst-quenching crispy apples resulting in a sweet, crispy smooth tangy apple juice giving you a boost in all health ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Pick & Peel Mango",
        category: "other",
        size: "750ML",
        price: "Ksh 383",
        description: "To elaborate the liqueurs, “Haden” and “Tommy Atkins” mangoes were used, originating from the São Francisco Valley in the Northeast of Brazil.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Brazil"
    },
    {
        name: "Pick & Peel Redgrape",
        category: "other",
        size: "750ML",
        price: "Ksh 383",
        description: "Not only does Pick N' Peel's red grape flavor taste amazing, but it's also made with only the best ingredients to ensure that every sip is a burst of flavour.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Pick & Peel Tropical",
        category: "other",
        size: "750ML",
        price: "Ksh 383",
        description: "Pick 'N' Peel Tropical Mix Price in Kenya. 1 Litre @ KES 310. Additional notes. Size. 1L. 3 reviews for Pick 'N' Peel Tropical Mix 1L.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Pierre Marcel Sweet Red",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,950",
        description: "Pierre Marcel Sweet Red 75cl is an easy-drinking French red wine made for those who enjoy a softer, fruit-forward style. Produced under the Vin ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Pilsner Beer",
        category: "beer",
        size: "750ML",
        price: "Ksh 254",
        description: "Certified cicerone Anne Becerra explains how Pilsner pioneered crisp, cold, refreshing beer when it was first brewed in the Czech Republic ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Chilled+Beer",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Pilsner Can",
        category: "beer",
        size: "500ML",
        price: "Ksh 303",
        description: "Certified cicerone Anne Becerra explains how Pilsner pioneered crisp, cold, refreshing beer when it was first brewed in the Czech Republic ...",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Power Horse",
        category: "other",
        size: "750ML",
        price: "Ksh 150",
        description: "OUR STORY ; 1992. The first ever Power Horse Energy Drink can is launched in Austria ; 1996. Power Horse enters Moto GP ; 1997. Power Horse sponsors Formula 1.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Austria"
    },
    {
        name: "Power Play",
        category: "other",
        size: "750ML",
        price: "Ksh 83",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Predator Gold",
        category: "other",
        size: "400ML",
        price: "Ksh 83",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "USA"
    },
    {
        name: "Prosecco",
        category: "other",
        size: "750ML",
        price: "Ksh 3,750",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Italy"
    },
    {
        name: "Q1 Gin",
        category: "gin",
        size: "750ML",
        price: "Ksh 1,125",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Classic+Gin",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Quench Watert",
        category: "other",
        size: "1L",
        price: "Ksh 53",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Rada Classic",
        category: "other",
        size: "750ML",
        price: "Ksh 2,850",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Ukraine"
    },
    {
        name: "Rebate",
        category: "other",
        size: "750ML",
        price: "Ksh 150,000",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Service"
    },
    {
        name: "Redbull",
        category: "other",
        size: "750ML",
        price: "Ksh 270",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Austria"
    },
    {
        name: "Redbull Sugarfree",
        category: "other",
        size: "750ML",
        price: "Ksh 270",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Austria"
    },
    {
        name: "Red Label Limited",
        category: "other",
        size: "750ML",
        price: "Ksh 2,400",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Red Star",
        category: "other",
        size: "250ML",
        price: "Ksh 300",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Remy Martin Vsopt",
        category: "other",
        size: "1L",
        price: "Ksh 13,500",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Remy Martin Vsop",
        category: "other",
        size: "750ML",
        price: "Ksh 11,700",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Remy Martin Xo",
        category: "other",
        size: "700ML",
        price: "Ksh 33,000",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Rendez Mojito",
        category: "other",
        size: "750ML",
        price: "Ksh 600",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Belgium"
    },
    {
        name: "Rendez Sparkling Apple",
        category: "other",
        size: "750ML",
        price: "Ksh 525",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Rendez Sparkling Pink",
        category: "other",
        size: "750ML",
        price: "Ksh 525",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Rendez Sparkling White",
        category: "other",
        size: "750ML",
        price: "Ksh 525",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Reserve 7 Whisky",
        category: "whisky",
        size: "350ML",
        price: "Ksh 503",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Premium+Whisky",
        isKenyan: false,
        country: "India"
    },
    {
        name: "Reserve 7 Whisky",
        category: "whisky",
        size: "750ML",
        price: "Ksh 1,350",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Premium+Whisky",
        isKenyan: false,
        country: "India"
    },
    {
        name: "Richot 1/2",
        category: "other",
        size: "750ML",
        price: "Ksh 864",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Richot",
        category: "other",
        size: "250ML",
        price: "Ksh 623",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Richot 3/4",
        category: "other",
        size: "750ML",
        price: "Ksh 1,860",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Robertson Redt",
        category: "other",
        size: "1.5L",
        price: "Ksh 2,595",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Robertson Red",
        category: "other",
        size: "750ML",
        price: "Ksh 1,545",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Robertson Rosets",
        category: "other",
        size: "1.5 L",
        price: "Ksh 2,580",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Robertson Rose",
        category: "other",
        size: "750 ML",
        price: "Ksh 1,545",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Robertson  White",
        category: "other",
        size: "1.5L",
        price: "Ksh 2,595",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Robertson White",
        category: "other",
        size: "750ML",
        price: "Ksh 1,545",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Rockshore Tropical",
        category: "other",
        size: "750ML",
        price: "Ksh 210",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Rooster",
        category: "other",
        size: "750ML",
        price: "Ksh 255",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Rosso Nobile Al Cio Red",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,950",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Germany"
    },
    {
        name: "Rosso Nobile Bianco",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,950",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Germany"
    },
    {
        name: "Rosso Nobile  Bois Bande",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,950",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Germany"
    },
    {
        name: "Rosso Nobile Cherry",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,950",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Germany"
    },
    {
        name: "Rosso Nobile Cioccolata",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,950",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Germany"
    },
    {
        name: "Rosso Nobile Crema",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,950",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Germany"
    },
    {
        name: "Rosso Nobile Espresso",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,950",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Germany"
    },
    {
        name: "Rosso Nobile Marzipan",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,950",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Germany"
    },
    {
        name: "Rosso Nobile Nero",
        category: "wine",
        size: "750ML",
        price: "Ksh 2,025",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Germany"
    },
    {
        name: "Rosso Nobile Nougat",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,950",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Germany"
    },
    {
        name: "Rosso Nobile Raspberry",
        category: "wine",
        size: "750ML",
        price: "Ksh 2,025",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Germany"
    },
    {
        name: "Rothmans",
        category: "other",
        size: "750ML",
        price: "Ksh 528",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Rothmans Mint",
        category: "other",
        size: "750ML",
        price: "Ksh 255",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Royal Arms Brdy",
        category: "other",
        size: "750ML",
        price: "Ksh 1,200",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "India"
    },
    {
        name: "Royal Challege",
        category: "other",
        size: "750ML",
        price: "Ksh 1,178",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "India"
    },
    {
        name: "Royal Circle Honey",
        category: "other",
        size: "750ML",
        price: "Ksh 2,085",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "India"
    },
    {
        name: "Royal Circle Whisky",
        category: "whisky",
        size: "750ML",
        price: "Ksh 2,100",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Premium+Whisky",
        isKenyan: false,
        country: "India"
    },
    {
        name: "Royal Dutch 12%",
        category: "other",
        size: "750ML",
        price: "Ksh 330",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Netherlands"
    },
    {
        name: "Royal Gold Premium",
        category: "other",
        size: "750ML",
        price: "Ksh 1,035",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "India"
    },
    {
        name: "Royal Kingston",
        category: "other",
        size: "750ML",
        price: "Ksh 645",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Royal Legend 3/4",
        category: "other",
        size: "750ML",
        price: "Ksh 1,650",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Royal Pride",
        category: "other",
        size: "750ML",
        price: "Ksh 1,110",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "India"
    },
    {
        name: "Royal Stag",
        category: "other",
        size: "375ML",
        price: "Ksh 908",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "India"
    },
    {
        name: "Royal Stag",
        category: "other",
        size: "750ML",
        price: "Ksh 1,695",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "India"
    },
    {
        name: "Safari  Appy Fizz",
        category: "other",
        size: "750ML",
        price: "Ksh 60",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "India"
    },
    {
        name: "Safari Cane",
        category: "other",
        size: "250ML",
        price: "Ksh 338",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Safari Cane",
        category: "other",
        size: "500ML",
        price: "Ksh 480",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Safari Cane",
        category: "other",
        size: "750ML",
        price: "Ksh 953",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Safari Energy B",
        category: "other",
        size: "750ML",
        price: "Ksh 60",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Safari H2Or",
        category: "other",
        size: "1L",
        price: "Ksh 63",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Safari H2O",
        category: "other",
        size: "500ML",
        price: "Ksh 33",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/safari_h2o.jpg",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Safari Kings",
        category: "other",
        size: "750ML",
        price: "Ksh 317",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/safari_kings.jpg",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Safari Lemonade",
        category: "other",
        size: "300ML",
        price: "Ksh 60",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/safari_lemonade.jpg",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Safari Orange",
        category: "other",
        size: "300ML",
        price: "Ksh 45",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/safari_orange.jpg",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Safari Whisky",
        category: "whisky",
        size: "250ML",
        price: "Ksh 398",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/safari_whisky.jpg",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Safari Whisky",
        category: "whisky",
        size: "750ML",
        price: "Ksh 1,170",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/safari_whisky.jpg",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Samantha Red",
        category: "other",
        size: "750ML",
        price: "Ksh 1,425",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Samantha White",
        category: "other",
        size: "750ML",
        price: "Ksh 1,425",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Sangria Redt",
        category: "other",
        size: "1L",
        price: "Ksh 1,058",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Spain"
    },
    {
        name: "Sangria Whitet",
        category: "other",
        size: "1L",
        price: "Ksh 1,058",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Spain"
    },
    {
        name: "Savanna Dry",
        category: "other",
        size: "330ML",
        price: "Ksh 368",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Savanna Lemon",
        category: "other",
        size: "750ML",
        price: "Ksh 390",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Schweppes Ginger Ale Can",
        category: "gin",
        size: "750ML",
        price: "Ksh 112",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Classic+Gin",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Schweppes Soda",
        category: "other",
        size: "750ML",
        price: "Ksh 82",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Schweppes Toni Can",
        category: "other",
        size: "750ML",
        price: "Ksh 180",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Scots Gold Blackt",
        category: "other",
        size: "1L",
        price: "Ksh 2,400",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Scots Gold Black",
        category: "other",
        size: "75ML",
        price: "Ksh 2,325",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Scots Gold Redtr",
        category: "other",
        size: "1L",
        price: "Ksh 2,175",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Scots Gold Red",
        category: "other",
        size: "750ML",
        price: "Ksh 1,800",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Season Lemonade",
        category: "other",
        size: "750ML",
        price: "Ksh 60",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Sheridans",
        category: "other",
        size: "1L",
        price: "Ksh 7,050",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Ireland"
    },
    {
        name: "Shustoff Brdy",
        category: "other",
        size: "500ML",
        price: "Ksh 1,785",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Ukraine"
    },
    {
        name: "Singleton 12Yrs",
        category: "whisky",
        size: "750ML",
        price: "Ksh 7,050",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Singlton 18Yrs",
        category: "other",
        size: "700ML",
        price: "Ksh 12,600",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Sir Edward",
        category: "other",
        size: "350ML",
        price: "Ksh 465",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Sir Edward Whskyt",
        category: "other",
        size: "1L",
        price: "Ksh 2,235",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Sir Edward Whsky",
        category: "other",
        size: "750ML",
        price: "Ksh 2,025",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Sky Vodka",
        category: "vodka",
        size: "750ML",
        price: "Ksh 1,665",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Smooth+Vodka",
        isKenyan: false,
        country: "USA"
    },
    {
        name: "Smart Vodka",
        category: "vodka",
        size: "250ML",
        price: "Ksh 180",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Smooth+Vodka",
        isKenyan: false,
        country: "USA"
    },
    {
        name: "Sminoff Vdka Flvd 3/4",
        category: "other",
        size: "750ML",
        price: "Ksh 2,250",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Smirnoff Apple",
        category: "vodka",
        size: "750ML",
        price: "Ksh 2,250",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Smirnoff Blue",
        category: "vodka",
        size: "1L",
        price: "Ksh 2,250",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/smirnoff_blue.jpg",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Smirnoff Blueberryt",
        category: "vodka",
        size: "1L",
        price: "Ksh 2,250",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Smirnoff Espressot",
        category: "vodka",
        size: "1L",
        price: "Ksh 2,250",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/smirnoff_espressot.jpg",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Smirnoff Gold",
        category: "vodka",
        size: "750ML",
        price: "Ksh 1,950",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/smirnoff_gold.jpg",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Smirnoff Limet",
        category: "vodka",
        size: "1L",
        price: "Ksh 2,250",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Smirnoff Mango&Passion",
        category: "vodka",
        size: "750ML",
        price: "Ksh 293",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/smirnoff_mango_passion.jpg",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Smirnoff Orange &Lemon",
        category: "vodka",
        size: "750ML",
        price: "Ksh 293",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/smirnoff_orange__lemon.jpg",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Smirnoff Pineapple Beer",
        category: "vodka",
        size: "750ML",
        price: "Ksh 243",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/smirnoff_pineapple_beer.jpg",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Smirnoff Pineapple Can",
        category: "vodka",
        size: "750ML",
        price: "Ksh 268",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/smirnoff_pineapple_can.jpg",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Smirnoff Vanilla",
        category: "vodka",
        size: "700ML",
        price: "Ksh 1,800",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Smirnoff Vodka Red",
        category: "vodka",
        size: "1L",
        price: "Ksh 2,430",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Smooth+Vodka",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Smirnoff Vodka",
        category: "vodka",
        size: "250ML",
        price: "Ksh 624",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Smooth+Vodka",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Smirnoff Vodka",
        category: "vodka",
        size: "350ML",
        price: "Ksh 864",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Smooth+Vodka",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Smirnoff Vodka",
        category: "vodka",
        size: "750ML",
        price: "Ksh 1,860",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Smooth+Vodka",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Sm -Sweet Menthol",
        category: "other",
        size: "750ML",
        price: "Ksh 528",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Snap Dry Cider",
        category: "other",
        size: "330ML",
        price: "Ksh 367",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Snapp Beer",
        category: "beer",
        size: "750ML",
        price: "Ksh 241",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Chilled+Beer",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Snapp Can",
        category: "other",
        size: "330ML",
        price: "Ksh 267",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Soda Tonic Water",
        category: "other",
        size: "750ML",
        price: "Ksh 99",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Southern  Black",
        category: "other",
        size: "70CL",
        price: "Ksh 2,700",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Southern Comfort",
        category: "other",
        size: "1L",
        price: "Ksh 3,525",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "USA"
    },
    {
        name: "Southern Comfort",
        category: "other",
        size: "350ML",
        price: "Ksh 1,275",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "USA"
    },
    {
        name: "Southern Comfort",
        category: "other",
        size: "750ML",
        price: "Ksh 2,700",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "USA"
    },
    {
        name: "Southern Ocean",
        category: "other",
        size: "750ML",
        price: "Ksh 4,275",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "India"
    },
    {
        name: "Spier Carbanet",
        category: "other",
        size: "750ML",
        price: "Ksh 2,400",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Spike Vodka",
        category: "vodka",
        size: "250ML",
        price: "Ksh 195",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Smooth+Vodka",
        isKenyan: false,
        country: "USA"
    },
    {
        name: "Sportsman",
        category: "other",
        size: "750ML",
        price: "Ksh 528",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Squadron D Rum",
        category: "rum",
        size: "750ML",
        price: "Ksh 1,005",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "St.Anns",
        category: "other",
        size: "750ML",
        price: "Ksh 1,095",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Australia"
    },
    {
        name: "Star Brandy",
        category: "brandy",
        size: "250ML",
        price: "Ksh 180",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "India"
    },
    {
        name: "Blue Moon",
        category: "other",
        size: "750M",
        price: "Ksh 705",
        description: "A medium bodied pure blueberry wine with intense blueberry character and a wonderful blueberry finish. Extremely tasty with cheesecake.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "USA"
    },
    {
        name: "Gilbeys Pink",
        category: "gin",
        size: "750M",
        price: "Ksh 1875",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Glendale Whsky",
        category: "other",
        size: "750M",
        price: "Ksh 3975",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "John Bannermans",
        category: "other",
        size: "750M",
        price: "Ksh 1875",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "White Cap Crisp Beer",
        category: "beer",
        size: "750ML",
        price: "Ksh 320",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Chilled+Beer",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "White Cap Crisp Can",
        category: "beer",
        size: "330ML",
        price: "Ksh 345",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Star Chaser Red",
        category: "other",
        size: "750ML",
        price: "Ksh 750",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Star Chaser Sweet Rose",
        category: "other",
        size: "750ML",
        price: "Ksh 1179",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Star Walker",
        category: "whisky",
        size: "750ML",
        price: "Ksh 1650",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "St.Celine",
        category: "other",
        size: "750ML",
        price: "Ksh 1095",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Stolichnaya Vdka",
        category: "other",
        size: "750ML",
        price: "Ksh 2445",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Latvia"
    },
    {
        name: "Strawberry Lips",
        category: "other",
        size: "750ML",
        price: "Ksh 2700",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "St.Remy  Vsopt",
        category: "other",
        size: "1L",
        price: "Ksh 3075",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "France"
    },
    {
        name: "St.Remy Vsop",
        category: "other",
        size: "700ML",
        price: "Ksh 2940",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "France"
    },
    {
        name: "St. Remy Xo",
        category: "other",
        size: "750ML",
        price: "Ksh 3945",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Strettons Original Gin",
        category: "gin",
        size: "750ML",
        price: "Ksh 1620",
        description: "Mit der ING haben Sie Ihre Finanzen immer im Blick - Girokonto, Kredit, Depot, Tagesgeldkonto oder Baufinanzierung: Was darf es sein für Sie?",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Classic+Gin",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Strettons Tripleberry",
        category: "other",
        size: "750ML",
        price: "Ksh 1950",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Stretttons Wildberry",
        category: "other",
        size: "750ML",
        price: "Ksh 1950",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Summit",
        category: "other",
        size: "750ML",
        price: "Ksh 240",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Sun Chaser Wine",
        category: "wine",
        size: "750ML",
        price: "Ksh 750",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Fine+Wine",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Supreme Vodka",
        category: "vodka",
        size: "250ML",
        price: "Ksh 250.5",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Smooth+Vodka",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Supreme Vodka",
        category: "vodka",
        size: "750ML",
        price: "Ksh 885",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Smooth+Vodka",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Sweet Berry",
        category: "other",
        size: "250ML",
        price: "Ksh 188",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Taifa",
        category: "other",
        size: "250ML",
        price: "Ksh 338",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Taifa",
        category: "other",
        size: "750ML",
        price: "Ksh 1005",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Talisker Storm",
        category: "other",
        size: "700ML",
        price: "Ksh 7875",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Tall Horse Cab Sauv",
        category: "other",
        size: "750ML",
        price: "Ksh 1500",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Tall Horse Chardonnay",
        category: "wine",
        size: "750ML",
        price: "Ksh 1500",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Tall Horse Chenin Blanc",
        category: "other",
        size: "750ML",
        price: "Ksh 1500",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Tall Horse Merlot",
        category: "wine",
        size: "750ML",
        price: "Ksh 1500",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Tall Horse Pinotage",
        category: "other",
        size: "750ML",
        price: "Ksh 1500",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Tall Horse Sav Blanc",
        category: "other",
        size: "750ML",
        price: "Ksh 1500",
        description: "星巴克的这几个杯具的表述，源自意大利语：Tall—直译是高杯，也就是我们常见的小杯；Grande—宏大的杯，表示中杯；Venti—通风孔大杯，意思是大杯。 这 …",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Tall Horse Sweetred",
        category: "other",
        size: "750ML",
        price: "Ksh 1500",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Tanqueray 10.T",
        category: "gin",
        size: "1L",
        price: "Ksh 7725",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Tanqueray 10",
        category: "gin",
        size: "750ML",
        price: "Ksh 6120",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Tanqueray Dry Gint",
        category: "gin",
        size: "1L",
        price: "Ksh 4575",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Classic+Gin",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Tanqueray Dry Gin",
        category: "gin",
        size: "750ML",
        price: "Ksh 3480",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Classic+Gin",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Tanqueray Malacca Ltr",
        category: "gin",
        size: "750ML",
        price: "Ksh 4500",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Tanqueray Rangpurt",
        category: "gin",
        size: "1L",
        price: "Ksh 4725",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Tanqueray Rangpur",
        category: "gin",
        size: "70CL",
        price: "Ksh 3675",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Tanqueray Royalet",
        category: "gin",
        size: "1L",
        price: "Ksh 4950",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Tanqueray Royale",
        category: "gin",
        size: "70CL",
        price: "Ksh 3675",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Tanqueray Sevillat",
        category: "gin",
        size: "1L",
        price: "Ksh 4725",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Tanqueray Sevilla",
        category: "gin",
        size: "750ML",
        price: "Ksh 3675",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Teacherst",
        category: "other",
        size: "1L",
        price: "Ksh 2475",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Teachers",
        category: "other",
        size: "350ML",
        price: "Ksh 540",
        description: "Download free Secondary School Editable 2026 End Term 1 Exams. Form 3, and 4 question papers with marking schemes provided. All …",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Teachers",
        category: "other",
        size: "750ML",
        price: "Ksh 2325",
        description: "Download free Secondary School Editable 2026 End Term 1 Exams. Form 3, and 4 question papers with marking schemes provided. All …",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Tequila Camino Clear",
        category: "other",
        size: "750ML",
        price: "Ksh 3420",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Mexico"
    },
    {
        name: "Tequila Camino Gold",
        category: "other",
        size: "750ML",
        price: "Ksh 3420",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Mexico"
    },
    {
        name: "Tequila Rose",
        category: "other",
        size: "750ML",
        price: "Ksh 3150",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "USA"
    },
    {
        name: "The Guvnor",
        category: "other",
        size: "1.5L",
        price: "Ksh 4788",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Spain"
    },
    {
        name: "The Guvnor",
        category: "other",
        size: "750ML",
        price: "Ksh 2388",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Spain"
    },
    {
        name: "The Wilshire Blended Whisky",
        category: "whisky",
        size: "750ML",
        price: "Ksh 1725",
        description: "Pinterest is a place of endless possibilities. You can: - Discover everyday inspiration - Shop styles you love - Try and learn something new …",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Premium+Whisky",
        isKenyan: false,
        country: "India"
    },
    {
        name: "Three Barrelt",
        category: "other",
        size: "1L",
        price: "Ksh 3600",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Three Barrel",
        category: "other",
        size: "750ML",
        price: "Ksh 2250",
        description: "Jan 23, 2024 · 目前来看从画质、产品形态以及使用体验上来说，我认为这一代Pocket 3是非常非常物有所值的产品，拿到手后可以说是疯拍。 简评：超高集成 …",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Tia Mariat",
        category: "other",
        size: "1L",
        price: "Ksh 4050",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Jamaica"
    },
    {
        name: "Time Virginia Blend Bulk",
        category: "gin",
        size: "750ML",
        price: "Ksh 263",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Classic+Gin",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Top Secret",
        category: "other",
        size: "250ML",
        price: "Ksh 390",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Top Secret",
        category: "other",
        size: "750ML",
        price: "Ksh 1095",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Torrero",
        category: "other",
        size: "750ML",
        price: "Ksh 1230",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Torrero Liquer",
        category: "other",
        size: "250ML",
        price: "Ksh 428",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Tr",
        category: "other",
        size: "750ML",
        price: "Ksh 3225",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Trace Vodka",
        category: "vodka",
        size: "250ML",
        price: "Ksh 255",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Smooth+Vodka",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Triple Ace",
        category: "other",
        size: "250ML",
        price: "Ksh 299",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Triple Ace",
        category: "other",
        size: "750ML",
        price: "Ksh 840",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Tripple Sec Curacao Liqueur",
        category: "liqueur",
        size: "700ML",
        price: "Ksh 3225",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Fine+Liqueur",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Tullamoreitre",
        category: "other",
        size: "1L",
        price: "Ksh 4800",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Ireland"
    },
    {
        name: "Tullamore",
        category: "other",
        size: "700ML",
        price: "Ksh 3750",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Ireland"
    },
    {
        name: "Tusker Beer",
        category: "beer",
        size: "750ML",
        price: "Ksh 255",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Chilled+Beer",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Tusker Can",
        category: "beer",
        size: "500ML",
        price: "Ksh 305",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Tusker Cider Beer",
        category: "beer",
        size: "750ML",
        price: "Ksh 336",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Chilled+Beer",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Tusker Cider Can",
        category: "beer",
        size: "500ML",
        price: "Ksh 357",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Tusker Lite Beer",
        category: "beer",
        size: "750ML",
        price: "Ksh 282",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Chilled+Beer",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Tusker Lite Can",
        category: "beer",
        size: "500ML",
        price: "Ksh 368",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Tusker Malt Can",
        category: "beer",
        size: "750ML",
        price: "Ksh 368",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Tusker Ndimu Beer",
        category: "beer",
        size: "750ML",
        price: "Ksh 230",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Chilled+Beer",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Ugin Mango",
        category: "gin",
        size: "750ML",
        price: "Ksh 1230",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Classic+Gin",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Uprise Whsky Flvd",
        category: "other",
        size: "750ML",
        price: "Ksh 368",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Urban Whiskey",
        category: "whisky",
        size: "750ML",
        price: "Ksh 1403",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Premium+Whisky",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "V& A 1/4",
        category: "other",
        size: "750ML",
        price: "Ksh 443",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "V& A",
        category: "other",
        size: "750ML",
        price: "Ksh 1170",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Vat",
        category: "other",
        size: "250ML",
        price: "Ksh 750",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Vat 69T",
        category: "other",
        size: "1L",
        price: "Ksh 2775",
        description: "Jul 24, 2024 · VAT, CT, 和 WHT 在税务领域分别代表了不同的税种。首先，Value Added Tax (VA) 或 VAT 是指增值税，这是一种在商品或服务交易过程中，由 …",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Vat 69  3/4",
        category: "other",
        size: "750ML",
        price: "Ksh 2100",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Vat 69",
        category: "other",
        size: "375ML",
        price: "Ksh 1140",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Velo  Cans",
        category: "other",
        size: "750ML",
        price: "Ksh 600",
        description: "现在已经没有任何区别，VELO和美国线下开的华美已经合并了，使用同一个数据库。 2018年11月，我在美国旧金山唐人街的华美银行网点开了户。VELO上线以 …",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Velo Sarchets",
        category: "other",
        size: "750ML",
        price: "Ksh 300",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Versus Red Wine",
        category: "wine",
        size: "750ML",
        price: "Ksh 1050",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Fine+Wine",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Versus White",
        category: "other",
        size: "750ML",
        price: "Ksh 1050",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Viceroy 10Yrs",
        category: "brandy",
        size: "750ML",
        price: "Ksh 4830",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Viceroy",
        category: "brandy",
        size: "250ML",
        price: "Ksh 653",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Viceroy 350",
        category: "brandy",
        size: "750ML",
        price: "Ksh 957",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Viceroy",
        category: "brandy",
        size: "750ML",
        price: "Ksh 1860",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Viena Ice",
        category: "other",
        size: "500ML",
        price: "Ksh 132",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Viva Vodka",
        category: "vodka",
        size: "250ML",
        price: "Ksh 293",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Smooth+Vodka",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Vodka Lemonade Can",
        category: "vodka",
        size: "750ML",
        price: "Ksh 255",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Smooth+Vodka",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Waragi",
        category: "other",
        size: "750ML",
        price: "Ksh 720",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Uganda"
    },
    {
        name: "Wave Dancer Wine",
        category: "wine",
        size: "750ML",
        price: "Ksh 750",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Fine+Wine",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "White Cap Beer",
        category: "beer",
        size: "750ML",
        price: "Ksh 294",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Chilled+Beer",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "White Cap Can",
        category: "beer",
        size: "500ML",
        price: "Ksh 329",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "White House",
        category: "other",
        size: "375ML",
        price: "Ksh 480",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "India"
    },
    {
        name: "White House",
        category: "other",
        size: "750ML",
        price: "Ksh 1590",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "India"
    },
    {
        name: "White Lace Gin",
        category: "gin",
        size: "500ML",
        price: "Ksh 1350",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Classic+Gin",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "White Mischief",
        category: "other",
        size: "750ML",
        price: "Ksh 1178",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "India"
    },
    {
        name: "White Owl",
        category: "other",
        size: "750ML",
        price: "Ksh 1110",
        description: "Dec 18, 2025 · “Grand Theft Auto V Enhanced & Great White Shark Card”是《侠盗猎车手5 增强版》与《大白鲨充值卡》的组合版本。以下为详细介 …",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Canada"
    },
    {
        name: "White Pearl",
        category: "other",
        size: "250ML",
        price: "Ksh 339",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "White Pearl",
        category: "other",
        size: "750ML",
        price: "Ksh 1020",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "White Pearl Pink",
        category: "other",
        size: "250ML",
        price: "Ksh 339",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "White Pearl Pink",
        category: "other",
        size: "750ML",
        price: "Ksh 1020",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "White Pearl Xtra",
        category: "other",
        size: "250ML",
        price: "Ksh 339",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "White Pearl Xtra",
        category: "other",
        size: "750ML",
        price: "Ksh 1020",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Whytehall Firet",
        category: "other",
        size: "1L",
        price: "Ksh 2205",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "India"
    },
    {
        name: "Whythall Honey",
        category: "other",
        size: "750ML",
        price: "Ksh 2205",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "India"
    },
    {
        name: "Wild Africa Cream",
        category: "liqueur",
        size: "750ML",
        price: "Ksh 2325",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Wild Turkeyt",
        category: "other",
        size: "1L",
        price: "Ksh 3975",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "USA"
    },
    {
        name: "Wild Turkey 750",
        category: "other",
        size: "750ML",
        price: "Ksh 4050",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "USA"
    },
    {
        name: "William Can",
        category: "other",
        size: "330ML",
        price: "Ksh 338",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "William Can Cola",
        category: "other",
        size: "750ML",
        price: "Ksh 338",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "William Lawsont",
        category: "other",
        size: "1.5L",
        price: "Ksh 4620",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Williamsont",
        category: "other",
        size: "1L",
        price: "Ksh 3113",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "William Son",
        category: "other",
        size: "750ML",
        price: "Ksh 2685",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "William Spcd",
        category: "other",
        size: "750ML",
        price: "Ksh 2580",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "William Wson",
        category: "other",
        size: "350ML",
        price: "Ksh 1283",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Wilson Whisky",
        category: "whisky",
        size: "750ML",
        price: "Ksh 2550",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Premium+Whisky",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Windhoek Draught",
        category: "other",
        size: "330ML",
        price: "Ksh 285",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Namibia"
    },
    {
        name: "Windhoek Lager",
        category: "other",
        size: "330ML",
        price: "Ksh 285",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Namibia"
    },
    {
        name: "Xo Brandy",
        category: "brandy",
        size: "250ML",
        price: "Ksh 353",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Xo Brandy",
        category: "brandy",
        size: "750ML",
        price: "Ksh 1020",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Yatta Mangot",
        category: "other",
        size: "1L",
        price: "Ksh 293",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Yatta Redt",
        category: "other",
        size: "1L",
        price: "Ksh 293",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Yatta  Tropical",
        category: "other",
        size: "750ML",
        price: "Ksh 293",
        description: "When you achieved something big, you would say this. I did it!!",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Japan"
    },
    {
        name: "Yatta  White",
        category: "other",
        size: "1 L",
        price: "Ksh 293",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: true,
        country: "Kenya"
    },
    {
        name: "Zanzi Cream Lq",
        category: "liqueur",
        size: "750ML",
        price: "Ksh 750",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Zappa Black",
        category: "other",
        size: "750ML",
        price: "Ksh 2100",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Italy"
    },
    {
        name: "Zappa Blue",
        category: "other",
        size: "750ML",
        price: "Ksh 2100",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Italy"
    },
    {
        name: "Zappa Clear",
        category: "other",
        size: "750ML",
        price: "Ksh 2100",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Italy"
    },
    {
        name: "Zappa Green",
        category: "other",
        size: "750ML",
        price: "Ksh 2100",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Italy"
    },
    {
        name: "Zappa Red",
        category: "other",
        size: "750ML",
        price: "Ksh 2100",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/1a1a1b/d4af37?text=Bottle",
        isKenyan: false,
        country: "Italy"
    }
];
