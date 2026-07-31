import {
	autoUpdate,
	flip,
	FloatingPortal,
	offset,
	shift,
	useDismiss,
	useFloating,
	useFocus,
	useHover,
	useInteractions,
	useRole
} from '@floating-ui/react';
import React, { useState } from 'react';

import styles from './tooltip.module.scss';
import { TooltipProps } from './tooltip.types';

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
	const [open, setOpen] = useState<boolean>(false);

	const { refs, floatingStyles, context } = useFloating({
		open,
		onOpenChange: setOpen,
		placement: 'bottom',
		middleware: [offset(8), flip({ padding: 8 }), shift({ padding: 8 })],
		whileElementsMounted: autoUpdate
	});

	const hover = useHover(context, { move: false });
	const focus = useFocus(context);
	const dismiss = useDismiss(context);
	const role = useRole(context, { role: 'tooltip' });

	const { getReferenceProps, getFloatingProps } = useInteractions([hover, focus, dismiss, role]);

	return (
		<>
			<span ref={refs.setReference} className={styles.reference} {...getReferenceProps()}>
				{children}
			</span>
			{open ? (
				<FloatingPortal>
					<span ref={refs.setFloating} className={styles.tooltip} style={floatingStyles} {...getFloatingProps()}>
						{text}
					</span>
				</FloatingPortal>
			) : null}
		</>
	);
};

export default Tooltip;
