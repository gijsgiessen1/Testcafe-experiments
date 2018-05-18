import { Selector, Role, ClientFunction } from 'testcafe';
import { adminLogin, goBack } from './helper';

export async function lijfrentepolis (t){

    const nextButton = Selector('button[class="next btn btn-default pull-right"]');

    //hier kies ik voor twee lijfrentepolissen en toebedeel die aan 1 partij, omdat dan minimaal alle functionaliteiten getest worden


   const aantalLijfrentePolissen = Selector('input[type="radio"][name="verdeling[aantal_lijfrentepolissen]"][value="2"]');
   const lijfrentePolisToebedelen1 = Selector('input[type="radio"][name="verdeling[lijfrentepolissen][0][actie]"][value="toebedelen"]');
   const lijfrentePolisToebedelen2 = Selector('input[type="radio"][name="verdeling[lijfrentepolissen][1][actie]"][value="toebedelen"]');

   //gegevens selectoren lijfrentepolis 1

   const naamVerzekeraar1 = Selector('input[name="verdeling[lijfrentepolissen][0][naam_verzekeraar]"]');
   const polisnummer1 = Selector('input[name="verdeling[lijfrentepolissen][0][polisnummer]"]');
   const peildatum1 = Selector('input[name="verdeling[lijfrentepolissen][0][peildatum]"]');
   const brutoWaarde1 = Selector('input[name="verdeling[lijfrentepolissen][0][bruto_waarde]"]'); 
   const nettoWaarde1 = Selector('input[name="verdeling[lijfrentepolissen][0][netto_waarde]"]');
   const toebedelenAan1 = Selector('select[name="verdeling[lijfrentepolissen][0][toebedeelde_partij]"')
   const optionA = toebedelenAan1.find('option')

   //gegevens selectoren lijfrentepolis 2

   const naamVerzekeraar2 = Selector('input[name="verdeling[lijfrentepolissen][1][naam_verzekeraar]"]');
   const polisnummer2 = Selector('input[name="verdeling[lijfrentepolissen][1][polisnummer]"]');
   const peildatum2 = Selector('input[name="verdeling[lijfrentepolissen][1][peildatum]"]');
   const brutoWaarde2 = Selector('input[name="verdeling[lijfrentepolissen][1][bruto_waarde]"]'); 
   const nettoWaarde2 = Selector('input[name="verdeling[lijfrentepolissen][1][netto_waarde]"]');
   const toebedelenAan2 = Selector('select[name="verdeling[lijfrentepolissen][1][toebedeelde_partij]"')
   const optionB = toebedelenAan2.find('option')

   await t


   .click(aantalLijfrentePolissen)
    
   // gegevens lijfrentepolis 1 invoeren

   .click(lijfrentePolisToebedelen1)

   .typeText(naamVerzekeraar1, 'Aegon')
   .typeText(polisnummer1, '55362188')
   .typeText(peildatum1, '20-04-2018')
   .typeText(brutoWaarde1, '3000')
   .typeText(nettoWaarde1, '2000')
   .click(toebedelenAan1)
   .click(optionA.withText('Partij A'))

     // gegevens lijfrentepolis 2 invoeren

     .click(lijfrentePolisToebedelen2)

     .typeText(naamVerzekeraar2, 'Nationale Nederlanden')
     .typeText(polisnummer2, '66642838')
     .typeText(peildatum2, '20-04-2018')
     .typeText(brutoWaarde2, '10000')
     .typeText(nettoWaarde2, '5500')
     .click(toebedelenAan2)
     .click(optionB.withText('Partij B'))

     .click(nextButton)
};
