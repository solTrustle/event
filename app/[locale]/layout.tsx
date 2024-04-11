import type { Metadata } from "next";
import UIProviders from "./UIProviders";
import Navbar from "./components/navbar/navbar";
import { NextIntlClientProvider } from "next-intl";
import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { Inter, Mukta } from "next/font/google";
import Footer from "./components/footer/footer";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../globals.css";
import Background from "./components/background/background";

const mukta = Mukta({ 
  subsets:["latin"],
  weight:["400", "700"], 
});

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: any;
}

export const metadata: Metadata = {
  title: "WellBiz Bridge",
  description: "JORNADA DE BUSINESS COACHING & BINENESTAR ORGANIZACIONAL",
};

export default async  function RootLayout({ children, params }: LocaleLayoutProps) {

  const locale = useLocale();
  if (params.locale !== locale) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  
  return (
    <html lang={locale}>
      <head>
      </head>
      <body className={mukta.className}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <UIProviders>
          <Navbar />
          {children}
          <Footer/>
        </UIProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
