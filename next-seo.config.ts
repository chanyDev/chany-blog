import metadata from 'config/metadata';

const SEO = {
  titleTemplate: '%s | Chany.Dev',
  defaultTitle: metadata.title,
  description: metadata.description,
  canonical: metadata.url,
  openGraph: {
    title: metadata.title,
    description: metadata.description,
    type: 'website',
    locale: 'ko-KR',
    url: metadata.url,
    images: [
      {
        url: `${metadata.url}/thumbnail.png`,
        alt: metadata.title,
        width: 1280,
        height: 720,
      },
    ],
  },
};

export default SEO;
