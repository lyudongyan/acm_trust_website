document.documentElement.classList.add("js");

const pages = [
  ["home", "Home", "index.html"],
  ["workshop", "Workshop Description", "workshop-description.html"],
  ["papers", "Call for Papers", "call-for-papers.html"],
  ["dates", "Important Dates", "important-dates.html"],
  ["people", "People", "people.html"],
  ["sponsors", "Sponsors", "sponsors.html"]
];

const sidebarLinks = {
  workshop: [["scope", "Track Scope"], ["motivation", "Motivation"], ["objectives", "Learning Objectives"], ["program", "Program"], ["sustainability", "Sustainability"]],
  papers: [["submission-types", "Submission Types"], ["topics", "Topics of Interest"], ["guidelines", "Guidelines"]],
  dates: [["timeline", "Submission Timeline"], ["conference", "Conference Dates"]],
  people: [["event-organizers", "Organizing Committee"], ["speakers", "Speakers"], ["webmasters", "Webmasters"]],
  sponsors: [["sponsor-information", "Sponsor Information"], ["partnership", "Partnership"]]
};

const pageKey = document.body.dataset.page || "home";
const currentPageIndex = Math.max(0, pages.findIndex(([key]) => key === pageKey));
const currentLabel = pages[currentPageIndex]?.[1] || "Home";

function buildHeader() {
  const nav = pages
    .map(([key, label, href]) => `<li><a href="${href}"${key === pageKey ? ' class="active" aria-current="page"' : ""}>${label}</a></li>`)
    .join("");

  document.querySelector("#site-header").innerHTML = `
    <header class="site-header">
      <div class="site-progress" aria-hidden="true"><div class="site-progress-bar"></div></div>
      <div class="utility-bar">
        <strong>ACM Conference on Trustworthy and Responsible AI and Computing Systems</strong>
        <div class="utility-links">
          <span>March 7-9, 2027 &bull; Washington, DC</span>
          <a href="https://eigtrust.acm.org/trust2027/" target="_blank" rel="noopener">Official conference site</a>
        </div>
      </div>
      <div class="conference-header" rt-liquid-glass rt-liquid-glass-blur="11" rt-liquid-glass-scale="30" rt-liquid-glass-map="512" rt-liquid-glass-tint="rgba(255,255,255,.24)">
        <a class="conference-brand" href="index.html" aria-label="ACM Trust 2027 home">
          <span class="brand-copy">
            <strong>ACM Trust 2027</strong>
            <span>REED-AI Emerging Area Track</span>
          </span>
        </a>
        <button class="menu-toggle" type="button" aria-label="Toggle page menu" aria-expanded="false">
          <span></span><span></span>
        </button>
        <nav class="page-nav" aria-label="Conference pages"><ul>${nav}</ul></nav>
      </div>
    </header>`;
}

function buildSidebar() {
  const sidebar = document.querySelector("#site-sidebar");
  const links = sidebarLinks[pageKey] || [];
  if (!sidebar || links.length === 0) {
    if (sidebar) sidebar.innerHTML = "";
    return;
  }

  const anchors = links
    .map(([id, label], index) => `<a href="#${id}"${index === 0 ? ' class="active"' : ""}><span class="anchor-index">0${index + 1}</span><span>${label}</span></a>`)
    .join("");

  sidebar.innerHTML = `
    <aside class="anchor-sidebar" aria-label="On this page">
      <div class="sidebar-mark"><strong>${currentLabel}</strong><span>ACM Trust 2027</span></div>
      <p class="anchor-title">On this page</p>
      <nav class="anchor-nav">${anchors}</nav>
      <div class="sidebar-meta">Washington, DC &bull; March 7-9, 2027</div>
    </aside>`;
}

function buildFooter() {
  document.querySelector("#site-footer").innerHTML = `
    <footer class="site-footer">
      <div class="footer-inner">
        <div>
          <strong>ACM Trust 2027</strong>
          <p><a href="https://eigtrust.acm.org/trust2027/" target="_blank" rel="noopener">Official conference website</a><br>March 7-9, 2027 &bull; Washington, DC</p>
        </div>
        <div>
          <strong>REED-AI 2027</strong>
          <p>Responsible, Explainable, and Ethical-by-Design AI in Clinical Applications</p>
        </div>
      </div>
    </footer>`;
}

