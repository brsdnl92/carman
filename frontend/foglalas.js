function getJarmuKategoriaNev(id){
    var jarmuKategoriaNev
    fetch('http://127.0.0.1:8000/api/jarmukategoria')
    .then(res => res.json())
    .then(data => {
        data.forEach(jarmu_kategoria =>
        {
            if (id == jarmu_kategoria.id){
                jarmuKategoriaNev = jarmu_kategoria.nev
            }
        }
        );
    })

    return jarmuKategoriaNev
}

function isElerheto2(foglalas_vege){
    let today = new Date()
    if ((Date.parse(foglalas_vege) > Date.parse(today))){
        return 'Nem elérhető'
    }else{
        return 'Elérhető'
    }
}

function isElerheto(cb, jarmu_id){
    fetch('http://127.0.0.1:8000/api/foglalasok')
      .then(res => res.json())
      .then(data => {
        data.forEach(foglalas =>
        {
            if (jarmu_id == foglalas.jarmu_id){
                cb(foglalas.foglalas_vege)
            }
            
        })
      })
}

//SZŰRŐSÁV MÁRKA
let nav = document.getElementById('navfilter')
let fieldsetMarka = document.createElement('fieldset')
nav.appendChild(fieldsetMarka)
let legendMarka = document.createElement('legend')
legendMarka.innerText = "Márka"
fieldsetMarka.appendChild(legendMarka)
let divMarka = document.createElement('div')
divMarka.className = "form-check form-switch"
fieldsetMarka.appendChild(divMarka)
fetch('http://127.0.0.1:8000/api/jarmuvek')
.then(res => res.json())
.then(data => {
    data.forEach(jarmu =>
        {
            let inputMarka = document.createElement('input')
            inputMarka.className = 'form-check-input'
            inputMarka.type = 'checkbox'
            inputMarka.id = jarmu.marka + ' ' + jarmu.tipus
            inputMarka.name = 'inputMarka'
            inputMarka.setAttribute('onClick','setFilter()')
            inputMarka.checked = true
            inputMarka.role='switch'
            divMarka.appendChild(inputMarka)

            let labelMarka = document.createElement('label')
            labelMarka.className = 'form-check-label'
            labelMarka.htmlFor = inputMarka.id
            labelMarka.innerText = inputMarka.id
            divMarka.appendChild(labelMarka)

            let brMarka = document.createElement('br')
            divMarka.appendChild(brMarka)
        })
    })

//SZŰRŐSÁV JÁRMŰ KATEGÓRIA
nav = document.getElementById('navfilter')
let fieldsetJarmuKat = document.createElement('fieldset')
nav.appendChild(fieldsetJarmuKat)
let legendJarmuKat = document.createElement('legend')
legendJarmuKat.innerText = "Kategória"
fieldsetMarka.appendChild(legendJarmuKat)
let divJarmuKat = document.createElement('div')
divJarmuKat.className = "form-check form-switch"
fieldsetJarmuKat.appendChild(divJarmuKat)
fetch('http://127.0.0.1:8000/api/jarmukategoria')
.then(res => res.json())
.then(data => {
    data.forEach(jarmu_kategoria =>
        {
            let inputJarmuKat = document.createElement('input')
            inputJarmuKat.className = 'form-check-input'
            inputJarmuKat.type = 'checkbox'
            inputJarmuKat.id = jarmu_kategoria.id
            inputJarmuKat.name = 'inputJarmuKat'
            inputJarmuKat.setAttribute('onClick','setFilter()')
            inputJarmuKat.checked = true
            inputJarmuKat.role='switch'
            divJarmuKat.appendChild(inputJarmuKat)

            let labelJarmukat = document.createElement('label')
            labelJarmukat.className = 'form-check-label'
            labelJarmukat.htmlFor = inputJarmuKat.id
            labelJarmukat.innerText = jarmu_kategoria.nev
            divJarmuKat.appendChild(labelJarmukat)

            let brJarmukat = document.createElement('br')
            divJarmuKat.appendChild(brJarmukat)
        })
    })

//SZŰRŐSÁV ELÉRHETŐSÉG
nav = document.getElementById('navfilter')
let fieldsetElerhetoseg = document.createElement('fieldset')
nav.appendChild(fieldsetElerhetoseg)
let legendElerhetoseg = document.createElement('legend')
legendElerhetoseg.innerText = "Elérhetőség"
fieldsetElerhetoseg.appendChild(legendElerhetoseg)
let divElerhetoseg = document.createElement('div')
divElerhetoseg.className = "form-check form-switch"
fieldsetElerhetoseg.appendChild(divElerhetoseg)
let inputElerhetoseg = document.createElement('input')
inputElerhetoseg.className = 'form-check-input'
inputElerhetoseg.type = 'checkbox'
inputElerhetoseg.id = 'elerhetoseg'
inputElerhetoseg.setAttribute('onClick','setFilter()')
inputElerhetoseg.checked = true
inputElerhetoseg.role='switch'
divElerhetoseg.appendChild(inputElerhetoseg)

