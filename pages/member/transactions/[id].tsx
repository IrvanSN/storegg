import React from 'react';
import jwtDecode from 'jwt-decode';
import TransactionDetailContent from '../../../components/organisms/TransactionDetailContent';
import {
  GetServersidePropsTypes,
  JWTPayloadTypes,
  UserTypes,
} from '../../../services/data-types';

export default function TransactionDetail() {
  return (
    <section className="transactions-detail overflow-auto">
      <TransactionDetailContent />
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

  const jwtToken = Buffer.from(token, 'base64').toString('ascii');
  const payload: JWTPayloadTypes = jwtDecode(jwtToken);
  const userDetail: UserTypes = payload.player;
  const IMG = process.env.NEXT_PUBLIC_IMG;
  userDetail.avatar = `${IMG}/${userDetail.avatar}`;

  return {
    props: {
      user: userDetail,
    },
  };
}
