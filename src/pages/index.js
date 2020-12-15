import React from 'react';
import CtaButton from '../components/CtaButton';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import CloudVendors from '../svg/CloudVendors';
import NotesIllustration from '../svg/NotesIllustration';
import CollabIllustration from '../svg/CollabIllustration';
import AppsIllustration from '../svg/AppsIllustration';
import BuildIllustration from '../svg/BuildIllustration';
import Setup from '../svg/Setup';
import MetaImg from '../assets/meta_image.png';
import Seo from '../components/Seo';

export default () => (
  <>
    <Seo
      href="https://oneplaybook.app"
      title="OnePlaybook — Where Teams Think Together"
      metaImg={MetaImg}
      description=" Oneplaybook: a self-hosted project management tool for you and your team."
    />
    <Layout>
      <section className="pt-12">
        <div className="container mx-auto px-8 lg:flex">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="font-header text-3xl lg:text-4xl xl:text-5xl leading-none">
              A free, self-hosted project management & collaboration tool for you & your team
            </h1>
            <p className="font-body text-md md:text-lg mt-6">
              <span className="primary-text-bg font-bold">Oneplaybook</span> acts as a single source
              of truth for you and your team&apos;s project knowledge and activities. Keep
              everything in one workspace and therefore everyone in the loop. Self-hosting
              guarantees your freedom and privacy. Coming soon!
            </p>
            <div className="mt-8 md:mt-6">
              <CtaButton className="primary font-body font-bold" size="lg">
                Join Waitlist
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
              </a>
              .
            </p>
          </div>
          <div className="hidden lg:block w-1/2">
            <HeroImage />
          </div>
        </div>
      </section>
      <section id="benefits" className="pt-20 lg:pt-32">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-header">What do you gain with Oneplaybook?</h2>
          <div className="flex flex-col lg:flex-row lg:-mx-3 mt-12">
            <div className="flex-1 px-3">
              <Card className="mb-8" icon={<i className="gg-lock-unlock mb-8" />}>
                <p className="font-semibold text-xl">No lock-ins</p>
                <p className="mt-4">
                  Deploy your Oneplaybook to cloud services you trust like Dropbox, Google Drive, or
                  a private server, with complete offline support. All data remains with you.
                </p>
              </Card>
            </div>
            <div className="flex-1 px-3">
              <Card className="mb-8" icon={<i className="gg-dollar" />}>
                <p className="font-semibold text-xl">Pay less, get more</p>
                <p className="mt-4">
                  Oneplaybook&apos;s rich set of features replace apps like Evernote, Miro, Zoom and
                  Notion. Get the power of five apps for the price of one app.
                </p>
              </Card>
            </div>
            <div className="flex-1 px-3">
              <Card className="mb-8" icon={<i className="gg-smile-mouth-open" />}>
                <p className="font-semibold text-xl">Bloat free</p>
                <p className="mt-4">
                  Whether it&apos;s a personal project or a collaborative effort, pick and choose
                  the exact template or plugin you need for your workflow and avoid feature bloat.
                </p>
              </Card>
            </div>
            <div className="flex-1 px-3">
              <Card className="mb-8" icon={<i className="gg-time" />}>
                <p className="font-semibold text-xl">Just work, save time</p>
                <p className="mt-4">
                  Oneplaybook gives you a managed app experience so you can concentrate on getting
                  valuable work done and not waste time on maintenance.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <div className="mx-auto text-center">
        <h2 id="features" className="text-3xl lg:text-5xl font-header py-20 lg:pt-32">
          Empower your projects
        </h2>
      </div>
      <SplitSection
        reverseOrder
        primarySlot={
          <div className="lg:pl-32 xl:pl-48">
            <h3 className="text-3xl font-header leading-tight">All knowledge in one place</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Keep all knowledge that is important to you and your team in one neat, accessible and
			  organized workspace instead of scattering it all across multiple apps and web services.
            </p>
          </div>
        }
        secondarySlot={<NotesIllustration />}
      />
      <SplitSection
        primarySlot={
          <div className="lg:pr-32 xl:pr-48">
            <h3 className="text-3xl font-header leading-tight">Collaboration made fun again</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Be remote ready by default. Invite team members with a simple link to work on stuff
              together in realtime or asynchronously in one neat workspace
            </p>
          </div>
        }
        secondarySlot={<CollabIllustration />}
      />
      <SplitSection
        reverseOrder
        primarySlot={
          <div className="lg:pl-32 xl:pl-48">
            <h3 className="text-3xl font-header leading-tight">Accomodate any workflow</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Oneplaybook allows you to integrate any workflow that you may favor via third party plugins
			  and integrations
            </p>
          </div>
        }
        secondarySlot={<AppsIllustration />}
      />
      <SplitSection
        primarySlot={
          <div className="lg:pr-32 xl:pr-48">
            <h3 className="text-3xl font-header leading-tight">Automate tedious work</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Stay productive by turning tedious workflows and processes into low code applications to quickly
              automate your life and get things done faster and more efficiently
            </p>
          </div>
        }
        secondarySlot={<BuildIllustration />}
      />
      <section id="cloud" className="py-20 lg:pt-32">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-header pb-5">Host on any cloud service</h2>
          <CloudVendors />
        </div>
      </section>
      <section id="setup" className="py-20 lg:pt-32">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-header pb-5">Quick setup in three clicks</h2>
          <Setup />
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
      <section className="bg-purple-100 container mx-auto my-20 py-24 rounded-lg text-center">
        <h3 className="text-5xl font-header">Ready to create your first playbook?</h3>
        <p className="mt-8 text-xl font-light">
          Behind every successful project is a team with a good playbook. Let&apos;s do this!
        </p>
        <div className="mt-8">
          <CtaButton className="primary font-bold" size="xl">
            Join Waitlist
          </CtaButton>
        </div>
      </section>
    </Layout>
  </>
);
