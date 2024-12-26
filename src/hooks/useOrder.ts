import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";

export const useOrder = ()=> {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const addItem = (item: MenuItem) => {
    console.log("agregando...", item);
  };

  return {
    addItem,
  };
}

/*Este es el hook que se encarga de la logica para agregar un item. Solo es codigo de logica, no hay template. Por ello este archivo es .ts ¿cuando creamos un hook? cuando vamos a hacer la logica de nuestra app agregar un producto al carrito, pagar un articulo, etc..
Es un custom Hook por eso siempre empieza con use. useOrder

Cuando damos click que debe pasar?
- Seleccionar el producto correcto (tomar en cuenta que debe tener una cantidad, por eso el type es diferente que el menuItem)
- Agregar ese producto a un array de productos. Vamos a tener un array de objetos ¿que objetos? "orderItem". Entonces tenemos menuItem que son los objetos en el menu y los orderItem que son los seleccionados y a los que agrego cantidad. Vamos a usar un array entonces creamos un STATE 

EN ts el enemigo es el tipo ANY.. asi que order debe tener su type especifico. Ver archivo Types

<nameOfType> esto es generics.. esto define el type en useState

Este hook se importa en App.tsx porque es un estado GLOBAL.


*/
