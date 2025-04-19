import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IconHeartHandshake } from "@tabler/icons-react";
import React, { useEffect, useRef } from "react";
import { useStateContext } from "@/context";
import { motion } from "framer-motion";

const Landing = () => {
  const navigate = useNavigate();
  const { currentUser } = useStateContext();
  const scrollRef = useRef(null);

  const governmentSchemes = [
    {
      id: 1,
      title: "Ayushman Bharat",
      description: "Health insurance for 100 million poor families covering up to ₹5 lakh per family per year",
      imageUrl: "/api/placeholder/200/150",
      websiteUrl: "https://pmjay.gov.in/"
    },
    {
      id: 2,
      title: "National Rural Health Mission",
      description: "Providing accessible, affordable, and quality healthcare to rural populations",
      imageUrl: "/api/placeholder/200/150",
      websiteUrl: "https://nhm.gov.in/"
    },
    {
      id: 3,
      title: "Janani Suraksha Yojana",
      description: "Safe motherhood intervention to reduce maternal and infant mortality",
      imageUrl: "/api/placeholder/200/150",
      websiteUrl: "https://nhm.gov.in/index1.php?lang=1&level=3&sublinkid=841&lid=309"
    },
    {
      id: 4,
      title: "Rashtriya Swasthya Bima Yojana",
      description: "Health insurance scheme for families below poverty line",
      imageUrl: "/api/placeholder/200/150",
      websiteUrl: "https://www.india.gov.in/spotlight/rashtriya-swasthya-bima-yojana"
    },
    {
      id: 5,
      title: "Mission Indradhanush",
      description: "Vaccination program to prevent diseases among children under 2 years",
      imageUrl: "/api/placeholder/200/150",
      websiteUrl: "https://www.nhp.gov.in/mission-indradhanush1_pg"
    },
    {
      id: 6,
      title: "Pradhan Mantri Surakshit Matritva Abhiyan",
      description: "Free health check-ups for pregnant women to reduce maternal mortality",
      imageUrl: "/api/placeholder/200/150",
      websiteUrl: "https://pmsma.nhp.gov.in/"
    },
    {
      id: 7,
      title: "Swachh Bharat Abhiyan",
      description: "Clean India movement to eliminate open defecation and improve sanitation",
      imageUrl: "/api/placeholder/200/150",
      websiteUrl: "https://swachhbharat.mygov.in/"
    }
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const speed = 1; // Adjust for faster/slower scrolling
    let isPaused = false;

    const step = () => {
      if (!isPaused) {
        scrollContainer.scrollLeft += speed;
        scrollAmount += speed;

        if (scrollAmount >= (scrollContainer.scrollWidth - scrollContainer.clientWidth)) {
          scrollContainer.scrollLeft = 0;
          scrollAmount = 0;
        }
      }

      scrollAnimationRef.current = requestAnimationFrame(step);
    };

    const scrollAnimationRef = { current: requestAnimationFrame(step) };

    const handleMouseEnter = () => { isPaused = true; };
    const handleMouseLeave = () => { isPaused = false; };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(scrollAnimationRef.current);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleSchemeClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen">
      <header className="container mx-auto py-6 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-blue-900 font-bold text-2xl">MedGeneX</span>
            <div
              className="rounded-xl m-2 border-white/5"
            >
              <IconHeartHandshake size={40} className="text-blue-400" />
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="#" className="text-gray-500 hover:text-blue-700">
              Home
            </Link>
            <button
              className="text-gray-500 hover:text-blue-700"
              onClick={() => {
                document.querySelector("#scheme")?.scrollIntoView({ behavior: "smooth" });

              }}
            >
              Schemes
            </button>
            <Link to="#" className="text-gray-500 hover:text-blue-700">
              Product
            </Link>
            <Link to="#" className="text-gray-500 hover:text-blue-700">
              About Us
            </Link>
          </nav>
          {!currentUser && <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-3">Register</button>}
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto py-12 px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
              We Are Ready to <br />
              <span className="text-blue-600 mt-1 mb-2">Help Your Health</span> <br />
              Problems
            </h1>
            <p className="text-gray-600 max-w-md">
              MedGeneX 2— a Smart Healthcare Website designed specifically for rural communities.
              MedGeneX offers a remote, low-cost, and preventive healthcare system using symptom-based forms combined with a powerful Machine Learning (ML) model for early diagnosis and guidance.
            </p>
            <button
              className="bg-gradient-to-br from-blue-600/20 to-purple-600 text-white rounded-full px-6 py-4"
              onClick={() => navigate("/dashboard")}
            >
              My Dashboard
            </button>

            <div className="flex space-x-12 pt-6">
              <div>
                <h3 className="text-2xl font-bold text-blue-600">200+</h3>
                <p className="text-gray-500 text-sm">
                  Active
                  <br />
                  Doctor
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-600">15K+</h3>
                <p className="text-gray-500 text-sm">
                  Active
                  <br />
                  User
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-600">50+</h3>
                <p className="text-gray-500 text-sm">
                  Active
                  <br />
                  Pharmacy
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white rounded-full p-2 border-4 border-blue-600 w-80 h-80 md:w-96 md:h-96 mx-auto overflow-hidden">
              <img
                src="src/assets/doctor.jpg"
                alt="Healthcare Professionals"
                className="rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="container mx-auto py-12 px-4">
        <h2 className="text-3xl text-gray-200 font-bold text-center mb-12">
          Our <span className="text-blue-600">Main Services</span> <br />
          Categories
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-blue-600 rounded-xl p-8 text-center">
            <div className="bg-white rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
            </div>
            <h3 className="text-white text-xl font-semibold">Service Category</h3>
          </div>

          <div className="bg-blue-600 rounded-xl p-8 text-center">
            <div className="bg-white rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
            </div>
            <h3 className="text-white text-xl font-semibold">Service Category</h3>
          </div>

          <div className="bg-blue-600 rounded-xl p-8 text-center">
            <div className="bg-white rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
            </div>
            <h3 className="text-white text-xl font-semibold">Service Category</h3>
          </div>
        </div>
      </section>

      {/* Special Services Section */}
      <section className="container mx-auto py-12 px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10 bg-white rounded-full p-2 border-4 border-blue-600 w-80 h-80 md:w-96 md:h-96 mx-auto overflow-hidden">
              <img
                src="/api/placeholder/400/400"
                alt="Doctor"
                className="rounded-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl text-gray-200 font-bold">
              Our <span className="text-blue-600">Special Services</span>
            </h2>
            <p className="text-gray-600 max-w-md">
              In times like today, your health is very important, especially since the number of COVID-19 cases is
              increasing day by day, so we are ready to help you with your health consultation.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="bg-blue-100 rounded-lg p-2 w-12 h-12 flex items-center justify-center mb-2">
                </div>
                <h3 className="font-semibold text-blue-900">Malaria Detection</h3>
                <p className="text-gray-500 text-sm mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="bg-blue-100 rounded-lg p-2 w-12 h-12 flex items-center justify-center mb-2">
                </div>
                <h3 className="font-semibold text-blue-900">Herbal Supplement</h3>
                <p className="text-gray-500 text-sm mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="bg-blue-100 rounded-lg p-2 w-12 h-12 flex items-center justify-center mb-2">
                </div>
                <h3 className="font-semibold text-blue-900">Health Monitoring</h3>
                <p className="text-gray-500 text-sm mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="bg-blue-100 rounded-lg p-2 w-12 h-12 flex items-center justify-center mb-2">
                </div>
                <h3 className="font-semibold text-blue-900">Jaundice Detection</h3>
                <p className="text-gray-500 text-sm mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-12 px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-300">Our Doctors</h3>
            <h2 className="text-3xl text-gray-200 font-bold">
              <span className="text-blue-600">Qualified</span> Doctors
            </h2>
            <p className="text-gray-600 max-w-md">
              Healthcare offered by general doctors and professional and experienced specialist doctors.
            </p>

            <div className="bg-blue-100 rounded-lg p-6 mt-6">
              <div className="mb-2">
                <span className="text-blue-600 text-sm">Orthopedy</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900">
                Dr. James
                <br />
                Wellington
              </h3>
              <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 mt-4">Read More</button>
            </div>

            <button variant="outline" className="border-blue-600 text-blue-600 rounded-full px-6 mt-4">
              View All Doctors
            </button>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white rounded-full p-2 border-4 border-blue-600 w-80 h-80 md:w-96 md:h-96 mx-auto overflow-hidden">
              <img
                src="/api/placeholder/400/400"
                alt="Doctor"
                className="rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Government Schemes Section - Auto-scrolling Horizontal List */}
      <section className="py-16 rounded-3xl bg-gradient-to-r from-blue-900 to-blue-700" id={"scheme"}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            Latest <span className="text-blue-300">Government Schemes</span> for Rural Healthcare
          </h2>
          <p className="text-blue-100 text-center max-w-2xl mx-auto mb-10">
            Stay updated with the latest government initiatives aimed at improving healthcare access and quality in rural areas.
            Click on any scheme to visit the official government website.
          </p>

          {/* Auto-scrolling container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide py-4 gap-6 pb-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Add additional spacing for smooth looping effect */}
            <div className="w-8 flex-shrink-0"></div>

            {governmentSchemes.map((scheme) => (
              <div
                key={scheme.id}
                className="flex-shrink-0 w-72 bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105 hover:shadow-xl cursor-pointer"
                onClick={() => handleSchemeClick(scheme.websiteUrl)}
                role="button"
                aria-label={`Learn more about ${scheme.title}`}
              >
                <div className="h-36 overflow-hidden">
                  <img
                    src={scheme.imageUrl}
                    alt={scheme.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{scheme.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{scheme.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                      Visit Official Site
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Rural Health</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Mirror the first few items to create seamless loop effect */}
            {governmentSchemes.slice(0, 3).map((scheme) => (
              <div
                key={`mirror-${scheme.id}`}
                className="flex-shrink-0 w-72 bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105 hover:shadow-xl cursor-pointer"
                onClick={() => handleSchemeClick(scheme.websiteUrl)}
                role="button"
                aria-label={`Learn more about ${scheme.title}`}
              >
                <div className="h-36 overflow-hidden">
                  <img
                    src={scheme.imageUrl}
                    alt={scheme.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{scheme.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{scheme.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                      Visit Official Site
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Rural Health</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Add additional spacing for smooth looping effect */}
            <div className="w-8 flex-shrink-0"></div>
          </div>

          <div className="text-center mt-8">
            <a
              href="https://www.nhp.gov.in/healthprogramme/national-health-programmes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-blue-700 font-medium rounded-full px-6 py-3 hover:bg-blue-50 transition-colors"
            >
              View All Government Schemes
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
