import { NextSeo } from 'next-seo';

import metadata from 'config/metadata';

const AboutPage = () => {
  return (
    <>
      <NextSeo
        title="About"
        description="다양한 경험을 좋아하는 프론트엔드 개발자입니다. 최근에는 TypeScript와 Next.js에 관심이 많습니다."
        canonical={`${metadata.url}/about`}
        openGraph={{
          url: `${metadata.url}/about`,
          title: `About | ${metadata.title}`,
          description:
            '다양한 경험을 좋아하는 프론트엔드 개발자입니다. 최근에는 TypeScript와 Next.js에 관심이 많습니다.',
        }}
      />
      <div className="w-full divide-y divide-gray-300 dark:divide-gray-500">
        <h2 className="py-6 text-4xl font-extrabold md:text-5xl">About</h2>
        <div className="pt-6 prose text-gray-600 dark:text-gray-300 max-w-none">
          <h3>김동찬</h3>
          <p>
            다양한 경험을 좋아하는 <strong>프론트엔드</strong> 개발자입니다.
            최근에는 TypeScript와 Next.js에 관심이 많습니다.
          </p>
          <p>
            함께 일하고 싶은 개발자가 되는것이 목표이며, 긍정적인 자세를
            유지하려고 노력합니다.
          </p>
          <p>
            <a
              href={
                'https://chanydev.notion.site/ccc6ebd6ee1d4faabc9dc065e3577b4f'
              }
              target="_blank"
              rel="noreferrer"
            >
              Notion 이력서
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
