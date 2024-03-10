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
