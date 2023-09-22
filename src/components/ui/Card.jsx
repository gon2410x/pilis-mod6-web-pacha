export function Card({ children }) {
  // return <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">{children}</div>;
  return(
    <div className="continer-fluid">
      <div className="row mt-5">  
        <div className="col-md-4 offset-md-4">
          <div className="card border border-success">
          {/* <div className="card-header border border-success text-white"> */}



            <div className="" >{children}</div>
    
          {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
  
}
