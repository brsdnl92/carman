//JS FÁJLOK BETÖLTÉSE
// function loadScript(url)
// {    
//     var head = document.getElementsByTagName('head')[0];
//     var script = document.createElement('script');
//     script.type = 'text/javascript';
//     script.src = url;
//     script.integrity = "sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN";
//     script.crossOrigin = "anonymous";
//     head.appendChild(script);
// }

// loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js');

//SZŰRŐSÁV MÁRKA
async function markaSzuroSav(){
    let nav = document.getElementById('navfilter');
    let fieldsetMarka = document.createElement('fieldset');
    nav.appendChild(fieldsetMarka);
    let legendMarka = document.createElement('legend');
    legendMarka.innerText = "Márka";
    fieldsetMarka.appendChild(legendMarka);
    let divMarka = document.createElement('div');
    divMarka.className = "form-check form-switch";
    fieldsetMarka.appendChild(divMarka);
    markak[0].then(marka => marka.forEach(value => {
        var inputMarka = document.createElement('input');
        inputMarka.className = 'form-check-input';
        inputMarka.type = 'checkbox';
        inputMarka.id = value.nev;
        inputMarka.name = 'inputMarka';
        inputMarka.setAttribute('onClick','setJarmuvekSzurt(jarmuvekRenderel)');
        inputMarka.checked = true;
        inputMarka.role='switch';
        divMarka.appendChild(inputMarka);

        let labelMarka = document.createElement('label');
        labelMarka.className = 'form-check-label';
        labelMarka.htmlFor = inputMarka.id;
        labelMarka.innerText = inputMarka.id;
        divMarka.appendChild(labelMarka);

        let brMarka = document.createElement('br');
        divMarka.appendChild(brMarka);
    }));
}

markaSzuroSav();

//SZŰRŐSÁV JÁRMŰ KATEGÓRIA
async function jarmuKategoriaSzuroSav(){
    nav = document.getElementById('navfilter');
    let fieldsetJarmuKat = document.createElement('fieldset');
    nav.appendChild(fieldsetJarmuKat);
    let legendJarmuKat = document.createElement('legend');
    legendJarmuKat.innerText = "Kategória";
    fieldsetJarmuKat.appendChild(legendJarmuKat);
    let divJarmuKat = document.createElement('div');
    divJarmuKat.className = "form-check form-switch";
    fieldsetJarmuKat.appendChild(divJarmuKat);
    jarmuKategoriak[0].then(jarmuKategoria => jarmuKategoria.forEach(value =>{
    {
        let inputJarmuKat = document.createElement('input');
        inputJarmuKat.className = 'form-check-input';
        inputJarmuKat.type = 'checkbox';
        inputJarmuKat.id = value.id;
        inputJarmuKat.name = 'inputJarmuKat';
        inputJarmuKat.setAttribute('onClick','setJarmuvekSzurt(jarmuvekRenderel)');
        inputJarmuKat.checked = true;
        inputJarmuKat.role='switch';
        divJarmuKat.appendChild(inputJarmuKat);

        let labelJarmukat = document.createElement('label');
        labelJarmukat.className = 'form-check-label';
        labelJarmukat.htmlFor = inputJarmuKat.id;
        labelJarmukat.innerText = value.nev;
        divJarmuKat.appendChild(labelJarmukat);

        let brJarmukat = document.createElement('br');
        divJarmuKat.appendChild(brJarmukat);
    }}));
}

jarmuKategoriaSzuroSav();

let inputElerhetoseg;
//SZŰRŐSÁV ELÉRHETŐSÉG
async function elerhetosegSzuroSav(){
    nav = document.getElementById('navfilter');
    let fieldsetElerhetoseg = document.createElement('fieldset');
    nav.appendChild(fieldsetElerhetoseg);
    let legendElerhetoseg = document.createElement('legend');
    legendElerhetoseg.innerText = "Elérhetőség";
    fieldsetElerhetoseg.appendChild(legendElerhetoseg);
    let divElerhetoseg = document.createElement('div');
    divElerhetoseg.className = "form-check form-switch";
    fieldsetElerhetoseg.appendChild(divElerhetoseg);
    inputElerhetoseg = document.createElement('input');
    inputElerhetoseg.className = 'form-check-input';
    inputElerhetoseg.type = 'checkbox';
    inputElerhetoseg.id = 'elerhetoseg';
    inputElerhetoseg.setAttribute('onClick','setJarmuvekSzurt(jarmuvekRenderel)');
    inputElerhetoseg.checked = true;
    inputElerhetoseg.role='switch';
    divElerhetoseg.appendChild(inputElerhetoseg);

    let labelElerhetoseg = document.createElement('label');
    labelElerhetoseg.className = 'form-check-label';
    labelElerhetoseg.htmlFor = inputElerhetoseg.id;
    labelElerhetoseg.innerText = 'igen';
    divElerhetoseg.appendChild(labelElerhetoseg);

    let brElerhetoseg = document.createElement('br');
    divElerhetoseg.appendChild(brElerhetoseg);
}

