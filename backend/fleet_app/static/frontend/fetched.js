let baseUrl = 'http://127.0.0.1:8000/api/'
//JÁRMŰVEK
async function setJarmuvek(){
  let response = await fetch(baseUrl + 'jarmuvek').then(res => res.json());
  return response;
}

async function getJarmuvek(){
    let data = await setJarmuvek();
    return data;
}

let jarmuvek = [];
jarmuvek.push(getJarmuvek());

//MÁRKÁK
async function setMarkak(){
  let response = await fetch(baseUrl + 'markak').then(res => res.json());
  return response;
}

async function getMarkas(){
    let data = await setMarkak();
    return data;
}

let markak = [];
markak.push(getMarkas());

async function getMarkaNev(id){
    let markaNev = "márka";
    await markak[0].then(marka => marka.forEach(value =>{
        if (id == value.id){
            markaNev = value.nev;
        }
    }));
    
    return markaNev;
}

//JÁRMŰ KATEGÓRIÁK
async function setJarmuKategoriak(){
  let response = await fetch(baseUrl + 'jarmukategoria').then(res => res.json());
  return response;
}

async function getJarmuKategoriak(){
    let data = await setJarmuKategoriak();
    return data;
}

let jarmuKategoriak = [];
jarmuKategoriak.push(getJarmuKategoriak());

console.log(jarmuKategoriak);

async function getJarmuKategoriaNev(id){
    let jarmuKategoriaNev = "kategória";
    await jarmuKategoriak[0].then(jarmuKategoria => jarmuKategoria.forEach(value => {
        if (id == value.id){
            jarmuKategoriaNev = value.nev;
        }
    }));

    return jarmuKategoriaNev;
}


//FOGLALÁSOK
async function setFoglalasok(){
    let response = await fetch(baseUrl + 'foglalasok').then(res => res.json());
    return response;
}

async function getFoglalasok(){
    let data = await setFoglalasok();
    return data;
}

let foglalasok = [];
foglalasok.push(getFoglalasok());

function isElerheto2(foglalas_vege){
    let elerheto;
    let today = new Date();
    if (Date.parse(foglalas_vege) > today){
        elerheto = false;
    }else{
        elerheto = true;
    }

    return elerheto;
}

async function isElerheto(cb, jarmu_id){
    let elerheto = "elérhető";
    await foglalasok[0].then(foglalas => foglalas.forEach(value => {
        if (jarmu_id == value.jarmu_id && cb(value.foglalas_vege)==false){
            elerheto = "nem elérhető";        
        }
    }));

    return elerheto;
}