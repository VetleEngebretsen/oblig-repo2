package com.example.oblig2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
@RestController
public class HomeController {

    private List<Kino> bestillinger = new ArrayList<>();

    public static void main(String[] args) {
        SpringApplication.run(HomeController.class, args);
    }

    @PostMapping("/billetter")
    public void kjopBillett(@RequestBody Kino bestill) {
        bestillinger.add(bestill);
    }

    @GetMapping("/billetter")
    public List<Kino> getAllBookings() {
        return bestillinger;
    }

    @GetMapping("/slett")
    public void slettAlleBilletter() {
        bestillinger.clear();
    }

    // Model class for booking
    static class Kino {
        private String film;
        private int antall;
        private String fnavn;
        private String enavn;
        private String telefon;
        private String email;

        // Getters and setters
        public String getFilm() {
            return film;
        }

        public void setFilm(String film) {
            this.film = film;
        }

        public int getAntall() {
            return antall;
        }

        public void setAntall(int antall) {
            this.antall = antall;
        }

        public String getFnavn() {
            return fnavn;
        }

        public void setFnavn(String fnavn) {
            this.fnavn = fnavn;
        }

        public String getEnavn() {
            return enavn;
        }

        public void setEnavn(String enavn) {
            this.enavn = enavn;
        }

        public String getTelefon() {
            return telefon;
        }

        public void setTelefon(String telefon) {
            this.telefon = telefon;
        }

        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }
    }
}