elerhetosegSzuroSav();

//SZŰRÉS
async function setJarmuvek(){
    let tomb = [];
    var inputMarkas = document.getElementsByName('inputMarka');
    var inputJarmuKats = document.getElementsByName('inputJarmuKat');
    jarmuvek[0].then(jarmu => jarmu.forEach(async value => {
        for (var i = 0; i < inputMarkas.length; i++) {
            
            if (inputMarkas.item(i).id == await getMarkaNev(value.marka_id) && inputMarkas.item(i).checked == true){
                for(let j = 0;j < inputJarmuKats.length; j++){
                    if (inputJarmuKats.item(j).id == value.jarmu_kategoria_id && inputJarmuKats.item(j).checked == true){
                        if (inputElerhetoseg.checked == true && await isElerheto(isElerheto2, value.id) == "elérhető"){
                            tomb.push(value);
                        }
                    }    
                }
            }
        }
   }
    ));

    return tomb;
}

async function setJarmuvekSzurt(cb){
    let jarmuvek_szurt=[];
    jarmuvek_szurt.push(setJarmuvek()); 
    cb(jarmuvek_szurt);
}

async function jarmuvekRenderel(jarmuvek_szurt){
    
    console.log(jarmuvek_szurt);
    var jarmuvekEl = document.getElementById('jarmuvek');
    let jarm = await jarmuvek_szurt;
    if (jarmuvekEl!=null){
        jarmuvekEl.remove();
        jarmuvekEl = document.createElement('div');
        jarmuvekEl.id = 'jarmuvek';
        var main = document.getElementById('main');
        main.appendChild(jarmuvekEl);
    }
        jarm[0].then(jarmu => jarmu.forEach(async value =>{
        console.log("hello");
        let jarmuCol = document.createElement('div');
        jarmuCol.className = 'col';

        jarmuvekEl.appendChild(jarmuCol);

        let jarmuCard = document.createElement('div');
        jarmuCard.className = 'card';
        jarmuCard.setAttribute('style','width: 18rem;');
        jarmuCol.appendChild(jarmuCard);

        let jarmuKep = document.createElement('img');
        jarmuKep.src = 'http://127.0.0.1:8000/static' + value.kep;
        jarmuKep.className = 'card-img-top';
        jarmuCard.appendChild(jarmuKep);

        let jarmuCardBody = document.createElement('div');
        jarmuCardBody.className = 'card-body';
        jarmuCard.appendChild(jarmuCardBody);

        let jarmuTitle = document.createElement('h5');
        jarmuTitle.className = 'card-title';
        let markaNev = await getMarkaNev(value.marka_id);
        jarmuTitle.innerText = markaNev + ' ' + value.tipus;
        jarmuCardBody.appendChild(jarmuTitle);

        let jarmuText = document.createElement('p');
        jarmuText.className = 'card-text';
        let jarmuKatNev = await getJarmuKategoriaNev(value.jarmu_kategoria_id);
        let elerheto = await isElerheto(isElerheto2, value.id)
        jarmuText.innerText = value.rendszam + ' | ' +  jarmuKatNev + ' | ' + elerheto;
        jarmuCardBody.appendChild(jarmuText);

        let jarmuBtn = document.createElement('a');
        jarmuBtn.href = '#';
        jarmuBtn.className = 'btn btn-primary';
        jarmuBtn.innerText = 'Adatok';
        jarmuCardBody.appendChild(jarmuBtn);
    }));
}

setJarmuvekSzurt(jarmuvekRenderel);
//jarmuvekRenderel();
