import { Inter } from "next/font/google";
import "./globals.scss";



export const metadata = {
  title: "Hipskör",
  description: "French partycore band website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
