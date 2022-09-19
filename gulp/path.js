const srcFolder = `./src`;
const distFolder = `./dist`;

export const paths = {
    src : {
        files: `${srcFolder}/files/**/*.*`,
        html: `${srcFolder}/*.html`,
        scss: `${srcFolder}/scss/style.scss`,
        js: `${srcFolder}/js/script.js`,
        img: `${srcFolder}/img/**/*.{png,jpg,jpeg,gif,webp}`,
        svg: `${srcFolder}/img/**/*.svg`
    },
    dist: {
        files: `${distFolder}/files/`,
        html: `${distFolder}/`,
        css: `${distFolder}/css/`,
        js: `${distFolder}/js/`,
        img: `${distFolder}/img/`
    },
    watch: {
        files: `${srcFolder}/files/**/*.*`,
        html: `${srcFolder}/**/*.html`,
        scss: `${srcFolder}/**/*.scss`,
        js: `${srcFolder}/js/**/*.js`,
        img: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,ico,svg}`
    },
    clean: distFolder,
    srcFolder: srcFolder,
    buildFolder: distFolder
}

