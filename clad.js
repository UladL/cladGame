var GetRandomNumber = function (size){
    return Math.floor(Math.random() * size)
  }

  var width = 800;
  var height = 800;
  var click = 0;
  var vova = 49;

  var target = {
    x: GetRandomNumber(width),
    y: GetRandomNumber(height)
  }

  var getDistance = function (event, target){
    var diffX = event.offsetX - target.x;
    var diffY = event.offsetY - target.y;
    return Math.sqrt((diffX*diffX)+(diffY*diffY))
  }
  var getDistanceHint = function (distance){
    if (distance < 20 ){
      return "обожжёшься"
    }else if (distance < 40){
      return "очень горячо"
    }else if (distance < 80){
      return "Горячо!"
    }else if(distance < 160){
      return "Тепло"
    }else if(distance < 320){
      return "Холожно"
    }else if (distance < 640){
      return "Очень холодно!"

    }else if (distance < 750){
      return "Очень очень холодно!"
    }
    else {
      return "Замерз!"
    }
  }
  $("#map").click(function (event){
    click++;
    var distance = getDistance(event,target);
    var distanceHint = getDistanceHint(distance)
    $("#distance").text(distanceHint)
    if (distance < 16){
      alert("Клад найден кликов: " + click)
    }if (click > vova){
      alert("Коней ишры!")
    }
    $("#clicks").text(vova - click);
  });
