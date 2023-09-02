import { useTranslation } from "react-i18next";

import frontendImg from "../../assets/images/front-end.png";
import backendImg from "../../assets/images/backend.png";
import uiImg from "../../assets/images/design.png";
import appImg from "../../assets/images/apps.png";

const Services = () => {
  // eslint-disable-next-line no-unused-vars
  const [t, i18n] = useTranslation("global");

  return (
    <section id="services">
      <div className="container lg:pt-5">
        <div className="text-center">
          <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
            {t("services.contentGreetings")}
          </h2>
          <p className="lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            obcaecati reiciendis exercitationem culpa architecto quibusdam
            quaerat consequuntur error esse eius hic corrupti, ab, delectus, cum
            molestiae quos. Voluptatibus, ipsam labore! Quos dignissimos ad
            debitis, necessitatibus quo sunt. Maiores corporis, libero sed
            tenetur aperiam asperiores quae ad eaque delectus sit at! Odit
            voluptatum eius impedit dolorem atque fugit incidunt ex! Nemo.
            Aliquam, minus molestiae exercitationem sit doloremque obcaecati
            eum. Totam, libero necessitatibus odio sit officia possimus
            recusandae nisi quaerat iure dicta cupiditate culpa esse minus
            illum! Nam corrupti temporibus voluptate maiores.
          </p>
        </div>
        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              {/* ======  vertical line running through the middle  ====== */}
              <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform -translate-x-1/2"></div>
              {/* ======  left card start  ====== */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                          FrontEnd Develoment
                        </h3>
                        <p className="text-[15px] text-black group-hover:text-white group-hover:font-[500] leading-7">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Nihil rem tempora repudiandae. Unde quia iure
                          deleniti magnam rerum minima non? Animi delectus
                          nesciunt facilis, assumenda iusto maxime doloremque
                          cum esse.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={frontendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
              {/* ======  left card end  ====== */}
              {/* ======  right card start  ====== */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-delay="50"
                        data-aos-duration="1300"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                          BackEnd Develoment
                        </h3>
                        <p className="text-[15px] text-black group-hover:text-white group-hover:font-[500] leading-7">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Nihil rem tempora repudiandae. Unde quia iure
                          deleniti magnam rerum minima non? Animi delectus
                          nesciunt facilis, assumenda iusto maxime doloremque
                          cum esse.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={backendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
              {/* ======  right card end  ====== */}
              {/* ======  left card start  ====== */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-delay="100"
                        data-aos-duration="1400"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                          UI/UX Design
                        </h3>
                        <p className="text-[15px] text-black group-hover:text-white group-hover:font-[500] leading-7">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Nihil rem tempora repudiandae. Unde quia iure
                          deleniti magnam rerum minima non? Animi delectus
                          nesciunt facilis, assumenda iusto maxime doloremque
                          cum esse.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={uiImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
              {/* ======  left card end  ====== */}
              {/* ======  right card start  ====== */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-duration="1300"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                          Apps Develoment
                        </h3>
                        <p className="text-[15px] text-black group-hover:text-white group-hover:font-[500] leading-7">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Nihil rem tempora repudiandae. Unde quia iure
                          deleniti magnam rerum minima non? Animi delectus
                          nesciunt facilis, assumenda iusto maxime doloremque
                          cum esse.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={appImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
              {/* ======  right card end  ====== */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
