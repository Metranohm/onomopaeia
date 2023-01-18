// Get the "Contact" link from the navbar
let contactLink = document.querySelector("nav a[href='#contact']");

// Add a click event listener to the link
contactLink.addEventListener("click", function() {
  // Get the "Contact" section
  let contactSection = document.querySelector("section#contact");

  // Change the text of the section
  contactSection.innerHTML = "Thank you for your interest! Our contact information is currently being updated.";
});

<script>
document.querySelector('a[href^="mailto"]').addEventListener('click', function (event) {
    preventDefault()};
    window.location.href = this.href;
});
</script>