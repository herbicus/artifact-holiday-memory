// OH YEAH!!!!!!!!!!!
console.log("main.js loaded");

if (!window.console) window.console = {};
if (!window.console.log) window.console.log = function() {};

var holidayCardAPI = (function(options) {
	var shared = {},
		options = options || {}

		// QUESTIONS FOR CHRIS - order of importance

		// PRELOADER UTILITY
		var AceLoadImages = AceLoadImages || function(a, d, z) {
			a instanceof Array || (a = [a]);
			for (var e = a.length, f = 0, g = e; g--;) {
				var b = document.createElement("img");
				b.onload = function() {
					f++; 
					f >= e && isFunction(d) && d(z)
				};
				b.src = a[g]; 
			}
		}

		var isFunction = isFunction || function(functionToCheck) {
			var getType = {};
			return functionToCheck && getType.toString.call(functionToCheck) == '[object Function]';
		}

		
		// USE
		AceLoadImages([
			"assets/img/1_JurassicPark/jurassic-a.gif",
			"assets/img/2_Matrix/matrix-a.gif",
			"assets/img/3_Exorcist/exorcist-av2.gif",
			"assets/img/4_PinkPanther/pinkpanther-av2.gif",
			"assets/img/5_MissionImpossible/artifact-holiday-missionImpossibleBen2.gif",
			"assets/img/6_DeathStar/death-star-av2.gif",
			"assets/img/7_KillBill/kill-bill-av2.gif",
			"assets/img/8_Terminator/terminator-a.gif"

		], imagesAreLoaded);

		function imagesAreLoaded() {
			// do whatever it is that cant happen before the images are ready
			// TweenMax.to("#splash-overlay" , 0.75, {
		 //  		scale: 0,
		 //  		autoAlpha: 0,
		 //  		ease: Back.easeInOut
		 //  	});
			TweenMax.to(".l-loader-container" , 0.75, {
				//scale: 0,
				autoAlpha: 0,
				ease: Quad.easeInOut
			});
			TweenMax.to("#start-btn" , 0.75, {
				scale: 1,
				autoAlpha: 1,
				ease: Back.easeInOut
			});
		}

		// OK YOU CAN STOP NOW YOUR BACK TO THE GOOD SPOT
		//


	
		var cardImages = [
			// 1 row1a - TERMINATOR - UPPER
			{
				playCard: "assets/img/8_Terminator/Terminator_lowerRight_START.jpg",
				audio: "assets/audio/Terminator_AUDIO-x.mp3",
				animated: "assets/img/8_Terminator/terminator-a.gif",
				matched: "assets/img/8_Terminator/Terminator_topLeft_END.jpg",
				duration: "25000"
			},
			// 2 row1b - EXORCIST - UPPER
			{
				playCard: "assets/img/3_Exorcist/exorcist_lower_start.jpg",
				audio: "assets/audio/exorcist-x.mp3",
				animated: "assets/img/3_Exorcist/exorcist-av2.gif",
				matched: "assets/img/3_Exorcist/exorcist_upper_end.jpg",
				duration: "18000"
			},
			// 3 row 1c - MISSION IMPOSSIBLE - UPPER
			{
				playCard: "assets/img/5_MissionImpossible/5_MissionImp_Square2_FIRST2.jpg",
				audio: "assets/audio/5_MissImp_AUDIO.mp3",
				animated: "assets/img/5_MissionImpossible/artifact-holiday-missionImpossibleBen2.gif",
				matched: "assets/img/5_MissionImpossible/5_MissionImp_Square2_LAST2.jpg",
				duration: "17000"
			},
			// 4 row1d - KILL BILL - UPPER
			{
				playCard: "assets/img/7_KillBill/KillBill_top_START.jpg",
				audio: "assets/audio/kill-bill.mp3",
				animated: "assets/img/7_KillBill/kill-bill-av2.gif",
				matched: "assets/img/7_KillBill/KillBill_top_END.jpg",
				duration: "9500"
			},
			// 5 row2a - PINK PANTHER - UPPER
			{
				playCard: "assets/img/4_PinkPanther/pinkpanther_lowerright_start.jpg",
				audio: "assets/audio/pinkpanther.mp3",
				animated: "assets/img/4_PinkPanther/pinkpanther-av2.gif",
				matched: "assets/img/4_PinkPanther/pinkpanther_upperleft_end.jpg",
				duration: "17000"
			},
			// 6 row2b - EXORCIST - LOWER
			{
				playCard: "assets/img/3_Exorcist/exorcist_lower_start.jpg",
				audio: "assets/audio/exorcist-x.mp3",
				animated: "assets/img/3_Exorcist/exorcist-av2.gif",
				matched: "assets/img/3_Exorcist/exorcist_lower_end.jpg",
				duration: "18000"
			},
			// 7 row 2c - JURRASIC PARK - UPPER
			{
				playCard: "assets/img/1_JurassicPark/Upper_START.jpg",
				audio: "assets/audio/JurrasicPark_AUDIO.mp3",
				animated: "assets/img/1_JurassicPark/jurassic-a.gif",
				matched: "assets/img/1_JurassicPark/Upper_END.jpg",
				duration: "17000"
			},
			// 8 row2d - DEATH STAR - UPPER
			{
				playCard: "assets/img/6_DeathStar/DeathStar_UpperRight_START.jpg",
				audio: "assets/audio/DeathStar_AUDIO.mp3",
				animated: "assets/img/6_DeathStar/death-star-av2.gif",
				matched: "assets/img/6_DeathStar/DeathStar_UpperRight_END.jpg",
				duration: "14000"
			},
			// 9 row3a - MATRIX - LEFT
			{
				playCard: "assets/img/2_Matrix/Matrix_int_both.jpg",
				audio: "assets/audio/Matrix_SFX.mp3",
				animated: "assets/img/2_Matrix/matrix-a.gif",
				matched: "assets/img/2_Matrix/Matrix_L_end.jpg",
				duration: "17000"
			},
			// 10 row3b - MISSION IMPOSIBLE - LOWER
			{
				playCard: "assets/img/5_MissionImpossible/5_MissionImp_Square2_FIRST2.jpg",
				audio: "assets/audio/5_MissImp_AUDIO.mp3",
				animated: "assets/img/5_MissionImpossible/artifact-holiday-missionImpossibleBen2.gif",
				matched: "assets/img/5_MissionImpossible/5_MissionImp_Square1_LAST2.jpg",
				duration: "17000"
			},
			// 11 row3c - TERMINATOR - LOWER
			{
				playCard: "assets/img/8_Terminator/Terminator_lowerRight_START.jpg",
				audio: "assets/audio/Terminator_AUDIO-x.mp3",
				animated: "assets/img/8_Terminator/terminator-a.gif",
				matched: "assets/img/8_Terminator/Terminator_lowerRight_END.jpg",
				duration: "25000"
			},
			// 12 row3d - MATRIX - LOWER
			{
				playCard: "assets/img/2_Matrix/Matrix_int_both.jpg",
				audio: "assets/audio/Matrix_SFX.mp3",
				animated: "assets/img/2_Matrix/matrix-a.gif",
				matched: "assets/img/2_Matrix/Matrix_R_end.jpg",
				duration: "17000"

				// playCard: "assets/img/KillBill_top_START.jpg",
				// audio: "assets/audio/kill-bill.mp3",
				// animated: "assets/img/7_KillBill/kill-bill-a.gif",
				// matched: "assets/img/7_KillBill/Bottom_2.jpg",
				// duration: "9500"
			},
			// 13 row4a - DEATH STAR - LOWER
			{
				playCard: "assets/img/6_DeathStar/DeathStar_UpperRight_START.jpg",
				audio: "assets/audio/DeathStar_AUDIO.mp3",
				animated: "assets/img/6_DeathStar/death-star-av2.gif",
				matched: "assets/img/6_DeathStar/DeathStar_LowerLeft_END.jpg",
				duration: "14000"
			},
			// 14 row4b - JURRASIC PARK - LOWER
			{
				playCard: "assets/img/1_JurassicPark/Upper_START.jpg",
				audio: "assets/audio/JurrasicPark_AUDIO.mp3",
				animated: "assets/img/1_JurassicPark/jurassic-a.gif",
				matched: "assets/img/1_JurassicPark/Lower_END.jpg",
				duration: "17000"
			},
			// 15 row4c - PINK PANTHER - LOWER
			{
				playCard: "assets/img/4_PinkPanther/pinkpanther_lowerright_start.jpg",
				audio: "assets/audio/pinkpanther.mp3",
				animated: "assets/img/4_PinkPanther/pinkpanther-av2.gif",
				matched: "assets/img/4_PinkPanther/pinkpanther_lowerright_end.jpg",
				duration: "17000"
			},
			// 16 row4d - KILL BILL - LOWER
			{
				
				playCard: "assets/img/7_KillBill/KillBill_top_START.jpg",
				audio: "assets/audio/kill-bill.mp3",
				animated: "assets/img/7_KillBill/kill-bill-av2.gif",
				matched: "assets/img/7_KillBill/KillBill_lower_END.jpg",
				duration: "9500"
			}
		];
		
		var layoutCards = function(){
			var output = "<ol>"; 
			
			for (var i = 0; i < 16; i++) { 
			  output += "<li class='playing-card'>";
			  // output += "<img src = '" + cardImages[i].playCard + "' data-src='" + cardImages[i].playCard + "' data-animated-src='" + cardImages[i].animated + "'/>";
			  output += "<img src = '" + cardImages[i].playCard + "' data-src='" + cardImages[i].playCard + " ' data-matched-src='" + cardImages[i].matched + " ' data-audio-src='" + cardImages[i].audio + "' data-animated-src='" + cardImages[i].animated + " ' data-duration-src='" + cardImages[i].duration + " '/>";
			  output += "</li>";
			}
			output += "</ol>";
			
			// STICK <ol> IN HTML AND HIDE IMAGE
			document.getElementById("game-container").innerHTML = output;

			TweenMax.to(".playing-card img" , 0, {
				autoAlpha: 0,
				rotationY: 0,
				ease: Linear.easeNone
			});

			TweenMax.to("li", 0, {
				rotationY: 0,
				ease: Linear.easeNone
			})
		}

		// INIT FUNCTION
		var init = function() {
			console.log('holiday card works');
			//imagesAreLoaded();
		
			// LAY OUT THE PLAYCARDS
			layoutCards();

			// GAME VARIABLES - THE GUESSES
			var guess1 = "";
			var guess2 = "";
			var choices = [];
			var count = 0;

			var animationActivation = function() {
				
				// CREATE AUDIO TAG AND INSERT "source"
				//var $animationAudio = $("<audio id = 'cardAudio'></audio>");
				var $lockingCard = document.createElement("div");

				var $animationAudio = document.createElement("audio");
				$animationAudio.id="cardAudio";
				$animationAudio.setAttribute("preload", "auto");
				//$animationAudio.appendTo("body");

				
				var $source1 = document.createElement('source');
				$source1.type= 'audio/mpeg';
				//$source1.src= 'assets/audio/DeathStar_AUDIO.mp3';
				//$source1.src= $(choices[0]).attr("data-audio-src");
				$source1.setAttribute("src", $(choices[0]).find("img").attr("data-audio-src") );
				
				$animationAudio.appendChild($source1);
				console.log($animationAudio);
				console.log($source1);
	
				//$source1.src = choices[0]."data-audio-src";
				//audioElement.autobuffer = true;

				// var source2 = document.createElement('source');
				// source2.type= 'audio/ogg';
				// source2.src= 'assets/audio/ost.ogg';
				// audioElement.appendChild(source2);

				//$animationAudio.play();
				//console.log(animationAudio);
				var animationDuration;
				for (var time in choices) {
					var $t = $(choices[time]);
					animationDuration = $(choices[time]).duration;
				}

				// Play the right Sound
				//$animationAudio.attr("src", $(choices[0]).find("source").attr("data-audio-src") );
				$animationAudio.play();

				// ----------------------------------------------------------
				// CREATE ANIMATION DIV OVERLAY
				var $animationOverlay = $("<div id='animation-overlay'></div>");
				$animationOverlay.appendTo(".game-row");

				// CREATE IMG TAG
				var $animationSelected = $("<img>");
				$animationSelected.appendTo($animationOverlay);

				// PLACE THE RIGHT GIF IN $animationOverlay & make it not draggable
				$animationSelected.attr("src", $(choices[0]).find("img").attr("data-animated-src") );
				$animationSelected.attr("draggable", "false");

				// CHANGE THE CARD FACE TO "end of animation" face
				for (var c in choices) {
					//$(choices[c]).addClass("match");
					var $img = $(choices[c]).find("img");
					//$img.attr("src", $img.attr("data-matched-src") );

					setTimeout(function(arguments) {
						arguments[0].addClass("match");
						arguments[1].addClass("match");
						arguments[0].attr("src", arguments[0].attr("data-matched-src") );
					}, 1000, [$img, $(choices[c])])
				}

				// ----------------------------------------------------------
				// PULL DURATION FROM OBJECT AND INSERT TO setTimeout function
				animationDuration = $(choices[0]).find("img").attr("data-duration-src");

				console.log("choices", choices);
				console.log("your time is: "+ animationDuration);

				setTimeout(function() { 
					// Animation starts
					TweenMax.to("#animation-overlay" , 0.1, {
						display: "block",
						autoAlpha: 1,
						zIndex: 5,
						ease: Linear.easeNone
					}); 

				}, 1);
				// Animation duration then fades out
				setTimeout(function() { 
					TweenMax.to("#animation-overlay" , 0.75, {
						display: "none",
						autoAlpha: 0,
						ease: Linear.easeNone,
						onComplete: function() {
							$("#animation-overlay").remove();
							$("#cardAudio").remove();

							// if ( $("li").find("img").hasClass("face-up") ){
							// 	console.log("ready for disable");
							// 	$(this).off("click");
							// }

							// $(this).hasClass("match").off("click");

							// $("button").click(function(){
							//   $("p").off("click");
							// });


							// // GAME OVER LOGIC - EVERY CARD HAS ".match" CLASS, DO....
							var foundAllMatches = false;
							
							if ( $("li").find("img").not(".face-up").length == 0 ) {
							//if ( $("li").hasClass("match").length === 16 ) {
								foundAllMatches = true;
							}

							if (foundAllMatches) {
							  console.log("game over man");
								setTimeout(function() { 
									// alert("Merry X-Mas");
									TweenMax.to("#end-overlay" , 0.75, {
										display: "block",
										autoAlpha: 1,
										scale: 1,
										top: 0,
										zIndex: 9999,
										ease: Back.easeInOut
									}); 

							    }, 500);
							}	
						} // END onComlete function()
					
					});
				}, animationDuration);
				//}, 10);

			} // END animationActivation() function

			// GAME LOGIC - MEMORY - CLICK EVENT
			$("li").on("click", function(event) {

				choices.push(this);

				// var elements = document.getElementsByTagName("li");
		  //       for (var i = 0; i < elements.length; i++) {
		  //           elements[i].onclick = function () { return false;}
		  //       }
				
				// DATA SET
				//choices.push(event.target.children[0]);
				console.log(choices);

				// AUDIO - CARD FLIP on.click
				var playing = false;

				if (playing == true) {
					document.getElementById('cardFlip').pause();
					playing = false;

				} else {
					document.getElementById('cardFlip').play();
					playing = true;
				}

				// document.getElementById('cardFlip').play();
				  
				if ((count < 2) &&  ($(this).children("img").hasClass("face-up")) === false) {
					
					// PRELOAD THE GIF/ SWITCH IMAGES
					// COUNT THE GUESS, SHOW THE IMAGE, GIVE IT "face-up" CLASS FOR if STATEMENT
					count++;

					var cardChosen = $(this).children("img");
					TweenMax.to(cardChosen , 0.25, {
						autoAlpha: 1,
						rotationY: 180,
						ease: Linear.easeNone
					});
					TweenMax.to(this, 0.25, {
						rotationY: 180,
						ease: Linear.easeNone
					});
					$(this).children("img").addClass("face-up");
					
					// GUESS #1
					if (count === 1 ) { 
					  guess1 = $(this).children("img").attr("src");
					
					// GUESS #2   
					}  else { 
						guess2 = $(this).children("img").attr("src"); 
					  
						// ON SECOND GUESS; IF ITS A MATCH, RUN animationActivation function, CLEAR choices ARRAY
						if (guess1 === guess2) {
						console.log("match");
						console.log(guess1, guess2);
						
						animationActivation();

						

						// if ( $("li").hasClass("match") ){
						// 	console.log("ready for disable");
						// 	$(this).off("click");
						// 	//$("li").find("img").hasClass("face-up").off("click");
						// }

						// if ( $(this).hasClass("match") ){
						// 	console.log("ready for disable");
						// 	//$(this).off("click");
						// 	$(this).off("click");
						// }

						//$(this).hasClass("match").off("click");

						choices = [];
					
					// else ITS A MISS, REMOVE "face-up" CLASS - TRY AGAIN
					} else {
						console.log("miss");

						setTimeout(function() {
							// var elements = document.getElementsByTagName("li");
					  //       for (var i = 0; i < elements.length; i++) {
					  //           elements[i].onclick = function () { return false;}
					  //       }

					        TweenMax.to(".locking-overlay" , 0.0, {
					        	autoAlpha: 1,
					        	display: "block",
					        	ease: Linear.easeNone
					        });


						  // $("li").not(".match").find("img").hide("slow").removeClass("face-up");
							$("li").not(".match").find("img").removeClass("face-up");
							var cardsNotIt = $("li").not(".match").find("img");
							TweenMax.to(cardsNotIt , 0.2, {
								autoAlpha: 0,
								rotationY: 0,
								ease: Linear.easeNone
							});
							var liNotMatch = $("li").not(".match");
							TweenMax.to(liNotMatch, 0.25, {
								autoAlpha: 1,
								rotationY: 0,
								ease: Linear.easeNone
							});
							lockingOverlay.play();
							// AUDIO
							var playing = false;

							if (playing == true) {
								document.getElementById('cardFlip').pause();
								playing = false;

							} else {
								document.getElementById('cardFlip').play();
								playing = true;
							}
						}, 1100);

						var lockingOverlay = new TimelineMax();
						lockingOverlay.to(".locking-overlay", 0, { autoAlpha: 1, display: "block", ease: Linear.easeNone});
						lockingOverlay.to(".locking-overlay", 0.5, { autoAlpha: 0, display: "none", ease: Linear.easeNone});
						
						lockingOverlay.pause();

						choices = [];
					} // END

					// // // GAME OVER LOGIC - EVERY CARD HAS ".match" CLASS, DO....
					// var foundAllMatches = false;
					
					// if ( $("li").find("img").not(".face-up").length == 0 ) {
					// //if ( $("li").hasClass("match").length === 16 ) {
					// 	foundAllMatches = true;
					// }

					// if (foundAllMatches) {
					//   console.log("game over man");
					//   setTimeout(function() { 
					// 	// alert("Merry X-Mas");
					// 	TweenMax.to("#end-overlay" , 0.75, {
					// 		display: "block",
					// 		autoAlpha: 1,
					// 		scale: 1,
					// 		top: 0,
					// 		zIndex: 9999,
					// 		ease: Back.easeInOut
					// 	}); 

					//   }, 800);
					// }	

					// RESET console
					count = 0; 
					setTimeout(function() { console.clear(); }, 6000000);      
					}
				} // END CARDS MATCH if STATEMENT
				
			}); // END CLICK EVENT

			// SPLASH SCREEN START BUTTON
			$("#start-btn").on("click", function(){
				TweenMax.to("#splash-overlay" , 0.75, {
					//scale: 0,
					left: "200%",
					autoAlpha: 0,
					display: "none",
					ease: Back.easeInOut
				}); 
			});

			// RESET/RELOAD PAGE
			// IGNORES "POST" DATA WHEN REFRESH
			$("#reset-btn").on("click", function(){
				window.location.href=window.location.href;
				// RESET THE BOARDGAME JUST NOT THE ACTUAL PAGE
				// choices = [];
				// $("li").removeClass("face-up");
				// $("li").removeClass("match");
				// foundAllMatches = false;
				// layoutCards();
				// TweenMax.to("#end-overlay" , 0.75, {
				// 	display: "none",
				// 	autoAlpha: 0,
				// 	scale: 1,
				// 	top: "-100%",
				// 	zIndex: 9999,
				// 	ease: Back.easeInOut
				// }); 
			});

			// $("#myTry").on("click", function(){
			// 	console.log("clicked");
			// 	$("#game-container").empty();
			// 	layoutCards();
			// 	//document.getElementById("game-container").innerHTML = output;
			// })

		}; // END INIT

		shared.init = init;

		return shared;
	}());

$(document).ready(function() {
	holidayCardAPI.init();

});

