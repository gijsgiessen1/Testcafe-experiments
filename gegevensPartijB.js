import { Selector, Role, ClientFunction } from 'testcafe';
import { adminLogin, goBack } from './helper';



export async function gegevensPartijB (t){
const voornamen = Selector('input[name="algemeen[voornamen_partij_b]"]');
const achternaam = Selector('input[name="algemeen[achternaam_partij_b]"]');
const bsn = Selector('input[name="algemeen[bsn_partij_b]"]');
const woonplaats = Selector('input[name="algemeen[woonplaats_partij_b]"]');
const huisnummer = Selector('input[name="algemeen[huisnummer_partij_b]"]');
const geboorteplaats = Selector('input[name="algemeen[geboorteplaats_partij_b]"]');
const straatnaam = Selector('input[name="algemeen[straatnaam_partij_b]"]');
const postcode = Selector('input[name="algemeen[postcode_partij_b]"]');
const geslacht = Selector('input[name="algemeen[geslacht_partij_b]"][value="vrouw"]');
const geboortedatum = Selector('#datepicker2');
const prevDatePicker = Selector('a[class="ui-datepicker-prev ui-corner-all"][data-handler="prev"]');
const secondOfMarch2018 =Selector('td[data-month="2"][data-year="2018"]');
const nextButton = Selector('button[class="next btn btn-default pull-right"]');

await t
.typeText(voornamen, 'Shanya')
.typeText(achternaam, 'Yang')
.typeText(bsn, '207146432')
.typeText(woonplaats, 'Den Haag')
.typeText(huisnummer, '67')
.typeText(straatnaam, 'Wagenstraat')
.typeText(postcode, '2512 AR')
.typeText(geboorteplaats, 'Guangzhou')
.click(geboortedatum)
// .click(geboortedatum)
// .click(prevDatePicker)
// .click(secondOfMarch2018)
// .click(geboortedatum)
// .pressKey('backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace')
.typeText(geboortedatum, '4-2-1989')
.click(geslacht)
.click(nextButton)

};