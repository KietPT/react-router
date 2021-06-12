

function Product(props) {
  let {id} = props.location.state
  
  return (
    <div>
      <h2>Đây là product detail {id}</h2>
    </div>
      
  );
}

export default Product;