function buildPageFlow() {
  const footerMount = document.querySelector("#site-footer");
  if (!footerMount) return;
  const nextIndex = (currentPageIndex + 1) % pages.length;
  const [, nextLabel, nextHref] = pages[nextIndex];
  const prompt = nextIndex === 0 ? "Return to" : "Continue to";
  const section = document.createElement("section");
  section.className = "page-next";
  section.innerHTML = `
    <a href="${nextHref}">
      <span class="page-next-copy"><span>${prompt}</span><strong>${nextLabel}</strong></span>
      <i class="page-next-arrow" aria-hidden="true">↗</i>
    </a>`;
  footerMount.before(section);
}

function buildMastheadDetails() {
  const masthead = document.querySelector(".page-masthead");
  const panel = masthead?.querySelector(".masthead-panel");
  const title = panel?.querySelector("h1");
  if (!masthead || !panel || !title) return;

  panel.setAttribute("rt-liquid-glass", "");
  panel.setAttribute("rt-liquid-glass-blur", "10");
  panel.setAttribute("rt-liquid-glass-scale", "38");
  panel.setAttribute("rt-liquid-glass-map", "640");
  panel.setAttribute("rt-liquid-glass-tint", "rgba(255,255,255,.20)");
  panel.setAttribute("rt-liquid-glass-fallback-blur", "18");

  const originalTitle = title.textContent.trim();
  title.setAttribute("aria-label", originalTitle);
  title.innerHTML = originalTitle
    .split(/\s+/)
    .map((word, index) => `<span class="title-word" aria-hidden="true" style="--word-index:${index}">${word}</span>`)
    .join(" ");

  const index = document.createElement("span");
  index.className = "page-index";
  index.setAttribute("aria-hidden", "true");
  index.textContent = `0${currentPageIndex + 1}`;
  panel.prepend(index);

}

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
  ["March 7-9, 2027", "ACM Trust 2027", "Conference in Washington, DC."]
];

const eventOrganizers = [
  { name: "Ahmad P. Tafti, PhD, FAMIA", role: "Event Organizer", affiliation: "University of Pittsburgh", image: "assets/images/ahmad-tafti.webp", bio: "Health informatics and trustworthy, explainable AI for clinical applications." },
  { name: "Yanshan Wang, PhD, FAMIA", role: "Event Organizer", affiliation: "University of Pittsburgh", image: "assets/images/yanshan-wang.webp", bio: "Generative AI and natural language processing in healthcare." },
  { name: "Shyam Visweswaran, MD, PhD", role: "Event Organizer", affiliation: "University of Pittsburgh", image: "assets/images/shyam-visweswaran.webp", bio: "Clinical decision support and ethically grounded clinical algorithms." },
  { name: "Armaghan Moemeni, PhD, SFHEA", role: "Event Organizer", affiliation: "University of Nottingham", image: "assets/images/armaghan-moemeni.webp", bio: "Robust and interpretable machine learning for healthcare.", link: "https://www.nottingham.ac.uk/computerscience/people/armaghan.moemeni" },
  { name: "Michael Strange, PhD", role: "Event Organizer", affiliation: "Malm&ouml; University", image: "assets/images/michael-strange.webp", bio: "AI politics, trust, democracy, ethics, and participation.", link: "https://mau.se/en/persons/michael.strange/" },
  { name: "Prashnna K. Gyawali", role: "Event Organizer", affiliation: "West Virginia University", image: "assets/images/prashnna-gyawali.webp", bio: "Reliable and trustworthy AI systems for critical domains." }
];

