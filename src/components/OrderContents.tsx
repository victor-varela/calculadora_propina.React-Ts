//Se llama OrderContents pero puede ser tambien OrderContainer.tsx

import { OrderItem } from "../types";
import { formatCurrency } from "../utils";

type OrderContentsProps = {
  order: OrderItem[];
};

const OrderContents = ({ order }: OrderContentsProps) => {
  return (
    <div>
      <h2 className="font-black text-4xl">Consumo</h2>
      <div className="space-y-3 mt-5">
        {order.length === 0 ? (
          <p className="text-center text-xl">la orden esta vacia</p>
        ) : (
          order.map(order => (
            <div
              key={order.id}
              className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b"
            >
              <div>
                <p className="text-lg">
                  {order.name} - {formatCurrency(order.price)}
                </p>
                <p className="font-black">
                  Cantidad: {order.quantity} - {formatCurrency(order.price * order.quantity)}
                </p>
              </div>
              <button className="h-8 w-8 rounded-full bg-red-600 text-white font-black">X</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default OrderContents;
