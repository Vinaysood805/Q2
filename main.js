let dealsSection  = document.getElementById('deals');
let requestURL = 'https://jessicagilfillan.github.io/Final_Exam_Prep/Q3/cats.json';

let request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';

request.send();

request.onload = function() {
    let cats = request.response;
    console.log(cats);
    dealInfo(cats);
}

function dealInfo(jsonObj) {
    let dealInfo = jsonObj['cats']
    for (let i=0; i<dealInfo.length; i++){
        let div = document.createElement('div');
        div.setAttribute('class', 'col-md-3');
        let name = document.createElement('h3');
        let species = document.createElement('p');
        let favFoods = document.createElement('p');
        let age = document.createElement('p');
        name.textContent = "cat name: " + dealInfo[i].name;
        species.textContent = "species: " + dealInfo[i].species;
        favFoods.textContent = "favourite foods: " + dealInfo[i].favFoods[0] + ", " + dealInfo[i].favFoods[1] + ", " + dealInfo[i].favFoods[2];
        age.textContent = "age: " + dealInfo[i].age;

        div.appendChild(name);
        div.appendChild(species);
        div.appendChild(favFoods);
        div.appendChild(age);
        dealsSection.appendChild(div);
    }
}