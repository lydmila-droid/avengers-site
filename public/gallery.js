async function loadGallery() {
    const grid = document.getElementById("gallery-grid");

    try {
        const res = await fetch("/data.json");
        if (!res.ok) throw new Error("HTTP " + res.status);
        const heroes = await res.json();

        grid.innerHTML = heroes.map(h => `
            <div class="overflow-hidden rounded-xl border border-yellow-400/30 bg-black/50">
                <a href="${h.image}" class="glightbox">
                    <img src="${h.image}" alt="${h.name}"
                         class="w-full h-72 object-cover transition duration-500 hover:scale-110">
                </a>
            </div>
        `).join("");

        GLightbox({ selector: ".glightbox" });
    } catch (e) {
        console.error("Не вдалося завантажити дані", e);
        grid.innerHTML = "<p class='col-span-full text-center'>Не вдалося завантажити галерею.</p>";
    }
}

loadGallery();