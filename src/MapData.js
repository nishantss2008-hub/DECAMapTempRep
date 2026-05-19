export const FL_OUTLINE = [
  [-87.45,30.99],[-86.95,30.99],[-86.50,30.99],[-86.00,30.99],
  [-85.50,30.99],[-85.00,31.00],[-84.87,30.71],[-84.10,30.65],
  [-83.50,30.65],[-82.95,30.60],[-82.50,30.58],[-82.22,30.57],
  [-82.17,30.36],[-82.05,30.36],[-82.00,30.56],[-82.04,30.75],
  [-81.95,30.83],[-81.72,30.75],[-81.44,30.71],
  [-81.38,30.27],[-81.26,29.79],[-80.97,29.15],
  [-80.52,28.46],[-80.59,28.41],[-80.57,28.09],[-80.38,27.74],
  [-80.09,27.02],[-80.03,26.80],[-80.04,26.57],
  [-80.15,25.74],[-80.24,25.72],[-80.34,25.47],[-80.30,25.38],
  [-80.50,25.20],[-80.57,25.24],[-80.76,25.16],[-81.08,25.12],
  [-81.17,25.22],[-81.13,25.38],[-81.35,25.82],[-81.53,25.90],
  [-81.68,25.84],[-81.80,26.09],[-81.83,26.29],[-82.04,26.52],
  [-82.09,26.74],[-82.18,26.93],[-82.26,27.07],[-82.42,27.10],
  [-82.55,27.27],[-82.64,27.39],[-82.69,27.49],[-82.71,27.59],
  [-82.69,27.71],[-82.59,27.81],[-82.55,27.90],[-82.58,27.97],
  [-82.65,28.01],[-82.73,28.13],[-82.77,28.30],[-82.74,28.50],
  [-82.79,28.69],[-82.71,28.91],[-82.79,29.05],[-83.14,29.18],
  [-83.40,29.49],[-83.42,29.66],[-83.59,29.91],[-83.82,29.97],
  [-83.96,30.10],[-84.31,30.07],[-84.36,30.06],[-84.55,30.05],
  [-84.74,30.04],[-85.02,30.18],[-85.41,29.78],[-85.55,29.74],
  [-85.74,30.13],[-85.90,30.27],[-86.18,30.34],[-86.46,30.40],
  [-86.84,30.40],[-87.18,30.39],[-87.45,30.37],[-87.42,30.71],[-87.45,30.99]
];

export const DISTRICTS = {
  1: { color:'#0f487c', region:'Panhandle',
       officer:{ name:'Miller Morris', school:'[Officer School]', email:'vpdist1@fldeca.org', link:'#district-1' } },
  2: { color:'#61a1d7', region:'Northeast Florida',
       officer:{ name:'Emily Fitzsimon', school:'[Officer School]', email:'vpdist2@fldeca.org', link:'#district-2' } },
  3: { color:'#2a71b9', region:'North Central Florida',
       officer:{ name:'Holden', school:'[Officer School]', email:'vpdist3@fldeca.org', link:'#district-3' } },
  4: { color:'#4c4c4e', region:'Central Florida / Orlando',
       officer:{ name:'DaVinci Chau', school:'[Officer School]', email:'vpdist4@fldeca.org', link:'#district-4' } },
  5: { color:'#0f487c', region:'Polk County',
       officer:{ name:'Claribel Bautista', school:'[Officer School]', email:'vpdist5@fldeca.org', link:'#district-5' } },
  6: { color:'#2a71b9', region:'West Coast / Tampa Bay',
       officer:{ name:'Audrina Parker', school:'[Officer School]', email:'vpdist6@fldeca.org', link:'#district-6' } },
  7: { color:'#61a1d7', region:'Southwest Florida',
       officer:{ name:'Mahi Patel', school:'[Officer School]', email:'vpdist7@fldeca.org', link:'#district-7' } },
  8: { color:'#000000', region:'Treasure Coast / Palm Beach',
       officer:{ name:'Trey', school:'[Officer School]', email:'vpdist8@fldeca.org', link:'#district-8' } },
  9: { color:'#4c4c4e', region:'Broward County',
       officer:{ name:'Aranza Hernandez', school:'[Officer School]', email:'vpdist9@fldeca.org', link:'#district-9' } },
  10:{ color:'#0f487c', region:'Miami-Dade',
       officer:{ name:'Carolina Rodriguez', school:'[Officer School]', email:'vpdist10@fldeca.org', link:'#district-10' } }
};

export const STATE_OFFICERS = {
  president: { name: 'Lucy Pellegrino', title: 'Executive President', email: 'president@fldeca.org' },
  executiveVP: { name: 'Nishant Shah', title: 'Executive Vice President', email: 'evp@fldeca.org' }
};

