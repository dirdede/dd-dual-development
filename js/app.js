const app = document.getElementById("app");

document.querySelectorAll("nav button").forEach(btn => {
  btn.addEventListener("click", () => renderView(btn.dataset.view));
});

function renderView(view) {
  app.innerHTML = "";

  if (view === "home") renderHome();
  if (view === "individual") renderIndividual();
  if (view === "shared") renderShared();
  if (view === "timeline") renderTimeline();
  if (view === "checkin") renderCheckins();
}

function renderHome() {
  app.innerHTML = `
    <div class="card">
      <h2>Today for Us</h2>
      <p><strong>You:</strong> ${user.todayFocus} (${user.mood})</p>
      <p><strong>${partner.name}:</strong> ${partner.todayFocus} (${partner.mood})</p>
      <p><strong>Us:</strong> ${sharedIntention}</p>
    </div>
  `;
}

function renderIndividual() {
  app.innerHTML = `
    <div class="card">
      <h2>Individual Space</h2>
      <p>This space protects personal growth, reflection, and privacy.</p>
      <span class="tag">Private-first</span>
      <span class="tag">Reflection</span>
    </div>
  `;
}

function renderShared() {
  let goalsHTML = sharedGoals.map(g => `
    <div class="card">
      <h3>${g.title}</h3>
      <p>${g.why}</p>
      <p>Progress: ${g.progress}%</p>
    </div>
  `).join("");

  app.innerHTML = `
    <h2>Shared Goals</h2>
    ${goalsHTML}
  `;
}

function renderTimeline() {
  app.innerHTML = `
    <div class="card">
      <h2>Timeline</h2>
      <p>Moments, goals, and reflections over time.</p>
    </div>
  `;
}

function renderCheckins() {
  let html = checkins.map(c => `
    <div class="card">
      <h3>${c.week}</h3>
      <p><strong>Win:</strong> ${c.win}</p>
      <p><strong>Challenge:</strong> ${c.challenge}</p>
      <p><strong>Appreciation:</strong> ${c.appreciation}</p>
    </div>
  `).join("");

  app.innerHTML = html;
}

renderView("home");
