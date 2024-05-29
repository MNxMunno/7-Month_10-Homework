import { Inter } from "next/font/google";
import "@/scss/main.scss";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import StoreProvider from "./StoreProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StoreProvider>
        <body className={inter.className}>
          <Header />
          {children}
          <Footer />
          <ToastContainer />
        </body>
      </StoreProvider>
    </html>
  );
}
