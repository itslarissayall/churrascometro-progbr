function calc() {
    let adultos = document.getElementById("adultos").value;
    let criancas = document.getElementById("criancas").value;
    let tempo = document.getElementById("tempo").value;
    let mCRN = 450;
    let mCVJ = 1200;
    let mRA = 1000;
    let rCRN = 0;
    let rCVJ = 0;
    let rRA = 0;
    let liCRN = document.getElementById("carne");
    let liCVJ = document.getElementById("cerveja");
    let liRA = document.getElementById("refrigerante");
    adultos && criancas && tempo > 0 ?
        ((tempo > 6 ? (mCRN += 150, mCVJ += 800, mRA += 500) : (false)),
            console.log(mCRN, mCVJ, mRA),
            rCRN = (mCRN * adultos) + (mCRN * 0.5 * criancas),
            rCVJ = mCVJ * (adultos),
            rRA = (mRA * adultos) + (mRA * 0.5 * criancas),
            liCRN.innerHTML = "A quantidade necessária de carne é \n" + rCRN / 1000 + "\n kg",
            liCVJ.innerHTML = "A quantidade necessária de cerveja é \n" + rCVJ / 1000 + "\n litros",
            liRA.innerHTML = "A quantidade necessária de refrigerante e água é \n" + rRA / 1000 + "\n litros",
            console.log(rCRN, rCVJ, rRA),
            showModal()
        ) : (

            alert("O valor inserido é inválido")

        )
}
function showModal() {
    let modal = document.getElementById("modal-result");
    ;
    modal.classList.toggle("fecha-modal");


}
function closeModal() {
    let modal = document.getElementById("modal-result");
    modal.classList.toggle("fecha-modal");
    adultos.value = "";
    criancas.value = "";
    tempo.value = "";
}