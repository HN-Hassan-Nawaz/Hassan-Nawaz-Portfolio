import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'
import 'animate.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import ThemeProvider from './components/theme/ThemeProvider';
import BootstrapClient from './components/BootstrapClient';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <BootstrapClient />
          <Navbar />
          <main className="container mt-4">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
