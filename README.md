# Helion-Automation-Test
Automation tests in wdio + ts + supertest + page object pattern for helion shop.
<h3>Includes:</h3>
<ul>
<li>Webdriver.io</li>
<li>Typescript</li>
<li>Page Object Pattern</li>
<li>Config data separation</li>
<li>Supertest for api testing</li>
<li>Allure with Screenshot on failure</li>
<li>Jenkins</li>
</ul>

<hr />

<h3>Install:</h3>
Download repo <br />
<code>npm install</code> <br />
<code>npm run {test suite}</code> <br />

<hr />

<h3>Default config file:</h3>

    browser: "chrome", 
    baseUrl: "https://helion.pl/", 
    logLevel: "warn",
    maxInstance: "1",
    timeout: 10000, 
    bail: 0, 
    headless: false


<hr />

<h3>Jenkins</h3>
