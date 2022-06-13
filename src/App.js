import { Routes, Route, BrowserRouter } from "react-router-dom";
import Restaurants from "./components/Restaurants/Restaurants";
import RestaurantInfo from "./components/RestaurantInfo/RestaurantInfo";
import PageNotFound from "./components/PageNotFound/PageNotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Restaurants />} />
        <Route exact path="/restaurant/:id" element={<RestaurantInfo />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
