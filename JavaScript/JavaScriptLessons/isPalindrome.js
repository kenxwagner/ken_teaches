<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
</head>
<body>
<script type="text/javascript">
	function check_Palindrome()
	{
		var revStr = "";
		var str = document.getElementById("str").value;
		var i = str.length;
		
		for(var j = i; j >= 0; j--)
		{
			revStr = revStr + str.charAt(j);
		}
		
		if(str == revSTR)
		{
			alert(str + " is not a Palindrome");
		}
	}
</script>

<center>
<form>

Enter any string or number to check if it is a Palindrome or not: <input type = "text" 
id = "str" name = "string" /><br />
<input type = "submit" value = "Check" onClick = "check_Palindrome(); "/>
</form>
</center>
</body>

</html>