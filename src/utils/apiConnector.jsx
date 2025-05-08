import axios  from "axios";

const instance  = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjJjZjQ5NmNkODE5YjYyOTRkZGEwNzM0ZmE4OTdkYSIsIm5iZiI6MTc0NjY4NzI1Mi4xNzgsInN1YiI6IjY4MWM1NTE0MWNiMzUwYjIyNjg4YzA5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o9YY_PFB8z8SiWE6gVKN21ydCaKwb7peUqA1X4SV-lU'
      }
})

export default instance

// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjJjZjQ5NmNkODE5YjYyOTRkZGEwNzM0ZmE4OTdkYSIsIm5iZiI6MTc0NjY4NzI1Mi4xNzgsInN1YiI6IjY4MWM1NTE0MWNiMzUwYjIyNjg4YzA5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o9YY_PFB8z8SiWE6gVKN21ydCaKwb7peUqA1X4SV-lU
//ef2cf496cd819b6294dda0734fa897da