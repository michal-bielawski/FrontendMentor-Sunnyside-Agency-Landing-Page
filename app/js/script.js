const btnHamburger = document.querySelector('#btnHamburger');
const fadesElements = document.querySelectorAll('.has-fade');
const header = document.querySelector('header');

btnHamburger.addEventListener('click', function(){

    if(header.classList.contains('open')){
        header.classList.remove('open');
        fadesElements.forEach(function(element){
            element.classList.remove('fade-in')
            element.classList.add('fade-out')
        })
    }
    else{
        header.classList.add('open')
        fadesElements.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        })
    }
})
