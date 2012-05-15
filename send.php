<?php
	
   
/* Send an SMS using Twilio. You can run this file 3 different ways:
	 *
	 * - Save it as sendnotifications.php and at the command line, run 
	 *        php sendnotifications.php
	 *
	 * - Upload it to a web host and load mywebhost.com/sendnotifications.php 
	 *   in a web browser.
	 * - Download a local server like WAMP, MAMP or XAMPP. Point the web root 
	 *   directory to the folder containing this file, and load 
	 *   localhost:8888/sendnotifications.php in a web browser.
	 */

	// Step 1: Download the Twilio-PHP library from twilio.com/docs/libraries, 
	// and move it into the folder containing this file.
	require "lib/twilio-php/Services/Twilio.php";

	// Step 2: set our AccountSid and AuthToken from www.twilio.com/user/account
	$AccountSid = "AC9c75afdae7a14d479e9c49c7a6138d0e";
	$AuthToken = "40e99c77cf0467c7381d9f9a67723629";

	// Step 3: instantiate a new Twilio Rest Client
	$client = new Services_Twilio($AccountSid, $AuthToken);

	// Step 4: make an array of people we know, to send them a message. 
	// Feel free to change/add your own phone number and name here.
	$people = array(
		"+17022031417" => "Piotr Tomasik",
		
	);

	// Step 5: Loop over all our friends. $number is a phone number above, and 
	// $name is the name next to it
	foreach ($people as $number => $name) {

		$sms = $client->account->sms_messages->create(

		// Step 6: Change the 'From' number below to be a valid Twilio number 
		// that you've purchased, or the Sandbox number+1 
			"415-599-2671", 

			// the number we are sending to - Any phone number
			$number,

			// the sms body
			"Hey, this is the number that would have been sent: ". $_POST['cellphone']
		);

		// Display a confirmation message on the screen
		echo "Sent message to $name";
	}