export const CITIES = {
  // District 1 — Panhandle
  "Panama City":          [30.1588, -85.6602],
  "Lynn Haven":           [30.2516, -85.6477],
  "Jacksonville":         [30.3322, -81.6557],  // also D2
  "Pensacola":            [30.4213, -87.2169],
  "Pace":                 [30.6019, -87.1622],
  "Tallahassee":          [30.4383, -84.2807],
  "Santa Rosa Beach":     [30.3690, -86.2261],
  "Inlet Beach":          [30.2780, -86.0010],
  "Monticello":           [30.5447, -83.8716],
  "Crestview":            [30.7619, -86.5706],

  // District 2 — NE Florida
  "St. Augustine":        [29.9012, -81.3124],
  "St. Johns":            [30.0727, -81.5345],
  "Ponte Vedra Beach":    [30.2397, -81.3856],
  "Jacksonville Beach":   [30.2944, -81.3931],
  "Orange Park":          [30.1659, -81.7062],
  "Fleming Island":       [30.0916, -81.7187],
  "Palm Coast":            [29.5847, -81.2076],
  "Bunnell":              [29.4683, -81.2581],
  "Baldwin":              [30.3022, -81.9748],
  "Middleburg":           [30.0743, -81.8631],

  // District 3 — North Central
  "Gainesville":          [29.6516, -82.3248],
  "Ocala":                [29.1872, -82.1401],
  "Lecanto":              [28.8525, -82.4848],
  "New Smyrna Beach":     [29.0258, -80.9270],
  "Daytona Beach":        [29.2108, -81.0228],
  "Port Orange":          [29.1383, -81.0056],
  "Deltona":              [28.9005, -81.2637],
  "Cedar Key":            [29.1366, -83.0319],
  "Williston":            [29.3877, -82.4471],
  "Crystal River":        [28.9025, -82.5926],

  // District 4 — Central FL / Orlando
  "Orlando":              [28.5383, -81.3792],
  "Winter Park":          [28.6000, -81.3392],
  "Winter Springs":       [28.6989, -81.2081],
  "Lake Mary":            [28.7589, -81.3187],
  "Sanford":              [28.8003, -81.2729],
  "Oviedo":               [28.6700, -81.2081],
  "Apopka":               [28.6934, -81.5322],
  "Windermere":           [28.4955, -81.5348],
  "Clermont":             [28.5494, -81.7729],
  "Minneola":             [28.5722, -81.7456],
  "Ocoee":                [28.5694, -81.5439],
  "Kissimmee":            [28.2920, -81.4076],
  "St. Cloud":            [28.2489, -81.2811],
  "Celebration":          [28.3098, -81.5350],
  "Poinciana":            [28.1411, -81.4773],
  "Cocoa":                [28.3858, -80.7420],
  "Cocoa Beach":          [28.3200, -80.6076],
  "Merritt Island":       [28.5547, -80.6700],
  "Rockledge":            [28.3502, -80.7256],
  "Melbourne":            [28.0836, -80.6081],
  "Satellite Beach":      [28.1761, -80.5901],
  "Viera":                [28.2353, -80.7128],

  // District 5 — Polk County
  "Lakeland":             [28.0395, -81.9498],
  "Bartow":               [27.8964, -81.8431],
  "Winter Haven":          [28.0222, -81.7329],
  "Haines City":          [28.1144, -81.6203],
  "Davenport":            [28.1611, -81.6019],

  // District 6 — West Coast
  "Apollo Beach":         [27.7709, -82.4043],
  "Tampa":                [27.9506, -82.4572],
  "Brandon":              [27.9378, -82.2859],
  "Riverview":            [27.8661, -82.3268],
  "Plant City":           [28.0186, -82.1145],
  "Wesley Chapel":        [28.2393, -82.3270],
  "Land O' Lakes":        [28.2192, -82.4595],
  "Lutz":                 [28.1500, -82.4623],
  "Odessa":               [28.1936, -82.5912],
  "Spring Hill":          [28.4769, -82.5285],
  "Brooksville":          [28.5553, -82.3879],
  "Seffner":              [27.9889, -82.2762],
  "Ruskin":               [27.7206, -82.4337],
  "Wimauma":              [27.7144, -82.3043],
  "St. Petersburg":       [27.7676, -82.6403],
  "Seminole":             [27.8392, -82.7901],
  "Palm Harbor":          [28.0781, -82.7637],
  "Bradenton":            [27.4989, -82.5748],
  "Sarasota":             [27.3364, -82.5307],
  "Nokomis":              [27.1186, -82.4440],
  "Venice":               [27.0998, -82.4543],
  "North Port":           [27.0442, -82.2359],
  "Parrish":              [27.5878, -82.4262],
  "Lakewood Ranch":       [27.4194, -82.3893],

  // District 7 — Southwest FL
  "Naples":               [26.1420, -81.7948],
  "Fort Myers":           [26.6406, -81.8723],
  "Cape Coral":           [26.5629, -81.9495],
  "North Fort Myers":     [26.6701, -81.8772],
  "Estero":               [26.4381, -81.8068],
  "Bonita Springs":       [26.3398, -81.7787],
  "Punta Gorda":          [26.9298, -82.0454],
  "Port Charlotte":       [26.9762, -82.0907],
  "Lehigh Acres":         [26.6240, -81.6248],
  "Immokalee":            [26.4187, -81.4173],
  "Clewiston":            [26.7536, -80.9342],
  "Golden Gate":          [26.1900, -81.6951],

  // District 8 — Treasure Coast / Palm Beach
  "West Palm Beach":      [26.7153, -80.0534],
  "Palm Beach Gardens":   [26.8235, -80.1387],
  "Wellington":           [26.6618, -80.2414],
  "Boca Raton":           [26.3683, -80.1289],
  "Boynton Beach":        [26.5252, -80.0664],
  "Delray Beach":         [26.4615, -80.0728],
  "Royal Palm Beach":     [26.7087, -80.2306],
  "Jupiter":              [26.9342, -80.0942],
  "Loxahatchee":          [26.7434, -80.1936],
  "Lake Worth":           [26.6168, -80.0684],
  "Greenacres":           [26.6276, -80.1256],
  "Stuart":               [27.1973, -80.2528],
  "Port St. Lucie":       [27.2730, -80.3582],
  "Fort Pierce":          [27.4467, -80.3256],
  "Vero Beach":           [27.6386, -80.3973],
  "Okeechobee":           [27.2439, -80.8298],
  "Melbourne FL":         [28.0836, -80.6081],

  // District 9 — Broward
  "Fort Lauderdale":      [26.1224, -80.1373],
  "Pembroke Pines":       [26.0078, -80.2962],
  "Hollywood":            [26.0112, -80.1495],
  "Davie":                [26.0764, -80.2522],
  "Plantation":           [26.1275, -80.2331],
  "Coral Springs":        [26.2710, -80.2706],
  "Pompano Beach":        [26.2378, -80.1248],
  "Deerfield Beach":      [26.3184, -80.0998],
  "Cooper City":          [26.0586, -80.2717],
  "Miramar":              [25.9876, -80.2323],
  "Weston":               [26.1003, -80.3997],
  "Parkland":             [26.3107, -80.2370],
  "Sunrise":              [26.1669, -80.2564],
  "Tamarac":              [26.2129, -80.2497],
  "Margate":              [26.2445, -80.2068],
  "Oakland Park":         [26.1723, -80.1320],

  // District 10 — Miami-Dade
  "Miami":                [25.7617, -80.1918],
  "Miami Beach":          [25.7907, -80.1300],
  "Hialeah":              [25.8576, -80.2781],
  "Hialeah Gardens":      [25.8581, -80.3247],
  "Doral":                [25.8195, -80.3553],
  "Aventura":             [25.9565, -80.1392],
  "North Miami":          [25.8901, -80.1867],
  "North Miami Beach":    [25.9331, -80.1625],
  "Homestead":            [25.4687, -80.4776],
  "Cutler Bay":           [25.5808, -80.3468],
  "Kendall":              [25.6792, -80.3173],
  "Pinecrest":            [25.6649, -80.3082],
  "Coral Gables":         [25.7215, -80.2684],
  "Miami Lakes":          [25.9087, -80.3087],
  "Palmetto Bay":         [25.6220, -80.3248],
  "Miami Springs":        [25.8221, -80.2895]
};

