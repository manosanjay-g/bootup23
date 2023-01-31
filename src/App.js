import Home from "./views/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EventDetails from "./views/EventDetails";
import Promotions from "./views/Promotions";
import { useState } from "react";
const App = () => {
  const [isLoading, setLoading] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home isLoading={isLoading} setLoading={setLoading} />}
        />
        <Route path="/event-details" element={<EventDetails />} />
        <Route path="/promotions" element={<Promotions />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
