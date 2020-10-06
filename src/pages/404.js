import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout/Layout';
import NotFoundIllustration from '../svg/NotFound';
import MetaImg from '../assets/meta_image.png';

export default () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <link rel="canonical" href="https://oneplaybook.app" />
      {/* Primary Meta Tags */}
      <title>404 — OnePlaybook — Learn, Think and Build Together</title>
      <meta name="title" content="404 — OnePlaybook — Learn, Think and Build Together" />
      <meta name="description" content="404 Not Found" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://oneplaybook.app" />
      <meta property="og:title" content="404 — OnePlaybook — Learn, Think and Build Together" />
      <meta property="og:description" content="404 Not Found" />
      <meta property="og:image" content={MetaImg} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://oneplaybook.app" />
      <meta
        property="twitter:title"
        content="404 — OnePlaybook — Learn, Think and Build Together"
      />
      <meta property="twitter:description" content="404 Not Found" />
      <meta property="twitter:image" content={MetaImg} />
    </Helmet>
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
