import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster, toast } from 'sonner'


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
