import { Selector, Role, ClientFunction } from 'testcafe';
import { adminLogin, goBack } from './helper';

export async function inboedel (t){

    const gelijk =  Selector('input[type="radio"][name="verdeling[inboedel][optie]"][value="1"]');

    // const nietGelijk = Selector('input[type="radio"][name="verdeling[inboedel][optie]"][value="2"]');
    // const waardeTotaal =  Selector('input[class="form-control valuta"][name="verdeling[inboedel][waarde][totaal]"]');
    // const waardePartijA = Selector('input[name="verdeling[inboedel][waarde][partij_a]"]');
    // const waardePartijB = Selector('input[name="verdeling[inboedel][waarde][partij_b]"]');
    const nextButton = Selector('button[class="next btn btn-default pull-right"]');

    await t
    .click(gelijk)
    // .click(nietGelijk)
    // .typeText(waardeTotaal, '55000')
    // .typeText(waardePartijA, '5000')
    // .typeText(waardePartijB, '50000')
    .click(nextButton)

}

