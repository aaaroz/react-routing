import { useState } from "react";
import React from "react";
import Header from "../components/header";
import logo from "../assets/bootstrap-logo.svg";
import ListingProducts from "../components/listing.products";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/style.css";

function ListProduct() {
  // objek artikel untuk mengganti Bahasa Inggris atau Indonesia
  const article = {
    title: {
      id: "Product List",
      en: "List Product",
    },

    description: {
      id: "Di bawah ini adalah contoh tabel yang dibuat seluruhnya dengan kontrol tabel Bootstrap. Setiap grup tabel yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan tabel tanpa menyelesaikannya.",
      en: "Below is an example table built entirely with Bootstrap’s table controls. Each required table group has a validation state that can be triggered by attempting to submit the table without completing it.",
    },

    buttonText: {
      id: "Bahasa Inggris",
      en: "Indonesia Language",
    },
  };

  //useState untuk menentukan state awal, yaitu bahasa inggris
  const [language, setLanguage] = useState("en");

  function Headline() {
    /* Conditional Rendering, Jika state = id, maka akan me-render bahasa indo,
            kondisi kedua jika state=en, maka akan me-render bahasa inggris */

    if (language === "id") return article.title.id;
    else if (language === "en") return article.title.en;
  }
  function Description() {
    /* Conditional Rendering, Jika state = id, maka akan me-render bahasa indo,
             kondisi kedua jika state=en, maka akan me-render bahasa inggris */

    if (language === "id") return article.description.id;
    else if (language === "en") return article.description.en;
  }

  function HandleLanguage() {
    if (language === "en") {
      setLanguage("id");
    } else if (language === "id") {
      setLanguage("en");
    }
  }
  function LanguageButton() {
    /* conditional rendering, jika state = id, maka akan merender button teks bahasa indo,
            jika state = en, maka akan merender button teks bahasa inggris */

    if (language === "en") return article.buttonText.en;
    else if (language === "id") return article.buttonText.id;
  }
  return (
    <>
      <Header />
      <div className="container-md container-sm container-lg px-5">
        <div className="hero-card text-center mt-5 px-5">
          <img src={logo} alt="bootstrap-logo" className="img-fluid mt-2" />
          <h2 className="mt-3" id="head">
            <Headline />
          </h2>
          <p className="fw-light fs-5 mt-3">
            <Description />
          </p>
          <button className="btn btn-primary m-2" onClick={HandleLanguage}>
            <LanguageButton />
          </button>
        </div>
        <div className="container px-5 justify-content-center">
          <ListingProducts />
        </div>
      </div>
    </>
  );
}

export default ListProduct;
