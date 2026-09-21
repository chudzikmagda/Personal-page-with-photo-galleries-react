import styles from './content.module.scss';
import type { ContentProps } from './content.types';
import { ContentType } from './content.types';

const Content: React.FC<ContentProps> = ({ content, contentType }) => {
  return (
    <div
      className={styles.content}
      style={contentType === ContentType.FULLWIDTH ? { padding: 0 } : {}}
    >
      {content}
    </div>
  );
};

export default Content;
