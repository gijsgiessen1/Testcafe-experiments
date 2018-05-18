import { Selector, Role, ClientFunction } from 'testcafe';
import { adminLogin, goBack } from './helper';





// test('Testing selecting an aanspreekvorm', async t =>{



    export async function aanspreekvorm (t){
    const aanspreekSelect = Selector('select[name="algemeen[aanspreekvorm]"]');
    const aanspreekSelectOption = aanspreekSelect.find('option');
    const nextButton = Selector('button[class="next btn btn-default pull-right"]');
    

    await t
    .click(aanspreekSelect)
    .click(aanspreekSelectOption.withText('Aanspreken bij achternamen (bijv. de Vries en van Dijk)'))
    
    
    await t
    .click(nextButton)

    
    
    

};
