// ===============================
// ПИТАННЯ
// ===============================

const questions = [

    {
        question: "На місто напали, а ти опинився поруч. Що робиш першим?",
        answers: [
            { text: "Хапаю все, що є під рукою, і за хвилину вигадую, як цим скористатися", hero: "Iron Man" },
            { text: "Евакуюю людей, і тільки потім думаю про все інше", hero: "Captain America" },
            { text: "Кидаюся в саму гущу: хтось має зустріти загрозу в лоб", hero: "Thor" },
            { text: "Оцінюю ситуацію ззовні й шукаю слабке місце супротивника", hero: "Black Widow" }
        ]
    },

    {
        question: "Команда не погоджується з твоїм рішенням. Як ти діятимеш?",
        answers: [
            { text: "Покажу працюючий прототип: результат переконає краще за слова", hero: "Iron Man" },
            { text: "Стану на своєму, якщо рішення чесне, навіть коли це мені дорого коштуватиме", hero: "Captain America" },
            { text: "Скажу прямо, що думаю, вислухаю всіх і визнаю, якщо помиляюсь", hero: "Thor" },
            { text: "Не сперечатимусь на публіці, а зберу факти й повернуся з готовими аргументами", hero: "Black Widow" }
        ]
    },

    {
        question: "Ти в новому середовищі, де нікого не знаєш. Що робиш?",
        answers: [
            { text: "Швидко знаходжу, чим здивувати, і стаю душею розмови", hero: "Iron Man" },
            { text: "Придивляюся до правил і людей, а потім стаю корисним", hero: "Captain America" },
            { text: "Заводжу розмову з першим-ліпшим і кличу на спільну пригоду", hero: "Thor" },
            { text: "Тихо спостерігаю, поки не зрозумію, хто є хто", hero: "Black Widow" }
        ]
    },

    {
        question: "Чого ти не віддаси за жодних умов?",
        answers: [
            { text: "Свободу вигадувати та експериментувати", hero: "Iron Man" },
            { text: "Свої принципи", hero: "Captain America" },
            { text: "Свою відвагу та свою родину", hero: "Thor" },
            { text: "Незалежність і право самому вирішувати, кому довіряти", hero: "Black Widow" }
        ]
    },

    {
        question: "Твоя помилка зашкодила іншим. Що далі?",
        answers: [
            { text: "Беру відповідальність і будую те, що виправить наслідки", hero: "Iron Man" },
            { text: "Відкрито прошу пробачення й роблю все, щоб це не повторилось", hero: "Captain America" },
            { text: "Приймаю наслідки, даю собі час відновитися й повертаюся сильнішим", hero: "Thor" },
            { text: "Мовчки виправляю все, що можна, і роблю висновки назавжди", hero: "Black Widow" }
        ]
    },

    {
        question: "Ідеальний вихідний це...",
        answers: [
            { text: "Майстерня або проєкт, у який можна зануритися на цілий день", hero: "Iron Man" },
            { text: "Прогулянка містом, розмова зі старим другом і спокій", hero: "Captain America" },
            { text: "Великий стіл, друзі, гучна компанія та пісні", hero: "Thor" },
            { text: "Тиша та день, коли ніхто не вимагає пояснень", hero: "Black Widow" }
        ]
    },

    {
        question: "Тобі кажуть, що завдання неможливе. Твоя реакція?",
        answers: [
            { text: "Чудово: значить, ніхто ще не пробував", hero: "Iron Man" },
            { text: "Пробуватиму знову й знову, скільки потрібно", hero: "Captain America" },
            { text: "Піду вперед з усією силою та вірою в себе", hero: "Thor" },
            { text: "Шукаю обхідний шлях, якого ніхто не помітив", hero: "Black Widow" }
        ]
    },

    {
        question: "Що люди найчастіше кажуть про тебе?",
        answers: [
            { text: "Розумний, але інколи надто впевнений", hero: "Iron Man" },
            { text: "Надійний і чесний, але впертий", hero: "Captain America" },
            { text: "Яскравий і щедрий, але інколи надто гучний", hero: "Thor" },
            { text: "Стриманий, але на тебе завжди можна покластися", hero: "Black Widow" }
        ]
    },

    {
        question: "Як ти відновлюєш сили після важкого тижня?",
        answers: [
            { text: "Занурююсь у цікаву задачу, яка мене захоплює", hero: "Iron Man" },
            { text: "Впорядковую справи й повертаюся до режиму, що працює", hero: "Captain America" },
            { text: "Збираю друзів і влаштовую свято", hero: "Thor" },
            { text: "Усамітнююся й даю собі повну тишу", hero: "Black Widow" }
        ]
    },

    {
        question: "Тобі доручили очолити групу. Який твій стиль?",
        answers: [
            { text: "Добираю найрозумніших, даю їм вигадувати, а напрям задаю сам", hero: "Iron Man" },
            { text: "Іду першим і беру найважче на себе", hero: "Captain America" },
            { text: "Надихаю прикладом і сміливістю", hero: "Thor" },
            { text: "Розподіляю ролі за сильними сторонами й тримаю загальний план у голові", hero: "Black Widow" }
        ]
    },

    {
        question: "Яка перемога для тебе найцінніша?",
        answers: [
            { text: "Коли моя ідея спрацювала так, як ніхто не очікував", hero: "Iron Man" },
            { text: "Коли всі повернулися живими, а правда залишилась на нашому боці", hero: "Captain America" },
            { text: "Коли перемога чесна, а розділити її є з ким", hero: "Thor" },
            { text: "Коли ніхто навіть не дізнався, що загроза була", hero: "Black Widow" }
        ]
    },

    {
        question: "Що лякає тебе найбільше?",
        answers: [
            { text: "Що моїх вигадок не вистачить, щоб захистити близьких", hero: "Iron Man" },
            { text: "Що доведеться обирати між принципами й людьми, яких люблю", hero: "Captain America" },
            { text: "Залишитися самотнім, втративши рідних", hero: "Thor" },
            { text: "Що минуле наздожене й зашкодить тим, хто мені довіряє", hero: "Black Widow" }
        ]
    }

];


