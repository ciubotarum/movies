package ciubotarum.imdb.users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public User register(String username, String id) {

        return userRepository.insert(new User(username));
    }
}
