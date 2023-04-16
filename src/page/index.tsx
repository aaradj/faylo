import About from "../components/About";
import Features from "../components/Features";
import PageLayout from "../components/Layouts/PageLayout";

function Main(): JSX.Element {
  return (
    <PageLayout>
      <About />
      <Features />
    </PageLayout>
  );
}

export default Main;
