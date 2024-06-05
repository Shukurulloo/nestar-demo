import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  console.log("APP COMPONENT - PAGES ROUTER");

  return <Component {...pageProps} />;
}
// _  2ta fayllarni ichida bir qator vazifalarni hal qilish un suniy maydon yasab beradi. bular o'zini bir qator tayanch vazifalariga ega