// ===============================
// ДАНІ ГЕРОЇВ
// ===============================

const heroes = {
    "Iron Man": {
        name: "Залізна Людина",
        title: "Вітаю, ти Залізна Людина!",
        img: "/images/tony4.webp",
        alt: "Залізна Людина"
    },
    "Captain America": {
        name: "Капітан Америка",
        title: "Вітаю, ти Капітан Америка!",
        img: "/images/captain.webp",
        alt: "Капітан Америка"
    },
    "Thor": {
        name: "Тор",
        title: "Вітаю, ти Тор!",
        img: "/images/tor.webp",
        alt: "Тор"
    },
    "Black Widow": {
        name: "Чорна Вдова",
        title: "Вітаю, ти Чорна Вдова!",
        img: "/images/black-widow.webp",
        alt: "Чорна Вдова"
    }
};


// ===============================
// ПОЄДНАННЯ ДВОХ ГЕРОЇВ = ТРЕТІЙ ГЕРОЙ
// ===============================
// Ключ: імена двох героїв за алфавітом, з'єднані знаком "+"

const hybrids = {
    "Captain America+Iron Man": {
        text: "Хмммм... розум Залізної Людини і принципи Капітана Америка разом дають... Чорну Пантеру! Геніальний винахідник, який веде за собою чесно 👑",
        img: "/images/black4.webp",
        alt: "Чорна Пантера"
    },
    "Iron Man+Thor": {
        text: "Хмммм... блискучий розум і величезна сила в одній людині. Це Халк! 💚",
        img: "/images/hulk.webp",
        alt: "Халк"
    },
    "Black Widow+Iron Man": {
        text: "Хмммм... винахідливість і холодна стратегія разом дають... Доктора Стренджа! Той, хто бачить наперед усі варіанти 🔮",
        img: "/images/dr-strange.webp",
        alt: "Доктор Стрендж"
    },
    "Captain America+Thor": {
        text: "Хмммм... вірність принципам і сміливість у бою це Сокіл! Відданий друг, який завжди прикриє спину 🦅",
        img: "/images/falcon4.webp",
        alt: "Сокіл"
    },
    "Black Widow+Captain America": {
        text: "Хмммм... чесність і стриманість, принципи та стратегія разом дають... Ніка Ф'юрі! Лідер, який бачить усю картину 🕶️",
        img: "/images/nick-fury.webp",
        alt: "Нік Ф'юрі"
    },
    "Black Widow+Thor": {
        text: "Хмммм... тихий спостерігач і душа компанії це Соколине Око! Звичайна людина, яка завжди влучає в ціль 🏹",
        img: "/images/hawkeye.webp",
        alt: "Соколине Око"
    }
};


