import type { ReactNode } from 'react';

import type { ContentType } from '~/components/layout-elements/content/content.types';

export type PageShellProps = {
  content: ReactNode;
  contentType: ContentType;
};
