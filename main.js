console.log("Hello, Simon Pet Adoption Agency!");


const available_pets = [
    {
    image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/afghan-hound-1550810725.jpg?crop=1xw:1xh;center,top&resize=980:*",
    name: "Harry, the Afghan Hound",
    color: "tan",
    specialSkill: "loves hugs",
    typeOfPet: "Dog"
    },
    {
    image: "https://cdn1-www.cattime.com/assets/uploads/2012/03/1-Maine-Coon-Cat-breed.jpg",
    name: "Katahdin, the Maine Coon Cat",
    color: "black and white",
    specialSkill: "kid-friendly",
    typeOfPet: "Cat"
    },
    {
    image: "https://cdn2-www.cattime.com/assets/uploads/2012/07/siamese-cat-breed.jpg",
    name: "Finny, the Siamese Cat",
    color: "brown and tan",
    specialSkill: "super social",
    typeOfPet: "Cat"
    },
    {
    image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bernese-mountain-dog-1550810725.jpg?crop=1xw:1xh;center,top&resize=980:*",
    name: "Old Guard, the Bernese Mountain Dog",
    color: "black and tan",
    specialSkill: "protector",
    typeOfPet: "Dog"
    },
    {
    image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/boxer-1550810733.jpg?crop=1xw:1xh;center,top&resize=980:*",
    name: "Happy, the Boxer",
    color: "light brown",
    specialSkill: "loves to play fetch",
    typeOfPet: "Dog"
    },
    {
    image: "https://cdn1-www.cattime.com/assets/uploads/2012/07/bengal-cat-breed-picture.jpg",
    name: "Tiger, the Bengal Cat",
    color: "brown",
    specialSkill: "dog-friendly cat",
    typeOfPet: "Cat"
    }
];

// console.log(available_pets);

const buildPetCards = () => {
    let domString = '';
    for(i = 0; i < available_pets.length; i++) {
        domString += '<div class="pet">';
        domString += `<h2>${available_pets[i].name}</h2>`;
        domString += `<img src=${available_pets[i].image} alt=${available_pets[i].name}>`;
        domString += `<p>Color: ${available_pets[i].color}</p>`;
        domString += `<p>Special Skill: ${available_pets[i].specialSkill}</p>`;
        domString += `<h4>${available_pets[i].typeOfPet}</h4>`;
        domString += '</div>';
    };
    const printToDom = (divId, textToPrint) => {
        const selectedDiv = document.getElementById(divId);
       selectedDiv.innerHTML = domString;
    };
    printToDom('petList', domString);
};

buildPetCards();
