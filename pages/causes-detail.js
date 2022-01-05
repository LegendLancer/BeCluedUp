import React from 'react';
import Layout from '../components/Layout';
import NavOne from '../components/NavOne';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import CausesDetail from '../components/CausesDetail';

const CausesPage = () => {
  return (
    <Layout pageTitle="Causes Detail">
      <NavOne />
      <PageHeader title="Causes Detail" />
      <CausesDetail />
      <Footer />
    </Layout>
  );
};

export default CausesPage;
