const url="https://thesimpsonsquoteapi.glitch.me/quotes";
const btn=document.getElementById("btn-generate");
const text=document.getElementById("text");
const img=document.getElementById("img");

const viewcontend=(data)=>{
    text.innerText=data[0].character;
    img.setAttribute("src",data[0].image);
}

const fetchSimpsom=()=>{
    fetch(url)
    .then(responce=> responce.json())
    .then(data => viewcontend(data))
}

// const fetchSimpsom=()=>{
//     fetch(url)
//     .then(responce=> responce.json())
//     .then(data => {
//         text.innerText=data[0].character,
//         img.setAttribute("src",data[0].image)
//     })
// }

btn.addEventListener('click',fetchSimpsom);
