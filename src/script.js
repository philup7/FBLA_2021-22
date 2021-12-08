class TouristAttraction extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const projectInfoContainer = document.createElement('p');
        projectInfoContainer.innerHTML = `${this.getAttribute('name')}`;
        const icon = document.createElement('img');
        icon.src = `${this.getAttribute('src')}`;
        this.appendChild(projectInfoContainer);
        this.appendChild(icon);
    }
}

customElements.define('tourist-attraction', TouristAttraction)

let touristAttractionArray = [
    {//1
        "hasVisited" : false,//Boolean that represents if user has visited before
        "name" : "Philadelphia Museum of Art",//Name of place
        "food" : true,//Has food = true, no food = false
        "free" : false,//If it's free it's true, if it costs anything it's false
        "setting" : "Indoors",//Indoors, outside, or mixed which is a combination of both
        "address" : "2600 Benjamin Franklin Pkwy, Philadelphia, PA 19130",//Street address
        "type" : "Museum",//Type: Museum, Restaurant, Historical, Shopping, Entertainment, Park, Food Market
        "area" : "Center City",//Center city, West Philadelphia, South Philadelphia, North Philadelphia, Northwest Philadelphia, Northeast Philadelphia
        "daysOpen" : ["Sunday", "Monday", "Thursday", "Friday", "Saturday"]//Days Open
    },
    {//2
        "hasVisited" : false,
        "name" : "The Franklin Institute",
        "food" : true,
        "free" : false,
        "setting" : "Indoors",
        "address" : "222 N 20th St, Philadelphia, PA 19103",
        "type" : "Museum",
        "area" : "Center City",
        "daysOpen" : ["Sunday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    {//3
        "hasVisited" : false,
        "name" : "Eastern State Penitentiary",
        "food" : false,
        "free" : false,
        "setting" : "Mixed",
        "address" : "2027 Fairmount Ave, Philadelphia, PA 19130",
        "type" : "Historical",
        "area" : "North Philadelphia",
        "daysOpen" : ["Sunday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },    
    {//4
        "hasVisited" : false,
        "name" : "Rittenhouse Square Park",
        "food" : false,
        "free" : true,
        "setting" : "Outside",
        "address" : "210 W Rittenhouse Square, Philadelphia, PA 19103",
        "type" : "Park",
        "area" : "Center City",
        "daysOpen" : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    {//5
        "hasVisited" : false,
        "name" : "Washington Square Park",
        "food" : false,
        "free" : true,
        "setting" : "Outside",
        "address" : "210 W Washington Square, Philadelphia, PA 19106",
        "type" : "Park",
        "area" : "Center City",
        "daysOpen" : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    {//6
        "hasVisited" : false,
        "name" : "Reading Terminal Market",
        "food" : true,
        "free" : false,
        "setting" : "Indoors",
        "address" : "51 N 12th St, Philadelphia, PA 19107",
        "type" : "Food Market",
        "area" : "Center City",
        "daysOpen" : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    {//7
        "hasVisited" : false,
        "name" : "Fashion District",
        "food" : true,
        "free" : false,
        "setting" : "Indoors",
        "address" : "901 Market St, Philadelphia, PA 19107",
        "type" : "Shopping",
        "area" : "Center City",
        "daysOpen" : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    {//8
        "hasVisited" : false,
        "name" : "The Shops at Liberty Place",
        "food" : true,
        "free" : false,
        "setting" : "Indoors",
        "address" : "1625 Chestnut St, Philadelphia, PA 19103",
        "type" : "Shopping",
        "area" : "Center City",
        "daysOpen" : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    {//9
        "hasVisited" : false,
        "name" : "Philadelphia Mills",
        "food" : true,
        "free" : false,
        "setting" : "Indoors",
        "address" : "1455 Franklin Mills Cir, Philadelphia, PA 19154",
        "type" : "Shopping",
        "area" : "Northeast Philadelphia",
        "daysOpen" : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    {//10
        "hasVisited" : false,
        "name" : "Wissahickon Valley Park",
        "food" : false,
        "free" : true,
        "setting" : "Outside",
        "address" : "Valley Green Rd, Philadelphia, PA 19128",
        "type" : "Park",
        "area" : "Northwest Philadelphia",
        "daysOpen" : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    {//11
        "hasVisited" : false,
        "name" : "Shofuso Japanese House and Garden",
        "food" : false,
        "free" : false,
        "setting" : "Outside",
        "address" : "Lansdowne Dr &, Horticultural Dr, Philadelphia, PA 19131",
        "type" : "Historical",
        "area" : "West Philadelphia",
        "daysOpen" : ["Sunday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    {//12
        "hasVisited" : false,
        "name" : "Please Touch Museum",
        "food" : true,
        "free" : false,
        "setting" : "Indoors",
        "address" : "4231 Avenue of the Republic, Philadelphia, PA 19131",
        "type" : "Museum",
        "area" : "West Philadelphia",
        "daysOpen" : ["Sunday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    {//13
        "hasVisited" : false,
        "name" : "Sang Kee Peking Duck House",
        "food" : true,
        "free" : false,
        "setting" : "Indoors",
        "address" : "238 N 9th St, Philadelphia, PA 19107",
        "type" : "Restaurant",
        "area" : "Center City",
        "daysOpen" : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    {//14
        "hasVisited" : false,
        "name" : "Zahav",
        "food" : true,
        "free" : false,
        "setting" : "Mixed",
        "address" : "237 St James Pl, Philadelphia, PA 19106",
        "type" : "Restaurant",
        "area" : "Center City",
        "daysOpen" : ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    {//15
        "hasVisited" : false,
        "name" : "Wm. Mulherin's Sons",
        "food" : true,
        "free" : false,
        "setting" : "Mixed",
        "address" : "1355 N Front St, Philadelphia, PA 19122",
        "type" : "Restaurant",
        "area" : "North Philadelphia",
        "daysOpen" : ["Sunday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    {//16
        "hasVisited" : false,
        "name" : "Liberty Bell",
        "food" : false,
        "free" : true,
        "setting" : "Mixed",
        "address" : "526 Market St, Philadelphia, PA 19106",
        "type" : "Historical",
        "area" : "Center City",
        "daysOpen" : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    {//17
        "hasVisited" : false,
        "name" : "The Mann Center",
        "food" : true,
        "free" : false,
        "setting" : "Outside",
        "address" : "5201 Parkside Ave, Philadelphia, PA 19131",
        "type" : "Entertainment",
        "area" : "West Philadelphia",
        "daysOpen" : ["Days Vary"]
    },
    {//18
        "hasVisited" : false,
        "name" : "Kimmel Cultural Campus",
        "food" : true,
        "free" : false,
        "setting" : "Indoors",
        "address" : "300 S Broad St, Philadelphia, PA 19102",
        "type" : "Entertainment",
        "area" : "Center City",
        "daysOpen" : ["Days Vary"]
    },
    {//19 
        "hasVisited" : false,
        "name" : "Philadelphia Zoo",
        "food" : true,
        "free" : false,
        "setting" : "Mixed",
        "address" : "3400 W Girard Ave, Philadelphia, PA 19104",
        "type" : "Entertainment",
        "area" : "West Philadelphia",
        "daysOpen" : ["Days Vary"]
    },
    {//20 
        "hasVisited" : false,
        "name" : "Dalessandro's Steaks",
        "food" : true,
        "free" : false,
        "setting" : "Indoors",
        "address" : "600 Wendover St, Philadelphia, PA 19128",
        "type" : "Restaurant",
        "area" : "Northwest Philadelphia",
        "daysOpen" : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    {//21
        "hasVisited" : false,
        "name" : "Morris Arboretum of the University of Pennsylvania",
        "food" : false,
        "free" : false,
        "setting" : "Outside",
        "address" : "100 E Northwestern Ave, Philadelphia, PA 19118",
        "type" : "Museum",
        "area" : "Northwest Philadelphia",
        "daysOpen" : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    {//22
        "hasVisited" : false,
        "name" : "Pennypack Park",
        "food" : false,
        "free" : true,
        "setting" : "Outside",
        "address" : "Pennypack Trail, Philadelphia, PA 19136",
        "type" : "Park",
        "area" : "Northeast Philadelphia",
        "daysOpen" : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    {//23
        "hasVisited" : false,
        "name" : "Barnes Foundation",
        "food" : true,
        "free" : false,
        "setting" : "Indoors",
        "address" : "2025 Benjamin Franklin Pkwy, Philadelphia, PA 19130",
        "type" : "Museum",
        "area" : "Center City",
        "daysOpen" : ["Sunday", "Monday", "Thursday", "Friday", "Saturday"]
    },
    {//24
        "hasVisited" : false,
        "name" : "The Academy of Natural Sciences of Drexel University",
        "food" : true,
        "free" : false,
        "setting" : "Indoors",
        "address" : "1900 Benjamin Franklin Pkwy, Philadelphia, PA 19103",
        "type" : "Museum",
        "area" : "Center City",
        "daysOpen" : ["Sunday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    {//25
        "hasVisited" : false,
        "name" : "Italian Market 9th Street",
        "food" : true,
        "free" : false,
        "setting" : "Mixed",
        "address" : "919 S 9th St, Philadelphia, PA 19147",
        "type" : "Food Market",
        "area" : "South Philadelphia",
        "daysOpen" : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    {//26
        "hasVisited" : false,
        "name" : "Wells Fargo Center",
        "food" : true,
        "free" : false,
        "setting" : "Indoors",
        "address" : "3601 S Broad St, Philadelphia, PA 19148",
        "type" : "Entertainment",
        "area" : "South Philadelphia",
        "daysOpen" : ["Days Vary"]
    },
    {//27
        "hasVisited" : false,
        "name" : "Citizens Bank Park",
        "food" : true,
        "free" : false,
        "setting" : "Mixed",
        "address" : "1 Citizens Bank Way, Philadelphia, PA 19148",
        "type" : "Entertainment",
        "area" : "South Philadelphia",
        "daysOpen" : ["Days Vary"]
    },
    {//28
        "hasVisited" : false,
        "name" : "Lincoln Financial Field",
        "food" : true,
        "free" : false,
        "setting" : "Mixed",
        "address" : "One Lincoln Financial Field Way, Philadelphia, PA 19148",
        "type" : "Entertainment",
        "area" : "South Philadelphia",
        "daysOpen" : ["Days Vary"]
    },
    {//29
        "hasVisited" : false,
        "name" : "NetCost Market",
        "food" : true,
        "free" : false,
        "setting" : "Indoors",
        "address" : "11701 Bustleton Ave, Philadelphia, PA 19116",
        "type" : "Food Market",
        "area" : "Northeast Philadelphia",
        "daysOpen" : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    {//30
        "hasVisited" : false,
        "name" : "H Mart Philadelphia",
        "food" : true,
        "free" : false,
        "setting" : "Indoors",
        "address" : "6201 N Front St #124, Philadelphia, PA 19120",
        "type" : "Food Market",
        "area" : "North Philadelphia",
        "daysOpen" : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    {//31
        "hasVisited" : false,
        "name" : "The Fillmore Philadelphia",
        "food" : true,
        "free" : false,
        "setting" : "Indoors",
        "address" : "29 E Allen St, Philadelphia, PA 19123",
        "type" : "Entertainment",
        "area" : "North Philadelphia",
        "daysOpen" : ["Days Vary"]
    },
    {//32
        "hasVisited" : false,
        "name" : "The Met Philadelphia",
        "food" : false,
        "free" : false,
        "setting" : "Indoors",
        "address" : "858 N Broad St, Philadelphia, PA 19130",
        "type" : "Entertainment",
        "area" : "North Philadelphia",
        "daysOpen" : ["Days Vary"]
    },
    {//33
        "hasVisited" : false,
        "name" : "The Met Philadelphia",
        "food" : false,
        "free" : false,
        "setting" : "Indoors",
        "address" : "858 N Broad St, Philadelphia, PA 19130",
        "type" : "Entertainment",
        "area" : "North Philadelphia",
        "daysOpen" : ["Days Vary"]
    },
    {//34 
        "hasVisited" : false,
        "name" : "Awbury Park",
        "food" : false,
        "free" : true,
        "setting" : "Outside",
        "address" : "6101 Ardleigh St, Philadelphia, PA 19138",
        "type" : "Park",
        "area" : "Northwest Philadelphia",
        "daysOpen" : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    {//35
        "hasVisited" : false,
        "name" : "Philly SkatePlex",
        "food" : true,
        "free" : false,
        "setting" : "Indoors",
        "address" : "11586 Roosevelt Blvd, Philadelphia, PA 19116",
        "type" : "Entertainment",
        "area" : "Northeast Philadelphia",
        "daysOpen" : ["Sunday", "Monday", "Tuesday", "Wednesday", "Friday", "Saturday"]
    }
]

let cars1 = touristAttractionArray.filter(test => test.area == "Center City");
console.log(cars1.length);
let cars = touristAttractionArray.filter(car => JSON.stringify(car.daysOpen) == JSON.stringify(["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]));//Figure out array of days nevermind use json stringify
console.log(cars);
