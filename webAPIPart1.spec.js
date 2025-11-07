const {test, expect, request} = require('@playwright/test');
test.beforeAll( ()=>
{
    // const apiContext = await request.newContext();
    apiContext.post()

});

test.beforeEach( ()=>{

})
