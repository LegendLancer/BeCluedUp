import React from 'react';
import Layout from '../components/Layout';
import NavOne from '../components/NavOne';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import Team from '../components/Team';

const TeamPage = () => {
  return (
    <Layout pageTitle="Team">
      <NavOne />
      <PageHeader title="Our Team" />
      <Team />
      <Footer />
    </Layout>
  );
};

export default TeamPage;
