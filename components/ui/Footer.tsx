import { Mail, MapPin, Phone } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neobyte-navy text-white pt-16 md:pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Box */}
        <div className="bg-neobyte-teal rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 mb-14 md:mb-16 lg:mb-20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
          <div className="relative z-10 md:w-1/2">
            <h3 className="text-xl md:text-2xl font-bold text-neobyte-navy mb-2">
              Subscribe to our Newsletter
            </h3>
            <p className="text-neobyte-navy/80">
              Stay updated with the latest tech trends and agency news.
            </p>
          </div>
          <div className="relative z-10 md:w-1/2 w-full">
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg text-slate-800 focus:outline-none"
              />
              <button className="bg-neobyte-navy text-white px-6 py-3 rounded-lg font-bold hover:bg-slate-800 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
          <div className="col-span-1 md:col-span-1">
            <a
              href="#"
              className="text-3xl font-extrabold tracking-tighter text-white mb-6 block"
            >
              Neo<span className="text-neobyte-teal">byte</span>.
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              We build digital experiences that matter. From startup to
              enterprise, we are your growth partners.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-neobyte-teal transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-neobyte-teal transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-neobyte-teal transition-colors"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-neobyte-teal transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-neobyte-teal transition-colors"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-neobyte-teal transition-colors"
                >
                  Mobile Apps
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-neobyte-teal transition-colors"
                >
                  UI/UX Design
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-neobyte-teal transition-colors"
                >
                  Marketing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> hello@neobyte.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> +1 (555) 000-0000
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Bangkok, Thailand
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; 2024 Neobyte Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
