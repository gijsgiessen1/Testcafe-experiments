import {Selector} from "testcafe";

const emailForm = Selector('#email');

fixture(`Testing convenant generator`)
    .page('http://convenant-generator.zorgeloosch.nl'); 
    
    
   

test('TEST - log in', async t =>
{
    await t
    console.log('Ik ben de convenant G');
    .typeText(emailForm, 'admin@zorgeloosch.nl')
    .click
    

	
});
