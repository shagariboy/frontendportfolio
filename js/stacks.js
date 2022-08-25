//local stacks data

const stacks = [
    {
        id: 1,
        img: '/assets/img/stacks/icons8-html-5-480.png',
        text: 'HTML',
    },
    {
        id: 2,
        img: '/assets/img/stacks/icons8-css3-480.png',
        text: 'CSS',
    },
    {
        id: 3,
        img: '/assets/img/stacks/icons8-wordpress-480.png',
        text: 'WORDPRESS',
    },{
        id: 4,
        img: '/assets/img/stacks/icons8-react-480.png',
        text: 'REACT',
    },
    {
        id: 5,
        img: '/assets/img/stacks/icons8-python-1480.png',
        text: 'PYTHON',
    },
    {
        id: 6,
        img: '/assets/img/stacks/icons8-javascript-480.png',
        text: 'JAVASCRIPT',
    },
    {
        id: 7,
        img: '/assets/img/stacks/icons8-bootstrap-480.png',
        text: 'BOOTSTRAP',
    },
    {
        id: 8,
        img: '/assets/img/stacks/icons8-heroku-480.png',
        text: 'HEROKU',
    },
    {
        id: 9,
        img: '/assets/img/stacks/icons8-visual-studio-480.png',
        text: 'VSCODE',
    }

];

//
const img = document.getElementById("stack-type");
const text = document.getElementById("stack-name");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
    const item = stacks[currentItem];
    img.src = item.img;
    text.textContent = item.text;
});

//show stack based on item
function showSkill(skill) {
    const item = stacks[skill];
    img.src = item.img;
    text.textContent = item.text;
}

//show next stack
nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > stacks.length - 1) {
        currentItem = 0;
    }
    showSkill(currentItem);
});

//show prev stack
prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showSkill(currentItem);
})

// show random person
randomBtn.addEventListener("click", function () {
    console.log("hello");
  
    currentItem = Math.floor(Math.random() * stacks.length);
    showSkill(currentItem);
  });