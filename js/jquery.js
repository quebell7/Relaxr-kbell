// $(function pageReady() {
	$(document).ready(pageReady);


/// article links


	function pageReady() {

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



