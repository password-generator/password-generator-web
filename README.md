<h1 align="center">Password Generator</h1>

<p align="center">	
  <a href="https://github.com/password-generator/password-generator-web#readme">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
  </a>
  <a href="https://github.com/password-generator/password-generator-web/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-brightgreen.svg" target="_blank" />
  </a>
  <a href="https://github.com/password-generator/password-generator-web/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
  </a>
  <img alt="GitHub Pull Requests" src="https://img.shields.io/github/issues-pr/password-generator/password-generator-web" />
  <img alt="GitHub Contributors" src="https://img.shields.io/github/contributors/password-generator/password-generator-web" />
  <img alt="" src="https://img.shields.io/github/repo-size/password-generator/password-generator-web" />
</p>

> Web site created to generate good passwords.

# :pushpin: Table of Contents

* [Demo Website](#eyes-demo-website)
* [Technologies](#computer-technologies)
* [Features](#rocket-features)
* [How to run](#construction_worker-how-to-run)
* [Found a bug? Missing a specific feature?](#bug-issues)
* [Contributing](#tada-contributing)
* [License](#closed_book-license)

### Screenshots
[![screenshot](https://user-images.githubusercontent.com/60241602/82554572-964a0d80-9b3c-11ea-962c-f4945be537d6.png)](https://password-generato.herokuapp.com)

# :eyes: Demo Website
👉  demo: https://password-generator-web.netlify.app/

# :computer: Technologies
This project was made using the follow technologies:

* [React](https://reactjs.org/) 
* [Cypress](https://www.cypress.io/)
* [Docker](https://www.docker.com/)

# :rocket: Features

- Generate storng passwords.   

# :construction_worker: How to run

## Using node

### Install Dependencies
```bash
npm install
```
or,
```bash
yarn
```
### Run Aplication
```bash 
npm start
```
or,
```bash 
yarn start
```

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Run tests

```bash
npm run cypress-open
```
or,
```bash
yarn cypress-open
```

## Using docker

### Create Containers

```bash
sh ./scripts/docker-compose-setup.sh
```

### Run Aplication

```bash
sh ./scripts/start-server.sh
```

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Run tests

```bash
sh ./scripts/run-tests.sh
```

# :bug: Issues

Feel free to **file a new issue** with a respective title and description on the the [Password Generator](https://github.com/password-generator/password-generator-web/issues) repository. If you already found a solution to your problem, **i would love to review your pull request**!

# :tada: Contributing
First of all, thank you for being interested in helping out, your time is always appreciated in every way. :100:

Here's some tips:

* Check the [issues page](https://github.com/password-generator/password-generator-web/issues) for already opened issues (or maybe even closed ones) that might already address your question/bug/feature request.
* Feature requests are welcomed! Provide some details on why it would be helpful for you and others, explain how you're using bull-board and if possible even some screenshots if you are willing to mock something!

Check out the [contributing](./CONTRIBUTING.md) page to see the best places to file issues, start discussions and begin contributing.

# :closed_book: License

Released in 2020.
This project is under the [MIT license](./LICENSE).
