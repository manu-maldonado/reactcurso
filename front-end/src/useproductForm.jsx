import { useState } from 'react';

export function useProductForm(productoAEditar, onSave, onCancel) {
  const [formData, setFormData] = useState({
    id: 0,
    nombre: '',
    precio: 0,
    stock: 0,
    categoria: '',
  });

  //Si nosotros le pasamos un producto para editar, estariamos cargando sus datos en el estado local de nuestro form local

  //   userEffect(() => {
  //     if (productoAEditar) {
  //       setFormData(productoAEditar);
  //     }
  //   }, [productoAEditar]);

  if (productoAEditar) {
    setFormData(productoAEditar);
  } else {
    setFormData(newProduct);
  }

  const handleChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    setFormData((prevData) => ({
      // ... significa que son spreads
      ...prevData,
      [name]: type == 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (evt) => {
    //evita que se manden los datos por cada click
    evt.preventDefault();
    onSave({
      ...formData,
      precio: +formData.precio,
    });
    // products.push(formData);
    // callbackSetLoadingProducts(true);
    // console.log(
    //   'Datos estan listos para ser enviados al servidor',
    //   formData,
    //   products
    // );

    // console.log(products);
  };
  return { formData, handleChange, handleSubmit };
}
