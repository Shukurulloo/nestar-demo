import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { useState } from "react";
import { light } from "../scss/MaterialTheme";
import "../scss/app.scss";
import "../scss/pc/main.scss"; // scss larni chaqirdik


// app global integratsiyasi uchun kerak. har bir faylda app ishga tushadi
export default function App({ Component, pageProps }: AppProps) {
  //@ts-ignore
  const [theme, setTheme] = useState(createTheme(light));

  // Socket.io, Redux, Mui....
  return (
    <ThemeProvider theme={theme}>      {/* mui parent qilsak page routing tizimni hamma faylda integratsiya qilingan bo'ladi. props sifatida pass bo'lyapti */}
      <CssBaseline />

      <Component {...pageProps} />      {/* app o'zidagi narsalarni hammasini qolgan pages routingda joylashgan fayllarga jo'natyapti */}
    </ThemeProvider>
  );
}
// _  2ta fayllarni ichida bir qator vazifalarni hal qilish un suniy maydon yasab beradi. bular o'zini bir qator tayanch vazifalariga ega