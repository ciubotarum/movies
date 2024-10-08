package ciubotarum.imdb.configurations;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;


@Component
public class RequestLoggingInterceptor implements HandlerInterceptor {

    private static final Logger logger = LoggerFactory.getLogger(RequestLoggingInterceptor.class);

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        logger.info("Incoming request: Method = {}, URI = {}, Protocol = {}, RemoteAddr = {}",
                request.getMethod(),
                request.getRequestURI(),
                request.getProtocol(),
                request.getRemoteAddr());
        return true;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        logger.info("Outgoing request: Method = {}, URI = {}, Protocol = {}, RemoteAddr = {}, Response = {}",
                request.getMethod(),
                request.getRequestURI(),
                request.getProtocol(),
                request.getRemoteAddr(),
                response.getStatus()
        );
    }
}
