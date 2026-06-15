import React from 'react';

import { galleryMetadata } from '../../../../shared/metadata/galleryImageMetadata';
import { Projects } from '../../../../shared/types/projects.types';
import ProjectShell from '../../../layout-elements/ProjectShell/ProjectShell';

const WomensIceHockeyCracoviaPage: React.FC = () => {
	return (
		<ProjectShell
			baseKey={Projects.WOMENSICEHOCKEYCRACOVIA}
			images={galleryMetadata.projectsWomensIceHockeyCracovia}
			title={`${Projects.WOMENSICEHOCKEYCRACOVIA}.title`}
			description={`${Projects.WOMENSICEHOCKEYCRACOVIA}.description`}
		/>
	);
};

export default WomensIceHockeyCracoviaPage;
