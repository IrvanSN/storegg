import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';
import Sidebar from '../../components/organisms/Sidebar';
import Input from '../../components/atoms/Input';
import { JWTPayloadTypes, UserTypes } from '../../services/data-types';
import { updateProfile } from '../../services/player';

export default function EditProfile() {
  const [user, setUser] = useState({
    id: '',
    username: '',
    email: '',
    avatar: '',
  });
  const [imagePreview, setImagePreview] = useState(null);

  const router = useRouter();

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

  const onSubmit = async () => {
    const data = new FormData();

    data.append('image', user.avatar);
    data.append('name', user.username);
    const response = await updateProfile(data, user.id);
    if (response.error) {
      toast.error(response.message);
    } else {
      toast.success('Data berhasil di update!');
      Cookies.remove('token');
      router.push('/sign-in');
    }
  };

  console.log(user);

  return (
    <section className="edit-profile overflow-auto">
      <Sidebar activeMenu="settings" />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
          <div className="bg-card pt-30 ps-30 pe-30 pb-30">
            <form action="">
              <div className="photo d-flex">
                <div className="image-upload">
                  <label htmlFor="avatar">
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        alt="upload-icon"
                        className="avatar img-fluid img-cover"
                      />
                    ) : (
                      <img
                        src={user.avatar}
                        alt="upload-icon"
                        className="avatar img-fluid img-cover"
                      />
                    )}
                  </label>
                  <input
                    id="avatar"
                    type="file"
                    name="avatar"
                    accept="image/png, image/jpeg"
                    onChange={(event) => {
                      const img = event.target.files[0];
                      setImagePreview(URL.createObjectURL(img));
                      return setUser({ ...user, avatar: img });
                    }}
                  />
                </div>
              </div>
              <div className="pt-30">
                <Input
                  label="Full Name"
                  value={user.username}
                  onChane={(event) =>
                    setUser({
                      ...user,
                      name: event.target.value,
                    })
                  }
                />
              </div>
              <div className="pt-30">
                <Input label="Email Address" disabled value={user.email} />
              </div>
              {/* <div className="pt-30"> */}
              {/*  <Input label="Phone" /> */}
              {/* </div> */}
              <div className="button-group d-flex flex-column pt-50">
                <button
                  type="button"
                  className="btn btn-save fw-medium text-lg text-white rounded-pill"
                  onClick={onSubmit}
                >
                  Save My Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </section>
  );
}
