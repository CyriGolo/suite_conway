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

const listeElement = document.querySelector("#maListe");
const bouton = document.querySelector("#btn");
const nombreInput = document.querySelector("#nbr");

// BOUTON / AFFICHER RESULTAT
bouton.addEventListener("click", ()=>{
    const n = nombreInput.value;
    const resultat = suiteConway(n);
    resultat.forEach(function(valeur) {
        const li = document.createElement("li");
        li.textContent = valeur;
        listeElement.appendChild(li);
    });
})