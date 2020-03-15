const MENU = document.getElementById('menu');
const BUTTON = document.getElementById("subject-submit");
const CLOSE_BUTTON = document.getElementById("close-btn");


MENU.addEventListener('click', (event) =>{
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
    function toAnchor(anchor) {
        window.location = "#" + anchor;
    }
    window.onclick = function () { toAnchor("home"); };
    window.onclick = function () { toAnchor("Our-services"); };
    window.onclick = function () { toAnchor("portfolio"); };
    window.onclick = function () { toAnchor("about-us"); };
    window.onclick = function () { toAnchor("contact"); };
});

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

function nextItem(n) {
    hideItem('to-left')
    changeCurrentItem(n + 1)
    showItem('from-right');
}

function previousItem(n) {
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