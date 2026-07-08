const pages = [
  ["home", "Home", "index.html"],
  ["workshop", "Workshop Description", "workshop-description.html"],
  ["papers", "Call for Papers", "call-for-papers.html"],
  ["dates", "Important Dates", "important-dates.html"],
  ["people", "People", "people.html"],
  ["sponsors", "Sponsors", "sponsors.html"]
];

const sidebarLinks = {
  home: [["overview", "Overview"], ["at-a-glance", "At a Glance"], ["key-dates", "Key Dates"], ["contact", "Information"]],
  workshop: [["scope", "Track Scope"], ["motivation", "Motivation"], ["objectives", "Learning Objectives"], ["program", "Program"], ["sustainability", "Sustainability"]],
  papers: [["submission-types", "Submission Types"], ["topics", "Topics of Interest"], ["guidelines", "Guidelines"]],
  dates: [["timeline", "Submission Timeline"], ["conference", "Conference Dates"]],
  people: [["event-organizers", "Event Organizers"], ["keynote-speakers", "Keynote Speakers"], ["webmasters", "Webmasters"]],
  sponsors: [["sponsor-information", "Sponsor Information"], ["partnership", "Partnership"]]
};

const pageKey = document.body.dataset.page || "home";
const currentLabel = pages.find(([key]) => key === pageKey)?.[1] || "Home";

function buildHeader() {
  const nav = pages.map(([key, label, href]) => `<li><a href="${href}"${key === pageKey ? ' class="active" aria-current="page"' : ""}>${label}</a></li>`).join("");
  document.querySelector("#site-header").innerHTML = `
    <header class="site-header">
      <div class="utility-bar">
        <strong>ACM Conference on Trustworthy and Responsible AI and Computing Systems</strong>
        <div class="utility-links"><span>March 7-9, 2027 · Washington, DC</span><a href="https://eigtrust.acm.org/trust2027/" target="_blank" rel="noopener">Official conference site</a></div>
      </div>
      <div class="conference-header">
        <a class="conference-brand" href="index.html" aria-label="ACM TRUST 2027 home">
          <span class="conference-monogram" aria-hidden="true">T</span>
          <span class="brand-copy"><strong>ACM TRUST 2027</strong><span>REED-AI Emerging Area Track</span></span>
        </a>
        <button class="menu-toggle" type="button" aria-label="Toggle page menu" aria-expanded="false">☰</button>
        <nav class="page-nav" aria-label="Conference pages"><ul>${nav}</ul></nav>
      </div>
    </header>`;
}

function buildSidebar() {
  const anchors = (sidebarLinks[pageKey] || []).map(([id, label], index) => `<a href="#${id}"${index === 0 ? ' class="active"' : ""}>${label}</a>`).join("");
  document.querySelector("#site-sidebar").innerHTML = `
    <aside class="anchor-sidebar" aria-label="On this page">
      <div class="sidebar-mark"><span class="sidebar-monogram" aria-hidden="true">T</span><div><strong>${currentLabel}</strong><span>ACM TRUST 2027</span></div></div>
      <p class="anchor-title">On this page</p>
      <nav class="anchor-nav">${anchors}</nav>
      <div class="sidebar-meta">Washington, DC · March 7-9, 2027</div>
    </aside>`;
}

function buildFooter() {
  document.querySelector("#site-footer").innerHTML = `
    <footer class="site-footer"><div class="footer-inner">
      <div><strong>ACM TRUST 2027</strong><p><a href="https://eigtrust.acm.org/trust2027/" target="_blank" rel="noopener">Official conference website</a><br>March 7-9, 2027 · Washington, DC</p></div>
      <div><strong>REED-AI</strong><p>Responsible, Explainable, and Ethical-by-Design AI in Clinical Applications</p></div>
      <p class="source-note">Content is based on the REED-AI proposal and the official ACM TRUST 2027 site. Washington imagery: public-domain USGS photographs by Alex Demas and Jessica Robertson. Institutional names on person profiles identify individual affiliations and do not imply site sponsorship.</p>
    </div></footer>`;
}

buildHeader();
buildSidebar();
buildFooter();

