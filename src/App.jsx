import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PricingPage from "./pages/PricingPage/PricingPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import AppLayout from "./pages/AppLayout/AppLayout";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import CityList from "./components/CityList/CityList";
import CountryList from "./components/CountryList/CountryList";
import City from "./components/City/City";
import Form from "./components/Form/Form";
import { CitiesProvider } from "./context/CitiesContext";
import { AuthProvider } from "./context/FakeAuthContext";

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="pricing" element={<PricingPage />} />
            <Route path="product" element={<ProductPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="app" element={<AppLayout />}>
              <Route index element={<Navigate to="cities" />} />
              {/*  */}
              <Route path="cities" element={<CityList />} />
              {/*  */}
              <Route path="cities/:id" element={<City />} />
              {/*  */}
              <Route path="countries" element={<CountryList />} />
              {/* Form */}
              <Route path="form" element={<Form />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
