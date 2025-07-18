import { Inter } from "next/font/google";
import { Jost } from "next/font/google";
import { NavLinks } from "./components/ui/nav-links";
import "./globals.css";
import ThemeProvider from "./utils/ThemeProvider";
import ThemeSwitcher from "./components/ThemeSwitcher";

const inter = Inter({ subsets: ["latin"] });
const jost = Jost({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jost.className} h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavLinks />
          <ThemeSwitcher />
          <main className="dark:bg-primary-900 bg-gray-300 h-screen flex-1 overflow-y-auto">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
