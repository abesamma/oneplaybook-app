import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout/Layout';
import CtaButton from '../components/CtaButton';
import MetaImg from '../assets/meta_image.png';

export default () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <link rel="canonical" href="https://oneplaybook.app/about" />
      {/* Primary Meta Tags */}
      <title>About — OnePlaybook — Learn, Think and Build, Together</title>
      <meta name="title" content="About — OnePlaybook — Learn, Think and Build, Together" />
      <meta
        name="description"
        content="Codify knowledge to transform how you learn & think. Build low code apps quickly to do amazing things. Then invite anyone to do it all together."
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://oneplaybook.app/about" />
      <meta property="og:title" content="About — OnePlaybook — Learn, Think and Build, Together" />
      <meta
        property="og:description"
        content="Codify knowledge to transform how you learn & think. Build low code apps quickly to do amazing things. Then invite anyone to do it all together."
      />
      <meta property="og:image" content={MetaImg} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://oneplaybook.app/about" />
      <meta
        property="twitter:title"
        content="About — OnePlaybook — Learn, Think and Build, Together"
      />
      <meta
        property="twitter:description"
        content="Codify knowledge to transform how you learn & think. Build low code apps quickly to do amazing things. Then invite anyone to do it all together."
      />
      <meta property="twitter:image" content={MetaImg} />
    </Helmet>
    <Layout>
      <section className="pt-12">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl lg:text-5xl font-header">About Oneplaybook</h1>
        </div>
        <div className="container mx-auto px-8 mt-4 text-center lg:text-justify">
          <p className="my-2">
            <span className="primary-text-bg font-bold">Oneplaybook</span> is a small corner on the
            Internet where your ideas can come to life, dance around with other people&apos;s ideas,
            and manifest into digital produce that nourishes humankind instead of harming it. It is
            akin to unspoiled digital land, ripe for cultivation by your mind; public knowledge
            spaces linked by bi-directional links, communal digital gardens full of interesting
            produce, and low code guilds shaping thoughts and processes into useful micro apps that
            you can use to build more useful tools to do things better.
          </p>
          <p className="my-2">
            Behind all this is a vibrant community of thinkers and makers looking to build a better
            world through one common playbook, powered by TiddlyWiki. Come friend, and join us on
            this little adventure today!
          </p>
          <div className="mt-6 flex justify-center">
            <CtaButton className="primary font-body font-bold" size="lg">
              Join Waitlist
            </CtaButton>
          </div>
        </div>
      </section>
    </Layout>
  </>
);