export const SCHOOLS_RAW = [
  ["A. Crawford Mosley High School", 1, "Lynn Haven"],
  ["A. Philip Randolph Career Academies", 2, "Jacksonville"],
  ["Academy at the Lakes", 6, "Land O' Lakes"],
  ["Alexander W. Dreyfoos School Of The Arts", 8, "West Palm Beach"],
  ["Allen D Nease High School", 2, "Ponte Vedra Beach"],
  ["Alonso High School", 6, "Tampa"],
  ["Alonzo & Tracy Mourning Senior High School", 10, "North Miami"],
  ["Alonzo & Tracy Mourning Senor High School", 10, "North Miami"],
  ["American Heritage School - Palm Beach Campus", 8, "Delray Beach"],
  ["American Heritage School Broward", 9, "Plantation"],
  ["American Senior High School", 10, "Hialeah"],
  ["Andrew Jackson High School", 2, "Jacksonville"],
  ["Apopka High School", 4, "Apopka"],
  ["Archbishop Mccarthy High School", 9, "Southwest Ranches"],
  ["Armwood High School", 6, "Seffner"],
  ["Atlantic Coast High School", 2, "Jacksonville"],
  ["Aubrey Rogers High School", 7, "Naples"],
  ["Avant Schools of Excellence", 1, "Tallahassee"],
  ["Baldwin Middle Senior High School", 2, "Baldwin"],
  ["Barbara Goleman Senior High School", 10, "Hialeah"],
  ["Barron Collier High School", 7, "Naples"],
  ["Bartow Senior High School", 5, "Bartow"],
  ["Bartram Trail High School", 2, "St. Johns"],
  ["Beachside High School", 2, "St. Augustine"],
  ["Belen Jesuit Preparatory High School", 10, "Miami"],
  ["Bishop Moore Catholic High School", 4, "Orlando"],
  ["Bishop Verot Catholic High School", 7, "Fort Myers"],
  ["Blanche Ely High School", 9, "Pompano Beach"],
  ["Boca Raton Community High School", 8, "Boca Raton"],
  ["Booker T Washington High School", 1, "Pensacola"],
  ["Brooks Debartolo Collegiate High School", 6, "Tampa"],
  ["Brookside Middle School", 6, "Sarasota"],
  ["Buchholz High School", 3, "Gainesville"],
  ["Burns Science And Technology School", 3, "Port Orange"],
  ["C Leon King High School", 6, "Tampa"],
  ["Calvary Christian Academy - Ft. Lauderdale", 9, "Fort Lauderdale"],
  ["Calvary Christian Academy", 9, "Fort Lauderdale"],
  ["Canterbury High School", 7, "Fort Myers"],
  ["Cape Coral High School", 7, "Cape Coral"],
  ["Cardinal Gibbons High School", 9, "Fort Lauderdale"],
  ["Cardinal Mooney Catholic High School Sarasota", 6, "Sarasota"],
  ["Carrollton School Of The Sacred Heart", 10, "Miami"],
  ["Carrollwood Day School", 6, "Tampa"],
  ["Cedar Key School", 3, "Cedar Key"],
  ["Celebration High School", 4, "Celebration"],
  ["Centner Academy Middle And High School", 10, "Miami"],
  ["Charlotte High School", 7, "Punta Gorda"],
  ["Christopher Columbus High School", 10, "Miami"],
  ["Clewiston High School", 7, "Clewiston"],
  ["Cocoa Beach High School", 4, "Cocoa Beach"],
  ["Community School of Naples", 7, "Naples"],
  ["Cooper City High School", 9, "Cooper City"],
  ["Coral Glades High School", 9, "Coral Springs"],
  ["Coral Reef Senior High School", 10, "Pinecrest"],
  ["Coral Springs Charter School", 9, "Coral Springs"],
  ["Cornerstone Charter High School", 4, "Belle Isle"],
  ["Creekside High School", 2, "St. Johns"],
  ["Cutler Bay Senior High School", 10, "Cutler Bay"],
  ["Cypress Bay High School", 9, "Weston"],
  ["Cypress Creek High School", 4, "Orlando"],
  ["Cypress Lake High School", 7, "Fort Myers"],
  ["Cypress Palm Middle School", 7, "Naples"],
  ["David Posnack Jewish Day School", 9, "Davie"],
  ["Davie Conservatory Preparatory High School", 9, "Davie"],
  ["Deerfield Beach High School", 9, "Deerfield Beach"],
  ["Divine Savior Academy", 10, "Doral"],
  ["Doctors Charter School", 10, "Miami Shores"],
  ["Don Soffer Aventura High School", 10, "Aventura"],
  ["Douglas Anderson School of the Arts", 2, "Jacksonville"],
  ["Downtown Doral Upper School", 10, "Doral"],
  ["Dr. Joaquin Garcia High School", 8, "Lake Worth"],
  ["Dr. Kiran C Patel High School", 6, "Tampa"],
  ["Dr. Marvin Dunn Academy", 2, "Jacksonville"],
  ["Dr. Michael Krop Sr. High", 10, "Miami"],
  ["Dr. Phillips High School", 4, "Orlando"],
  ["Dunbar High School", 7, "Fort Myers"],
  ["Dwight Global", 4, "Orlando"],
  ["East Ridge High School", 4, "Clermont"],
  ["Edgewater High School", 4, "Orlando"],
  ["Edgewood Jr./Sr. High School", 4, "Merritt Island"],
  ["Edward H White High School", 2, "Jacksonville"],
  ["Englewood High School", 2, "Jacksonville"],
  ["Escambia High School", 1, "Pensacola"],
  ["Estero High School", 7, "Estero"],
  ["Estero Hs", 7, "Estero"],
  ["Everglades High School", 9, "Miramar"],
  ["F W Springstead High School", 6, "Spring Hill"],
  ["F.W. Springstead High School", 6, "Spring Hill"],
  ["Felix Varela Senior High School", 10, "Miami"],
  ["First Baptist Academy", 7, "Naples"],
  ["First Coast High School", 2, "Jacksonville"],
  ["Flagler Palm Coast High School", 2, "Palm Coast"],
  ["Flanagan High School", 9, "Pembroke Pines"],
  ["Fleming Island High School", 2, "Fleming Island"],
  ["Fletcher High School", 2, "Jacksonville Beach"],
  ["Florida Atlantic University High School", 8, "Boca Raton"],
  ["Florida Virtual School", 1, "Tallahassee"],
  ["Fort Lauderdale High School", 9, "Fort Lauderdale"],
  ["Fort Myers High School", 7, "Fort Myers"],
  ["Fort Pierce Westwood Academy", 8, "Fort Pierce"],
  ["Four Corners Upper High School", 5, "Davenport"],
  ["Franklin Academy Pembroke Pines High School", 9, "Pembroke Pines"],
  ["Franklin Academy", 9, "Pembroke Pines"],
  ["Freedom High School - Orlando", 4, "Orlando"],
  ["Freedom High School - Tampa", 6, "Tampa"],
  ["G - Star School Of The Arts", 8, "Palm Springs"],
  ["G Holmes Braddock Senior High", 10, "Miami"],
  ["Gainesville High School", 3, "Gainesville"],
  ["Gateway Charter High School", 7, "Fort Myers"],
  ["Gateway High School - Fort Myers", 7, "Fort Myers"],
  ["Gateway High School", 4, "Kissimmee"],
  ["George M Steinbrenner High School", 6, "Lutz"],
  ["Global Leadership Academy", 2, "Jacksonville"],
  ["Golden Gate High School", 7, "Naples"],
  ["Grandview Preparatory School", 8, "Boca Raton"],
  ["Gulf Coast High School", 7, "Naples"],
  ["Gulliver Preparatory School", 10, "Coral Gables"],
  ["Haines City High School", 5, "Haines City"],
  ["Hialeah - Miami Lakes Senior High School", 10, "Hialeah"],
  ["Hialeah Gardens Senior High School", 10, "Hialeah Gardens"],
  ["Hialeah Senior High School", 10, "Hialeah"],
  ["Hillsborough High School", 6, "Tampa"],
  ["Hollywood Hills High School", 9, "Hollywood"],
  ["Holy Trinity Episcopal Academy", 4, "Melbourne"],
  ["Homestead Senior High School", 10, "Homestead"],
  ["Horizon High", 4, "Winter Garden"],
  ["IMG Academy", 6, "Bradenton"],
  ["IPrep Academy North", 10, "Miami"],
  ["Ida Baker High School", 7, "Cape Coral"],
  ["Imater Charter Middle/High School", 10, "Hialeah"],
  ["Immaculata Lasalle High School", 10, "Miami"],
  ["Immokalee High School", 7, "Immokalee"],
  ["Ipreparatory Academy", 10, "Miami"],
  ["Island Coast High School", 7, "Cape Coral"],
  ["Itech - Miami's Mega Magnet High School", 10, "Miami"],
  ["Itech - Thomas A Edison Educational Center", 10, "Miami"],
  ["Itech Miami's Mega Technology Magnet High School", 10, "Miami"],
  ["J P Taravella High School", 9, "Coral Springs"],
  ["J.R. Arnold High School", 1, "Panama City"],
  ["James S. Rickards High School", 1, "Tallahassee"],
  ["Jean Ribault High School", 2, "Jacksonville"],
  ["Jefferson Somerset Academy", 1, "Monticello"],
  ["John A Ferguson High School", 10, "Miami"],
  ["Jones High School", 4, "Orlando"],
  ["Jupiter Christian School", 8, "Jupiter"],
  ["Jupiter High School", 8, "Jupiter"],
  ["Kathleen High School", 5, "Lakeland"],
  ["Key Point Academy Downtown", 10, "Miami"],
  ["Key Point Academy", 10, "Miami"],
  ["Kia Preparatory School", 10, "Hialeah"],
  ["Lake Buena Vista High School", 4, "Orlando"],
  ["Lake Gibson High School", 5, "Lakeland"],
  ["Lake Highland Preparatory School", 4, "Orlando"],
  ["Lake Howell High School", 4, "Winter Park"],
  ["Lake Mary High School", 4, "Lake Mary"],
  ["Lake Mary Prep School", 4, "Lake Mary"],
  ["Lake Minneola High School", 4, "Minneola"],
  ["Lake Nona High School", 4, "Orlando"],
  ["Lake Region High School", 5, "Winter Haven"],
  ["Lakewood Ranch High School", 6, "Lakewood Ranch"],
  ["Land O' Lakes High School", 6, "Land O' Lakes"],
  ["Landow Jewish Academy", 9, "Hollywood"],
  ["Latin Builders Association Academy", 7, "Hialeah"],
  ["Latin Builders Association High School", 10, "Hialeah"],
  ["Laurel Nokomis Middle School", 6, "Nokomis"],
  ["Lawton Chiles", 1, "Tallahassee"],
  ["Lecanto High School", 3, "Lecanto"],
  ["Legacy High School", 8, "Royal Palm Beach"],
  ["Lely High School", 7, "Naples"],
  ["Lennard High School", 6, "Ruskin"],
  ["Leto High School", 6, "Tampa"],
  ["Lexington Middle School", 7, "Fort Myers"],
  ["Liberty High School", 4, "Kissimmee"],
  ["Lorenzo Walker Technical High School", 7, "Naples"],
  ["Lyman High School", 4, "Longwood"],
  ["Maclay School", 1, "Tallahassee"],
  ["Manatee School For The Arts", 6, "Palmetto"],
  ["Marjory Stoneman Douglas High School", 9, "Parkland"],
  ["Martin County High School", 8, "Stuart"],
  ["Mast Academy", 10, "Miami"],
  ["Matanzas High School", 2, "Palm Coast"],
  ["Mater Academy East Charter High School", 10, "Hialeah Gardens"],
  ["Mater Academy", 10, "Hialeah Gardens"],
  ["Mater Brickell Academy Chapter", 10, "Miami"],
  ["Mater Brickell Academy", 10, "Miami"],
  ["Maynard Evans High School", 4, "Orlando"],
  ["McKeel Academy Of Technology", 5, "Lakeland"],
  ["McLaughlin Academy of Excellence", 5, "Lakeland"],
  ["Merritt Island High School", 4, "Merritt Island"],
  ["Miami Arts Studio 6-12 At Zelda Glazer", 10, "Miami"],
  ["Miami Arts Studio", 10, "Miami"],
  ["Miami Beach Senior High", 10, "Miami Beach"],
  ["Miami Central Senior High School", 10, "Miami"],
  ["Miami Country Day School", 10, "Miami"],
  ["Miami Jackson Senior High School", 10, "Miami"],
  ["Miami Lakes Educational Center", 10, "Miami Lakes"],
  ["Miami Norland Senior High School", 10, "Miami"],
  ["Miami Northwestern Senior High", 10, "Miami"],
  ["Miami Northwestern Shs", 10, "Miami"],
  ["Miami Palmetto Senior High School", 10, "Pinecrest"],
  ["Miami Springs Senior High", 10, "Miami Springs"],
  ["Miami Sunset Senior High School", 10, "Miami"],
  ["Middleton High School", 6, "Tampa"],
  ["Millenium 6-12 Collegiate Academy", 9, "Tamarac"],
  ["Millennium Collegiate Academy", 9, "Tamarac"],
  ["Miramar High School", 9, "Miramar"],
  ["Monarch High School", 9, "Coconut Creek"],
  ["Naples High School", 7, "Naples"],
  ["Nature Coast Technical High School", 6, "Brooksville"],
  ["Neocity Academy", 4, "Kissimmee"],
  ["North Bay Haven Charter Academy", 1, "Panama City"],
  ["North Broward Preparatory School", 9, "Coconut Creek"],
  ["North Fort Myers High School", 7, "North Fort Myers"],
  ["North Fort Myers", 7, "North Fort Myers"],
  ["North Miami Beach Senior High School", 10, "North Miami Beach"],
  ["North Miami Senior High School", 10, "North Miami"],
  ["North Miami Senior High", 10, "North Miami"],
  ["North Naples Middle School", 7, "Naples"],
  ["North Port High School", 6, "North Port"],
  ["Nova High School", 9, "Davie"],
  ["Nova Southeastern University School", 9, "Davie"],
  ["Oak Hall School", 3, "Gainesville"],
  ["Ohana Institute", 1, "Inlet Beach"],
  ["Okeechobee High School", 8, "Okeechobee"],
  ["Olympia High School", 4, "Orlando"],
  ["Olympic Heights High School", 8, "Boca Raton"],
  ["Orlando Christian Prep", 4, "Orlando"],
  ["Orlando Science School", 4, "Orlando"],
  ["Osceola County School for the Arts", 4, "Kissimmee"],
  ["Osceola High School", 4, "Kissimmee"],
  ["Our Lady Of Lourdes Academy", 10, "Miami"],
  ["Out-of-door Academy", 6, "Sarasota"],
  ["Oviedo High School", 4, "Oviedo"],
  ["P.K. Yonge Developmental Research School", 3, "Gainesville"],
  ["Pace High School", 1, "Pace"],
  ["Palm Beach Central High School", 8, "Wellington"],
  ["Palm Harbor University High School", 6, "Palm Harbor"],
  ["Palm Springs Middle School", 10, "Hialeah"],
  ["Palms Glades Academy", 1, "Tallahassee"],
  ["Parrish Community High School", 6, "Parrish"],
  ["Paxon School for Advanced Studies", 2, "Jacksonville"],
  ["Pembroke Pines Charter High School", 9, "Pembroke Pines"],
  ["Pine Crest High School", 9, "Fort Lauderdale"],
  ["Pine Crest School", 9, "Fort Lauderdale"],
  ["Pine Ridge High School", 3, "Deltona"],
  ["Pine View High School (Sarasota)", 6, "Sarasota"],
  ["Piper High School", 9, "Sunrise"],
  ["Plantation High School", 9, "Plantation"],
  ["Poinciana High School", 4, "Poinciana"],
  ["Pompano Beach High School", 9, "Pompano Beach"],
  ["Ponte Vedra High School", 2, "Ponte Vedra Beach"],
  ["Port Saint Lucie High School", 8, "Port St. Lucie"],
  ["Renaissance Charter School", 10, "Doral"],
  ["Rhema W Ord Christian Academy", 10, "Miami"],
  ["Rhema Word Christian Academy", 10, "Miami"],
  ["Ridge Community High School", 5, "Davenport"],
  ["Riverview High School - Hillsborough", 6, "Riverview"],
  ["Riverview High School - Sarasota", 6, "Sarasota"],
  ["Riverview High School", 6, "Riverview"],
  ["Riviera Preparatory School", 10, "Miami"],
  ["Riviera Preparatory", 10, "Miami"],
  ["Robert Morgan Educational Center", 10, "Miami"],
  ["Rockledge High School", 4, "Rockledge"],
  ["Ronald Reagan Doral Senior High", 10, "Doral"],
  ["Royal Palm Beach High School", 8, "Royal Palm Beach"],
  ["Saint Andrew's School", 8, "Boca Raton"],
  ["Saint Cloud High School", 4, "St. Cloud"],
  ["Saint Francis Catholic Academy", 3, "Gainesville"],
  ["Saint John Paul II Academy", 8, "Boca Raton"],
  ["Saint Petersburg Catholic High School", 6, "St. Petersburg"],
  ["Samuel W. Wolfson", 2, "Jacksonville"],
  ["San Jose Early College At Cecil", 2, "Jacksonville"],
  ["Sandalwood Academy Of Hospitality", 2, "Jacksonville"],
  ["Sandalwood High School", 2, "Jacksonville"],
  ["Sarasota High School", 6, "Sarasota"],
  ["Satellite High School", 4, "Satellite Beach"],
  ["Scheck Hillel Community School", 10, "North Miami Beach"],
  ["School For Advanced Studies- South", 10, "Miami"],
  ["School for Advanced Studies - Wolfson", 10, "Miami"],
  ["School for Advanced Studies", 10, "Miami"],
  ["Seminole High School", 4, "Sanford"],
  ["Seminole Ridge High School", 8, "Loxahatchee"],
  ["Seminole Senior High School", 6, "Seminole"],
  ["Shorecrest Preparatory High School", 6, "St. Petersburg"],
  ["Simmons Career Center", 6, "Plant City"],
  ["Slam Boca", 8, "Boca Raton"],
  ["Slam North Miami Beach High School", 10, "North Miami Beach"],
  ["Slam Tampa", 6, "Tampa"],
  ["Slam! Apollo", 6, "Apollo Beach"],
  ["Somerset Academy Canyons", 8, "Boynton Beach"],
  ["Somerset Academy South Homestead", 10, "Homestead"],
  ["Somerset Academy", 9, "Pembroke Pines"],
  ["South Broward High School", 9, "Hollywood"],
  ["South Dade Senior High School", 10, "Homestead"],
  ["South Plantation High School", 9, "Plantation"],
  ["South Walton High School", 1, "Santa Rosa Beach"],
  ["SouthTech Academy", 8, "Boynton Beach"],
  ["Southeast High School", 6, "Bradenton"],
  ["Southwest Miami High School", 10, "Miami"],
  ["Spanish River High School", 8, "Boca Raton"],
  ["Sports Leadership & Management Charter Middle/High School", 10, "Miami"],
  ["Spruce Creek High School", 3, "Port Orange"],
  ["St. Augustine High School", 2, "St. Augustine"],
  ["St. Cloud High School", 4, "St. Cloud"],
  ["St. Johns Country Day School", 2, "Orange Park"],
  ["St. Thomas Aquinas High School", 9, "Fort Lauderdale"],
  ["Stanton College Preparatory School", 2, "Jacksonville"],
  ["Stranahan High School", 9, "Fort Lauderdale"],
  ["Strawberry Crest High School", 6, "Plant City"],
  ["Sumner High School", 6, "Riverview"],
  ["Suncoast Polytechnical High School", 6, "Sarasota"],
  ["Sunlake High School", 6, "Land O' Lakes"],
  ["Sunlake Highschool", 6, "Land O' Lakes"],
  ["Tenoroc High School", 5, "Lakeland"],
  ["Terra Environmental Research Institute", 10, "Miami"],
  ["The Classical Academy of Sarasota", 6, "Sarasota"],
  ["The Frazer School", 3, "Gainesville"],
  ["The Greene School", 8, "West Palm Beach"],
  ["The Out-of-door Academy", 6, "Sarasota"],
  ["The Paragon School", 4, "Orlando"],
  ["The Pine School", 8, "Stuart"],
  ["The Sagemont School", 9, "Weston"],
  ["The Upper Sagemont School", 9, "Weston"],
  ["Thomas Jefferson High School", 6, "Tampa"],
  ["Tocoi Creek High School", 2, "St. Augustine"],
  ["Tohopekaliga High School", 4, "Kissimmee"],
  ["Tr Robinson High School", 6, "Tampa"],
  ["Tr Robinson Hs", 6, "Tampa"],
  ["Tradition Preparatory High School", 8, "Port St. Lucie"],
  ["Treasure Coast High School", 8, "Port St. Lucie"],
  ["Trinity Preparatory School", 4, "Winter Park"],
  ["True North Classical Academy", 10, "Miami"],
  ["Turner Technical Arts High School", 10, "Miami"],
  ["University High School", 4, "Orlando"],
  ["Viera High School", 4, "Viera"],
  ["Walter Sickles High School", 6, "Tampa"],
  ["Wekiva High School", 4, "Apopka"],
  ["West Boca Raton Community High School", 8, "Boca Raton"],
  ["West Broward High School", 9, "Pembroke Pines"],
  ["West Orange High School", 4, "Winter Garden"],
  ["Western High School", 9, "Davie"],
  ["Westland Hialeah Senior High School", 10, "Hialeah"],
  ["Westminster Academy", 9, "Fort Lauderdale"],
  ["Westminster Christian School", 10, "Palmetto Bay"],
  ["Westshore Jr Sr High School", 4, "Melbourne"],
  ["Wharton High School", 6, "Tampa"],
  ["Whiddon Rogers High School", 9, "Fort Lauderdale"],
  ["William T Dwyer High School", 8, "Palm Beach Gardens"],
  ["William T Dwyer Hs", 8, "Palm Beach Gardens"],
  ["Windermere High School", 4, "Windermere"],
  ["Windermere Preparatory School", 4, "Windermere"],
  ["Winter Haven High School", 5, "Winter Haven"],
  ["Winter Park High School", 4, "Winter Park"],
  ["Winter Springs High School", 4, "Winter Springs"],
  ["Xceed Prep", 8, "Boca Raton"],
  ["iPrep Academy", 10, "Miami"],
  ["Park Vista Community High School", 8, "Lake Worth"],
];