// ===============================
// БАЛИ ТА СТАН
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
const resultText = document.getElementById("resultText");
const resultImage = document.getElementById("resultImage");
const restartButton = document.getElementById("restartButton");


// ===============================
// ДОПОМІЖНІ ФУНКЦІЇ
// ===============================

// Перемішування масиву (щоб порядок відповідей щоразу був інший)
function shuffle(array) {
    const copy = [...array];

    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }

    return copy;
}

// "А", "А і Б", "А, Б і В"
function joinNames(names) {
    if (names.length === 1) return names[0];
    return names.slice(0, -1).join(", ") + " і " + names[names.length - 1];
}


// ===============================
// ПОКАЗ ПИТАННЯ
// ===============================

function showQuestion() {

    const question = questions[currentQuestion];

    questionElement.textContent =
        `${currentQuestion + 1}/${questions.length}. ${question.question}`;

    answersElement.innerHTML = "";
    resultText.textContent = "";
    resultImage.style.display = "none";
    restartButton.style.display = "none";

    shuffle(question.answers).forEach(function (answer) {

        const button = document.createElement("button");

        button.type = "button";
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

        button.addEventListener("click", function () {
            chooseAnswer(answer);
        });

        answersElement.appendChild(button);
    });
}


// ===============================
// ВИБІР ВІДПОВІДІ
// ===============================

function chooseAnswer(answer) {

    // захист від помилки в імені героя в даних
    if (!(answer.hero in scores)) {
        console.error("Невідомий герой у відповіді:", answer.hero);
        return;
    }

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

    const maxScore = Math.max(...Object.values(scores));

    const winners = Object.keys(scores).filter(function (hero) {
        return scores[hero] === maxScore;
    });


    // ===== НІЧИЯ =====
    if (winners.length > 1) {

        const names = winners.map(function (hero) {
            return heroes[hero].name;
        });

        const pairKey = [...winners].sort().join("+");
        const hybrid = hybrids[pairKey];

        // два героя набрали порівну і є поєднання → показуємо третього героя
        if (winners.length === 2 && hybrid) {

            resultText.textContent = hybrid.text;
            resultImage.src = hybrid.img;
            resultImage.alt = hybrid.alt;
            resultImage.style.display = "block";

        } else {

            // три чи чотири героя набрали порівну (або пари немає в таблиці)
            resultText.textContent =
                `Ого, у тобі змагаються одразу кілька героїв: ${joinNames(names)}! ` +
                `Справжня команда Месників в одній людині 😄`;

            resultImage.style.display = "none";
        }
    }


    // ===== Є ПЕРЕМОЖЕЦЬ =====
    else {

        const hero = heroes[winners[0]];

        resultText.textContent = hero.title;
        resultImage.src = hero.img;
        resultImage.alt = hero.alt;
        resultImage.style.display = "block";
    }

    restartButton.style.display = "inline-block";
}


// ===============================
// ПОЧАТИ ЗАНОВО
// ===============================

restartButton.addEventListener("click", function () {

    currentQuestion = 0;

    Object.keys(scores).forEach(function (hero) {
        scores[hero] = 0;
    });

    showQuestion();
});


// ===============================
// ЗАПУСК
// ===============================

showQuestion();