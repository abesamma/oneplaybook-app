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
      title="Profit with Wikis | Oneplaybook"
      metaImg={MetaImg}
      description="Oneplaybook: manage your knowledge and work better with TiddlyWiki."
    />
    <Layout>
      <section className="pt-10">
        <div className="container mx-auto px-8 lg:flex">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="font-header text-3xl lg:text-4xl xl:text-5xl leading-none">
              Capture, organize and share knowledge better together with one tool
            </h1>
            <p className="font-body text-md md:text-lg mt-4">
              It&apos;s easy to lose track of knowledge and direction amid so many sites, apps,
              chats, emails and collaborators.
            </p>
            <p className="font-body text-md md:text-lg mt-4">
              <span className="primary-text-bg font-bold">Oneplaybook</span> helps you build
              internal wiki spaces for sharing knowledge, docs, notes and more. Use offline or
              with any cloud service of your choice. Perfect for individuals and teams who want 
              to have a single clean and organized source of truth to refer to. Coming very soon!
            </p>
            <div className="mt-6 md:mt-4">
              <CtaButton className="primary font-body font-bold" size="lg">
                Join wait list
              </CtaButton>
            </div>
            <p className="mt-4">
              Powered by{' '}
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
          <h2 className="text-3xl lg:text-5xl font-header">What do you gain?</h2>
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
                  Oneplaybook&apos;s rich set of features replace apps like Evernote, Miro, and
                  Notion. Get the power of all these apps and more for the price of one app.
                </p>
              </Card>
            </div>
            <div className="flex-1 px-3">
              <Card className="mb-8" icon={<i className="gg-smile-mouth-open" />}>
                <p className="font-semibold text-xl">Lean and flexible</p>
                <p className="mt-4">
                  Whether it&apos;s a personal project or a collaborative effort, pick the exact
                  template or TiddlyWiki plugin you need for your work.
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
        reverseOrder
        primarySlot={
          <div className="lg:pl-32 xl:pl-48">
            <h3 className="text-3xl font-header leading-tight">All knowledge in one place</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Capture and save all knowledge that is important to you and your team in one simple
              shared workspace so you do not waste time searching for it in endless email threads or
              headhunting that one person who might know.
            </p>
          </div>
        }
        secondarySlot={<NotesIllustration />}
      />
      <SplitSection
        primarySlot={
          <div className="lg:pr-32 xl:pr-48">
            <h3 className="text-3xl font-header leading-tight">Effortless collaboration</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Easily manage remote teams. Work on stuff together with anyone and everyone, in
              real-time or asynchronously, in one neat workspace.
            </p>
          </div>
        }
        secondarySlot={<CollabIllustration />}
      />
      <SplitSection
        reverseOrder
        primarySlot={
          <div className="lg:pl-32 xl:pl-48">
            <h3 className="text-3xl font-header leading-tight">Accommodate any workflow</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Oneplaybook allows you to integrate any workflow that you may favor via third party
              plugins and integrations
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
              Stay productive by turning tedious workflows and processes into low code applications
              to quickly automate your life and get things done faster and more efficiently
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
            Join wait list
          </CtaButton>
        </div>
      </section>
    </Layout>
  </>
);
