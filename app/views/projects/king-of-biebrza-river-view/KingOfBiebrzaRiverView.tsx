import { galleryMetadataProjectsKingOfBiebrzaRiver } from '~/shared/metadata/projects-king-of-biebrza-river';
import ProjectShell from '~/components/layout-elements/project-shell/ProjectShell';
import { Projects } from '~/shared/types/projects.types';

const KingOfBiebrzaRiverView: React.FC = () => {
  return (
    <ProjectShell
      baseKey={Projects.KINGOFBIEBRZA}
      images={galleryMetadataProjectsKingOfBiebrzaRiver}
      title={`${Projects.KINGOFBIEBRZA}.title`}
      description={`${Projects.KINGOFBIEBRZA}.description`}
    />
  );
};

export default KingOfBiebrzaRiverView;
