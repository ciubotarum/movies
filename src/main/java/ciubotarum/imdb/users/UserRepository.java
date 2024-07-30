package ciubotarum.imdb.users;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, ObjectId> {
    boolean existsByUsername(String username);
    boolean existsByPassword(String password);
}
