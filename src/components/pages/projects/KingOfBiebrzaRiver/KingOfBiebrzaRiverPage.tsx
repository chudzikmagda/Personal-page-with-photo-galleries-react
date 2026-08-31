import React from 'react';

import { Paths } from '../../../../routing/types/routing.types';
import { galleryMetadataProjectsKingOfBiebrzaRiver } from '../../../../shared/metadata/galleryMetadata.projectsKingOfBiebrzaRiver';
import { ImageDimension } from '../../../../shared/types/image.types';
import { ProjectPaths, Projects } from '../../../../shared/types/projects.types';
import ProjectShell from '../../../layout-elements/ProjectShell/ProjectShell';

const KingOfBiebrzaRiverPage: React.FC = () => {
	return (
		<ProjectShell
			baseKey={Projects.KINGOFBIEBRZA}
			image={galleryMetadataProjectsKingOfBiebrzaRiver[0].variants[ImageDimension.FULLSIZE].src}
			images={galleryMetadataProjectsKingOfBiebrzaRiver}
			title={`${Projects.KINGOFBIEBRZA}.title`}
			description={`${Projects.KINGOFBIEBRZA}.description`}
			url={`${window.location.origin}/${Paths.PROJECTS}/${ProjectPaths.KING_OF_BIEBRZA}`}
		/>
	);
};

export default KingOfBiebrzaRiverPage;
