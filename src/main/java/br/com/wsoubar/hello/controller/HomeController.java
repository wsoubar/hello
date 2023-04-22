package br.com.wsoubar.hello.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.wsoubar.hello.vo.HelloVO;

@RestController
public class HomeController {
    //@CrossOrigin(origins = "http://localhost:8080")
    @GetMapping("/home")
    public ResponseEntity<?> name() {
        HelloVO vo = new HelloVO();
        vo.setNome("Wagner");
        vo.setSobrenome("Barbosa");
        System.out.println("Nome: "+ vo.getNome() + " - " + vo.getSobrenome());
        return ResponseEntity.ok(vo);
    }

    @PostMapping("/homePost")
    public ResponseEntity<?> homePost(@RequestParam("valor") int valor) {
        HelloVO vo = new HelloVO();
        vo.setNome(valor + " Wagner");
        vo.setSobrenome("Barbosa");
        System.out.println("Nome: "+ vo.getNome() + " - " + vo.getSobrenome());
        return ResponseEntity.ok(vo);
    }

}
