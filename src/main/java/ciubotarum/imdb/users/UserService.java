package ciubotarum.imdb.users;

import ch.qos.logback.core.util.StringUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User register(String username, String password) {
        if (StringUtil.isNullOrEmpty(username) || StringUtil.isNullOrEmpty(password)) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Empty username or password");
        }
        if (userRepository.existsByUsername(username)) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "This username already exists");
        }
        String encodedPassword = passwordEncoder.encode(password);
        User user = new User(username, encodedPassword); // Ensure you use proper user model
        return userRepository.save(user);
    }

    public User login(String username, String password) {
        String encodedPassword = passwordEncoder.encode(password);
        if(!userRepository.existsByUsernameAndPassword(username, encodedPassword)){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Wrong username or password");
        }

        return userRepository.getByUsername(username);
    }
}
