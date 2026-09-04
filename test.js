const questions = [

    {
        question: "Твій друг потрапив у неприємність. Ти...",
        answers: [
            {
                text: "Одразу допомагаєш, навіть якщо небезпечно",
                hero: "Captain America"
            },
            {
                text: "Аналізуєш і шукаєш план",
                hero: "Iron Man"
            },
            {
                text: "Намагаєшся залагодити розмовою",
                hero: "Thor"
            },
            {
                text: "Допомагаєш, але хотів би діяти самостійно",
                hero: "Black Widow"
            }
        ]
    },

    {
        question: "Коли виникає конфлікт, ти найчастіше...",
        answers: [
            {
                text: "Захищаю свою позицію до кінця",
                hero: "Iron Man"
            },
            {
                text: "Намагаюся спокійно розібратися, хто правий",
                hero: "Captain America"
            },
            {
                text: "Спершу думаю, як це вплине на інших",
                hero: "Thor"
            },
            {
                text: "Уникаю конфлікту, але якщо треба — дію жорстко",
                hero: "Black Widow"
            }
        ]
    },

    {
        question: "Коли все йде не за планом, ти...",
        answers: [
            {
                text: "Імпровізую на ходу",
                hero: "Iron Man"
            },
            {
                text: "Шукаю новий чіткий план",
                hero: "Captain America"
            },
            {
                text: "Приймаю ситуацію і рухаюся далі",
                hero: "Thor"
            },
            {
                text: "Тримаю емоції при собі й шукаю вихід",
                hero: "Black Widow"
            }
        ]
    },

    {
        question: "Що для тебе найважливіше в дружбі?",
        answers: [
            {
                text: "Щирість і можливість бути собою",
                hero: "Iron Man"
            },
            {
                text: "Вірність",
                hero: "Captain America"
            },
            {
                text: "Взаємна підтримка",
                hero: "Thor"
            },
            {
                text: "Довіра",
                hero: "Black Widow"
            }
        ]
    },

    {
        question: "Якщо тебе сильно образили, ти...",
        answers: [
            {
                text: "Можу відповісти одразу",
                hero: "Iron Man"
            },
            {
                text: "Скажу прямо, що мене зачепило",
                hero: "Captain America"
            },
            {
                text: "Спочатку заспокоюся, а потім вирішу, що робити",
                hero: "Thor"
            },
            {
                text: "Замкнуся в собі й зроблю висновки",
                hero: "Black Widow"
            }
        ]
    },

    {
        question: "Яку роль ти зазвичай займаєш у компанії?",
        answers: [
            {
                text: "Генерую ідеї та жартую",
                hero: "Iron Man"
            },
            {
                text: "Організовую всіх",
                hero: "Captain America"
            },
            {
                text: "Створюю атмосферу",
                hero: "Thor"
            },
            {
                text: "Більше спостерігаю за іншими",
                hero: "Black Widow"
            }
        ]
    },

    {
        question: "Коли потрібно прийняти важливе рішення...",
        answers: [
            {
                text: "Покладаюся на логіку",
                hero: "Iron Man"
            },
            {
                text: "Думаю, що буде правильним",
                hero: "Captain America"
            },
            {
                text: "Слухаю інтуїцію",
                hero: "Thor"
            },
            {
                text: "Аналізую всі можливі наслідки",
                hero: "Black Widow"
            }
        ]
    },

    {
        question: "Що ти робиш, коли бачиш несправедливість?",
        answers: [
            {
                text: "Втручаюся, навіть якщо це створить проблеми",
                hero: "Iron Man"
            },
            {
                text: "Намагаюся зрозуміти обидві сторони",
                hero: "Captain America"
            },
            {
                text: "Шукаю спосіб виправити ситуацію",
                hero: "Thor"
            },
            {
                text: "Спочатку спостерігаю і збираю інформацію",
                hero: "Black Widow"
            }
        ]
    },

    {
        question: "Як ти ставишся до своїх помилок?",
        answers: [
            {
                text: "Жартую з них, але роблю висновки",
                hero: "Iron Man"
            },
            {
                text: "Визнаю їх і намагаюся виправити",
                hero: "Captain America"
            },
            {
                text: "Не люблю довго себе за них мучити",
                hero: "Thor"
            },
            {
                text: "Довго аналізую, що зробила не так",
                hero: "Black Widow"
            }
        ]
    },

    {
        question: "Що тебе найбільше мотивує?",
        answers: [
            {
                text: "Бажання довести, що я можу",
                hero: "Iron Man"
            },
            {
                text: "Бажання захистити близьких",
                hero: "Captain America"
            },
            {
                text: "Свобода та нові пригоди",
                hero: "Thor"
            },
            {
                text: "Бажання стати сильнішою",
                hero: "Black Widow"
            }
        ]
    },

    {
        question: "Якби ти отримала суперсилу, ти б...",
        answers: [
            {
                text: "Використовувала її, щоб створювати щось нове",
                hero: "Iron Man"
            },
            {
                text: "Захищала людей",
                hero: "Captain America"
            },
            {
                text: "Шукала пригоди",
                hero: "Thor"
            },
            {
                text: "Не розповідала нікому та використовувала лише за необхідності",
                hero: "Black Widow"
            }
        ]
    }

];