const speakers = [
  { name: "Sagnik Dakshit, PhD", role: "Program Committee Member", affiliation: "Kennesaw State University", image: "assets/images/sagnik-dakshit.webp", link: "https://www.sagnikdakshit.com/" },
  { name: "Ayse Tekes, PhD", role: "Program Committee Member", affiliation: "Kennesaw State University", image: "assets/images/ayse-tekes.webp", link: "https://campus.kennesaw.edu/offices-services/research/about/contact.php" },
  { name: "Faezeh Rohani, PhD", role: "Program Committee Member", affiliation: "&Uuml;sk&uuml;dar University", image: "assets/images/faezeh-rohani.webp" },
  { name: "Husam Ghazaleh, PhD", role: "Program Committee Member", affiliation: "Benedictine University", image: "assets/images/husam-ghazaleh.webp" },
  { name: "Maedeh Agharazidermani, PhD", role: "Program Committee Member", affiliation: "Florida State University", image: "assets/images/maedeh-agharazi.webp" },
  { name: "Zeyun Yu, PhD", role: "Program Committee Member", affiliation: "University of Wisconsin-Milwaukee", image: "assets/images/zeyun-yu.webp" },
  { name: "Yiye Zhang, PhD", role: "Potential Invited Speaker", affiliation: "Weill Cornell Medicine", image: "assets/images/yiye-zhang.webp", link: "https://www.yiyezhang.com/" },
  { name: "Rema Padman, PhD", role: "Potential Invited Speaker", affiliation: "Carnegie Mellon University", image: "assets/images/rema-padman.webp", link: "https://www.heinz.cmu.edu/faculty-research/profiles/padman-rema" }
];

const webmasters = [
  { name: "Farnaz Rezvani, MS", role: "Webmaster", affiliation: "IEEE Member", image: "assets/images/farnaz-rezvani.webp" },
  { name: "Lyudong Yan", role: "Webmaster", affiliation: "Website Team", image: "assets/images/lyudong-yan.webp" }
];

function renderPerson(person) {
  const visual = person.image
    ? `<img src="${person.image}" alt="Portrait of ${person.name}" width="640" height="800" loading="lazy" decoding="async" fetchpriority="low">`
    : `<span class="initials" aria-label="Photo not available">${person.initials || "?"}</span>`;
  const bio = person.bio ? `<p class="bio">${person.bio}</p>` : "";
  const link = person.link ? `<a href="${person.link}" target="_blank" rel="noopener">View profile</a>` : "";
  return `<article class="person-card" tabindex="0"><div class="person-photo">${visual}</div><div class="person-copy"><span class="role">${person.role}</span><h3>${person.name}</h3><span class="affiliation">${person.affiliation}</span>${bio}${link}</div></article>`;
}

function renderPeople(selector, people) {
  const target = document.querySelector(selector);
  if (target) target.innerHTML = people.map(renderPerson).join("");
}

function renderSubmissions() {
  const target = document.querySelector("#submission-grid");
  if (!target) return;
  target.innerHTML = submissionTypes
    .map(([title, length, description]) => `<article class="info-card"><span class="tag">${length}</span><h3>${title}</h3><p>${description}</p></article>`)
    .join("");
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
  if (timeline) {
    timeline.innerHTML = dates
      .map(([date, title, detail]) => `<article class="timeline-item"><time>${date}</time><div><h3>${title}</h3><p>${detail}</p></div></article>`)
      .join("");
  }
  const grid = document.querySelector("#date-grid");
  if (grid) {
    grid.innerHTML = dates
      .map(([date, title, detail]) => `<article class="info-card"><span class="date">${date}</span><h3>${title}</h3><p>${detail}</p></article>`)
      .join("");
  }
}

function simplifyLabels() {
  const eventDate = document.querySelector(".home-hero .eyebrow");
  if (eventDate) eventDate.className = "event-date";
  document.querySelectorAll(".eyebrow").forEach(label => label.remove());
}

