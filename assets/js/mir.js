// /*==================== MODAL GALLERY MIRADOR ====================*/ 

let galleryImages__Mir = document.querySelectorAll('.content-gallery__list-item-mir');
let getLatestOpenedImg__Mir;
let windowWidth__Mir = window.innerWidth;
let modalImg__Mir = document.querySelector('.focus-project__modal-mir');



if(galleryImages__Mir){
    galleryImages__Mir.forEach(function(image, index){
        image.onclick = function(){
            let getElementCss__Mir = window.getComputedStyle(image);
            let getFullImgUrl__Mir = getElementCss__Mir.getPropertyValue('background-image');
            let getImgUrlPos__Mir = getFullImgUrl__Mir.split('/img/mir/thumbs/');
            let setNewImgUrl__Mir = getImgUrlPos__Mir[1].replace('")', '');
            
            getLatestOpenedImg__Mir = index + 1;

            let container__Mir = document.querySelector('.focus-project__modal-mir');
            let newImgWindow__Mir = document.querySelector('.focus-project__slideshow-mir');

            modalImg__Mir.classList.add('focus-project__modal-active');


            let newImg__Mir = document.querySelector('.focus-project__slideshow-img-mir');
            newImg__Mir.setAttribute('src','../assets/img/mir/' + setNewImgUrl__Mir);
            newImg__Mir.setAttribute('id', 'current-img')

            let newPrevBtn__Mir = document.querySelector('.focus-project__modal-btns__prev-mir');
            newPrevBtn__Mir.setAttribute('onclick', 'changeImg__Mir(0)');

            let newNextBtn__Mir = document.querySelector('.focus-project__modal-btns__next-mir');
            newNextBtn__Mir.setAttribute('onclick', 'changeImg__Mir(1)');
            
        }
    });
}

document.querySelector('.focus-project__btn__close-mir').addEventListener('click', () =>{
    modalImg__Mir.classList.remove('focus-project__modal-active');
})

function changeImg__Mir(changeDir){
    document.getElementById('current-img').id = '';

    let getImgWindow__Mir = document.querySelector('.focus-project__slideshow-mir');
    let newImg__Mir = document.querySelector('.focus-project__slideshow-img-mir');

    let calcNewImg__Mir;
    if(changeDir === 1){
        calcNewImg__Mir = getLatestOpenedImg__Mir + 1;
        newImg__Mir.classList.add('animation__right');
        setTimeout(function(){
            newImg__Mir.classList.remove('animation__right');
        }, 300);
        if(calcNewImg__Mir > galleryImages__Mir.length){
            calcNewImg__Mir = 1;
        }
    }
    else if(changeDir ===0){
        calcNewImg__Mir = getLatestOpenedImg__Mir - 1;
        newImg__Mir.classList.add('animation__left');
        setTimeout(function(){
            newImg__Mir.classList.remove('animation__left');
        }, 300);
        if(calcNewImg__Mir < 1){
            calcNewImg__Mir = galleryImages__Mir.length;
        }
    }

    newImg__Mir.setAttribute('src', '../assets/img/mir/img-mir' + calcNewImg__Mir + '.png');
    newImg__Mir.setAttribute('id', 'current-img');

    getLatestOpenedImg__Mir = calcNewImg__Mir;
}


/*==================== SHOW BACKWARDS ====================*/ 
function backwards(){
    const backwards = document.getElementById('backwards');
    //when  the scroll is higher tan 500 viewport height, add the show-scroll class to the a tag with the scroll
    if(this.scrollY >= 320) backwards.classList.add('show-backwards'); else backwards.classList.remove('show-backwards');

}
window.addEventListener('scroll', backwards)