import gulp from "gulp";                        // GULP

import { paths } from "./gulp/path.js";         // Пути

import del from "del";                          // Удаление файлов

import fileinclude from "gulp-file-include";    // Шаблонизатор html

import replace from "gulp-replace";             // Подмена путей

import gulpPlumber from "gulp-plumber";         //  Вывод
import notify from "gulp-notify";               //  ошибок

import browserSync from "browser-sync";          // Автоперезагрузка

import dartSass from "sass";                    //  Препроцессор
import gulpSass from "gulp-sass";               //  SCSS

import rename from "gulp-rename";               //  Переименование

import autoPrefixer from "gulp-autoprefixer";   // Автопрефиксы

import cleanCss from "gulp-cleancss"            // Минификация css файла

import imagemin from "gulp-imagemin";           // Опитимизация фото

import newer from "gulp-newer";

import sourcemaps from "gulp-sourcemaps"

import babel from "gulp-babel";

import GulpUglify from "gulp-uglify";

import webpack from "webpack-stream";

// ======================================================================== ^ Импорты

const copy = () => {                            //  Копирование файлов из 
    return gulp.src(paths.src.files)            //  .src/files/
            .pipe(gulp.dest(paths.dist.files))  //  в ->
}                                               //  .dist/files/

const reset = () => {                           //  Удаление
    return del(paths.clean)                     //  файлов
}                                               //  перед копированием

const html = () => {                            //  Обработка html
    return gulp.src(paths.src.html)             //  
        .pipe(gulpPlumber(
            notify.onError({                    //  Вывод ошибок html
                title: "HTML",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(fileinclude())                    //  Шаблонизатор
        .pipe(replace(/@img\//g, 'img/'))       //  Подмена путей img
        .pipe(gulp.dest(paths.dist.html))       //  
        .pipe(browserSync.stream())             //  Автоперезагрузка html
}                                               //


const sass = gulpSass(dartSass);

const scss = () => {
    return gulp.src(paths.src.scss)
        .pipe(sourcemaps.init())
        .pipe(gulpPlumber(
            notify.onError({                    //  Вывод ошибок scss
                title: "SCSS",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(replace(/@img\//g, 'img/'))       //  Подмена путей img
        .pipe(sass({
            outputStyle: "expanded"
        }))
        .pipe(autoPrefixer({
            grid:true,
            cascade: true,
            overrideBrowserslist: ["last 3 versions"]
        }))
        .pipe(cleanCss())
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.dist.css))  
        .pipe(browserSync.stream())
}

const image = () => {
    return gulp.src(paths.src.img)
        .pipe(gulpPlumber(
            notify.onError({                    //  Вывод ошибок scss
                title: "IMAGE",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(newer(paths.dist.img))
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            interlaced: true,
            optimizationLevel: 3
        }))
        .pipe(gulp.dest(paths.dist.img))
        .pipe(gulp.src(paths.src.svg))
        .pipe(gulp.dest(paths.dist.img))
        .pipe(browserSync.stream())
}

const js = () => {
    return gulp.src(paths.src.js)
        .pipe(gulpPlumber(
            notify.onError({                    //  Вывод ошибок scss
                title: "JS",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(webpack({
            mode: "development",
            output: {
                filename: "script.min.js"
            }
        }))
        .pipe(babel({
            presets: ["@babel/env"]
        }))
        .pipe(GulpUglify())
        .pipe(gulp.dest(paths.dist.js))
        .pipe(browserSync.stream())
}

const server = (done) => {
    browserSync.init({
        server: {
            baseDir: `${paths.dist.html}`
        },
        notify: false,
        port: 3000,
    })
}

function watcher () {                           //  Установка
    gulp.watch( paths.watch.files, copy)        //  наблюдателя
    gulp.watch( paths.watch.html, html)
    gulp.watch( paths.watch.scss, scss)
    gulp.watch( paths.watch.js, js)
    gulp.watch( paths.watch.img, image)
}                                               //  

const mainTasks = gulp.parallel(copy, html, scss, js, image);

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server)); 

gulp.task("default", dev)  