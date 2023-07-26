/* eslint-disable react/prop-types */
import NuevoPresupuesto from "./NuevoPresupuesto";
import ControlPresupuesto from "./ControlPresupuesto";
// eslint-disable-next-line react/prop-types
const Header = ({
  presupuesto,
  setPresupuesto,
  setIsValidPresupuesto,
  isValidPresupuesto,
  gastos,
  setGastos
}) => {
  return (
    <header>
      <h1>Planificador de gastos</h1>
      {isValidPresupuesto ? (
        <ControlPresupuesto setIsValidPresupuesto={setIsValidPresupuesto} presupuesto={presupuesto} setPresupuesto={setPresupuesto} gastos={gastos} setGastos={setGastos} />
      ) : (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
          
        />
      )}
    </header>
  );
};

export default Header;
