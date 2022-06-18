const gulp = require('gulp');
const concat = require('gulp-concat');

var isProd = true;

var config = {
    dist: './dist'
};

var lib_arr = [
    'bower_components/angular/angular.min.js'
];

var css_arr = [
    './custom/home/home.css',
    './custom/componente1/componente1.css',
    './custom/componente2/componente2.css'
];

var ctrl_arr = [
    './custom/home/home.controller.js', 
    './custom/componente1/componente1.controller.js',
    './custom/componente2/componente2.controller.js'
];

var svc_arr = [
    './custom/home/home.service.js',
    './custom/componente1/componente1.service.js',
    './custom/componente2/componente2.service.js'
];

gulp.task('lib', function () {
    return gulp.src(lib_arr, { base: '.' })
            .pipe(gulp.dest(config.dist));
});

gulp.task('css', function () {
    return gulp.src(css_arr, { base: '.' })
            .pipe(gulp.dest(config.dist))
            .pipe(browserSync.stream({once: true}));
});

gulp.task('html', function () {
    var htm = gulp.src(['./src/app/custom/**/*.html'], { base: '.' })
                .pipe(gulpif(isProd, htmlminify({ collapseWhitespace: true, removeComments: true })))
                .pipe(gulp.dest(config.dist));

    return merge(htm).pipe(browserSync.stream({once:true}));
});

gulp.task('build', [ 'lib', 'css', 'html'], function() {
    return gulp.src('index.html')
        .pipe(cachebust.references())
        .pipe(gulp.dest(config.dist));
});