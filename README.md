# IconFx-PriceFeed

## Running the react project
- Make sure the ***index.js*** looks as follows.
```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
```
- Run `npm start`

## Building the files to serve the widget
- Modify ***index.js*** so the content looks as follows
```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const WidgetDivs = document.querySelectorAll('.my_widget')

WidgetDivs.forEach(Div => {
  ReactDOM.render(
    <React.StrictMode>
      <App domElement={Div} />
    </React.StrictMode>,
    Div
  );
})

reportWebVitals();
```
- Run `npm run script build:widget-web` inside the root directory 
- The content will be created inside the ***docs*** directory

## Deploying changes to Heroku
- Prerequisites
  - Install [git-bash](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
  - Create an account in [Heroku](https://signup.heroku.com/)
  - Install [Heroku-CLI](https://devcenter.heroku.com/articles/heroku-cli)

- Copy content inside the *docs* folder to another directory outside the project
- Open git-bash or command prompt inside the new directory and run `git  init` to create a local git repository
- Add ***package.json*** file inside ***other*** directory to the new location. Modify the content of the file appropriately (name, version, description and author).
- Commit changes by running `git add .` and `git commit -m "Commit message"`
- Open another command prompt while inside the same location and log into Heroku account by running `Heroku login`
- Create a new Heroku app by running `heroku apps:create your_app_name`
- Push your changes to Heroku and deploy by running `git push heroku master`
- Your content is now available at https://*your_app_name*.herokuapp.com/

## Redeploying changes to Heroku
 - Copy changed content to the relevant location.
 - Run the following commands inside the new location
 ```
 git add .
 git commit -m "Commit message"
 git push heroku master
 ```
 
## Add widget to an html file
- Add the following lines inside the `<body>` tags
```
<link href="https://your_app_name.herokuapp.com/index.css" rel="stylesheet" />
<script src="https://your_app_name.herokuapp.com/index.js"></script>
```
- Add the widget div inside the `<body>` tags as follows
```
<div class="my_widget" style="width: 100%; height: 600px"></div>
```

## Sample ***index.html*** to test the widget
```
<!DOCTYPE html>
<html lang="en">

<body>
  <noscript>You need to enable JavaScript to run this app.</noscript>
    <h1>Widget Demo</h1>
        <div class="my_widget" style="width: 100%; height: 600px"></div>
	<div class="my_widget" style="width: 100%; height: 600px"></div>
	
	<link href="https://your_app_name.herokuapp.com/index.css" rel="stylesheet" />
	<script src="https://your_app_name.herokuapp.com/index.js"></script>
</body>
</html>
```
  
