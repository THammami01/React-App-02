# ReactJS Notes

## Softwares Installation n Environment SetUp

- Sublime (add path to env vars and install ayu package)
- Chrome (add React Developer Tools extension)
- Git (set nano as the default editor)
- NodeJS
- Python (not the amd version)

## Create New Project

```bash
npx create-react-app project_name
cd project_name
npm start
```

## Clone Startup Project

```bash
git clone branch_url
cd folder_name
npm install
npm start
```

## Include Public Files with "%PUBLIC_URL%/

```html
<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
```

## Setup Git

git config --global user.name "Tarek Hammami"
git config --global user.email "thammami.me@gmail.com"


## Pushing Existing Repo to GitHub

```bash
git init
git add .
git status
git commit -m "First Commit"
git log
git remote add origin full_url.git
git push -u origin master
// github will popup for login in the first time
```

## Deploy to GitHub Webpages

```bash
npm install gh-pages
```

Add this property to package.json:
"homepage": "https://username.github.io/repo"

And, in scripts property, add:
"predeploy": "npm run build",
"deploy": "gh-pages -d build"

```bash
git commit --ammend
git push -u origin master
npm run deploy
```

## Using react-router-dom

```bash
npm i react-router-dom
```

```js
import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom'

<Router>
  <Link to="">Home</Link>
  <Link to="/about">About</Link>
  <Switch>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
  </Switch>
</Router>
```

Examples:

https://reactrouter.com/web/guides/quick-start

Remove hyperlink css:

```css
selector a {
	color: inherit;
	text-decoration: none;	
}
```

## Git Push Again

```bash
git commit --amend --no-edit
git push --force origin master
```