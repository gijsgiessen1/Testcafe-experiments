import { Selector, Role, ClientFunction } from 'testcafe';
import { adminLogin, goBack } from './helper';

export async function schenkingen (t){

    //Ik selecteer twee schenkingen

    const aantalSchenkingen = Selector('input[type="radio"][value="2"][name="verdeling[aantal_schenkingen]"]');

    const nextButton = Selector('button[class="next btn btn-default pull-right"]');

    //selectors details schenking 1

    const partijSchenking1 = Selector('select[name="verdeling[schenking][0][ontvanger]"]');
    const optionB = partijSchenking1.find('option')
    const datumSchenking1 = Selector('input[name="verdeling[schenking][0][datum]"]');
    const typeSchenking1 = Selector('select[name="verdeling[schenking][0][type]"]');
    const optionSchenking = typeSchenking1.find('option')
    const restant1 = Selector('input[name="verdeling[schenking][0][restant]"]');
    const omschrijving1 = Selector('input[name="verdeling[schenking][0][omschrijving]"]');
    const bestanddeel1 = Selector('input[name="verdeling[schenking][0][vermogensbestanddeel]"]');


    //selectors details schenking 2

    const partijSchenking2 = Selector('select[name="verdeling[schenking][1][ontvanger]"]');
    const optionA = partijSchenking2.find('option')
    const datumSchenking2 = Selector('input[name="verdeling[schenking][1][datum]"]');
    const typeSchenking2 = Selector('select[name="verdeling[schenking][1][type]"]');
    const optionErfenis = typeSchenking2.find('option')
    const restant2 = Selector('input[name="verdeling[schenking][1][restant]"]');
    const omschrijving2 = Selector('input[name="verdeling[schenking][1][omschrijving]"]');
    const bestanddeel2 = Selector('input[name="verdeling[schenking][1][vermogensbestanddeel]"]');

    //Selecting 2 schenkingen

    await t

    .click(aantalSchenkingen)

    // typing in details schenking 1
    .click(partijSchenking1)
    .click(optionB.withText('Partij B'))
    .typeText(datumSchenking1, '17-06-1998')
    .click(typeSchenking1)
    .click(optionSchenking.withText('Schenking'))
    .typeText(omschrijving1, 'Van grootouders gehad nadat ze geslaagd was van middelbare school')
    .typeText(restant1, '50000')
    .typeText(bestanddeel1, 'aandelen')


    // typing in details schenking 2
    .click(partijSchenking2)
    .click(optionA.withText('Partij A'))
    .typeText(datumSchenking2, '08-01-2010')
    .click(typeSchenking2)
    .click(optionErfenis.withText('Erfenis'))
    .typeText(omschrijving2, 'Van grootvader geerft nadat deze overleden is')
    .typeText(restant2, '5000')
    .typeText(bestanddeel2, 'spaargeld')
    .click(nextButton)


}

