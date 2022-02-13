import React from "react";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import Advantages from "../../mocks/advantageList";
import "./style.css";

export default function App() {
  return (
    <PageWrapper advantages={Advantages}>Контент страницы</PageWrapper>
  );
}
