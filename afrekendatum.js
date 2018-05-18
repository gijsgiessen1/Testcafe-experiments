import { Selector, Role, ClientFunction } from 'testcafe';
import { adminLogin, goBack } from './helper';

export async function afrekendatum (t){

    const afwijken = Selector('input[type="radio"][name="verdeling[afrekendatum]"][value="afwijken_van_de_peildatum"]');
    const datum = Selector('#datepicker8');
    const nextButton = Selector('button[class="next btn btn-default pull-right"]');

    await t
    .click(afwijken)
    .typeText(datum, '01-01-2020')
    .click(nextButton)

}