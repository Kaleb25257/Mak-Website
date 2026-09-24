const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const phone = "251998057070";

    const text =
        "Hello, my name is " + name +
        "\nEmail: " + email +
        "\n\n" + message;

    const url =
        "https://wa.me/" + phone +
        "?text=" + encodeURIComponent(text);

    window.location.href = url;

});