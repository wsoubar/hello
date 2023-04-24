package br.com.wsoubar.hello.controller;

import java.util.Random;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.wsoubar.hello.vo.HelloVO;

@RestController
public class HomeController {
    Logger logger = LoggerFactory.getLogger(HomeController.class);

    // @CrossOrigin(origins = "http://localhost:8080")
    @GetMapping("/home")
    public ResponseEntity<?> name() {
        HelloVO vo = randomHello();
        // vo.setNome("Wagner");
        // vo.setSobrenome("Barbosa");
        logger.debug(vo.toString());

        logger.trace("A TRACE Message");
        logger.debug("A DEBUG Message");
        logger.info("An INFO Message");
        logger.warn("A WARN Message");
        logger.error("An ERROR Message");        
        return ResponseEntity.ok(vo);
    }

    @PostMapping("/homePost")
    public ResponseEntity<?> homePost(@RequestParam("valor") int valor) {
        HelloVO vo = new HelloVO();
        vo.setNome(valor + " Wagner");
        vo.setSobrenome("Barbosa");
        logger.debug("Nome: " + vo.getNome() + " - " + vo.getSobrenome());
        return ResponseEntity.ok(vo);
    }

    private HelloVO randomHello() {

        HelloVO vo = new HelloVO();
        vo.setNome(randomize());
        vo.setSobrenome(randomize());
        return vo;
    }

    private String randomize() {
        int leftLimit = 97; // letter 'a'
        int rightLimit = 122; // letter 'z'
        int targetStringLength = 10;
        Random random = new Random();
        String generatedString = random.ints(leftLimit, rightLimit + 1)
                .limit(targetStringLength)
                .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
                .toString();
        return generatedString;
    }

}
