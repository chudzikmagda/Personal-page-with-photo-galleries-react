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

export type Print = {
	image: string;
	titleKey: string;
	ctaUrl: string;
};

export const printCollection: Print[] = [
	{ image: rowers, titleKey: 'PrintsPage.rowers', ctaUrl: 'https://wydrukujfotografie.pl/Magda.Chudzik/Wioslarze-art11388' },
	{ image: bridge, titleKey: 'PrintsPage.bridge', ctaUrl: 'https://wydrukujfotografie.pl/Magda.Chudzik/W-strone-nieznanego-art11386' },
	{ image: slovenia, titleKey: 'PrintsPage.slovenia', ctaUrl: 'https://wydrukujfotografie.pl/Magda.Chudzik/Wyspa-art11382' },
	{ image: squareMarket, titleKey: 'PrintsPage.squareMarket', ctaUrl: 'https://wydrukujfotografie.pl/Magda.Chudzik/Skala-art11387' },
	{ image: mitoraj, titleKey: 'PrintsPage.mitoraj', ctaUrl: 'https://wydrukujfotografie.pl/Magda.Chudzik/Please-dont-go-art7517' },
	{ image: foggyForest, titleKey: 'PrintsPage.foggyForest', ctaUrl: 'https://wydrukujfotografie.pl/Magda.Chudzik/Wynurzenie-art11377' },
	{ image: baltic, titleKey: 'PrintsPage.baltic', ctaUrl: 'https://wydrukujfotografie.pl/Magda.Chudzik/Cienie-art11380' },
	{ image: moravia, titleKey: 'PrintsPage.moravia', ctaUrl: 'https://wydrukujfotografie.pl/Magda.Chudzik/Dywan-art11385' },
	{ image: solina, titleKey: 'PrintsPage.solina', ctaUrl: 'https://wydrukujfotografie.pl/Magda.Chudzik/Nad-Solina-art4948' },
	{ image: forest, titleKey: 'PrintsPage.forest', ctaUrl: 'https://wydrukujfotografie.pl/Magda.Chudzik/Wybrane-art11378' },
	{ image: observer, titleKey: 'PrintsPage.observer', ctaUrl: 'https://wydrukujfotografie.pl/Magda.Chudzik/Nad-Adriatykiem-art4685' },
	{ image: adriaticSea, titleKey: 'PrintsPage.adriaticSea', ctaUrl: 'https://wydrukujfotografie.pl/Magda.Chudzik/Na-strazy-art4630' },
	{ image: bieszczady, titleKey: 'PrintsPage.bieszczady', ctaUrl: 'https://wydrukujfotografie.pl/Magda.Chudzik/Uklad-rownolegly-art4629' },
	{ image: tatry, titleKey: 'PrintsPage.tatry', ctaUrl: 'https://wydrukujfotografie.pl/Magda.Chudzik/Pierwszy-promien-art4736' },
	{ image: fields, titleKey: 'PrintsPage.fields', ctaUrl: 'https://wydrukujfotografie.pl/Magda.Chudzik/Dywan-art4624' },
	{ image: pieniny, titleKey: 'PrintsPage.pieniny', ctaUrl: 'https://wydrukujfotografie.pl/Magda.Chudzik/Swiatlocienie-art4627' }
];
