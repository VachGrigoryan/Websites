const {src, dest, parallel, series, watch} = require("gulp")

const browserSync = require("browser-sync").create()

const concat = require("gulp-concat")

const sass = require("gulp-sass")(require("sass"))

const autoprefixer = require("gulp-autoprefixer")

const cleancss = require("gulp-clean-css")

const clean = require("gulp-clean")
const fs = require("fs");

function browsersync() {
    browserSync.init({
        server: {baseDir: "src/"},
        notify: false,
        online: true,
    })
}

function scripts() {
    // Define the source order
    const bundleExists = fs.existsSync("src/js/bundle.js");

    const sources = [
        "node_modules/jquery/dist/jquery.min.js", // Include jQuery first
        "src/**/*.js", // Include all other JS files
        "!src/js/bundle.min.js", // Exclude bundle.min.js
        "!src/js/bundle.js" // Temporarily exclude bundle.js for other files
    ];

    if (bundleExists) {
        sources.push("src/js/bundle.js"); // Add bundle.js at the end if it exists
    }

    return src(sources)
        .pipe(concat("bundle.min.js")) // Concatenate into one file
        .pipe(dest("src/js/")) // Save to the destination
        .pipe(browserSync.stream()); // Stream changes to browser
}

function styles() {
    return src("src/scss/**/*.scss")
        .pipe(sass())
        .pipe(concat("styles.min.css"))
        .pipe(autoprefixer({overrideBrowserslist: ["last 3 versions"]}))
        .pipe(dest("src/css/"))
        .pipe(browserSync.stream())
}

async function images() {
    return src(["src/images/**/*"], {base: "src"}).pipe(dest("dist"))
}

async function fonts() {
    return src(["src/fonts/**/*"], {base: "src"}).pipe(dest("dist"))
}

function buildcopy() {
    return src(
        [
            "src/css/**/*.min.css",
            "src/js/**/*.min.js",
            "src/images/**/*",
            "src/fonts/**/*",
            "src/**/*.html",
        ],
        {base: "src"}
    ).pipe(dest("dist"))
}

function cleandist() {
    return src("dist", {allowEmpty: true}).pipe(clean())
}

function startwatch() {
    watch(["src/**/*.js", "!src/**/*.min.js"], scripts)

    watch("src/**/scss/**/*", styles)

    watch("src/**/*.html").on("change", browserSync.reload)

    watch("src/images/**/*", images)
    watch("src/fonts/**/*", fonts)
}

exports.browsersync = browsersync

exports.scripts = scripts

exports.styles = styles

exports.images = images

exports.fonts = fonts

exports.build = series(cleandist, styles, scripts, images, fonts, buildcopy)

exports.default = parallel(styles, scripts, browsersync, startwatch)