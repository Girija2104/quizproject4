const questions = [
    {
        question: "What is Java?",
        answers: ["A programming language", "A coffee brand", "An island"],
        correct: 0
    },
    {
        question: "Which of the following is NOT a Java keyword?",
        answers: ["class", "function", "if", "switch"],
        correct: 1
    },
    {
        question: "What is the output of 'System.out.println(1 + 2 + \"3\")' in Java?",
        answers: ["123", "6", "15"],
        correct: 0
    },
    {
        question: "What does the 'public static void main(String[] args)' method do in Java?",
        answers: [
            "It defines the main method of a Java program",
            "It prints 'Hello, World!'",
            "It is a constructor for Java classes",
            "It receives command-line arguments and starts the program execution"
        ],
        correct: 3
    },
    {
        question: "What is the Java Virtual Machine (JVM)?",
        answers: [
            "A virtual reality game",
            "A virtual machine that emulates coffee machines",
            "A part of the Java Runtime Environment (JRE) that executes Java bytecode",
            "A tool to compile Java code into machine code"
        ],
        correct: 2
    }
];

let score = 0;

function displayQuestions() {
    const form = document.getElementById("quiz-form");
    questions.forEach((question, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.innerHTML = `<p>${index + 1}. ${question.question}</p>`;
        
        question.answers.forEach((answer, ansIndex) => {
            const input = document.createElement("input");
            input.type = "radio";
            input.name = `q${index}`;
            input.value = ansIndex;
            input.required = true;
            input.id = `q${index}a${ansIndex}`;
            
            const label = document.createElement("label");
            label.textContent = answer;
            label.setAttribute("for", `q${index}a${ansIndex}`);
            
            questionDiv.appendChild(input);
            questionDiv.appendChild(label);
        });
        
        form.appendChild(questionDiv);
    });
}

function submitQuiz() {
    const form = document.getElementById("quiz-form");
    let userScore = 0;
    
    questions.forEach((question, index) => {
        const selectedAnswer = parseInt(form.elements[`q${index}`].value);
        if (selectedAnswer === question.correct) {
            userScore++;
        }
    });

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<p>Your score: ${userScore} out of ${questions.length}</p>`;
}

displayQuestions();