import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-emerald-600/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <p className="text-gray-400 mb-4">
            © {currentYear} Christopher M. Dove. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
              <FiGithub className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
              <FiLinkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
              <FiTwitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
              <FiMail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}