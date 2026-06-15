import { GalleryItem } from '../../../shared/types/gallery.types';
import { ProjectBaseKey } from '../../pages/projects/projects.types';
export { ProjectBaseKey } from '../../pages/projects/projects.types';

export type ProjectShellProps = {
	baseKey: ProjectBaseKey;
	images: GalleryItem[];
	title: string;
	description?: string;
};
