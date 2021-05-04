let input = document.querySelector('#input');
let searchBtn = document.querySelector('#search');
let apiKey = '88ce7a92-286d-4717-91b7-c2a548e9b195';
let notFound = document.querySelector('.not__found');
let defBox = document.querySelector('.def');
let phoneticsBox = document.querySelector('.phonetics');

let loading = document.querySelector('.loading');

searchBtn.addEventListener('click', function(e){

    // clear data 
    notFound.innerText = '';
    defBox.innerText = '';
    phoneticsBox.innerText = '';


    // Get input data
    let word = input.value;
    // call API get data
    if (word === '') {
        return;
    }

    getData(word);
})


async function getData(word) {
    loading.style.display = 'block';
    // Ajax call 
    const response = await fetch(`https://www.dictionaryapi.com/api/v3/references/learners/json/${word}?key=${apiKey}`);
    const data = await response.json();
    // if empty result 
    if (!data.length) {
        loading.style.display = 'none';
        notFound.innerText = ' No result found';
        return;
    }

    // Result found 
    loading.style.display = 'none';
    let defination = data[0].shortdef[0];
    let phonetics = data[0].fl;
    phoneticsBox.innerText= "(" + phonetics + ")";
    defBox.innerText = "-" + " " + defination;

    
    console.log(data);
}


