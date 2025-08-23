import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-green-400 mb-4">
              JB VISION
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner in construction and infrastructure
              development with over 15 years of experience.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/services" legacyBehavior>
                  <a className="hover:text-green-400 transition-colors">
                    Road Construction
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services" legacyBehavior>
                  <a className="hover:text-green-400 transition-colors">
                    Building Construction
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services" legacyBehavior>
                  <a className="hover:text-green-400 transition-colors">
                    Bridge Construction
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services" legacyBehavior>
                  <a className="hover:text-green-400 transition-colors">
                    Transportation
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about" legacyBehavior>
                  <a className="hover:text-green-400 transition-colors">
                    About Us
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/projects" legacyBehavior>
                  <a className="hover:text-green-400 transition-colors">
                    Our Projects
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/blog" legacyBehavior>
                  <a className="hover:text-green-400 transition-colors">Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/contact" legacyBehavior>
                  <a className="hover:text-green-400 transition-colors">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>123 Construction Ave</p>
              <p>City, State 12345</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Email: info@jbvision.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 JB Vision. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
