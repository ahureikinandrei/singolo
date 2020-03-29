// Menu navigation
document.addEventListener('scroll', onScroll);

function onScroll (event) {
   const curPos = window.scrollY;
   const divs = document.querySelectorAll('#main>section');
   const links = document.querySelectorAll('#menu a')
   const header_height = document.querySelector('.header').offsetHeight

   divs.forEach((el) => {  
            if ((el.offsetTop - header_height) <= curPos && (el.offsetTop + el.offsetHeight) > curPos) {
                links.forEach((a) => {
                    a.classList.remove('active');
                    if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
                        a.classList.add('active');
                    }
                })
            }      
        });
}

//  Change links style on bottom position document
window.onscroll = function(ev) {  
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        document.getElementById('link_about-us').classList.remove('active');
        document.getElementById('link_contact').classList.add('active');
    }
};

document.querySelector('.header-nav__list').addEventListener('click', (e) => {
    if (e.target.classList.contains('header-nav__title')){
        let clickedLink = e.target;
        removeSelectedLinks();
        selectClickedLink(clickedLink)
    }
})


const removeSelectedLinks = () => {
    let links = document.querySelectorAll('.header-nav__title');
    links.forEach(link => {
        link.classList.remove('active');
    })
}

const selectClickedLink = (clickedLink) =>{
    clickedLink.classList.add('active');
}


// Modal for Get a quote form
const BUTTON = document.getElementById("subject-submit");
const CLOSE_BUTTON = document.getElementById("close-btn");
BUTTON.addEventListener('click', (e) => {
    if (document.getElementById('subject-name').checkValidity() && document.getElementById('subject-email').checkValidity()) {
        e.preventDefault();
        const subject = document.getElementById('subject-discription').value.toString();
        const project = document.getElementById('subject-masenge').value.toString();
        document.getElementById('result1').innerText = 'Письмо отправлено';

        if (subject !== '') {
            document.getElementById('result2').innerText = 'Тема: ' + subject;
        }
        else { document.getElementById('result2').innerText = 'Без темы'; }

        if (project !== '') {
            document.getElementById('result3').innerText = 'Описание: ' + project;
        }
        else { document.getElementById('result3').innerText = 'Без описания'; }

        document.getElementById('message-block').classList.remove('hidden');
        document.getElementById('message').classList.remove('hidden');
    }
});

CLOSE_BUTTON.addEventListener('click', () => {
    document.getElementById('result1').innerText = '';
    document.getElementById('result2').innerText = '';
    document.getElementById('result3').innerText = '';
    document.getElementById('message-block').classList.add('hidden');
    document.getElementById('message').classList.add('hidden');
});

// Slider
let items = document.querySelectorAll('.slider__phone');
let currentItem = 0; 
let isEnabled = true;

function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
    isEnabled = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('activeslide', direction)
    });
}

function showItem(direction) {
    items[currentItem].classList.add('next', direction);
    items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('next', direction);
        this.classList.add('activeslide');
        isEnabled = true;
    });
}

function changeBackgraundSlider() {
    if (currentItem == 0) {document.querySelector('.slider').classList.add('blue')}
    if (currentItem !== 0) {document.querySelector('.slider').classList.remove('blue')}
}

function nextItem(n) {
    changeBackgraundSlider()
    hideItem('to-left')
    changeCurrentItem(n + 1)
    showItem('from-right');
}

function previousItem(n) {
    changeBackgraundSlider()
    hideItem('to-right')
    changeCurrentItem(n - 1)
    showItem('from-left');
    
}

document.querySelector('.slider__button--left').addEventListener('click', function(){
    if (isEnabled) {
        previousItem(currentItem);
    }
});

document.querySelector('.slider__button--right').addEventListener('click', function(){
    if (isEnabled) {
        nextItem(currentItem);
    }
});

// Slider Display activity

const PHONE_DISPLAY_VERTICAL = document.querySelector('.display--vertical');
const PHONE_DISPLAY_HORIZONTAL = document.querySelector('.display--horizontal');
const displayVerticalStatus = () => {
    if (PHONE_DISPLAY_VERTICAL.classList.contains('display--vertical'))
        PHONE_DISPLAY_VERTICAL.classList.remove('display--vertical')
    else
        PHONE_DISPLAY_VERTICAL.classList.add('display--vertical');
}
const displayHorizontallStatus = () => {
    if (PHONE_DISPLAY_HORIZONTAL.classList.contains('display--horizontal'))
        PHONE_DISPLAY_HORIZONTAL.classList.remove('display--horizontal')
    else
        PHONE_DISPLAY_HORIZONTAL.classList.add('display--horizontal');
}


//Portfolio images border
let PORTFOLIO_IMAGES = document.getElementById('portfolio__images');
PORTFOLIO_IMAGES.addEventListener('click', event => {
    let target = event.target;
    if (target.tagName == 'IMG') {
        PORTFOLIO_IMAGES.querySelectorAll('img').forEach(item => {
            item.style.boxShadow = "none";
        });
        event.target.style.boxShadow = "0px 0px 0px 5px #f06c64";
    }

})

//Portfolio tabs

document.querySelector('.portfolio-menu__list').addEventListener('click', (e) => {
    if (e.target.classList.contains('portfolio-menu__title')){
        let clickedTag = e.target;
        removeSelectedTags();
        selectClickedTag(clickedTag);
        randomImageposition();
    }
})


const removeSelectedTags = () => {
    const tags = document.querySelectorAll('.portfolio-menu__title');
    tags.forEach(tag => {
        tag.classList.remove('selected');
    })
}

const selectClickedTag = (clickedTag) => {
    clickedTag.classList.add('selected');
}

const randomImageposition = () => {
    const portfolio = document.querySelector("#portfolio__images");
    let srcArray = [];
    let counter = 0;
    let portfolioPictures = [...portfolio.querySelectorAll(".portfolio-menu__images")];
    portfolioPictures.sort(function(){
        return Math.random() - 0.5;});
    portfolioPictures.forEach( pic => portfolio.append(pic) );
}

// Humburger

const HUMBURGER = document.querySelector('.humburger');
const HEADERNAV = document.querySelector('.header-nav');
const HEADERNAVHERF = document.querySelector('.header-nav');

let status_humburger = 0;

HUMBURGER.addEventListener('click', () => {
    if (status_humburger == 0) {     
        HUMBURGER.classList.add('humburger-transform');
        HEADERNAV.classList.add('mabile__menu-active');
        status_humburger = 1;
    }
    else if (status_humburger == 1) {     
        removehumburger()
    }
})

function removehumburger() {
    HUMBURGER.classList.remove('humburger-transform');
    HEADERNAV.classList.remove('mabile__menu-active');
    status_humburger = 0;
}

HEADERNAVHERF.addEventListener('click', () => {
    removehumburger()
})