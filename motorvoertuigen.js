import { Selector, Role, ClientFunction } from 'testcafe';
import { adminLogin, goBack } from './helper';

export async function motorvoertuigen (t){

    //Ik selecteer twee voertuigen

    const aantalVoertuigen = Selector('input[type="radio"][value="2"][name="verdeling[aantal_motorvoertuigen]"]');

    const aantalFinancialLeases = Selector('input[type="radio"][value="0"][name="verdeling[aantal_financial-leases]"]');

    const nextButton = Selector('button[class="next btn btn-default pull-right"]');

    //selectors details voertuig 1

    const partijVoertuig1 = Selector('select[name="verdeling[motorvoertuigen][0][eigenaar]"]');
    const optionA = partijVoertuig1.find('option')
    const merkVoertuig1 = Selector('input[name="verdeling[motorvoertuigen][0][merk]"]');
    const modelVoertuig1 = Selector('input[name="verdeling[motorvoertuigen][0][type]"]');
    const waardeVoertuig1 = Selector('input[name="verdeling[motorvoertuigen][0][waarde]"]');
    const schadeJarenVerdelen1 = Selector('input[name="verdeling[motorvoertuigen][0][schadevrije_jaren_verdelen]"][type="checkbox"]');
    


    //selectors details voertuig 2

    const partijVoertuig2 = Selector('select[name="verdeling[motorvoertuigen][1][eigenaar]"]');
    const optionB = partijVoertuig2.find('option')
    const merkVoertuig2 = Selector('input[name="verdeling[motorvoertuigen][1][merk]"]');
    const modelVoertuig2 = Selector('input[name="verdeling[motorvoertuigen][1][type]"]');
    const waardeVoertuig2 = Selector('input[name="verdeling[motorvoertuigen][1][waarde]"]');
    const schadeJarenVerdelen2 = Selector('input[name="verdeling[motorvoertuigen][1][schadevrije_jaren_verdelen]"][type="checkbox"]');

    //Selecting 2 voertuigen

    await t

    .click(aantalVoertuigen)

    // typing in details voertuig 1
    .click(partijVoertuig1)
    .click(optionA.withText('Partij A'))
    .typeText(merkVoertuig1, 'Honda')
    .typeText(modelVoertuig1, 'Civic')
    .typeText(waardeVoertuig1, '50000')
    .click(schadeJarenVerdelen1)
    


    // typing in details voertuig 2
    .click(partijVoertuig2)
    .click(optionB.withText('Partij B'))
    .typeText(merkVoertuig2, 'Lada')
    .typeText(modelVoertuig2, 'Niva')
    .typeText(waardeVoertuig2, '230')
    .click(schadeJarenVerdelen2)

    .click(nextButton)
    .click(aantalFinancialLeases)
    .click(nextButton)
}

