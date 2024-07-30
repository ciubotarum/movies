package ciubotarum.imdb.users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody Map<String, String> payload) {
        return new ResponseEntity<>(userService.register(payload.get("username"), payload.get("password")), HttpStatus.CREATED);
    }
    @GetMapping("/login")
    public ResponseEntity<User> login(@RequestBody Map<String, String> payload) {
        return new ResponseEntity<>(userService.login(payload.get("username"), payload.get("password")), HttpStatus.OK);
    }

}
