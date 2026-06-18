import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/components/libs/registry";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Upstat",
  description: "The Upstat Project",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <StyledComponentsRegistry>
          {children} 
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}