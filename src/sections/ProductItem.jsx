export default function ProductItem({ product, selected, onSelect }) {
  return (
    <tr
      onClick={() => onSelect(product.id)}
      className={`cursor-pointer ${
        selected ? "bg-accent text-accent-foreground" : "hover:bg-muted/50"
      }`}
    >
      <td>{product.id}</td>
      <td>{product.nombre}</td>
      <td>{product.categoria}</td>
      <td>${product.precio}</td>
    </tr>
  );
}