function setupMenu() {
  const menuToggle = document.querySelector(".menu-toggle");
  if (!menuToggle) return;
  menuToggle.addEventListener("click", () => {
    const open = document.body.classList.toggle("nav-open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });
  document.querySelectorAll(".page-nav a").forEach(link => link.addEventListener("click", () => document.body.classList.remove("nav-open")));
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      document.body.classList.remove("nav-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

function setupAnchorNavigation() {
  const anchorLinks = [...document.querySelectorAll(".anchor-nav a")];
  const observedSections = anchorLinks
    .map(link => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);
  if (!observedSections.length) return;

  const observer = new IntersectionObserver(entries => {
    const visible = entries
      .filter(entry => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    anchorLinks.forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`);
    });
  }, { rootMargin: "-22% 0px -60% 0px", threshold: [0, .18, .45] });

  observedSections.forEach(section => observer.observe(section));
}

function setupRevealMotion() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const selectors = [
    ".content-section .section-heading",
    ".content-section .section-lead",
    ".content-section .prose",
    ".info-card",
    ".objective-list li",
    ".topic-chip",
    ".timeline-item",
    ".person-card",
    ".focus-list span",
    ".side-card",
    ".sponsor-placeholder",
    ".date-table-wrap",
    ".official-link"
  ];
  const elements = [...document.querySelectorAll(selectors.join(","))];
  elements.forEach((element, index) => {
    element.classList.add("reveal");
    element.style.setProperty("--reveal-delay", `${(index % 5) * 55}ms`);
  });

  if (reduceMotion || !("IntersectionObserver" in window)) {
    elements.forEach(element => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: .1 });
  elements.forEach(element => observer.observe(element));
}

function setupLiquidGlass() {
  const presets = [
    [".side-card", { blur: 12, scale: 34, map: 480, tint: "rgba(255,255,255,.20)" }],
    [".sponsor-placeholder", { blur: 12, scale: 32, map: 640, tint: "rgba(255,255,255,.16)" }],
    [".topic-search", { blur: 9, scale: 24, map: 380, tint: "rgba(255,255,255,.14)" }],
    [".date-table-wrap", { blur: 10, scale: 28, map: 720, tint: "rgba(255,255,255,.12)" }],
    [".timeline", { blur: 10, scale: 30, map: 720, tint: "rgba(255,255,255,.12)" }]
  ];

  presets.forEach(([selector, options]) => {
    document.querySelectorAll(selector).forEach(element => {
      element.setAttribute("rt-liquid-glass", "");
      element.setAttribute("rt-liquid-glass-blur", String(options.blur));
      element.setAttribute("rt-liquid-glass-scale", String(options.scale));
      element.setAttribute("rt-liquid-glass-map", String(options.map));
      element.setAttribute("rt-liquid-glass-tint", options.tint);
      element.setAttribute("rt-liquid-glass-fallback-blur", "16");
    });
  });

  document.querySelectorAll("[rt-liquid-glass]").forEach(element => {
    element.addEventListener("pointermove", event => {
      const rect = element.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / Math.max(1, rect.width)) * 100;
      const y = ((event.clientY - rect.top) / Math.max(1, rect.height)) * 100;
      element.style.setProperty("--glass-x", `${x.toFixed(1)}%`);
      element.style.setProperty("--glass-y", `${y.toFixed(1)}%`);
    });
    element.addEventListener("pointerleave", () => {
      element.style.setProperty("--glass-x", "18%");
      element.style.setProperty("--glass-y", "8%");
    });
  });

  document.querySelectorAll(".person-card").forEach(card => {
    card.addEventListener("pointermove", event => {
      const rect = card.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / Math.max(1, rect.width)) * 100;
      const y = ((event.clientY - rect.top) / Math.max(1, rect.height)) * 100;
      card.style.setProperty("--glass-x", `${x.toFixed(1)}%`);
      card.style.setProperty("--glass-y", `${y.toFixed(1)}%`);
    }, { passive: true });
    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--glass-x", "20%");
      card.style.setProperty("--glass-y", "14%");
    });
  });

  const refresh = () => window.rtLiquidGlass?.refresh();
  document.addEventListener("DOMContentLoaded", () => window.setTimeout(refresh, 0), { once: true });
  window.addEventListener("load", refresh, { once: true });
}

function setupNeuralField() {
  const field = document.createElement("div");
  field.id = "neural-field";
  field.setAttribute("aria-hidden", "true");
  document.body.prepend(field);

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion || !window.VANTA?.NET || !window.THREE) return;
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  const lowPower = Boolean(connection?.saveData || (navigator.deviceMemory && navigator.deviceMemory <= 4));

  try {
    const effect = window.VANTA.NET({
      el: field,
      THREE: window.THREE,
      mouseControls: !lowPower,
      touchControls: !lowPower,
      gyroControls: false,
      minHeight: 200,
      minWidth: 200,
      scale: 1,
      scaleMobile: .62,
      color: 0x106eea,
      backgroundColor: 0xf4f8fe,
      points: lowPower ? 6 : 9,
      maxDistance: lowPower ? 18 : 23,
      spacing: lowPower ? 21 : 18,
      showDots: true
    });
    window.addEventListener("pagehide", () => effect?.destroy(), { once: true });
  } catch (error) {
    field.classList.add("neural-fallback");
  }
}

function setupSectionTraces() {
  document.querySelectorAll(".content-section").forEach(section => {
    const trace = document.createElement("span");
    trace.className = "section-trace";
    trace.setAttribute("aria-hidden", "true");
    section.append(trace);
  });
}

function setupScrollThreads() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  const lowPower = Boolean(connection?.saveData || (navigator.deviceMemory && navigator.deviceMemory <= 4));
  if (lowPower) return;

  const canvas = document.createElement("canvas");
  canvas.className = "scroll-thread-canvas";
  canvas.setAttribute("aria-hidden", "true");
  document.body.prepend(canvas);
  const context = canvas.getContext("2d");
  if (!context) return;

  const pointer = { x: 0, y: 0, active: false };
  let width = 0;
  let height = 0;
  let density = 1;
  let frame = 0;
  let lastDraw = 0;

  const resize = () => {
    density = Math.min(2, window.devicePixelRatio || 1);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.round(width * density);
    canvas.height = Math.round(height * density);
    context.setTransform(density, 0, 0, density, 0, 0);
  };

  const draw = time => {
    frame = window.requestAnimationFrame(draw);
    if (document.hidden || time - lastDraw < 32) return;
    lastDraw = time;
    const scrollable = Math.max(1, document.documentElement.scrollHeight - height);
    const progress = Math.max(0, Math.min(1, window.scrollY / scrollable));
    const reveal = Math.min(1, .08 + progress * 1.34);
    context.clearRect(0, 0, width, height);
    context.lineCap = "round";

    const threadCount = width < 700 ? 5 : 9;
    for (let index = 0; index < threadCount; index += 1) {
      const fraction = threadCount === 1 ? .5 : index / (threadCount - 1);
      const baseX = width * (.06 + fraction * .88);
      const endY = height * Math.min(1.08, reveal * (.78 + (index % 3) * .11));
      const amplitude = 9 + (index % 4) * 4;
      let lastX = baseX;

      context.beginPath();
      for (let y = -20; y <= endY; y += 12) {
        const phase = y * .008 + index * 1.7 + window.scrollY * .0011 + time * .00008;
        let x = baseX + Math.sin(phase) * amplitude;
        if (pointer.active) {
          const distance = Math.abs(y - pointer.y);
          const influence = Math.max(0, 1 - distance / 190);
          x += (pointer.x - x) * influence * .11;
        }
        if (y === -20) context.moveTo(x, y);
        else context.lineTo(x, y);
        lastX = x;
      }
      context.strokeStyle = index % 4 === 0
        ? `rgba(255,184,28,${.11 + progress * .13})`
        : `rgba(16,110,234,${.10 + progress * .12})`;
      context.lineWidth = index % 3 === 0 ? 1.35 : .9;
      context.stroke();

      context.beginPath();
      context.arc(lastX, Math.max(0, endY), 1.8 + Math.sin(time * .002 + index) * .5, 0, Math.PI * 2);
      context.fillStyle = index % 4 === 0 ? "rgba(255,184,28,.42)" : "rgba(16,110,234,.34)";
      context.fill();
    }
  };

  window.addEventListener("pointermove", event => {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
    pointer.active = true;
  }, { passive: true });
  document.documentElement.addEventListener("pointerleave", () => { pointer.active = false; });
  window.addEventListener("resize", resize);
  window.addEventListener("pagehide", () => window.cancelAnimationFrame(frame), { once: true });
  resize();
  frame = window.requestAnimationFrame(draw);
}

function setupScrollEffects() {
  const progress = document.querySelector(".site-progress-bar");
  const header = document.querySelector(".site-header");
  const masthead = document.querySelector(".page-masthead");
  const sidebar = document.querySelector(".anchor-sidebar");
  const timeline = document.querySelector(".timeline");
  const sections = [...document.querySelectorAll(".content-section")];
  let ticking = false;

  const update = () => {
    const scrollTop = window.scrollY;
    const scrollable = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const ratio = Math.min(1, scrollTop / scrollable);
    if (progress) progress.style.transform = `scaleX(${ratio})`;
    if (header) header.classList.toggle("is-condensed", scrollTop > 80);
    if (masthead) masthead.style.setProperty("--hero-shift", `${Math.min(80, scrollTop * .1)}px`);
    if (sidebar) sidebar.style.setProperty("--side-progress", ratio.toFixed(3));
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const sectionRatio = Math.max(0, Math.min(1, (window.innerHeight * .78 - rect.top) / Math.max(1, rect.height * .82)));
      section.style.setProperty("--section-progress", sectionRatio.toFixed(3));
    });

    if (timeline) {
      const rect = timeline.getBoundingClientRect();
      const timelineRatio = Math.max(0, Math.min(1, (window.innerHeight * .68 - rect.top) / Math.max(1, rect.height)));
      timeline.style.setProperty("--timeline-progress", timelineRatio.toFixed(3));
    }
    ticking = false;
  };

  const requestUpdate = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(update);
  };
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  update();
}

function setupMastheadPointer() {
  const masthead = document.querySelector(".page-masthead");
  if (!masthead || window.matchMedia("(pointer: coarse)").matches) return;
  masthead.addEventListener("pointermove", event => {
    const rect = masthead.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    masthead.style.setProperty("--pointer-x", `${x.toFixed(1)}%`);
    masthead.style.setProperty("--pointer-y", `${y.toFixed(1)}%`);
  });
  masthead.addEventListener("pointerleave", () => {
    masthead.style.setProperty("--pointer-x", "70%");
    masthead.style.setProperty("--pointer-y", "30%");
  });
}

function setupPageTransitions() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const curtain = document.createElement("div");
  curtain.className = "page-curtain";
  curtain.setAttribute("aria-hidden", "true");
  curtain.innerHTML = "<span>REED-AI 2027</span>";
  document.body.append(curtain);

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => document.body.classList.add("is-ready"));
  });

  if (reduceMotion) return;
  document.addEventListener("click", event => {
    const link = event.target.closest("a");
    if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (link.target === "_blank" || link.hasAttribute("download")) return;
    const rawHref = link.getAttribute("href");
    if (!rawHref || rawHref.startsWith("#") || rawHref.startsWith("mailto:") || rawHref.startsWith("tel:")) return;

    const url = new URL(link.href, window.location.href);
    const isInternalPage = url.origin === window.location.origin && url.pathname !== window.location.pathname && /\.html$/i.test(url.pathname);
    if (!isInternalPage) return;

    event.preventDefault();
    document.body.classList.add("is-leaving");
    window.setTimeout(() => { window.location.href = url.href; }, 620);
  });
}

buildHeader();
buildSidebar();
buildFooter();
buildPageFlow();
simplifyLabels();
buildMastheadDetails();
renderSubmissions();
renderTopics();
renderDates();
renderPeople("#event-organizer-grid", eventOrganizers);
renderPeople("#speaker-grid", speakers);
renderPeople("#webmaster-grid", webmasters);
setupLiquidGlass();
setupNeuralField();
setupSectionTraces();
setupScrollThreads();
setupMenu();
setupAnchorNavigation();
setupRevealMotion();
setupScrollEffects();
setupMastheadPointer();
setupPageTransitions();

const topicFilter = document.querySelector("#topic-filter");
if (topicFilter) topicFilter.addEventListener("input", () => renderTopics(topicFilter.value));

window.addEventListener("load", () => {
  if (!window.location.hash) return;
  const target = document.querySelector(window.location.hash);
  if (target) window.requestAnimationFrame(() => target.scrollIntoView());
});
