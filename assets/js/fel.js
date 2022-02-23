/*==================== MODAL GALLERY FELICIDAD ====================*/ 

let galleryImages__Fel = document.querySelectorAll('.content-gallery__list-item-fel');
let getLatestOpenedImg__Fel;
let windowWidth__Fel = window.innerWidth;
let modalImg__Fel = document.querySelector('.focus-project__modal-fel');



if(galleryImages__Fel){
    galleryImages__Fel.forEach(function(image, index){
        image.onclick = function(){
            let getElementCss__Fel = window.getComputedStyle(image);
            let getFullImgUrl__Fel = getElementCss__Fel.getPropertyValue('background-image');
            let getImgUrlPos__Fel = getFullImgUrl__Fel.split('/img/fel/thumbs/');
            let setNewImgUrl__Fel = getImgUrlPos__Fel[1].replace('")', '');
            
            getLatestOpenedImg__Fel = index + 1;

            let container__Fel = document.querySelector('.focus-project__modal-fel');
            let newImgWindow__Fel = document.querySelector('.focus-project__slideshow-fel');

            modalImg__Fel.classList.add('focus-project__modal-active');


            let newImg__Fel = document.querySelector('.focus-project__slideshow-img-fel');
            newImg__Fel.setAttribute('src','../assets/img/fel/' + setNewImgUrl__Fel);
            newImg__Fel.setAttribute('id', 'current-img')

            let newPrevBtn__Fel = document.querySelector('.focus-project__modal-btns__prev-fel');
            newPrevBtn__Fel.setAttribute('onclick', 'changeImg__Fel(0)');

            let newNextBtn__Fel = document.querySelector('.focus-project__modal-btns__next-fel');
            newNextBtn__Fel.setAttribute('onclick', 'changeImg__Fel(1)');
            
        }
    });
}

document.querySelector('.focus-project__btn__close-fel').addEventListener('click', () =>{
    modalImg__Fel.classList.remove('focus-project__modal-active');
})

function changeImg__Fel(changeDir){
    document.getElementById('current-img').id = '';

    let getImgWindow__Fel = document.querySelector('.focus-project__slideshow-fel');
    let newImg__Fel = document.querySelector('.focus-project__slideshow-img-fel');

    let calcNewImg__Fel;
    if(changeDir === 1){
        calcNewImg__Fel = getLatestOpenedImg__Fel + 1;
        newImg__Fel.classList.add('animation__right');
        setTimeout(function(){
            newImg__Fel.classList.remove('animation__right');
        }, 300);
        if(calcNewImg__Fel > galleryImages__Fel.length){
            calcNewImg__Fel = 1;
        }
    }
    else if(changeDir ===0){
        calcNewImg__Fel = getLatestOpenedImg__Fel - 1;
        newImg__Fel.classList.add('animation__left');
        setTimeout(function(){
            newImg__Fel.classList.remove('animation__left');
        }, 300);
        if(calcNewImg__Fel < 1){
            calcNewImg__Fel = galleryImages__Fel.length;
        }
    }

    newImg__Fel.setAttribute('src', '../assets/img/fel/img-fel' + calcNewImg__Fel + '.png');
    newImg__Fel.setAttribute('id', 'current-img');

    getLatestOpenedImg__Fel = calcNewImg__Fel;
}


/*==================== SHOW BACKWARDS ====================*/ 
function backwards(){
    const backwards = document.getElementById('backwards');
    //when  the scroll is higher tan 500 viewport height, add the show-scroll class to the a tag with the scroll
    if(this.scrollY >= 320) backwards.classList.add('show-backwards'); else backwards.classList.remove('show-backwards');

}
window.addEventListener('scroll', backwards)