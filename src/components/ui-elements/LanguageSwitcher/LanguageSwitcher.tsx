import React, { useContext, useState } from 'react';
import { Language } from './models/LanguageSwitcherModels';
import LanguageContext, { LanguageContextType } from '../../../contexts/LanguageContext';
import styles from './LanguageSwitcher.module.scss';
import { ElementProps, useClick, useDismiss, useFloating, useInteractions, useFocus, useRole, autoUpdate, autoPlacement } from '@floating-ui/react';
import enFlag from './../../../assets/images/template/flags/en.jpg';
import plFlag from './../../../assets/images/template/flags/pl.jpg';

const LanguageSwitcher: React.FC = () => {
	const [isOptionsOpen, setIsOptionsOpen] = useState<boolean>(false);
	const { refs, floatingStyles, context } = useFloating<HTMLButtonElement>({
		placement: 'bottom',
		open: isOptionsOpen,
		onOpenChange: setIsOptionsOpen,
		whileElementsMounted: autoUpdate,
		middleware: [autoPlacement()]
	});

	const languageContext = useContext<LanguageContextType>(LanguageContext);

	const click: ElementProps = useClick(context);
	const dismiss: ElementProps = useDismiss(context, { bubbles: true });
	const focus: ElementProps = useFocus(context);
	const role: ElementProps = useRole(context, { role: 'menu' });

	const { getReferenceProps } = useInteractions([click, dismiss, focus, role]);

	const availableLanguages: Language[] = [
		{ prefix: 'en', displayValue: 'English', icon: enFlag },
		{ prefix: 'pl', displayValue: 'Polski', icon: plFlag }
	];

	const displayCurrentLanguage = (languagePrefix: string): Language | undefined =>
		availableLanguages.find((lang: Language) => lang.prefix === languagePrefix);

	return (
		<div className={styles.langSelect}>
			<button ref={refs.setReference} {...getReferenceProps()} className={styles.langSelect__btn}>
				<img
					src={displayCurrentLanguage(languageContext.state)?.icon}
					className={styles.langSelect__icon}
					alt={displayCurrentLanguage(languageContext.state)?.displayValue}
				/>
				{displayCurrentLanguage(languageContext.state)?.displayValue}
			</button>
			{isOptionsOpen && (
				<div ref={refs.setFloating} style={floatingStyles} className={styles.langSelect__options}>
					{availableLanguages.map((lang: Language) => {
						return (
							<a
								href=""
								key={lang.prefix}
								className={styles.langSelect__option}
								onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
									event.preventDefault();
									languageContext.onChange(lang.prefix);
									console.log(lang.prefix);
								}}>
								<img src={lang.icon} className={styles.langSelect__icon} alt={lang.displayValue} />
								{lang.displayValue}
							</a>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default LanguageSwitcher;
