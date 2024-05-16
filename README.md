starting react app with bundler

1. git init --> for tracking changes
2. npm init --> create default package.json
3. npm i react
4. npm i react-dom
5. npm install -D parcel
6. add .gitignore file
7. npm i react-router-dom

Specify type=”module” attribute in your script in HTML.

<script type="module" src="App.js"></script>

     We need to do this so that we can import react and react-dom in our scripts/js files. We need to specify our script to be a module because only modules can use import /export commands. Normal script files cannot use import/export statements.

now we are installing tailwind.

8. npm install -D tailwindcss postcss.
9. npx tailwindcss init \\ run the init command to generate tailwind.config.js.
10. npx parcel .\index.html

Here, when I run the project from src folder tailwind css is not reflecting while
when I run the project from root level it is working
C:\Users\003P4Q744\Desktop\Shrikant\Learning\React-Router\src> npx parcel index.html --> Not working
C:\Users\003P4Q744\Desktop\Shrikant\Learning\React-Router> npx parcel src\index.html --> working

To start Project on new machine clone the repo
npm install
npx parcel src/index.html
