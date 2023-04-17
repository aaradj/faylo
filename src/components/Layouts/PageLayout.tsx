import styled from "styled-components";
// Components
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
`;

const PageLayout = (props: PageLayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <LayoutStyle>{props.children}</LayoutStyle>
      <Footer />
    </>
  );
};

export default PageLayout;
