// gallery.js
// Завантажує список героїв із /data.json і малює галерею.
// Лайтбокс (GLightbox) запускається ПІСЛЯ того, як картинки з'явилися на сторінці.

// Захист: перетворює спецсимволи на безпечний текст,
// щоб дані з JSON ніколи не могли стати HTML-кодом.
function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

async function loadGallery() {
    const grid = document.getElementById("gallery-grid");

    try {
        const res = await fetch("/data.json");

        // fetch не кидає помилку на 404, тому статус перевіряємо вручну
        if (!res.ok) throw new Error("HTTP " + res.status);

        const heroes = await res.json();

        grid.innerHTML = heroes.map(function (h, index) {

            // перші три картинки (перший рядок) вантажимо одразу, решту - коли до них доскролять
            const lazy = index > 2 ? 'loading="lazy"' : "";

            const image = escapeHtml(h.image);
            const name = escapeHtml(h.name);

            return `
            <div class="overflow-hidden rounded-xl border border-accent/30 dark:border-yellow-400/30 bg-white/60 dark:bg-black/50">
                <a href="${image}" class="glightbox">
                    <img src="${image}" alt="${name}" ${lazy}
                         class="w-full h-72 object-cover transition duration-500 hover:scale-110">
                </a>
            </div>
            `;
        }).join("");

        // якщо бібліотека з CDN не завантажилась, галерея все одно залишається на екрані
        if (typeof GLightbox === "function") {
            GLightbox({ selector: ".glightbox" });
        } else {
            console.warn("GLightbox недоступний: картинки відкриваються як звичайні посилання");
        }

    } catch (e) {
        console.error("Не вдалося завантажити дані", e);
        grid.innerHTML =
            "<p class='col-span-full text-center text-accent dark:text-yellow-400'>Не вдалося завантажити галерею.</p>";
    }
}

loadGallery();