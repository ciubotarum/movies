package ciubotarum.imdb.users;

import ch.qos.logback.core.util.StringUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public User register(String username, String password) {
         if (StringUtil.isNullOrEmpty(username) || StringUtil.isNullOrEmpty(password)){
             throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Empty username or password");
         }
         if (userRepository.existsByUsername(username)) {
             throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "This username already exists");
         }
        return userRepository.insert(new User(username, password));
    }

    public User login(String username, String password) {
        if (userRepository.existsByUsername(username) && userRepository.existsByPassword(password)) {
            throw new ResponseStatusException(HttpStatus.OK, "You're successfully logged in");
        }

        throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Your username or password do not match!");
    }
}
