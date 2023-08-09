import React, { useContext, useRef, useState } from 'react';
import { Language } from './models/LanguageSwitcherModels';
import LanguageContext, { LanguageContextType } from '../../../contexts/LanguageContext';
import styles from './LanguageSwitcher.module.scss';
import enFlag from './../../../assets/images/template/flags/en.jpg';
import plFlag from './../../../assets/images/template/flags/pl.jpg';

const LanguageSwitcher: React.FC = () => {
	const [isOptionsOpen, setIsOptionsOpen] = useState<boolean>(false);
	const languageContext = useContext<LanguageContextType>(LanguageContext);

	const availableLanguages: Language[] = [
		{ prefix: 'en', displayValue: 'English', icon: enFlag },
		{ prefix: 'pl', displayValue: 'Polski', icon: plFlag }
	];

	const optionalLanguage: Language = availableLanguages.find((lang: Language) => lang.prefix !== languageContext.state) as Language;
	const displayCurrentLanguage: Language = availableLanguages.find((lang: Language) => lang.prefix === languageContext.state) as Language;

	const langChangeBtn = useRef<HTMLButtonElement>(null);

	const onLanguageChangeButtonClick = (): void => {
		setIsOptionsOpen(!isOptionsOpen);
	};

	return (
		<div className={styles.langSelect}>
			<button ref={langChangeBtn} onClick={onLanguageChangeButtonClick} className={styles.langSelect__btn}>
				<img src={displayCurrentLanguage.icon} className={styles.langSelect__icon} alt={displayCurrentLanguage.displayValue} />
				{displayCurrentLanguage.displayValue}
			</button>
			{isOptionsOpen && (
				<button
					className={`${styles.langSelect__btn} ${styles['langSelect__btn-option']}`}
					// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
					style={{ top: `${langChangeBtn!.current!.getBoundingClientRect().bottom + 2}px` }}
					onClick={() => {
						languageContext.onChange(optionalLanguage.prefix);
						onLanguageChangeButtonClick();
					}}>
					<img src={optionalLanguage.icon} className={styles.langSelect__icon} alt={optionalLanguage.displayValue} />
					{optionalLanguage.displayValue}
				</button>
			)}
		</div>
	);
};

export default LanguageSwitcher;
