import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const ProfilesPage = () => {
  const profiles = [1, 2, 3, 4, 5];
  return (
    <div className="flex gap-2">
    <div className="flex flex-col gap-2 font-extrabold p-10">
      {profiles.map((profile) => (
        <NavLink key={profile} to={`/profiles/${profile}`}
        className={({isActive}) => {
          return isActive ? "text-red-500 underline" : ""
          ;
        }}
      >
          Profile - {profile}
          <br />
        </NavLink>
      ))}
      </div>
        <Outlet />
    </div>
  );
};

export default ProfilesPage;
