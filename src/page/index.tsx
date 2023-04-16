import About from "../components/About";
import Features from "../components/Features";
import PageLayout from "../components/Layouts/PageLayout";
import Location from "../components/Location";
import Team from "../components/Team";

function Main(): JSX.Element {
  return (
    <PageLayout>
      <About />
      <Features />
      <Location />
      <Team />
    </PageLayout>
  );
}

export default Main;
