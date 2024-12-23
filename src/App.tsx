import MenuItem from "./components/MenuItem";
import { menuItems } from "./data/data";

function App() {
  console.log(menuItems);

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black ">Calculadora de Propinas y Consumo</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div>
          <h2>Menu</h2>
          {menuItems.map(item =>(
            <MenuItem
              key={item.id}
              item={item}
            />
          ))}
        </div>
        <div>
          <h2>Consumos</h2>
        </div>
      </main>
    </>
  );
}

export default App;
