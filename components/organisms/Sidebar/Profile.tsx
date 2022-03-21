import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';
import { JWTPayloadTypes, UserTypes } from '../../../services/data-types';

export default function Profile() {
  const [user, setUser] = useState({
    avatar: '',
    username: '',
    email: '',
  });

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const jwtToken = atob(token);
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      const userDetail: UserTypes = payload.player;
      userDetail.avatar = `${process.env.NEXT_PUBLIC_IMG}/${userDetail.avatar}`;
      setUser(userDetail);
    }
  }, []);

  return (
    <div className="user text-center pb-50 pe-30">
      <img
        alt="Avatar"
        src={user.avatar}
        className="img-fluid img-cover mb-20"
      />
      <h2 className="fw-bold text-xl color-palette-1 m-0">{user.username}</h2>
      <p className="color-palette-2 m-0">{user.email}</p>
    </div>
  );
}
