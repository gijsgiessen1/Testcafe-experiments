const createTestCafe  = require('testcafe');
        let testcafe          = null;

// let browsers = ['browserstack:Chrome@53.0:Windows 10'];
        let browsers = ['chrome'];
        let tests = __dirname + '/' + 'test.js';

        console.log(tests);
        

createTestCafe('localhost', 1337, 1338)
.then(tc =>
{
    testcafe     = tc;
    const runner = testcafe.createRunner();

    return runner
        .src(tests)
        .browsers(browsers)
        .run();
})
.then(failedCount => {
    console.log('Tests failed: ' + failedCount);
    testcafe.close();
})
.catch(err=>console.log(err));
         