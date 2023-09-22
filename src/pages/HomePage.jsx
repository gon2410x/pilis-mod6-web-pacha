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
            <p className="text-md text-slate-400">
                Pacha, un término Aimara y Quechua, significa ‘Mundo, Universo, Tiempo, Época’<br/>
                Es un concepto inca para dividir las diferentes esferas del cosmos en la mitología inca. 
                Había tres niveles diferentes de pacha: <br/>
                hana pacha, hanan pacha o hanaq pacha (quechua, que significa "mundo de arriba"), <br/>
                ukhu pacha ("mundo de abajo") <br/>
                y kay pacha ("este mundo").<br/>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos
                fugit doloremque molestias recusandae labore repellat amet dicta tempore
                necessitatibus facilis repellendus voluptas ducimus maiores deserunt sed
                quo ratione provident debitis aut, voluptatem aliquam iste blanditiis
                ex? Voluptatibus, fuga quasi necessitatibus cumque optio error enim,
                officia accusantium vitae doloremque, molestias modi.
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
            <p>dd</p>
          </header>
        </div>
      </div>


    </div>

  </section>
</>
);}

export default HomePage;
