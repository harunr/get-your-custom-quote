<?php
    foreach ($_POST as $key => $value) {
        $$key = $value;
    }
	
	$emailTo = "wptofael@gmail.com";
	$newLine = "\r\n";
	$emailSubject = "Get your custom quote";
	$emailMessage .= "Clipping Path: $Clippingpath$newLine";
	$emailMessage .= "Multi Clipping Path: $Multiclippingpath$newLine";
	$emailMessage .= "Image Masking: $Imagemasking$newLine";
	$emailMessage .= "Shadow: $Shadow$newLine";
	$emailMessage .= "Dust Spot and Scratch Removal: $Dustspotscratchremoval$newLine";
	$emailMessage .= "Beauty Airbrushing: $Beautyairbrushing$newLine";
	$emailMessage .= "Camera Reflection Removal: $Camerareflectionremoval$newLine";
	$emailMessage .= "Wrinkle on Clothing: $Wrinkleonclothing$newLine";
	$emailMessage .= "Ghost Mannequin: $Ghostmannequin$newLine";
	$emailMessage .= "Color Variants: $Colorvariants$newLine";
	$emailMessage .= "Logo: $Vectorconversion$newLine";
	$emailMessage .= "Artwork: $Vectorconversion$newLine";
	$emailMessage .= "Line Drawing: $Vectorconversion$newLine";
	$emailMessage .= "Illustration: $Vectorconversion$newLine";
	$emailMessage .= "Additional information: $Turnaround$newLine";
	$emailMessage .= "Add on services: $QuotationStraighten$newLine";
	$emailMessage .= "Add on services: $Quotationimagewidth$newLine";
	$emailMessage .= "Add on services: $Quotationimageheight$newLine";
	$emailMessage .= "ADDITIONAL COMMENTS: $Quotationadditionalcomment$newLine";
	$emailMessage .= "NUMBER OF IMAGES: $Quotationquantity$newLine";
	$emailMessage .= "FIRST NAME: $Quotationfirstname$newLine";
	$emailMessage .= "LAST NAME: $Quotationlastname$newLine";
	$emailMessage .= "YOUR EMAIL: $Quotationemail$newLine";
	$emailHeaders = "From: $name  <$Email>\r\n";
	$m = mail( $emailTo, $emailSubject, $emailMessage, $emailHeaders );
//	echo( $m );
?>

<div class="tab-pane fade active show" id="contact-info" role="tabpanel" aria-labelledby="contact-info-tab">	
	<h2>Thank You!</h2>
	<p class="step-label mb-1">We have received your request for a free interest rate quote. We will review the information you submitted and provide you with a personalized rate quote as soon as possible.</p>
</div>
