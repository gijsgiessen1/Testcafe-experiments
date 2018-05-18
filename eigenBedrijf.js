import { Selector, Role, ClientFunction } from 'testcafe';
import { adminLogin, goBack } from './helper';

export async function eigenBedrijf (t){

    

 const nextButton = Selector('button[class="next btn btn-default pull-right"]');

 // aantal eigen bedrijven is 1

 const aantalEigenBedrijven = Selector('input[type="radio"][value="1"][name="verdeling[aantal_bedrijven]"]');

 const rechtsvormBedrijf = Selector('select[name="verdeling[bedrijven][1][rechtsvorm_bedrijf]"]');

 const optionEenmanszaak = rechtsvormBedrijf.find('option');

 const naamEigenBedrijf = Selector('input[name="verdeling[bedrijven][1][naam]"]');

 const kvkEigenBedrijf = Selector('input[name="verdeling[bedrijven][1][kvk]"]');

 const partijBedrijfMomenteel = Selector('select[name="verdeling[bedrijven][1][huidige_eigenaar]"]');

 const optionB = partijBedrijfMomenteel.find('option')

 const partijBedrijfToekomst = Selector('select[name="verdeling[bedrijven][1][toekomstige_eigenaar]"]');

 const optionB2 = partijBedrijfToekomst.find('option')

 const waardeBepaling = Selector('input[type="radio"][value="eigen_inschatting"][name="verdeling[bedrijven][1][type_waardebepaling]"]');

 const waardeBedrijf = Selector('input[name="verdeling[bedrijven][1][waarde][eigen_inschatting]"]');

 await t

 .click(aantalEigenBedrijven)
 .click(rechtsvormBedrijf)
 .click(optionEenmanszaak.withText('Eenmanszaak'))
 .typeText(naamEigenBedrijf, 'Immigration Consultancy inc')
 .typeText(kvkEigenBedrijf, '30161770')
 .click(partijBedrijfMomenteel)
 .click(optionB.withText('Partij B'))
 .click(partijBedrijfToekomst)
 .click(optionB2.withText('Partij B'))
 .click(waardeBepaling)
 .typeText(waardeBedrijf, '400000')
 .click(nextButton)
}