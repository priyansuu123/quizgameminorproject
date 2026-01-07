const questions = [
    {
        question: "Which animal is known as the King of the Jungle?",
        options: ["Tiger", "Elephant", "Lion", "Leopard"],
        answer: 2
    },
    {
        question: "What comes next: 2, 4, 8, 16, ?",
        options: ["18", "24", "32", "64"],
        answer: 2
    },
    {
        question: "Which one is not a fruit?",
        options: ["Apple", "Banana", "Potato", "Mango"],
        answer: 2
    },
    {
        question: "Which color do you get by mixing red and blue?",
        options: ["Green", "Purple", "Orange", "Yellow"],
        answer: 1
    },
    {
        question: "How many hours are there in one day?",
        options: ["12", "18", "24", "36"],
        answer: 2
    },
    {
        question: "Which planet is the largest?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: 2
    },
    {
        question: "What do bees produce?",
        options: ["Milk", "Honey", "Silk", "Butter"],
        answer: 1
    },
    {
        question: "Which vehicle has two wheels?",
        options: ["Car", "Bus", "Bicycle", "Truck"],
        answer: 2
    },
    {
        question: "Which shape has three sides?",
        options: ["Square", "Rectangle", "Triangle", "Circle"],
        answer: 2
    },
    {
        question: "Which animal moves the slowest?",
        options: ["Dog", "Horse", "Snail", "Cat"],
        answer: 2
    },
    {
        question: "Which day comes after Friday?",
        options: ["Thursday", "Saturday", "Sunday", "Monday"],
        answer: 1
    },
    {
        question: "Which object is used to tell time?",
        options: ["Scale", "Thermometer", "Watch", "Compass"],
        answer: 2
    },
    {
        question: "Which drink is usually hot?",
        options: ["Juice", "Cold drink", "Tea", "Milkshake"],
        answer: 2
    },
    {
        question: "Which one is used to write?",
        options: ["Pen", "Eraser", "Scale", "Sharpener"],
        answer: 0
    },
    {
        question: "Which season comes after summer?",
        options: ["Winter", "Rainy", "Spring", "Autumn"],
        answer: 3
    }
];

let current = 0;
let score = 0;
let selectedIndex = null;

const qText = document.getElementById("q");
const opBox = document.getElementById("op");
const startBtn = document.getElementById("btn1");
const nextBtn = document.getElementById("btn2");
const result = document.getElementById("res");

startBtn.onclick = startQuiz;
nextBtn.onclick = nextQuestion;

function startQuiz() {
    startBtn.style.display = "none";
    nextBtn.style.display = "inline";
    showQuestion();
}

function showQuestion() {
    opBox.innerHTML = "";
    selectedIndex = null;

    qText.innerText = questions[current].question;

    questions[current].options.forEach((opt, i) => {
        const div = document.createElement("div");
        div.className = "option";
        div.innerText = opt;

        div.onclick = function () {
            selectOption(div, i);
        };

        opBox.appendChild(div);
    });
}

function selectOption(element, index) {
    const all = document.querySelectorAll(".option");
    all.forEach(opt => opt.classList.remove("active"));

    element.classList.add("active");
    selectedIndex = index;
}

function nextQuestion() {
    if (selectedIndex === null) {
        alert("Please select an option");
        return;
    }

    if (selectedIndex === questions[current].answer) {
        score++;
    }

    current++;

    if (current < questions.length) {
        showQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    qText.innerText = "Quiz Completed 🎉";
    opBox.innerHTML = "";
    nextBtn.style.display = "none";
    result.innerText = "Your Score: " + score + " / " + questions.length;
}