export const FALLBACK_CITIES = {
  "Belle Isle": [28.4683, -81.3650],
  "Winter Garden": [28.5653, -81.5862],
  "Longwood": [28.7031, -81.3384],
  "Palmetto": [27.5214, -82.5723],
  "Riviera Beach": [26.7754, -80.0581],
  "Palm Springs": [26.6356, -80.0964],
  "Southwest Ranches": [26.0578, -80.4054],
  "Coconut Creek": [26.2517, -80.1789],
  "Miami Shores": [25.8635, -80.1862]
};

export function getCityCoords(city) {
  return CITIES[city] || FALLBACK_CITIES[city] || null;
}

export const VB_W = 800, VB_H = 600;
const LNG_MIN = -88.0, LNG_MAX = -79.5;
const LAT_MIN = 24.3,  LAT_MAX = 31.2;
const LAT_MID = (LAT_MIN + LAT_MAX) / 2;
const LNG_SCALE = Math.cos(LAT_MID * Math.PI / 180);

export function project(lng, lat) {
  const trueWidth = (LNG_MAX - LNG_MIN) * LNG_SCALE;
  const trueHeight = (LAT_MAX - LAT_MIN);
  
  const scaleX = VB_W / trueWidth;
  const scaleY = VB_H / trueHeight;
  const scale = Math.min(scaleX, scaleY);
  
  const mapW = trueWidth * scale;
  const mapH = trueHeight * scale;
  const offsetX = (VB_W - mapW) / 2;
  const offsetY = (VB_H - mapH) / 2;
  
  const x = offsetX + ((lng - LNG_MIN) * LNG_SCALE) * scale;
  const y = offsetY + ((LAT_MAX - lat)) * scale;
  
  return [x, y];
}

