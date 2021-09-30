import React from 'react';
import Layout from '../components/layout/Layout';
import NotFoundIllustration from '../svg/NotFound';
import MetaImg from '../assets/meta_image.png';
import Seo from '../components/Seo';

export default () => (
  <>
    <Seo
      href="https://oneplaybook.app"
      title="Oneplaybook | 404 Not Found"
      metaImg={MetaImg}
      description="Wiki notebook workspaces for managing knowledge better. Powered by TiddlyWiki."
    />
    <Layout>
      <section className="pt-1">
        <div className="container mx-auto text-center text-4xl font-bold primary-text-bg">
          Sorry friend
        </div>
        <div className="container mx-auto my-6 px-2 lg:px-64">
          <NotFoundIllustration />
        </div>
        <div className="container mx-auto text-center text-4xl font-bold primary-text-bg">
          I think you are lost!
        </div>
      </section>
    </Layout>
  </>
);
