const { Builder, By, until } = require('selenium-webdriver');

(async function testePagina() {

    let driver = await new Builder().forBrowser('chrome').build();

    try {

        await driver.get('http://localhost:3000');

        const body = await driver.findElement(By.tagName('body'));

        const texto = await body.getText();

        console.log(texto);

    } finally {

        await driver.quit();

    }

})();