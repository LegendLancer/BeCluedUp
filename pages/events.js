import React from 'react';
import Layout from '../components/Layout';
import NavOne from '../components/NavOne';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import Events from '../components/Events';

const EventsPage = () => {
  return (
    <Layout pageTitle="Events">
      <NavOne />
      <PageHeader title="Events" />
      <Events />
      <Footer />
    </Layout>
  );
};

export default EventsPage;