import GEOCODES from './schoolGeocodes.json';

function jitter(idx, range) {
  const a = Math.sin(idx * 12.9898 + 78.233) * 43758.5453;
  return ((a - Math.floor(a)) - 0.5) * range;
}

let _missingCities = [];
let _fallbackSchools = [];
export const SCHOOLS = SCHOOLS_RAW.map((row, idx) => {
  const [name, d, city] = row;
  const geo = GEOCODES[`${name}|${city}`];
  let lat, lng, exact = false;

  if (geo && geo.lat != null && geo.lng != null) {
    lat = geo.lat;
    lng = geo.lng;
    exact = true;
  } else {
    // Fall back to city center with tiny jitter so co-located schools don't stack.
    const cityCoords = getCityCoords(city);
    if (!cityCoords) { _missingCities.push(city); return null; }
    lat = cityCoords[0] + jitter(idx * 2, 0.018);
    lng = cityCoords[1] + jitter(idx * 2 + 1, 0.018);
    _fallbackSchools.push(`D${d}: ${name} (${city})`);
  }

  const [x, y] = project(lng, lat);
  return { n: name, d: d, x: x, y: y, lat, lng, city, exact };
}).filter(Boolean);

export const GEOCODE_STATS = {
  total: SCHOOLS.length,
  exact: SCHOOLS.filter(s => s.exact).length,
  fallback: _fallbackSchools.length,
  fallbackList: _fallbackSchools
};

