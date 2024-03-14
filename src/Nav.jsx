
function Nav(props) {
  
  return (
    <div>
      <button onClick={props.cat}>Sweets</button>
      <button onClick={props.cat}>Animals</button>
      <button onClick={props.cat}>Imaginary</button>
      <button onClick={props.cat}>Cozy</button>
      <button onClick={props.cat}>Flowers</button>
    </div>
  );
}

export default Nav;
