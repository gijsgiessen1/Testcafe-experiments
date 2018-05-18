import { Selector, Role, ClientFunction } from 'testcafe';
import { adminLogin, goBack } from './helper';

export async function nationaliteiten (t){

    const nationaliteitA = Selector('input[name="algemeen[nationaliteit_partij_a]"]');
    const nationaliteitB = Selector('input[name="algemeen[nationaliteit_partij_b]"]');
    const nextButton = Selector('button[class="next btn btn-default pull-right"]');

    // const nationaliteitA = Selector(()=> {
    //     return document.querySelector('input[name="nationaliteit_partij_a"]'); 
    // });

    // const nationaliteitB = Selector(()=> {
    //     return document.querySelector('input[name="nationaliteit_partij_b"]'); 
    // });


    await t
    .click(nationaliteitA)
    .pressKey('backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace')
    .typeText(nationaliteitA, 'Nederlandse')
    .click(nationaliteitB)
    .pressKey('backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace')
    .typeText(nationaliteitB, 'Chinese')
    .click(nextButton)

}

