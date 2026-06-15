import { GalleryItem } from '../../../shared/types/gallery.types';
import { Projects } from '../../../shared/types/projects.types';

export type ProjectShellProps = {
	baseKey: Projects;
	images: GalleryItem[];
	title: string;
	description?: string;
};
