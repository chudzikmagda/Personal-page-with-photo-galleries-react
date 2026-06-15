import { Paths } from '../../../../routing/types/routing.types';
import { ProjectPaths, Projects } from '../../../../shared/types/projects.types';
import { ProjectData } from '../projects.types';

export const projects: ProjectData[] = [
	{
		baseKey: Projects.WOMENSICEHOCKEYCRACOVIA,
		image: '/images/galleries/projects/womens-ice-hockey-cracovia/magda-chudzik-documentary-photography-womens-ice-hockey-001.webp',
		cta: `/${Paths.PROJECTS}/${ProjectPaths.WOMENS_ICE_HOCKEY_CRACOVIA}`
	}
];
