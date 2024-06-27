import React from "react";
import Header from "../components/header";
import Nav from "../components/nav.jsx";
import Footer from "../components/footer";

function Error() {
  return (
    <>
      <Header site={"404"} />
      <Nav />
      <main>
        <h1>Seite nicht gefunden</h1>
      </main>
      <Footer />
    </>
  );
}

export default Error;