import { Selector, Role, ClientFunction } from 'testcafe';
import { adminLogin, goBack } from './helper';

export async function privateLeases (t){

    // aantal private leases is 1

 const nextButton = Selector('button[class="next btn btn-default pull-right"]');

 const aantalFinancialLeases = Selector('input[type="radio"][value="1"][name="verdeling[aantal_private-leases]"]');

 const naamPrivateLease = Selector('input[name="verdeling[private_leases][0][naam_bedrijf]"]');

 const contractPrivateLease = Selector('input[name="verdeling[private_leases][0][contractnummer_bedrijf]"]');

 const partijLease = Selector('select[name="verdeling[private_leases][0][eigenaar]"]');

 const optionB = partijLease.find('option')

 await t

 .click(aantalFinancialLeases)
 .typeText(naamPrivateLease, 'Bol&Boosch')
 .typeText(contractPrivateLease, '37657643')
 .click(partijLease)
 .click(optionB.withText('Partij B'))
 .click(nextButton)
}