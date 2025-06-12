// Helper function to initialize Macy
function initMasonry(container, columns, margin, breakAt) {
  const elements = document.querySelectorAll(container);
  if (elements.length) {
    return Macy({
      container: container,
      columns: columns,
      margin: margin,
      breakAt: breakAt,
    });
  }
}

// Masonry Grid Initializations
const masonryConfigs = [
  {
    container: ".home-projects",
    columns: 3,
    margin: 10,
    breakAt: { 1200: 2, 767: 1 },
  },
  {
    container: ".work-projects",
    columns: 2,
    margin: 10,
    breakAt: { 1200: 5, 940: 3, 767: 2 },
  },
  {
    container: ".representation-projects",
    columns: 3,
    margin: 10,
    breakAt: { 1200: 5, 940: 3, 767: 2 },
  },
  {
    container: ".representation-single-projects",
    columns: 3,
    margin: 10,
    breakAt: { 1200: 5, 940: 3, 767: 2 },
  },
  {
    container: ".single-project-grid",
    columns: 2,
    margin: 10,
    breakAt: { 1200: 5, 940: 3, 767: 1 },
  },
];

// Loop through configurations and initialize
masonryConfigs.forEach(function (config) {
  initMasonry(config.container, config.columns, config.margin, config.breakAt);
});

// Fancybox Initialization
document.addEventListener("DOMContentLoaded", function () {
  Fancybox.bind("[data-fancybox='gallery']", {
    Thumbs: {
      autoStart: false, // Start with thumbnails visible
    },
    Toolbar: false,
    animationEffect: "fade",
  });

  // Menu toggle functionality
  document
    .getElementById("menu-open-close")
    .addEventListener("click", function () {
      const menu = document.querySelector(".menu");
      const header = document.querySelector("header");
      if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
        menu.classList.add("visible");
        header.classList.remove("menu-closed");
        header.classList.add("menu-opened");
        this.textContent = "Close";
      } else {
        menu.classList.remove("visible");
        menu.classList.add("hidden");
        header.classList.remove("menu-opened");
        header.classList.add("menu-closed");
        this.textContent = "Menu";
      }
    });
});
