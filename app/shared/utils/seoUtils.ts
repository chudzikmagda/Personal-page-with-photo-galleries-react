export type SEOProps = {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  keywords: string;
  type: string;
  siteName: string;
  locale: string;
};

export const seoMeta = ({
  title,
  description,
  url,
  imageUrl,
  keywords,
  type,
  siteName,
  locale,
}: SEOProps) => {
  return [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: keywords },
    { name: "robots", content: "index, follow" },
    { property: "og:type", content: type },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:image", content: imageUrl },
    { property: "og:site_name", content: siteName },
    { property: "og:locale", content: locale },
    { name: "twitter:creator", content: "Magda Chudzik" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: imageUrl },
  ];
};

export default seoMeta;
