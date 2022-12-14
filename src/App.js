import React, {useState, useEffect} from 'react'
import NavBar from './component/NavBar'
import axios from 'axios'
import { Container } from 'react-bootstrap'
import MoviesList from './component/MoviesList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieDetails from './component/MovieDetails';


function App() {

  const [movies, setMovies] = useState([])
  const [pageCount, setPageCount] = useState(0)

  const getAllMovies = async()=>{
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar")
    setPageCount(res.data.total_pages)
    setMovies(res.data.results)
  }

  // get current page
  const getPage = async(page)=>{
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar&page=${page}`)
    
    setMovies(res.data.results)
    setPageCount(res.data.total_pages)
  }

  // to search in api
  const search = async(word)=>{
    if(word === ""){
      getAllMovies()
    }else{
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${word}&language=ar`)
      setMovies(res.data.results)
      setPageCount(res.data.total_pages)
    } 
  }

  useEffect(()=>{
    getAllMovies()
  }, [])
  
  return(
    <div className='font color-body'>
      <NavBar search={search}/>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MoviesList movies={movies} getPage={getPage} pageCount={pageCount}/>}/>
            <Route path='/movie/:id' element={<MovieDetails/>}/>
          </Routes>
        </BrowserRouter>
        
      </Container>
    </div>
  )

}

export default App