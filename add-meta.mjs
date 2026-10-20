import fs from "node:fs";

// Перевір адресу свого сайту на Vercel
const SITE = "https://avengers-site.vercel.app";

const pages = {
  "author.html": ["Про автора", "Про автора фан-сайту Avengers: хто створив проєкт і навіщо."],
  "black_widow.html": ["Black Widow", "Black Widow (Наташа Романова): історія героїні, її здібності та місце у Всесвіті Marvel."],
  "captain1.html": ["Captain America", "Captain America (Стів Роджерс): історія суперсолдата, його щит і роль серед Месників."],
  "comics.html": ["Комікси", "Комікси про Месників: ключові серії та історії, з яких виріс Всесвіт Marvel."],
  "hawkeye.html": ["Hawkeye", "Hawkeye (Клінт Бартон): історія найкращого лучника серед Месників."],
  "heroes.html": ["Герої", "Герої Marvel: Iron Man, Captain America, Thor, Hulk, Hawkeye і Black Widow."],
  "hulk.html": ["Hulk", "Hulk (Брюс Беннер): історія вченого, який перетворюється на зеленого велета."],
  "ironman.html": ["Iron Man", "Iron Man (Тоні Старк): історія винахідника, бронекостюмів і першого героя Marvel Studios."],
  "movies.html": ["Фільми", "Фільми Marvel: картки ключових стрічок і повна хронологія MCU з посиланнями на IMDb."],
  "nick_fury.html": ["Nick Fury", "Nick Fury: директор S.H.I.E.L.D. і людина, яка створила команду Месників."],
  "test.html": ["Тест", "Інтерактивний тест про Месників: перевір, наскільки добре ти знаєш Всесвіт Marvel."],
  "thor.html": ["Thor", "Thor: історія бога грому, його молот Мʼйольнір і шлях до справжнього героя."],
  "universe.html": ["Всесвіт", "Всесвіт Marvel: фільми, комікси та тест для справжніх фанатів Месників."],
};

const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;");

for (const [file, [title, desc]] of Object.entries(pages)) {
  if (!fs.existsSync(file)) { console.log("немає файлу:", file); continue; }
  let html = fs.readFileSync(file, "utf8");
  let add = "";

  if (!/<meta\s+name=["']description["']/i.test(html)) {
    add += `\n    <meta name="description" content="${esc(desc)}">`;
  }
  if (!/property=["']og:title["']/i.test(html)) {
    add += `
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Avengers">
    <meta property="og:title" content="${esc(title)} — Avengers">
    <meta property="og:description" content="${esc(desc)}">
    <meta property="og:url" content="${SITE}/${file}">
    <meta property="og:image" content="${SITE}/og_cover.jpg">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:locale" content="uk_UA">
    <meta name="twitter:card" content="summary_large_image">`;
  }

  if (!add) { console.log("вже є:", file); continue; }
  if (!/<\/title>/i.test(html)) { console.log("немає </title>:", file); continue; }
  html = html.replace(/<\/title>/i, `</title>${add}`);
  fs.writeFileSync(file, html);
  console.log("оновлено:", file);
}