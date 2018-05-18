import { Selector, Role, ClientFunction } from 'testcafe';
import { adminLogin, goBack } from './helper';



export async function gegevensPartijA (t){
const voornamen = Selector('input[name="algemeen[voornamen_partij_a]"]');
const achternaam = Selector('input[name="algemeen[achternaam_partij_a]"]');
const bsn = Selector('input[name="algemeen[bsn_partij_a]"]');
const woonplaats = Selector('input[name="algemeen[woonplaats_partij_a]"]');
const huisnummer = Selector('input[name="algemeen[huisnummer_partij_a]"]');
const geboorteplaats = Selector('input[name="algemeen[geboorteplaats_partij_a]"]');
const straatnaam = Selector('input[name="algemeen[straatnaam_partij_a]"]');
const postcode = Selector('input[name="algemeen[postcode_partij_a]"]');
const geslacht = Selector('input[name="algemeen[geslacht_partij_a]"][value="man"]');
const geboortedatum = Selector('#datepicker');
const prevDatePicker = Selector('a[class="ui-datepicker-prev ui-corner-all"][data-handler="prev"]');
const secondOfMarch2018 =Selector('td[data-month="2"][data-year="2018"]');
const nextButton = Selector('button[class="next btn btn-default pull-right"]');

await t
.typeText(voornamen, 'Gijs')
.typeText(achternaam, 'van der Giessen')
.typeText(bsn, '208345472')
.typeText(woonplaats, 'Rotterdam')
.typeText(huisnummer, '10')
.typeText(straatnaam, 'Slag')
.typeText(postcode, '3075AH')
.typeText(geboorteplaats, 'Rotterdam')
.click(geboortedatum)
// .click(geboortedatum)
// .click(prevDatePicker)
// .click(secondOfMarch2018)
// .click(geboortedatum)
// .pressKey('backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace')
.typeText(geboortedatum, '6-1-1992')
.click(geslacht)
.click(nextButton)

};


