//import { jarmuvekRenderel } from './jarmuvek.js';

//SZŰRŐSÁV MÁRKA
function markaSzuroSav(){
    let nav = document.getElementById('navfilter');
    let fieldsetMarka = document.createElement('fieldset');
    nav.appendChild(fieldsetMarka);
    let legendMarka = document.createElement('legend');
    legendMarka.innerText = "Márka";
    fieldsetMarka.appendChild(legendMarka);
    let divMarka = document.createElement('div');
    divMarka.className = "form-check form-switch";
    fieldsetMarka.appendChild(divMarka);
    markak.forEach(element => {
        element.forEach(marka => {
        var inputMarka = document.createElement('input');
        inputMarka.className = 'form-check-input';
        inputMarka.type = 'checkbox';
        inputMarka.id = marka.nev;
        inputMarka.name = 'inputMarka';
        inputMarka.setAttribute('onClick','jarmuvekRenderel(getSzurtJarmuvek())');
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
    })});
}


//SZŰRŐSÁV JÁRMŰ KATEGÓRIA
function jarmuKategoriaSzuroSav(){
    let nav = document.getElementById('navfilter');
    let fieldsetJarmuKat = document.createElement('fieldset');
    nav.appendChild(fieldsetJarmuKat);
    let legendJarmuKat = document.createElement('legend');
    legendJarmuKat.innerText = "Kategória";
    fieldsetJarmuKat.appendChild(legendJarmuKat);
    let divJarmuKat = document.createElement('div');
    divJarmuKat.className = "form-check form-switch";
    fieldsetJarmuKat.appendChild(divJarmuKat);
    jarmuKategoriak.forEach(element =>{
            element.forEach(jarmuKat =>{
                let inputJarmuKat = document.createElement('input');
                inputJarmuKat.className = 'form-check-input';
                inputJarmuKat.type = 'checkbox';
                inputJarmuKat.id = jarmuKat.nev;
                inputJarmuKat.name = 'inputJarmuKat';
                inputJarmuKat.setAttribute('onClick','jarmuvekRenderel(getSzurtJarmuvek())');
                inputJarmuKat.checked = true;
                inputJarmuKat.role='switch';
                divJarmuKat.appendChild(inputJarmuKat);

                let labelJarmukat = document.createElement('label');
                labelJarmukat.className = 'form-check-label';
                labelJarmukat.htmlFor = inputJarmuKat.id;
                labelJarmukat.innerText = inputJarmuKat.id;
                divJarmuKat.appendChild(labelJarmukat);

                let brJarmukat = document.createElement('br');
                divJarmuKat.appendChild(brJarmukat);
            })
    });
}

//SZŰRŐSÁV ELÉRHETŐSÉG
let inputElerhetoseg;
function elerhetosegSzuroSav(){
    let nav = document.getElementById('navfilter');
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
    inputElerhetoseg.name = 'inputElerhetoseg';
    inputElerhetoseg.id = 'elérhető';
    inputElerhetoseg.setAttribute('onClick','jarmuvekRenderel(getSzurtJarmuvek())');
    inputElerhetoseg.checked = true;
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

    inputElerhetoseg = document.createElement('input');
    inputElerhetoseg.className = 'form-check-input';
    inputElerhetoseg.type = 'checkbox';
    inputElerhetoseg.name = 'inputElerhetoseg';
    inputElerhetoseg.id = 'nem elérhető';
    inputElerhetoseg.setAttribute('onClick','jarmuvekRenderel(getSzurtJarmuvek())');
    inputElerhetoseg.checked = true;
    inputElerhetoseg.role='switch';
    divElerhetoseg.appendChild(inputElerhetoseg);


    labelElerhetoseg = document.createElement('label');
    labelElerhetoseg.className = 'form-check-label';
    labelElerhetoseg.htmlFor = inputElerhetoseg.id;
    labelElerhetoseg.innerText = 'nem';
    divElerhetoseg.appendChild(labelElerhetoseg);

    brElerhetoseg = document.createElement('br');
    divElerhetoseg.appendChild(brElerhetoseg);
}

//SZŰRÉS
function getSzurtJarmuvek(){
    let szurtJarmuvek = [];
    let szurtJarmuvekTomb = [];
    let inputMarkas = document.getElementsByName('inputMarka');
    let inputJarmuKats = document.getElementsByName('inputJarmuKat');
    let inputElerhetosegs = document.getElementsByName('inputElerhetoseg');
    jarmuvek.forEach(element => {
        element.forEach(jarmu => {
            for (let i = 0; i < inputMarkas.length; i++) {
                if (inputMarkas.item(i).id == getMarkaNev(jarmu.marka) && inputMarkas.item(i).checked == true){
                    for(let j = 0;j < inputJarmuKats.length; j++){
                        if (inputJarmuKats.item(j).id == getJarmuKategoriaNev(jarmu.jarmu_kategoria) && inputJarmuKats.item(j).checked == true){
                            for (let k=0;k<inputElerhetosegs.length;k++){
                                if (inputElerhetosegs.item(k).checked == true && isElerheto(isElerheto2, jarmu.id) == inputElerhetosegs.item(k).id){
                                    szurtJarmuvek.push(jarmu);
                                }
                            }
                        }   
                    }   
                }
            }
        })
        });
    
    szurtJarmuvekTomb.push(szurtJarmuvek);
    return szurtJarmuvekTomb;
}

async function betolt(){
    await fetch_betolt();
    markaSzuroSav();
    jarmuKategoriaSzuroSav();
    elerhetosegSzuroSav();
    jarmuvekRenderel(getSzurtJarmuvek());
}

betolt();