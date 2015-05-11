# Front End Base

## Using Divshot

Divshot setup that uses Grunt to compile/minifies SASS and minifies/uglifies JavaScript.

Make sure you have Grunt installed and set up via http://gruntjs.com/
and Divshot http://docs.divshot.com/guides/getting-started

run 

    npm install --save-dev

## Compiling / Minifying SASS and JS

Then from your directory, you can run 

    grunt watch

All the `.scss` files will be compiled and minified into `client/style.min.css`, there is also an unminified version in the same directory.

All the Javascript in the `js` directory will be minified and uglified, a `build.min.js` will be added to `client` directory (as well as an unminified version).
    
## SASS
Write your sass in the SASS directory. More on this later, but usually, you'll want to add a module. 

    sass/modules/MODULE_NAME.scss
    
Add any modules or SCSS files in `app.scss`

