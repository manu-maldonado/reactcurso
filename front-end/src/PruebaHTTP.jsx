
import { useState } from "react";
import { postService } from "./services/postService";

export function PruebaHTTP() {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [titulo, setTitulo] = useState("");
    const [contenido, setContenido] = useState("");
    const [creando, setCreando] = useState(false);

  const cargarPosts = async () => {
    setLoading(true);
    setError("");

    try {
      const respuesta = await postService.obtenerPosts();

      console.log("Respuesta API:", respuesta);
      setPosts(respuesta);

    } catch (error) {
      console.error(error);
      setError("No se pudieron cargar los posts");

    } finally {
      setLoading(false);
    }
  };

  const listarPublicaciones = async () => {
  setLoading(true);
  setError("");

  try {
    const respuesta = await postService.listarPosts();

    console.log("LIST:", respuesta);

    setPosts(respuesta);

  } catch (error) {
    console.error(error);
    setError("Error al listar publicaciones");

  } finally {
    setLoading(false);
  }
};


const crearPublicacion = async (e) => {
  e.preventDefault();
  setCreando(true);
  setError("");

  try {
    const datos = {
      title: titulo,
      body: contenido,
      userId: 1
    };

    const respuesta = await postService.crearPost(datos);

    console.log("Publicación creada:", respuesta);

    setPosts(prev => [respuesta, ...prev]);

    setTitulo("");
    setContenido("");

  } catch (error) {
    console.error("Error al crear:", error);
    setError("No se pudo crear la publicación");

  } finally {
    setCreando(false);
  }
};


  return (
    <div>
      <h2>Prueba de HTTP GET</h2>

      <button onClick={cargarPosts}>
        GET - Obtener por ID
      </button>

      <button onClick={listarPublicaciones}>
        LIST - Obtener todos
      </button>

      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}

      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}


    <form onSubmit={crearPublicacion}>
    <h2>CREATE - Nueva publicación</h2>

    <input
        type="text"
        placeholder="Título de la publicación"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        required
    />

    <textarea
        placeholder="Contenido"
        value={contenido}
        onChange={(e) => setContenido(e.target.value)}
        required
    />

    <button type="submit" disabled={creando}>
        {creando ? "Creando..." : "Crear publicación"}
    </button>
    </form>



        </div>
    
  );
}
