import { Ubuntu } from "next/font/google";
import "./globals.css";
import localfont from "next/font/local";
const neutraNormal = localfont({
  src: [
    {
      path: "../public/fonts/NeutraText-Book.otf",
    },
  ],
});
export const metadata = {
  title: "Archviz Bishal",
  description: `Hey, I'm Bishal
  Architectural Designer And Visualizer`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${neutraNormal.className} bg-[#111111]`}>
        {children}
      </body>
    </html>
  );
}
