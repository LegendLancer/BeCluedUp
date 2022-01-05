import React from 'react';
import Layout from '../components/Layout';
import NavOne from '../components/NavOne';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import Volunteer from '../components/Volunteer';

const VolunteerPage = () => {
  return (
    <Layout pageTitle="Volunteer">
      <NavOne />
      <PageHeader title="become a volunteer" />
      <Volunteer />
      <Footer />
    </Layout>
  );
};

export default VolunteerPage;
