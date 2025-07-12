import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white px-6 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li>About Us</li>
            <li>Financial Highlights</li>
            <li>Infrastructure</li>
            <li>Customer Management</li>
            <li>Bill Payment Options</li>
            <li>Complaints/Feedback</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold mb-2">Contact Information</h4>
          <p className="text-sm">
            Main Office<br />
            ST-4/B, Block 14, Sir Shah Suleman Road,<br />
            Gulshan-e-Iqbal, Karachi.
          </p>
          <p className="text-sm mt-2">1199, 99021000 <br /> info@ssgc.com.pk</p>
        </div>

        {/* Map */}
        <div>
          <h4 className="font-bold mb-2">Find Us</h4>
          <iframe
            title="SSGC Head Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.2210811157116!2d67.07090217527435!3d24.857888577923616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e8042b2d1e7%3A0x31061a9c7e7f2d94!2sSSGC%20Head%20Office!5e0!3m2!1sen!2s!4v1718190000000!5m2!1sen!2s"
            width="100%"
            height="150"
            className="rounded"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="text-center mt-8 text-xs text-gray-400">
        Copyright © 2025 Sui Southern Gas Company Limited.
      </div>
    </footer>
  );
}
