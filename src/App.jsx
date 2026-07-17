import { Toaster } from "react-hot-toast";
import Layout from "./components/layout/Layout";
import AppRoutes from "./routes/AppRoutes";


function App() {
    return (
      <>
      <Toaster position="top-right" />
      <Layout>
        <AppRoutes />
      </Layout>
    </>
    );
}

export default App;