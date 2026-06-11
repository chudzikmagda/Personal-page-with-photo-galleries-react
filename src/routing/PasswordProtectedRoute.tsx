import React, { type SubmitEventHandler, useEffect, useState } from 'react';

import PasswordForm from '../components/ui-elements/form/PasswordForm/PasswordForm';
import { PasswordProtectedRouteProps, ViteImportMeta } from './types/routing.types';

const WomensIceHockeyCracoviaPagePasswordProtectedRoute: React.FC<PasswordProtectedRouteProps> = ({ children }) => {
	const PASSWORD_STORAGE_KEY = 'womens-ice-hockey-cracovia:is-unlocked';
	const ACCESS_PASSWORD = (import.meta as ViteImportMeta).env.VITE_WOMENS_ICE_HOCKEY_CRACOVIA_PASSWORD;

	const [isUnlocked, setIsUnlocked] = useState(false);
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	useEffect(() => {
		setIsUnlocked(window.localStorage.getItem(PASSWORD_STORAGE_KEY) === 'true');
	}, []);

	const handleSubmit: SubmitEventHandler<HTMLFormElement> = (event): void => {
		event.preventDefault();

		if (!ACCESS_PASSWORD) {
			setError('This route password is not configured.');
			return;
		}

		if (password === ACCESS_PASSWORD) {
			window.localStorage.setItem(PASSWORD_STORAGE_KEY, 'true');
			setIsUnlocked(true);
			setError('');
			setPassword('');
			return;
		}

		setError('Incorrect password.');
		setPassword('');
	};

	if (isUnlocked) {
		return <>{children}</>;
	}

	return (
		<PasswordForm
			translations={{
				titleKey: 'WomensIceHockeyCracoviaPage.passwordForm.title',
				descriptionKey: 'WomensIceHockeyCracoviaPage.passwordForm.description',
				labelKey: 'WomensIceHockeyCracoviaPage.passwordForm.label',
				submitCtaKey: 'WomensIceHockeyCracoviaPage.passwordForm.submitCta'
			}}
			password={password}
			error={error}
			onSubmit={handleSubmit}
			onPasswordChange={setPassword}
		/>
	);
};

export default WomensIceHockeyCracoviaPagePasswordProtectedRoute;
