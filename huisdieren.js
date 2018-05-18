import { Selector, Role, ClientFunction } from 'testcafe';
import { adminLogin, goBack } from './helper';

export async function huisdieren (t){

    const aantalHuisdieren = Selector('input[type="radio"][name="verdeling[aantal_huisdieren]"][value="1"]');
    const soortHuisdier = Selector('input[name="verdeling[huisdieren][0][soort]"]');
    const naamHuisdier = Selector('input[name="verdeling[huisdieren][0][naam]"]');
    const datumHuisdier = Selector('#datepicker7');
    const partijHuisdier = Selector('select[name="verdeling[huisdieren][0][zorgdrager]"]')
    const huisDierPartA = partijHuisdier.find('option')
    const nextButton = Selector('button[class="next btn btn-default pull-right"]');
    const woning = Selector('input[name="verdeling[verkoop]"][type="checkbox"]')

    await t
    .click(aantalHuisdieren)
    .typeText(soortHuisdier, 'Hond')
    .typeText(naamHuisdier, 'Arie')
    .pressKey('tab P a r t i j e n space h e b b e n space h e t space v o l g e n d e space b e s l o t e n space o v e r space d e space h u i s d i e r e n space A r i e space d e space h o n d space z a l space v e r b l i j v e n space b i j space G i j s space v a n a f space o n m i d d e l i j k space t o t space d e space d o o d space v a n space d e space h o n d'
)
    .typeText(datumHuisdier, '01-01-2018')
    .click(partijHuisdier)
    .click(huisDierPartA.withText('Partij A'))
    .click(nextButton)
    .click(woning)
    .click(nextButton)

}

