import React from 'react';
import Layout from '../components/Layout';
import NavOne from '../components/NavOne';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import NewsSingle from '../components/NewsSingle';

const NewsSinglePage = () => {
  return (
    <Layout pageTitle="Single News">
      <NavOne />
      <PageHeader title="Single News" />
      <NewsSingle />
      <Footer />
    </Layout>
  );
};

export default NewsSinglePage;
