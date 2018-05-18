import { Selector, Role, ClientFunction } from 'testcafe';
import { adminLogin, goBack } from './helper';

export async function kinderen1 (t){

    const nextButton = Selector('button[class="next btn btn-default pull-right"]');

    //hier kies ik voor twee kinderen uit elke categorie, omdat dan minimaal alle functionaliteiten getest worden


   const tweeMinderJarigKinderen = Selector('input[type="radio"][name="kinderen[aantal_minderjarig]"][value="2"]');
   const tweeMeerderJarigKinderen = Selector('input[type="radio"][name="kinderen[aantal_meerderjarig]"][value="2"]');

   //gegevens selectoren minderjarig kind 1

   const voornaamMinKind1 = Selector('input[name="kinderen[minderjarige_kinderen][0][voornamen_kind]"]');
   const achternaamMinKind1 = Selector('input[name="kinderen[minderjarige_kinderen][0][achternaam_kind]"]');
   const roepnaamMinKind1 = Selector('input[name="kinderen[minderjarige_kinderen][0][roepnaam_kind]"]');
   const bsnMinKind1 = Selector('input[name="kinderen[minderjarige_kinderen][0][bsn_kind]"]'); 
   const geboorteDatumMinKind1 = Selector('input[name="kinderen[minderjarige_kinderen][0][geboortedatum_kind]"]');
   const plaatsGeborenMinKind1 = Selector('input[name="kinderen[minderjarige_kinderen][0][geboorteplaats_kind]"]');
   const adresMinKind1 = Selector('input[type="radio"][name="kinderen[minderjarige_kinderen][0][adres]"][value="partij_b"]'); 

   //gegevens selectoren minderjarig kind 2

   const voornaamMinKind2 = Selector('input[name="kinderen[minderjarige_kinderen][1][voornamen_kind]"]');
   const achternaamMinKind2 = Selector('input[name="kinderen[minderjarige_kinderen][1][achternaam_kind]"]');
   const roepnaamMinKind2 = Selector('input[name="kinderen[minderjarige_kinderen][1][roepnaam_kind]"]');
   const bsnMinKind2 = Selector('input[name="kinderen[minderjarige_kinderen][1][bsn_kind]"]'); 
   const geboorteDatumMinKind2 = Selector('input[name="kinderen[minderjarige_kinderen][1][geboortedatum_kind]"]');
   const plaatsGeborenMinKind2 = Selector('input[name="kinderen[minderjarige_kinderen][1][geboorteplaats_kind]"]');
   const adresMinKind2 = Selector('input[type="radio"][name="kinderen[minderjarige_kinderen][1][adres]"][value="partij_b"]'); 

   // gegevens selectoren meerderjarig kind 1

   const voornaamMeerKind1 = Selector('input[name="kinderen[meerderjarige_kinderen][0][voornamen_kind]"]');
   const achternaamMeerKind1 = Selector('input[name="kinderen[meerderjarige_kinderen][0][achternaam_kind]"]');
   const roepnaamMeerKind1 = Selector('input[name="kinderen[meerderjarige_kinderen][0][roepnaam_kind]"]');
   const bsnMeerKind1 = Selector('input[name="kinderen[meerderjarige_kinderen][0][bsn_kind]"]'); 
   const geboorteDatumMeerKind1 = Selector('input[name="kinderen[meerderjarige_kinderen][0][geboortedatum_kind]"]');
   const plaatsGeborenMeerKind1 = Selector('input[name="kinderen[meerderjarige_kinderen][0][geboorteplaats_kind]"]');
   const adresMeerKind1 = Selector('input[type="radio"][name="kinderen[meerderjarige_kinderen][0][adres]"][value="partij_b"]'); 

     // gegevens selectoren meerderjarig kind 2

     const voornaamMeerKind2 = Selector('input[name="kinderen[meerderjarige_kinderen][1][voornamen_kind]"]');
     const achternaamMeerKind2 = Selector('input[name="kinderen[meerderjarige_kinderen][1][achternaam_kind]"]');
     const roepnaamMeerKind2 = Selector('input[name="kinderen[meerderjarige_kinderen][1][roepnaam_kind]"]');
     const bsnMeerKind2 = Selector('input[name="kinderen[meerderjarige_kinderen][1][bsn_kind]"]'); 
     const geboorteDatumMeerKind2 = Selector('input[name="kinderen[meerderjarige_kinderen][1][geboortedatum_kind]"]');
     const plaatsGeborenMeerKind2 = Selector('input[name="kinderen[meerderjarige_kinderen][1][geboorteplaats_kind]"]');
     const adresMeerKind2 = Selector('input[type="radio"][name="kinderen[meerderjarige_kinderen][1][adres]"][value="partij_b"]'); 


     await t

     //kiezen voor twee minderjarige en twee meerderjarige kinderen
     .click(tweeMinderJarigKinderen)
     .click(tweeMeerderJarigKinderen)

    //gegevens invullen eerste minderjarige kind

     .typeText(voornaamMinKind1, 'Ali')
     .typeText(achternaamMinKind1, 'Babba')
     .typeText(roepnaamMinKind1, 'Domme kleuter')
     .typeText(bsnMinKind1, '20136882')
     .typeText(geboorteDatumMinKind1, '03-04-2016')
     .typeText(plaatsGeborenMinKind1, 'Den Haag')
     .click(adresMinKind1)

     //gegevens invullen tweede minderjarige kind
     
     .typeText(voornaamMinKind2, 'Joshua')
     .typeText(achternaamMinKind2, 'Yang')
     .typeText(roepnaamMinKind2, 'Josh')
     .typeText(bsnMinKind2, '21456681')
     .typeText(geboorteDatumMinKind2, '27-10-2014')
     .typeText(plaatsGeborenMinKind2, 'Rotterdam')
     .click(adresMinKind2)

     //gegevens invullen eerste meerderjarige kind

     .typeText(voornaamMeerKind1, 'Anna')
     .typeText(achternaamMeerKind1, 'van der Giessen')
     .typeText(roepnaamMeerKind1, 'Anna')
     .typeText(bsnMeerKind1, '23636983')
     .typeText(geboorteDatumMeerKind1, '08-07-2000')
     .typeText(plaatsGeborenMeerKind1, 'Rotterdam')
     .click(adresMeerKind1)

     //gegevens invullen eerste meerderjarige kind

     .typeText(voornaamMeerKind2, 'Anthony')
     .typeText(achternaamMeerKind2, 'Yang')
     .typeText(roepnaamMeerKind2, 'Andy')
     .typeText(bsnMeerKind2, '25645987')
     .typeText(geboorteDatumMeerKind2, '07-07-1999')
     .typeText(plaatsGeborenMeerKind2, 'Rotterdam')
     .click(adresMeerKind2)

     .click(nextButton)

}

