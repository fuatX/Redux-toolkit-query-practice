import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
/*
TODO: Bootstrap Nav Yapisi Olusturulacak
TODO: React Router DOM kur
TODO: Ana Sayfa, Her Api icin Kategori Olustur.
TODO: .env yapisi olustur ve Icıne Bilgi Ekle
TODO: Container ve Row için Component Olustur.
TODO: Cat APIdan Key Al
TODO: Cat API Yapisini Fetch ile Kullan
TODO: ilsLoading, isError, error ve data yapisini kurgula
TODO: Cat API Custom Hook yap
TODO: Cat API Kategori Detay Sayfasi Yap
TODO: UI Düzenle
TODO: Axious ile Ayni Calismalari Tekrarla
TODO: RTK Query ile Ayni Yapiyi Kurgula
*/
