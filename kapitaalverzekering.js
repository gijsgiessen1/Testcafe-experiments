import { Selector, Role, ClientFunction } from 'testcafe';
import { adminLogin, goBack } from './helper';

export async function kapitaalverzekering (t){

    const nextButton = Selector('button[class="next btn btn-default pull-right"]');

    //hier kies ik voor twee kapitaalverzekeringen en toebedeel die aan 1 partij, omdat dan minimaal alle functionaliteiten getest worden


   const aantalKapitaalverzekeringen = Selector('input[type="radio"][name="verdeling[aantal_kapitaalverzekeringen]"][value="2"]');
   const kapitaalverzekeringToebedelen1 = Selector('input[type="radio"][name="verdeling[kapitaalverzekeringen][0][actie]"][value="toebedelen"]');
   const kapitaalverzekeringToebedelen2 = Selector('input[type="radio"][name="verdeling[kapitaalverzekeringen][1][actie]"][value="toebedelen"]');

   //gegevens selectoren kapitaalverzekering 1

   const naamVerzekeraar1 = Selector('input[name="verdeling[kapitaalverzekeringen][0][naam_verzekeraar]"]');
   const polisnummer1 = Selector('input[name="verdeling[kapitaalverzekeringen][0][polisnummer]"]');
   const peildatum1 = Selector('input[name="verdeling[kapitaalverzekeringen][0][peildatum]"]');
   const waarde1 = Selector('input[name="verdeling[kapitaalverzekeringen][0][waarde]"]'); 
   const toebedelenAan1 = Selector('select[name="verdeling[kapitaalverzekeringen][0][toebedeelde_partij]"')
   const optionA = toebedelenAan1.find('option')

   //gegevens selectoren kapitaalverzekering 2

   const naamVerzekeraar2 = Selector('input[name="verdeling[kapitaalverzekeringen][1][naam_verzekeraar]"]');
   const polisnummer2 = Selector('input[name="verdeling[kapitaalverzekeringen][1][polisnummer]"]');
   const peildatum2 = Selector('input[name="verdeling[kapitaalverzekeringen][1][peildatum]"]');
   const waarde2 = Selector('input[name="verdeling[kapitaalverzekeringen][1][waarde]"]'); 
   const toebedelenAan2 = Selector('select[name="verdeling[kapitaalverzekeringen][1][toebedeelde_partij]"')
   const optionB = toebedelenAan2.find('option')
   
   
   await t


   .click(aantalKapitaalverzekeringen)
    
   // gegevens kapitaalverzekering 1 invoeren

   .click(kapitaalverzekeringToebedelen1)

   .typeText(naamVerzekeraar1, 'Aegon')
   .typeText(polisnummer1, '33173299')
   .typeText(peildatum1, '20-04-2018')
    .typeText(waarde1, '2500')
   .click(toebedelenAan1)
   .click(optionA.withText('Partij A'))

      // gegevens kapitaalverzekering 2 invoeren

      .click(kapitaalverzekeringToebedelen2)

      .typeText(naamVerzekeraar2, 'Klaverblad')
      .typeText(polisnummer2, '99913255')
      .typeText(peildatum2, '20-04-2018')
       .typeText(waarde2, '20000')
      .click(toebedelenAan2)
      .click(optionB.withText('Partij B'))
    
    
      .click(nextButton)
};
