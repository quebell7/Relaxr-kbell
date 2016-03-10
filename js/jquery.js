// $(function pageReady() {
	$(document).ready(pageReady);





	function pageReady() {

///nav links

// $( ".nav-link" ).hover(function showRollover() {
//     $(".nav-link").addClass(".test") ;
//   }, function hideRollover() {
//     $(".nav-link").removeClass(".test");
//   }
// );

$( ".nav-link" ).hover(function showRollover() {
		 event.preventDefault();
    $(this).addClass("test");
    $(this).show("thickLine");

 }, function removeRollover() {
 		 event.preventDefault();
    $(this).removeClass("test");
} );

// function showLine() {
//     if ( $( ".thickline" ).is( ":hidden" ) ) {
//     $( ".thickline" ).slideDown( "slow" );
//     console.log("muffin");
//   } else {
//     $( ".thickline" ).hide();
//   }


/// article links

	$(".blog-link").click(function hideLink() {
		 event.preventDefault();
       $(".blog-link").hide();
        $(".panel").slideToggle("slow");
   } );



	$(".blog-link-less").click(function showLink() {
		event.preventDefault();
       	$(".panel").slideToggle("slow", showLater);

   } );


	function showLater() {
		$(".blog-link").show();
	}



/// sidebar links


	$(".sidebar-link").click(function hideSideLink() {
		event.preventDefault();
       $(".sidebar-link").hide();
        $("#side-panel").slideToggle("slow");
   } );



	$(".sidebar-close").click(function showSideLink() {
		event.preventDefault();
       	$("#side-panel").slideToggle("slow", showCloseLink);

   } );


	function showCloseLink() {
		$(".sidebar-link").show();
	}



}





	
// $(function showLink (){
// 	$(".blog-link-less").click(function showLink() {
//        $(this).show()
//    } );
// } );



// $(document).ready(function(){
//     $(".blog-link").click(moreContent(){
//         $("#panel").slideToggle("slow");
//     });
// });




// $(function lessContent (){
// 	$(".blog-link").click(function lessContent() {
//        $(".post p").hide("500")
//    } );
// } );




//   $(".post").on("click", "p", function() {
//     $(this).find(".more-content").slideToggle();
//     $(this).find(".ion-chevron-down").toggleClass("ion-chevron-up");
//   });
// });

// $(document).ready(function(){
//         $('.blogLinkClosed').hide();
//     });


// $(document).ready(function(){
//     $(".blogLinkOpen").click(function(){
//         $("p").show("blog-post p");
//     });
//     $(".blogLinkClosed").click(function(){
//         $("p").hide("blog-post p");
//     });
// });
// $(".blog-link").click(showMoreText);


        // All of you site's JavaScript goes here       



