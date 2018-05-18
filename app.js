import { Selector, Role, ClientFunction } from 'testcafe';
import { adminLogin, goBack } from './helper';
import { login } from './login'
import { openDossier } from './goBack'
import { aanspreekvorm } from './aanspreekvorm'
import { gegevensPartijA } from './gegevensPartijA'
import { gegevensPartijB } from './gegevensPartijB'
import { algemeneGegevens } from './algemeneGegevens'
import { nationaliteiten } from './nationaliteiten'
import { kinderen1 } from './Kinderen1'
import { partnerAlimentatie } from './partnerAlimentatie'
import { behoefte } from './behoefte'
import { schenkingen } from './schenkingen'
import { afrekendatum } from './afrekendatum'
import { inboedel } from './inboedel'
import { huisdieren } from './huisdieren'
import { motorvoertuigen } from './motorvoertuigen'
import { privateLeases } from './privateLeases'
import { bankRekening } from './bankRekening'
import {eigenBedrijf} from './eigenBedrijf'
import {lijfrentepolis} from './lijfrentepolis'
import { kapitaalverzekering } from './kapitaalverzekering'
import { beleggingen } from './beleggingen'
import { schulden } from './schulden'
import { pensioenAanspraken } from './pensioenAanspraken'
import {fiscaal} from './fiscaal'







fixture `Testing the convenant-generator`
.page('https://convenant-generator.zorgeloosch.nl/')

test('This is the first try of testing the convenant-generator', async t => {
  
    await login(t);

    await openDossier(t);

    await aanspreekvorm(t);

    await gegevensPartijA(t);

    await gegevensPartijB(t);

    await algemeneGegevens(t);

    await nationaliteiten(t);

    await kinderen1(t);

    await partnerAlimentatie(t);

    await behoefte(t);

    await schenkingen(t);

    await afrekendatum(t);

    await inboedel(t);

    await huisdieren(t);

    await motorvoertuigen(t);

    await privateLeases(t);

    await bankRekening(t);

    await eigenBedrijf(t);

    await lijfrentepolis(t);

    await kapitaalverzekering(t);

    await beleggingen(t);

    await schulden(t);

    await pensioenAanspraken(t);

    await fiscaal(t);



});