
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

function isElerheto(cb, jarmu_id){
    let elerheto = "elérhető";
    foglalasok.forEach(element => {
        element.forEach(foglalas => {
        if (jarmu_id == foglalas.jarmu && cb(foglalas.foglalas_vege)==false){
            elerheto = "nem elérhető"; 
        }
    })});

    return elerheto;
}

function getMarkaNev(id){
    let markaNev = "márka";
    markak.forEach(element => {
        element.forEach(marka => {
            if (marka.id == id) {
                markaNev = marka.nev;
            }
    })});
    
    return markaNev;
}

function getJarmuKategoriaNev(id){
    let jarmuKatNev = "kategória";
    jarmuKategoriak.forEach(element => {
        element.forEach(jarmuKat => {
            if (jarmuKat.id == id) {
                jarmuKatNev = jarmuKat.nev;
            }
    })});
    
    return jarmuKatNev;
}

function jarmuvekRenderel(jarmuvek){
    let jarmuvekEl = document.getElementById('jarmuvek');
    if (jarmuvekEl!=null){
        jarmuvekEl.remove();
        jarmuvekEl = document.createElement('div');
        jarmuvekEl.id = 'jarmuvek';
        var main = document.getElementById('main');
        main.appendChild(jarmuvekEl);
    }
    jarmuvek.forEach(element => {
        element.forEach(jarmu => {
            let jarmuCol = document.createElement('div');
            jarmuCol.className = 'col';

            jarmuvekEl.appendChild(jarmuCol);

            let jarmuCard = document.createElement('div');
            jarmuCard.className = 'card';
            jarmuCard.setAttribute('style','width: 18rem;');
            jarmuCol.appendChild(jarmuCard);

            let jarmuKep = document.createElement('img');
            jarmuKep.src = baseUrl + jarmu.kep;
            jarmuKep.className = 'card-img-top';
            jarmuCard.appendChild(jarmuKep);

            let jarmuCardBody = document.createElement('div');
            jarmuCardBody.className = 'card-body';
            jarmuCard.appendChild(jarmuCardBody);

            let jarmuTitle = document.createElement('h5');
            jarmuTitle.className = 'card-title';
            let markaNev = getMarkaNev(jarmu.marka);
            jarmuTitle.innerText = markaNev + ' ' + jarmu.tipus;
            jarmuCardBody.appendChild(jarmuTitle);

            let jarmuText = document.createElement('p');
            jarmuText.className = 'card-text';
            let jarmuKatNev = getJarmuKategoriaNev(jarmu.jarmu_kategoria);
            let elerheto = isElerheto(isElerheto2, jarmu.id);
            jarmuText.innerText = jarmu.rendszam + ' | ' +  jarmuKatNev + ' | ' + elerheto;
            jarmuCardBody.appendChild(jarmuText);

            let jarmuBtn = document.createElement('a');
            jarmuBtn.href = '#';
            jarmuBtn.className = 'btn btn-primary';
            jarmuBtn.innerText = 'Adatok';
            jarmuCardBody.appendChild(jarmuBtn);
        })});
}