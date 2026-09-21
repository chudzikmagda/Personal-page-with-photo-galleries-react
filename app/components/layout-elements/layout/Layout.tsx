import Content from '~/components/layout-elements/content/Content';
import Footer from '~/components/layout-elements/footer/Footer';
import Header from '~/components/layout-elements/header/Header';

import styles from './layout.module.scss';
import type { LayoutProps } from './layout.types';

const Layout: React.FC<LayoutProps> = ({ content, contentType }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <Content content={content} contentType={contentType} />
      <Footer />
    </div>
  );
};

export default Layout;
