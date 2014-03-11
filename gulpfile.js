var gulp = require('gulp');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var jshint = require('gulp-jshint');

var srcPaths = {
    scripts: 'src/js/*',
    images: 'src/images/*'
};

var distPaths = {
    scripts: 'dist/js/',
    images: 'dist/images/'
};

gulp.task('scripts', function() {
    return gulp.src(srcPaths.scripts)
        .pipe(jshint())
        .pipe(jshint.reporter())
        .pipe(uglify())
        .pipe(concat('libs.min.js'))
        .pipe(gulp.dest(distPaths.scripts));
});

gulp.task('images', function() {
    return gulp.src(srcPaths.images)
        .pipe(imagemin({
            optimizationLevel: 5
        }))
        .pipe(gulp.dest(distPaths.images));
});

gulp.task('default', ['scripts', 'images']);
