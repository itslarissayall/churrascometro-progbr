function calc() {
    let adultsValue = document.getElementById("adults").value;
    let kidsValue = document.getElementById("kids").value;
    let time = document.getElementById("time").value;
    let mMT = 450;
    let mBR = 1200;
    let mSD = 1000;
    let rMT = 0;
    let rBR = 0;
    let rSD = 0;
    let meat = document.getElementById("meat");
    let beer = document.getElementById("beer");
    let soda = document.getElementById("soda");
    adultsValue && kidsValue && time > 0 ?
        ((time > 6 ? (mCRN += 200, mCVJ += 800, mRA += 500) : (false)),
            rMT = (mMT * adultsValue) + (mMT * 0.5 * kidsValue),
            rBR = mBR * (adultsValue),
            rSD = (mSD * adultsValue) + (mSD * 0.5 * kidsValue),
            meat.innerHTML = "A quantidade necessária de carne é \n" + (rMT/ 1000).toFixed(2) + "\n kg",
            beer.innerHTML = "A quantidade necessária de cerveja é \n" + (rBR / 1000).toFixed(2) + "\n litros",
            soda.innerHTML = "A quantidade necessária de refrigerante e água é \n" + (rSD / 1000).toFixed(2) + "\n litros",
            showModal()
        ) : (

            alert("O valor inserido é inválido")

        )
}
function showModal() {
    let modal = document.getElementById("modal-result");
    modal.classList.toggle("close-modal");
}
function closeModal() {
    let modal = document.getElementById("modal-result");
    modal.classList.toggle("close-modal");
    adultsValue.value = "";
    kidsValue.value = "";
    time.value = "";
}