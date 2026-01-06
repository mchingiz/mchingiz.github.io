const answers = {
    "1": "AAAAA",
    "2": "BBB",
    "3": "CCC",
    "4": "DDD",
    "5": "EEE",
    "6": "AAA",
    "7": "AAA",
    "8": "AAA",
    "9": "AAA",
    "10": "AAA",
    "11": "AAA",
    "12": "AAA",
    "13": "AAA",
    "14": "AAA",
    "15": "AAA",
    "16": "AAA",
    "17": "AAA",
    "18": "AAA",
    "19": "AAA",
    "20": "AAA",
    "21": "AAA",
    "22": "AAA",
    "23": "AAA",
    "24": "AAA",
    "25": "AAA",
    "26": "AAA",
    "27": "AAA",
    "28": "AAA",
    "29": "AAA",
    "30": "AAA",
    "31": "AAA",
    "32": "AAA",
    "33": "AAA",
    "34": "AAA",
    "35": "AAA",
    "36": "AAA",
    "37": "AAA",
    "38": "AAA",
    "39": "AAA",
    "40": "AAA",
    "41": "AAA",
    "42": "AAA",
    "43": "AAA",
    "44": "AAA",
    "45": "AAA",
    "46": "AAA",
    "47": "AAA",
    "48": "AAA",
    "49": "AAA",
    "50": "AAA"
}

// index.js
const newQuestionBtn = document.getElementById('newQuestionBtn');
const questionImage = document.getElementById('questionImage');
const placeholder = document.getElementById('placeholder');
const counter = document.getElementById('counter');
const answerContainer = document.getElementById('answerContainer');
const answerText = document.getElementById('answerText');

// Total number of images (1.png to 300.png)
const TOTAL_QUESTIONS = 5;
let currentQuestion = null;

// Function to get a random question number
function getRandomQuestionNumber() {
    return Math.floor(Math.random() * TOTAL_QUESTIONS) + 1;
}

// Function to display a random question
function displayRandomQuestion() {
    const questionNumber = getRandomQuestionNumber();
    const imagePath = `./images/${questionNumber}.png`;

    answerContainer.style.display = 'none';
    
    // Create a new image to preload and check if it exists
    const img = new Image();
    
    img.onload = () => {
        questionImage.src = imagePath;
        questionImage.style.display = 'block';
        placeholder.style.display = 'none';
        currentQuestion = questionNumber;
        counter.textContent = `Question ${questionNumber} of ${TOTAL_QUESTIONS}`;
    };
    
    img.onerror = () => {
        placeholder.style.display = 'block';
        questionImage.style.display = 'none';
        counter.textContent = `Error loading question ${questionNumber}`;
    };
    
    img.src = imagePath;
}

function revealAnswer() {
    const answer = answers[currentQuestion];
    answerContainer.style.display = 'block';
    answerContainer.textContent = 'Correct answer: ' + answer.toUpperCase();
}

// Event listener for the button
newQuestionBtn.addEventListener('click', displayRandomQuestion);
revealAnswerBtn.addEventListener('click', revealAnswer);

// Optional: Load first question on page load
window.addEventListener('load', () => {
    // Uncomment the line below if you want to load a question automatically on page load
    // displayRandomQuestion();
});
