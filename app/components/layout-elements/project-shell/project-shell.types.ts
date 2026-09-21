import type { GalleryItem } from '~/shared/types/gallery.types';
import type { Projects } from '~/shared/types/projects.types';

export type ProjectShellProps = {
  baseKey: Projects;
  images: GalleryItem[];
  title: string;
  description?: string;
};
