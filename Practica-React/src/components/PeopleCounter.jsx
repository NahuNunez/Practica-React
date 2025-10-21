const PeopleCounter = ({ persona, setPersona }) => {

    /* aqui desarrollo la logica */
    
    return (
        <>
        <h2>Cuantas personas pagaran la cuenta?</h2>
        <form action="Ingresar">
            <label htmlFor="Cantidad" className="">Ingresar cantidad de personas</label> <br/> <br/>
            <input type="number" placeholder="Ej: 1, 2, 3..." value={persona} min={1}  onChange={(e) => setPersona(Number(e.target.value))}/>  <br/><br/>
            <button type="submit" className="btn btn-primary">Calcular</button>
        </form>
        </>
    )
}

export default PeopleCounter;