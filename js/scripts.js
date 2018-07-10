$(document).ready(function() {
  $(".sentence").submit(function(event) {
    var userInputInJs = $("input.userInput").val();
    console.log(userInputInJs);
    var finalPuzzle = [];
    event.preventDefault();
     $("p.display").text(userInputInJs)
    // $(".sentence").show();
    // $("#puzzle").hide();


    for (var index =0; userInputInJs.length > index; index +=1 ) {
      // console.log(index);
      var place = userInputInJs[index];
      console.log(place);
      if(place === "a" || place === "e" || place === "i" || place === "o" || place === "u") {
        finalPuzzle[index]="-";
      } else {
          finalPuzzle[index] = place;
      }

      if (index === userInputInJs.length-1 ) {
        console.log(finalPuzzle);
        // $("userInputInJs").text(finalPuzzle.join(''));
        $("p.display").text(finalPuzzle.join(''));
      }
    }


    //
    // $("#return").click(function() {
    //   $("#puzzle").show();
    //   $(".sentence").hide();
    // });
  });
});
