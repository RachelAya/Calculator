var add = function(number1, number2) {
        return number1 + number2;
      };

      var substract = function(number1, number2) {
        return number1 - number2;
      };

      var multiply = function(number1, number2) {
        return number1 * number2;
      };

      var divide = function(number1, number2) {
        return number1 / number2;
      };

      $(document).ready(function() {
        $("form#add").submit(function(event) {
          event.preventDefault();
          var number1 = parseInt($("#add1").val());
          var number2 = parseInt($("#add2").val());
          var result = add(number1, number2);
        $("#outputAdd").text(result);
        });
      });

        $(document).ready(function() {
        $("form#sub").submit(function(event) {
          event.preventDefault();
          var number1 = parseInt($("#sub1").val());
          var number2 = parseInt($("#sub2").val());
          var result = substract(number1, number2);
        $("#outputSub").text(result);
        });
      });
