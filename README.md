# Frontend File Icons

I wanted a lightweight package of all the file icons and logos i would need
for my portfolio project. Using https://icomoon.io/ to build font
package.

Thanks to vorillaz for providing most of the icons. https://github.com/vorillaz/devicons

## Getting Started
Need to have [NPM](https://www.npmjs.com/) installed.

## Install
```
npm i frontend-file-icons
```

### Work with Gulp
##### Dependencies
- npm i gulp
- npm i gulp-sass
- npm i gulp-clean
```
/** Move frontend-file-icons font files to the fonts folders */
gulp.task('moveFileIcons', function(){

 gulp.src('./fonts/frontend-file-icons.eot')
      .pipe(clean());

  gulp.src('./fonts/frontend-file-icons.svg')
      .pipe(clean());

  gulp.src('./fonts/frontend-file-icons.woff')
      .pipe(clean());

  gulp.src('./fonts/frontend-file-icons.ttf')
      .pipe(clean());

    gulp.src('node_modules/Frontend-File-Icons/fonts/*')
        .pipe(gulp.dest('./fonts'));
});

```



### Work with SASS
```
@import 'node_modules/Frontend-File-Icons/frontend-file-icons.scss'
```



## List of icons

#### Custom Icons
- Map / Adventure
- IOT / Electronics
- 3D Printing / 3D Design

#### VCS
- git
- github icon
- github logo

#### OS
- windows
- apple
- linux
- android
- raspberry pi

#### Database
- mysql
- database icon

#### CMS
- wordpress
- drupal

#### JS
- node icon
- node logo
- ember
- jquery
- coffee
- backbone
- angular

#### Task managers
- Gulp
- Grunt
- Composer

#### code
- HTML5
- CSS3
  - SASS
  - LESS
  - Stylus
- Javascript
- PHP
- Ruby
- Python
- Swift

### framework
- Rails
- Symphony
- Bootstrap

#### package managers
- bower
- npm
- composer

#### Text Editor
- Atom
- Sublime
- Dreamweaver

#### Other
- CreativeCloud
- Linkedin
- Photoshop
- Illustrator
- Code
- Codepen
- Command line

