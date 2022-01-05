import React from 'react';
import Layout from '../components/Layout';
import NavOne from '../components/NavOne';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import EventsDetail from '../components/EventsDetail';

const EventsDetailPage = () => {
  return (
    <Layout pageTitle="Events Detail">
      <NavOne />
      <PageHeader title="Events Detail" />
      <EventsDetail />
      <Footer />
    </Layout>
  );
};

export default EventsDetailPage;
