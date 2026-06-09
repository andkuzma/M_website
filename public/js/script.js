import { startStarStory } from './stars.js';

const answersNo = [
    {
        text: "Не знаю",
        gif: "public/images/16.gif",
        yesGif: "public/images/1.gif",
        noGif: "public/images/3.gif"
    },
    {
        text: "Ой, напевно промахнулася",
        gif: "public/images/15.gif",
        yesGif: "public/images/9.gif",
        noGif: "public/images/11.gif",
    },
    {
        text: "А привітання саме себе не відкриє",
        gif: "public/images/14.gif",
        yesGif: "public/images/13.gif",
        noGif: "public/images/4.gif",
    },
    {
        text: "Ахаха, ти така смішна у мене",
        gif: "public/images/22.gif",
        yesGif: "public/images/1.gif",
        noGif: "public/images/2.gif"
    },
    {
        text: "Точно точно??",
        gif: "public/images/1.jpg",
        yesGif: "public/images/8.gif",
        noGif: "public/images/6.gif",
    },
    {
        text: "Ну добре, я почекаю... секундочку",
        gif: "public/images/21.gif",
        yesGif: "public/images/1.gif",
        noGif: "public/images/3.gif"
    },
    {
        text: "Там далі щось дуже миле",
        gif: "public/images/7.gif",
        yesGif: "public/images/23.gif",
        noGif: "public/images/22.gif"
    },
    {
        text: "Ульооо",
        gif: "public/images/ульо.gif",
        yesGif: "public/images/1.gif",
        noGif: "public/images/18.gif"
    },
    {
        text: "А за кавусю?",
        gif: "public/images/31.gif",
        yesGif: "public/images/32.gif",
        noGif: "public/images/33.gif"
    },
    {
        text: "А за піцу?",
        gif: "public/images/4.jpg",
        yesGif: "public/images/5.jpg",
        noGif: "public/images/40.gif"
    },
    {
        text: "А за картошечку?",
        gif: "public/images/28.gif",
        yesGif: "public/images/27.gif",
        noGif: "public/images/34.gif"
    },
    {
        text: "А по дупі?😄",
        gif: "public/images/12.gif",
        yesGif: "public/images/25.gif",
        noGif: "public/images/24.gif"
    },
    {
        text: "Я б на твоєму місці вже натиснув Так ❤️",
        gif: "public/images/7.jpg",
        yesGif: "public/images/36.gif",
        noGif: "public/images/37.gif",
    },
    {
        text: "Останній шанс перед магією",
        gif: "public/images/16.gif",
        yesGif: "public/images/1.gif",
        noGif: "public/images/35.gif"
    },
    {
        text: "Добре, тепер ловитимеш цю кнопку 😄",
        gif: "public/images/final.gif",
        yesGif: "public/images/26.gif",
        noGif: "public/images/final.gif"
    }
];

const runAwaySteps = [
    { text: "Тепер спробуй мене зловити!", gif: "public/images/final.gif" },
    { text: "Не зловиш 😝", gif: "public/images/final.gif" },
    { text: "Якась у тебе повільна мишка", gif: "public/images/final.gif" },
    { text: "Ого, притормози", gif: "public/images/final.gif" },
    { text: "Може не треба??", gif: "public/images/final.gif" },
    { text: "Краще натисни зелену кнопку", gif: "public/images/final.gif" },
    { text: "Ти знаєш, що треба нажати", gif: "public/images/final.gif" },
    { text: "Більше не буде приколів", gif: "public/images/final.gif" },
    { text: "Можеш вже клацати", gif: "public/images/final.gif" },
    { text: "Ну добре, анекдот", gif: "public/images/final.gif" },
    { text: "Сюди не влізе анекдот, це ж кнопка", gif: "public/images/final.gif" },
    { text: "Клацай на зелену кнопку", gif: "public/images/final.gif" },
    { text: "Тату, що це за ягода? Чорниця. А чому вона червона? Бо ще зелена", gif: "public/images/final.gif" },
    { text: "Я більше не знаю, клацай давай", gif: "public/images/final.gif" },
    { text: "Тепер супер серйозно", gif: "public/images/final.gif" },
    { text: "Кіна не буде", gif: "public/images/final.gif" },
    { text: "Ну, хіба що, на нашому побаченні", gif: "public/images/final.gif" },
    { text: "Тому клацай!", gif: "public/images/final.gif" },
    { text: "Клікай, нажимай, тисни", gif: "public/images/final.gif" },
    { text: "Click, press, klick, drücken", gif: "public/images/final.gif" },
    { text: "Тепер точно все", gif: "public/images/final.gif" },
];

