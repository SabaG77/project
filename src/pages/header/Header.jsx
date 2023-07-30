import { useContext } from "react";
import { Navbar } from "./components";
import { Buttons } from "../../globalComponents";
import { LanguageContext } from "../../services";
import { FlagKA } from "../../globalComponents";
import { FlagEN } from "../../globalComponents";
export const Header = () => {
  const { language, changeLanguage, langs } = useContext(LanguageContext);
  return (
    <header className="header">
      <div className="language-menu">
        <Buttons click={() => changeLanguage("en")} name={<FlagEN />} />

        <Buttons click={() => changeLanguage("ka")} name={<FlagKA />} />
      </div>
      <Navbar langs={langs} language={language} />
    </header>
  );
};
