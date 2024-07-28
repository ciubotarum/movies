package ciubotarum.imdb.reviews;

import ciubotarum.imdb.reviews.Review;
import ciubotarum.imdb.reviews.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/reviews")
public class ReviewController {
    @Autowired
    private ReviewService reviewService;

    @PostMapping()
    public ResponseEntity<Review> createReview(@RequestBody Map<String, String> payload) {
        return new ResponseEntity<>(reviewService.createReview(payload.get("reviewBody"), payload.get("imdbId")), HttpStatus.CREATED);
    }

    @GetMapping("{imdbId}")
    public ResponseEntity<List<Review>> getReview(@PathVariable String imdbId) {
        return new ResponseEntity<>(reviewService.getReviewsById(imdbId), HttpStatus.OK);
    }
}
