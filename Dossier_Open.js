import { Selector, Role, ClientFunction } from 'testcafe';
import { adminLogin, goBack } from './helper';




fixture `Open dossier`





test('Testing opening a dossier', async t =>{

  const dossiernummer = Selector('input[name="dossiernummer"]');
  const firstRadioButton = Selector('input[name="algemeen[convenant_model]"]');
  const nextButton = Selector('button[class="next btn btn-default pull-right"]');  
   
    await t
    .useRole(adminLogin)
    .click(firstRadioButton)
    .typeText(dossiernummer, '20599')
    .click(nextButton)


});