const topics = [
  "Explainable and Interpretable AI for Clinical Decision Support",
  "Explainable AI for Medical Imaging and Computer-Assisted Diagnosis",
  "Uncertainty Quantification and Confidence-Aware Clinical AI",
  "Trust Calibration and Human-AI Collaboration in Healthcare",
  "Robustness, Reliability, Privacy, and Safety of Clinical AI Systems",
  "Generalizable AI Across Institutions, Populations, and Care Settings",
  "Foundation Models and Generative AI for Healthcare",
  "Vision-Language and Multimodal AI for Clinical Applications",
  "Clinical Natural Language Processing and Large Language Models",
  "Ethical-by-Design AI Methodologies and Frameworks",
  "Fairness, Bias Detection, Bias Mitigation, and Equity-Aware AI",
  "Privacy-Preserving and Federated Learning in Healthcare",
  "Transparency, Accountability, and Auditable AI Systems",
  "AI Governance, Regulation, and Compliance in Clinical Environments",
  "Post-Deployment Monitoring and Lifecycle Management of AI Systems",
  "Human Factors and User-Centered Design for Healthcare AI",
  "AI for Precision Medicine and Personalized Care",
  "Trustworthy AI for Digital Health and Remote Patient Monitoring",
  "Synthetic Data and Responsible Generative Methods in Healthcare",
  "Benchmarking, Validation, and Reproducibility of Clinical AI",
  "Real-World Deployment, Implementation Science, and Clinical Translation"
];

const submissionTypes = [
  ["Regular Papers", "8-10 pages + references", "Mature research with substantial methodological innovation, empirical evaluation, theoretical foundations, or deployment experience."],
  ["Short Papers", "4-6 pages + references", "Novel concepts, preliminary findings, pilot studies, emerging methods, and early-stage research directions."],
  ["Position Papers", "4 pages + references", "Perspectives, policy recommendations, ethical considerations, governance frameworks, and future visions."],
  ["Poster Papers", "1-2 pages + references", "Work in progress, late-breaking results, student projects, demonstrations, and discussion-oriented ideas."]
];

const dates = [
  ["October 24, 2026", "Abstract Registration", "Main conference abstract registration deadline."],
  ["October 31, 2026", "Paper Submission Deadline", "Deadline for REED-AI paper submissions."],
  ["December 31, 2026", "Acceptance Notification", "Authors receive the track decision."],
  ["February 28, 2027", "Camera-Ready Deadline", "Final accepted manuscripts are due."],
  ["March 7-9, 2027", "ACM TRUST 2027", "Conference in Washington, DC."]
];

const eventOrganizers = [
  { name: "Ahmad P. Tafti, PhD, FAMIA", role: "Event Organizer", affiliation: "University of Pittsburgh", image: "assets/images/ahmad-tafti.jpg", bio: "Health informatics and trustworthy, explainable AI for clinical applications." },
  { name: "Yanshan Wang, PhD, FAMIA", role: "Event Organizer", affiliation: "University of Pittsburgh", image: "assets/images/yanshan-wang.jpg", bio: "Generative AI and natural language processing in healthcare." },
  { name: "Shyam Visweswaran, MD, PhD", role: "Event Organizer", affiliation: "University of Pittsburgh", image: "assets/images/shyam-visweswaran.png", bio: "Clinical decision support and ethically grounded clinical algorithms." },
  { name: "Armaghan Moemeni, PhD, SFHEA", role: "Event Organizer", affiliation: "University of Nottingham", initials: "AM", bio: "Robust and interpretable machine learning for healthcare." },
  { name: "Michael Strange, PhD", role: "Event Organizer", affiliation: "Malmö University", initials: "MS", bio: "AI politics, trust, democracy, ethics, and participation." },
  { name: "Prashnna K. Gyawali", role: "Event Organizer", affiliation: "West Virginia University", image: "assets/images/prashnna-gyawali.jpg", bio: "Reliable and trustworthy AI systems for critical domains." }
];

