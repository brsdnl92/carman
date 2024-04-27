let baseUrl = 'http://127.0.0.1:8000'
//JÁRMŰVEK
let jarmuvek = [];
async function setJarmuvek(){
  await fetch(baseUrl + '/api/jarmuvek').then(res => res.json()).then(data => jarmuvek.push(data));
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
    await setMarkak();
    await setJarmuKategoriak();
    await setFoglalasok();
}