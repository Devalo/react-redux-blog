import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { initListings, addListing, deleteListing } from './redux/listingsReducer';

const SubmitListing = () => {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(addListing(name, age));
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        onChange={({ target}) => setName(target.value)}
      />
      <input
        type="text"
        placeholder="Age"
        onChange={({ target}) => setAge(target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

function App() {
  const dispatch = useDispatch();
  const listings = useSelector((state) => state.listings)
  
  useEffect(() => {
    dispatch(initListings());
  }, [dispatch]);
  
  const removeListing = (listingName) => {
    dispatch(deleteListing(listingName));
  };
  
  return (
    <div className="App">
      {listings.map((listing) => (
        <p>{listing.name}, {listing.age} | <span onClick={() => removeListing(listing.name)}>(X)</span> </p>
      ))}
      <br />
      <SubmitListing />
    </div>
  );
};

export default App;
