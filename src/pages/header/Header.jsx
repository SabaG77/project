import { useContext } from "react";
import { NavBar } from "./components";
import { Buttons } from "../../globalComponents";
import { LanguageContext } from "../../services";
import { FlagKA } from "../../globalComponents";
import { FlagEN } from "../../globalComponents";
export const Header = () => {
  const { language, changeLanguage, langs } = useContext(LanguageContext);
  return (
    <header className="header">
      <div className="language-menu">
        <Buttons
          className="btn"
          click={() => changeLanguage("en")}
          name={<FlagEN />}
        />

        <Buttons
          className="btn"
          click={() => changeLanguage("ka")}
          name={<FlagKA />}
        />
      </div>
      <NavBar langs={langs} language={language} />
    </header>
  );
};
