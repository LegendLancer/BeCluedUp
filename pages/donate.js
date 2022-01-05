import React from 'react';
import Layout from '../components/Layout';
import NavOne from '../components/NavOne';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import Donate from '../components/Donate';

const DonatePage = () => {
  return (
    <Layout pageTitle="Donate">
      <NavOne />
      <PageHeader title="Donate" />
      <Donate />
      <Footer />
    </Layout>
  );
};

export default DonatePage;
