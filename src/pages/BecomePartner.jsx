import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import ImageDropzone from "../components/ImageDropzone.jsx";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import Select from "react-select";

import { useTranslation } from "react-i18next";

import ApiService from "../services/ApiService";

const Partner = () => {
  const [isLoader, setIsLoader] = useState(false);
  const [files, setFiles] = useState(null);
  const [types, setTypes] = useState([]);
  const [isLoadingTypes, setIsLoadingTypes] = useState(false);

   const { t, i18n } = useTranslation();

  const [formData, setFormData] = useState({
    owner_name: "",
    email: "",
    phone: "",
    role: "",
    business_name: "",
    business_email: "",
    business_phone: "",
    address: "",
    type: "",
    website: "",
    document: null,
    trade_license: "No",
    files: [],
  });

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const fetchTypes = async () => {
    setIsLoadingTypes(true);
    try {
      const response = await ApiService.request({
        method: "GET",
        url: "/getTypes",
      });

      console.log("API response:", response.data);
      const data =response.data;
      if (data?.status === true) {
        const formattedTypes = data.data.types.map((type) => ({
          value: type.id,
          label: type.title,
        }));
        setTypes(formattedTypes);
      } else {
        toast.error(response.data?.message || "Failed to load business types");
      }
    } catch (error) {
      console.error("Error fetching types:", error);
      toast.error("Failed to load business types");
    } finally {
      setIsLoadingTypes(false);
    }
  };

  useEffect(() => {
    fetchTypes();
  }, []);



  const emptyForm = () => {
    setFormData({
      owner_name: "",
      email: "",
      phone: "",
      role: "",
      business_name: "",
      business_email: "",
      business_phone: "",
      address: "",
      type: "",
      website: "",
      document: null,
      trade_license: "",
      files: [],
    });
    setFiles(null);
  };

  useEffect(() => {
    const currentLang = i18n.language;
    const direction = currentLang === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", direction);
    document.documentElement.setAttribute("lang", currentLang);
  }, [i18n.language]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoader(true);
    try {
      const formDataToSend = new FormData();

      console.log(files);

      // Append regular fields
      for (const key in formData) {
        if (key !== "files") {
          formDataToSend.append(key, formData[key]);
        }
      }

    
      // Append files from dropzone
      if (files && files.length > 0) {
        files.forEach((file) => {
          formDataToSend.append("files[]", file);
        });
      } else {
        formDataToSend.append("files[]", null);
      }

      const response = await ApiService.request({
        method: "POST",
        url: "/becomePartner",
        data: formDataToSend,
         headers: {
           "Content-Type": "multipart/form-data",
         },
      });
     

       console.log("Sending data:", formDataToSend);
       console.log("Received response:", response.data);

       if (response.data.status) {
        console.log("API response:", response.data);
         Swal.fire({
           icon: "success",
           title: "Form Submitted!",
           text: response.data.message,
           confirmButtonText: "OK",
           confirmButtonColor: "#34b35c",
         });
        emptyForm();
      } else {
        Swal.fire({
          icon: "error",
          title: "Error Occurred!",
          text: "Unable to submit contact query. Write email manually to support@lastorder.com",
          confirmButtonText: "OK",
          confirmButtonColor: "#34b35c",
        });
        toast.error(response.data.message);
       }
    } catch (error) {
      console.error("Form submission failed:", error);
    } finally {
      setIsLoader(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const updateOldFiles = (newOldFiles) => {
    setFormData({ ...formData, old_files: newOldFiles });
  };


  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: "10px",
      padding: "5px 10px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      borderColor: "#ccc",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#888",
    }),
  };


  return (
    <>
      <div className="privacy-bg from-top">
        <Header />
        <div className="heading-policy text-center py-5">
          <h1>{t("become_partner")}</h1>
        </div>
      </div>

      <div className="container mt-5">
        <div className="partner-heading">
          <div className="partner-txt">
            <h3>{t("reg_business")}</h3>
            <p> {t("partner_platform")}</p>
          </div>

          <div className="container mt-5">
            <form onSubmit={handleSubmit}>
              {/* Business Information */}
              <h5 className="mb-3">{t("contact_info")}</h5>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder={t("business_name")}
                    name="business_name"
                    value={formData.business_name}
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6 mb-3 position-relative">
                  <Select
                    options={types}
                    isLoading={isLoadingTypes}
                    onChange={(selectedOption) =>
                      setFormData({ ...formData, type: selectedOption.label })
                    }
                    placeholder={
                      isLoadingTypes ? t("loading_types") : t("business_type")
                    }
                    className="custom-react-select"
                    styles={customStyles}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder={t("business_address")}
                    name="address"
                    value={formData.address}
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder={t("business_number")}
                    name="business_phone"
                    value={formData.business_phone}
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder={t("business_email")}
                    name="business_email"
                    value={formData.business_email}
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder={t("business_website")}
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Personal Information */}
              <h5 className="mb-3 mt-4">{t("personal_info")}</h5>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder={t("personal_name")}
                    name="owner_name"
                    required
                    onChange={handleChange}
                    value={formData.owner_name}
                  />
                </div>
                {/* <div className="col-md-6 mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder={t("personal_name")}
                    name="email"
                    required
                    onChange={handleChange}
                    value={formData.email}
                  />
                </div> */}
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder={t("personal_title")}
                    name="role"
                    required
                    onChange={handleChange}
                    value={formData.role}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder={t("personal_number")}
                    name="phone"
                    required
                    onChange={handleChange}
                    value={formData.phone}
                  />
                </div>
              </div>

              {/* Trade License */}
              <div className="row mt-5">
                <div className="col-md-6 order-2 order-md-1">
                  <button
                    type="submit"
                    className="btn w-100 regBtn"
                    disabled={isLoader}
                  >
                    {isLoader ? (
                      <div className="spinner-grow" role="status">
                        <span className="sr-only">{t("registering")}</span>
                      </div>
                    ) : (
                      <p className="text-white mb-0">{t("register")}</p>
                    )}
                  </button>

                  {/* <p
                    className="mt-3 text-secondary"
                    style={{ fontSize: "14px" }}
                  >
                    Copyright Site Protection <br />
                    <a href="#" className="text-dark mx-1 fw-bold">
                      Privacy Policy
                    </a>
                    and
                    <a href="#" className="text-dark mx-1 fw-bold">
                      Terms and Service
                    </a>
                    Apply
                  </p> */}
                </div>
                <div className="col-md-6 order-1 order-md-2 attachImg d-flex justify-content-center align-items-center">
                  <ImageDropzone
                    title="files"
                    oldFiles={formData.files}
                    updateOldFiles={updateOldFiles}
                    setFiles={setFiles}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Partner;
