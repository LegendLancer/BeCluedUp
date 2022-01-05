import React from 'react';
import Layout from '../components/Layout';
import NavOne from '../components/NavOne';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import Sponsor from '../components/Sponsor';

const SponsorPage = () => {
  return (
    <Layout pageTitle="Sponsors">
      <NavOne />
      <PageHeader title="Sponsors" />
      <Sponsor />
      <Footer />
    </Layout>
  );
};

export default SponsorPage;
