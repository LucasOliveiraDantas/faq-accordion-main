
let btnFaq1 = document.getElementById('btn-1')
let btnFaq2 = document.getElementById('btn-2')
let btnFaq3 = document.getElementById('btn-3')
let btnFaq4 = document.getElementById('btn-4')

let descFaq1 = document.getElementById('faq-1')
let descFaq2 = document.getElementById('faq-2')
let descFaq3 = document.getElementById('faq-3')
let descFaq4 = document.getElementById('faq-4')


btnFaq1.addEventListener('click', function(){

    descFaq1.classList.toggle('on')
    
})

btnFaq2.addEventListener('click', function(){

    descFaq2.classList.toggle('on')
    
})

btnFaq3.addEventListener('click', function(){

    descFaq3.classList.toggle('on')
    
})

btnFaq4.addEventListener('click', function(){

    descFaq4.classList.toggle('on')
    
})