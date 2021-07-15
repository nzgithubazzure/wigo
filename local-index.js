const dogs = []

main();

async function main() {
    await loadDogs();
    displayDogs();
}

async function loadDogs() {
    const response = await fetch('wigo/api/dogs');
    const json = await response.json();

    for (let dog of json.dogs) {
        dogs.push(dog);
    }
}

function displayDogs() {
    for (let dog of dogs) {
        addDogToUI(dog);
    }
}

function addDogToUI(dog) {
    const dogUI = document.createElement('a');
    dogUI.className = 'list-group-item';
    dogUI.innerText = dog.name;

    document.getElementById('dogs-list').appendChild(dogUI);
}
