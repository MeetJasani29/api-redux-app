// import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllProductAsync, getAllProducts, deleteproductAsync } from "../services/action/Product.action";
import { useNavigate } from "react-router";


const Home = () => {
    const { products, isLoading } = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDelet = (id) => {
        dispatch(deleteproductAsync(id))
    }

    const handleEdit = (id) => {
        navigate(`/edit/${id}`)
    }

    useEffect(() => {
        dispatch(getAllProductAsync());
    }, []);

    return (
        <div className="container d-flex">
          {isLoading ? (
            <h2>Loading....</h2>
          ) : products.length === 0 ? (
            <h4>No Data Found</h4>
          ) : (
            products.map((product) => (
              <div className="card" style={{ width: "18rem", margin: "1rem" }} key={product.id}>
                <img src={product.image} className="card-img-top" alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.brand}</p>
                  <p className="card-price mt-0">₹ {product.disPrice} <del>{product.price}</del></p>
                  <button className="delbtn" onClick={() => handleDelet(product.id)} style={{ marginRight: "0.5rem" }}> Delete    </button>
                  <button className="editbtn" onClick={() => handleEdit(product.id)}>Edit</button>
                </div>
              </div>
            ))
          )}
        </div>
      );
    };
    
    export default Home;