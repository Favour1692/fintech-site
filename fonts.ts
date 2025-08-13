import { Source_Sans_3, Montserrat_Alternates, DM_Sans, Ubuntu, Pacifico } from "next/font/google";

export const h1font = Montserrat_Alternates({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-h1",
});
export const textfont = DM_Sans({
  weight: ["400", "700", "600"],
  subsets: ["latin"],
  variable: "--textfont",
});
export const h2font = Source_Sans_3({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-h2",
});
export const buttonfont = Ubuntu({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-button",
});
export const logofont = Pacifico({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-logo",
});
