import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";

export const useOrder = () => {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0);
  const addItem = (item: MenuItem) => {
    const itemExists = order.find(order => order.id === item.id);
    if (itemExists) {
      const updatedOrder = order.map(order =>
        order.id === item.id ? { ...order, quantity: (order.quantity += 1) } : order
      );
      setOrder(updatedOrder);
    } else {
      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  };

  const removeItem = (id: MenuItem["id"]) => {
    setOrder(order.filter(order => order.id !== id));
  };

  const placeOrder = () => {
    setOrder([]);
    setTip(0);
  };

  return {
    addItem,
    order,
    removeItem,
    tip,
    setTip,
    placeOrder,
  };
};

/*Este es el hook que se encarga de la logica para agregar un item. Solo es codigo de logica, no hay template. Por ello este archivo es .ts ¿cuando creamos un hook? cuando vamos a hacer la logica de nuestra app agregar un producto al carrito, pagar un articulo, etc..
Es un custom Hook por eso siempre empieza con use. useOrder

Cuando damos click que debe pasar?
- Seleccionar el producto correcto (tomar en cuenta que debe tener una cantidad, por eso el type es diferente que el menuItem)
- Agregar ese producto a un array de productos. Vamos a tener un array de objetos ¿que objetos? "orderItem". Entonces tenemos menuItem que son los objetos en el menu y los orderItem que son los seleccionados y a los que agrego cantidad. Vamos a usar un array entonces creamos un STATE 

EN ts el enemigo es el tipo ANY.. asi que order debe tener su type especifico. Ver archivo Types

<nameOfType> esto es generics.. esto define el type en useState

Este hook se importa en App.tsx porque es un estado GLOBAL.

Cuando agregamos nuevo producto a setOrder, creamos una nueva variable {objeto} que tiene lo mismo que el item que recibe la funcion y le agregamos la cantidad. Asi va a COINCIDIR el type con orderItem type

en la funcion removeItem, nos valemos del lookup del type MenuItem. Por eso declaramos id: MenuItem['id']. La sintaxis es
 nombreDelType.['propiedadQueBuscamos'] 

*/
