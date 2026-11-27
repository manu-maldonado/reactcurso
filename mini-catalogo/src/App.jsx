
import { CargaAsincrona } from "./componentes/CargaAsincrona";
import { Catalogo } from "./componentes/Catalogo";


export default function App() {
  return (
    <div>
      <Catalogo></Catalogo>
      <>🙂</>
      <CargaAsincrona></CargaAsincrona>
      <>🙂</>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListaProductos />} />
          <Route path="/producto/:id" element={<DetalleProducto />} />
          <Route path="*" element={<NoEncontrado />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}