export default function ProductItem({ product, selected, onSelect }) {
  return (
    <tr
      onClick={() => onSelect(product.id)}
      style={{
        background: selected ? "#cfe6ff" : "transparent",
        cursor: "pointer",
      }}
    >
      <td>{product.id}</td>
      <td>{product.nombre}</td>
      <td>{product.categoria}</td>
      <td>${product.precio}</td>
    </tr>
  );
}
