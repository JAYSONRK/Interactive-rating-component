const mainCard = document.querySelector('.main');
const thankYouCard = document.querySelector('.thankyou');
const rating = document.querySelectorAll('.btn');
const submit = document.getElementById('submit');
const submitAgain = document.getElementById('submit-again');
const number = document.querySelector('span');

submit.addEventListener('click', () => {
    mainCard.style.display = 'none';
    thankYouCard.style.display = 'block';
});

submitAgain.addEventListener('click', () => {
    thankYouCard.style.display = 'none';
    mainCard.style.display = 'block';
});

rating.forEach((rate) => {
    rate.addEventListener('click', () => {
    number.innerHTML =  rate.innerHTML;
    })
})