export const FL_OUTLINE_PATH = (() => {
  return 'M ' + FL_OUTLINE.map(([lng, lat]) => project(lng, lat).map(v => v.toFixed(1)).join(',')).join(' L ') + ' Z';
})();

function convexHull(points) {
  if (points.length < 3) return points.slice();
  const pts = points.slice().sort((a,b) => a[0]-b[0] || a[1]-b[1]);
  const cross = (O,A,B) => (A[0]-O[0])*(B[1]-O[1]) - (A[1]-O[1])*(B[0]-O[0]);
  const lower = [];
  for (const p of pts) {
    while (lower.length >= 2 && cross(lower[lower.length-2], lower[lower.length-1], p) <= 0) lower.pop();
    lower.push(p);
  }
  const upper = [];
  for (let i = pts.length-1; i >= 0; i--) {
    const p = pts[i];
    while (upper.length >= 2 && cross(upper[upper.length-2], upper[upper.length-1], p) <= 0) upper.pop();
    upper.push(p);
  }
  upper.pop(); lower.pop();
  return lower.concat(upper);
}

function padHull(hull, pad) {
  const cx = hull.reduce((s,p)=>s+p[0],0) / hull.length;
  const cy = hull.reduce((s,p)=>s+p[1],0) / hull.length;
  return hull.map(([x,y]) => {
    const dx = x - cx, dy = y - cy;
    const len = Math.sqrt(dx*dx + dy*dy) || 1;
    return [x + (dx/len) * pad, y + (dy/len) * pad];
  });
}

