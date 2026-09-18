import type { Config } from '@react-router/dev/config';

export default {
  ssr: false,
  prerender: {
    paths: ({ getStaticPaths }) => getStaticPaths(),
    concurrency: 4,
  },
} satisfies Config;
