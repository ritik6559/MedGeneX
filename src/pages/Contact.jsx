import { useState } from 'react';

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    image: "/api/placeholder/300/300",
    location: "MedGeneX Center, Building A",
    contactNumber: "+1 (555) 123-4567",
    email: "s.johnson@medgenex.com",
    experience: "15+ years",
    description: "Specializing in cardiovascular health and preventative care",
    education: "Harvard Medical School",
    availability: "Mon, Wed, Fri"
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Neurologist",
    image: "/api/placeholder/300/300",
    location: "MedGeneX Center, Building B",
    contactNumber: "+1 (555) 234-5678",
    email: "m.chen@medgenex.com",
    experience: "12+ years",
    description: "Expert in neurological disorders and treatments",
    education: "Johns Hopkins University",
    availability: "Tue, Thu, Sat"
  },
  {
    id: 3,
    name: "Dr. Amara Patel",
    specialty: "Oncologist",
    image: "/api/placeholder/300/300",
    location: "MedGeneX Center, Building A",
    contactNumber: "+1 (555) 345-6789",
    email: "a.patel@medgenex.com",
    experience: "18+ years",
    description: "Specialized in cancer treatment and research",
    education: "Stanford University School of Medicine",
    availability: "Mon, Tue, Thu"
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialty: "Pediatrician",
    image: "/api/placeholder/300/300",
    location: "MedGeneX Center, Building C",
    contactNumber: "+1 (555) 456-7890",
    email: "j.wilson@medgenex.com",
    experience: "10+ years",
    description: "Dedicated to children's health and development",
    education: "Yale School of Medicine",
    availability: "Wed, Fri, Sat"
  },
];

const LocationIcon = () => (
  <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 15.5C18.8 15.5 17.5 15.3 16.4 14.9C16.3 14.9 16.2 14.9 16.1 14.9C15.8 14.9 15.6 15 15.4 15.2L13.2 17.4C10.4 15.9 8 13.6 6.6 10.8L8.8 8.6C9.1 8.3 9.2 7.9 9 7.6C8.7 6.5 8.5 5.2 8.5 4C8.5 3.5 8 3 7.5 3H4C3.5 3 3 3.5 3 4C3 13.4 10.6 21 20 21C20.5 21 21 20.5 21 20V16.5C21 16 20.5 15.5 20 15.5Z" fill="currentColor" />
  </svg>
);

const EmailIcon = () => (
  <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor" />
  </svg>
);

const ExperienceIcon = () => (
  <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="currentColor" />
    <path d="M12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" fill="currentColor" />
  </svg>
);

const EducationIcon = () => (
  <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18ZM12 3L1 9L12 15L21 10.09V17H23V9L12 3Z" fill="currentColor" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 4H18V2H16V4H8V2H6V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V10H19V20ZM19 8H5V6H19V8ZM9 14H7V12H9V14ZM13 14H11V12H13V14ZM17 14H15V12H17V14ZM9 18H7V16H9V18ZM13 18H11V16H13V18ZM17 18H15V16H17V18Z" fill="currentColor" />
  </svg>
);

const DoctorCard = ({ doctor }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-lg h-96 w-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-full w-full overflow-hidden absolute inset-0">
        <img
          src={doctor.image}
          alt={`Dr. ${doctor.name}`}
          className={`w-full h-full object-cover transition-all duration-500 ${isHovered ? 'opacity-10' : 'opacity-100'}`}
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-900 to-transparent">
        <h3 className="text-xl font-bold text-blue-400">{doctor.name}</h3>
        <p className="text-gray-300">{doctor.specialty}</p>
      </div>

      <div
        className={`absolute inset-0 bg-gray-900 bg-opacity-80 transition-all duration-500 overflow-auto p-5 ${
          isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="space-y-3">

          <div className="flex items-center gap-3 text-gray-300">
            <LocationIcon />
            <span>{doctor.location}</span>
          </div>

          <div className="flex items-center gap-3 text-gray-300">
            <PhoneIcon />
            <span>{doctor.contactNumber}</span>
          </div>

          <div className="flex items-center gap-3 text-gray-300">
            <EmailIcon />
            <span>{doctor.email}</span>
          </div>

          <div className="flex items-center gap-3 text-gray-300">
            <ExperienceIcon />
            <span>{doctor.experience}</span>
          </div>

          <div className="flex items-center gap-3 text-gray-300">
            <EducationIcon />
            <span>{doctor.education}</span>
          </div>

          <div className="flex items-center gap-3 text-gray-300">
            <CalendarIcon />
            <span>{doctor.availability}</span>
          </div>

          <p className="text-gray-400 italic mt-2">{doctor.description}</p>

          <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105">
            Schedule Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default function DoctorCards() {
  return (
    <div className=" text-white p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Specialists</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
}
