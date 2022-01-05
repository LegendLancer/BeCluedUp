import React from 'react';
import Layout from '../components/Layout';
import NavTwo from '../components/NavTwo';
import Footer from '../components/Footer';
import SliderTwo from '../components/SliderTwo';
import EntryArea from '../components/EntryArea';
import HiwArea from '../components/HiwArea';
import ServiceArea from '../components/ServiceArea';
import MixerArea from '../components/MixerArea';
import CausesArea from '../components/CausesArea';
import ClientsLogo from '../components/ClientsLogo';
import HelpingArea from '../components/HelpingArea';
import TeamArea from '../components/TeamArea';
import CallToAction from '../components/CallToAction';
import BlogHome from '../components/BlogHome';
import Map from '../components/Map';
import CallToActionTwo from '../components/CallToActionTwo';

const HomePage = () => {
  return (
    <Layout pageTitle="BeCluedUp">
      <NavTwo />
      <SliderTwo />
      <EntryArea />
      <HiwArea />
      <ServiceArea />
      <MixerArea />
      <CausesArea />
      <ClientsLogo />
      <HelpingArea />
      <TeamArea />
      <CallToAction />
      <BlogHome />
      <Map />
      <CallToActionTwo />
      <Footer />
    </Layout>
  );
};

export default HomePage;
