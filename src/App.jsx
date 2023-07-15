import { AllRoutes } from "./routes/AllRoutes";
import { Header } from "./components/Header";
import Footer from "./components/Footer";

export const App = () => {
  return (
    <div className="App bg-black">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
};
