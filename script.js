let allFruitsBox = document.querySelector('.allFruits');
let fruits = [
    {
     fruta:'Banana'
    },
    {
        fruta: 'Morango'
    },
    {
        fruta: 'Goiaba'
    },
    {
        fruta: 'Pêssego'
    }
];

for(let i=0; i<fruits.length;i++){
    let createFruit = document.createElement('button');
    createFruit.innerText = fruits[i].fruta;
    createFruit.classList.add('fruit');

    allFruitsBox.appendChild(createFruit);
}

