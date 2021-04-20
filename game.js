const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
// const radiobtn = (document.getElementsByClassName("resize_radio"));
// const radiobtn = document.querySelector(".resize_radio");
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];


let th = {
    e: 0,
    i: 0,
    s: 0,
    n: 0,
    t: 0,
    f: 0,
    j: 0,
    p: 0,
};

let pairs = [["e", "i"], ["s", "n"], ["t", "f"], ["j", "p"]];

let questions = [
    {
        question: "Is it worse to?",
        choice1: {
            opt: "Have your head in the clouds",
            th: "s",
        },
        choice2: {
            opt: "To be in a rut",
            th: "n",
        },
    },
    {
        question: "In making up your mind are you more likely to consider?",
        choice1: {
            opt: "Data",
            th: "t",
        },
        choice2: {
            opt: "Desires",
            th: "f",
        },
    },
    {
        question: "Are you more satisfied having?",
        choice1: {
            opt: "A finished product",
            th: "j",
        },
        choice2: {
            opt: "A new work in progress",
            th: "p",
        },
    },
    {
        question: "Does interaction with strangers?",
        choice1: {
            opt: "Energize you",
            th: "e",
        },
        choice2: {
            opt: "Wear you out",
            th: "i",
        },
    },
    {
        question: "You care more about?",
        choice1: {
            opt: "The big picture",
            th: "n",
        },
        choice2: {
            opt: "Specifics",
            th: "s",
        },
    },
    {
        question: "At work, is it more natural for you to?",
        choice1: {
            opt: "Point out mistakes",
            th: "j",
        },
        choice2: {
            opt: "Try to please others",
            th: "p",
        },
    },
    {
        question: "In sizing up others, do you tend to be?",
        choice1: {
            opt: "Friendly and personal",
            th: "f",
        },
        choice2: {
            opt: "Objective and impersonal",
            th: "t",
        },
    },
    {
        question: "In a group of strangers you tend to?",
        choice1: {
            opt: "Keep your ears open",
            th: "i",
        },
        choice2: {
            opt: "Speak your mind",
            th: "e",
        },
    },
    {
        question: "When going shopping you?",
        choice1: {
            opt: "Tend to evaluate all options and resist closure",
            th: "p",
        },
        choice2: {
            opt: "Decides quickely and finds \"joy\" in closure",
            th: "j",
        },
    },
    {
        question: "You pay attention to?",
        choice1: {
            opt: "Details, realities, past and present",
            th: "s",
        },
        choice2: {
            opt: "Insights, patterns, possibilities and what could be",
            th: "n",
        },
    },
    {
        question: "Which seems to be the greater fault?",
        choice1: {
            opt: "To be too compassionate",
            th: "t",
        },
        choice2: {
            opt: "To be too disspassionate",
            th: "f",
        },
    },
    {
        question: "At a party, do you?",
        choice1: {
            opt: "Interact with many including strangers",
            th: "e",
        },
        choice2: {
            opt: "Interact with a few friends",
            th: "i",
        },
    },

];

//CONSTANTS
const MAX_QUESTIONS = 12;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    // radiobtn.checked = false;
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        let sortedTh = [];
        for (var i in pairs) {
            sortedTh.push(th[pairs[i][0]] > th[pairs[i][1]] ? pairs[i][0] : pairs[i][1]);
        }
        console.log(sortedTh);
        localStorage.setItem("sorted", JSON.stringify(sortedTh));
        // localStorage.setItem("sorted", sortedTh);
        //go to the end page
        // return false;
        return window.location.assign("/end.html");

    }
    questionCounter++;
    progressText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;
    // Update the progress bar
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number].opt;
    });

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        let ch = `choice${selectedAnswer}`;

        const classToApply = "correct"

        let selectedTh = currentQuestion[ch];
        th[selectedTh.th]++; console.log(th);

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});


startGame();
