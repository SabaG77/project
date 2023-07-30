import { Links } from "../../../globalComponents";
import "../../../css/App.scss";
export const Navbar = ({ langs, language }) => {
  const links = [
    {
      to: "/home",
      name: langs[language].home.title,
    },
    {
      to: "/about-us",
      name: langs[language].aboutus.title,
    },
    {
      to: "/contact",
      name: langs[language].contact.title,
    },
    {
      to: "/products",
      name: langs[language].products.title,
    },
    {
      to: "/sell-product",
      name: langs[language].sellproduct.title,
    },
  ];
  return (
    <nav className="navbar container-md">
      <a href="#" className="logo">
        Shop<span>.ex</span>
      </a>
      <ul className="ul">
        {links.map((link, index) => (
          <Links key={index} to={link.to} name={link.name} />
        ))}
      </ul>
      <div className="burger">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};
