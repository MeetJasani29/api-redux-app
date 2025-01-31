import './library.css';
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getAlllibraryAsync, deletelibraryAsync } from "../services/action/library.action";
import { useNavigate } from "react-router";

const Home = () => {
  const { librarys, isLoading } = useSelector((state) => state.libraryReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelet = (id) => {
    dispatch(deletelibraryAsync(id))
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`)
  };

  useEffect(() => {
    dispatch(getAlllibraryAsync());
  }, [dispatch]);


  return (
    <div className="container">
      {isLoading ? (
        <h2 className="text-black text-center mt-3">Loading....</h2>
      ) :  librarys.length === 0 ? (
        <h4>No Data Found</h4>
      ) : (
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th> Author</th>
              <th>Publisher</th>
              <th>Category</th>
              <th>Quantity on Hand</th>
              <th>Unit Price</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            { librarys.map((library) => (
              <tr key={library.id}>
                <td>{library.id}</td>
                <td>{library.title}</td>
                <td>{library.author}</td>
                <td>{library.publisher}</td>
                <td>{library.libraryType}</td>
                <td>{library.quantity}</td>
                <td>{library.price}</td>
                <td>
                  <button className="editbtn" onClick={() => handleEdit(library.id)}>Edit</button>
                </td>
                <td>
                  <button className="delbtn" onClick={() => handleDelet(library.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;
