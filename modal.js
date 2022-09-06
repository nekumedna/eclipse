const signIn = document.getElementById('signIn');
const modalContainer = document.getElementById('modalContainer');
const popUp = document.getElementById('popUp')
const closeSignIn = document.getElementById('closeSignIn')

signIn.addEventListener('click', () => {
    popUp.classList.add('show');
    modalContainer.classList.add('show');
});

modalContainer.addEventListener('click', () => {
    popUp.classList.remove('show');
    modalContainer.classList.remove('show');
});

closeSignIn.addEventListener('click', () => {
    popUp.classList.remove('show');
    modalContainer.classList.remove('show');
});