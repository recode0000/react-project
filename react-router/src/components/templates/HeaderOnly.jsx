import { Header } from "../atoms/laytout/Header";


export const HeaderOnly = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      { children }
    </>
  )
}
