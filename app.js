const btn = document.querySelector('.share');
const share = document.querySelector('.person-details')

btn.addEventListener('click', function(){
    share.classList.toggle('active')
})