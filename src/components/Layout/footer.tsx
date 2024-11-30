import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
        {/* Logo and Description */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-xl font-bold">MobileMart</h2>
          <p className="text-sm text-gray-400">
            Your one-stop shop for the latest mobile phones and accessories.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 text-sm text-gray-400">
          <a href="/about" className="hover:text-yellow-300">
            About Us
          </a>
          <a href="/contact" className="hover:text-yellow-300">
            Contact
          </a>
          <a href="/privacy" className="hover:text-yellow-300">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-yellow-300">
            Terms of Service
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .732.592 1.324 1.325 1.324h11.495v-9.284h-3.125v-3.622h3.125v-2.672c0-3.1 1.894-4.788 4.658-4.788 1.325 0 2.462.098 2.794.142v3.24l-1.917.001c-1.504 0-1.794.714-1.794 1.76v2.316h3.588l-.467 3.622h-3.121v9.283h6.125c.732 0 1.325-.592 1.325-1.324v-21.351c0-.733-.593-1.325-1.325-1.325z" />
            </svg>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557a9.822 9.822 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.555-2.005.96-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482c-4.086-.205-7.713-2.165-10.141-5.144a4.822 4.822 0 0 0-.664 2.475c0 1.708.869 3.216 2.188 4.099a4.93 4.93 0 0 1-2.229-.616v.061a4.924 4.924 0 0 0 3.946 4.827 4.935 4.935 0 0 1-2.224.085 4.932 4.932 0 0 0 4.604 3.417 9.868 9.868 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.951 13.951 0 0 0 7.557 2.212c9.054 0 14.002-7.496 14.002-13.986 0-.213-.005-.426-.014-.637a10.012 10.012 0 0 0 2.457-2.548z" />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-2.136 0-2.426.008-3.276.048-.849.04-1.417.176-1.92.375-.518.204-.96.488-1.391.919-.431.431-.715.873-.919 1.391-.199.503-.335 1.071-.375 1.92-.04.85-.048 1.14-.048 3.276s.008 2.426.048 3.276c.04.849.176 1.417.375 1.92.204.518.488.96.919 1.391.431.431.873.715 1.391.919.503.199 1.071.335 1.92.375.85.04 1.14.048 3.276.048s2.426-.008 3.276-.048c.849-.04 1.417-.176 1.92-.375.518-.204.96-.488 1.391-.919.431-.431.715-.873.919-1.391.199-.503.335-1.071.375-1.92.04-.85.048-1.14.048-3.276s-.008-2.426-.048-3.276c-.04-.849-.176-1.417-.375-1.92-.204-.518-.488-.96-.919-1.391-.431-.431-.873-.715-1.391-.919-.503-.199-1.071-.335-1.92-.375-.85-.04-1.14-.048-3.276-.048zm0 5.838c3.401 0 6.162 2.761 6.162 6.162s-2.761 6.162-6.162 6.162-6.162-2.761-6.162-6.162 2.761-6.162 6.162-6.162zm0 10.324c2.293 0 4.162-1.869 4.162-4.162s-1.869-4.162-4.162-4.162-4.162 1.869-4.162 4.162 1.869 4.162 4.162 4.162zm6.406-10.845c0 .796-.646 1.442-1.442 1.442s-1.442-.646-1.442-1.442c0-.796.646-1.442 1.442-1.442s1.442.646 1.442 1.442z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="bg-gray-700 text-gray-400 text-center py-3">
        © 2024 MobileMart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
