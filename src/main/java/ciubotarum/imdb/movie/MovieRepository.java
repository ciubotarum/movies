package ciubotarum.imdb.movie;

import ciubotarum.imdb.movie.Movie;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MovieRepository extends MongoRepository<Movie, ObjectId> {
    // Use Optional because it can return null
    Optional<Movie> findMovieByImdbId(String imdbId);
}
