import type { Metadata } from "next";
import "./globals.css";
import { arial} from "@/components/font";

export const metadata: Metadata = {
  title: "Ucademy",
  description: "Nền tảng học lập trình trực tuyến siêu cấp vip pro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={arial.className}>{children}</body>
    </html>
  );
}