const mainUI = document.getElementById('main-ui');
const starfield = document.getElementById('starfield');
const noButton = document.getElementById('no-button');
const yesButton = document.getElementById('yes-button');
const banner = document.getElementById('banner');
const intro = document.getElementById("intro-screen");

const decisionMusic = document.getElementById('decision-music');
const starsMusic = document.getElementById('stars-music');

let index = 0;
let size = 50;
let fontSize = 16;
let runAwayMode = false;
let runIndex = 0;

intro.addEventListener("click", () => {
    decisionMusic.play();
    intro.classList.add("fade-out");
}, { once: true });

noButton.addEventListener('mouseover', () => {
    if (!runAwayMode) {
        const current = answersNo[index];
        if (current.noHover) return;

        setBanner(current.noGif || "public/images/16.gif");
        return;
    }

    moveButtonRandom();

    if (runIndex < runAwaySteps.length - 1) {
        runIndex++;
    }

    const current = runAwaySteps[runIndex];
    noButton.innerHTML = current.text;
    setBanner(current.gif);
});

yesButton.addEventListener('mouseover', () => {
    const current = answersNo[index];
    setBanner(current.yesGif || "public/images/16.gif");
});

noButton.addEventListener('mouseleave', () => {
    const current = answersNo[index];

    if (current.noHover) return;

    setBanner(current.gif);
});

yesButton.addEventListener('mouseleave', () => {
    const current = answersNo[index];
    setBanner(current.gif);
});

noButton.addEventListener('click', () => {
    const sizes = [40, 50, 30, 35, 45];
    const random = Math.floor(Math.random() * sizes.length);
    size += sizes[random];
    fontSize += 3;

    yesButton.style.height = `${size}px`;
    yesButton.style.width = `${size}px`;
    yesButton.style.fontSize = `${fontSize}px`;

    if (index < answersNo.length - 1) {
        index++;
        noButton.innerHTML = answersNo[index].text;
        const current = answersNo[index];
        setBanner(current.gif);
    } else {
        runAwayMode = true;
        runIndex = 0;

        yesButton.style.height = "200px";
        yesButton.style.width = "200px";
        yesButton.style.fontSize = "16px";
        size = 200;
        fontSize = 16;

        document.body.appendChild(noButton);

        noButton.style.position = "fixed";
        noButton.style.zIndex = "999";
        noButton.style.left = "50%";
        noButton.style.top = "60%";

        noButton.innerHTML = runAwaySteps[0].text;
        setBanner(runAwaySteps[0].gif);

        moveButtonRandom();
    }
});

yesButton.addEventListener('click', () => {
    if (runAwayMode && document.body.contains(noButton)) {
        noButton.remove();
    }

    mainUI.classList.add("fade-out");

    startStarStory();

    setTimeout(() => {
        starfield.classList.add("visible");
    }, 1000);

    fadeAudio(decisionMusic, starsMusic);
});

function setBanner(src) {
    banner.src = "";
    banner.src = src;
}

function moveButtonRandom() {
    const padding = 20;

    const maxX = window.innerWidth - noButton.offsetWidth - padding;
    const maxY = window.innerHeight - noButton.offsetHeight - padding;

    const randomX = padding + Math.random() * maxX;
    const randomY = padding + Math.random() * maxY;

    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
}

function fadeAudio(outgoing, incoming) {
    incoming.volume = 0;
    incoming.play();

    const fadeInterval = setInterval(() => {
        if (outgoing.volume > 0.05) {
            outgoing.volume -= 0.05;
        }

        if (incoming.volume < 0.95) {
            incoming.volume += 0.05;
        }

        if (outgoing.volume <= 0.05) {
            outgoing.pause();
            clearInterval(fadeInterval);
        }
    }, 100);
}

function preloadGifs() {
    const allGifs = [
        ...answersNo.map(a => a.gif),
        ...answersNo.map(a => a.yesGif),
        ...answersNo.map(a => a.noGif),
        ...runAwaySteps.map(a => a.gif)
    ].filter(Boolean);

    allGifs.forEach(path => {
        const img = new Image();
        img.src = path;
    });
}

preloadGifs();
