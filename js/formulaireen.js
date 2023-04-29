let m=document.getElementById('message');

document.getElementById('envoyer').addEventListener('click' , function(event){
    console.log('bouton envoyé') ;
    m.textContent='Your message has been sent !' ;
})