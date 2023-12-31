import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { UserProvider } from "zenly/providers/UserProvider";

const roboto = Roboto({
  subsets: ["latin", "cyrillic-ext"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UserProvider>
      <html lang="en">
        <body className={`${roboto.className} bg-background`}>{children}</body>
      </html>
    </UserProvider>
  );
}
