import Header from "../components/GlobalPage/Header/page";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />

      <main>
        <div>
          
        </div>
      </main>
    </>
  );
}