let labelElerhetoseg = document.createElement('label')
labelElerhetoseg.className = 'form-check-label'
labelElerhetoseg.htmlFor = inputElerhetoseg.id
labelElerhetoseg.innerText = 'igen'
divElerhetoseg.appendChild(labelElerhetoseg)

let brElerhetoseg = document.createElement('br')
divElerhetoseg.appendChild(brElerhetoseg)

//SZŰRÉS
function setFilter(){
    var jarmuvekEl = document.getElementById('jarmuvek')
    if (jarmuvekEl!=null){
        jarmuvekEl.remove()
        jarmuvekEl = document.createElement('div')
        jarmuvekEl.id = 'jarmuvek'
        var main = document.getElementById('main')
        main.appendChild(jarmuvekEl)
    }
    var inputMarkas = document.getElementsByName('inputMarka')
    var inputJarmuKats = document.getElementsByName('inputJarmuKat')
    fetch('http://127.0.0.1:8000/api/jarmuvek')
    .then(res => res.json())
    .then(data => {
    data.forEach(jarmu =>
    {
        for (var i = 0; i < inputMarkas.length; i++) {
            
            if ((inputMarkas.item(i).id == (jarmu.marka + ' ' + jarmu.tipus)) && (inputMarkas.item(i).checked == true)){
                for(var j = 0;j < inputJarmuKats.length; j++){
                    if ((inputJarmuKats.item(j).id == jarmu.jarmu_kategoria_id) && (inputJarmuKats.item(j).checked == true)){
                        //if ((inputElerhetoseg.checked == true) && (isElerheto(isElerheto2, jarmu.id)=='Elérhető')){
                            let jarmuCol = document.createElement('div')
                            jarmuCol.className = 'col'
                            jarmuvekEl.appendChild(jarmuCol)

                            let jarmuCard = document.createElement('div')
                            jarmuCard.className = 'card'
                            jarmuCard.setAttribute('style','width: 18rem;')
                            jarmuCol.appendChild(jarmuCard)

                            let jarmuKep = document.createElement('img')
                            jarmuKep.src = 'http://127.0.0.1:8000/static' + jarmu.kep
                            jarmuKep.className = 'card-img-top'
                            jarmuCard.appendChild(jarmuKep)

                            let jarmuCardBody = document.createElement('div')
                            jarmuCardBody.className = 'card-body'
                            jarmuCard.appendChild(jarmuCardBody)

                            let jarmuTitle = document.createElement('h5')
                            jarmuTitle.className = 'card-title'
                            jarmuTitle.innerText = jarmu.marka + ' ' + jarmu.tipus
                            jarmuCardBody.appendChild(jarmuTitle)

                            let jarmuText = document.createElement('p')
                            jarmuText.className = 'card-text'
                            jarmuText.innerText = jarmu.rendszam + ' | ' + getJarmuKategoriaNev(jarmu.jarmu_kategoria_id) + ' | ' + isElerheto(isElerheto2, jarmu.id)
                            jarmuCardBody.appendChild(jarmuText)

                            let jarmuBtn = document.createElement('a')
                            jarmuBtn.href = '#'
                            jarmuBtn.className = 'btn btn-primary'
                            jarmuBtn.innerText = 'Adatok'
                            jarmuCardBody.appendChild(jarmuBtn)
                        //}else if((inputElerhetoseg.checked == false) && (isElerheto(isElerheto2,jarmu.id)=='Nem elérhető')){
                            // let jarmuCard = document.createElement('div')
                            // jarmuCard.className = 'card'
                            // jarmuCard.setAttribute('style','width: 18rem;')
                            // jarmuvekEl.appendChild(jarmuCard)

                            // let jarmuKep = document.createElement('img')
                            // jarmuKep.src = 'http://127.0.0.1:8000/static' + jarmu.kep
                            // jarmuKep.className = 'card-img-top'
                            // jarmuCard.appendChild(jarmuKep)

                            // let jarmuCardBody = document.createElement('div')
                            // jarmuCardBody.className = 'card-body'
                            // jarmuCard.appendChild(jarmuCardBody)

                            // let jarmuTitle = document.createElement('h5')
                            // jarmuTitle.className = 'card-title'
                            // jarmuTitle.innerText = jarmu.marka + ' ' + jarmu.tipus
                            // jarmuCardBody.appendChild(jarmuTitle)

                            // let jarmuText = document.createElement('p')
                            // jarmuText.className = 'card-text'
                            // jarmuText.innerText = jarmu.rendszam + ' | ' + getJarmuKategoriaNev(jarmu.jarmu_kategoria_id) + ' | ' + isElerheto(isElerheto2, jarmu.id)
                            // jarmuCardBody.appendChild(jarmuText)

                            // let jarmuBtn = document.createElement('a')
                            // jarmuBtn.href = '#'
                            // jarmuBtn.className = 'btn btn-primary'
                            // jarmuBtn.innerText = 'Adatok'
                            // jarmuCardBody.appendChild(jarmuBtn)
                        //}
                    }
                }
            }
        }
    })
})
}


//JS FÁJLOK BETÖLTÉSE
function loadScript(url)
{    
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.integrity = "sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN";
    script.crossOrigin = "anonymous";
    head.appendChild(script);
}

loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js')
setFilter()
