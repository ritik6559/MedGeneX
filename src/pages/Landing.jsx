import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IconHeartHandshake } from "@tabler/icons-react";
import React from "react";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className=" min-h-screen">
      {/* Navigation */}
      <header className="container mx-auto py-6 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-blue-900 font-bold text-2xl">MedGeneX</span>
            <div className=" m-2">
              <IconHeartHandshake size={40} color="#1ec070" className=" " />
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="#" className="text-gray-500 hover:text-blue-700">
              Home
            </Link>
            <Link to="#" className="text-gray-500 hover:text-blue-700">
              Services
            </Link>
            <Link to="#" className="text-gray-500 hover:text-blue-700">
              Product
            </Link>
            <Link to="#" className="text-gray-500 hover:text-blue-700">
              About Us
            </Link>
          </nav>
          <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-3">Register</button>
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
              In times like today, your health is very important, especially since the number of COVID-19 cases is
              increasing day by day, so we are ready to help you with your health consultation.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-4">
              Get started
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
                src="src/assets/doctor.png"
                alt="Healthcare Professionals"
                className="rounded-full items-center justify-center object-cover"
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
                <h3 className="font-semibold text-blue-900">Covid-19 Test</h3>
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
                <h3 className="font-semibold text-blue-900">Laboratorium Test</h3>
                <p className="text-gray-500 text-sm mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="bg-blue-100 rounded-lg p-2 w-12 h-12 flex items-center justify-center mb-2">
                </div>
                <h3 className="font-semibold text-blue-900">Menstruation Calendar</h3>
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
    </div>
  );
}

export default Landing;
