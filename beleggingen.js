import { Selector, Role, ClientFunction } from 'testcafe';
import { adminLogin, goBack } from './helper';

export async function beleggingen (t){

    const nextButton = Selector('button[class="next btn btn-default pull-right"]');

    //hier kies ik voor drie beleggingen en toebedeel die aan 1 partij, omdat dan minimaal alle functionaliteiten getest worden


   const aantalbeleggingen = Selector('input[type="radio"][name="verdeling[aantal_beleggingen]"][value="3"]');
   const beleggingToebedelen1 = Selector('input[type="radio"][name="verdeling[beleggingen][0][actie]"][value="opzeggen_en_verdelen"]');
   const beleggingToebedelen2 = Selector('input[type="radio"][name="verdeling[beleggingen][1][actie]"][value="opzeggen_en_verdelen"]');
   const beleggingToebedelen3 = Selector('input[type="radio"][name="verdeling[beleggingen][2][actie]"][value="opzeggen_en_verdelen"]');

   //gegevens selectoren beleggingen 1

   const naamBank1 = Selector('input[name="verdeling[beleggingen][0][naam_bank]"]');
   const rekeningNummer1 = Selector('input[name="verdeling[beleggingen][0][rekeningnummer]"]');
   const peildatum1 = Selector('input[name="verdeling[beleggingen][0][peildatum]"]');
   const waarde1 = Selector('input[name="verdeling[beleggingen][0][saldo]"]'); 
   const toebedelenAan1 = Selector('select[name="verdeling[beleggingen][0][toebedeelde_partij]"')
   const optionA = toebedelenAan1.find('option')

   //gegevens selectoren beleggingen 2

   const naamBank2 = Selector('input[name="verdeling[beleggingen][1][naam_bank]"]');
   const rekeningNummer2 = Selector('input[name="verdeling[beleggingen][1][rekeningnummer]"]');
   const peildatum2 = Selector('input[name="verdeling[beleggingen][1][peildatum]"]');
   const waarde2 = Selector('input[name="verdeling[beleggingen][1][saldo]"]'); 
   const toebedelenAan2 = Selector('select[name="verdeling[beleggingen][1][toebedeelde_partij]"')
   const optionB = toebedelenAan2.find('option')

   //gegevens selectoren beleggingen 3

   const naamBank3 = Selector('input[name="verdeling[beleggingen][2][naam_bank]"]');
   const rekeningNummer3 = Selector('input[name="verdeling[beleggingen][2][rekeningnummer]"]');
   const peildatum3 = Selector('input[name="verdeling[beleggingen][2][peildatum]"]');
   const waarde3 = Selector('input[name="verdeling[beleggingen][2][saldo]"]'); 
   const toebedelenAan3 = Selector('select[name="verdeling[beleggingen][2][toebedeelde_partij]"')
   const optionB2 = toebedelenAan3.find('option')
   
   
   await t


   .click(aantalbeleggingen)
    
   // gegevens belegging 1 invoeren

   .click(beleggingToebedelen1)

   .typeText(naamBank1, 'ING')
   .typeText(rekeningNummer1, 'NL94INGB000567132')
   .typeText(peildatum1, '10-05-2018')
    .typeText(waarde1, '400')
   .click(toebedelenAan1)
   .click(optionA.withText('Partij A'))

      // gegevens belegging 2 invoeren

      .click(beleggingToebedelen2)

      .typeText(naamBank2, 'ABN AMRO')
      .typeText(rekeningNummer2, 'NL88ABNB000312502')
      .typeText(peildatum2, '10-05-2018')
       .typeText(waarde2, '50000')
      .click(toebedelenAan2)
      .click(optionB.withText('Partij B'))

       // gegevens belegging 3 invoeren

       .click(beleggingToebedelen3)

       .typeText(naamBank3, 'BUNQ')
       .typeText(rekeningNummer3, 'NL67BUNBB000117936')
       .typeText(peildatum3, '10-05-2018')
        .typeText(waarde3, '10000')
       .click(toebedelenAan3)
       .click(optionB2.withText('Partij B'))
    
    
      .click(nextButton)
};
