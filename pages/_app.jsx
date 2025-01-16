import { useRouter } from 'next/router';
import '../styles/globals.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Main from '../components/Section/Main/Main';
import Sale from '../components/Section/Sale/Sale';
import Section from '../components/Section 2/Section2';
import Electronics from '../components/Electronics/Electronic';
import Banner from '@/Components/Banner/Banner';
import Product from '@/Components/Product/Product';
import Newsletter from '@/Components/Newsletter/Newsletter';
import Services from '@/Components/Services/Services';
import Flag from '@/Components/Flag/Flag';
import ProductListing from '../components/ProductListing/ProductListing';
import ProductDetails from '@/Components/ProductDetails/ProductDetails';

function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen bg-green-50">
      {/* Header */}
      <header className="relative z-10">
        <Header />
      </header>

      {/* Navbar */}
      <nav className="relative z-10">
        <Navbar />
      </nav>

      {/* Main Section */}
      <main className="flex-grow mt-4">
        {router.pathname === '/' ? (  // Home page with all components  
          <>
            <Main />
            <Sale />
            <Section />
            <Electronics />
            <Banner className="relative px-9" />
            <Product />
            <Services />
            <Flag />
          </>
        ) : router.pathname === '/about' ? (
          <ProductListing />
        ) : router.pathname === '/details' ? (
          <ProductDetails />
        ) : (
          <Component {...pageProps} />  // Render default component for other pages  
        )}
      </main>

      {/* Newsletter (show on both home and about pages) */}
      <Newsletter />

      {/* Footer (show on both home and about pages) */}
      <footer className="mt-4">
        <Footer />
      </footer>
    </div>
  );
}

export default App;