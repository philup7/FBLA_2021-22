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

let touristAttractionArray = [//Include all options for each attributes somewhere
    {
        "hasVisited" : false,//Boolean that represents if user has visited before
        "name" : "Philadelphia Museum of Art",
        "food" : true,
        "free" : false,//If it's free it's true, if it costs anything it's false
        "setting" : "Indoors",
        "address" : "2600 Benjamin Franklin Pkwy, Philadelphia, PA 19130",
        "type" : "Museum",
        "area" : "Center City",
        "daysOpen" : ["Sunday", "Monday", "Thursday", "Friday", "Saturday"]
    },
    {
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
    {
        "hasVisited" : false,
        "name" : "Eastern State Penitentiary",
        "food" : false,
        "free" : false,
        "setting" : "Mostly Indoors",
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
        "name" : "Redding Terminal Market",
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
    {//11 not complete
        "hasVisited" : false,
        "name" : "Shofuso Japanese House and Garden",
        "food" : false,
        "free" : true,
        "setting" : "Outside",
        "address" : "Lansdowne Dr &, Horticultural Dr, Philadelphia, PA 19131",
        "type" : "Historical",
        "area" : "West Philadelphia",
        "daysOpen" : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
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
    {//14 mixed
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
    {//16 free? setting? dates?
        "hasVisited" : false,
        "name" : "Liberty Bell",
        "food" : false,
        "free" : true,
        "setting" : "Mixed",
        "address" : "526 Market St, Philadelphia, PA 19106",
        "type" : "Historical",
        "area" : "Center City",
        "daysOpen" : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    }
]


