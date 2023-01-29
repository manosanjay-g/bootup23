import Home from "./views/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EventDetails from "./views/EventDetails";
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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
