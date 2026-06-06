import './WomensIceHockeyCracovia.scss';

import React from 'react';

import { galleryMetadata } from '../../../../shared/metadata/galleryImageMetadata';
import ProjectShell from '../../../layout-elements/ProjectShell/ProjectShell';
import { ProjectShellBaseKey } from '../../../layout-elements/ProjectShell/projectShell.types';

const WomensIceHockeyCracoviaPage: React.FC = () => {
	return (
		<ProjectShell
			baseKey={ProjectShellBaseKey.PROJECTWOMENSICEHOKEYCRACOVIA}
			images={galleryMetadata.projectsWomensIceHockeyCracovia}
			wrapperClassName="landscape"
		/>
	);
};

export default WomensIceHockeyCracoviaPage;
