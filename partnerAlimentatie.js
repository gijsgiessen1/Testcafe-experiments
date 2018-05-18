import { Selector, Role, ClientFunction } from 'testcafe';
import { adminLogin, goBack } from './helper';

export async function partnerAlimentatie (t){

    const plichtPartijB = Selector('input[type="radio"][name="levensonderhoud[alimentatieplichtige]"][value="Partij B"]');
    const voorlopig = Selector('input[type="checkbox"][name="voorlopige-partneralimentatie-checkbox"]');
    const nextButton = Selector('button[class="next btn btn-default pull-right"]'); 
    const datumSplitsing = Selector('input[name="levensonderhoud[tijdelijke_alimentatie][datum_splitsing]"]');  
    const bedrag = Selector('input[name="levensonderhoud[tijdelijke_alimentatie][bedrag]"]'); 

    await t
    .click(plichtPartijB)
    .click(voorlopig)
    .typeText(datumSplitsing, "29-12-2014")
    .typeText(bedrag, "500")
    .click(nextButton)
    
}

