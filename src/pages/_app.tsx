import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import LayOut from "./components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider >
      <LayOut>
        <Component {...pageProps} />
      </LayOut>
    </ClerkProvider>
  );
}
