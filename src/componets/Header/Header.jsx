import { useTranslation } from "react-i18next";

import mexFlag from "../../assets/images/mexico.png";
import usaFlag from "../../assets/images/usa.png";

const Header = () => {
  const [t, i18n] = useTranslation("global");

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className="w-full h-[80px] leading-[80px] flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* ====== logo start ====== */}
          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center">
              L
            </span>{" "}
            <div className="leading-[20px]">
              <h2 className="text-xl text-smallTextColor font-[700]">
                Lekabbel
              </h2>
              <p className="text-smallTextColor text-[14px] font-[500]">
                {t("header.logoSubTitle")}
              </p>
            </div>
          </div>
          {/* ====== logo end ====== */}
          {/* ====== menu start ====== */}
          <div className="menu">
            <ul className="flex items-center gap-10">
              <li>
                <a className="text-smallTextColor font-[600]" href="#about">
                  {t("header.menuAbout")}
                </a>
              </li>
              <li>
                <a className="text-smallTextColor font-[600]" href="#services">
                  {t("header.menuServices")}
                </a>
              </li>
              <li>
                <a className="text-smallTextColor font-[600]" href="#porfolio">
                  {t("header.menuPortfolio")}
                </a>
              </li>
              <li>
                <a className="text-smallTextColor font-[600]" href="#contact">
                  {t("header.menuContact")}
                </a>
              </li>
              <li>
                <img
                  className="flex items-center gap-2 py-1 px-4 rounded-[8px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300 h-11 w-22 cursor-pointer"
                  onClick={() => handleChangeLanguage("en")}
                  src={usaFlag}
                  alt=""
                />
              </li>
              <li>
                <img
                  className="flex items-center gap-2 py-1 px-4 rounded-[8px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300 h-11 w-22 cursor-pointer"
                  onClick={() => handleChangeLanguage("es")}
                  src={mexFlag}
                  alt=""
                />
              </li>
            </ul>
          </div>
          {/* ====== menu end ====== */}
          {/* ====== menu right start ====== */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300">
              <i className="ri-send-plane-line"></i>
              {t("header.menuTellMe")}
            </button>
            <span className="text-2xl text-smallTextColor md:hidden cursor-pointer">
              <i className="ri-menu-line"></i>
            </span>
          </div>
          {/* ====== menu right end ====== */}
        </div>
      </div>
    </header>
  );
};

export default Header;
