/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import React from 'react';
import CtaButton from '../components/CtaButton';
import Card from '../components/Card';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import HeroImage from '../svg/HeroImage';
// import CloudVendors from '../svg/CloudVendors';
import DocumentIllustration from '../svg/DocumentIllustration';
import NotebookIllustration from '../svg/NotebookIllustration';
import AppsIllustration from '../svg/AppsIllustration';
import SyncIllustration from '../svg/SyncIllustration';
import MetaImg from '../assets/workspace.png';
import Seo from '../components/Seo';

const IndexPage = () => (
  <>
    <Seo
      href="https://neublio.com"
      title="Neublio - knowledge work evolved"
      metaImg={MetaImg}
      description="Neublio: your integrated knowledge work toolsuite."
    />
    <Layout>
      <section className="pt-10">
        <div className="container mx-auto px-8 lg:flex">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="font-header text-3xl lg:text-4xl xl:text-5xl leading-none">
              Neublio: knowledge work evolved
            </h1>
            <p className="font-body text-md md:text-lg mt-4">
              Whether you&apos;re a student or a professional working on a personal passion project, job hunting, managing a team or running a business,
              you need a modern software suite that can up your game, free up time, and keep you motivated.
            </p>
            <p className="font-body text-md md:text-lg mt-4">
              <span className="primary-text-bg font-bold">Neublio</span> is an integrated knowledge work toolsuite
              that helps you <span className="font-bold">find</span>, <span className="font-bold">execute</span> and <span className="font-bold">manage</span> knowledge work <span className="font-bold emphasis">your way</span>.
            </p>
            <div className="mt-6 md:mt-4">
              <CtaButton className="primary font-body font-bold" size="lg">
                Get started
              </CtaButton>
            </div>
          </div>
          <div className="hidden lg:block w-1/2">
            <HeroImage />
          </div>
        </div>
      </section>
      <section id="benefits" className="pt-20 lg:pt-32">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-header">What do you gain?</h2>
          <div className="flex flex-col lg:flex-row lg:mx-3 mt-12">
            <div className="flex-1 px-3">
              <Card className="mb-8" icon={<i className="gg-time" />}>
                <p className="font-semibold text-xl">Get your time back</p>
                <p className="mt-4">
                  Neublio helps make knowledge work faster and easier. Spend less time searching,
                  and doing busywork and more time doing meaningful work.
                </p>
              </Card>
            </div>
            <div className="flex-1 px-3">
              <Card className="mb-8" icon={<i className="gg-dollar" />}>
                <p className="font-semibold text-xl">Get your money's worth</p>
                <p className="mt-4">
                  Replace many tools and subscriptions with just Neublio, a consolidated,
                  powerful, evergrowing knowledge work toolsuite.
                </p>
              </Card>
            </div>
            <div className="flex-1 px-3">
              <Card className="mb-8" icon={<i className="gg-smile-mouth-open" />}>
                <p className="font-semibold text-xl">Do more, no stress</p>
                <p className="mt-4">
                  No matter the scale of your work needs, Neublio's flexible, extensible toolset adapts to you, offering
                  more control, options and wins for less.
                </p>
              </Card>
            </div>
            <div className="flex-1 px-3">
              <Card className="mb-8" icon={<i className="gg-lock-unlock mb-8" />}>
                <p className="font-semibold text-xl">Unlock potential</p>
                <p className="mt-4">
                  With Neublio, you have a powerful platform to not
                  just manage your knowledge work, but to explore, create and innovate on top of it.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <div className="mx-auto text-center">
        <h2 id="features" className="text-3xl lg:text-5xl font-header py-20 lg:pt-32">
          Core features
        </h2>
      </div>
      <SplitSection
        reverseOrder
        primarySlot={
          <div className="lg:pl-32 xl:pl-48">
            <h3 className="text-3xl font-header leading-tight">Databook: a document database</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Keep your knowledge in one neat, organized document database. Find what you need
              instantly with powerful search and filters.
            </p>
          </div>
        }
        secondarySlot={<DocumentIllustration />}
      />
      <SplitSection
        primarySlot={
          <div className="lg:pr-32 xl:pr-48">
            <h3 className="text-3xl font-header leading-tight">Notebook: an extensible document editor</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Create rich documents with text, images, tables, code blocks, and more. Customize
              your editor to accommodate your unique data and workflow needs.
            </p>
          </div>
        }
        secondarySlot={<NotebookIllustration />}
      />
      <SplitSection
        reverseOrder
        primarySlot={
          <div className="lg:pl-32 xl:pl-48">
            <h3 className="text-3xl font-header leading-tight">Playbook: a composable view and workflow builder</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Build custom views, capture, use and automate workflows by composing document based components together. Tailor your knowledge
              work environment to fit your needs.
            </p>
          </div>
        }
        secondarySlot={<AppsIllustration />}
      />
      <SplitSection
        primarySlot={
          <div className="lg:pr-32 xl:pr-48">
            <h3 className="text-3xl font-header leading-tight">Flexible hosting API</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Host your data wherever you want, whether on your local machine, a private server, or get more with our premium cloud service.
              Neublio's flexible hosting API gives you the freedom to choose the hosting solution that best fits your needs and preferences.
            </p>
          </div>
        }
        secondarySlot={<SyncIllustration />}
      />
      {/* <section id="cloud" className="py-20 lg:pt-32">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-header pb-5">Host your data on any cloud service</h2>
          <CloudVendors />
        </div>
      </section> */}
      {/* <section id="setup" className="py-20 lg:pt-32">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-header pb-5">Quick setup in three clicks</h2>
          <Setup />
        </div>
      </section> */}
      {/* <section id="opensource" className="py-20 lg:py-40">
        <div className="container mx-auto">
          <h2 className="text-3xl lg:text-5xl font-header pb-5 text-center">
            Powered by 5k starred open source software
          </h2>
          <div className="flex flex-col md:flex-row md:-mx-3">
            {customerData.map(customer => (
              <div key={customer.customerName} className="flex-1 px-3">
                <CustomerCard customer={customer} />
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <section className="bg-purple-100 container mx-auto my-20 py-24 rounded-lg text-center">
        <h3 className="text-5xl font-header">Ready to upgrade your knowledge work?</h3>
        <p className="mt-8 text-xl font-light">
          Join teams and professionals using Neublio to work smarter and faster.
        </p>
        <div className="mt-8">
          <CtaButton className="primary font-bold" size="xl">
            Get started with Neublio
          </CtaButton>
        </div>
      </section>
    </Layout>
  </>
);

export default IndexPage;
