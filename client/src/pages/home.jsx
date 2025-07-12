import React from "react";
import HeroSlider from "../components/HeroSlider";
import Footer from "../components/Footer";
import Marquee from "react-fast-marquee";
import {
  CreditCard,
  DollarSign,
  Package,
  AlertTriangle,
  Globe,
} from "lucide-react";

export default function HomePage() {
  const homeSliderImages = [
    "/slide1.jpg",
    "/slide2.jpg",
    "/slide3.png",
    "/slide4.png",
  ];

  const partners = [
    { name: "HBL", image: "/HBL-logo.png", link: "https://www.hbl.com/" },
    { name: "UBL", image: "/UBL.jpg", link: "https://www.ubldigital.com/" },
    {
      name: "Easypaisa",
      image: "/Easypaisa-logo.png",
      link: "https://www.easypaisa.com.pk/",
    },
    {
      name: "Bank Al Habib",
      image: "/al-habib.png",
      link: "https://www.bankalhabib.com/",
    },
    {
      name: "Allied Bank",
      image: "/allied-bank-limited-logo.png",
      link: "https://www.abl.com/",
    },
    {
      name: "Meezan Bank",
      image: "/meezan.png",
      link: "https://www.meezanbank.com/",
    },
    { name: "MCB", image: "/mcb.png", link: "https://www.mcb.com.pk/" },
    {
      name: "Bank Alfalah",
      image: "/alfala.png",
      link: "https://www.bankalfalah.com/",
    },
    {
      name: "Askari Bank",
      image: "/askari.png",
      link: "https://askaribank.com/",
    },
    {
      name: "Jazz Cash",
      image: "/jazzcash.png",
      link: "https://www.jazzcash.com.pk/",
    },
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Top Bar */}
      <div className="bg-gray-800 text-white text-sm px-6 py-2 flex justify-between items-center">
        <div>LPG ORDER NOW</div>
        <div>
          1199, 99021000 <span>info@ssgc.com.pk</span>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-orange-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
        <div className="font-bold text-xl"></div>
        <ul className="flex space-x-6 font-medium">
          <li>Careers</li>
          <li>Services</li>
          <li>Complaints/Feedback</li>
          <li>Pay/View Bills</li>
          <li>Contact Us</li>
        </ul>
      </nav>

      {/* Hero Slider */}
      <HeroSlider images={homeSliderImages} />

      {/* Our Services */}
      <div className=" py-12">
        <h2 className="text-center text-2xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center px-6">
          {[
            { label: "Register for E-Bill", Icon: CreditCard },
            { label: "Gas Tariff / Rates", Icon: DollarSign },
            { label: "Meter Manufacturing Plants", Icon: Package },
            { label: "Defaulters' List", Icon: AlertTriangle },
            { label: "International Activities", Icon: Globe },
          ].map(({ label, Icon }, idx) => (
            <div
              key={idx}
              className="bg-white shadow p-4 rounded-md hover:shadow-lg transition"
            >
              <Icon className="mx-auto text-orange-500" size={40} />
              <h3 className="text-lg font-semibold mt-3">{label}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Citizen Portal Section */}
      <div className="px-6 space-y-4">
        <a
          href="https://www.ssgc.com.pk/web/wp-content/uploads/2025/04/notice_2025.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="bg-orange-500 text-white text-center py-4 rounded-md shadow hover:bg-orange-600 transition w-[1300px] mx-auto">
            <h2 className="text-lg font-bold">REQUEST FOR PROPOSAL</h2>
            <p className="text-sm mt-1">
              Engagement of International Technical Consultants to Evaluate the
              Magnitude of Gas Losses Due to Various Factors
            </p>
          </div>
        </a>

        <a
          href="https://play.google.com/store/apps/details?id=com.govpk.citizensportal"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <img
            src="/PakistanCitizenPortal.png"
            alt="Citizen portal"
            className="w-[1300px] mx-auto"
          />
        </a>
      </div>

      {/* Business Partners */}
      <div className="bg-white py-12 px-10">
      <h2 className="text-center text-2xl font-bold mb-6 mt-10">Our Business Partners</h2>
        <Marquee
          speed={50}
          pauseOnHover={true}
          pauseOnClick={true} 
          gradient={true}
          gradientWidth={80}
        >
          {partners.map((partner, idx) => (
            <a
              key={idx}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-8 inline-block"
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="h-40 object-contain w-auto"
              />
            </a>
          ))}
        </Marquee>
      </div>

      {/* News Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-20">
        <div>
          <h3 className="text-gray-700 font-bold mb-4 text-lg">Recent News</h3>
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="mb-6 bg-white shadow rounded-md overflow-hidden hover:shadow-md transition"
            >
              <div className="flex">
                <img
                  src={`/news${i + 1}.jpg`}
                  alt={`News ${i + 1}`}
                  className="w-40 h-40 object-cover"
                />
                <div className="p-3 flex flex-col justify-between">
                  <div>
                    <h4 className="text-md font-semibold text-gray-800">
                      Title of News {i + 1}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      A short description of the news item goes here.
                    </p>
                  </div>
                  <div className="text-xs text-orange-600 mt-2 font-medium">
                    May {24 + i}, 2025
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-gray-700 font-bold mb-4 text-lg">Latest Ad</h3>
          <img
            src="/ad.png"
            alt="Latest Advertisement"
            className="w-full max-w-md"
          />
        </div>
      </div>

      {/* Focal Persons Section */}
      <div className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-10 text-gray-800">
          Focal Persons & RTI Contact
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Investor Queries / Grievances */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-orange-600 border-b pb-2">
              Focal Persons for Investor Queries / Grievances
            </h3>
            <div className="mb-4">
              <p className="font-medium">Mr. Altaf Jatoi</p>
              <p>Manager Board Secretariat</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:altaf.jatoi@ssgc.com.pk"
                  className="text-blue-600"
                >
                  altaf.jatoi@ssgc.com.pk
                </a>
              </p>
              <p>Phone: 021-99021743</p>
            </div>
            <div>
              <p className="font-medium">Syed Atif Sarwat</p>
              <p>Manager, Company Secretariat</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:atif.sarwat@ssgc.com.pk"
                  className="text-blue-600"
                >
                  atif.sarwat@ssgc.com.pk
                </a>
              </p>
              <p>Phone: 021-99021021</p>
            </div>
          </div>

          {/* RTI Contact */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-orange-600 border-b pb-2">
              Focal Person under Right of Access to Information Act
            </h3>
            <p className="font-medium">Mr. Amir Mumtaz Khan</p>
            <p>General Manager (Coordination)</p>
            <p>Sui Southern Gas Co. Ltd.</p>
            <p>
              Sir Shah Suleman Road,
              <br />
              Gulshan-e-Iqbal, Karachi
            </p>
            <p>Tel: +9221-99224713</p>
            <p>
              Email:{" "}
              <a
                href="mailto:amir.mumtaz@ssgc.com.pk"
                className="text-blue-600"
              >
                amir.mumtaz@ssgc.com.pk
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
