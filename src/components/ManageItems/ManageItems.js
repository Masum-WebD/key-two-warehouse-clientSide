import useProducts from "../Hooks/useProducts";
const ManageItems = () => {
  const [products] = useProducts();
  return (
    <div>
      <h1 className="mt-3 text-center fw-bold"> Manage Products</h1>
      <div className="container products mb-5 mx-auto">
        {products.map((product) => (
          <div className="card product g-4">
            <img style={{ height: "150px" }} src={product.img} alt="" />
            <h5> Name:{product.name}</h5>
            <p>{product.description}</p>
            <h5 className="mt-0">Price:{product.price}</h5>
            <p className="mt-0">Quantity:{product.quantity}</p>
            <p className="mt-0">Supplier:{product.supplier}</p>
            <button
              
              className="update-button text-black text-decoration-none"
            >
              Delete product
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageItems;
