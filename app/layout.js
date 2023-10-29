import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import localFont from "next/font/local";
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

export const metadata = {
  title: "Delorecare | Professional service, Personal touch.",
  description:
    "We provide care and support to people who live in their own homes in England. We care for a wide range of needs.",
  keywords: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${gilmer.className}`}>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
      </head>
      <body className="">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
