import React, { useState, useEffect } from "react";
import { useStateContext } from "@/context";
import { usePrivy } from "@privy-io/react-auth";
import ProfileField from "@/components/ProfileField";

const Profile = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const { currentUser, fetchUserByEmail } = useStateContext();
  const { user } = usePrivy();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!currentUser) {
        fetchUserByEmail(user?.email?.address);
      }
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (currentUser) {
      const timer = setTimeout(() => setIsVisible(true), 100);
      return () => clearTimeout(timer);
    }
  }, [currentUser]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-lg text-gray-500 animate-pulse-slow">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center  p-6">
      <div
        className={`w-full max-w-lg rounded-xl profile-gradient p-0.5 animate-glow ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
      >
        <div className="rounded-xl bg-black/80 p-6 backdrop-blur-sm">
          <div className="flex flex-col items-center">
            <div className="relative mb-8 animate-float">
              <div className="absolute inset-0 rounded-full avatar-gradient blur-md opacity-70"></div>
              <div className="relative flex h-28 w-28 items-center justify-center rounded-full avatar-gradient">
                <span className="text-7xl">😊</span>
              </div>
            </div>

            <h1 className={`mb-8 text-3xl font-bold text-white ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              User Profile
            </h1>

            <div className="w-full space-y-6">
              <ProfileField
                label="Email"
                value={currentUser?.createBy || ""}
                delay="stagger-delay-1"
                isVisible={isVisible}
              />

              <ProfileField
                label="Username"
                value={currentUser?.username || ""}
                delay="stagger-delay-2"
                isVisible={isVisible}
              />

              <ProfileField
                label="Age"
                value={currentUser?.age || ""}
                delay="stagger-delay-3"
                isVisible={isVisible}
              />

              <ProfileField
                label="Location"
                value={currentUser?.location || ""}
                delay="stagger-delay-4"
                isVisible={isVisible}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
