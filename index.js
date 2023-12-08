const mainCard = document.querySelector('.main');
const thankYouCard = document.querySelector('.thankyou');
const rates = document.querySelectorAll('.btn');
const rating = document.querySelector('.rating');
const submit = document.getElementById('submit');
const submitAgain = document.getElementById('submit-again');

submit.addEventListener('click', () => {
    mainCard.style.display = 'none';

});

submitAgain.addEventListener('click', () => {
    thankYouCard.style.display = 'none';
    mainCard.style.display = 'block';
});

rating.forEach((rate) => {
    rate.addEventListener('click', () => {
        rating.innerHTML= rate.innerHTML
    })
})

