import tatry from './../../../../../assets/images/prints/magda-chudzik-fine-arts-art-prints-fotoplakaty-1.webp';
import pieniny from './../../../../../assets/images/prints/magda-chudzik-fine-arts-art-prints-fotoplakaty-3.webp';
import observer from './../../../../../assets/images/prints/magda-chudzik-fine-arts-art-prints-fotoplakaty-5.webp';
import bieszczady from './../../../../../assets/images/prints/magda-chudzik-fine-arts-art-prints-fotoplakaty-6.webp';
import fields from './../../../../../assets/images/prints/magda-chudzik-fine-arts-art-prints-fotoplakaty-8.webp';
import adriaticSea from './../../../../../assets/images/prints/magda-chudzik-fine-arts-art-prints-fotoplakaty-12.webp';
import solina from './../../../../../assets/images/prints/magda-chudzik-fine-arts-art-prints-fotoplakaty-20.webp';
import rowers from './../../../../../assets/images/prints/magda-chudzik-fine-arts-art-prints-fotoplakaty-21.webp';
import moravia from './../../../../../assets/images/prints/magda-chudzik-fine-arts-art-prints-fotoplakaty-22.webp';
import slovenia from './../../../../../assets/images/prints/magda-chudzik-fine-arts-art-prints-fotoplakaty-23.webp';
import baltic from './../../../../../assets/images/prints/magda-chudzik-fine-arts-art-prints-fotoplakaty-24.webp';
import bridge from './../../../../../assets/images/prints/magda-chudzik-fine-arts-art-prints-fotoplakaty-25.webp';
import forest from './../../../../../assets/images/prints/magda-chudzik-fine-arts-art-prints-fotoplakaty-26.webp';
import squareMarket from './../../../../../assets/images/prints/magda-chudzik-fine-arts-art-prints-fotoplakaty-27.webp';
import foggyForest from './../../../../../assets/images/prints/magda-chudzik-fine-arts-art-prints-fotoplakaty-28.webp';
import mitoraj from './../../../../../assets/images/prints/magda-chudzik-fine-arts-art-prints-fotoplakaty-29.webp';
import { Print } from './print.types';
import { createPrint } from './print.utils';

export const printCollection: Print[] = [
	createPrint(rowers, 'PrintsPage.rowers', 'https://wydrukujfotografie.pl/Magda.Chudzik/Wioslarze-art11388'),
	createPrint(bridge, 'PrintsPage.bridge', 'https://wydrukujfotografie.pl/Magda.Chudzik/W-strone-nieznanego-art11386'),
	createPrint(slovenia, 'PrintsPage.slovenia', 'https://wydrukujfotografie.pl/Magda.Chudzik/Wyspa-art11382'),
	createPrint(squareMarket, 'PrintsPage.squareMarket', 'https://wydrukujfotografie.pl/Magda.Chudzik/Skala-art11387'),
	createPrint(mitoraj, 'PrintsPage.mitoraj', 'https://wydrukujfotografie.pl/Magda.Chudzik/Please-dont-go-art7517'),
	createPrint(foggyForest, 'PrintsPage.foggyForest', 'https://wydrukujfotografie.pl/Magda.Chudzik/Wynurzenie-art11377'),
	createPrint(baltic, 'PrintsPage.baltic', 'https://wydrukujfotografie.pl/Magda.Chudzik/Cienie-art11380'),
	createPrint(moravia, 'PrintsPage.moravia', 'https://wydrukujfotografie.pl/Magda.Chudzik/Dywan-art11385'),
	createPrint(solina, 'PrintsPage.solina', 'https://wydrukujfotografie.pl/Magda.Chudzik/Nad-Solina-art4948'),
	createPrint(forest, 'PrintsPage.forest', 'https://wydrukujfotografie.pl/Magda.Chudzik/Wybrane-art11378'),
	createPrint(observer, 'PrintsPage.observer', 'https://wydrukujfotografie.pl/Magda.Chudzik/Nad-Adriatykiem-art4685'),
	createPrint(adriaticSea, 'PrintsPage.adriaticSea', 'https://wydrukujfotografie.pl/Magda.Chudzik/Na-strazy-art4630'),
	createPrint(bieszczady, 'PrintsPage.bieszczady', 'https://wydrukujfotografie.pl/Magda.Chudzik/Uklad-rownolegly-art4629'),
	createPrint(tatry, 'PrintsPage.tatry', 'https://wydrukujfotografie.pl/Magda.Chudzik/Pierwszy-promien-art4736'),
	createPrint(fields, 'PrintsPage.fields', 'https://wydrukujfotografie.pl/Magda.Chudzik/Dywan-art4624'),
	createPrint(pieniny, 'PrintsPage.pieniny', 'https://wydrukujfotografie.pl/Magda.Chudzik/Swiatlocienie-art4627')
];
