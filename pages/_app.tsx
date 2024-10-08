import Layout from "@/components/layout/Layout";
import LoginModal from "@/components/modal/LoginModal";
import Modal from "@/components/modal/Modal";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
    <LoginModal/>
      <Layout>
          <Component {...pageProps} />;
      </Layout>
    </>
  )

}
