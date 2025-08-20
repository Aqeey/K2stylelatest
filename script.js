// Root element
const app = document.getElementById("app");

// ===== Header =====
const header = document.createElement("header");
header.className = "header";
header.innerHTML = `
  <div class="logo">🚗 Motor Claims</div>
  <button id="toggle-btn"><i class="fas fa-bars"></i></button>
`;
app.appendChild(header);

// ===== Container =====
const container = document.createElement("div");
container.className = "container";
app.appendChild(container);

// ===== Sidebar =====
const sidebar = document.createElement("aside");
sidebar.className = "sidebar";
sidebar.id = "sidebar";

sidebar.innerHTML = `
  <nav>
    <a href="#registration" class="active"><i class="fas fa-clipboard-list"></i><span> Motor Claim Registration</span></a>
    <a href="#insured"><i class="fas fa-user-shield"></i><span> Insured Details</span></a>
    <a href="#vehicle"><i class="fas fa-car"></i><span> Vehicle & Driver Details</span></a>
    <a href="#policy"><i class="fas fa-file-contract"></i><span> Policy Details</span></a>
    <a href="#additional"><i class="fas fa-plus-circle"></i><span> Additional Details</span></a>
  </nav>
`;
container.appendChild(sidebar);

// ===== Content =====
const content = document.createElement("main");
content.className = "content";

const sections = [
  { id: "registration", title: "Motor Claim Registration" },
  { id: "insured", title: "Insured Details" },
  { id: "vehicle", title: "Vehicle & Driver Details" },
  { id: "policy", title: "Policy Details" },
  { id: "additional", title: "Additional Details" },
];

// Loop to create sections
sections.forEach(sec => {
  const section = document.createElement("section");
  section.className = "card";
  section.id = sec.id;
  section.innerHTML = `<h2>${sec.title}</h2><p>Content goes here...</p>`;
  content.appendChild(section);
});

container.appendChild(content);

// ===== Sidebar toggle =====
document.addEventListener("click", (e) => {
  if (e.target.closest("#toggle-btn")) {
    sidebar.classList.toggle("collapsed");
    content.classList.toggle("collapsed");
  }
});
