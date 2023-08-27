export const TiposBasicos = () => {
  const nombre: string = "Santiago";
  const edad: number = 22;
  const estaActivo: boolean = true;

  const poderes: string[] = ["teletransportación", "volar"] 

  return (
    <>
       <h3>Tipos Básicos</h3>
       { nombre }, { edad }, { estaActivo ?  "activo" : "no está activo"}
       <br/>
       { poderes.join(", ") }
    </>
  )
}
