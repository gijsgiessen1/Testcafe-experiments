import { Selector, Role, ClientFunction } from 'testcafe';
import { adminLogin, goBack } from './helper';

export async function pensioenAanspraken (t){

    const nextButton = Selector('button[class="next btn btn-default pull-right"]');

    const verdelingPens = Selector('input[type="radio"][name="pensioenen[suboptie]"][value="standaardverevening"]');

// Selector gegevens partij A

    const aantalPensUitvoerdersA = Selector('input[type="radio"][name="pensioenen[aantal_pensioenuitvoerders]"][value="1"]');
    const naamPensUitvoerderA = Selector('input[name="pensioenen[pensioenopbouw][partij_a][0][naam_pensioenuitvoerder]"');
    const kenmerkPensUitvoerderA = Selector('input[name="pensioenen[pensioenopbouw][partij_a][0][kenmerk_pensioenuitvoerder]"]');
   

    //Selector gegevens partij B

    const aantalPensUitvoerdersB = Selector('input[type="radio"][name="pensioenen[aantal_pensioenuitvoerders_b]"][value="1"]');
    const naamPensUitvoerderB = Selector('input[name="pensioenen[pensioenopbouw][partij_b][0][naam_pensioenuitvoerder]"]');
    const kenmerkPensUitvoerderB = Selector('input[name="pensioenen[pensioenopbouw][partij_b][0][kenmerk_pensioenuitvoerder]"]');

    await t

    // invoeren gegevens parij A

    .click(aantalPensUitvoerdersA)
    .typeText(naamPensUitvoerderA, 'Brand New Day')
    .typeText(kenmerkPensUitvoerderA, 'BND112')
    .click(nextButton)

    //invoeren gegevens partij B
    .click(aantalPensUitvoerdersB)
    .typeText(naamPensUitvoerderB, 'Aegon')
    .typeText(kenmerkPensUitvoerderB, 'AE666')

    .click(nextButton)
    .click(verdelingPens)
    .click(nextButton)

};

