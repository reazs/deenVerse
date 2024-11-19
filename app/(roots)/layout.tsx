import Navbar from "@/components/shared/navbar";
import ".././globals.css";
import ReactQueryProvider from "@/lib/react-query/ReactQueryProvider";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <Navbar />
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
