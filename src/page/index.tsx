import About from "../components/About";
import Features from "../components/Features";
import PageLayout from "../components/Layouts/PageLayout";
import Location from "../components/Location";

function Main(): JSX.Element {
  return (
    <PageLayout>
      <About />
      <Features />
      <Location />
    </PageLayout>
  );
}

export default Main;
