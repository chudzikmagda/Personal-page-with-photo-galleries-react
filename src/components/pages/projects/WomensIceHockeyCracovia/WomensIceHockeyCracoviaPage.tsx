import React from 'react';

import { Paths } from '../../../../routing/types/routing.types';
import { galleryMetadataProjectsWomensIceHockeyCracovia } from '../../../../shared/metadata/galleryMetadata.projectsWomensIceHockeyCracovia';
import { ImageDimension } from '../../../../shared/types/image.types';
import { ProjectPaths, Projects } from '../../../../shared/types/projects.types';
import ProjectShell from '../../../layout-elements/ProjectShell/ProjectShell';

const WomensIceHockeyCracoviaPage: React.FC = () => {
	return (
		<ProjectShell
			baseKey={Projects.WOMENSICEHOCKEYCRACOVIA}
			image={galleryMetadataProjectsWomensIceHockeyCracovia[0].variants[ImageDimension.FULLSIZE].src}
			images={galleryMetadataProjectsWomensIceHockeyCracovia}
			title={`${Projects.WOMENSICEHOCKEYCRACOVIA}.title`}
			description={`${Projects.WOMENSICEHOCKEYCRACOVIA}.description`}
			url={`${window.location.origin}/${Paths.PROJECTS}/${ProjectPaths.WOMENS_ICE_HOCKEY_CRACOVIA}`}
		/>
	);
};

export default WomensIceHockeyCracoviaPage;
