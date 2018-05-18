import { Selector, Role, ClientFunction } from 'testcafe';
import { adminLogin, goBack } from './helper';

export async function schulden (t){

    const nextButton = Selector('button[class="next btn btn-default pull-right"]');
    const trajectZorgeloosch = Selector('input[type="radio"][name="verdeling[kosten]"][value="ZorgelooschScheidenTraject"]');
    const partijOverbedeling = Selector('input[type="radio"][name="verdeling[overbedeelde_partij]"][value="Partij B"][class="conclusie_opties"]');
    const berekendOverbedeling = Selector('input[type="radio"][name="verdeling[overbedeling]"][value="boven_norm"][class="conclusie_opties"]');
    const bedragOverbedeling = Selector('input[name="verdeling[bovenverdeling_bedrag]"]');

    //hier kies ik voor drie schuldeisers en toebedeel die aan 1 partij, omdat dan minimaal alle functionaliteiten getest worden


   const aantalSchuldeisers = Selector('input[type="radio"][name="verdeling[aantal_schuldeisers]"][value="3"]');
   const schuldToebedelen1 = Selector('input[type="radio"][name="verdeling[schulden][0][actie]"][value="toebedelen"]');
   const schuldToebedelen2 = Selector('input[type="radio"][name="verdeling[schulden][1][actie]"][value="toebedelen"]');
   const schuldToebedelen3 = Selector('input[type="radio"][name="verdeling[schulden][2][actie]"][value="toebedelen"]');

   //gegevens selectoren schuld 1

   const naamGeldverstrekker1 = Selector('input[name="verdeling[schulden][0][naam_geldverstrekker]"]');
   const waarde1 = Selector('input[name="verdeling[schulden][0][waarde]"]'); 
   const toebedelenAan1 = Selector('select[name="verdeling[schulden][0][toebedeelde_partij]"')
   const optionA = toebedelenAan1.find('option')

    //gegevens selectoren schuld 2

    const naamGeldverstrekker2 = Selector('input[name="verdeling[schulden][1][naam_geldverstrekker]"]');
    const waarde2 = Selector('input[name="verdeling[schulden][1][waarde]"]'); 
    const toebedelenAan2 = Selector('select[name="verdeling[schulden][1][toebedeelde_partij]"')
    const optionA2 = toebedelenAan2.find('option')

  //gegevens selectoren schuld 3

   const naamGeldverstrekker3 = Selector('input[name="verdeling[schulden][2][naam_geldverstrekker]"]');
   const waarde3 = Selector('input[name="verdeling[schulden][2][waarde]"]'); 
   const toebedelenAan3 = Selector('select[name="verdeling[schulden][2][toebedeelde_partij]"')
   const optionB = toebedelenAan3.find('option')
   
   await t


   .click(aantalSchuldeisers)
    
   // gegevens schulden 1 invoeren

   .click(schuldToebedelen1)

   .typeText(naamGeldverstrekker1, 'DUO')
    .typeText(waarde1, '5000')
   .click(toebedelenAan1)
   .click(optionA.withText('Partij A'))

      // gegevens schulden 2 invoeren

      .click(schuldToebedelen2)

      .typeText(naamGeldverstrekker2, 'Mastercard')
       .typeText(waarde2, '400')
      .click(toebedelenAan2)
      .click(optionA2.withText('Partij A'))

       // gegevens schulden 3 invoeren

       .click(schuldToebedelen3)

       .typeText(naamGeldverstrekker3, 'Erasmus University')
        .typeText(waarde3, '25000')
       .click(toebedelenAan3)
       .click(optionB.withText('Partij B'))
    
    
      .click(nextButton)
      .click(trajectZorgeloosch)
      .click(nextButton)
      .click(partijOverbedeling)
      .click(berekendOverbedeling)
      .typeText(bedragOverbedeling, '50000')
      .click(nextButton)

};

