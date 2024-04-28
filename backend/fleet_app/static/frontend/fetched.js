let baseUrl = 'http://127.0.0.1:8000'
//JÁRMŰVEK
let jarmuvek = [];
async function setJarmuvek(){
  await fetch(baseUrl + '/api/jarmuvek').then(res => res.json()).then(data => jarmuvek.push(data));
}

let basicJarmuvek = [];
async function setBasicJarmuvek(){
    await fetch(baseUrl + '/api/jarmubykategoria/3').then(res => res.json()).then(data => basicJarmuvek.push(data));
}

let comfortJarmuvek = [];
async function setComfortJarmuvek(){
    await fetch(baseUrl + '/api/jarmubykategoria/2').then(res => res.json()).then(data => comfortJarmuvek.push(data));
}

let premiumJarmuvek = [];
async function setPremiumJarmuvek(){
    await fetch(baseUrl + '/api/jarmubykategoria/1').then(res => res.json()).then(data => premiumJarmuvek.push(data));
}

//MÁRKÁK
let markak = [];
async function setMarkak(){
  await fetch(baseUrl + '/api/markak').then(res => res.json()).then(data => markak.push(data));
}

//JÁRMŰ KATEGÓRIÁK
let jarmuKategoriak = [];
async function setJarmuKategoriak(){
  await fetch(baseUrl + '/api/jarmukategoria').then(res => res.json()).then(data => jarmuKategoriak.push(data));
}

//FOGLALÁSOK
let foglalasok = [];
async function setFoglalasok(){
    await fetch(baseUrl + '/api/foglalasok').then(res => res.json()).then(data => foglalasok.push(data));
}

async function fetch_betolt(){
    await setJarmuvek();
    await setBasicJarmuvek();
    await setComfortJarmuvek();
    await setPremiumJarmuvek();
    await setMarkak();
    await setJarmuKategoriak();
    await setFoglalasok();
}