import { allProducts } from './productosMock';
import { userState } from 'react';

export function Crud() {
  return (
    <form class="card bg-surface-100-900 p-4 w-full max-w-md mx-auto space-y-4">
      <header>
        <h3 class="h3">CRUD</h3>
      </header>
      <fieldset class="fieldset space-y-2">
        <legend class="legend">Crear</legend>
        <label class="label">
          <span class="label-text">Insert: </span>
          <input class="input" type="email" placeholder="" />
        </label>
      </fieldset>
      <fieldset class="fieldset space-y-2">
        <legend class="legend">Leer</legend>
        <label class="label">
          <span class="label-text">Que quieres leer: </span>
          <select class="select">
            <option disabled selected>
              Select
            </option>
            <option value="nyc">Id</option>
            <option value="la">Nombre</option>
            <option value="chi">Precio</option>
            <option value="chi">Stock</option>
            <option value="chi">Categoria</option>
          </select>
        </label>
        <label class="label">
          <span class="label-text">Salida</span>
          <label htmlFor="">-</label>
        </label>
      </fieldset>
      <fieldset class="fieldset space-y-2">
        <legend class="legend">Actualizar</legend>
        <label class="label">
          <span class="label-text">Actualizar dato</span>
          <textarea
            class="textarea"
            rows="3"
            placeholder="Delivery instructions..."
          ></textarea>
        </label>
      </fieldset>
      <footer class="flex justify-end">
        <button type="submit" class="btn preset-filled">
          Submit
        </button>
      </footer>
    </form>
  );
}
