import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CitiesProvider } from "./context/CitiesContext";
import { AuthProvider } from "./context/FakeAuthContext";
import ProtectedRoute from "./pages/ProtectedRoute/ProtectedRoute";
//
import CityList from "./components/CityList/CityList";
import CountryList from "./components/CountryList/CountryList";
import City from "./components/City/City";
import Form from "./components/Form/Form";
import SpinnerFullPage from "./components/SpinnerFullPage/SpinnerFullPage";
//
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const PricingPage = lazy(() => import("./pages/PricingPage/PricingPage"));
const ProductPage = lazy(() => import("./pages/ProductPage/ProductPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const AppLayout = lazy(() => import("./pages/AppLayout/AppLayout"));
const PageNotFound = lazy(() => import("./pages/PageNotFound/PageNotFound"));
// import HomePage from "./pages/HomePage/HomePage";
// import PricingPage from "./pages/PricingPage/PricingPage";
// import ProductPage from "./pages/ProductPage/ProductPage";
// import LoginPage from "./pages/LoginPage/LoginPage";
// import AppLayout from "./pages/AppLayout/AppLayout";
// import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="pricing" element={<PricingPage />} />
              <Route path="product" element={<ProductPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
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
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
