import { Selector, Role, ClientFunction } from 'testcafe';
import { adminLogin, goBack } from './helper';

    export async function algemeneGegevens (t){
        const datumHuwelijk = Selector('#datepicker3');
        const gemeenteHuwelijk = Selector('input[name="algemeen[plaats_huwelijk]"]');
        const nextButton = Selector('button[class="next btn btn-default pull-right"]');

        const splitsingHuishoudens= Selector(()=> {
            return document.querySelector('textarea');
         });

        await t
        .typeText(datumHuwelijk, '01-01-2012')
        // .click(splitsingHuishoudens)
        .pressKey('tab tab 2 9 - 1 2 - 2 0 1 4')
        .typeText(gemeenteHuwelijk, 'Rotterdam')
        .click(nextButton)


    };

