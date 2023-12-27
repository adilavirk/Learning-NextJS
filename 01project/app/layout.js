import "../style/globals.css";
import Footer from "./(components)/Footer";
import Navbar from "./(components)/Navbar";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </head>

      <body>
        {/* <Navbar /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
