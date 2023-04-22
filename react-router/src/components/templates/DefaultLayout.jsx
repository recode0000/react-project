import { Header } from "../atoms/laytout/Header";
import { Footer } from "../atoms/laytout/Footer";

export const DefaultLayout = props => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
