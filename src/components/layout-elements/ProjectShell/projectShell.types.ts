import { GalleryItem } from '../../../shared/types/gallery.types';

export enum ProjectShellBaseKey {
	PROJECTWOMENSICEHOKEYCRACOVIA = 'WomensIceHockeyCracoviaPage'
}

export type ProjectShellProps = {
	baseKey: ProjectShellBaseKey;
	images: GalleryItem[];
	title: string;
	description?: string;
};
