const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

type TipPercentageProps = {
    setTip:React.Dispatch<React.SetStateAction<number>>;
    tip: number
}

//el type de setTip lo tomamos de VsCode.. es de type "useState.. digamos"
const TipPercentage = ({setTip, tip}: TipPercentageProps) => {
  return (
    <div>
      <h2 className="font-black text-2xl">Propina:</h2>
      <form>
        {tipOptions.map(option => (
          <div key={option.id} className="flex gap-2">
            <label htmlFor={option.id}>{option.label}</label>
            <input 
              type="radio" 
              id={option.id} 
              name="tip" 
              value={option.value} 
              onChange={ e=> setTip(+e.target.value)} 
              checked={tip=== option.value}
            />
          </div>
        ))}
      </form>
    </div>
  );
};

//Vieja leccion de FORM.. los input deben tener el htmlfor=id === atributo id del input. Y name igual para todos y value DIFERENTE. Los valores de un FORM se leen con e => e.target.value y por medio de onChange. Otra leccion: para que ts tome el type de value se agrega sigo + antes de e porque por default los value son strings y lo estamos declarando como number
export default TipPercentage;
