const shareBtn = document.querySelector('.card__share-icon');
const displayActive = document.querySelector('.flex-group');

shareBtn.addEventListener('click', function(){
    displayActive.classList.toggle('active')
})