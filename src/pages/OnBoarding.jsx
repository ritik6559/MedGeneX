import React, { useState } from "react";
import { useStateContext } from "@/context";
import { usePrivy } from "@privy-io/react-auth";
import { useNavigate } from "react-router-dom";

const OnBoarding = () => {

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { createUser } = useStateContext();
  const { user } = usePrivy();

  const handleSubmit = async (e) => {

    try {
      e.preventDefault();
      setIsSubmitting(true);

      const userData = {
        username,
        age: parseInt(age, 10),
        location,
        createBy: user.email.address
      };

      const newUser = await createUser(userData);

      if( newUser ){
        navigate("/profile");
      }

      console.log("new User", newUser);

    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex min-h-screen items-start mt-20 justify-center ] p-4">
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-b from-[#1c1c28] to-[#16161e] p-8 shadow-xl animate-fade-in-up">
        {/* Shimmer effect overlay */}
        <div className="absolute inset-0 -inset-x-full z-10 h-full w-1/2 translate-x-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform-gpu animate-shimmer"></div>

        <div className="relative z-20">
          <h2 className="mb-2 text-center text-5xl font-bold bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">Welcome!</h2>
          <h3 className="mb-8 text-center text-2xl font-medium text-gray-400">Let's get started</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1.5 transition-all duration-300 ease-in-out">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-300"
              >
                Username
              </label>
              <div className="relative">
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  placeholder="Enter your username"
                  className="w-full rounded-lg border border-gray-700 bg-[#0d0d13] px-4 py-3 text-gray-200 transition-all duration-300 placeholder:text-gray-600 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                />
              </div>
            </div>

            <div className="space-y-1.5 transition-all duration-300 ease-in-out">
              <label htmlFor="age" className="block text-sm font-medium text-gray-300">
                Age
              </label>
              <div className="relative">
                <input
                  id="age"
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  required
                  placeholder="Enter your age"
                  className="w-full rounded-lg border border-gray-700 bg-[#0d0d13] px-4 py-3 text-gray-200 transition-all duration-300 placeholder:text-gray-600 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                />
              </div>
            </div>

            <div className="space-y-1.5 transition-all duration-300 ease-in-out">
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-300"
              >
                Location
              </label>
              <div className="relative">
                <input
                  id="location"
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                  placeholder="Enter your location"
                  className="w-full rounded-lg border border-gray-700 bg-[#0d0d13] px-4 py-3 text-gray-200 transition-all duration-300 placeholder:text-gray-600 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`group relative mt-8 w-full overflow-hidden rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 py-3.5 font-medium text-white shadow-lg transition-all duration-300 hover:from-purple-500 hover:to-blue-400 focus:outline-none focus:ring-2 focus:ring-purple-500/70 ${
                isSubmitting ? "opacity-80" : ""
              }`}
            >
              {/* Button background animation */}
              <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></span>

              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="mr-2 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                "Get Started"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OnBoarding;
