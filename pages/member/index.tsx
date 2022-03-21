import jwtDecode from 'jwt-decode';
import Sidebar from '../../components/organisms/Sidebar';
import OverviewContent from '../../components/organisms/OverviewContent';
import {
  JWTPayloadTypes,
  UserTypes,
  GetServersidePropsTypes,
} from '../../services/data-types';

export default function Index() {
  return (
    <section className="overview overflow-auto">
      <Sidebar activeMenu="overview" />
      <OverviewContent />
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
