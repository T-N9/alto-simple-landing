const getMenuBtn= document.querySelector('.header__menu');

getMenuBtn.onclick=function(){
    console.log('Hello World');
    this.classList.toggle('open-menu');
}