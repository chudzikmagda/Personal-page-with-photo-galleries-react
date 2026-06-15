import React from 'react';

import { galleryMetadata } from '../../../../shared/metadata/galleryImageMetadata';
import { Projects } from '../../../../shared/types/projects.types';
import ProjectShell from '../../../layout-elements/ProjectShell/ProjectShell';

const WomensIceHockeyCracoviaPage: React.FC = () => {
	return (
		<ProjectShell
			baseKey={Projects.WOMENSICEHOKEYCRACOVIA}
			images={galleryMetadata.projectsWomensIceHockeyCracovia}
			title={`${Projects.WOMENSICEHOKEYCRACOVIA}.title`}
			description={`${Projects.WOMENSICEHOKEYCRACOVIA}.description`}
		/>
	);
};

export default WomensIceHockeyCracoviaPage;
