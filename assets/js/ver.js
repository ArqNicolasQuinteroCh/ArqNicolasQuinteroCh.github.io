// /*==================== MODAL GALLERY verADOR ====================*/ 

let galleryImages__Ver = document.querySelectorAll('.content-gallery__list-item-ver');
let getLatestOpenedImg__Ver;
let windowWidth__Ver = window.innerWidth;
let modalImg__Ver = document.querySelector('.focus-project__modal-ver');



if(galleryImages__Ver){
    galleryImages__Ver.forEach(function(image, index){
        image.onclick = function(){
            let getElementCss__Ver = window.getComputedStyle(image);
            let getFullImgUrl__Ver = getElementCss__Ver.getPropertyValue('background-image');
            let getImgUrlPos__Ver = getFullImgUrl__Ver.split('/img/ver/thumbs/');
            let setNewImgUrl__Ver = getImgUrlPos__Ver[1].replace('")', '');
            
            getLatestOpenedImg__Ver = index + 1;

            let container__Ver = document.querySelector('.focus-project__modal-ver');
            let newImgWindow__Ver = document.querySelector('.focus-project__slideshow-ver');

            modalImg__Ver.classList.add('focus-project__modal-active');


            let newImg__Ver = document.querySelector('.focus-project__slideshow-img-ver');
            newImg__Ver.setAttribute('src','../assets/img/ver/' + setNewImgUrl__Ver);
            newImg__Ver.setAttribute('id', 'current-img')

            let newPrevBtn__Ver = document.querySelector('.focus-project__modal-btns__prev-ver');
            newPrevBtn__Ver.setAttribute('onclick', 'changeImg__Ver(0)');

            let newNextBtn__Ver = document.querySelector('.focus-project__modal-btns__next-ver');
            newNextBtn__Ver.setAttribute('onclick', 'changeImg__Ver(1)');
            
        }
    });
}




document.querySelector('.focus-project__btn__close-ver').addEventListener('click', () =>{
    modalImg__Ver.classList.remove('focus-project__modal-active');
})


function changeImg__Ver(changeDir){
    document.getElementById('current-img').id = '';

    let getImgWindow__Ver = document.querySelector('.focus-project__slideshow-ver');
    let newImg__Ver = document.querySelector('.focus-project__slideshow-img-ver');

    let calcNewImg__Ver;
    if(changeDir === 1){
        calcNewImg__Ver = getLatestOpenedImg__Ver + 1;
        newImg__Ver.classList.add('animation__right');
        setTimeout(function(){
            newImg__Ver.classList.remove('animation__right');
        }, 300);
        if(calcNewImg__Ver > galleryImages__Ver.length){
            calcNewImg__Ver = 1;
        }
    }
    else if(changeDir ===0){
        calcNewImg__Ver = getLatestOpenedImg__Ver - 1;
        newImg__Ver.classList.add('animation__left');
        setTimeout(function(){
            newImg__Ver.classList.remove('animation__left');
        }, 300);
        if(calcNewImg__Ver < 1){
            calcNewImg__Ver = galleryImages__Ver.length;
        }
    }

    newImg__Ver.setAttribute('src', '../assets/img/ver/img-ver' + calcNewImg__Ver + '.png');
    newImg__Ver.setAttribute('id', 'current-img');

    getLatestOpenedImg__Ver = calcNewImg__Ver;
}



/*==================== SHOW BACKWARDS ====================*/ 
function backwards(){
    const backwards = document.getElementById('backwards');
    //when  the scroll is higher tan 500 viewport height, add the show-scroll class to the a tag with the scroll
    if(this.scrollY >= 320) backwards.classList.add('show-backwards'); else backwards.classList.remove('show-backwards');

}
window.addEventListener('scroll', backwards)