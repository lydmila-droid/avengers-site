import fs from "node:fs";

const SNIPPET = `
    <script>
      window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
    </script>
    <script defer src="/_vercel/insights/script.js"></script>
`;

for (const file of fs.readdirSync(".").filter((f) => f.endsWith(".html"))) {
  let html = fs.readFileSync(file, "utf8");
  if (html.includes("/_vercel/insights/script.js")) { console.log("вже є:", file); continue; }
  if (!/<\/head>/i.test(html)) { console.log("немає </head>:", file); continue; }
  html = html.replace(/<\/head>/i, `${SNIPPET}</head>`);
  fs.writeFileSync(file, html);
  console.log("оновлено:", file);
}