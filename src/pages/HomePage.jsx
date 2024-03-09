import { Link } from "react-router-dom";

function HomePage() {
  return (
<>
  <section className="bg-red-500 flex justify-center items-center">

    <div class="container text-center">

      {/*   PRESENTATION  */}
      <div class="row">
        <div class="col">
          <header className="bg-zinc-800 p-10">

            <h1 className="text-5xl py-2 font-bold" style={ { color:"#21D192", fontWeight:"700"}}>PACHA</h1>
            <p>Pacha, es un término Aimara y Quechua, cuyo significados se pueden interpretar como ‘Mundo, Universo, Tiempo, Época’</p>
            <p>Es un concepto Inca para dividir las diferentes esferas del cosmos en la mitología Inca. 
                En esta division había tres niveles diferentes de pacha:</p>
            <p>Ana Pacha, Hanan Pacha o Hanaq Pacha cuyo significa en quechua es "mundo de arriba"
            que es el mundo celestial donde se encontraban todos los dioses y deidades dentro del panteón incaico. Entre los principales dioses habitantes, se encuentran: Wiracocha, Inti, Mama Killa, Pachacámac, Mama Cocha e Illapa. 

            </p>
            <p>Ukhu Pacha "mundo de abajo"
            que era el mundo de los muertos, de los no natos y de todo aquello que se encontraba bajo la superficie terrestre o acuática.
            </p>
            <p>Kay Pacha "este mundo",
            era el mundo terrenal en donde los seres humanos habitaban y se desenvolvían en sus vidas.
            </p>
            <p className="text-md text-slate-400">
            </p>

            <Link
              className="bg-zinc-500 text-white px-4 py-2 rounded-md mt-4 inline-block"
              to="/register">
              Get Started
            </Link>

          </header>

        </div>

        <div class="col">
          <img src="./recycle-group.png" width={500}/>
        </div>

      </div>

      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

      {/* PRESENTATION TWO */}
      <div className="row">     
        <div class="col">
          <img src="./ima-recycle-man.png" width={500}/>
        </div>
    
        <div class="col">
          <header className="bg-zinc-800 p-10">
            <h4 style={ { color:"#21D192", fontWeight:"700"}}>Visión</h4>
            <p>Visión</p>
            <h4 style={ { color:"#21D192", fontWeight:"700"}}>Misión</h4>
            <p>Misión Permitir el acceso inmediato al publico en general de los recursos desplegados por </p>
          </header>
        </div>
      </div>


    </div>

  </section>
</>
);}

export default HomePage;
