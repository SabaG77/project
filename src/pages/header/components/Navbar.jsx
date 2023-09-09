import { Links } from "../../../globalComponents";

export const NavBar = ({ langs, language }) => {
  const links = [
    {
      to: "/home",
      name: langs[language].home.title,
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
    {
      to: "/favorites",
      name: "",
      icon: "favorites",
    },
    {
      to: "/shopping-cart",
      name: "",
      icon: "cart",
    },
  ];
  return (
    <nav className="navbar">
      <Links to={"/home"} name="Shop.Ex" className="logo" />
      <ul className="ul">
        {links.map((link, index) => (
          <Links key={index} to={link.to} name={link.name} icon={link.icon} />
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
