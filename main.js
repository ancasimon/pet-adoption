console.log("Hello, Simon Pet Adoption Agency!");


const available_pets = [
    {
    image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/afghan-hound-1550810725.jpg?crop=1xw:1xh;center,top&resize=980:*",
    name: "Harry, the Afghan Hound",
    color: "Tan",
    specialSkill: "Loves hugs",
    typeOfPet: "Dog"
    },
    {
    image: "https://cdn1-www.cattime.com/assets/uploads/2012/03/1-Maine-Coon-Cat-breed.jpg",
    name: "Katahdin, the Maine Coon Cat",
    color: "Black and white",
    specialSkill: "Kid-friendly",
    typeOfPet: "Cat"
    },
    {
    image: "https://cdn2-www.cattime.com/assets/uploads/2012/07/siamese-cat-breed.jpg",
    name: "Finny, the Siamese Cat",
    color: "Brown and tan",
    specialSkill: "Super social",
    typeOfPet: "Cat"
    },
    {
    image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bernese-mountain-dog-1550810725.jpg?crop=1xw:1xh;center,top&resize=980:*",
    name: "Faith, the Bernese Mountain Dog",
    color: "Black and tan",
    specialSkill: "Protector",
    typeOfPet: "Dog"
    },
    {
    image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/boxer-1550810733.jpg?crop=1xw:1xh;center,top&resize=980:*",
    name: "Happy, the Boxer",
    color: "Light brown",
    specialSkill: "Loves to play fetch",
    typeOfPet: "Dog"
    },
    {
    image: "https://cdn1-www.cattime.com/assets/uploads/2012/07/bengal-cat-breed-picture.jpg",
    name: "Tiger, the Bengal Cat",
    color: "Brown",
    specialSkill: "Dog-friendly cat",
    typeOfPet: "Cat"
    }
];

// console.log(available_pets);

const buildPetCards = () => {
    let domString = '';
    for(i = 0; i < available_pets.length; i++) {
        domString += '<div class="pet">';
        domString += `<h4>${available_pets[i].name}</h4>`;
        domString += `<img src=${available_pets[i].image} alt=${available_pets[i].name}>`;
        domString += `<p>Color: ${available_pets[i].color}</p>`;
        domString += `<p>Special Skill: ${available_pets[i].specialSkill}</p>`;
        if(available_pets[i].typeOfPet === "Cat") {
            domString += `<h5 class="cat">${available_pets[i].typeOfPet}</h5>`;
        } else if(available_pets[i].typeOfPet === "Dog") {
            domString += `<h5 class="dog">${available_pets[i].typeOfPet}</h5>`;
        }
        domString += '</div>';
    };
    const printToDom = (divId, textToPrint) => {
        const selectedDiv = document.getElementById(divId);
       selectedDiv.innerHTML = domString;
    };
    printToDom('petList', domString);
};

buildPetCards();
