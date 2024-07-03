import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import Header from "@/components/Header";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thales Blog",
  description: "Criado por Thales Lyra.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.className} bg-zinc-100 text-zinc-900 min-h-screen`}
        >
          <Container>
            <Header />
            {children}
            <Footer />
          </Container>
        </body>
      </html>
    </ClerkProvider>
  );
}
