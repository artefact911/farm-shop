import React from "react";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import Features from "../../mocks/Features";
import "./style.css";

export default function App() {
  return (
    <PageWrapper features={Features}>Контент страницы</PageWrapper>
  );
}
