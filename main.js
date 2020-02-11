console.log("Hello, Simon Pet Adoption Agency!");


const available_pets = [
    {
    image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/afghan-hound-1550810725.jpg?crop=1xw:1xh;center,top&resize=980:*",
    alt: "a beautiful white and gray afghan hound dog",
    name: "Harry, the Afghan Hound",
    color: "White and gray",
    specialSkill: "Loves hugs",
    typeOfPet: "Dog"
    },
    {
    image: "https://cdn1-www.cattime.com/assets/uploads/2012/03/1-Maine-Coon-Cat-breed.jpg",
    alt: "a white, gray, and black cat looking straight at the viewer",
    name: "Katahdin, the Maine Coon Cat",
    color: "White, gray, and black",
    specialSkill: "Kid-friendly",
    typeOfPet: "Cat"
    },
    {
    image: "https://cdn2-www.cattime.com/assets/uploads/2012/07/siamese-cat-breed.jpg",
    alt: "siamese cat with dark brown feet and head and tan body",
    name: "Finny, the Siamese Cat",
    color: "Brown and tan",
    specialSkill: "Super social",
    typeOfPet: "Cat"
    },
    {
    image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bernese-mountain-dog-1550810725.jpg?crop=1xw:1xh;center,top&resize=980:*",
    alt: "a bernese mountain dog sitting on a trail covered with fall-colored leaves",
    name: "Faith, the Bernese Mountain Dog",
    color: "Black, brown, and white",
    specialSkill: "Protector",
    typeOfPet: "Dog"
    },
    {
    image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/boxer-1550810733.jpg?crop=1xw:1xh;center,top&resize=980:*",
    alt: "brown and white boxer running towards the viewer",
    name: "Happy, the Boxer",
    color: "Light brown and white",
    specialSkill: "Loves to play fetch",
    typeOfPet: "Dog"
    },
    {
    image: "http://elalci.com/wp-content/uploads/2017/11/TRex1.jpg",
    alt: "a Tyrannosaurus Rex dinosaur opening its mouth wide",
    name: "Tommy, the T-rex",
    color: "Green",
    specialSkill: "Roars super-loudly",
    typeOfPet: "Dino"
    },
    {
    image: "https://cdn1-www.cattime.com/assets/uploads/2012/07/bengal-cat-breed-picture.jpg",
    alt: "brown cat with black spot looking straight at the viewer",
    name: "Tiger, the Bengal Cat",
    color: "Brown",
    specialSkill: "Dog-friendly cat",
    typeOfPet: "Cat"
    }
];

const buildPetCards = (arrayOfPets) => {
    let domString = '';
    for(i = 0; i < arrayOfPets.length; i++) {
        domString += '<div class="flip-card pet">';
            domString += '<div class="flip-card-inner">';
                domString += '<div class="flip-card-front">';
                    domString += `<h4>${arrayOfPets[i].name}</h4>`;
                    domString += `<img src=${arrayOfPets[i].image} alt=${arrayOfPets[i].alt}>`;
                    domString += `<p>Color: ${arrayOfPets[i].color}</p>`;
                    domString += `<p>Special Skill: ${arrayOfPets[i].specialSkill}</p>`;
                    if(arrayOfPets[i].typeOfPet === "Cat") {
                        domString += `<h5 class="cat">${arrayOfPets[i].typeOfPet}</h5>`;
                    } else if(arrayOfPets[i].typeOfPet === "Dog") {
                        domString += `<h5 class="dog">${arrayOfPets[i].typeOfPet}</h5>`;
                    } else if(arrayOfPets[i].typeOfPet === "Dino") {
                        domString += `<h5 class="dino">${arrayOfPets[i].typeOfPet}</h5>`;
                    }
                domString += '</div>';
                domString += '<div class="flip-card-back">';
                    domString += `<h1>${arrayOfPets[i].name}!!!!!!!</h1>`;
                domString += '</div>';
            domString += '</div>';
            domString += '</div>';
    };
    const printToDom = (divId, textToPrint) => {
        const selectedDiv = document.getElementById(divId);
       selectedDiv.innerHTML = textToPrint;
    };
    printToDom('petList', domString);
};

const onlyCats = () => {
    const theCats = [];
    for (let i=0; i < available_pets.length; i++) {
        if (available_pets[i].typeOfPet === "Cat") {
            theCats.push(available_pets[i]);
        };
    };
    buildPetCards(theCats);
};

const onlyDogs = () => {
    const theDogs = [];
    for (let i=0; i < available_pets.length; i++) {
        if (available_pets[i].typeOfPet === "Dog") {
            theDogs.push(available_pets[i]);
        };
    };
    buildPetCards(theDogs);
};

const onlyDinos = () => {
    const theDinos = [];
    for (let i=0; i < available_pets.length; i++) {
        if (available_pets[i].typeOfPet === "Dino") {
            theDinos.push(available_pets[i]);
        };
    };
    buildPetCards(theDinos);
};

const all = () => {
    buildPetCards(available_pets);
};

const events = () => {
    document.getElementById('Cat').addEventListener('click', onlyCats);
    document.getElementById('Dog').addEventListener('click', onlyDogs);
    document.getElementById('Dino').addEventListener('click', onlyDinos);
    document.getElementById('All').addEventListener('click', all);
}; 

const init = () => {
    buildPetCards(available_pets);
    events();
}; 

init();
