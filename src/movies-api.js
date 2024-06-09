// movies-api.js
import axios from 'axios';

const API_KEY = '5f5a9671158225cb5c83d0e49b9dcba6';

const getTrendingMovies = async () => {
  const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

  const options = {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjVhOTY3MTE1ODIyNWNiNWM4M2QwZTQ5YjlkY2JhNiIsInN1YiI6IjY2MmU4MGI2YzNhYTNmMDEyOWZkNzdjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mqfmed3cS-N17vhbiJZC57JsSuSaO6nUg8XBoMAQs0U'
    }
  };
  
  try {
    const response = await axios.get(url, options);
    return response.data; 
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw error;
  }
};

const searchMovies = async (query) => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

  const options = {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjVhOTY3MTE1ODIyNWNiNWM4M2QwZTQ5YjlkY2JhNiIsInN1YiI6IjY2MmU4MGI2YzNhYTNmMDEyOWZkNzdjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mqfmed3cS-N17vhbiJZC57JsSuSaO6nUg8XBoMAQs0U'
    }
  };
  
  try {
    const response = await axios.get(url, options);
    return response.data; 
  } catch (error) {
    console.error('Error searching movies:', error);
    throw error;
  }
};

const getMovieDetails = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;

  const options = {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjVhOTY3MTE1ODIyNWNiNWM4M2QwZTQ5YjlkY2JhNiIsInN1YiI6IjY2MmU4MGI2YzNhYTNmMDEyOWZkNzdjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mqfmed3cS-N17vhbiJZC57JsSuSaO6nUg8XBoMAQs0U'
    }
  };
  
  try {
    const response = await axios.get(url, options);
    return response.data; 
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};

const getCredits = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`;

  const options = {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjVhOTY3MTE1ODIyNWNiNWM4M2QwZTQ5YjlkY2JhNiIsInN1YiI6IjY2MmU4MGI2YzNhYTNmMDEyOWZkNzdjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mqfmed3cS-N17vhbiJZC57JsSuSaO6nUg8XBoMAQs0U'
    }
  };
  
  try {
    const response = await axios.get(url, options);
    return response.data; 
  } catch (error) {
    console.error('Error fetching movie credits:', error);
    throw error;
  }
};

const getReviews = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`;

  const options = {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjVhOTY3MTE1ODIyNWNiNWM4M2QwZTQ5YjlkY2JhNiIsInN1YiI6IjY2MmU4MGI2YzNhYTNmMDEyOWZkNzdjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mqfmed3cS-N17vhbiJZC57JsSuSaO6nUg8XBoMAQs0U'
    }
  };
  
  try {
    const response = await axios.get(url, options);
    return response.data; 
  } catch (error) {
    console.error('Error fetching movie reviews:', error);
    throw error;
  }
};

export { getTrendingMovies, searchMovies, getMovieDetails, getCredits, getReviews };
