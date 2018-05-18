import { Selector, Role, ClientFunction } from 'testcafe';
import { adminLogin, goBack } from './helper';

export async function behoefte (t){

    const meerdereKinderen = Selector('input[type="radio"][name="levensonderhoud[behoefte][kinderen]"][value="meerdere"]'); 
    const bedragBehoefte = Selector('input[name="levensonderhoud[behoefte][bedrag]"]')
    const bedragInkomen = Selector('input[name="levensonderhoud[behoefte][inkomen_gezin]"]')
    const bedragPerKind = Selector('input[name="levensonderhoud[behoefte][uitgaven_kinderen]"]')
    const nextButton = Selector('button[class="next btn btn-default pull-right"]');
    const geenDraagkracht = Selector('input[type="radio"][name="levensonderhoud[type_alimentatie][optie]"][value="geen_draagkracht"]')


    await t
    .click(meerdereKinderen)
    .typeText(bedragBehoefte, '500')
    .typeText(bedragInkomen, '500')
    .typeText(bedragPerKind, '250')
    .click(nextButton)
    .click(geenDraagkracht)
    .click(nextButton)


}

