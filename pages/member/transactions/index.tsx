import React from 'react';
import jwtDecode from 'jwt-decode';
import Sidebar from '../../../components/organisms/Sidebar';
import TransactionContent from '../../../components/organisms/TransactionContent';
import { GetServersidePropsTypes } from '../../../services/data-types';

export default function Index() {
  return (
    <section className="transactions overflow-auto">
      <Sidebar activeMenu="transaction" />
      <TransactionContent />
    </section>
  );
}

export async function getServerSideProps({ req }: GetServersidePropsTypes) {
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
