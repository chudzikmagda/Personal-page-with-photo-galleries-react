import {
	autoUpdate,
	ElementProps,
	flip,
	FloatingFocusManager,
	offset,
	Placement,
	shift,
	useClick,
	useDismiss,
	useFloating,
	useId,
	useInteractions,
	useRole
} from '@floating-ui/react';
import React, { useState } from 'react';
import { Breakpoints } from '../../../shared/models/models';
import MenuIcon from './components/MenuIcon/MenuIcon';
import MenuOptions from './components/MenuOptions/MenuOptions';

const KebabMenu: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const headingId: string | undefined = useId();

	const setPlacement = (): Placement => {
		return window.innerWidth <= Breakpoints.LARGE ? 'bottom' : 'bottom-end';
	};

	const { refs, floatingStyles, context } = useFloating({
		open: isMenuOpen,
		onOpenChange: setIsMenuOpen,
		middleware: [offset({ mainAxis: 5, alignmentAxis: 0 }), flip({ fallbackAxisSideDirection: 'end' }), shift()],
		whileElementsMounted: autoUpdate,
		placement: setPlacement()
	});

	const click: ElementProps = useClick(context);
	const dismiss: ElementProps = useDismiss(context);
	const role: ElementProps = useRole(context);

	const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss, role]);

	return (
		<>
			<MenuIcon ref={refs.setReference} isMenuOpen={isMenuOpen} {...getReferenceProps()} />
			{isMenuOpen && (
				<FloatingFocusManager context={context} modal={false}>
					<MenuOptions ref={refs.setFloating} style={floatingStyles} aria-labelledby={headingId} {...getFloatingProps()} />
				</FloatingFocusManager>
			)}
		</>
	);
};

export default KebabMenu;
