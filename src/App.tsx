import { useState, useEffect } from "react";

import Header from "./components/Header";
import Display from "./components/Display";
import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(`https://jgalat.github.io/ds-weapons-api/`);
      const fetchedData = await response.json();
      setData(fetchedData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />
      <Form onGetData={getData} />
      <Display data={data} />
      <Footer />
    </>
  );
}

export default App;
