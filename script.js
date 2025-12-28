function sayYes() {
      document.getElementById("response").style.display = "none";
      const congrats = document.getElementById("congratsBox");
      congrats.style.display = "block";
    }

    function sayMaybe() {
      const msg = document.getElementById("response");
      msg.style.display = "block";
      msg.textContent =
        "That’s completely okay. I respect you, and we can talk whenever you’re ready.";
      document.getElementById("congratsBox").style.display = "none";
    }