const invitedSpeakers = [
  { name: "Yiye Zhang, PhD", role: "Potential Invited Speaker", affiliation: "Weill Cornell Medicine", initials: "YZ", bio: "Listed in the proposal as a potential invited speaker.", link: "https://www.yiyezhang.com" },
  { name: "Rema Padman, PhD", role: "Potential Invited Speaker", affiliation: "Carnegie Mellon University", image: "assets/images/rema-padman.jpg", bio: "Listed in the proposal as a potential invited speaker.", link: "https://www.heinz.cmu.edu/faculty-research/profiles/padman-rema" }
];

const webmasters = [
  { name: "Farnaz Rezvani, MS", role: "Webmaster", affiliation: "IEEE Member", image: "assets/images/farnaz-rezvani.png" },
  { name: "Lyudong Yan", role: "Webmaster", affiliation: "Website Team", image: "assets/images/lyudong-yan.png" }
];

function renderPerson(person) {
  const visual = person.image
    ? `<img src="${person.image}" alt="Portrait of ${person.name}" loading="lazy" decoding="async">`
    : `<span class="initials" aria-label="Photo not available">${person.initials || "?"}</span>`;
  const bio = person.bio ? `<p class="bio">${person.bio}</p>` : "";
  const link = person.link ? `<a href="${person.link}" target="_blank" rel="noopener">View profile</a>` : "";
  return `<article class="person-card"><div class="person-photo">${visual}</div><div class="person-copy"><span class="role">${person.role}</span><h3>${person.name}</h3><span class="affiliation">${person.affiliation}</span>${bio}${link}</div></article>`;
}

function renderPeople(selector, people) {
  const target = document.querySelector(selector);
  if (target) target.innerHTML = people.map(renderPerson).join("");
}

function renderSubmissions() {
  const target = document.querySelector("#submission-grid");
  if (!target) return;
  target.innerHTML = submissionTypes.map(([title, length, description]) => `<article class="info-card"><span class="tag">${length}</span><h3>${title}</h3><p>${description}</p></article>`).join("");
}

function renderTopics(filter = "") {
  const target = document.querySelector("#topic-list");
  if (!target) return;
  const normalized = filter.trim().toLowerCase();
  const filtered = topics.filter(topic => topic.toLowerCase().includes(normalized));
  target.innerHTML = filtered.map(topic => `<span class="topic-chip">${topic}</span>`).join("");
  const empty = document.querySelector("#topic-empty");
  if (empty) empty.hidden = filtered.length !== 0;
}

function renderDates() {
  const timeline = document.querySelector("#date-timeline");
  if (timeline) timeline.innerHTML = dates.map(([date, title, detail]) => `<article class="timeline-item"><time>${date}</time><div><h3>${title}</h3><p>${detail}</p></div></article>`).join("");
  const grid = document.querySelector("#date-grid");
  if (grid) grid.innerHTML = dates.map(([date, title, detail]) => `<article class="info-card"><span class="date">${date}</span><h3>${title}</h3><p>${detail}</p></article>`).join("");
}

renderSubmissions();
renderTopics();
renderDates();
renderPeople("#event-organizer-grid", eventOrganizers);
renderPeople("#keynote-grid", invitedSpeakers);
renderPeople("#webmaster-grid", webmasters);

const topicFilter = document.querySelector("#topic-filter");
if (topicFilter) topicFilter.addEventListener("input", () => renderTopics(topicFilter.value));

const menuToggle = document.querySelector(".menu-toggle");
if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    const open = document.body.classList.toggle("nav-open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });
  document.querySelectorAll(".page-nav a").forEach(link => link.addEventListener("click", () => document.body.classList.remove("nav-open")));
  document.addEventListener("keydown", event => { if (event.key === "Escape") document.body.classList.remove("nav-open"); });
}

const anchorLinks = [...document.querySelectorAll(".anchor-nav a")];
const observedSections = anchorLinks.map(link => document.querySelector(link.getAttribute("href"))).filter(Boolean);
if (observedSections.length) {
  const observer = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    anchorLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`));
  }, { rootMargin: "-24% 0px -62% 0px", threshold: [0, .2, .5] });
  observedSections.forEach(section => observer.observe(section));
}

window.addEventListener("load", () => {
  if (!window.location.hash) return;
  const target = document.querySelector(window.location.hash);
  if (target) window.requestAnimationFrame(() => target.scrollIntoView());
});
