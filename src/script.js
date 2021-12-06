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
/*
let attractionArray = [
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
    }
];
*/


