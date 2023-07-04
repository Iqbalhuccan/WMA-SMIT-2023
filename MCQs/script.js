
    function calculateScore() {
      var form = document.getElementById("quiz-form");
      var score = 0;

      // Questions and correct answers
      var answers = {
        q1: "Paris",
        //Add the remaining questions and answers here
        q2: "Islamabad",
        q3: "New Dehli",
        // q4: "",
        // q5: "Answer 5"
      };

      // Loop through the questions and check the selected answer
      for (var question in answers) {
        var selectedOption = form.elements[question].value;
        if (selectedOption === answers[question]) {
          score++;
        }
      }

      // Display the score
      var scoreDisplay = document.getElementById("score");
      scoreDisplay.innerHTML = "Your score: " + score + " out of 5";
    }
