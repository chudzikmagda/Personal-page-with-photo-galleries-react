import React from 'react';

import { galleryMetadata } from '../../../../shared/metadata/galleryImageMetadata';
import ProjectShell from '../../../layout-elements/ProjectShell/ProjectShell';
import { ProjectBaseKey } from '../../../layout-elements/ProjectShell/projectShell.types';

const WomensIceHockeyCracoviaPage: React.FC = () => {
	return (
		<ProjectShell
			baseKey={ProjectBaseKey.PROJECTWOMENSICEHOKEYCRACOVIA}
			images={galleryMetadata.projectsWomensIceHockeyCracovia}
			title={`${ProjectBaseKey.PROJECTWOMENSICEHOKEYCRACOVIA}.title`}
			description={`${ProjectBaseKey.PROJECTWOMENSICEHOKEYCRACOVIA}.description`}
		/>
	);
};

export default WomensIceHockeyCracoviaPage;
