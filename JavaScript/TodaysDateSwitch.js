<!DOCTYPE html>
<html>
<body>
<h3>This is a useful example of using a switch statement</h3>

<br>When you want to find out today's date, you could use code for that...
<br>
<p id="todayis"></p>

<script>
var day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
document.getElementById("todayis").innerHTML = "Today is " + day;
</script>

</body>
</html>
