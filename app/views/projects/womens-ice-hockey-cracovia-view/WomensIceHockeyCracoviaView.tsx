import { galleryMetadataProjectsWomensIceHockeyCracovia } from '~/shared/metadata/projects-womens-ice-hockey-cracovia';
import ProjectShell from '~/components/layout-elements/project-shell/ProjectShell';
import { Projects } from '~/shared/types/projects.types';

const WomensIceHockeyCracoviaView = () => {
  return (
    <ProjectShell
      baseKey={Projects.WOMENSICEHOCKEYCRACOVIA}
      images={galleryMetadataProjectsWomensIceHockeyCracovia}
      title={`${Projects.WOMENSICEHOCKEYCRACOVIA}.title`}
      description={`${Projects.WOMENSICEHOCKEYCRACOVIA}.description`}
    />
  );
};

export default WomensIceHockeyCracoviaView;
