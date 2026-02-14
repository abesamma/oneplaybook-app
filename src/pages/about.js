/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import React from 'react';
import Layout from '../components/layout/Layout';
import CtaButton from '../components/CtaButton';
import MetaImg from '../assets/workspace.png';
import Seo from '../components/Seo';

const AboutPage = () => (
  <>
    <Seo
      href="https://neublio.com"
      title="Neublio - knowledge work evolved"
      metaImg={MetaImg}
      description="Neublio: your integrated knowledge work toolsuite."
    />
    <Layout>
      <section className="pt-8">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl lg:text-5xl font-header">
            About Neublio{' '}
            <span role="img" aria-label="playbook emoji">
              📔
            </span>
          </h1>
        </div>
        <div className="container mx-auto px-8 mt-4 text-center lg:text-justify">
          <p className="my-2">
            <span className="primary-text-bg font-bold">Neublio</span> is an evergrowing,
            integrated knowledge work toolsuite built to help you move faster, stay organized, and
            do more with less friction. It brings your knowledge work into one place so you can
            spend less time searching, switching tools, and doing busywork, and more time doing
            meaningful work.
          </p>
          <p className="my-2">
            At its core, Neublio combines a document database for flexible, composable storage, an
            extensible document editor for rich content, and a composable view and workflow builder
            so you can tailor how you capture, connect, and use information. Whether you are
            studying, job hunting, managing a team, or running a business, the platform adapts to
            your workflow instead of forcing you into someone else&apos;s.
          </p>
          <p className="my-2">
            Neublio also gives you flexible hosting options so you can keep your data where it makes
            sense for you, while still delivering a managed, offline-ready app experience. Neublio is an
            open source project that is continually building new ways to organize and collaborate on knowledge, and we welcome
            you to explore, remix, and grow with the community.
          </p>
          <div className="mt-6 flex justify-center">
            <CtaButton className="primary font-body font-bold" size="lg">
              Let&apos;s do this!
            </CtaButton>
          </div>
        </div>
      </section>
    </Layout>
  </>
);

export default AboutPage;
