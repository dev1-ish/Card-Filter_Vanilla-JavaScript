// VID: https://www.youtube.com/watch?v=RVrHC__Tkx0
function searchPlant() {
    // DOM
    const input = document.getElementById('filter').value.toUpperCase();
    // console.log(input)

    const cardContainer = document.getElementById('card-lists');

    const cards = cardContainer.getElementsByClassName('card');

    for (let i = 0; i < cards.length; i++){
        let title = cards[i].querySelector(".card-body h5.card-title");

        if (title.innerText.toUpperCase().indexOf(input) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}