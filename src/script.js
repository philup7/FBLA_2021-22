const template = document.createElement('template');
template.innerHTML = `
    <style>
        @import url('style.css')
    </style>
    <div class="tourist-attraction">
        <div>
            <h6 id="visited-caption">Visited Before?</h6>
            <input type="checkbox" id="visited-checkbox"/>
        </div>
        <div>
            <h3></h3>
            <p></p>
        </div>
    </div>
`;

class TouristAttraction extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

    }

    connectedCallback() {
        this.shadowRoot.querySelector('h3').innerHTML = `${this.getAttribute('name')}`;
        this.shadowRoot.querySelector('p').innerHTML = `${this.getAttribute('address')}`;
    }
}

customElements.define('tourist-attraction', TouristAttraction)




let touristAttractionsArray = [
    {//1
        "hasVisited" : false,//Boolean that represents if user has visited before
        "name" : "Philadelphia Museum of Art",//Name of place
        "food" : true,//Has food = true, no food = false
        "free" : false,//If it's free it's true, if it costs anything it's false
        "setting" : "Indoors",//Indoors, outside, or mixed which is a combination of both
        "address" : "2600 Benjamin Franklin Pkwy, Philadelphia, PA 19130",//Street address
        "type" : "Museum",//Type: Museum, Restaurant, Historical, Shopping, Entertainment, Park, Food Market
        "area" : "Center City",//Center city, West Philadelphia, South Philadelphia, North Philadelphia, Northwest Philadelphia, Northeast Philadelphia
        "daysOpen" : ["Sunday", "Monday", "Thursday", "Friday", "Saturday"],//Days Open
        "numMatches" : 0//Number of matches with the current preferences
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
        "daysOpen" : ["Sunday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "numMatches" : 0
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
        "daysOpen" : ["Sunday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "numMatches" : 0
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
        "daysOpen" : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "numMatches" : 0
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
        "daysOpen" : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "numMatches" : 0
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
        "daysOpen" : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "numMatches" : 0
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
        "daysOpen" : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "numMatches" : 0
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
        "daysOpen" : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "numMatches" : 0
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
        "daysOpen" : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "numMatches" : 0
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
        "daysOpen" : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "numMatches" : 0
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
        "daysOpen" : ["Sunday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "numMatches" : 0
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
        "daysOpen" : ["Sunday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "numMatches" : 0
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
        "daysOpen" : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "numMatches" : 0
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
        "daysOpen" : ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "numMatches" : 0
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
        "daysOpen" : ["Sunday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "numMatches" : 0
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
        "daysOpen" : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "numMatches" : 0
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
        "daysOpen" : ["Days Vary"],
        "numMatches" : 0
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
        "daysOpen" : ["Days Vary"],
        "numMatches" : 0
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
        "daysOpen" : ["Days Vary"],
        "numMatches" : 0
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
        "daysOpen" : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "numMatches" : 0
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
        "daysOpen" : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "numMatches" : 0
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
        "daysOpen" : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "numMatches" : 0
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
        "daysOpen" : ["Sunday", "Monday", "Thursday", "Friday", "Saturday"],
        "numMatches" : 0
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
        "daysOpen" : ["Sunday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "numMatches" : 0
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
        "daysOpen" : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "numMatches" : 0
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
        "daysOpen" : ["Days Vary"],
        "numMatches" : 0
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
        "daysOpen" : ["Days Vary"],
        "numMatches" : 0
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
        "daysOpen" : ["Days Vary"],
        "numMatches" : 0
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
        "daysOpen" : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "numMatches" : 0
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
        "daysOpen" : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "numMatches" : 0
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
        "daysOpen" : ["Days Vary"],
        "numMatches" : 0
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
        "daysOpen" : ["Days Vary"],
        "numMatches" : 0
    },
    {//33
        "hasVisited" : false,
        "name" : "National Constitution Center",
        "food" : true,
        "free" : false,
        "setting" : "Indoors",
        "address" : "525 Arch St, Philadelphia, PA 19106",
        "type" : "Museum",
        "area" : "Center City",
        "daysOpen" : ["Sunday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "numMatches" : 0
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
        "daysOpen" : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "numMatches" : 0
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
        "daysOpen" : ["Sunday", "Monday", "Tuesday", "Wednesday", "Friday", "Saturday"],
        "numMatches" : 0
    },
    {//36
        "hasVisited" : false,
        "name" : "TERAKAWA RAMEN",
        "food" : true,
        "free" : false,
        "setting" : "Indoors",
        "address" : "125 S 40th St, Philadelphia, PA 19104",
        "type" : "Restaurant",
        "area" : "West Philadelphia",
        "daysOpen" : ["Sunday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "numMatches" : 0
    },
    {//37
        "hasVisited" : false,
        "name" : "The African American Museum in Philadelphia",
        "food" : false,
        "free" : false,
        "setting" : "Indoors",
        "address" : "701 Arch St, Philadelphia, PA 19106",
        "type" : "Museum",
        "area" : "Center City",
        "daysOpen" : ["Sunday", "Thursday", "Friday", "Saturday"],
        "numMatches" : 0
    },
    {//38
        "hasVisited" : false,
        "name" : "Whitman Plaza",
        "food" : true,
        "free" : false,
        "setting" : "Indoors",
        "address" : "330 W Oregon Ave, Philadelphia, PA 19148",
        "type" : "Shopping",
        "area" : "South Philadelphia",
        "daysOpen" : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "numMatches" : 0
    },
    {//39
        "hasVisited" : false,
        "name" : "Glen Foerd",
        "food" : false,
        "free" : true,
        "setting" : "Mixed",
        "address" : "5001 Grant Ave, Philadelphia, PA 19114",
        "type" : "Historical",
        "area" : "Northeast Philadelphia",
        "daysOpen" : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "numMatches" : 0
    },
    {//40
        "hasVisited" : false,
        "name" : "Philadelphia Insectarium and Butterfly Pavilion",
        "food" : false,
        "free" : false,
        "setting" : "Inside",
        "address" : "8046 Frankford Ave, Philadelphia, PA 19136",
        "type" : "Museum",
        "area" : "Northeast Philadelphia",
        "daysOpen" : ["Sunday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "numMatches" : 0
    },
    {//41
        "hasVisited" : false,
        "name" : "Macaroni's",
        "food" : true,
        "free" : false,
        "setting" : "Mixed",
        "address" : "9315 Old Bustleton Ave, Philadelphia, PA 19115",
        "type" : "Restaurant",
        "area" : "Northeast Philadelphia",
        "daysOpen" : ["Sunday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "numMatches" : 0
    },
    {//42
        "hasVisited" : false,
        "name" : "Market at the Fareway",
        "food" : true,
        "free" : false,
        "setting" : "Mixed",
        "address" : "8221 Germantown Ave, Philadelphia, PA 19118",
        "type" : "Food Market",
        "area" : "Northwest Philadelphia",
        "daysOpen" : ["Sunday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "numMatches" : 0
    },
    {//43
        "hasVisited" : false,
        "name" : "Woodmere Art Museum",
        "food" : false,
        "free" : false,
        "setting" : "Mixed",
        "address" : "9201 Germantown Ave, Philadelphia, PA 19118",
        "type" : "Museum",
        "area" : "Northwest Philadelphia",
        "daysOpen" : ["Sunday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "numMatches" : 0
    },
    {//44
        "hasVisited" : false,
        "name" : "University of Pennsylvania Campus",
        "food" : true,
        "free" : true,
        "setting" : "Mixed",
        "address" : "Philadelphia, PA 19104",
        "type" : "Historical",
        "area" : "West Philadelphia",
        "daysOpen" : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "numMatches" : 0
    },
    {//45
        "hasVisited" : false,
        "name" : "Sullivan Progress Plaza Shopping Center",
        "food" : true,
        "free" : false,
        "setting" : "Indoors",
        "address" : "1501 N Broad St, Philadelphia, PA 19122",
        "type" : "Shopping",
        "area" : "North Philadelphia",
        "daysOpen" : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "numMatches" : 0
    },
    {//46
        "hasVisited" : false,
        "name" : "FDR Park",
        "food" : false,
        "free" : true,
        "setting" : "Outside",
        "address" : "1500 Pattison Avenue &, S Broad St, Philadelphia, PA 19145",
        "type" : "Park",
        "area" : "South Philadelphia",
        "daysOpen" : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "numMatches" : 0
    },
    {//47
        "hasVisited" : false,
        "name" : "Fairmount Park",
        "food" : false,
        "free" : true,
        "setting" : "Outside",
        "address" : "Reservoir Dr, Philadelphia, PA 19119",
        "type" : "Park",
        "area" : "West Philadelphia",
        "daysOpen" : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "numMatches" : 0
    },
    {//48
        "hasVisited" : false,
        "name" : "Belmont Plateau",
        "food" : false,
        "free" : true,
        "setting" : "Outside",
        "address" : "1800 Belmont Mansion Dr, Philadelphia, PA 19131",
        "type" : "Park",
        "area" : "West Philadelphia",
        "daysOpen" : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "numMatches" : 0
    },
    {//49
        "hasVisited" : false,
        "name" : "Andorra Shopping Center",
        "food" : true,
        "free" : false,
        "setting" : "Indoors",
        "address" : "701 Cathedral Rd, Philadelphia, PA 19128",
        "type" : "Shopping",
        "area" : "Northwest Philadelphia",
        "daysOpen" : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "numMatches" : 0
    },
    {//50
        "hasVisited" : false,
        "name" : "Philadelphia's Magic Gardens",
        "food" : false,
        "free" : false,
        "setting" : "Mixed",
        "address" : "1020 South St, Philadelphia, PA 19147",
        "type" : "Museum",
        "area" : "South Philadelphia",
        "daysOpen" : ["Sunday", "Monday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "numMatches" : 0
    }
]
for(let i = 0; i < touristAttractionsArray.length; i++) {
    let el = document.createElement("tourist-attraction");//Individual ui element
    for(var attribute in touristAttractionsArray[i]){//Loops over array and sets the attributes
    //of the array objects into the elements
        el.setAttribute(attribute, touristAttractionsArray[i][attribute])
    }
    document.getElementById("attractions-list").appendChild(el);//Appends each element into the ui list
}


function searchFunction(){
    let input = document.getElementById('search-attractions');
    let testingInput = input.value.toUpperCase();
    let el = document.getElementById('attractions-list').children;
    let name;
    for(let i = 0; i < el.length; i++){
        name = el[i].getAttribute('name');
        name = name.toUpperCase();
        if(name.includes(testingInput)){
            el[i].style.display = "";
        }
        else{
            el[i].style.display = "none";
        }
    }
}



const preferenceButtons = document.getElementsByTagName('input');//Gets collection of label elements
for(let i = 1; i < preferenceButtons.length - 1; i++){//Creates event listeners for all labels
    preferenceButtons[i].addEventListener('click', function() { addPreference(preferenceButtons[i].getAttribute('id')) });//event listener passes in the id of the element into the addpreference function    
}

//Represent the user's preferences with 0s or 1s
let settingPreference = 0;//0-no preference //1-indoors //2-outdoors
let costPreference = 0;//0-no preference //1-Must be free
let foodPreference = 0;//0-no preference //1-Must have food
let areaPreference = [0,0,0,0,0,0];
let typePreference = [0,0,0,0,0,0,0];
let daysPreference = [0,0,0,0,0,0,0];

//Activates when a button to select preferences is clicked
function addPreference(id){
    const idType = String(id).substring(0, String(id).indexOf("-"));//idType will be the text of the id before the hypen(ex: days, type)
    const idChoice = String(id).substring(String(id).indexOf("-") + 1);//The choice after the hypen
    switch (idType) {
        case "setting":
            if(idChoice == "one"){//Indoors was clicked
                settingPreference[0] = (settingPreference[0] + 1) % 2; 
            }
            else{//Outside was clicked
                settingPreference[1] = (settingPreference[1] + 1) % 2;
            }
            break;
        case "cost":
            if(idChoice == "one"){//Sure was clicked
                costPreference[0] = (costPreference[0] + 1) % 2; 
            }
            else{//No was clicked
                costPreference[1] = (costPreference[1] + 1) % 2;
            }
            break;
        case "food":
            if(idChoice == "one"){//Sure was clicked
                foodPreference[0] = (foodPreference[0] + 1) % 2; 
            }
            else{//No was clicked
                foodPreference[1] = (foodPreference[1] + 1) % 2;
            }
            break;
        case "area":
            if(idChoice == "one"){//Center city was clicked
                areaPreference[0] = (areaPreference[0] + 1) % 2; 
            }
            else if(idChoice == "two"){//West Philly was clicked
                areaPreference[1] = (areaPreference[1] + 1) % 2;
            }
            else if(idChoice == "three"){//North Philly was clicked
                areaPreference[2] = (areaPreference[2] + 1) % 2;
            }
            else if(idChoice == "four"){//South Philly was clicked
                areaPreference[3] = (areaPreference[3] + 1) % 2;
            }
            else if(idChoice == "five"){//Northwest Philly was clicked
                areaPreference[4] = (areaPreference[4] + 1) % 2;
            }
            else{//Northeast Philly  was clicked
                areaPreference[5] = (areaPreference[5] + 1) % 2;
            }
            break;
        case "type":
            if(idChoice == "one"){//Park was clicked
                typePreference[0] = (typePreference[0] + 1) % 2; 
            }
            else if(idChoice == "two"){//Entertainment was clicked
                typePreference[1] = (typePreference[1] + 1) % 2;
            }
            else if(idChoice == "three"){//Shopping was clicked
                typePreference[2] = (typePreference[2] + 1) % 2;
            }
            else if(idChoice == "four"){//Food market was clicked
                typePreference[3] = (typePreference[3] + 1) % 2;
            }
            else if(idChoice == "five"){//Museum was clicked
                typePreference[4] = (typePreference[4] + 1) % 2;
            }
            else if(idChoice == "six"){//Historical was clicked
                typePreference[5] = (typePreference[5] + 1) % 2;
            }
            else{//Restaurant was clicked
                typePreference[6] = (typePreference[6] + 1) % 2;
            }
            break;
        case "days":
            if(idChoice == "one"){//Sun was clicked
                daysPreference[0] = (daysPreference[0] + 1) % 2; 
            }
            else if(idChoice == "two"){//Mon was clicked
                daysPreference[1] = (daysPreference[1] + 1) % 2;
            }
            else if(idChoice == "three"){//Tues was clicked
                daysPreference[2] = (daysPreference[2] + 1) % 2;
            }
            else if(idChoice == "four"){//Wed market was clicked
                daysPreference[3] = (daysPreference[3] + 1) % 2;
            }
            else if(idChoice == "five"){//Thurs was clicked
                daysPreference[4] = (daysPreference[4] + 1) % 2;
            }
            else if(idChoice == "six"){//Fri was clicked
                daysPreference[5] = (daysPreference[5] + 1) % 2;
            }
            else{//Sat was clicked
                daysPreference[6] = (daysPreference[6] + 1) % 2;
            }
            break;
    }   
}

const attributeOrder = ["setting", "cost", "food", "area", "type", "daysOpen"]
let settingSelect;
let costSelect;
let foodSelect;    

let settingOptions = ['Mixed', 'Indoors', 'Outside']
let costOptions = [false, true]
let foodOptions = [false, true]
let areaOptions = ["Center City", "West Philadelphia", "North Philadelphia", "South Philadelphia", "Northwest Philadelphia", "Northeast Philadelphia"]
let typeOptions = ["Park", "Entertainment", "Shopping", "Food Market", "Museum", "Historical", "Restaurant"]
let daysOptions = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

let followsSetting = touristAttractionsArray;
let followsCost = touristAttractionsArray;
let followsFood = touristAttractionsArray;
let followsArea = touristAttractionsArray;
let followsType = touristAttractionsArray;
let followsDays = touristAttractionsArray;

function filterAttractions(){
    followsSetting = touristAttractionsArray;
    followsCost = touristAttractionsArray;
    followsFood = touristAttractionsArray;
    followsArea = touristAttractionsArray;
    followsType = touristAttractionsArray;
    followsDays = touristAttractionsArray;
    
    settingSelect = document.getElementById('setting-select').value;
    settingFilter = settingOptions[settingSelect]
    
    costSelect = document.getElementById('cost-select').value;
    costFilter = costOptions[costSelect]

    foodSelect = document.getElementById('food-select').value;   
    foodFilter = foodOptions[foodSelect]

    let areaFilter = [];
    for(let i = 0; i < areaPreference.length; i++){
        if(areaPreference[i] == 1){
            areaFilter.push(areaOptions[i]);
        }
    }
    
    let typeFilter = [];
    for(let i = 0; i < typePreference.length; i++){
        if(typePreference[i] == 1){
            typeFilter.push(typeOptions[i]);
        }
    }

    let daysFilter = ["Days Vary"];
    for(let i = 0; i < daysPreference.length; i++){
        if(daysPreference[i] == 1){
            daysFilter.push(daysOptions[i]);
        }
    }

    if(settingSelect > 0){
        followsSetting = touristAttractionsArray.filter(test => test.setting == settingFilter);
    }
    if(costSelect > 0){
        followsCost = touristAttractionsArray.filter(test => test.free == costFilter);
    }
    if(foodSelect > 0){
        followsFood = touristAttractionsArray.filter(test => test.food == foodFilter);
    }
    if(areaPreference.includes(1)){
        followsArea = touristAttractionsArray.filter(test => areaFilter.includes(test.area));
    }
    if(typePreference.includes(1)){
        followsType = touristAttractionsArray.filter(test => typeFilter.includes(test.type));
    }
    if(daysPreference.includes(1)){
        //followsDays = touristAttractionsArray.filter(test => daysFilter.includes(test.daysOpen));
        followsDays = []
        for(let i = 0; i < touristAttractionsArray.length; i++){
            for(let j = 0; j < daysFilter.length; j ++){
                if(touristAttractionsArray[i].daysOpen.includes(daysFilter[j])){
                    followsDays.push(touristAttractionsArray[i])
                    break;
                }
            }
        }
    }
}

function submitForm(){
    filterAttractions();
    for(let i = 0; i < touristAttractionsArray.length; i ++){
        currentAttraction = touristAttractionsArray[i];
        for(let j = 0; j < attributeOrder.length; j++){
            let list;
            if(j == 0){
                list = followsSetting;
            }
            else if(j == 1){
                list = followsCost;
            }
            else if(j == 2){
                list = followsFood;
            }
            else if(j == 3){
                list = followsArea;
            }
            else if(j == 4){
                list = followsType;
            }
            else{
                list = followsDays;
            }
            if(list.length > 0){
                for(let x = 0; x < list.length; x++)
                {
                    if(j == 0){
                        if(list[x].name == currentAttraction.name || currentAttraction.setting == "Mixed"){
                            currentAttraction.numMatches++;
                            break;
                        }
                    }
                    else{
                        if(list[x].name == currentAttraction.name){
                            currentAttraction.numMatches++;
                        }
                    }
                }
            }
        }
    }
    let allMet = touristAttractionsArray.filter(test => test.numMatches == 6)
    let allMetNames = []
    for(let i = 0; i < allMet.length; i ++){
        allMetNames.push(allMet[i].name.toUpperCase())
        console.log(allMet[i])
    }
    let el = document.getElementById('attractions-list').children;
    for(let i = 0; i < el.length; i++){
        let name = el[i].getAttribute('name').toUpperCase();
        if(allMetNames.includes(name)){
            el[i].style.display = "";
        }
        else{
            el[i].style.display = "none";
        }
    }
    for(let i = 0; i < touristAttractionsArray.length; i ++){
        touristAttractionsArray[i].numMatches = 0 ;
    }    
    
}