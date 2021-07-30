
setInterval(() => consol.log(Cyk!)100);

console.log(ziomekZbetonu);
--------------------------
heckIsbn = ()=>{
    let isbn = Number(prompt('podaj 13 cyfrowy nr ISBN'));
    if(!isNaN(isbn) && isbn.toString().length ===13){
        return isbn;
    } else {
        alert('Podałeś zbyt krótki numer, lub użyłeś innych znaków niż cyfry, spróbuj jeszcze raz')
        checkIsbn();
    }

};

fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${checkIsbn()}`)
    .then((response)=>response.json())
    .then((data)=>{
        const book = data.items[0].volumeInfo;
        console.log(data);
        console.log(`Tytuł książki to: ${book.title}, Autorami są: ${book.authors}`)})
    .catch((err)=>console.log('coś nie działa', err));

----------------------------
const secondP = document.querySelector('.second-p');

secondP.classList.add ('crazy-stuff');
undefined

secondP.classList
DOMTokenList(3) ["second-p", "highlight", "crazy-stuff", value: "second-p highlight crazy-stuff"]

secondP.classList.remove('crazy-stuff')


--------------------------------------
localStorage.setItem('name', 'krzychu');
localStorage.getItem('name');
----------------------------------------
//get last visit date
const lastSavedVisitDate = localStorage.getItem('last visit');

if (lastSavedVisitDate === null) {
    console.log('You are first here!');
} else {
    console.log (`You were here last time on , ${lastSavedVisitDate}.`)
}


//set last visit date
const date= new Date();
const dateString = date.toString();

localStorage.setItem('last visit', dateString);
---------------------------------
   
const btn =document.querySelector('.btn-toggle-color');
const h1 = document.querySelector('h1');

let counter = Number(localStorage.getItem('counter'));
h1.innerText = String(counter);

btn.addEventListener('click' () =>{
    h1.innerText = String(++counter);
    localStorage.setItem('counter', String(counter));
});


});
-----------------------------------


    const btn =document.querySelector('.btn-toggle-color');
    const h1 = document.querySelector('h1');

    let counter = Number(localStorage.getItem('counter'));
    h1.innerText = String(counter);

    btn.addEventListener('click' ( =>{
        h1.innerText = String(++counter);
        localStorage.setItem('counter', String(counter));
    });


}))


-------------------------------

{
    "name":["Jan","Kowalski"],
    "email" : "jan@Kowalski.pl",
    "settings" : {
      "sound" : "off",
      "fullScreen": true,
      "newsDisplayed" : 5
    },
    "Characters" :[{"Conen":{
                      "level":10,
                      "items":["topor"],
                      "hungry": true
                    }
                  },{
                  "Druzzt":{
                    "level":4,
                    "items":["sejmitar","sejmitar"],
                    "hungry": true
                  }
                  },{
                  "Garelt":{
                    "level":10,
                    "items":["miecz","miecz"],
                    "hungry": true
                  }
                  }]
  }

  ---------------------

  const GoodMood =document.querySelector('.GoodMoodFeeling');
const BadMood = document.querySelector('.BadMoodFeeling');

    const goodMoodFeeling = localStorage.getItem('goodClicks');
    const badMoodFeeling = localStorage.getItem('badClicks');





    let counter = Number(localStorage.getItem(''));
    GoodMood.innerText = String(counter);

    GoodMood.addEventListener('goodClicks' () =>{
        h1.innerText = (++counter);
        localStorage.setItem('counter', String(counter));
    });


    };
    localStorage.setItem('goodClicks', JSON.stringify())
    localStorage.setItem('badClicks', JSON.stringify())
}

if

------------------------
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">

    <title>Title</title>
    <style>
        .GoodMood-btn {
            background-color:  forestgreen;
            color: white;
            font-size: 28px;
        }
        .BadMood-btn {
            background-color:  darkred;
            color: white;
            font-size: 28px;
        }
    </style>
    </head>
    <body>

        <h1>Your mood stats</h1>

        <p1>How are you feeling today sir?</p1>

        <button class="GoodMood-btn"> Feeling Good Mood</button>

        <button class="BadMood-btn">Feeling Bad Mood</button>
        <p class = "text"></p>

        <script src="app.js"></script>
</body>
</html>
------------------------

const btn2= document.querySelector('.GoodMood-btn');
const btn3 = document.querySelector('.BadMood-btn');
const wyniki = document.querySelector('.text');

let liczDobrych = Number(localStorage,getItem('dobrze'));
let liczZlych = Number(localStorage.getItem('zle'));
wyniki.innerText = `Czules sie dobrze: ${liczDobrych} i tyle razy przycisk zle:${liczZlych}`

function counterGoodDays (){
    if (liczDobrych === null) {
        wyniki.innerText = 'Jeszcze nie wiesz co to zycie'
    }else {
        wyniki.innerText = `Tyle razy kliknales dobrze ${++liczDobrych},a tyle razy kliknales ${liczZlych}`
        localStorage.setItem('dobrze', liczDobrych.toString());
    }
}
function counterBadDays (){
    if (liczZlych === null) {
        wyniki.innerText = 'Jeszcze nie wiesz co to zycie'
    }else {
        wyniki.innerText = `Tyle razy kliknales dobrze ${liczDobrych},a tyle razy kliknales ${++liczZlych}`
        localStorage.setItem('zle', liczZlych.toString());
    }
}




btn2.addEventListener('click', counterGoodDays)
btn3.addEventListener('click', counterBadDays)

-----------------------------------------

const obj = {
   name: 'Jan',
    surname: 'Spolsky',
    age: 33,
};
//const keys = Object.keys(obj);
//console.log(keys);

//const values = Object.values(obj);
//console.log(values);

const entries = Object.entries(obj);

for(const [raper, plyta] of entries) {
    console.log(raper,plyta);
}


----------------------------------------
const ar = ['Anna', 'Andrzej', 'Bartek', 'Jakub'];

const names = ar.reduce((prev, curr) => {
    if (curr[0] === 'A') {
        return `${prev} ${curr}`;
    } else {
        return prev;
    }
}, '');
console.log(names);

----------------------
const ar = ['Anna', 'Andrzej', 'Bartek', 'Jakub'];

const namesLength = ar.reduce((prev, curr) =>{
    return prev + curr.length;
}, 0);

console.log(namesLength);
---------------------------------------------------
shopBasket.addToTotalValue(-10);
console.log(shopBasket);

