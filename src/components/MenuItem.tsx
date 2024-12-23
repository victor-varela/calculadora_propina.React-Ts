import type { MenuItem } from "../types";

type MenuItemProps = {
  item: MenuItem;
};

const MenuItem = ({ item }: MenuItemProps) => {
  console.log(item);

  return (
    <>
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </>
  );
};

export default MenuItem;

//Se declara el type de las props del componente ya que en el type "original" no existe una propiedad "item", es deicr, en type MenuItem no existe la propiedad item. Por eso creamos un "custom type o componentPropsType" que inlcuya esa prop que viene de App.tsx"
