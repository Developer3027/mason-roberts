import { ReactElement } from "react";
import SinglePageLayout from "../components/layouts/SingleLayout.component";

function Hermits() {
  return (
    <h1>Hermits</h1>
  )
}

export default Hermits

Hermits.getLayout = function getLayout(Hermits: ReactElement) {
  return <SinglePageLayout>{Hermits}</SinglePageLayout>;
};
