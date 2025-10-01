const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSm9UDeOeEQ61iJvCgB0jtnOcYoinpOdpN6AdL0rHLn22lpo0_JylOaDamiphnvQQbiraj9BKZEFx8d/pub?output=csv";

async function loadData() {
  try {
    const response = await fetch(SHEET_URL);
    const csvText = await response.text();
    const rows = csvText.trim().split("\n").map(r => r.split(","));
    
    const tbody = document.querySelector("#leaderboard tbody");
    tbody.innerHTML = ""; // очистка перед обновлением

    // пропускаем заголовок (с первой строки)
    rows.slice(1).forEach(row => {
      const tr = document.createElement("tr");
      row.forEach(cell => {
        const td = document.createElement("td");
        td.textContent = cell;
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
  } catch (err) {
    console.error("Ошибка загрузки данных:", err);
  }
}

// первая загрузка
loadData();
// автообновление каждые 60 секунд
setInterval(loadData, 60000);

// ===== Анимация иконок =====
const icons = ["🛠️", "💻", "🧺", "📺", "🔧", "🔨", "🪛", "⚡"];
const background = document.querySelector(".background");

function spawnIcon() {
  const icon = document.createElement("div");
  icon.className = "floating-icon";
  icon.textContent = icons[Math.floor(Math.random() * icons.length)];
  icon.style.left = Math.random() * 100 + "vw";
  icon.style.animationDuration = (5 + Math.random() * 10) + "s";
  background.appendChild(icon);

  setTimeout(() => icon.remove(), 15000);
}

setInterval(spawnIcon, 1000);
