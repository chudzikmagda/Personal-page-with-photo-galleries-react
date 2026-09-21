import type { SEOProps } from '../types/seo.types';

export const seoMeta = ({
  title,
  description,
  url,
  imageUrl,
  imageAlt = title,
  imageWidth = '1200',
  imageHeight = '630',
  imageType = 'image/webp',
  keywords,
  type,
  siteName,
  locale,
}: SEOProps) => {
  return [
    { title },
    { name: 'description', content: description },
    { name: 'keywords', content: keywords },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:type', content: type },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: url },
    { property: 'og:image', content: imageUrl },
    { property: 'og:image:alt', content: imageAlt },
    { property: 'og:image:width', content: imageWidth },
    { property: 'og:image:height', content: imageHeight },
    { property: 'og:image:type', content: imageType },
    { property: 'og:site_name', content: siteName },
    { property: 'og:locale', content: locale },
    { tagName: 'link', rel: 'canonical', href: url },
    { name: 'twitter:creator', content: 'Magda Chudzik' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: imageUrl },
    { name: 'twitter:image:alt', content: imageAlt },
  ];
};

export default seoMeta;
