const listeElement = document.querySelector("#maListe");
const bouton = document.querySelector("#btn");
const nombreInput = document.querySelector("#nbr");

// ALGORITHME CONWAY
function suiteConway(n) {
    let base = ["1"];
    for (let i = 1; i < n; i++) {
        let current = base[i - 1];
        let next = "";
        
        let count = 1;
        for (let j = 0; j < current.length; j++) {
            if (current[j] === current[j + 1]) {
            count++;
            } else {
            next += count + current[j];
            count = 1;
            }
        }
        base.push(next);
    } return base;
}

function result() {
    const n = nombreInput.value;
    const resultat = suiteConway(n);
    resultat.forEach(function(valeur) {
        const li = document.createElement("li");
        li.textContent = valeur;
        listeElement.appendChild(li);
    });
}

// BOUTON / AFFICHER RESULTAT
bouton.addEventListener("click", ()=>{
    if (nombreInput.value == "") {
        alert("Merci de remplir le champ.");
    } else if(nombreInput.value >= 50) {
        alert("Tu veux faire crash le pc enfaite ?");
    } else {
        result();
    }
})

document.addEventListener('keypress', (event)=>{
    if (event.key === "Enter") {
        event.preventDefault();
        bouton.click();
    }
})