export const DISTRICT_GEOM = {};
Object.keys(DISTRICTS).forEach(d => {
  const pts = SCHOOLS.filter(s => s.d == d).map(s => [s.x, s.y]);
  if (!pts.length) return;
  const hull = padHull(convexHull(pts), 18);
  const cx = pts.reduce((s,p)=>s+p[0],0) / pts.length;
  const cy = pts.reduce((s,p)=>s+p[1],0) / pts.length;
  DISTRICT_GEOM[d] = {
    path: 'M ' + hull.map(p => p[0].toFixed(1)+','+p[1].toFixed(1)).join(' L ') + ' Z',
    cx, cy
  };
});

// Lat/Lng-space district hulls for use with Leaflet (returns [lat, lng] pairs).
export const DISTRICT_LATLNG = {};
Object.keys(DISTRICTS).forEach(d => {
  const pts = SCHOOLS.filter(s => s.d == d).map(s => [s.lng, s.lat]);
  if (!pts.length) return;
  const hull = padHull(convexHull(pts), 0.15);
  const cLat = pts.reduce((s,p)=>s+p[1],0) / pts.length;
  const cLng = pts.reduce((s,p)=>s+p[0],0) / pts.length;
  DISTRICT_LATLNG[d] = {
    polygon: hull.map(([lng, lat]) => [lat, lng]),
    center: [cLat, cLng],
    count: pts.length
  };
});

export const FL_BOUNDS = [[24.3, -88.0], [31.2, -79.5]];
