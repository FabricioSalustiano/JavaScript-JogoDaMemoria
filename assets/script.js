const cards = document.querySelectorAll('.Card');

function flipCard() {
    this.classList.toggle('Flip');
}

cards.forEach((Card) => {
    Card.addEventListener('click', flipCard);
})