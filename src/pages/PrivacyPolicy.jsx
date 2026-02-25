import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  useEffect(() => {
    const currentLang = i18n.language;
    const direction = currentLang === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", direction);
    document.documentElement.setAttribute("lang", currentLang);
  }, [i18n.language]);

  return (
    <>
      <div className="privacy-bg from-top">
        <Header />

        <div className="heading-policy">
          <h1>{t("privacy_policy")}</h1>
        </div>
      </div>

      <div className="container mt-5">
        <div className="privacy-heading">
          <h1>{t("privacy_policy")}</h1>
          <p>{t("privacy_policies_para_1")}</p>
          <p className="mt-4 mb-5">{t("privacy_policies_para_2")}</p>

          <h3 className="mt-5">{t("privacy_policy_info_heading")}</h3>
          <p>{t("privacy_policies_para_3")}</p>
          <p>{t("privacy_policies_para_4")}</p>

          <h3 className="mt-5">{t("privacy_policy_info_heading_2")}</h3>
          <p>{t("privacy_policies_para_6")}</p>
          <p>{t("privacy_policies_para_7")}</p>
          <p>{t("privacy_policies_para_8")}</p>
          <p>{t("privacy_policies_para_9")}</p>

          <h3 className="mt-5">{t("privacy_policy_info_heading_3")}</h3>
          <p>{t("privacy_policies_para_10")}</p>
          <p>{t("privacy_policies_para_11")}</p>
          <p>{t("privacy_policies_para_12")}</p>
          <p>{t("privacy_policies_para_13")}</p>

          <h3 className="mt-5">{t("privacy_policy_info_heading_4")}</h3>
          <p>{t("privacy_policies_para_14")}</p>
          <p>{t("privacy_policies_para_15")}</p>
          <p>{t("privacy_policies_para_16")}</p>

          <h3 className="mt-5">{t("privacy_policy_info_heading_5")}</h3>
          <p>{t("privacy_policies_para_17")}</p>
          <p>{t("privacy_policies_para_18")}</p>
          <p>{t("privacy_policies_para_19")}</p>

          <h3 className="mt-5">{t("privacy_policy_info_heading_6")}</h3>
          <p>{t("privacy_policies_para_20")}</p>
          <p>{t("privacy_policies_para_21")}</p>
          <p>{t("privacy_policies_para_22")}</p>
          <p>{t("privacy_policies_para_23")}</p>
          <p>{t("privacy_policies_para_24")}</p>
          <p>{t("privacy_policies_para_25")}</p>
          <p>{t("privacy_policies_para_26")}</p>

        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
