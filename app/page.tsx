import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import LegalGuidance from "./components/LegalGuidance";
import Certified from "./components/Certified";
import Partners from "./components/Partners";
import Consult from "./components/Consult";
import Testimonials from "./components/Testimonials";
import Location from "./components/Location";
import Footer from "./components/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <TopBar />
      <Header />
      <div id="hero"><Hero /></div>
      <div id="about"><About /></div>
      <div id="legal-guidance"><LegalGuidance /></div>
      <div id="certified"><Certified /></div>
      <div id="partners"><Partners /></div>
      <div id="consult"><Consult /></div>
      <div id="testimonials"><Testimonials /></div>
      <div id="contact"><Location /></div>
      <Footer />
    </div>
  );
}
