import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import cx from 'classnames';

interface SidebarMenuItemProps {
  title: string;
  href?: string;
  icon: string;
  active?: boolean;
  onClick?: () => void;
}

export default function SidebarMenuItem(props: Partial<SidebarMenuItemProps>) {
  const { title, href, icon, active, onClick } = props;
  const classTittle = cx({
    item: true,
    'mb-30': true,
    active,
  });
  return (
    <div className={classTittle} onClick={onClick}>
      <div className="icon me-3">
        <Image
          src={`/icon/${icon}.svg`}
          height={25}
          width={25}
          alt="overview-icon"
        />
      </div>
      <p className="item-title m-0">
        {onClick ? (
          <a className="text-lg text-decoration-none">{title}</a>
        ) : (
          <Link href={href}>
            <a className="text-lg text-decoration-none">{title}</a>
          </Link>
        )}
      </p>
    </div>
  );
}
