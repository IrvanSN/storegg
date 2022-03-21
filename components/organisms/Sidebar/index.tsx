import React from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import MenuItem from './MenuItem';
import Profile from './Profile';
import Footer from './Footer';

interface SidebarProps {
  activeMenu:
    | 'overview'
    | 'transaction'
    | 'settings'
    | 'messages'
    | 'card'
    | 'rewards'
    | 'logout';
}

export default function Sidebar(props: SidebarProps) {
  const { activeMenu } = props;

  const router = useRouter();

  const onLogout = () => {
    Cookies.remove('token');
    router.push('/sign-in');
  };

  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem
            title="Overview"
            href="/member"
            icon="sidebar-overview"
            active={activeMenu === 'overview'}
          />
          <MenuItem
            title="Transactions"
            href="/member/transactions"
            icon="sidebar-transactions"
            active={activeMenu === 'transaction'}
          />
          <MenuItem
            title="Messages"
            href="/member/messages"
            icon="sidebar-messages"
            active={activeMenu === 'messages'}
          />
          <MenuItem
            title="Card"
            href="/member/card"
            icon="sidebar-card"
            active={activeMenu === 'card'}
          />
          <MenuItem
            title="Rewards"
            href="/member/rewards"
            icon="sidebar-rewards"
            active={activeMenu === 'rewards'}
          />
          <MenuItem
            title="Settings"
            href="/member/edit-profile"
            icon="sidebar-settings"
            active={activeMenu === 'settings'}
          />
          <MenuItem
            title="Log Out"
            href="/logout"
            icon="sidebar-logout"
            active={activeMenu === 'logout'}
            onClick={onLogout}
          />
        </div>
        <Footer />
      </div>
    </section>
  );
}
