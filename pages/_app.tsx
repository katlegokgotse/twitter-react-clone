import Layout from "@/components/layout/Layout";
import { Toaster } from 'react-hot-toast'
import { SessionProvider } from "next-auth/react";
import LoginModal from "@/components/auth/LoginModal";
import Modal from "@/components/auth/Modal";
import RegisterModal from "@/components/auth/RegisterModal";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return(
    <SessionProvider session={pageProps.session}>
      <Toaster/>
    <RegisterModal/>
    <LoginModal/>
      <Layout>
          <Component {...pageProps} />;
      </Layout>
    </SessionProvider>
  )

}
