import React from 'react';
import CtaButton from '../components/CtaButton';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import CloudVendors from '../svg/CloudVendors';
import Capture from '../svg/CaptureIllustration';
import Organize from '../svg/OrganizeIllustration';
import Share from '../svg/SharingIllustration';
import Garden from '../svg/GardenIllustration';
import MetaImg from '../assets/meta_image.png';
import Seo from '../components/Seo';

export default () => (
  <>
    <Seo
      href="https://oneplaybook.app"
      title="Oneplaybook | Think together"
      metaImg={MetaImg}
      description="Wiki notebook workspaces for managing knowledge better. Powered by TiddlyWiki."
    />
    <Layout>
      <section className="pt-10 bg-contain bg-left bg-no-repeat bg-tricolor-blob-orange">
        <div className="container mx-auto px-8 lg:flex">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="font-header text-3xl lg:text-4xl xl:text-5xl leading-none">
              Supercharge your knowledge work
            </h1>
            <p className="font-semibold text-lg md:text-2xl mt-4">
              Unify scattered documents and apps into one super notebook document
            </p>
            <p className="text-md md:text-lg mt-2">
              <span className="primary-text-bg font-bold">Oneplaybook</span> helps you manage
              knowledge better and be productive with wiki notebook workspaces instead of ambiguous
              file directories and excessive app switching.
            </p>
            <p className="text-md md:text-lg mt-2">
              Use offline or with any cloud service. Perfect for individuals and teams.
            </p>
            <div className="mt-6 md:mt-4">
              <CtaButton className="primary font-body font-bold" size="lg">
                Start Workspace
              </CtaButton>
            </div>
            <p className="mt-4">
              Powered by & for{' '}
              <a
                className="underline"
                href="https://tiddlywiki.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                TiddlyWiki
              </a>{' '}
              <span role="img" aria-label="TiddlyWiki cat">
                🐈
              </span>
            </p>
          </div>
          <div className="hidden lg:block w-1/2">
            <HeroImage />
          </div>
        </div>
      </section>
      <section id="benefits" className="pt-20 lg:pt-32">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-header">Why Oneplaybook?</h2>
          <div className="flex flex-col lg:flex-row lg:-mx-3 mt-12">
            <div className="flex-1 px-3">
              <Card className="mb-8" icon={<i className="gg-lock-unlock mb-8" />}>
                <p className="font-semibold text-xl">No lock-ins</p>
                <p className="mt-4">
                  Deploy your wiki notebooks to Dropbox, Google Drive, or a private server, with
                  complete offline support. All data remains with you.
                </p>
              </Card>
            </div>
            <div className="flex-1 px-3">
              <Card className="mb-8" icon={<i className="gg-dollar" />}>
                <p className="font-semibold text-xl">Pay less, get more</p>
                <p className="mt-4">
                  Oneplaybook workspace comes with the promise of a customizable user experience
                  that can match or exceed tools like Notion, but at less cost.
                </p>
              </Card>
            </div>
            <div className="flex-1 px-3">
              <Card className="mb-8" icon={<i className="gg-git-fork mb-1" />}>
                <p className="font-semibold text-xl">Clone, edit & extend</p>
                <p className="mt-4">
                  Quickly build and grow the one perfect workspace you need for any kind of project
                  by cloning, editing and extending existing templates.
                </p>
              </Card>
            </div>
            <div className="flex-1 px-3">
              <Card className="mb-8" icon={<i className="gg-time" />}>
                <p className="font-semibold text-xl">Just work, save time</p>
                <p className="mt-4">
                  Oneplaybook offers you a managed app experience so you can concentrate on getting
                  valuable work done and not waste time on maintenance.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <div className="mx-auto text-center">
        <h2 id="features" className="text-3xl lg:text-5xl font-header py-20 lg:pt-32">
          Empower yourself & your teams
        </h2>
      </div>
      <SplitSection
        className="bg-contain bg-top bg-no-repeat bg-orange-blob lg:bg-right"
        reverseOrder
        primarySlot={
          <div className="lg:pl-32 xl:pl-48">
            <h3 className="text-3xl font-header leading-tight">Capture knowledge better</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Capture and save all knowledge that is important to you and your team to one neat and
              searchable knowledgebase so you don&apos;t waste time searching for it in endless
              email threads.
            </p>
          </div>
        }
        secondarySlot={<Capture />}
      />
      <SplitSection
        className="bg-contain bg-top bg-no-repeat bg-purple-blob lg:bg-left"
        primarySlot={
          <div className="lg:pr-32 xl:pr-48">
            <h3 className="text-3xl font-header leading-tight">Collaborate without limits</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Free collaboration made simple and fun again. Work on collective projects and achieve
              mighty things together easily and freely.
            </p>
          </div>
        }
        secondarySlot={<Organize />}
      />
      <SplitSection
        className="bg-contain bg-top bg-no-repeat bg-tricolor-blob-cyan lg:bg-right"
        reverseOrder
        primarySlot={
          <div className="lg:pl-32 xl:pl-48">
            <h3 className="text-3xl font-header leading-tight">Share to all</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Share knowledge bases and custom notebooks with others. You can share to private
              groups, or make them open to the world.
            </p>
          </div>
        }
        secondarySlot={<Share />}
      />
      <SplitSection
        className="bg-contain bg-top bg-no-repeat bg-tricolor-blob-purple lg:bg-left"
        primarySlot={
          <div className="lg:pr-32 xl:pr-48">
            <h3 className="text-3xl font-header leading-tight">Edit and fork away</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Public wiki notebooks that catch your fancy can be edited and forked to become your
              own to build upon and share! Tend the wiki garden of knowledge together.
            </p>
          </div>
        }
        secondarySlot={<Garden />}
      />
      <section id="cloud" className="py-20 lg:pt-32">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-header pb-5">Host on any cloud service</h2>
          <CloudVendors />
        </div>
      </section>
      <section id="opensource" className="py-20 lg:py-40">
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
      </section>
      <section className="bg-gradient-to-b from-yellow-100 via-red-200 to-pink-200 container mx-auto my-20 py-24 rounded-lg text-center">
        <h3 className="text-5xl font-header">Ready to create your first playbook?</h3>
        <p className="mt-8 text-xl font-light">
          Behind every success a good playbook. Let&apos;s do this!
        </p>
        <div className="mt-8">
          <CtaButton className="primary font-bold" size="xl">
            Start free workspace
          </CtaButton>
        </div>
      </section>
    </Layout>
  </>
);
