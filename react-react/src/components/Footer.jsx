import React from "react";

export default function Footer() {
  return (
    <footer className="mt-10 py-4">
      <div className="flex justify-center px-4 md:justify-end md:px-6">
        <a
          href="https://wa.me/221777657656"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 rounded-lg bg-green-100 px-4 py-2 font-medium text-green-700 transition-colors duration-300 hover:bg-green-700 hover:text-white md:bg-transparent"
        >
          {/* Icône WhatsApp */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 md:h-6 md:w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20.52 3.48A11.77 11.77 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.61 6.01L0 24l6.17-1.6A11.92 11.92 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 21.5c-1.79 0-3.54-.48-5.06-1.39l-.36-.21-3.66.95.98-3.57-.23-.37A9.45 9.45 0 0 1 2.5 12c0-5.25 4.26-9.5 9.5-9.5s9.5 4.25 9.5 9.5-4.25 9.5-9.5 9.5zm5.24-7.38c-.29-.15-1.71-.85-1.98-.95-.26-.10-.45-.15-.64.15s-.74.95-.9 1.14c-.16.19-.33.21-.62.07-.29-.15-1.22-.45-2.32-1.44-.86-.76-1.44-1.70-1.61-1.99-.16-.29-.02-.45.12-.60.12-.12.29-.33.43-.50.14-.17.19-.29.29-.48.10-.19.05-.36-.02-.51-.07-.15-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49-.16-.01-.35-.01-.54-.01-.19 0-.50.07-.76.36-.26.29-1.00 1-1.00 2.43 0 1.43 1.02 2.82 1.16 3.01.14.19 2.01 3.07 4.87 4.30.68.29 1.21.46 1.62.59.68.22 1.30.19 1.79.12.55-.08 1.71-.70 1.95-1.37.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34z" />
          </svg>
          <span className="text-sm md:text-base">Contactez-nous</span>
        </a>
      </div>
    </footer>
  );
}