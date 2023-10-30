import {
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
} from './components';
import {styles} from './constants';
import {AppBar, Footer, Page} from './layout';

function App() {
  return (
    <Page>
      <AppBar />
      <Hero />

      <div
        className={`bg-primary ${styles.paddingX} ${styles.flexCenter} ${styles.boxWidth} flex-col`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </Page>
  );
}

export default App;
