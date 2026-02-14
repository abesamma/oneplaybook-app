/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import React from 'react';
import Layout from '../components/layout/Layout';
import NotFoundIllustration from '../svg/NotFound';
import MetaImg from '../assets/workspace.png';
import Seo from '../components/Seo';

const NotFoundPage = () => (
  <>
    <Seo
      href="https://neublio.com"
      title="Neublio - knowledge work evolved"
      metaImg={MetaImg}
      description="Neublio: your integrated knowledge work toolsuite."
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

export default NotFoundPage;
