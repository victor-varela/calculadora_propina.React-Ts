//Se llama OrderContents pero puede ser tambien OrderContainer.tsx

import { OrderItem } from "../types";

type OrderContentsProps = {
  order: OrderItem[];
};

const OrderContents = ({ order }: OrderContentsProps) => {
  return (
    <div className="space-y-10 p-5">
      <h2 className="font-black text-4xl">Consumo</h2>
      {order.length === 0 ? <p>La orden esta vaica</p> : order.map(order =>(
        <div 
            key={order.id}
            className="flex p-2"
        >
            <p className="w-1/3">{order.name}</p>
            <p className="w-1/3">Cantidad: {order.quantity}</p>
            <p className="w-1/3">Precio: {order.price}</p>
        </div>
      ) )}
    </div>
  );
};

export default OrderContents;
