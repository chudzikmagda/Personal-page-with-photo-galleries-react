import React from 'react';

import { galleryMetadataProjectsKingOfBiebrzaRiver } from '../../../../shared/metadata/galleryMetadata.projectsKingOfBiebrzaRiver';
import { Projects } from '../../../../shared/types/projects.types';
import ProjectShell from '../../../layout-elements/ProjectShell/ProjectShell';

const KingOfBiebrzaRiverPage: React.FC = () => {
	return (
		<ProjectShell
			baseKey={Projects.KINGOFBIEBRZA}
			images={galleryMetadataProjectsKingOfBiebrzaRiver}
			title={`${Projects.KINGOFBIEBRZA}.title`}
			description={`${Projects.KINGOFBIEBRZA}.description`}
		/>
	);
};

export default KingOfBiebrzaRiverPage;
