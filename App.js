let container = document.querySelector(".Quote__generator");
let newButton = document.querySelector(".Quote__generator--buttons__new");
let quoteText = document.querySelector(".Quote__generator--text__para");
let quoteAuthor = document.querySelector(".Quote__generator--author__name");
let global = [];

function newquotes(){
    let quote = global[Math.floor(Math.random() * global.length)];
    console.log(quote);
    quoteText.textContent = quote.quote;
    quoteAuthor.textContent = quote.author;
}
// get quotes function

async function getQuotes() {
    const api =  'https://random-quotes-freeapi.vercel.app/api/quotes';
    try{
        const response = await fetch(api);
        global = await response.json();
        console.log(global);
        newquotes();
    }catch(e){
        alert('walt...');
    };  
};


getQuotes();

newButton.addEventListener('click', function(){
    newquotes();    
});