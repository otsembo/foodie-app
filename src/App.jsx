import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MealItem from './components/MealItem';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import ContactUs from './components/ContactUs';

const SEARCH_MEALS = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

function App(){

  const [search, setSearch] = useState("");
  const [isSubmitted, setSubmitted] = useState(true);
  const [searchResults, setResults] = useState([]);
  const submitSearch = (e) => {
    e.preventDefault();
    setSubmitted(!isSubmitted)
  }

  useEffect(() => {
    const url = SEARCH_MEALS + search
    fetch(url)
      .then((response) => response.json())
      .then((body) => setResults(body["meals"]))
  }, [isSubmitted])


  const formattedSearchItems = searchResults.map(
    (meal) => 
    <MealItem
      key={meal["idMeal"]}
      className="col-4"
      imageUrl={meal["strMealThumb"]}
      mealName={meal["strMeal"]}
      mealDesc={meal["strArea"]+ " " + meal["strCategory"]}
    >
    </MealItem>
    )

  // ui logic
  return(
    <Router>
      <div className='mb-2'>
        <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
        <Link className='btn btn-primary' to={'/'}>Home</Link>
          <form className="d-flex" role="search" onSubmit={submitSearch}>
            <input className="form-control me-2" value={search} onChange={(event) => {setSearch(event.target.value)}} type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>

          <Link className='btn btn-secondary' to={'/about'}>About Us</Link>
          <Link className='btn btn-danger' to={'/contact'}>Contact Us</Link>
        </div>
        </nav>
      </div>

      <Routes>
        <Route path='/' element={<Home search={search} formattedSearchItems={formattedSearchItems} />}></Route>
        <Route path='/about' element={<AboutUs/>}></Route>
        <Route path='/contact' element={<ContactUs/>}></Route>
      </Routes>

    
    </Router>
  )
} 

export default App
