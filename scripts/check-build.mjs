// scripts/check-build.mjs
// Автоматична перевірка зібраного сайту (папка dist).
// Запуск: npm run build, потім npm test
//
// Що перевіряє:
//   1. На кожній сторінці є <title>, meta description і атрибут lang
//   2. Усі локальні посилання, картинки та скрипти в HTML існують
//   3. Усі url(...) у CSS ведуть на існуючі файли
//   4. Картинки, згадані в JSON-файлах і в JS (шлях /images/...), існують

import fs from "fs";
import path from "path";

const DIST = "dist";
const errors = [];

if (!fs.existsSync(DIST)) {
    console.error("Папки dist немає. Спочатку виконай: npm run build");
    process.exit(1);
}


// ---------------------------------------------------------
// Допоміжні функції
// ---------------------------------------------------------

function exists(reference) {
    // прибираємо ?query та #якір, декодуємо кирилицю й пробіли
    const clean = decodeURI(reference.split("#")[0].split("?")[0]);
    return fs.existsSync(path.join(DIST, clean));
}

function isLocal(reference) {
    return (
        reference !== "/" &&
        !reference.startsWith("#") &&
        !reference.startsWith("//") &&
        !/^[a-z][a-z0-9+.-]*:/i.test(reference) // http:, https:, mailto:, tel:, data: ...
    );
}

function walk(dir) {
    return fs.readdirSync(dir, { withFileTypes: true }).flatMap(function (entry) {
        const full = path.join(dir, entry.name);
        return entry.isDirectory() ? walk(full) : [full];
    });
}

function checkReference(source, reference) {
    if (!isLocal(reference)) return;

    if (!exists(reference)) {
        errors.push(`${source}: файл не знайдено -> ${reference}`);
    }
}


// ---------------------------------------------------------
// 1 і 2. HTML-сторінки
// ---------------------------------------------------------

const pages = fs.readdirSync(DIST).filter(function (f) {
    return f.endsWith(".html");
});

if (pages.length < 3) {
    errors.push(`У збірці лише ${pages.length} HTML-сторінок (потрібно щонайменше 3)`);
}

for (const page of pages) {
    const html = fs.readFileSync(path.join(DIST, page), "utf8");

    if (!/<title>[^<]+<\/title>/.test(html)) {
        errors.push(`${page}: немає <title>`);
    }
    if (!/<meta\s+name="description"\s+content="[^"]+"/.test(html)) {
        errors.push(`${page}: немає meta description`);
    }
    if (!/<html[^>]*\slang="/.test(html)) {
        errors.push(`${page}: у <html> немає атрибута lang`);
    }

    for (const match of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
        checkReference(page, match[1]);
    }
}


// ---------------------------------------------------------
// 3, 4. CSS, JS і JSON у збірці
// ---------------------------------------------------------

for (const file of walk(DIST)) {
    const ext = path.extname(file);
    const name = path.relative(DIST, file);

    if (![".css", ".js", ".json"].includes(ext)) continue;

    const text = fs.readFileSync(file, "utf8");

    if (ext === ".css") {
        for (const match of text.matchAll(/url\(\s*["']?([^"')]+)["']?\s*\)/g)) {
            checkReference(name, match[1]);
        }
    } else {
        // у JS і JSON шукаємо шляхи виду /images/файл.розширення
        for (const match of text.matchAll(/["'](\/images\/[^"'\s]+\.[a-z0-9]+)["']/gi)) {
            checkReference(name, match[1]);
        }
    }
}


// ---------------------------------------------------------
// Підсумок
// ---------------------------------------------------------

if (errors.length > 0) {
    console.error(`\nЗнайдено помилок: ${errors.length}\n`);
    errors.forEach(function (error) {
        console.error(" - " + error);
    });
    process.exit(1);
}

console.log(`Перевірка пройдена: ${pages.length} сторінок, усі посилання та файли на місці.`);