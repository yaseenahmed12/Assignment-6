jQuery(document).ready(function($) {
    //Write a program that takes two user inputs for first and
    //last name using prompt and merge them in a new variable
    //titled fullName. Greet the user using his full name.
    var fName = prompt("Enter First Name");
    var lName = prompt("Enter Last Name");
    var fullName = fName + lName;
    document.write("Greet", " " , fullName , "<br>");

    // Write a program to take a user input about his favorite
    // mobile phone model. Find and display the length of user
    // input in your browser
    var favoriteMobileModel = prompt("Enter favorite Mobile Phone Model");
    document.write("My favorite phone is:", " " , favoriteMobileModel , "<br>");
    var stringLength = favoriteMobileModel.length;
    document.write("Length of string:", " " , stringLength , "<br>");

    // Write a program to find the index of letter “n” in the word
    // “Pakistani” and display the result in your browser .
    var str = 'Pakistani';
    var position = str.indexOf('n');
    document.write("String:", " " , str , "<br>");
    document.write("Index of 'n':", " " , position, "<br>");

    // Write a program to find the last index of letter “l” in the
    // word “Hello World” and display the result in your browser
    var lastIndex = 'Hello World';
    var lastIndexposition = lastIndex.lastIndexOf('l');
    document.write("String:", " " , str , "<br>");
    document.write("Index of 'l':", " " , lastIndexposition, "<br>");

    // Write a program to find the character at 3rd index in the
    // word “Pakistani” and display the result in your browser.
    var findCharacter = 'Pakistani';
    var index = findCharacter.charAt(3);
    document.write("String:", " " , findCharacter , "<br>");
    document.write("character at index 3:", " " , index , "<br>");

    // Repeat Q1 using string concat() method.
    var fName = prompt("Enter First Name");
    var lName = prompt("Enter Last Name");
    var fullName = fName.concat(lName);
    document.write("Greet", " " , fullName , "<br>");

    // Write a program to replace the “Hyder” to “Islam” in the
    // word “Hyderabad” and display the result in your browser.

    var cityHyderabad = "Hyder";
    var resHyderabad = cityHyderabad.replace("Hyder", "Hyderabad");
    var cityIslamabad = "Islam";
    var resIslamabad = cityIslamabad.replace("Islam", "Islamabad");
    document.write("City", " " , resHyderabad , "<br>");
    document.write("After replacement", " " , resIslamabad , "<br>");

    // Write a program to replace all occurrences of “and” in the
    // string with “&” and display the result in your browser.
    // var message = “Ali and Sami are best friends. They play cricket and
    // football together.”;

    var message = "Ali and Sami are best friends.They play cricket and football together."
    var resMessage = message.replace(/and/g, "&");
    document.write( resMessage , "<br>");

    // Write a program that converts a string “472” to a number
    // 472. Display the values & types in your browser.

    var stringNumber = "472";
    var stringType = typeof "472";
    var convertStringNumber = parseInt(stringNumber);
    var type = typeof convertStringNumber;
    document.write( "Value:", stringNumber , "<br>");
    document.write( "Type:", stringType , "<br>");
    document.write( "Value:", convertStringNumber , "<br>");
    document.write( "Type:", type , "<br>");

    //Write a program that takes user input. Convert and show the input in capital letters.
    var biscuitName = prompt("Enter Biscuit Name");
    document.write( "User Input:", biscuitName , "<br>");
    var biscuitNameUppcase = biscuitName.toUpperCase();
    document.write( "Upper case:", biscuitNameUppcase , "<br>");

    // Write a program that takes user input. Convert and
    // show the input in title case.
    var userInput = prompt("Enter Anything").toLowerCase();
    document.write( "Upper case:", userInput , "<br>"); 
    var userInputFirstLetterUpperCase = userInput.charAt(0).toUpperCase() + userInput.substr(1).toLowerCase();
    document.write( "Upper case:", userInputFirstLetterUpperCase, "<br>"); 

    // Write a program that converts the variable num to string.
    // var num = 35.36 ;
    // Remove the dot to display “3536” display in your browser 
    var num = "35.36";
    document.write( "Number:", num , "<br>"); 
    checkedNew = num.split('.').join("");
    document.write( "Number:", checkedNew, "<br>");

    // Write a program to take user input and store username
    // in a variable. If the username contains any special symbol
    // among [@ . , !], prompt the user to enter a valid username.
    // For character codes of [@ .
    var input = prompt("Enter Name");
    for (var i = 0; i < input.length; i++)
    {   
      var checkChar = input.charCodeAt(i);
      if (checkChar >=  33)
      {
        alert ("File name has special characters !,.@ \nThese are not allowed\n");
         
      }else {
        alert("No special characters");
      }
    }

    // You have an array
    // A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
    // Write a program to enable “search by user input” in an
    // array. After searching, prompt the user whether the given
    // item is found in the list or not.
    // Note: Perform case insensitive search. Whether the user
    // enters cookie, Cookie, COOKIE or coOkIE, program
    // should inform about its availability. Example:
    var search = prompt("Welcome to ABC bakery. What do you want to order sir/mam?").toLowerCase();
    var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
    var cookieIndex = bakery.indexOf("cookie");

    if(bakery.includes(search)){
        document.write(search," ", "is <strong>available</strong> at index", cookieIndex , " ", "our bakery" , "<br>");
    } else{
        document.write( "We are sorry", " " , search , "is <strong>not available</strong> in our bakery" , "<br>");
    }

    // Write a program to take password as an input from
    // user. The password must qualify these requirements:
    // a. It should contain alphabets and numbers
    // b. It should not start with a number
    // c. It must at least 6 characters long
    // If the password does not meet above requirements,
    // prompt the user to enter a valid password.
    // For character codes of a-z, A-Z & 0-9, refer to ASCII
    // table at the end of this document.
    var userPassword = prompt("Enter your password");
    var passRegex = /^[A-Za-z]\w{7,14}$/;
    if(userPassword.match(passRegex)) {
        alert("Password is correct");
    }else {
        alert("Password can not begin with a number Please Enter Valid");
    }

    // Write a program to display the last character of a user input.
    var ShowUserInputLastChar = prompt("Enter a name");
    document.write( "User Input", " " , ShowUserInputLastChar ,"<br>");
    var lastChar = ShowUserInputLastChar.slice(-1);
    document.write( "Last character of Input:", " " , lastChar ,"<br>");

    // Write a program to convert the following string to an
    // array using string split method.
    var university = "University of Karachi";
    var ar = university.split(''); // split string on comma space
    document.write(ar);

    //You have a string “The quick brown fox jumps over the
    //lazy dog”. Write a program to count number of
    //occurrences of word “the” in given string.
    var temp = "The quick brown fox jumps over the lazy dog";
    var count = (temp.match(/the/g) || []).length;
    console.log(count);

     // Write a program that takes a positive integer from user &
    // display the following in your browser.
    // a. number
    // b. round off value of the number
    // c. floor value of the number
    // d. ceil value of the number  
    var number = parseFloat(prompt("Enter number"));
    if( number > 0 ) {
       document.write("Number", " " , number , "<br>"); 
       var roundOff = Math.round(number);
       document.write("Number", " " , roundOff , "<br>"); 
       var floor = Math.floor(number);
       document.write("Number", " " , floor , "<br>");
       var ceil = Math.ceil(number);
       document.write("Number", " " , ceil , "<br>"); 
    }

    // Write a program that takes a negative floating point
    // number from user & display the following in your browser.
    // a. number
    // b. round off value of the number
    // c. floor value of the number
    // d. ceil value of the number
    var negativeNumber = parseFloat(prompt("Enter negativeNumber"));
    if( negativeNumber < 0 ) {
       document.write("negativeNumber", " " , negativeNumber , "<br>"); 
       var roundOff = Math.round(negativeNumber);
       document.write("negativeNumber", " " , roundOff , "<br>"); 
       var floor = Math.floor(negativeNumber);
       document.write("negativeNumber", " " , floor , "<br>");
       var ceil = Math.ceil(negativeNumber);
       document.write("Number", " " , ceil , "<br>"); 
    }
    

    // Write a program that displays the absolute value of a
    // number.
    // E.g. absolute value of -4 is 4 & absolute value of 5 is 5
    var absoluteNumber = parseInt(prompt("Enter absolute number"));
    var numberResult = Math.abs(absoluteNumber);
    document.write("Number", " " , numberResult , "<br>"); 

    // . Write a program that simulates a dice using random()
    // method of JS Math class. Display the value of dice in your
    // browser.:
    var diceRoll = Math.floor( Math.random() * 6 ) +1;
    document.write('random dice value: ' + diceRoll , "<br>");

    // Write a program that simulates a coin toss using random()
    // method of JS Math class. Display the value of coin in your
    // browser
    var heads = 0;
    var tails = 0;
    var x = parseInt(prompt("Enter number"));
    x = (Math.floor(Math.random() * 2) == 0);
    if(x){
        document.write('random coin value: ' + "head" , "<br>");
    }else{
        document.write('random dice value: ' + "tails" , "<br>");
    }

    // Write a program that shows a random number between 1
    // and 100 in your browser.
    var randomNumber = Math.floor(Math.random() * 201) - 100;
    console.log(randomNumber);


    // Write a program that stores a random secret number from
    // 1 to 10 in a variable. Ask the user to input a number
    // between 1 and 10. If the user input equals the secret
    // number, congratulate the user.
    var num = Math.ceil(Math.random() * 10);
    var gnum = prompt('Guess the number between 1 and 10 inclusive');
    if (gnum == num) {
        console.log('Matched');
    }   
    else {
        console.log('Not matched, the number was '+gnum);
    }

    // Write a program that displays current date and time in
    // your browser
    var currentdate = new Date(); 
    var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    document.write("Date Time", " " , datetime , "<br>");

    //Write a program that alerts the current month in words.
    //For example December. 
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    var d = new Date();
    var n = month[d.getMonth()];
    document.write("Current month", " " , n , "<br>");

    // Write a program that alerts the first 3 letters of the current
    // day, for example if today is Sunday then alert will show
    // Sun.
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date();
    var dayName = days[d.getDay()];
    var firtThreeLetter = dayName.substring(0,3);
    document.write("Today is", " " , firtThreeLetter , "<br>");

    //Write a program that displays a message “It’s Fun day” if
    //its Saturday or Sunday today.   
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date();
    var dayNames = days[d.getDay()];
    if( dayNames == "Saturday" || dayNames == "Sunday") {
       document.write("Today is fun day", " " , "<br>"); 
    } else {
        document.write("Today is working day", " " , "<br>");
    }

    //. Write a program that shows the message “First fifteen
    // days of the month” if the date is less than 16th of the month
    // else shows “Last days of the month”.
    var currentdate = new Date(); 
    var date = currentdate.getDate()
    if(date < 15) {
        document.write("First fifteen days", " " , "<br>");
    }else {
        document.write("Last fifteen days", " " , "<br>");
    }

    // Write a program that determines the minutes since
    // midnight, Jan. 1, 1970 and assigns it to a variable that
    // hasn't been declared beforehand. Use any variable you like
    // to represent the Date object.
    var startTime = new Date(); // at process start
    var endTime = new Date(); // at process end
    console.log('Process executed in ' + (endTime - startTime) + ' ms'); // at process end

    //Write a program that tests whether it's before noon and
    //alert “Its AM” else “its PM”.
    var hours = new Date();
    var mid='am';
    if(hours==0){ //At 00 hours we need to show 12 am
        document.write("It's AM", " " , "<br>");
    }
    else if(hours>12)
    {
        document.write("It's PM", " " , "<br>");
    }

    //Write a program that creates a Date object for the last day
    //of the last month of 2020 and assigns it to variable named
    //laterDate.
    var d = new Date();
    d.setMonth(4);
   
    // Write a program to ask the user about his age. Calculate
    // and show his birth year in your browser
    var DOB = "oct 23, 1993";
    var millisecondsBetweenDOBAnd1970 = Date.parse(DOB);
    var millisecondsBetweenNowAnd1970 = Date.now();
    var ageInMilliseconds = millisecondsBetweenNowAnd1970-millisecondsBetweenDOBAnd1970;
      var milliseconds = ageInMilliseconds;
      var second = 1000;
      var minute = second*60;
      var hour = minute*60;
      var day = hour*24;
      var month = day*30; 
       var year = day*365;
        var years = Math.round(milliseconds/year);

    function printResults(){
        var message = "Your Age is: "+years+
         "</br>" + "Your date of birth is: 1993";
       document.write(message);
    }

    window.onload = printResults;

    // Write a program to generate your K-Electric bill in your
    // browser. All the amounts should be rounded off to 2
    // decimal places. Display the following fields:
    // a. Customer Name
    // b. Current Month
    // c. Number of units
    // d. Charges per unit
    // e. Net Amount Payable (within Due Date)
    // f. Late Payment Surcharge
    // g. Gross Amount Payable (after Due Date)
    var customerName = prompt("Enter Customer name");
    var currentMonth = prompt("Enter Current Month");
    var numberOfUnits = parseInt(prompt("Enter number of units"));
    var chargesPerUnit = parseInt(prompt("Enter charges per unit"));
    var netAmount = numberOfUnits * chargesPerUnit;
    var latePayment = 250;
    var grossPayment = netAmount + latePayment;
    document.write("<h2>K-Electric Bill</h2>", "<br>");
    document.write("<p>Customer Name</p>", customerName , "<br>");
    document.write("<p>Month</p>", currentMonth, "<br>");
    document.write("<p>Number of Units</p>", numberOfUnits, "<br>");
    document.write("<br>");
    document.write("<p>Net Amount Payable (within Due Date)</p>", netAmount, "<br>");
    document.write("<p>Gross Amount Payable (After Due Date)</p>", grossPayment, "<br>");

    //Write a function that displays current date & time in your
	//browser
	function dateTime() {
		var dateTime = new Date();
		document.write("Current Date", " " ,  dateTime , "<br>");
	}
	dateTime();

	// Write a function that takes first & last name and then it
	// greets the user using his full name
	function userName() {
		var userFirstName = prompt("Enter first name");
		var userLastName = prompt("Enter Last name");
		var userName = userFirstName + userLastName;
		document.write("Greets", " " ,  userName , "<br>");

	}
	userName();
	// Write a function that adds two numbers (input by user)
	// and returns the sum of two numbers
	function sumTwoNumbers() {
		var firstNumber = parseInt(prompt("Enter 1st Number"));
		var secondNumber = parseInt(prompt("Enter 2nd Number"));
		var sumOfNumber = firstNumber + secondNumber;
		document.write("Sum of Two Numbers", " " ,  sumOfNumber , "<br>");

	}
	sumTwoNumbers();

	// Write a function that takes three arguments num1, num2
	// & operator & compute the desired operation. Return and
	// show the desired result in your browser.
	function calculator() {
		var firstNumber = parseInt(prompt("Enter 1st Number"));
		var secondNumber = parseInt(prompt("Enter 2nd Number"));
		var operator = prompt("Enter operator");
		// var sumOfNumber = firstNumber + secondNumber;
		// document.write("Sum of Two Numbers", " " ,  sumOfNumber , "<br>");
		if (operator == "+") {
			var sumOfNumber = firstNumber + secondNumber;
			document.write("Sum of Two Numbers", " " ,  sumOfNumber , "<br>");
		}
		else if (operator == "-") {
			var minsuOfNumber = firstNumber - secondNumber;
			document.write("Minus of Two Numbers", " " ,  minsuOfNumber , "<br>");
		}
		else if (operator == "*") {
			var multiplicationOfNumber = firstNumber * secondNumber;
			document.write("Multiplication of Two Numbers", " " ,  multiplicationOfNumber , "<br>");
		}else if (operator == "/") {
			var divisionOfNumber = firstNumber / secondNumber;
			document.write("Division of Two Numbers", " " ,  divisionOfNumber , "<br>");
		}else {
			document.write("No operator found", " " , "<br>");
		}

	}
	calculator();

	//Write a function that squares its argument
	function square(square) {
		document.write("Argument", " ", square , "<br>");
		return square;
	}
	square("hello world");

	//Write a function that computes factorial of a number.	
	function factorialize(num) {
	  // If num = 0 OR num = 1, the factorial will return 1
	  if (num === 0 || num === 1)
	    return 1;
	  for (var i = num - 1; i >= 1; i--) {
	    // We store the value of num at each iteration
	    num = num * i; // or num *= i;
	  }
	  document.write("factorialize of number 5:", " ", num , "<br>");
	  return num; //120
	}
	factorialize(5);

	//Write a function that take start and end number as inputs
	//& display counting in your browser.
	function myCount() {
		var num1 = prompt("Please enter Number1");
		var num2 = prompt("Please enter Number2");

		var text = "";
		var i;
		for (i = num1; i <= num2; i++) {
		    text += "The number is " + i + "<br>";
		}
		document.write(text, "<br>");
	}
	myCount();

	// Write a nested function that computes hypotenuse of a
	// right angle triangle. 
	function calHypo() {
		var a = prompt("Please Enter Base Of Triangle:");
		var b = prompt("Please Enter Perpendicular Of Triangle:");
		var c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
  		document.write("Hypotenuse2 = Base2 + Perpendicular2 <br/> <br /> The Hypoth is: " + a + "cm + " + b + "cm = " + c + "cm" , "<br>");
	}	 
	calHypo();

	//Write a function that calculates the area of a rectangle.
	// A = width * height
	// Pass width and height in following manner:
	// i. Arguments as value
	// ii. Arguments as variables
	function areaOfTriangle() {
		var width = prompt("Please Enter Width Of Rectangle:", "Value");
		var height = prompt("Please Enter Height Of Rectangle: ", "Variable");
		var a = width * height;
  		document.write(" Formula: A = width * height <br/> <br /> The Area Of A Rectangle is: " " , " a , "<br>");
	}
	areaOfTriangle();

	// Write a JavaScript function that checks whether a passed
	// string is palindrome or not?
	// A palindrome is word, phrase, or sequence that reads the same backward as
	// forward, e.g., madam.
	function palindrome(str) {
		var re = /[^A-Za-z0-9]/g;
		str = str.toLowerCase().replace(re, '');
		var len = str.length;
			for (var i = 0; i < len/2; i++) {
		   		if (str[i] !== str[len - 1 - i]) {
		   			document.write("Entry is not a palindrome.", "<br>");
		       		return false;
		   		}
		 	}
		document.write("The entry is a palindrome." , "<br>");		 	
		return true;
	}
	palindrome('madam');
	palindrome('parrot');

	//Write a JavaScript function that accepts a string as a
	// parameter and converts the first letter of each word of the
	// string in upper case.
	// EXAMPLE STRING : 'the quick brown fox'
	// EXPECTED OUTPUT : 'The Quick Brown Fox'
	function uppercaseString(str) {
	  var string = str.split(' ');
	  var newarray = [];
	  for(var x = 0; x < string.length; x++){
	      newarray.push(string[x].charAt(0).toUpperCase()+string[x].slice(1));
	  }
	  return newarray.join(' ');
	}
	document.write(uppercaseString("the quick brown fox", "<br>"));

	// Write a JavaScript function that accepts a string as a
	// parameter and find the longest word within the string.
	// EXAMPLE STRING : 'Web Development Tutorial'
	// EXPECTED OUTPUT : 'Development'
	function longestWord(string) {
	  var stringArray = string.match(/\w[a-z]{0,}/gi);
	  var result = stringArray[0];

	  for(var i = 1 ; i < stringArray.length ; i++) {
	    if(result.length < stringArray[i].length) {
	    	result = stringArray[i];
	    } 
	  }
	  return result;
	}
	document.write(longestWord('Web Development Tutorial' , "<br>"));

	//Write a JavaScript function that accepts two arguments, a
	//string and a letter and the function will count the number of
	//occurrences of the specified letter within the string.
	//Sample arguments : 'JSResourceS.com', 'o'
	function char_count(str, letter) {
	 var letter_Count = 0;
		for (var position = 0; position < str.length; position++) {
		    if (str.charAt(position) == letter) {
		      	letter_Count += 1;
		    }
		}
	  	return letter_Count;
	}

	document.write(char_count('JSResourceS.com', 'o'));

	//Create 2 functions that calculate properties of a circle, using
	// the definitions here.
	// Create a function called calcCircumference:
	// • Pass the radius to the function.
	// • Calculate the circumference based on the radius, and output
	// "The circumference is NN".
	// Create a function called calcArea:
	// • Pass the radius to the function.
	// • Calculate the area based on the radius, and output "The area
	// is NN".
	// Circumference of circle = 2πr
	// Area of circle = πr2
	function calcCircumferenceOfCircle() {
		var area = 2;
		var pi = 3.14159265359;
		var radius = prompt("Please Enter Radius Of Circle:");
		var circumference = area  * pi * radius;
		document.write("The Circumference of circle is: " , circumference , "<br>" );
	}

	function calcArea() {
		var pi = 3.14159265359;
		var Arearadius = prompt("Please Enter Radius Of Circle:", "Radius ");
		var circle = pi * Math.pow(Arearadius, 2);

		document.write("The Area of circle is:" + circle);
	} 
   
});