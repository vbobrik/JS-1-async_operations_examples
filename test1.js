//


const URL = 'http://suninjuly.github.io/math.html';

//------------async/await-------------------------------

const {Builder, By} = require('selenium-webdriver');

(async function task5() {
    const driver = new Builder().forBrowser('chrome').build();
    try {
        await driver.get(URL);
        let x = await driver.findElement(By.css("#input_value")).getText();
        let answer = await calc(x);
        await driver.findElement(By.css("#answer")).sendKeys(answer);
        await driver.findElement(By.css("#robotCheckbox")).click();
        await driver.findElement(By.css("#robotsRule")).click();
        driver.findElement(By.css('.btn.btn-default')).click();

        function calc(x) {
            return Math.log(Math.abs(12 * Math.sin(+x)));
        }
    } finally {
        setTimeout(() => driver.quit(), 30000);
    }
})();

// ----------------promise-------------------------

/*const {Builder, By} = require('selenium-webdriver');

(function task5() {
    let x, answer;
    const driver = new Builder().forBrowser('chrome').build();
    try {
        driver.get(URL)
            .then(() => {
                x = driver.findElement(By.css("#input_value")).getText();
                return x;
            })
            .then(x => {
                answer = calc(x);
                return answer;
            })
            .then(answer => {
                Promise.all([driver.findElement(By.css("#answer")).sendKeys(answer),
                    driver.findElement(By.css("#robotCheckbox")).click(),
                    driver.findElement(By.css("#robotsRule")).click()])
                    .then(() => driver.findElement(By.css('.btn.btn-default')).click());
            });

        function calc(x) {
            return Math.log(Math.abs(12 * Math.sin(+x)));
        }
    } finally {
        setTimeout(() => driver.quit(), 10000);
    }
})();*/

// ------------------promise & await-------------------------------------

/*const { Builder, By } = require('selenium-webdriver');

(async function task5() {
    let x, answer;
    const driver = new Builder().forBrowser('chrome').build();
    try {
        await driver.get(URL);
        x = await driver.findElement(By.css("#input_value")).getText();
        console.log(x);
        answer = await calc(x);
            driver.findElement(By.css("#answer")).sendKeys(answer)
            .then(() => driver.findElement(By.css("#robotCheckbox")).click())
            .then(() => driver.findElement(By.css("#robotsRule")).click())
            .then(() => driver.findElement(By.css('.btn.btn-default')).click());

        function calc(x) {
            return Math.log(Math.abs(12 * Math.sin(+x)));
        }
    } finally {
        setTimeout(() => driver.quit(), 10000);
    }
})();*/

//-------------callback-------------------------------

/*function showFilm(callback1, callback2) {
    try {
        alert('Let\'s get acquainted. My name is Fill');
        
            console.log('------This is a program for watching interesting stories-----');
            let age = prompt('How old are you?', '');
            if (age < 18) {
                callback1();
            } else callback2();
        
    } catch (err) {
        console.log(err);
    }
}

function child() {
    alert('Hello my little friend! Today I\'ll show you one interesting fairy tail ');

    if (confirm('Rabbit is your favorite animal?')) {
        alert('https://www.youtube.com/watch?v=4BdGDrVSf0o');
    } else if (confirm('Dog is your favorite animal?')) {
        alert('https://www.youtube.com/watch?v=twSn58BPgWM');
    } else if (confirm('Cat is your favorite animal?')) {
        alert('https://www.youtube.com/watch?v=hQxlvQLOjKU');
    } else alert('https://www.youtube.com/watch?v=fxdW28MvZTo');
}

function adult() {
    alert('I\'m greeting you! Today I\'ll show you something interesting');

    switch (prompt('What is your favorite genre?', '')) {
        case 'fantasy':
            alert('https://www.youtube.com/watch?v=S_j0Gp9jwss');
            break;
        case 'comedy':
            alert('https://www.youtube.com/watch?v=zrar8zpGySA');
            break;
        case 'horror':
            alert('https://www.youtube.com/watch?v=1u3PwhDmqiA');
            break;
        default:
            alert('https://www.youtube.com/watch?v=Cpv6MD2ofyU');
    }
}

showFilm(child, adult);*/

//-----------callback & promise------------------------------

/*function showFilm(callback1, callback2) {
    try {
        alert('Let\'s get acquainted. My name is Fill');
        console.log('------This is a program for watching interesting stories-----');
        let age = prompt('How old are you?', '');
        if (age < 18) {
            callback1();
        } else callback2();
    } catch (err) {
        console.log(err);
    }
}

function child() {
    try {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(alert('Hello my little friend! Today I\'ll show you one interesting fairy tail '));
            }, 300);
        });
        promise.then(promise => {
            if (confirm('Rabbit is your favorite animal?')) {
                alert('https://www.youtube.com/watch?v=4BdGDrVSf0o');
            } else if (confirm('Dog is your favorite animal?')) {
                alert('https://www.youtube.com/watch?v=twSn58BPgWM');
            } else if (confirm('Cat is your favorite animal?')) {
                alert('https://www.youtube.com/watch?v=hQxlvQLOjKU');
            } else alert('https://www.youtube.com/watch?v=fxdW28MvZTo');

        });
    } catch (err) {
        alert(err);
    }
}

function adult() {
    try {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(alert('I\'m greeting you! Today I\'ll show you something interesting'));
            });
        });
        promise.then(promise => {
            switch (prompt('What is your favorite genre?', '')) {
                case 'fantasy':
                    alert('https://www.youtube.com/watch?v=S_j0Gp9jwss');
                    break;
                case 'comedy':
                    alert('https://www.youtube.com/watch?v=zrar8zpGySA');
                    break;
                case 'horror':
                    alert('https://www.youtube.com/watch?v=1u3PwhDmqiA');
                    break;
                default:
                    alert('https://www.youtube.com/watch?v=Cpv6MD2ofyU');
            }

        });
    } catch (err) {
        alert(err);
    }
}

showFilm(child, adult);*/