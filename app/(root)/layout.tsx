import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-svh">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
