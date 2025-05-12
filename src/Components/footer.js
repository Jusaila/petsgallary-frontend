import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import { FaPinterest } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-[#F5F5EB]">
      <div className="container mx-auto px-4 flex flex-col items-center space-y-6">
        {/* Logo */}
        <img
          src="/logopng2.png"
          alt="Logo"
          className="h-16 w-16 md:h-[120px] md:w-[120px]"
        />

        {/* Description */}
        <p className="text-sm text-gray-600">
        The Best Pet Shop in Dubai  Where Happy Pets Come First
        </p>

        {/* Social Links */}
        <div className="flex items-center space-x-6">
  <a 
    href="https://www.instagram.com/petsgallerydubai.ae?igsh=MWhicWVwZW90cXFxag==" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-gray-600 hover:text-gray-900 transition-colors"
  >
    <Instagram className="w-5 h-5" />
    <span className="sr-only">Instagram</span>
  </a>
  <a 
    href="https://www.facebook.com/share/1AVJ4GibQ5/" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-gray-600 hover:text-gray-900 transition-colors"
  >
    <Facebook className="w-5 h-5" />
    <span className="sr-only">Facebook</span>
  </a>
  <a 
    // href="https://twitter.com/pawfectpaw" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-gray-600 hover:text-gray-900 transition-colors"
  >
    <Twitter className="w-5 h-5" />
    <span className="sr-only">Twitter</span>
  </a>
  <a 
    // href="https://www.linkedin.com/company/pawfectpaw" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-gray-600 hover:text-gray-900 transition-colors"
  >
    <Linkedin className="w-5 h-5" />
    <span className="sr-only">LinkedIn</span>
  </a>
  <a 
    href="https://in.pinterest.com/petsgallery033/" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-gray-600 hover:text-gray-900 transition-colors"
  >
    <FaPinterest className="w-5 h-5" />
    <span className="sr-only">LinkedIn</span>
  </a>
</div>


        {/* Underline */}
        <div className="w-full border-t border-gray-700"></div>

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          Copyright © {new Date().getFullYear()} Beyond. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
      