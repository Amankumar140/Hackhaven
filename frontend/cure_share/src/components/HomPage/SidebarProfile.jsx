import React from "react";
import { useNavigate, Link } from "react-router-dom";

const SidebarProfile = () => {
  const navigate = useNavigate();

  const handleCreatePost = () => {
    navigate("/create-post");
  };

  return (
    <div
      className="w-full h-full md:w-64 shadow rounded-lg p-4 bg-gray-100"
       
    >
      <div className="flex flex-col items-center text-center">
        <img
          src="https://imgs.search.brave.com/lu5Qr2afNGPu4ByrBboz1O0d1TwwcbTGuqKPdiInVvs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMw/NTQ2MjczMi9waG90/by9oZWFkc2hvdC1z/dHVkaW8tcG9ydHJh/aXQtb2YtYS13b21h/bi1pbi1wcm9maWxl/LWxvb2tpbmctYXQt/dGhlLWNhbWVyYS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/VDBSLXBBbUpKcEVy/V2M4aEUwalNKbm1w/dFVGUTVNdnRQWDdO/UEpKbG45cz0"
          alt="profile"
          className="rounded-full object-cover w-24 h-24 mb-3"
        />
        <h2 className="text-lg font-semibold">Dr. John Doe</h2>
        <p className="text-sm text-gray-500 mb-1">dr.jhondoe123@gmail.com</p>
        <p className="text-sm text-gray-600 font-medium">Senior Cardiologist</p>
        <p className="text-sm text-gray-500 italic mb-2">
          Specialties: Cardiology, Internal Medicine
        </p>

        <p className="text-sm text-gray-700 mb-4">
          Passionate about treating complex heart conditions with over 15 years
          of experience. Dedicated to advancing cardiovascular health and
          mentoring young clinicians.
        </p>

        <div className="flex justify-between w-full px-4 mb-4">
          <div className="text-center">
            <p className="text-base font-bold text-gray-800">1.2K</p>
            <p className="text-xs text-gray-500">Followers</p>
          </div>
          <div className="text-center">
            <p className="text-base font-bold text-gray-800">86</p>
            <p className="text-xs text-gray-500">Posts</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarProfile;
