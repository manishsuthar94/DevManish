import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

export const metadata = {
  title: "Manish | Portofolio",

  description:
    "My name is Manish, I'm a web developer and I'm passionate about it. I'm currently studying at Marwadi University Rajkot.",

  author: "Manish Suthar",
  siteUrl: "https://manishthecoder.vercel.app/",
  applicationName: "manishthecoder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientTopProgressBar />
        <Navbar />
        {children}

        <Analytics />
      </body>
    </html>
  );
}
