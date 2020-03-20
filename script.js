// Menu navigation
document.addEventListener('scroll', onScroll);

function onScroll (event) {
   const curPos = window.scrollY;
   const divs = document.querySelectorAll('#main>section');
   const links = document.querySelectorAll('#menu a')

   divs.forEach((el) => {
        if (el.offsetTop <= curPos && (el.offsetTop + el.offsetHeight) > curPos) {
            links.forEach((a) => {
                a.classList.remove('active');
                if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
                    a.classList.add('active');
                }
            })
        }
    });
}

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
    if (document.getElementById('subject-name').value !== '' && document.getElementById('subject-email').value !== '') {
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

document.querySelector('.phone--horizontal').addEventListener('click', function(){
    document.querySelector('.display--horizontal').classList.remove('display--horizontal');
});

//Portfolio images border
const PORTFOLIO_IMAGES = document.getElementById('portfolio__images');
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
        selectClickedTag(clickedTag)
    }
})


const removeSelectedTags = () => {
    let tags = document.querySelectorAll('.portfolio-menu__title');
    tags.forEach(tag => {
        tag.classList.remove('selected');
    })
}

const selectClickedTag = (clickedTag) =>{
    clickedTag.classList.add('selected');
}