// ===============================
// БАЛИ
// ===============================

const scores = {
    "Iron Man": 0,
    "Captain America": 0,
    "Thor": 0,
    "Black Widow": 0
};


let currentQuestion = 0;


// ===============================
// HTML ЕЛЕМЕНТИ
// ===============================

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const resultElement = document.getElementById("result");
const resultText = document.getElementById("resultText");
const resultImage = document.getElementById("resultImage");
const restartButton = document.getElementById("restartButton");


// ===============================
// ПОКАЗ ПИТАННЯ
// ===============================

function showQuestion() {

    const question = questions[currentQuestion];

    questionElement.textContent = question.question;

    answersElement.innerHTML = "";

    resultText.textContent = "";

    resultImage.style.display = "none";

    restartButton.style.display = "none";


    question.answers.forEach(function(answer) {

        const button = document.createElement("button");

        button.textContent = answer.text;

        button.className = `
            w-full
            bg-black/70
            border
            border-yellow-400/40
            text-yellow-400
            px-6
            py-4
            rounded-xl
            text-lg
            transition
            duration-300
            hover:bg-yellow-400
            hover:text-black
            hover:-translate-y-1
            hover:shadow-[0_0_20px_rgba(250,204,21,0.4)]
        `;


        button.addEventListener("click", function() {

            chooseAnswer(answer);

        });


        answersElement.appendChild(button);

    });

}


// ===============================
// ВИБІР ВІДПОВІДІ
// ===============================

function chooseAnswer(answer) {

    scores[answer.hero]++;

    currentQuestion++;


    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        showResult();

    }

}


// ===============================
// ПОКАЗ РЕЗУЛЬТАТУ
// ===============================

function showResult() {

    questionElement.textContent = "";

    answersElement.innerHTML = "";


    let maxScore = Math.max(
        scores["Iron Man"],
        scores["Captain America"],
        scores["Thor"],
        scores["Black Widow"]
    );


    const winners = Object.keys(scores).filter(function(hero) {

        return scores[hero] === maxScore;

    });


    // ===============================
    // НІЧИЯ
    // ===============================

    if (winners.length > 1) {

        resultText.textContent = "У тебе нічия між героями!";

        resultImage.style.display = "none";

    }


    // ===============================
    // Є ПЕРЕМОЖЕЦЬ
    // ===============================

    else {

        const winner = winners[0];


        if (winner === "Iron Man") {

            resultText.textContent =
                "Вітаю, ти Залізна Людина!";

            resultImage.src =
                "images/tony4.jpg";

            resultImage.alt =
                "Залізна Людина";

        }


        else if (winner === "Captain America") {

            resultText.textContent =
                "Вітаю, ти Капітан Америка!";

            resultImage.src =
                "images/captain.jpg";

            resultImage.alt =
                "Капітан Америка";

        }


        else if (winner === "Thor") {

            resultText.textContent =
                "Вітаю, ти Тор!";

            resultImage.src =
                "images/tor.jpg";

            resultImage.alt =
                "Тор";

        }


        else if (winner === "Black Widow") {

            resultText.textContent =
                "Вітаю, ти Чорна Вдова!";

            resultImage.src =
                "images/black-widow.jpg";

            resultImage.alt =
                "Чорна Вдова";

        }


        resultImage.style.display = "block";

    }


    restartButton.style.display = "inline-block";

}


// ===============================
// ПОЧАТИ ЗАНОВО
// ===============================

restartButton.addEventListener("click", function() {

    currentQuestion = 0;


    scores["Iron Man"] = 0;
    scores["Captain America"] = 0;
    scores["Thor"] = 0;
    scores["Black Widow"] = 0;


    showQuestion();

});


// ===============================
// ЗАПУСК
// ===============================

showQuestion();