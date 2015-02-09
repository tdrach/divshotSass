# Divshot Sass
Divshot setup that uses Grunt to compiles/minifies SASS and minifies/uglifies JavaScript.

Make sure you have Grunt installed and set up via http://gruntjs.com/
And Divshot http://docs.divshot.com/guides/getting-started
run 
    npm install --save-dev

Then from your directory, you can run 
    grunt watch
    
## SASS
Write your sass in the SASS directory
    sass/MODULE_NAME.scss
Add any modules or SCSS files in `app.scss`
All the `.scss` files will be compiled and minified into `client/style.min.css`, there is also an unminified version in the same directory.

## Javascript
All the Javascript in the `js/` directory will be minified and uglified, a  
