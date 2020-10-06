import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout/Layout';
import MetaImg from '../assets/meta_image.png';

export default () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <link rel="canonical" href="https://oneplaybook.app/license" />
      {/* Primary Meta Tags */}
      <title>License — OnePlaybook — Learn, Think and Build Together</title>
      <meta name="title" content="License — OnePlaybook — Learn, Think and Build Together" />
      <meta
        name="description"
        content="Whether you need a second brain to help you plan a thesis, manage a project, or are looking into cultivating a digital garden with others like you, Oneplaybook can help you do all that and more, at low cost."
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://oneplaybook.app/license" />
      <meta
        property="og:title"
        content="Privacy Policy — OnePlaybook — Learn, Think and Build Together"
      />
      <meta
        property="og:description"
        content="Codify knowledge to transform how you learn & think. Build low code apps quickly to do amazing things. Then invite anyone to do it all together."
      />
      <meta property="og:image" content={MetaImg} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://oneplaybook.app/license" />
      <meta
        property="twitter:title"
        content="Privacy Policy — OnePlaybook — Learn, Think and Build Together"
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
          <h1 className="text-3xl lg:text-5xl font-header">Fair Source License, version 0.9</h1>
        </div>
        <div className="container mx-auto px-8 mt-4 text-center lg:text-justify">
          <p className="my-2">Copyright (C) 2020 Abraham Samma</p>

          <p className="my-2">Licensor: Abraham Bashir Hussein Samma</p>

          <p className="my-2">Software: OnePlaybook app version 0.9.0</p>

          <p className="my-2">Use Limitation: 10 (ten) users</p>

          <h1 className="text-xl font-semibold">Information we collect</h1>

          <p className="my-2">
            This license applies only to elements of OnePlaybook, and does not extend to other open
            source elements that are covered by their own respective licenses.
          </p>
          <p className="my-2">
            License Grant. Licensor hereby grants to each recipient of the Software ("you") a
            non-exclusive, non-transferable, royalty-free and fully-paid-up license, under all of
            the Licensorâ€™s copyright and patent rights, to use, copy, distribute, prepare
            derivative works of, publicly perform and display the Software, subject to the Use
            Limitation and the conditions set forth below.
          </p>
          <p className="my-2">
            Use Limitation. The license granted above allows use by up to the number of users per
            entity set forth above (the "Use Limitation"). For determining the number of users,
            "you" includes all affiliates, meaning legal entities controlling, controlled by, or
            under common control with you. If you exceed the Use Limitation, your use is subject to
            payment of Licensorâ€™s then-current list price for licenses.
          </p>

          <p className="my-2">
            Conditions. Redistribution in source code or other forms must include a copy of this
            license document to be provided in a reasonable manner. Any redistribution of the
            Software is only allowed subject to this license.
          </p>

          <p className="my-2">
            Trademarks. This license does not grant you any right in the trademarks, service marks,
            brand names or logos of Licensor.
          </p>

          <p className="my-2">
            DISCLAIMER. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OR CONDITION, EXPRESS OR
            IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
            PARTICULAR PURPOSE AND NONINFRINGEMENT. LICENSORS HEREBY DISCLAIM ALL LIABILITY, WHETHER
            IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH
            THE SOFTWARE.
          </p>

          <p className="my-2">
            Termination. If you violate the terms of this license, your rights will terminate
            automatically and will not be reinstated without the prior written consent of Licensor.
            Any such termination will not affect the right of others who may have received copies of
            the Software from you.
          </p>

          <div className="text-center">
            <p className="my-2">###</p>
          </div>
        </div>
      </section>
    </Layout>
  </>
);
