import { useState } from 'react';

export function useProductForm(id, products, callbackSetLoadingProducts) {
  const [formData, setFormData] = useState({
    id: 0,
    nombre: '',
    precio: 0,
    stock: 0,
    categoria: '',
  });

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

    products.push(formData);

    callbackSetLoadingProducts(true);
    console.log(
      'Datos estan listos para ser enviados al servidor',
      formData,
      products
    );

    // console.log(products);
  };
  return { formData, handleChange, handleSubmit };
}
