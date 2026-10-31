import EditButton from './assets/edit-note.svg';
import DeleteButton from './assets/delete-icon.svg';

export function ProductItem({
  id,
  producto,
  precio,
  stock,
  categoria,
  callbackSetCanHandlerForm,
}) {
  return (
    // <p>
    //   {id} {producto} {precio}
    // </p>
    // recordatorio no agregar table por que se rompe y lo agrega a un solo th
    <tr id={id}>
      <td>
        <img
          src={EditButton}
          onClick={() => {
            alert(id);
            onCallbackClick(true);
          }}
          width={20}
          height={20}
          style={{ background: 'white', cursor: 'pointer' }}
        />
      </td>
      <td>
        <img
          src={DeleteButton}
          width={20}
          height={20}
          style={{
            background: 'white',
            cursor: 'pointer',
            padding: '5px 0 0 0 ',
          }}
        />
      </td>
      <td>{id}</td>
      <td>{producto}</td>
      <td>{precio}</td>
      <td>{stock}</td>
      <td>{categoria}</td>
    </tr>
  );
}
