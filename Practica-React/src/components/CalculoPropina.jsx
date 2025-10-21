function CalculoPropina({tip, setTip}) {
  const porcentaje = [10, 15, 20]

  return (

      <div>
        <h3>Propina</h3>
        <label>Seleccione el porcentaje de propina que desea dejar:</label><br></br><br></br>

        {porcentaje.map((value) => (
          <button key={value} onClick={() => setTip (value)}>
          {value} %
          </button>
        ))} 
      
        <input type="number" placeholder="Custom" onChange={(e) setTip(Number(e.target.value))}/>
      </div>

  )
}

export default CalculoPropina
