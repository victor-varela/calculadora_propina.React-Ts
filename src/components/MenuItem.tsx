import type { MenuItem } from "../types";


type MenuItemProps = {
  item: MenuItem;
  addItem : ()=> void
};

const MenuItem = ({ item, addItem }: MenuItemProps) => {
 
  return (
    <button
      className="w-full flex justify-between p-3 hover:bg-teal-200 border-2 border-teal-400"
      onClick={()=> addItem()}
    >
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  );
};

export default MenuItem;

//Se declara el type de las props del componente ya que en el type "original" no existe una propiedad "item", es deicr, en type MenuItem no existe la propiedad item. Por eso creamos un "custom type o componentPropsType" que inlcuya esa prop que viene de App.tsx"
