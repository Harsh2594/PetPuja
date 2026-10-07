import React from "react";
import { APP_STORE, GOOGLE_STORE, LOGO_URL } from "../utils/constants";
import google from "../../assets/google.png";
import apple from "../../assets/Apple.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 mt-10">
      <div className="max-w-6xl mx-auto px-8 py-12">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <img src={LOGO_URL} className="w-40" alt="PetPuja Logo" />

            <p className="mt-4">© 2026 PetPuja Limited</p>
          </div>
          {/* Company */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-5">Company</h3>

            <ul className="space-y-4">
              <li>About Us</li>
              <li>PetPuja Corporate</li>
              <li>Careers</li>
              <li>Team</li>
              <li>PetPuja One</li>
              <li>PetPuja Instamart</li>
            </ul>
          </div>
          {/* Contact + Legal */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-5">Contact us</h3>

            <ul className="space-y-4">
              <li>Help & Support</li>
              <li>Partner With Us</li>
              <li>Ride With Us</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-5">Legal</h3>

            <ul className="space-y-4">
              <li>Terms & Conditions</li>
              <li>Cookie Policy</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          {/* Available + Life */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-5">
              Available in:
            </h3>

            <ul className="space-y-4">
              <li>Bangalore</li>
              <li>Gurgaon</li>
              <li>Hyderabad</li>
              <li>Delhi</li>
              <li>Mumbai</li>
              <li>Pune</li>
            </ul>

            <select className="mt-5 border border-gray-300 rounded-lg px-4 py-2 bg-transparent">
              <option>685 cities</option>
            </select>
          </div>
        </div>

        {/* Life + Social */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-10">
          <div className="md:col-start-4">
            <h3 className="text-xl font-bold text-gray-900 mb-5">
              Life at PetPuja
            </h3>

            <ul className="space-y-4">
              <li>Explore With PetPuja</li>
              <li>PetPuja News</li>
              <li>Snackables</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-5">
              Social Links
            </h3>

            <div className="flex gap-5 text-xl">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                in
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ◎
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                f
              </a>

              <a
                href="https://www.pinterest.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                p
              </a>

              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                𝕏
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-400 mt-12"></div>

        {/* App Download */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-10">
          <h2 className="text-2xl font-bold text-gray-700">
            For better experience, download the PetPuja app now
          </h2>

          <div className="flex gap-4">
            <img
              src={APP_STORE}
              alt="Download on App Store"
              className="w-44 cursor-pointer"
            />

            <img
              src={GOOGLE_STORE}
              alt="Get it on Google Play"
              className="w-44 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
