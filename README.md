# Node.js with TypeScript path finder
<p>
  <a href="./LICENSE">
      <img
        alt="license:GPL"
        src="https://img.shields.io/badge/License-GPL-blue"
      />
  </a>
  <img
        alt="Language:TypeScript"
        src="https://img.shields.io/badge/Language-TypeScript-purple"
  />
  <a href="https://nextjs.org/">
    <img
        alt="Server:NextJs"
        src="https://img.shields.io/badge/Server-NextJs-45d298"
    />
  </a>
  <a href="https://fr.reactjs.org/">
    <img
        alt="Server:React"
        src="https://img.shields.io/badge/Front-React-45d298"
    />
  </a>
</p>
<p>
  <a href="https://mochajs.org/">
    <img
        alt="unitTests:mocha+chai"
        src="https://img.shields.io/badge/Unit_Tests-Chai_Mocha-aa4720"
    />
  </a>
  <a href="https://www.cypress.io/">
    <img
        alt="endToEndTests:Cypress"
        src="https://img.shields.io/badge/EndToEnd_Tests-Cypress-aa4720"
    />
  </a>

![Node.js CI](https://github.com/Cirrus-8691/NextPathFinder/workflows/Node.js%20CI/badge.svg?branch=master)

</p>

Author : Frédéric Diaz<br>
This is a web site used to find the fastest or eco path between two vertices in a graph.

## Getting started
 - Donwload the source, then to install dependencies, type :
```bash
npm install
```
- To run the project use :
```bash
npm run dev
```
- Open <a href="http://127.0.0.1:3000">`http://127.0.0.1:3000`</a> url in your browser.
- You should a simple page.
<p align="center">
    <img
      alt="hello"
      src="./public/hello.jpeg"
      width="640px"
    />
</p>

- As a sample you can find the fastest path from vertex id: 1 to vertex id: 4 by typing<br> 
<a href="http://127.0.0.1:3000/findPath?from=1&to=4&by=km">`http://127.0.0.1:3000/findPath?from=1&to=4&by=km`</a>

 - Be careful the service checks the border of the vertex's id and can throw exceptions.<br>

## Other tests
- To run the unit, intergration and end to end tests, type :
```bash
npm test
```

##  Continuous integration
The Github repository has two workflows in "Actions" defined in the 
<a href="./.github/workflows">Yaml files in ./github/workflows/</a><br/>
The <a href="./.github/workflows/manual.yml">Manual workflow</a> can be used to run (click on "Run Workflow" button) the unit tests in the Github pipeline. NB : Refresh the HTML page if nothing moves.
<br/>
The other workflow <a href="./.github/workflows/node.js.yml">Node.js CI</a> is used for continuous integration.
<br/>
You can see the result of the Unit tests in the web console.

