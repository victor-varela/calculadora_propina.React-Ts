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

const TipPercentage = () => {
  return (
    <div>
      <h2 className="font-black text-2xl">Propina:</h2>
      <form>
        {tipOptions.map(option => (
          <div key={option.id} className="flex gap-2">
            <label htmlFor={option.id}>{option.label}</label>
            <input type="radio" id={option.id} name="tip" value={option.value} />
          </div>
        ))}
      </form>
    </div>
  );
};

//Vieja leccion de FORM.. los input deben tener el htmlfor=id === atributo id del input. Y name igual para todos y value DIFERENTE
export default TipPercentage;
