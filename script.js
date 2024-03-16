    // Function to purchase a ticket
    function kjopBillett() {
        // Get values from form inputs
        let film = $("#film").val();
        let antall = $("#antall").val();
        let fnavn = $("#fnavn").val();
        let enavn = $("#enavn").val();
        let telefon = $("#telefon").val();
        let email = $("#email").val();

        // Validation
        if (film === "Velg film her") {
            $("#filmError").text("Vennligst velg en film");
            return;
        } else {
            $("#filmError").text("");
        }

        if (antall === "" || antall <= 0) {
            $("#antallError").text("Antall må være minst 1");
            return;
        } else {
            $("#antallError").text("");
        }

        if (fnavn === "") {
            $("#fnavnError").text("Vennligst skriv inn fornavnet ditt");
            return;
        } else {
            $("#fnavnError").text("");
        }

        if (enavn === "") {
            $("#enavnError").text("Vennligst skriv inn etternavnet ditt");
            return;
        } else {
            $("#enavnError").text("");
        }

        if (telefon === "") {
            $("#telefonError").text("Vennligst skriv inn telefonnummeret ditt");
            return;
        } else if (!nummerValid(telefon)) {
            $("#telefonError").text("Vennligst skriv gyldig telefonnummer (8 siffer)");
            return;
        } else {
            $("#telefonError").text("");
        }

        if (email === "") {
            $("#emailError").text("Vennligst skriv inn e-postadressen din");
            return;
        } else if (!isValidEmail(email)) {
            $("#emailError").text("Ugyldig e-postadresse");
            return;
        } else {
            $("#emailError").text("");
        }

        // Create billett object
        let billett = {
            film: film,
            antall: antall,
            fnavn: fnavn,
            enavn: enavn,
            telefon: telefon,
            email: email
        };

        // Add billett to the list
        billetter.push(billett);

        // Update table/display billett(er)
        updateBillettListe();

        // Clear input fields
        $("#film").val("Velg film her");
        $("#antall").val("");
        $("#fnavn").val("");
        $("#enavn").val("");
        $("#telefon").val("");
        $("#email").val("");
    }

// Function to delete all billetter
    function slettAlleBilletter() {
        billetter = [];
        updateBillettListe();
    }

// Function to update the billett list
    function updateBillettListe() {
        let ut = "<table><tr>" + "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" +
            "</tr>";
        for (let p of billetter) {
            ut += "<tr>";
            ut += "<td>" + p.film + "</td><td>" + p.antall + "</td><td>" + p.fnavn + "</td><td>" + p.enavn + "</td>" +
                "<td>" + p.telefon + "</td><td>" + p.email + "</td>";
            ut += "</tr>";
        }
        $("#billettListe").html(ut);
    }

// Function to validate email
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

// Function to validate phone number
    function nummerValid(telefon) {
        return telefon.match(/\d/g).length === 8;
    }

// Array to store tickets
    let billetter = [];