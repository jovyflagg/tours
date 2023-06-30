import { useEffect, useState } from 'react';
import Tours from './Tours';
import { client } from './axios'
import Loading from './Loading';

function App() {

  const[tours,setTours] = useState([]);
  const [loading,setLoading] = useState(true);

  const fetchTours = async () => {
    setLoading(true);
    try{
      const response = await client.get('');
      setLoading(false);
      setTours(response.data)
    } catch(error){
      setLoading(false)
      console.log("FETCHTOURS() METHOD ERROR MESSAGE: " + error)
    }
  }

  useEffect(() => {
    fetchTours();
  }, [])

  if (loading) {
    return(
      <main>
        <Loading />
      </main>
    );
  }

  const removeTour = (id) => {
    setTours(tours.filter((tour)=> tour.id !== id))
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={fetchTours}>refresh</button>
        </div>
      </main>
    )
  }

  return (
    <main>
     <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
