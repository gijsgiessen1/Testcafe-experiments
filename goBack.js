import { Selector, Role, ClientFunction } from 'testcafe';
import { adminLogin, goBack } from './helper';





// test
// .page('https://convenant-generator.zorgeloosch.nl/')
// ('Testing going back and opening a dossier', async t =>{

export async function openDossier (t){
    // goBack(0);

    const dossiernummer = Selector('input[name="dossiernummer"]');
    const firstRadioButton = Selector('input[name="algemeen[convenant_model]"]');
    const nextButton = Selector('button[class="next btn btn-default pull-right"]');
    const menuLink = Selector('a[title="Naar het menu gaan"]');  
    
   
    

await t

    .useRole(adminLogin)
    .wait(1000)
    .click(menuLink)

    .expect(dossiernummer.exists)

    await t
    .wait(1000)

    .typeText(dossiernummer, '20599')
    .expect(firstRadioButton.exists)

    await t
    .wait(1000)

    .click(firstRadioButton)
    .expect(nextButton.exists)

    
    await t
    .wait(1000)

    .click(nextButton)

    

};