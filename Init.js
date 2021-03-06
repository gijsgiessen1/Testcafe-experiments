const createTestCafe = require('testcafe');
let testcafe         = null;

createTestCafe('localhost', 1337, 1338)
    .then(tc => {
        testcafe     = tc;
        const runner = testcafe.createRunner();

        return runner
            .src(['./app.js'])
            .browsers(['chrome'])
            .run({
                skipJsErrors: true,
                quarantineMode: true,
                selectorTimeout: 50000,
                assertionTimeout: 7000,
                pageLoadTimeout: 8000
            });
    })
    .then(failedCount => {
        console.log('Tests failed: ' + failedCount);
        testcafe.close();
    })
    

  