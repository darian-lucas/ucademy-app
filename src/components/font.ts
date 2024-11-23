import { Manrope, Roboto } from "next/font/google";
import localFont from "next/font/local";
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

const arial = localFont({
  src: [
    {
      path: "../app/arial.ttf",
      weight: "400",
    },
    {
      path: "../app/arialbd.ttf",
      weight: "700",
    },
    {
      path: "../app/ariali.ttf",
      weight: "400",
      style: "italic",
    },
  ],
});

export { manrope, roboto, arial };
