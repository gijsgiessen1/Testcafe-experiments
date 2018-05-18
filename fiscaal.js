import { Selector, Role, ClientFunction } from 'testcafe';
import { adminLogin, goBack } from './helper';

export async function fiscaal (t){

    const nextButton = Selector('button[class="next btn btn-default pull-right"]');
    const fiscRegeling = Selector('input[type="radio"][name="fiscale_regeling[optie]"][value="2"]');
    const eindeFiscPartnerschap = Selector('input[name="fiscale_regeling[einddatum]"]');
    const tekenDatum = Selector('input[name="algemeen[tekendatum_convenant]"]');
    const plaatsnaam = Selector('input[name="algemeen[tekenplaats_convenant]"]');
    const download = Selector('input[type="submit"][class="btn btn-default pull-right"][value="Download convenant"]');

    await t
    .click(fiscRegeling)
    .typeText(eindeFiscPartnerschap, '2020')
    .typeText(tekenDatum, '01-01-2019')
    .typeText(plaatsnaam, 'Rotterdam')
    // .click(nextButton)
    .click(download)

    .wait(4000)

};

