import React from "react";

const ProfileField = ({ label, value, delay, isVisible }) => (
  <div className={`bg-white/5 hover-lift rounded-lg p-4 transition-all duration-300 hover:bg-white/10 ${isVisible ? `animate-fade-in-up ${delay}` : 'opacity-0'}`}>
    <p className="mb-1 text-sm font-medium text-purple-300">{label}</p>
    <p className="text-lg font-semibold text-white">{value}</p>
  </div>
);

export default ProfileField;
