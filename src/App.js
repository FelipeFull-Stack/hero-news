import { Routes, Route } from "react-router-dom";
import { HeroForm } from "./components/HeroForm";
import { HeroView } from "./components/HeroView";
import { HeroEdit } from "./components/HeroEdit";
import { NavBar } from "./components/NavBar";
import { SideBarAdds } from "./components/SideBarAdds";

function App() {




  return (
    <div>
      <NavBar />
      {/* <SideBarAdds /> */}
      <Routes>
        <Route path="/" />
        <Route path="/criar-anuncio/" element={<HeroForm />} />{/*criação do formulário*/}
        <Route path="/ver-anuncio" element={<HeroView />} />{/*visualização do formulário*/}
        <Route path="/editar-anuncio" element={<HeroEdit />} />
        <Route path="*" />
      </Routes>
      {/* <SideBarShop /> Se a gnt conseguir chegar*/}
    </div>
  );
}

export default App;
