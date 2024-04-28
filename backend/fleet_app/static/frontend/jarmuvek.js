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
        let div = document.getElementById('sor');
        div.appendChild(jarmuvekEl);
    }
    jarmuvek.forEach(element => {
        element.forEach(jarmu => {

            let jarmuCard = document.createElement('div');
            jarmuCard.className = 'card';
            jarmuCard.style="background-color: white; margin-top: 20px; margin-left: 10px; border-radius: 30px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
            jarmuvekEl.appendChild(jarmuCard);

            let jarmuAnchor = document.createElement('a');
            jarmuAnchor.href = '#';
            jarmuAnchor.style="margin-top: 5vh;";
            jarmuCard.appendChild(jarmuAnchor);

            let jarmuKep = document.createElement('img');
            jarmuKep.src = baseUrl + jarmu.kep;
            jarmuKep.className = 'card-img-top';
            jarmuAnchor.appendChild(jarmuKep);

            let jarmuCardBody = document.createElement('div');
            jarmuCardBody.className = 'card-body';
            jarmuCard.appendChild(jarmuCardBody);

            let jarmuMarkaTipus = document.createElement('p');
            jarmuMarkaTipus.className = 'h2 mb-3 card-title text-center';
            let marka = getMarkaNev(jarmu.marka);
            jarmuMarkaTipus.innerText = marka + ' ' + jarmu.tipus;
            jarmuCardBody.appendChild(jarmuMarkaTipus);

            let jarmuRendszam = document.createElement('p');
            jarmuRendszam.className = 'h2 mb-3 card-title text-center';
            jarmuRendszam.innerText = jarmu.rendszam;
            jarmuCardBody.appendChild(jarmuRendszam);

            let elerheto = isElerheto(isElerheto2, jarmu.id);
            let jarmuElerhetoseg = document.createElement('p');
            jarmuElerhetoseg.className = 'h2 mb-3 card-title text-center';
            jarmuElerhetoseg.innerText = elerheto;
            jarmuCardBody.appendChild(jarmuElerhetoseg);

            let jarmuLapDiv = document.createElement('div');
            jarmuLapDiv.className = 'row align-items-center';
            jarmuCardBody.appendChild(jarmuLapDiv);

            let jarmuLapCol = document.createElement('div');
            jarmuLapCol.className = 'col';
            jarmuLapDiv.appendChild(jarmuLapCol);

            let jarmuBtn = document.createElement('a');
            jarmuBtn.href = '/onecar';
            jarmuBtn.className = 'btn btn-primary';
            jarmuBtn.innerText = 'Megnézem';
            
            jarmuLapCol.appendChild(jarmuBtn);

            let jarmuKatCol = document.createElement('div');
            jarmuKatCol.className = 'col fw-bold text-info text-end';
            let jarmuKatNev = getJarmuKategoriaNev(jarmu.jarmu_kategoria);
            jarmuKatCol.innerText = jarmuKatNev;
            jarmuLapDiv.appendChild(jarmuKatCol);
            
        })});
}
