// Components
import About from "../components/About";
import Features from "../components/Features";
import StartForm from "../components/Form";
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
      <StartForm />
      
    </PageLayout>
  );
}

export default Main;
