// Завантажує дані фільмів з JSON і малює картки та хронологію MCU.
const DATA_URL = "/data/movies.json";

const CARD_CLASS =
  "bg-black/70 border border-yellow-400/30 rounded-xl overflow-hidden " +
  "transition duration-300 hover:-translate-y-2 hover:border-yellow-400 " +
  "hover:shadow-[0_0_25px_rgba(250,204,21,0.35)]";

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text; // textContent, не innerHTML
  return node;
}

function createMovieCard(movie) {
  const card = el("div", CARD_CLASS);

  const img = el("img", "w-full h-[380px] object-cover transition duration-500 hover:scale-105");
  img.src = movie.image;
  img.alt = movie.alt || movie.title;
  img.loading = "lazy";

  const body = el("div", "p-5");
  body.append(
    el("h2", "avengers-font text-3xl text-yellow-400 mb-2", movie.title),
    el("p", "text-yellow-300 mb-3", movie.year),
    el("p", "text-white leading-relaxed", movie.description)
  );

  card.append(img, body);
  return card;
}

function createTimelineLink(item) {
  const a = el("a", "block text-yellow-400 text-lg hover:text-white transition", `${item.order}. ${item.title}`);
  a.href = item.url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  return a;
}

function showError(container, message) {
  container.replaceChildren(el("p", "text-red-400", message));
}

async function init() {
  const moviesList = document.getElementById("movies-list");
  const timelineList = document.getElementById("timeline-list");
  if (!moviesList || !timelineList) return;

  try {
    const response = await fetch(DATA_URL);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();

    moviesList.replaceChildren(...data.movies.map(createMovieCard));
    const sorted = [...data.timeline].sort((a, b) => a.order - b.order);
    timelineList.replaceChildren(...sorted.map(createTimelineLink));
  } catch (error) {
    console.error("Не вдалося завантажити movies.json:", error);
    showError(moviesList, "Не вдалося завантажити список фільмів. Спробуйте оновити сторінку.");
    showError(timelineList, "Не вдалося завантажити хронологію.");
  }
}

init();