const { Builder, By, until } = require('selenium-webdriver');
require('chromedriver');

async function testLogin() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Navigiere zur Login-Seite
    await driver.get('http://localhost:3000/login');

    // Finde die Eingabefelder für Benutzername und Passwort und fülle sie aus
    await driver.findElement(By.id('username')).sendKeys('testuser');
    await driver.findElement(By.id('password')).sendKeys('testpassword');

    // Finde und klicke auf die Login-Schaltfläche
    await driver.findElement(By.css('.login-form button')).click();

    // Warte, bis der Benutzer eingeloggt ist und die Navbar aktualisiert wird
    await driver.wait(until.elementLocated(By.xpath("//*[contains(text(), 'Hello, testuser')]")), 5000);

    // Überprüfe, ob der Logout-Button angezeigt wird
    let logoutButton = await driver.findElement(By.xpath("//*[contains(text(), 'Logout')]"));
    if (logoutButton) {
      console.log('Login test passed.');
    } else {
      console.log('Login test failed.');
    }
  } catch (err) {
    console.error('Login test failed with error: ', err);
  } finally {
    // Beende den WebDriver
    await driver.quit();
  }
}

testLogin();
