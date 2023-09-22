export function Button({ onClick, children }) {
  return (
    <button
      // className="bg-indigo-500 px-4 py-1 rounded-md my-2 disabled:bg-indigo-300"
      className="btn btn-success" style={ { backgroundColor: "#21D192"}}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
