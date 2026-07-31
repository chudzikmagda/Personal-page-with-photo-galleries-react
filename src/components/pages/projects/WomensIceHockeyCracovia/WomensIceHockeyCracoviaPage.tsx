import React from 'react';

import { galleryMetadataProjectsWomensIceHockeyCracovia } from '../../../../shared/metadata/galleryMetadata.projectsWomensIceHockeyCracovia';
import { Projects } from '../../../../shared/types/projects.types';
import ProjectShell from '../../../layout-elements/ProjectShell/ProjectShell';

const WomensIceHockeyCracoviaPage: React.FC = () => {
	return (
		<ProjectShell
			baseKey={Projects.WOMENSICEHOCKEYCRACOVIA}
			images={galleryMetadataProjectsWomensIceHockeyCracovia}
			title={`${Projects.WOMENSICEHOCKEYCRACOVIA}.title`}
			description={`${Projects.WOMENSICEHOCKEYCRACOVIA}.description`}
		/>
	);
};

export default WomensIceHockeyCracoviaPage;
