"use client";
import { useState } from "react";
import localFont from "next/font/local";
import { ToastContext } from "@/utils/ToastContext";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ErrorToast, Notification } from "@/components/modal";
import "./globals.css";

const gilmer = localFont({
  src: [
    {
      path: "../public/assets/fonts/Gilmer Light.otf",
      weight: "300",
    },
    {
      path: "../public/assets/fonts/Gilmer Regular.otf",
      weight: "400",
    },
    {
      path: "../public/assets/fonts/Gilmer Medium.otf",
      weight: "500",
    },
    {
      path: "../public/assets/fonts/Gilmer Bold.otf",
      weight: "600",
    },
    {
      path: "../public/assets/fonts/Gilmer Heavy.otf",
      weight: "700",
    },
    // {
    //   path: "../public/assets/fonts/Gilmer Outline.otf",
    //   weight: "400",
    // },
  ],
  // variable: "--font-gilmer",
});

const metadata = {
  title: "Delorecare | Professional service, Personal touch.",
  description:
    "We provide care and support to people who live in their own homes in England. We care for a wide range of needs.",
  keywords: "",
};

export default function RootLayout({ children }) {
  const [showToast, setShowToast] = useState(null);
  const [toastMessage, setToastMessage] = useState("");

  return (
    <ToastContext.Provider
      value={{ showToast, setShowToast, toastMessage, setToastMessage }}
    >
      <html lang="en" className={`${gilmer.className}`}>
        <head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <meta name="keywords" content={metadata.keywords} />
        </head>
        <body className="">
          {showToast === "error" && (
            <ErrorToast
              closeToast={() => setShowToast(false)}
              message={toastMessage}
            />
          )}
          {showToast === "success" && (
            <Notification
              title={toastMessage.title}
              message={toastMessage.message}
              closeModal={() => setShowToast(null)}
            />
          )}
          <Nav />
          {children}
          <Footer />
        </body>
      </html>
    </ToastContext.Provider>
  );
}
