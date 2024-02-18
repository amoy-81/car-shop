import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/mui/theme";
import { CookiesProvider } from "next-client-cookies/server";
import "../styles/globals.css";
import "../styles/fonts.css";

export const metadata = {
  title: "نمایشگاه ماشین",
  description: "نمایشگاه ماشین",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <CookiesProvider>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <body>{children}</body>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </CookiesProvider>
    </html>
  );
}
