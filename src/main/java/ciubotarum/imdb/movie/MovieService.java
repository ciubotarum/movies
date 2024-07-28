package ciubotarum.imdb.movie;

import ciubotarum.imdb.movie.Movie;
import ciubotarum.imdb.movie.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService {
    // let framework instantiate the class
    @Autowired
    private MovieRepository movieRepository;
    public List<Movie> allMovies() {
        return movieRepository.findAll();
    }
    public Optional<Movie> singleMovie(String  imdbId) {
        return movieRepository.findMovieByImdbId(imdbId);
    }
}
