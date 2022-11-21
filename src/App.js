import { Routes, Route } from "react";
import { HeroForm } from "./components/HeroForm";
import { NavBar } from "./components/NavBar";
import { SideBarAdds } from "./components/SideBarAdds";
import { useState } from "react";

function App() {

  


  return (
    <div>
      <NavBar />
      <SideBarAdds />
      <Routes>
        <Route path="/" />
        <Route path="/criar-anuncio" element={<HeroForm />} />{/*criação do formulário */}

        <Route path="*" />
      </Routes>
      {/* <SideBarShop /> Se a gnt conseguir chegar*/}
    </div>
  );
}

export default App;
