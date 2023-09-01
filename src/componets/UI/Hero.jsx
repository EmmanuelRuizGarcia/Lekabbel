import { useTranslation } from "react-i18next";

import heroImg from "../../assets/images/hero.svg";
import CountUp from "react-countup";

const Hero = () => {
  // eslint-disable-next-line no-unused-vars
  const [t, i18n] = useTranslation("global");

  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          {/* ======  Hero left content start  ====== */}
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600] text-[16px]"
            >
              {t("hero.leftContentGreetings")}
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor text-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
            >
              {t("hero.leftContentIAm")}
              <br />
              {t("hero.leftContentKindOfMagic")}
            </h1>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1800"
              className="flex items-center gap-6 mt-7"
            >
              <a className="flex items-center gap-2" href="#contact">
                <button className="bg-primaryColor text-white font-[500] py-2 px-4 rounded-[8px] hover:font-[500] hover:bg-smallTextColor hover:text-white ease-in duration-700">
                  <i className="ri-mail-line"></i>
                  {t("hero.leftContentHireMe")}
                </button>
              </a>
              <a
                className="text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor"
                href="#portfolio"
              >
                {t("hero.leftContentSeePortfolio")}
              </a>
            </div>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-2 text-headingColor mt-14 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10"
            >
              <span>
                <i className="ri-command-line"></i>
              </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              odio sint quo. Distinctio expedita, vitae nisi illum debitis
              architecto ab non fugiat maxime tempora obcaecati temporibus eius
              accusantium error dolores?
            </p>
            <div className="flex items-center gap-9 mt-14">
              <span className="text-smallTextColor text-[15px] font-[600]">
                {t("hero.leftContentFollowMe")}
              </span>
              <span>
                <a
                  href="#facebook"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i className="ri-facebook-circle-fill"></i>
                </a>
              </span>
              <span>
                <a
                  href="#instagram"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i className="ri-instagram-fill"></i>
                </a>
              </span>
              <span>
                <a
                  href="#youtube"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i className="ri-youtube-fill"></i>
                </a>
              </span>
              <span>
                <a
                  href="#whatsapp"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i className="ri-whatsapp-fill"></i>
                </a>
              </span>
            </div>
          </div>
          {/* ======  Hero left content end  ====== */}
          {/* ======  Hero Image start  ====== */}
          <div className="basis-1/2 mt-10 sm:mt-0">
            <figure className="flex items-center justify-center">
              <img src={heroImg} alt="" />
            </figure>
          </div>
          {/* ======  Hero Image end  ====== */}
          {/* ======  Hero Content Right start  ====== */}
          <div className="basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={6} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                {t("hero.rightContentYearsOfExperience")}
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={100} duration={2} suffix="%" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                {t("hero.rightContentSuccessRate")}
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={150} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                {t("hero.rightContentHappyCustomers")}
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={249} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                {t("hero.rightContentCompletedProjects")}
              </h4>
            </div>
          </div>
          {/* ======  Hero Content Right end  ====== */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
