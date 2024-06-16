import { useEffect, useState } from "react";
import Tours from "./Tours";
import Loading from "./Loading";

const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const fetchTour = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (err) {
      setLoading(false);
      alert(err);
    }
  };
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }
  const handleReload = () => {
    setLoading(!Loading);
    fetchTour();
  }
  useEffect(() => { fetchTour() }, []);
  if (isLoading) { return <Loading /> };
  if (tours.length === 0) {
    return (
      <div className="title">
        <h2>No tours left</h2>
        <button className="btn"
          onClick={handleReload}>
          Reload Page
        </button>
      </div>
    )
  };
  return (
    <section>
      <Tours tours={tours} removeTour={removeTour} />

    </section>
  )
};
export default App;
