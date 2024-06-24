import './App.css';
import {Auth} from "./components/auth";
import { database, auth, storage } from "./config/firebase";
import { useEffect, useState } from 'react';
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";

function App() {
  const [movieList, setMoviefList] = useState([]);

  const moviesCollectionRef = collection(database, "movies");

  useEffect(() => {
    const getMovieList = async () => {
      try {
        const data = await getDocs(moviesCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setMovieList(filteredData);
      } catch (err) {
        console.error(err);
      }
    };

    getMovieList();
  }) 
  return (
    <div className="App">
      <Auth />
      <div>
        {movieList.map((movie) => (
          <div>
            <h1 style={{ color: movie.receivedAnOscar ? "green" : "red" }}>
              {movie.title}
            </h1>
            <p> Date: {movie.releaseDate} </p>

          </div>
        ))}
      </div>

      
    </div>
  );

}
export default App;
