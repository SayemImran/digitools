import { TbBrandInstagramFilled } from "react-icons/tb";
import { FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";

const footerLinks = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Templates", "Integrations"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers", "Press"],
  },
  {
    title: "Resources",
    links: ["Documentation", "Help Center", "Community", "Contact"],
  },
];

const Footer = () => {
  const socialLinks = [
    { icon: <TbBrandInstagramFilled />, href: "#", label: "Instagram" },
    { icon: <FaSquareFacebook />, href: "#", label: "Facebook" },
    { icon: <FaSquareXTwitter />, href: "#", label: "X" },
  ];

  return (
    <footer className="bg-gray-950 text-gray-400 border-t border-violet-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-1">
            <h2 className="text-white text-2xl font-extrabold tracking-tight mb-4">
              DigiTools
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {footerLinks.map((item) => (
            <div key={item.title}>
              <h3 className="text-white font-semibold text-sm mb-4">
                {item.title}
              </h3>
              <ul className="space-y-3">
                {item.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-150"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-white font-semibold text-sm mb-4">
              Social Links
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-150 text-2xl"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © 2026 Digitools. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-gray-500 hover:text-white transition-colors duration-150"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
