import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1a191e] text-white py-8">
      <div className="mx-auto px-6">
        {/* Separator Line */}
        <div className="border-t border-gray-600 opacity-50 mb-6"></div>

        <div className="flex flex-col sm:flex-row items-center justify-between">
          {/* Left Section - Branding & Resume Button */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            {/* Branding */}
            <a
              href="/"
              className="text-lg font-semibold hover:text-[#ff9720] transition-colors"
            >
              Anzhelika Kostyuk
            </a>

            {/* Resume Button */}
            <a
              href="/resume.pdf" // Update with actual resume file path
              download
              className="bg-[#ff9720] text-black px-5 py-2 text-sm font-medium rounded-md hover:bg-[#e6891f] transition-colors"
            >
              Download Resume
            </a>
          </div>

          {/* Right Section - Social Icons */}
          <div className="flex gap-4 mt-4 sm:mt-0">
            <SocialIcon
              url="https://github.com/A-coderr"
              bgColor="transparent"
              fgColor="white"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="http://www.linkedin.com/in/anzhelika-kostyuk-a2b388194"
              bgColor="transparent"
              fgColor="white"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="https://www.instagram.com/a_akcio/?hl=en"
              bgColor="transparent"
              fgColor="white"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="https://www.facebook.com/profile.php?id=100011369881132"
              bgColor="transparent"
              fgColor="white"
              style={{ height: 35, width: 35 }}
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-neutral-400 mt-6">
          © {new Date().getFullYear()} Anzhelika Kostyuk. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
