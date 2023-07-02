import rowers from './../../../../../../assets/images/prints/magda-chudzik-fine-arts-art-prints-fotoplakaty-21.jpg';
import bridge from './../../../../../../assets/images/prints/magda-chudzik-fine-arts-art-prints-fotoplakaty-25.jpg';
import slovenia from './../../../../../../assets/images/prints/magda-chudzik-fine-arts-art-prints-fotoplakaty-23.jpg';
import squareMarket from './../../../../../../assets/images/prints/magda-chudzik-fine-arts-art-prints-fotoplakaty-27.jpg';
import mitoraj from './../../../../../../assets/images/prints/magda-chudzik-fine-arts-art-prints-fotoplakaty-29.jpg';
import foggyForest from './../../../../../../assets/images/prints/magda-chudzik-fine-arts-art-prints-fotoplakaty-28.jpg';
import baltic from './../../../../../../assets/images/prints/magda-chudzik-fine-arts-art-prints-fotoplakaty-24.jpg';
import moravia from './../../../../../../assets/images/prints/magda-chudzik-fine-arts-art-prints-fotoplakaty-22.jpg';
import solina from './../../../../../../assets/images/prints/magda-chudzik-fine-arts-art-prints-fotoplakaty-20.jpg';
import forest from './../../../../../../assets/images/prints/magda-chudzik-fine-arts-art-prints-fotoplakaty-26.jpg';
import adriaticSea from './../../../../../../assets/images/prints/magda-chudzik-fine-arts-art-prints-fotoplakaty-12.jpg';
import observer from './../../../../../../assets/images/prints/magda-chudzik-fine-arts-art-prints-fotoplakaty-5.jpg';
import bieszczady from './../../../../../../assets/images/prints/magda-chudzik-fine-arts-art-prints-fotoplakaty-6.jpg';
import tatry from './../../../../../../assets/images/prints/magda-chudzik-fine-arts-art-prints-fotoplakaty-1.jpg';
import fields from './../../../../../../assets/images/prints/magda-chudzik-fine-arts-art-prints-fotoplakaty-8.jpg';
import pieniny from './../../../../../../assets/images/prints/magda-chudzik-fine-arts-art-prints-fotoplakaty-3.jpg';
import { t } from 'i18next';

export type Print = {
	image: string;
	title: string;
	ctaUrl: string;
};

export type PrintProps = Print;

export const printCollection: Print[] = [
	{ image: rowers, title: t('Prints.rowers'), ctaUrl: 'https://wydrukujfotografie.pl/Magda.Chudzik/Wioslarze-art11388' },
	{ image: bridge, title: t('Prints.bridge'), ctaUrl: 'https://wydrukujfotografie.pl/Magda.Chudzik/W-strone-nieznanego-art11386' },
	{ image: slovenia, title: t('Prints.slovenia'), ctaUrl: 'https://wydrukujfotografie.pl/Magda.Chudzik/Wyspa-art11382' },
	{ image: squareMarket, title: t('Prints.squareMarket'), ctaUrl: 'https://wydrukujfotografie.pl/Magda.Chudzik/Skala-art11387' },
	{ image: mitoraj, title: t('Prints.mitoraj'), ctaUrl: 'https://wydrukujfotografie.pl/Magda.Chudzik/Please-dont-go-art7517' },
	{ image: foggyForest, title: t('Prints.foggyForest'), ctaUrl: 'https://wydrukujfotografie.pl/Magda.Chudzik/Wynurzenie-art11377' },
	{ image: baltic, title: t('Prints.baltic'), ctaUrl: 'https://wydrukujfotografie.pl/Magda.Chudzik/Cienie-art11380' },
	{ image: moravia, title: t('Prints.moravia'), ctaUrl: 'https://wydrukujfotografie.pl/Magda.Chudzik/Dywan-art11385' },
	{ image: solina, title: t('Prints.solina'), ctaUrl: 'https://wydrukujfotografie.pl/Magda.Chudzik/Nad-Solina-art4948' },
	{ image: forest, title: t('Prints.forest'), ctaUrl: 'https://wydrukujfotografie.pl/Magda.Chudzik/Wybrane-art11378' },
	{ image: observer, title: t('Prints.observer'), ctaUrl: 'https://wydrukujfotografie.pl/Magda.Chudzik/Nad-Adriatykiem-art4685' },
	{ image: adriaticSea, title: t('Prints.adriaticSea'), ctaUrl: 'https://wydrukujfotografie.pl/Magda.Chudzik/Na-strazy-art4630' },
	{ image: bieszczady, title: t('Prints.bieszczady'), ctaUrl: 'https://wydrukujfotografie.pl/Magda.Chudzik/Uklad-rownolegly-art4629' },
	{ image: tatry, title: t('Prints.tatry'), ctaUrl: 'https://wydrukujfotografie.pl/Magda.Chudzik/Pierwszy-promien-art4736' },
	{ image: fields, title: t('Prints.fields'), ctaUrl: 'https://wydrukujfotografie.pl/Magda.Chudzik/Dywan-art4624' },
	{ image: pieniny, title: t('Prints.pieniny'), ctaUrl: 'https://wydrukujfotografie.pl/Magda.Chudzik/Swiatlocienie-art4627' }
];
