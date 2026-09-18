import Layout from '~/components/layout-elements/layout/Layout';
import type { PageShellProps } from './page-shell.types';

const PageShell: React.FC<PageShellProps> = ({ content, contentType }) => {
  return (
    <>
      <Layout content={content} contentType={contentType} />
    </>
  );
};

export default PageShell;
