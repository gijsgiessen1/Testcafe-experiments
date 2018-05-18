import { Selector, Role, ClientFunction } from 'testcafe';
import { adminLogin, goBack } from './helper';

export async function bankRekening (t){

    // aantal bankrekeningen is 2
 const aantalRekeningen = Selector('input[type="radio"][value="2"][name="verdeling[aantal_rekeningen]"]');



 const nextButton = Selector('button[class="next btn btn-default pull-right"]');

// Selectoren voor gegevens eerste rekening

 const typeRekening1 = Selector('select[name="verdeling[rekeningen][0][type_rekening]"]');

 const optionBetaalRekening1 = typeRekening1.find('option')

 const rekeningNummer1 = Selector('input[name="verdeling[rekeningen][0][rekening_nummer]"]');

 const rekeningSaldo1 = Selector('input[name="verdeling[rekeningen][0][saldo_rekening]"]');


 const partijRekening1 = Selector('select[name="verdeling[rekeningen][0][actie]"]');

 const optionA = partijRekening1.find('option')

 // Selectoren voor gegevens tweede rekening

 const typeRekening2 = Selector('select[name="verdeling[rekeningen][1][type_rekening]"]');

 const optionBetaalRekening2 = typeRekening2.find('option')

 const rekeningNummer2 = Selector('input[name="verdeling[rekeningen][1][rekening_nummer]"]');

 const rekeningSaldo2 = Selector('input[name="verdeling[rekeningen][1][saldo_rekening]"]');


 const partijRekening2 = Selector('select[name="verdeling[rekeningen][1][actie]"]');

 const optionB = partijRekening2.find('option')

 await t

 // selecteer twee rekeningen

 .click(aantalRekeningen)

// Invullen gegevens rekening 1

 .click(typeRekening1)
 .click(optionBetaalRekening1.withText('Betaalrekening'))
 .typeText(rekeningNummer1, 'INGB000867456312')
 .typeText(rekeningSaldo1, '315')
 .click(partijRekening1)
 .click(optionA.withText('Toebedelen partij A'))

// Invullen gegevens rekening 2

.click(typeRekening2)
.click(optionBetaalRekening2.withText('Betaalrekening'))
.typeText(rekeningNummer2, 'INGB000827468152')
.typeText(rekeningSaldo2, '70000')
.click(partijRekening2)
.click(optionB.withText('Toebedelen partij B'))
.click(nextButton)
}