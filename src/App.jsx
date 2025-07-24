import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/index/Index";
import Linktree from "./pages/linktree/Linktree";
import NotFound from "./pages/notFound/NotFound";
import './styles/App.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/linktree" element={<Linktree />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
