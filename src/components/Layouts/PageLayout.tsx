import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";

interface PageLayoutProps {
  children: React.ReactNode;
}

// Styles
const LayoutStyle = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  &: @media (max-width: 700px) {
    padding: 1rem;
  }
`;
const Container = styled.div`
width: 100%;
height: 100vh;
&: @media (max-width: 700px) {
  padding: 1rem;
}
`

const PageLayout = (props: PageLayoutProps): JSX.Element => {
  return (
    <Container>
      <Header />
      <LayoutStyle>{props.children}</LayoutStyle>
      <Footer />
    </Container>
  );
};

export default PageLayout;
