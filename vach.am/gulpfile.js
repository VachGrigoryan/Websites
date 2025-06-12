const { src, dest, parallel, series, watch } = require("gulp");

// Load plugins

const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const cssnano = require("gulp-cssnano");
const concat = require("gulp-concat");
const clean = require("gulp-clean");
const changed = require("gulp-changed");
const browsersync = require("browser-sync").create();

// Clean dist

function clear() {
  return src("./build/**/*", {
    read: false,
  }).pipe(clean());
}

// JS function

function js() {
  const source = "./src/js/*.js";

  return src(source)
      .pipe(changed(source))
      .pipe(concat("bundle.js"))
      .pipe(uglify())
      .pipe(
          rename({
            extname: ".min.js",
          })
      )
      .pipe(dest("./build/js/"))
      .pipe(browsersync.stream());
}

// CSS function

function css() {
  const source = "./src/scss/**/*.scss";

  return src(source)
      .pipe(changed(source))
      .pipe(concat("style.css"))
      .pipe(sass())
      .pipe(
          autoprefixer({
            overrideBrowserslist: ["last 2 versions"],
            cascade: false,
          })
      )
      .pipe(
          rename({
            extname: ".min.css",
          })
      )
      .pipe(cssnano())
      .pipe(dest("./build/css/"))
      .pipe(browsersync.stream());
}

function img() {
  const source = "./src/images/**/*";

  return src(source)
      .pipe(changed(source))
      .pipe(dest("./build/images/"))
      .pipe(browsersync.stream());
}

function php() {
  const source = "./pages/*.php";

  return src(source)
      .pipe(changed(source))
      .pipe(dest("./build/pages/"))
      .pipe(browsersync.stream());
}

function html() {
  const source = "./*.html";

  return src(source)
      .pipe(changed(source))
      .pipe(dest("./build/"))
      .pipe(browsersync.stream());
}

function fonts() {
  const source = "./src/fonts/**/*";

  return src(source)
      .pipe(changed(source))
      .pipe(dest("./build/fonts/"))
      .pipe(browsersync.stream());
}

// Watch files

function watchFiles() {
  watch("./src/*", html);
  watch("./src/fonts/*", fonts);
  watch("./src/scss/*", css);
  watch("./src/js/*", js);
  watch("./src/images/*", img);
}

// BrowserSync

function browserSync() {
  browsersync.init({
    server: {
      baseDir: "./build/",
    },
    port: 8000,
  });
}


// Tasks to define the execution of the functions simultaneously or in series

exports.dev = parallel(watchFiles, browserSync);
exports.build = series(clear, parallel(js, css, img, fonts, html, php));