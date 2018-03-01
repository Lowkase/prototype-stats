// ----------------------------------------------------------------------------------------------------
// DATA - APP
// ----------------------------------------------------------------------------------------------------

var app_dataset = 
{
	companies: [
	{
		"id": 				32443,

		"name": 			"Weight Watchers",

		"logo": 			"audience-weight-watchers.png",

		"size": 			114201,

		"description": 		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

		// loop through these numbers every 20-30 seconds to simulate real time data - 3% increase between counts
		// "totalPosts": 		[4306092, 4435275, 4568333],
		"totalPosts": 		[7917284, 8154802, 8399446],

		// loop through these numbers every 20-30 seconds to simulate real time data - 3% increase between counts
		// "postsVelocity": 	[492, 507, 522],
		"postsVelocity": 	[904, 930, 958],

		// audience highlights for demographics, psychographics (aka Usage and Attitudes) and marketing info
		"keyInsights": [			
			{ "id": 1, "type": "Demographics",	"icon": "fa-crosshairs", 	"name": "Age & Gender", 				"value": "35+ - 85% female"	},
			{ "id": 2, "type": "Discussion", 	"icon": "fa-comment", 		"name": "Health & Family", 				"value": "Focus on being fit, and happy and enjoys delicious guilty pleasures - chocolate, girl scout cookies, etc."	},
			{ "id": 3, "type": "Mentions", 		"icon": "fa-pie-chart",		"name": "In Tune with Pop-Culture", 	"value": "Follows and talks about all major events - Movies, Sports, Music and Politics - leaning towards the Democratic party"	}
		],

		// data for demographics charts
		"demographics": [{
			chart1_title: 		 "Age",
		    chart1_outer_values: [13, 17, 20, 15, 14, 13, 8],
		    chart1_outer_labels: ['Under 18','18-24', '25-34','35-44','45-54', '55-64','65+'],
		    chart1_inner_values: [7, 11, 19, 18, 19, 17, 9],
		    
			chart2_title: 		 "Gender",
		    chart2_outer_values: [47, 53],
		    chart2_outer_labels: ['Male','Female'],
		    chart2_inner_values: [14, 86],
		    
		    chart3_title: 		 "Location",
		    chart3_outer_values: [23, 25, 19, 14, 19],
		    chart3_outer_labels: ['Massachusetts','New York', 'Illinois', 'Connecticut', 'Tennessee'],
		    chart3_inner_values: [25, 23, 17, 17, 17],
		    
			chart4_title: 		 "Ethnicity",
		    chart4_outer_values: [66, 1, 13, 9, 9, 2],
		    chart4_outer_labels: ['Caucasian','American Indian','African American','Hispanic','Asian','Other'],
		    chart4_inner_values: [74, 0, 13, 7, 4, 2]
		}],

		// psychographics highlighted in Interests and Passions section
		"psychographics": {
			"categoriesSelector": [
				{ "categoryId": 1, "type": "Food/Eating", 	"shareValue": '30',  	"indexValue": 'N/A' },
				{ "categoryId": 0, "type": "Values", 		"shareValue": '22',  	"indexValue": 'N/A' },
				{ "categoryId": 2, "type": "Celebrities", 	"shareValue": '10',  	"indexValue": 'N/A' } 
			],

			"categoriesData": [
				{
 					"categoryId": 0,
					"analyses": [
						{
							"date": "Last Day",

							"chatter": [
								{ 
									"insightType": "By Brands", 
									"insightGroups": [
										{ 
											"analysisType": "Popular", 
											"insights": [
												{ "insight": "Starbucks",			"value": 1125 },
												{ "insight": "Coke", 				"value": 506 },
												{ "insight": "McDonald's", 			"value": 481 },
												{ "insight": "Chipotle", 			"value": 312 },
												{ "insight": "Subway", 				"value": 245 }
											]
										},
										{ 
											"analysisType": "Indexing",
											"insights": [
												{ "insight": "FIJI Water",			"value": 22.08 },
												{ "insight": "Walmart", 			"value": 13.73 },
												{ "insight": "Starbucks", 			"value": 3.66 },
												{ "insight": "McDonald's", 			"value": 2.10 },
												{ "insight": "Diet Coke", 			"value": 2.06 }
											]
										},
										{ 
											"analysisType": "Trending", 
											"insights": [
												{ "insight": "Subway Classic Footlongs",		"value": 388 },
												{ "insight": "Lays Cheddar", 		"value": 328 },
												{ "insight": "FIJI Water", 			"value": 319 },
												{ "insight": "Nature Valley",	 	"value": 261 },
												{ "insight": "Girl Scouts", 		"value": 227 }
											]
										}			
									]
								},
								{ 
									"insightType": "People", 
									"insightGroups": [
										{ 
											"analysisType": "Popular", 
											"insights": [
												{ "insight": "Honey",			"value": 196 },
												{ "insight": "Candy", 			"value": 114 },
												{ "insight": "Obama", 			"value": 97 },
												{ "insight": "Jesus", 			"value": 66 },
												{ "insight": "Joy", 			"value": 61 }
											]
										},
										{ 
											"analysisType": "Indexing", 
											"insights": [
												{ "insight": "Lily O'Brien",	"value": 16.32 },
												{ "insight": "Jimmy Wayne",		"value": 3.84 },
												{ "insight": "Chris Rock", 		"value": 3.63 },
												{ "insight": "Jamie Oliver", 	"value": 3.47 },
												{ "insight": "David Bowie", 	"value": 2.24 }
											]
										},
										{ 
											"analysisType": "Trending", 
											"insights": [
												{ "insight": "St. Patrick",		"value": 400 },
												{ "insight": "David Rocco", 	"value": 366 },
												{ "insight": "Mitt Romney", 	"value": 325 },
												{ "insight": "Tyler Ulis", 		"value": 305 },
												{ "insight": "Bunny Family", 	"value": 275 }
											]
										}			
									]
								},
								{ 
									"insightType": "Hashtags", 
									"insightGroups": [
										{ 
											"analysisType": "Popular", 
											"insights": [
												{ "insight": "#giveaway",		"value": 890 },
												{ "insight": "#coffee",		 	"value": 811 },
												{ "insight": "#recipe", 		"value": 615 },
												{ "insight": "#chocolate", 		"value": 539 },
												{ "insight": "#healthy", 		"value": 421 }
											]
										},
										{ 
											"analysisType": "Indexing", 
											"insights": [
												{ "insight": "#glutenfree",		"value": 11.78 },
												{ "insight": "#competition", 	"value": 11.65 },
												{ "insight": "#diet",		 	"value": 10.68 },
												{ "insight": "#recipes",	 	"value": 10.58 },
												{ "insight": "#healthy", 		"value": 7.79 }
											]
										},
										{ 
											"analysisType": "Trending", 
											"insights": [
												{ "insight": "#shrimpitup",		"value": 385 },
												{ "insight": "#teambreakfast", 	"value": 322 },
												{ "insight": "#flavorswapentry", 				"value": 301 },
												{ "insight": "#randomactsofkindnessday", 		"value": 270 },
												{ "insight": "#oscarmayernatural", 				"value": 248 }
											]
										}			
									]
								},
								{ 
									"insightType": "Things", 
									"insightGroups": [
										{ 
											"analysisType": "Popular", 
											"insights": [
												{ "insight": "coffee",			"value": 1451 },
												{ "insight": "chocolate", 		"value": 1289 },
												{ "insight": "water", 			"value": 994 },
												{ "insight": "Apple", 			"value": 957 },
												{ "insight": "tea", 			"value": 890 }
											]
										},
										{ 
											"analysisType": "Indexing", 
											"insights": [
												{ "insight": "recipe",			"value": 8.74 },
												{ "insight": "Friday",		 	"value": 4.08 },
												{ "insight": "snack", 			"value": 3.70 },
												{ "insight": "soup",	 		"value": 3.07 },
												{ "insight": "avocado", 		"value": 2.71 }
											]
										},
										{ 
											"analysisType": "Trending", 
											"insights": [
												{ "insight": "Subway Classic Footlongs",	"value": 395 },
												{ "insight": "new Quesalupa", 				"value": 342 },
												{ "insight": "Coca-Cola polar bear", 		"value": 327 },
												{ "insight": "Mother's Day", 				"value": 274 },
												{ "insight": "#mondaymotivation", 			"value": 238 }
											]
										}			
									]
								}	
							],

							"postActivity": [
								{  
									"day": [
									    { name: "Monday",    value:  110 },
									    { name: "Tuesday",   value:  120 },
									    { name: "Wednesday", value:  130 },
									    { name: "Thursday",  value:  140 },
									    { name: "Friday",    value:  150 },
									    { name: "Saturday",  value:  160 },
									    { name: "Sunday",    value:  170 }
									]
								},
								{
									"month": [
									    { name: "1st",      value:  210 },
									    { name: "2nd",      value:  220 },
									    { name: "3rd",      value:  230 },
									    { name: "4th",      value:  240 }
									]
								},
								{
									"year": [
									    { name: "Jan",      value:  310 },
									    { name: "Feb",      value:  320 },
									    { name: "Mar",      value:  330 },
									    { name: "Apr",      value:  340 },
									    { name: "May",      value:  350 },
									    { name: "Jun",      value:  360 },
									    { name: "Jul",      value:  370 },
									    { name: "Aug",      value:  380 },
									    { name: "Sep",      value:  390 },
									    { name: "Oct",      value:  400 },
									    { name: "Nov",      value:  410 },
									    { name: "Dec",      value:  420 }
									]
								}
							],

							"influencers": [
								{ "name": "Everyday Health", 		"handle": "@EverydayHealth", 		"followers": "385K", 	"retweets": 8040, 		"image": "avatar-EverydayHealth.jpg" },
								{ "name": "Angel Howansky", 		"handle": "@Angelshouse", 			"followers": "263K", 	"retweets": 20, 		"image": "avatar-Angelshouse.jpg" },
								{ "name": "Cooking Light", 			"handle": "@Cooking_Light", 		"followers": "178K", 	"retweets": 2780, 		"image": "avatar-Cooking_Light.jpg" },
								{ "name": "Kim & Steve Starry", 	"handle": "@KStarry", 				"followers": "103K", 	"retweets": 80, 		"image": "avatar-KStarry.png" },
								{ "name": "Anne-Marie Nichols", 	"handle": "@amnichols", 			"followers": "30K", 	"retweets": 720, 		"image": "avatar-amnichols.jpg" },
								{ "name": "Suzanne Rudge", 			"handle": "@MapleMouseMama", 		"followers": 7952, 		"retweets": 240, 		"image": "avatar-MapleMouseMama.jpg" },
								{ "name": "The Holderness Fam", 	"handle": "@KimDHolderness", 		"followers": 6889, 		"retweets": 8, 			"image": "avatar-KimDHolderness.jpg" },
								{ "name": "BlkWomenLosingWeight", 	"handle": "@blackweightloss", 		"followers": 5764, 		"retweets": 28, 		"image": "avatar-blackweightloss.jpeg" }
							],
						
							"emergingNow": [
								{ "insight": "Lorem Ipsum...",		"value": 100 },
								{ "insight": "Lorem Ipsum...",		"value": 65 },
								{ "insight": "Lorem Ipsum...",		"value": 40 }
							],

							"recentTweets": [
								// { "name": "Simon Green", 			"handle": "@SGreen", 				"followers": 9343, 		"retweets": 3130, 		"image": "avatar-m3.png",	"tweet": "Nothing like crispy fries at Macdonalds." },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" }
							]
						}
					]
				},
				
				{
 					"categoryId": 1,
					"analyses": [
						{
							"date": "Last Day",

							"chatter": [
								{ 
									"insightType": "By Brands", 
									"insightGroups": [
										{ 
											"analysisType": "Popular", 
											"insights": [
												{ "insight": "The Walking Dead",	"value": 190 },
												{ "insight": "Amazon", 				"value": 114 },
												{ "insight": "A4", 					"value": 65 },
												{ "insight": "Apple", 				"value": 51 },
												{ "insight": "NFL", 				"value": 46 }
											]
										},
										{ 
											"analysisType": "Indexing",
											"insights": [
												{ "insight": "Walmart",			"value": 35.46 },
												{ "insight": "#Thrifty Nifty", 		"value": 31.52 },
												{ "insight": "A4", 					"value": 28.46 },
												{ "insight": "Amazon", 				"value": 4.99 },
												{ "insight": "Victoria's Secret", 	"value": 3.82 }
											]
										},
										{ 
											"analysisType": "Trending", 
											"insights": [
												{ "insight": "#Oscar Mayer",		"value": 400 },
												{ "insight": "Breaking Bad", 		"value": 365 },
												{ "insight": "Supreme Court", 		"value": 317 },
												{ "insight": "DailyBurn #DB365", 	"value": 275 },
												{ "insight": "Victoria's Secret", 	"value": 203 }
											]
										}			
									]
								},
								{ 
									"insightType": "People", 
									"insightGroups": [
										{ 
											"analysisType": "Popular", 
											"insights": [
												{ "insight": "Jesus",			"value": 1460 },
												{ "insight": "Son", 			"value": 210 },
												{ "insight": "Obama", 			"value": 131 },
												{ "insight": "Donald Trump", 	"value": 112 },
												{ "insight": "Hillary", 		"value": 87 }
											]
										},
										{ 
											"analysisType": "Indexing", 
											"insights": [
												{ "insight": "Sarah Palin",		"value": 3.55 },
												{ "insight": "#Jesus", 			"value": 1.99 },
												{ "insight": "Isaiah", 			"value": 1.90 },
												{ "insight": "Trump", 			"value": 1.86 },
												{ "insight": "Cruz", 			"value": 1.82 }
											]
										},
										{ 
											"analysisType": "Trending", 
											"insights": [
												{ "insight": "St. Patrick",		"value": 400 },
												{ "insight": "Tony Horton", 	"value": 329 },
												{ "insight": "#Hillary", 		"value": 300 },
												{ "insight": "Chris Rock", 		"value": 289 },
												{ "insight": "Romney", 			"value": 268 }
											]
										}			
									]
								},
								{ 
									"insightType": "Hashtags", 
									"insightGroups": [
										{ 
											"analysisType": "Popular", 
											"insights": [
												{ "insight": "#healthy",		"value": 1088 },
												{ "insight": "#fitness",	 	"value": 634 },
												{ "insight": "#workout", 		"value": 597 },
												{ "insight": "#win", 			"value": 528 },
												{ "insight": "#running", 		"value": 444 }
											]
										},
										{ 
											"analysisType": "Indexing", 
											"insights": [
												{ "insight": "#mommymonday",	"value": 50 },
												{ "insight": "#sweepstakes", 	"value": 30.09 },
												{ "insight": "#myfitnesspal", 	"value": 16.14 },
												{ "insight": "#weightloss", 	"value": 15.65 },
												{ "insight": "#exercise", 		"value": 9.05 }
											]
										},
										{ 
											"analysisType": "Trending", 
											"insights": [
												{ "insight": "#kelloggsraisinbran",		"value": 400 },
												{ "insight": "#oscarmayernatural", 		"value": 375 },
												{ "insight": "#grammys", 				"value": 360 },
												{ "insight": "#nevertrump", 			"value": 333 },
												{ "insight": "#oscars", 				"value": 329 }
											]
										}	
									]
								},
								{ 
									"insightType": "Things", 
									"insightGroups": [
										{ 
											"analysisType": "Popular", 
											"insights": [
												{ "insight": "God",				"value": 2029 },
												{ "insight": "Healthy", 		"value": 1555 },
												{ "insight": "mom", 			"value": 1287 },
												{ "insight": "workout", 		"value": 794 },
												{ "insight": "happy", 			"value": 715 }
											]
										},
										{ 
											"analysisType": "Indexing", 
											"insights": [
												{ "insight": "#MommyMonday",	"value": 50 },
												{ "insight": "MathCelebrity", 	"value": 13.26 },
												{ "insight": "Healthy", 		"value": 4.41 },
												{ "insight": "workout", 		"value": 2.56 },
												{ "insight": "#God", 			"value": 2.38 }
											]
										},
										{ 
											"analysisType": "Trending", 
											"insights": [
												{ "insight": "Mitt Romney",		"value": 400 },
												{ "insight": "MathCelebrity", 	"value": 347 },
												{ "insight": "Valentine", 		"value": 275 },
												{ "insight": "Lauren Carr's exciting new #mystery rope", 		"value": 127 },
												{ "insight": "successful healthy #crowdfund @kickstarter", 		"value": 119 }
											]
										}			
									]
								}	
							],

							"postActivity": [
								{  
									"day": [
									    { name: "Monday",    value:  108 },
									    { name: "Tuesday",   value:  306 },
									    { name: "Wednesday", value:  504 },
									    { name: "Thursday",  value:  702 },
									    { name: "Friday",    value:  405 },
									    { name: "Saturday",  value:  306 },
									    { name: "Sunday",    value:  207 }
									]
								},
								{
									"month": [
									    { name: "1st",      value:  306 },
									    { name: "2nd",      value:  504 },
									    { name: "3rd",      value:  702 },
									    { name: "4th",      value:  411 }
									]
								},
								{
									"year": [
									    { name: "Jan",      value:  106 },
									    { name: "Feb",      value:  304 },
									    { name: "Mar",      value:  411 },
									    { name: "Apr",      value:  589 },
									    { name: "May",      value:  674 },
									    { name: "Jun",      value:  963 },
									    { name: "Jul",      value:  864 },
									    { name: "Aug",      value:  456 },
									    { name: "Sep",      value:  341 },
									    { name: "Oct",      value:  211 },
									    { name: "Nov",      value:  140 },
									    { name: "Dec",      value:  90  }
									]
								}
							],

							"influencers": [
								{ "name": "Marck Sweney", 			"handle": "@marksweney", 			"followers": "11.7K", 	"retweets": "N/A", 		"image": "avatar-marksweney.jpg" },
								{ "name": "Sandi Krakowski", 		"handle": "@sandikrakowski", 		"followers": "30.7K", 	"retweets": "N/A", 		"image": "avatar-sandikrakowski.jpg" },
								{ "name": "Natasha Mairs", 			"handle": "@SerenityYou", 			"followers": "10.1K", 	"retweets": "N/A", 		"image": "avatar-SerenityYou.jpeg" },
								{ "name": "Megan Calhoun", 			"handle": "@socialmoms", 			"followers": "446K", 	"retweets": "N/A", 		"image": "avatar-socialmoms.jpg" },
								{ "name": "Jennifer Thompson", 		"handle": "@rawfoodbliss", 			"followers": "62.6K", 	"retweets": "N/A", 		"image": "avatar-rawfoodbliss.jpg" },
								{ "name": "Caitlin Beadles", 		"handle": "@godsgirl8494", 			"followers": "928K", 	"retweets": "N/A", 		"image": "avatar-godsgirl8494.jpg" },
								{ "name": "Geoff De Weaver", 		"handle": "@geoff_deweaver", 		"followers": "1M", 		"retweets": "N/A", 		"image": "avatar-geoff_deweaver.jpg" },
								{ "name": "Jennifer Hudson", 		"handle": "@IAMJHUD", 				"followers": "3.82M", 	"retweets": "N/A", 		"image": "avatar-IAMJHUD.jpeg" }
							],
						
							"emergingNow": [
								{ "insight": "Lorem Ipsum...",		"value": 100 },
								{ "insight": "Lorem Ipsum...",		"value": 65 },
								{ "insight": "Lorem Ipsum...",		"value": 40 }
							],

							"recentTweets": [
								// { "name": "Simon Green", 			"handle": "@SGreen", 				"followers": 9343, 		"retweets": 3130, 		"image": "avatar-m3.png",	"tweet": "Nothing like crispy fries at Macdonalds." },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" }
							]
						}
					]
				},
				
				{
 					"categoryId": 2,
					"analyses": [
						{
							"date": "Last Day",

							"chatter": [
								{ 
									"insightType": "By Brands", 
									"insightGroups": [
										{ 
											"analysisType": "Popular", 
											"insights": [
												{ "insight": "Ford",				"value": 70 },
												{ "insight": "iPhone", 				"value": 28 },
												{ "insight": "NFL",					"value": 27 },
												{ "insight": "NBC", 				"value": 25 },
												{ "insight": "Weight Watchers",		"value": 25 }
											]
										},
										{ 
											"analysisType": "Indexing",
											"insights": [
												{ "insight": "Weight Watchers",		"value": 21.56 },
												{ "insight": "CNN",		 			"value": 6.47 },
												{ "insight": "eBay", 				"value": 4.70 },
												{ "insight": "Amazon", 				"value": 4.31 },
												{ "insight": "NBC", 				"value": 2.84 }
											]
										},
										{ 
											"analysisType": "Trending", 
											"insights": [
												{ "insight": "MasterCard",			"value": 400 },
												{ "insight": "Experian", 			"value": 365 },
												{ "insight": "Ford Field", 			"value": 330 },
												{ "insight": "Girl Scout Cookies", 	"value": 300 },
												{ "insight": "Hyundai",			 	"value": 295 }
											]
										}			
									]
								},
								{ 
									"insightType": "People", 
									"insightGroups": [
										{ 
											"analysisType": "Popular", 
											"insights": [
												{ "insight": "Adele",			"value": 1036 },
												{ "insight": "Hillary Clinton", "value": 552 },
												{ "insight": "Taylor Swift", 	"value": 262 },
												{ "insight": "Lady Gaga", 		"value": 250 },
												{ "insight": "Oprah Winfrey", 	"value": 69 }
											]
										},
										{ 
											"analysisType": "Indexing", 
											"insights": [
												{ "insight": "Rachael Ray",		"value": 11.38 },
												{ "insight": "#Adele", 			"value": 3.80 },
												{ "insight": "Oprah Winfrey",	"value": 3.58 },
												{ "insight": "Kate Winslet", 	"value": 2.97 },
												{ "insight": "Tina Fey", 		"value": 2.45 }
											]
										},
										{ 
											"analysisType": "Trending", 
											"insights": [
												{ "insight": "Chris Rock",		"value": 400 },
												{ "insight": "Kesha",		 	"value": 374 },
												{ "insight": "Bruno",	 		"value": 367 },
												{ "insight": "Sam Hunt", 		"value": 300 },
												{ "insight": "David Bowie", 	"value": 248 }
											]
										}			
									]
								},
								{ 
									"insightType": "Hashtags", 
									"insightGroups": [
										{ 
											"analysisType": "Popular", 
											"insights": [
												{ "insight": "#sb50",			"value": 154 },
												{ "insight": "#grammys",	 	"value": 153 },
												{ "insight": "#adele",	 		"value": 143 },
												{ "insight": "#oscar", 			"value": 138 },
												{ "insight": "#goldenglobes", 	"value": 138 }
											]
										},
										{ 
											"analysisType": "Indexing", 
											"insights": [
												{ "insight": "#giveaway",		"value": 16.20 },
												{ "insight": "#goldenglobe", 	"value": 3.72 },
												{ "insight": "#snl",		 	"value": 3.48 },
												{ "insight": "#greaselive", 	"value": 3.47 },
												{ "insight": "#oscars2016", 	"value": 3.15 }
											]
										},
										{ 
											"analysisType": "Trending", 
											"insights": [
												{ "insight": "#grammys2016",			"value": 350 },
												{ "insight": "#supertuesday", 			"value": 325 },
												{ "insight": "#election2016", 			"value": 300 },
												{ "insight": "#happybirthdayjustinbieber", 			"value": 285 },
												{ "insight": "#youngmindsmatter", 		"value": 250 }
											]
										}			
									]
								},
								{ 
									"insightType": "Things", 
									"insightGroups": [
										{ 
											"analysisType": "Popular", 
											"insights": [
												{ "insight": "Hillary Clinton",	"value": 587 },
												{ "insight": "Adele",	 		"value": 412 },
												{ "insight": "Beyonce", 		"value": 213 },
												{ "insight": "Lady Gaga", 		"value": 183 },
												{ "insight": "Justin Bieber", 	"value": 83 }
											]
										},
										{ 
											"analysisType": "Indexing", 
											"insights": [
												{ "insight": "Kate Winslet",	"value": 3.79 },
												{ "insight": "#Adele", 			"value": 3.49 },
												{ "insight": "Pope", 			"value": 2.40 },
												{ "insight": "Tina Fey", 		"value": 2.21 },
												{ "insight": "Hillary Clinton", "value": 1.89 }
											]
										},
										{ 
											"analysisType": "Trending", 
											"insights": [
												{ "insight": "DANCE BATTLE",	"value": 345 },
												{ "insight": "in n out",	 	"value": 300 },
												{ "insight": "Budweiser", 		"value": 270 },
												{ "insight": "no Trump", 		"value": 240 },
												{ "insight": "Heaven", 			"value": 200 }
											]
										}			
									]
								}	
							],

							"postActivity": [
								{  
									"day": [
									    { name: "Monday",    value:  110 },
									    { name: "Tuesday",   value:  120 },
									    { name: "Wednesday", value:  130 },
									    { name: "Thursday",  value:  140 },
									    { name: "Friday",    value:  150 },
									    { name: "Saturday",  value:  160 },
									    { name: "Sunday",    value:  170 }
									]
								},
								{
									"month": [
									    { name: "1st",      value:  210 },
									    { name: "2nd",      value:  220 },
									    { name: "3rd",      value:  230 },
									    { name: "4th",      value:  240 }
									]
								},
								{
									"year": [
									    { name: "Jan",      value:  310 },
									    { name: "Feb",      value:  320 },
									    { name: "Mar",      value:  330 },
									    { name: "Apr",      value:  340 },
									    { name: "May",      value:  350 },
									    { name: "Jun",      value:  360 },
									    { name: "Jul",      value:  370 },
									    { name: "Aug",      value:  380 },
									    { name: "Sep",      value:  390 },
									    { name: "Oct",      value:  400 },
									    { name: "Nov",      value:  410 },
									    { name: "Dec",      value:  420 }
									]
								}
							],

							"influencers": [
								{ "name": "Jake Quickenden", 		"handle": "@JakeQuickenden", 		"followers": "497K", 	"retweets": "N/A", 		"image": "avatar-JakeQuickenden.jpg" },
								{ "name": "Steve Kornacki", 		"handle": "@SteveKornacki", 		"followers": "88.9K", 	"retweets": "N/A", 		"image": "avatar-SteveKornacki.png" },
								{ "name": "Chris Caggs", 			"handle": "@ChrisCaggs", 			"followers": "111K", 	"retweets": "N/A", 		"image": "avatar-ChrisCaggs.jpg" },
								{ "name": "Louise Minchin", 		"handle": "@louiseminchin", 		"followers": "83.4K", 	"retweets": "N/A", 		"image": "avatar-louiseminchin.jpg" },
								{ "name": "Lindsey Brooks", 		"handle": "@drgroovy77", 			"followers": "72.2K", 	"retweets": "N/A", 		"image": "avatar-drgroovy77.jpg" },
								{ "name": "Ariel Foxman", 			"handle": "@ArielFoxman", 			"followers": "64K", 	"retweets": "N/A", 		"image": "avatar-ArielFoxman.jpeg" },
								{ "name": "Betty Buckley",	 		"handle": "@BettyBuckley", 			"followers": "27.4K", 	"retweets": "N/A", 		"image": "avatar-BettyBuckley.jpeg" },
								{ "name": "Margaret Molloy", 		"handle": "@MargaretMolloy", 		"followers": "28K", 	"retweets": "N/A", 		"image": "avatar-MargaretMolloy.jpg" }
							],
						
							"emergingNow": [
								{ "insight": "Lorem Ipsum...",		"value": 100 },
								{ "insight": "Lorem Ipsum...",		"value": 65 },
								{ "insight": "Lorem Ipsum...",		"value": 40 }
							],

							"recentTweets": [
								// { "name": "Simon Green", 			"handle": "@SGreen", 				"followers": 9343, 		"retweets": 3130, 		"image": "avatar-m3.png",	"tweet": "Nothing like crispy fries at Macdonalds." },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" }
							]
						}
					]
				}
			]
		},


		"insightstrends": {
			"categoriesSelector": [
				{ "categoryId": 0, "type": "Product" },
				{ "categoryId": 1, "type": "Brand" },
				{ "categoryId": 2, "type": "Category" }
			],

			"categoriesData": [
				{
 					"categoryId": 0,
					"image": "insightsTrends1.png",
					"description": "Lorem ipsum Est ullamco commodo fugiat irure aliquip ut consectetur esse laborum magna aliquip do sit qui eiusmod eu aute Duis id do sit dolore Duis Excepteur dolor Ut commodo labore laboris veniam sit cupidatat ex laboris irure quis aliquip.",
					"date": "Last Week",

					"insights": [
						{
							"measure": "Authors",
							"count": 1332,
							"multiplier": 1.5
						},
						{
							"measure": "Mentions",
							"count": 42090,
							"multiplier": 2.5
						},
						{
							"measure": "Sentiment",
							"count": 32,
							"multiplier": 28
						}
					],

					"influencers": [
						{ "name": "Jennifer McKenna", 		"handle": "@Jennifer_sales14", 		"followers": 54984, 	"retweets": 67424, 		"image": "avatar-f6.png" },
						{ "name": "Alfred Robertson", 		"handle": "@alfred_robertson_111", 	"followers": 156903, 	"retweets": 766466, 	"image": "avatar-m5.png" },
						{ "name": "Olivia Chow", 			"handle": "@OliviaChow", 			"followers": 486293, 	"retweets": 235084, 	"image": "avatar-f4.png" },
						{ "name": "Kam Jefferson", 			"handle": "@KamJefferson", 			"followers": 11725920, 	"retweets": 7987324, 	"image": "avatar-m1.png" },
						{ "name": "Kim Blanchet", 			"handle": "@KimBlanchet_1973", 		"followers": 7343, 		"retweets": 1432, 		"image": "avatar-f5.png" },
						{ "name": "Steve Ballintine", 		"handle": "@spaceInvader_349", 		"followers": 44490, 	"retweets": 10334, 		"image": "avatar-m6.png" },
						{ "name": "Jim Watson", 			"handle": "@ilovecoffee88", 		"followers": 8434133, 	"retweets": 4344904, 	"image": "avatar-m4.png" },
						{ "name": "Mick Richardson", 		"handle": "@MickeyRickey_3384", 	"followers": 1325655, 	"retweets": 4899325, 	"image": "avatar-m2.png" },
						{ "name": "Patricia Summers Right", "handle": "@PSummers", 				"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png" },
						{ "name": "Sue Piper", 				"handle": "@SuePiper05", 			"followers": 8832, 		"retweets": 6444, 		"image": "avatar-f2.png" },
						{ "name": "Simon Green", 			"handle": "@SGreen", 				"followers": 9343, 		"retweets": 3130, 		"image": "avatar-m3.png" },
						{ "name": "Tracey Sing", 			"handle": "@tracey_sing12312", 		"followers": 98654, 	"retweets": 25693, 		"image": "avatar-f3.png" }
					],

					"postsOverTime": [
						{  
							"day": [
							    { 
							        "key": "Mentions", 
							        "values": [ 
							            [ 0, 100], 
							            [ 1, 140], 
							            [ 2, 210], 
							            [ 3, 50], 
							            [ 4, 180], 
							            [ 5, 240], 
							            [ 6, 80]
							        ]
							    }, 
							    { 
							        "key": "Authors" , 
							        "values": [ 
							            [ 0, 80], 
							            [ 1, 20], 
							            [ 2, 10], 
							            [ 3, 30], 
							            [ 4, 40], 
							            [ 5, 10], 
							            [ 6, 60]
							        ]
							    }
							]
						},
						{
							"month": [
							    { 
							        "key": "Mentions", 
							        "values": [ 
							            [ 0, 200], 
							            [ 1, 30], 
							            [ 2, 120], 
							            [ 3, 80]
							        ]
							    }, 
							    { 
							        "key": "Authors" , 
							        "values": [ 
							            [ 0, 10], 
							            [ 1, 60], 
							            [ 2, 20], 
							            [ 3, 30]
							        ]
							    }
							]
						},
						{
							"year": [
							    { 
							        "key": "Mentions", 
							        "values": [ 
							            [ 0, 160], 
							            [ 1, 80], 
							            [ 2, 100], 
							            [ 3, 120],
							            [ 4, 140], 
							            [ 5, 60], 
							            [ 6, 200], 
							            [ 7, 180],
							            [ 8, 160], 
							            [ 9, 40], 
							            [ 10, 100], 
							            [ 11, 120]

							        ]
							    }, 
							    { 
							        "key": "Authors" , 
							        "values": [ 
							            [ 0, 20], 
							            [ 1, 80], 
							            [ 2, 20], 
							            [ 3, 30],
							            [ 4, 20], 
							            [ 5, 40], 
							            [ 6, 20], 
							            [ 7, 10],
							            [ 8, 10], 
							            [ 9, 10], 
							            [ 10, 10], 
							            [ 11, 30]
							        ]
							    }
							]
						}
					],
				
					"emergingNow": [
						{ "insight": "TACO CLUB",		"value": 75 },
						{ "insight": "ESPRESSO",		"value": 45 },
						{ "insight": "CRISPY FRIES",	"value": 100 }
					],

					"recentTweets": [
						{ "name": "Jim Watson", 			"handle": "@ilovecoffee88", 		"followers": 8434133, 	"retweets": 4344904, 	"image": "avatar-m4.png", 	"tweet": "The new bacon club at Taco Bell is awesome!" },
						{ "name": "Olivia Chow", 			"handle": "@OliviaChow", 			"followers": 486293, 	"retweets": 235084, 	"image": "avatar-f4.png", 	"tweet": "The Chili at Subway warmed me up, time to head back out into the cold." },
						{ "name": "Patricia Summers Right", "handle": "@PSummers", 				"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
						{ "name": "Steve Ballintine", 		"handle": "@spaceInvader_349", 		"followers": 44490, 	"retweets": 10334, 		"image": "avatar-m6.png", 	"tweet": "I tried making burritos, but Chipoltes is way better." },
						{ "name": "Mick Richardson", 		"handle": "@MickeyRickey_3384", 	"followers": 1325655, 	"retweets": 4899325, 	"image": "avatar-m2.png", 	"tweet": "Anyone else addicted to the coffee at Macdonalds?" },
						{ "name": "Kam Jefferson", 			"handle": "@KamJefferson", 			"followers": 11725920, 	"retweets": 7987324, 	"image": "avatar-m1.png",	"tweet": "Late night munchies at Taco Bell." },
						{ "name": "Sue Piper", 				"handle": "@SuePiper05", 			"followers": 8832, 		"retweets": 6444, 		"image": "avatar-f2.png", 	"tweet": "Finally got my Caffe Latte at Star Bucks, time to wake up." },
						{ "name": "Alfred Robertson", 		"handle": "@alfred_robertson_111", 	"followers": 156903, 	"retweets": 766466, 	"image": "avatar-m5.png", 	"tweet": "Have a craving for Crispy Tacos at Chipoltes tonight." },
						{ "name": "Kim Blanchet", 			"handle": "@KimBlanchet_1973", 		"followers": 7343, 		"retweets": 1432, 		"image": "avatar-f5.png", 	"tweet": "Anyone else for dinner at Subway tonight?" },
						{ "name": "Jennifer McKenna", 		"handle": "@Jennifer_sales14", 		"followers": 54984, 	"retweets": 67424, 		"image": "avatar-f6.png", 	"tweet": "Taco Bell serving healthier foods!?" },
						{ "name": "Simon Green", 			"handle": "@SGreen", 				"followers": 9343, 		"retweets": 3130, 		"image": "avatar-m3.png",	"tweet": "Nothing like crispy fries at Macdonalds." },
						{ "name": "Tracey Sing", 			"handle": "@tracey_sing12312", 		"followers": 98654, 	"retweets": 25693, 		"image": "avatar-f3.png", 	"tweet": "I need my coffee fix, off to Starbucks!" }
					]

				},
				{
 					"categoryId": 1,
					"image": "insightsTrends2.png",
					"description": "Excepteur dolor Ut commodo labore laboris veniam sit cupidatat ex laboris irure quis aliquip. Lorem ipsum Est ullamco commodo fugiat irure aliquip ut consectetur esse laborum magna aliquip do sit qui eiusmod eu aute Duis id do sit dolore Duis.",
					"date": "Last Week",
					
					"insights": [
						{
							"measure": "Authors",
							"count": 2895,
							"multiplier": 1.8
						},
						{
							"measure": "Mentions",
							"count": 59898,
							"multiplier": 2.1
						},
						{
							"measure": "Sentiment",
							"count": 28,
							"multiplier": 21
						}
					],

					"influencers": [
						{ "name": "Steve Ballintine", 		"handle": "@spaceInvader_349", 		"followers": 44490, 	"retweets": 10334, 		"image": "avatar-m6.png" },
						{ "name": "Jim Watson", 			"handle": "@ilovecoffee88", 		"followers": 8434133, 	"retweets": 4344904, 	"image": "avatar-m4.png" },
						{ "name": "Tracey Sing", 			"handle": "@tracey_sing12312", 		"followers": 98654, 	"retweets": 25693, 		"image": "avatar-f3.png" },
						{ "name": "Mick Richardson", 		"handle": "@MickeyRickey_3384", 	"followers": 1325655, 	"retweets": 4899325, 	"image": "avatar-m2.png" },
						{ "name": "Patricia Summers Right", "handle": "@PSummers", 				"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png" },
						{ "name": "Kim Blanchet", 			"handle": "@KimBlanchet_1973", 		"followers": 7343, 		"retweets": 1432, 		"image": "avatar-f5.png" },
						{ "name": "Sue Piper", 				"handle": "@SuePiper05", 			"followers": 8832, 		"retweets": 6444, 		"image": "avatar-f2.png" },
						{ "name": "Alfred Robertson", 		"handle": "@alfred_robertson_111", 	"followers": 156903, 	"retweets": 766466, 	"image": "avatar-m5.png" },
						{ "name": "Olivia Chow", 			"handle": "@OliviaChow", 			"followers": 486293, 	"retweets": 235084, 	"image": "avatar-f4.png" },
						{ "name": "Jennifer McKenna", 		"handle": "@Jennifer_sales14", 		"followers": 54984, 	"retweets": 67424, 		"image": "avatar-f6.png" },
						{ "name": "Simon Green", 			"handle": "@SGreen", 				"followers": 9343, 		"retweets": 3130, 		"image": "avatar-m3.png" },
						{ "name": "Kam Jefferson", 			"handle": "@KamJefferson", 			"followers": 11725920, 	"retweets": 7987324, 	"image": "avatar-m1.png" }
					],

					"postsOverTime": [
						{  
							"day": [
							    { 
							        "key": "Mentions", 
							        "values": [ 
							            [ 0, 100], 
							            [ 1, 110], 
							            [ 2, 120], 
							            [ 3, 130], 
							            [ 4, 140], 
							            [ 5, 150], 
							            [ 6, 160]
							        ]
							    }, 
							    { 
							        "key": "Authors" , 
							        "values": [ 
							            [ 0, 10], 
							            [ 1, 10], 
							            [ 2, 20], 
							            [ 3, 20], 
							            [ 4, 30], 
							            [ 5, 40], 
							            [ 6, 50]
							        ]
							    }
							]
						},
						{
							"month": [
							    { 
							        "key": "Mentions", 
							        "values": [ 
							            [ 0, 200], 
							            [ 1, 210], 
							            [ 2, 220], 
							            [ 3, 230]
							        ]
							    }, 
							    { 
							        "key": "Authors" , 
							        "values": [ 
							            [ 0, 20], 
							            [ 1, 20], 
							            [ 2, 30], 
							            [ 3, 30]
							        ]
							    }
							]
						},
						{
							"year": [
							    { 
							        "key": "Mentions", 
							        "values": [ 
							            [ 0, 310], 
							            [ 1, 320], 
							            [ 2, 330], 
							            [ 3, 340],
							            [ 4, 350], 
							            [ 5, 360], 
							            [ 6, 370], 
							            [ 7, 380],
							            [ 8, 390], 
							            [ 9, 400], 
							            [ 10, 410], 
							            [ 11, 420]

							        ]
							    }, 
							    { 
							        "key": "Authors" , 
							        "values": [ 
							            [ 0, 10], 
							            [ 1, 10], 
							            [ 2, 20], 
							            [ 3, 20],
							            [ 4, 30], 
							            [ 5, 30], 
							            [ 6, 40], 
							            [ 7, 40],
							            [ 8, 50], 
							            [ 9, 50], 
							            [ 10, 60], 
							            [ 11, 60]
							        ]
							    }
							]
						}
					],
				
					"emergingNow": [
						{ "insight": "CHILPOTE",		"value": 60 },
						{ "insight": "STAR BUCKS",		"value": 70 },
						{ "insight": "MACDONALDS",		"value": 80 }
					],

					"recentTweets": [
						{ "name": "Jim Watson", 			"handle": "@ilovecoffee88", 		"followers": 8434133, 	"retweets": 4344904, 	"image": "avatar-m4.png", 	"tweet": "The new bacon club at Taco Bell is awesome!" },
						{ "name": "Mick Richardson", 		"handle": "@MickeyRickey_3384", 	"followers": 1325655, 	"retweets": 4899325, 	"image": "avatar-m2.png", 	"tweet": "Anyone else addicted to the coffee at Macdonalds?" },
						{ "name": "Olivia Chow", 			"handle": "@OliviaChow", 			"followers": 486293, 	"retweets": 235084, 	"image": "avatar-f4.png", 	"tweet": "The Chili at Subway warmed me up, time to head back out into the cold." },
						{ "name": "Kam Jefferson", 			"handle": "@KamJefferson", 			"followers": 11725920, 	"retweets": 7987324, 	"image": "avatar-m1.png",	"tweet": "Late night munchies at Taco Bell." },
						{ "name": "Sue Piper", 				"handle": "@SuePiper05", 			"followers": 8832, 		"retweets": 6444, 		"image": "avatar-f2.png", 	"tweet": "Finally got my Caffe Latte at Star Bucks, time to wake up." },
						{ "name": "Patricia Summers Right", "handle": "@PSummers", 				"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
						{ "name": "Alfred Robertson", 		"handle": "@alfred_robertson_111", 	"followers": 156903, 	"retweets": 766466, 	"image": "avatar-m5.png", 	"tweet": "Have a craving for Crispy Tacos at Chipoltes tonight." },
						{ "name": "Simon Green", 			"handle": "@SGreen", 				"followers": 9343, 		"retweets": 3130, 		"image": "avatar-m3.png",	"tweet": "Nothing like crispy fries at Macdonalds." },
						{ "name": "Kim Blanchet", 			"handle": "@KimBlanchet_1973", 		"followers": 7343, 		"retweets": 1432, 		"image": "avatar-f5.png", 	"tweet": "Anyone else for dinner at Subway tonight?" },
						{ "name": "Jennifer McKenna", 		"handle": "@Jennifer_sales14", 		"followers": 54984, 	"retweets": 67424, 		"image": "avatar-f6.png", 	"tweet": "Taco Bell serving healthier foods!?" },
						{ "name": "Steve Ballintine", 		"handle": "@spaceInvader_349", 		"followers": 44490, 	"retweets": 10334, 		"image": "avatar-m6.png", 	"tweet": "I tried making burritos, but Chipoltes is way better." },
						{ "name": "Tracey Sing", 			"handle": "@tracey_sing12312", 		"followers": 98654, 	"retweets": 25693, 		"image": "avatar-f3.png", 	"tweet": "I need my coffee fix, off to Starbucks!" },
						{ "name": "Patricia Summers Right", "handle": "@PSummers", 				"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
						{ "name": "Alfred Robertson", 		"handle": "@alfred_robertson_111", 	"followers": 156903, 	"retweets": 766466, 	"image": "avatar-m5.png", 	"tweet": "Have a craving for Crispy Tacos at Chipoltes tonight." }
					]

				}
			]
		}

	},
	
	{
		"id": 				32444,

		"name": 			"Oprah Followers",

		"logo": 			"audience-oprah.png",

		"size": 			100421,

		"description": 		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

		// loop through these numbers every 20-30 seconds to simulate real time data - 3% increase between counts
		"totalPosts": 		[4306092, 4435275, 4568333],

		// loop through these numbers every 20-30 seconds to simulate real time data - 3% increase between counts
		"postsVelocity": 	[492, 507, 522],

		// audience highlights for demographics, psychographics (aka Usage and Attitudes) and marketing info
		"keyInsights": [			
			/* { "id": 1, "type": "Demographics",	"icon": "fa-crosshairs", 	"name": "Age & Gender", 				"value": "35+ - 85% female"	},
			{ "id": 2, "type": "Discussion", 	"icon": "fa-comment", 		"name": "Health & Family", 				"value": "Focus on being fit, and happy and enjoys delicious guilty pleasures - chocolate, girl scout cookies, etc."	},
			{ "id": 3, "type": "Mentions", 		"icon": "fa-pie-chart",		"name": "In Tune with Pop-Culture", 	"value": "Follows and talks about all major events - Movies, Sports, Music and Politics - leaning towards the Democratic party"	} */
		],

		// data for demographics charts
		"demographics": [{
			chart1_title: 		 "Age",
		    chart1_outer_values: [13, 17, 20, 15, 14, 13, 8],
		    chart1_outer_labels: ['Under 18','18-24', '25-34','35-44','45-54', '55-64','65+'],
		    chart1_inner_values: [13, 16, 20, 16, 14, 13, 8],
		    
			chart2_title: 		 "Gender",
		    chart2_outer_values: [47, 53],
		    chart2_outer_labels: ['Male','Female'],
		    chart2_inner_values: [45, 55],
		    
		    chart3_title: 		 "Location",
		    chart3_outer_values: [23, 25, 19, 14, 19],
		    chart3_outer_labels: ['Massachusetts','New York', 'Illinois', 'Connecticut', 'Tennessee'],
		    chart3_inner_values: [24, 23, 19, 18, 16],
		    
			chart4_title: 		 "Ethnicity",
		    chart4_outer_values: [66, 9, 13, 9, 1, 2],
		    chart4_outer_labels: ['Caucasian','Hispanic','African American','Asian','American Indian', 'Other'],
		    chart4_inner_values: [60, 14, 12, 10, 1, 3]
		}],

		// psychographics highlighted in Interests and Passions section
		"psychographics": {
			"categoriesSelector": [
				{ "categoryId": 0, "type": "Values", 		"shareValue": 'N/A',  	"indexValue": 'N/A' },
				{ "categoryId": 1, "type": "Food/Eating", 	"shareValue": 'N/A',  	"indexValue": 'N/A' },
				{ "categoryId": 2, "type": "Celebrities", 	"shareValue": 'N/A',  	"indexValue": 'N/A' }
			],

			"categoriesData": [
				{
 					"categoryId": 0,
					"analyses": [
						{
							"date": "Last Day",

							"chatter": [
								{ 
									"insightType": "By Brands", 
									"insightGroups": [
										{ 
											"analysisType": "Popular", 
											"insights": [
												{ "insight": "The Walking Dead",	"value": 190 },
												{ "insight": "Amazon", 				"value": 114 },
												{ "insight": "A4", 					"value": 65 },
												{ "insight": "Apple", 				"value": 51 },
												{ "insight": "NFL", 				"value": 46 }
											]
										},
										{ 
											"analysisType": "Indexing",
											"insights": [
												{ "insight": "@Walmart",			"value": 35.46 },
												{ "insight": "#Thrifty Nifty", 		"value": 31.52 },
												{ "insight": "A4", 					"value": 28.46 },
												{ "insight": "Amazon", 				"value": 4.99 },
												{ "insight": "Victoria's Secret", 	"value": 3.82 }
											]
										},
										{ 
											"analysisType": "Trending", 
											"insights": [
												{ "insight": "#Oscar Mayer",		"value": 400 },
												{ "insight": "Breaking Bad", 		"value": 365 },
												{ "insight": "Supreme Court", 		"value": 317 },
												{ "insight": "@DailyBurn #DB365", 	"value": 275 },
												{ "insight": "Victoria's Secret", 	"value": 203 }
											]
										}			
									]
								},
								{ 
									"insightType": "People", 
									"insightGroups": [
										{ 
											"analysisType": "Popular", 
											"insights": [
												{ "insight": "Jesus",			"value": 1460 },
												{ "insight": "Son", 			"value": 210 },
												{ "insight": "Obama", 			"value": 131 },
												{ "insight": "Donald Trump", 	"value": 112 },
												{ "insight": "Hillary", 		"value": 87 }
											]
										},
										{ 
											"analysisType": "Indexing", 
											"insights": [
												{ "insight": "Sarah Palin",		"value": 3.55 },
												{ "insight": "#Jesus", 			"value": 1.99 },
												{ "insight": "Isaiah", 			"value": 1.9 },
												{ "insight": "Trump", 			"value": 1.86 },
												{ "insight": "Cruz", 			"value": 1.82 }
											]
										},
										{ 
											"analysisType": "Trending", 
											"insights": [
												{ "insight": "St. Patrick",		"value": 400 },
												{ "insight": "Tony Horton", 	"value": 329 },
												{ "insight": "#Hillary", 		"value": 300 },
												{ "insight": "Chris Rock", 		"value": 289 },
												{ "insight": "Romney", 			"value": 268 }
											]
										}			
									]
								},
								{ 
									"insightType": "Hashtags", 
									"insightGroups": [
										{ 
											"analysisType": "Popular", 
											"insights": [
												{ "insight": "#healthy",		"value": 1088 },
												{ "insight": "#fitness",	 	"value": 634 },
												{ "insight": "#workout", 		"value": 597 },
												{ "insight": "#win", 			"value": 528 },
												{ "insight": "#running", 		"value": 444 }
											]
										},
										{ 
											"analysisType": "Indexing", 
											"insights": [
												{ "insight": "#mommymonday",	"value": 50 },
												{ "insight": "#sweepstakes", 	"value": 30.09 },
												{ "insight": "#myfitnesspal", 	"value": 16.14 },
												{ "insight": "#weightloss", 	"value": 15.65 },
												{ "insight": "#exercise", 		"value": 9.05 }
											]
										},
										{ 
											"analysisType": "Trending", 
											"insights": [
												{ "insight": "#kelloggsraisinbran",		"value": 400 },
												{ "insight": "#oscarmayernatural", 		"value": 375 },
												{ "insight": "#grammys", 				"value": 360 },
												{ "insight": "#nevertrump", 			"value": 333 },
												{ "insight": "#oscars", 				"value": 329 }
											]
										}	
									]
								},
								{ 
									"insightType": "Things", 
									"insightGroups": [
										{ 
											"analysisType": "Popular", 
											"insights": [
												{ "insight": "God",				"value": 2029 },
												{ "insight": "Healthy", 		"value": 1555 },
												{ "insight": "mom", 			"value": 1287 },
												{ "insight": "workout", 		"value": 794 },
												{ "insight": "happy", 			"value": 715 }
											]
										},
										{ 
											"analysisType": "Indexing", 
											"insights": [
												{ "insight": "#MommyMonday",	"value": 50 },
												{ "insight": "@MathCelebrity", 	"value": 13.26 },
												{ "insight": "Healthy", 		"value": 4.41 },
												{ "insight": "workout", 		"value": 2.56 },
												{ "insight": "#God", 			"value": 2.38 }
											]
										},
										{ 
											"analysisType": "Trending", 
											"insights": [
												{ "insight": "Mitt Romney",		"value": 400 },
												{ "insight": "@MathCelebrity", 	"value": 347 },
												{ "insight": "Valentine", 		"value": 275 },
												{ "insight": "Lauren Carr's exciting new #mystery rope", 		"value": 127 },
												{ "insight": "successful healthy #crowdfund @kickstarter", 		"value": 119 }
											]
										}			
									]
								}	
							],

							"postActivity": [
								{  
									"day": [
									    { name: "Monday",    value:  108 },
									    { name: "Tuesday",   value:  306 },
									    { name: "Wednesday", value:  504 },
									    { name: "Thursday",  value:  702 },
									    { name: "Friday",    value:  405 },
									    { name: "Saturday",  value:  306 },
									    { name: "Sunday",    value:  207 }
									]
								},
								{
									"month": [
									    { name: "1st",      value:  306 },
									    { name: "2nd",      value:  504 },
									    { name: "3rd",      value:  702 },
									    { name: "4th",      value:  411 }
									]
								},
								{
									"year": [
									    { name: "Jan",      value:  106 },
									    { name: "Feb",      value:  304 },
									    { name: "Mar",      value:  411 },
									    { name: "Apr",      value:  589 },
									    { name: "May",      value:  674 },
									    { name: "Jun",      value:  963 },
									    { name: "Jul",      value:  864 },
									    { name: "Aug",      value:  456 },
									    { name: "Sep",      value:  341 },
									    { name: "Oct",      value:  211 },
									    { name: "Nov",      value:  140 },
									    { name: "Dec",      value:  90  }
									]
								}
							],

							"influencers": [
								{ "name": "Marck Sweney", 			"handle": "@marksweney", 			"followers": "11.7K", 	"retweets": "N/A", 		"image": "avatar-f1.png" },
								{ "name": "Sandi Krakowski", 		"handle": "@sandikrakowski", 		"followers": "30.7K", 	"retweets": "N/A", 		"image": "avatar-f1.png" },
								{ "name": "Natasha Mairs", 			"handle": "@SerenityYou", 			"followers": "10.1K", 	"retweets": "N/A", 		"image": "avatar-f1.png" },
								{ "name": "Megan Calhoun", 			"handle": "@socialmoms", 			"followers": "446K", 	"retweets": "N/A", 		"image": "avatar-f1.png" },
								{ "name": "Jennifer Thompson", 		"handle": "@rawfoodbliss", 			"followers": "62.6K", 	"retweets": "N/A", 		"image": "avatar-f1.png" },
								{ "name": "Caitlin Beadles", 		"handle": "@godsgirl8494", 			"followers": "928K", 	"retweets": "N/A", 		"image": "avatar-f1.png" },
								{ "name": "Geoff De Weaver", 		"handle": "@geoff_deweaver", 		"followers": "1M", 		"retweets": "N/A", 		"image": "avatar-f1.png" },
								{ "name": "Jennifer Hudson", 		"handle": "@IAMJHUD", 				"followers": "3.82M", 	"retweets": "N/A", 		"image": "avatar-f1.png" }
							],
						
							"emergingNow": [
								{ "insight": "Lorem Ipsum...",		"value": 100 },
								{ "insight": "Lorem Ipsum...",		"value": 40 },
								{ "insight": "Lorem Ipsum...",		"value": 65 }
							],

							"recentTweets": [
								// { "name": "Simon Green", 			"handle": "@SGreen", 				"followers": 9343, 		"retweets": 3130, 		"image": "avatar-m3.png",	"tweet": "Nothing like crispy fries at Macdonalds." },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" }
							]
						}
					]
				},
				
				{
 					"categoryId": 1,
					"analyses": [
						{
							"date": "Last Day",

							"chatter": [
								{ 
									"insightType": "By Brands", 
									"insightGroups": [
										{ 
											"analysisType": "Popular", 
											"insights": [
												{ "insight": "Starbucks",			"value": 1125 },
												{ "insight": "Coke", 				"value": 506 },
												{ "insight": "McDonald's", 			"value": 481 },
												{ "insight": "Chipotle", 			"value": 312 },
												{ "insight": "Subway", 				"value": 245 }
											]
										},
										{ 
											"analysisType": "Indexing",
											"insights": [
												{ "insight": "FIJI Water",			"value": 22.08 },
												{ "insight": "Walmart", 			"value": 13.73 },
												{ "insight": "Starbucks", 			"value": 3.66 },
												{ "insight": "McDonald's", 			"value": 2.1 },
												{ "insight": "Diet Coke", 			"value": 2.06 }
											]
										},
										{ 
											"analysisType": "Trending", 
											"insights": [
												{ "insight": "@Subway Classic Footlongs",		"value": 388 },
												{ "insight": "@Lays Cheddar", 		"value": 328 },
												{ "insight": "FIJI Water", 			"value": 319 },
												{ "insight": "Nature Valley",	 	"value": 261 },
												{ "insight": "Girl Scouts", 		"value": 227 }
											]
										}			
									]
								},
								{ 
									"insightType": "People", 
									"insightGroups": [
										{ 
											"analysisType": "Popular", 
											"insights": [
												{ "insight": "Honey",			"value": 1460 },
												{ "insight": "Candy", 			"value": 210 },
												{ "insight": "Obama", 			"value": 131 },
												{ "insight": "Jesus", 			"value": 112 },
												{ "insight": "Joy", 			"value": 87 }
											]
										},
										{ 
											"analysisType": "Indexing", 
											"insights": [
												{ "insight": "Lily O'Brien",	"value": 16.32 },
												{ "insight": "Jimmy Wayne",		"value": 3.84 },
												{ "insight": "Chris Rock", 		"value": 3.63 },
												{ "insight": "Jamie Oliver", 	"value": 3.47 },
												{ "insight": "David Bowie", 	"value": 2.24 }
											]
										},
										{ 
											"analysisType": "Trending", 
											"insights": [
												{ "insight": "St. Patrick",		"value": 400 },
												{ "insight": "David Rocco", 	"value": 366 },
												{ "insight": "Mitt Romney", 	"value": 325 },
												{ "insight": "Tyler Ulis", 		"value": 305 },
												{ "insight": "Bunny Family", 	"value": 275 }
											]
										}			
									]
								},
								{ 
									"insightType": "Hashtags", 
									"insightGroups": [
										{ 
											"analysisType": "Popular", 
											"insights": [
												{ "insight": "#giveaway",		"value": 890 },
												{ "insight": "#coffee",		 	"value": 811 },
												{ "insight": "#recipe", 		"value": 615 },
												{ "insight": "#chocolate", 		"value": 539 },
												{ "insight": "#healthy", 		"value": 421 }
											]
										},
										{ 
											"analysisType": "Indexing", 
											"insights": [
												{ "insight": "#glutenfree",		"value": 11.78 },
												{ "insight": "#competition", 	"value": 11.65 },
												{ "insight": "#diet",		 	"value": 10.68 },
												{ "insight": "#recipes",	 	"value": 10.58 },
												{ "insight": "#healthy", 		"value": 7.79 }
											]
										},
										{ 
											"analysisType": "Trending", 
											"insights": [
												{ "insight": "#shrimpitup",		"value": 385 },
												{ "insight": "#teambreakfast", 	"value": 322 },
												{ "insight": "#flavorswapentry", 				"value": 301 },
												{ "insight": "#randomactsofkindnessday", 		"value": 270 },
												{ "insight": "#oscarmayernatural", 				"value": 248 }
											]
										}			
									]
								},
								{ 
									"insightType": "Things", 
									"insightGroups": [
										{ 
											"analysisType": "Popular", 
											"insights": [
												{ "insight": "coffee",			"value": 1451 },
												{ "insight": "chocolate", 		"value": 1289 },
												{ "insight": "water", 			"value": 994 },
												{ "insight": "Apple", 			"value": 957 },
												{ "insight": "tea", 			"value": 890 }
											]
										},
										{ 
											"analysisType": "Indexing", 
											"insights": [
												{ "insight": "recipe",			"value": 8.74 },
												{ "insight": "Friday",		 	"value": 4.08 },
												{ "insight": "snack", 			"value": 3.7 },
												{ "insight": "soup",	 		"value": 3.07 },
												{ "insight": "avocado", 		"value": 2.71 }
											]
										},
										{ 
											"analysisType": "Trending", 
											"insights": [
												{ "insight": "@Subway Classic Footlongs",	"value": 395 },
												{ "insight": "new Quesalupa", 				"value": 342 },
												{ "insight": "Coca-Cola polar bear", 		"value": 327 },
												{ "insight": "Mother's Day", 				"value": 274 },
												{ "insight": "#mondaymotivation", 			"value": 238 }
											]
										}			
									]
								}	
							],

							"postActivity": [
								{  
									"day": [
									    { name: "Monday",    value:  110 },
									    { name: "Tuesday",   value:  120 },
									    { name: "Wednesday", value:  130 },
									    { name: "Thursday",  value:  140 },
									    { name: "Friday",    value:  150 },
									    { name: "Saturday",  value:  160 },
									    { name: "Sunday",    value:  170 }
									]
								},
								{
									"month": [
									    { name: "1st",      value:  210 },
									    { name: "2nd",      value:  220 },
									    { name: "3rd",      value:  230 },
									    { name: "4th",      value:  240 }
									]
								},
								{
									"year": [
									    { name: "Jan",      value:  310 },
									    { name: "Feb",      value:  320 },
									    { name: "Mar",      value:  330 },
									    { name: "Apr",      value:  340 },
									    { name: "May",      value:  350 },
									    { name: "Jun",      value:  360 },
									    { name: "Jul",      value:  370 },
									    { name: "Aug",      value:  380 },
									    { name: "Sep",      value:  390 },
									    { name: "Oct",      value:  400 },
									    { name: "Nov",      value:  410 },
									    { name: "Dec",      value:  420 }
									]
								}
							],

							"influencers": [
								{ "name": "Everyday Health", 		"handle": "@EverydayHealth", 		"followers": "385K", 	"retweets": "N/A", 		"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Angel Howansky", 		"handle": "@Angelshouse", 			"followers": "263K", 	"retweets": "N/A", 		"image": "avatar-f1.png" },
								{ "name": "Cooking Light", 			"handle": "@Cooking_Light", 		"followers": "178K", 	"retweets": "N/A", 		"image": "avatar-f1.png" },
								{ "name": "Kim & Steve Starry", 	"handle": "@KStarry", 				"followers": "103K", 	"retweets": "N/A", 		"image": "avatar-f1.png" },
								{ "name": "Anne-Marie Nichols", 	"handle": "@amnichols", 			"followers": "30K", 	"retweets": "N/A", 		"image": "avatar-f1.png" },
								{ "name": "Suzanne Rudge", 			"handle": "@MapleMouseMama", 		"followers": 7952, 		"retweets": "N/A", 		"image": "avatar-f1.png" },
								{ "name": "The Holderness Fam", 	"handle": "@KimDHolderness", 		"followers": 6889, 		"retweets": "N/A", 		"image": "avatar-f1.png" },
								{ "name": "BlkWomenLosingWeight", 	"handle": "@blackweightloss", 		"followers": 5764, 		"retweets": "N/A", 		"image": "avatar-f1.png" }
							],
						
							"emergingNow": [
								{ "insight": "Lorem Ipsum...",		"value": 100 },
								{ "insight": "Lorem Ipsum...",		"value": 40 },
								{ "insight": "Lorem Ipsum...",		"value": 65 }
							],

							"recentTweets": [
								// { "name": "Simon Green", 			"handle": "@SGreen", 				"followers": 9343, 		"retweets": 3130, 		"image": "avatar-m3.png",	"tweet": "Nothing like crispy fries at Macdonalds." },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" }
							]
						}
					]
				},
				
				{
 					"categoryId": 2,
					"analyses": [
						{
							"date": "Last Day",

							"chatter": [
								{ 
									"insightType": "By Brands", 
									"insightGroups": [
										{ 
											"analysisType": "Popular", 
											"insights": [
												{ "insight": "Ford",				"value": 70 },
												{ "insight": "iPhone", 				"value": 28 },
												{ "insight": "NFL",					"value": 27 },
												{ "insight": "NBC", 				"value": 25 },
												{ "insight": "Weight Watchers",		"value": 25 }
											]
										},
										{ 
											"analysisType": "Indexing",
											"insights": [
												{ "insight": "Weight Watchers",		"value": 21.56 },
												{ "insight": "@CNN",		 		"value": 6.47 },
												{ "insight": "@eBay", 				"value": 4.7 },
												{ "insight": "Amazon", 				"value": 4.31 },
												{ "insight": "NBC", 				"value": 2.84 }
											]
										},
										{ 
											"analysisType": "Trending", 
											"insights": [
												{ "insight": "MasterCard",			"value": 400 },
												{ "insight": "Experian", 			"value": 365 },
												{ "insight": "Ford Field", 			"value": 330 },
												{ "insight": "Girl Scout Cookies", 	"value": 300 },
												{ "insight": "Hyundai",			 	"value": 295 }
											]
										}			
									]
								},
								{ 
									"insightType": "People", 
									"insightGroups": [
										{ 
											"analysisType": "Popular", 
											"insights": [
												{ "insight": "Adele",			"value": 1036 },
												{ "insight": "Hillary Clinton", "value": 552 },
												{ "insight": "Taylor Swift", 	"value": 262 },
												{ "insight": "Lady Gaga", 		"value": 250 },
												{ "insight": "Oprah Winfrey", 	"value": 69 }
											]
										},
										{ 
											"analysisType": "Indexing", 
											"insights": [
												{ "insight": "Rachael Ray",		"value": 11.38 },
												{ "insight": "#Adele", 			"value": 3.8 },
												{ "insight": "Oprah Winfrey",	"value": 3.58 },
												{ "insight": "Kate Winslet", 	"value": 2.97 },
												{ "insight": "Tina Fey", 		"value": 2.45 }
											]
										},
										{ 
											"analysisType": "Trending", 
											"insights": [
												{ "insight": "Chris Rock",		"value": 400 },
												{ "insight": "Kesha",		 	"value": 374 },
												{ "insight": "Bruno",	 		"value": 367 },
												{ "insight": "Sam Hunt", 		"value": 300 },
												{ "insight": "David Bowie", 	"value": 248 }
											]
										}			
									]
								},
								{ 
									"insightType": "Hashtags", 
									"insightGroups": [
										{ 
											"analysisType": "Popular", 
											"insights": [
												{ "insight": "#sb50",			"value": 154 },
												{ "insight": "#grammys",	 	"value": 153 },
												{ "insight": "#adele",	 		"value": 143 },
												{ "insight": "#oscar", 			"value": 138 },
												{ "insight": "#goldenglobes", 	"value": 138 }
											]
										},
										{ 
											"analysisType": "Indexing", 
											"insights": [
												{ "insight": "#giveaway",		"value": 16.2 },
												{ "insight": "#goldenglobe", 	"value": 3.72 },
												{ "insight": "#snl",		 	"value": 3.48 },
												{ "insight": "#greaselive", 	"value": 3.47 },
												{ "insight": "#oscars2016", 	"value": 3.15 }
											]
										},
										{ 
											"analysisType": "Trending", 
											"insights": [
												{ "insight": "#grammys2016",			"value": 350 },
												{ "insight": "#supertuesday", 			"value": 325 },
												{ "insight": "#election2016", 			"value": 300 },
												{ "insight": "#happybirthdayjustinbieber", 			"value": 285 },
												{ "insight": "#youngmindsmatter", 		"value": 250 }
											]
										}			
									]
								},
								{ 
									"insightType": "Things", 
									"insightGroups": [
										{ 
											"analysisType": "Popular", 
											"insights": [
												{ "insight": "Hillary Clinton",	"value": 587 },
												{ "insight": "Adele",	 		"value": 412 },
												{ "insight": "Beyonce", 		"value": 213 },
												{ "insight": "Lady Gaga", 		"value": 183 },
												{ "insight": "Justin Bieber", 	"value": 83 }
											]
										},
										{ 
											"analysisType": "Indexing", 
											"insights": [
												{ "insight": "Kate Winslet",	"value": 3.79 },
												{ "insight": "#Adele", 			"value": 3.49 },
												{ "insight": "Pope", 			"value": 2.4 },
												{ "insight": "Tina Fey", 		"value": 2.21 },
												{ "insight": "Hillary Clinton", "value": 1.89 }
											]
										},
										{ 
											"analysisType": "Trending", 
											"insights": [
												{ "insight": "DANCE BATTLE",	"value": 345 },
												{ "insight": "in n out",	 	"value": 300 },
												{ "insight": "Budweiser", 		"value": 270 },
												{ "insight": "no Trump", 		"value": 240 },
												{ "insight": "Heaven", 			"value": 200 }
											]
										}			
									]
								}	
							],

							"postActivity": [
								{  
									"day": [
									    { name: "Monday",    value:  110 },
									    { name: "Tuesday",   value:  120 },
									    { name: "Wednesday", value:  130 },
									    { name: "Thursday",  value:  140 },
									    { name: "Friday",    value:  150 },
									    { name: "Saturday",  value:  160 },
									    { name: "Sunday",    value:  170 }
									]
								},
								{
									"month": [
									    { name: "1st",      value:  210 },
									    { name: "2nd",      value:  220 },
									    { name: "3rd",      value:  230 },
									    { name: "4th",      value:  240 }
									]
								},
								{
									"year": [
									    { name: "Jan",      value:  310 },
									    { name: "Feb",      value:  320 },
									    { name: "Mar",      value:  330 },
									    { name: "Apr",      value:  340 },
									    { name: "May",      value:  350 },
									    { name: "Jun",      value:  360 },
									    { name: "Jul",      value:  370 },
									    { name: "Aug",      value:  380 },
									    { name: "Sep",      value:  390 },
									    { name: "Oct",      value:  400 },
									    { name: "Nov",      value:  410 },
									    { name: "Dec",      value:  420 }
									]
								}
							],

							"influencers": [
								{ "name": "Jake Quickenden", 		"handle": "@JakeQuickenden", 		"followers": "497K", 	"retweets": "N/A", 		"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Steve Kornacki", 		"handle": "@SteveKornacki", 		"followers": "88.9K", 	"retweets": "N/A", 		"image": "avatar-f1.png" },
								{ "name": "Chris Caggs", 			"handle": "@ChrisCaggs", 			"followers": "111K", 	"retweets": "N/A", 		"image": "avatar-f1.png" },
								{ "name": "Louise Minchin", 		"handle": "@louiseminchin", 		"followers": "83.4K", 	"retweets": "N/A", 		"image": "avatar-f1.png" },
								{ "name": "Lindsey Brooks", 		"handle": "@drgroovy77", 			"followers": "72.2K", 	"retweets": "N/A", 		"image": "avatar-f1.png" },
								{ "name": "Ariel Foxman", 			"handle": "@ArielFoxman", 			"followers": "64K", 	"retweets": "N/A", 		"image": "avatar-f1.png" },
								{ "name": "Betty Buckley",	 		"handle": "@BettyBuckley", 			"followers": "27.4K", 		"retweets": "N/A", 		"image": "avatar-f1.png" },
								{ "name": "Margaret Molloy", 		"handle": "@MargaretMolloy", 				"followers": "28K", 	"retweets": "N/A", 		"image": "avatar-f1.png" }
							],
						
							"emergingNow": [
								{ "insight": "Lorem Ipsum...",		"value": 100 },
								{ "insight": "Lorem Ipsum...",		"value": 40 },
								{ "insight": "Lorem Ipsum...",		"value": 65 }
							],

							"recentTweets": [
								// { "name": "Simon Green", 			"handle": "@SGreen", 				"followers": 9343, 		"retweets": 3130, 		"image": "avatar-m3.png",	"tweet": "Nothing like crispy fries at Macdonalds." },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" }
							]
						}
					]
				}
			]
		},


		"insightstrends": {
			"categoriesSelector": [
				{ "categoryId": 0, "type": "Product" },
				{ "categoryId": 1, "type": "Brand" },
				{ "categoryId": 2, "type": "Category" }
			],

			"categoriesData": [
				{
 					"categoryId": 0,
					"image": "insightsTrends1.png",
					"description": "Lorem ipsum Est ullamco commodo fugiat irure aliquip ut consectetur esse laborum magna aliquip do sit qui eiusmod eu aute Duis id do sit dolore Duis Excepteur dolor Ut commodo labore laboris veniam sit cupidatat ex laboris irure quis aliquip.",
					"date": "Last Week",

					"insights": [
						{
							"measure": "Authors",
							"count": 1332,
							"multiplier": 1.5
						},
						{
							"measure": "Mentions",
							"count": 42090,
							"multiplier": 2.5
						},
						{
							"measure": "Sentiment",
							"count": 32,
							"multiplier": 28
						}
					],

					"influencers": [
						{ "name": "Jennifer McKenna", 		"handle": "@Jennifer_sales14", 		"followers": 54984, 	"retweets": 67424, 		"image": "avatar-f6.png" },
						{ "name": "Alfred Robertson", 		"handle": "@alfred_robertson_111", 	"followers": 156903, 	"retweets": 766466, 	"image": "avatar-m5.png" },
						{ "name": "Olivia Chow", 			"handle": "@OliviaChow", 			"followers": 486293, 	"retweets": 235084, 	"image": "avatar-f4.png" },
						{ "name": "Kam Jefferson", 			"handle": "@KamJefferson", 			"followers": 11725920, 	"retweets": 7987324, 	"image": "avatar-m1.png" },
						{ "name": "Kim Blanchet", 			"handle": "@KimBlanchet_1973", 		"followers": 7343, 		"retweets": 1432, 		"image": "avatar-f5.png" },
						{ "name": "Steve Ballintine", 		"handle": "@spaceInvader_349", 		"followers": 44490, 	"retweets": 10334, 		"image": "avatar-m6.png" },
						{ "name": "Jim Watson", 			"handle": "@ilovecoffee88", 		"followers": 8434133, 	"retweets": 4344904, 	"image": "avatar-m4.png" },
						{ "name": "Mick Richardson", 		"handle": "@MickeyRickey_3384", 	"followers": 1325655, 	"retweets": 4899325, 	"image": "avatar-m2.png" },
						{ "name": "Patricia Summers Right", "handle": "@PSummers", 				"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png" },
						{ "name": "Sue Piper", 				"handle": "@SuePiper05", 			"followers": 8832, 		"retweets": 6444, 		"image": "avatar-f2.png" },
						{ "name": "Simon Green", 			"handle": "@SGreen", 				"followers": 9343, 		"retweets": 3130, 		"image": "avatar-m3.png" },
						{ "name": "Tracey Sing", 			"handle": "@tracey_sing12312", 		"followers": 98654, 	"retweets": 25693, 		"image": "avatar-f3.png" }
					],

					"postsOverTime": [
						{  
							"day": [
							    { 
							        "key": "Mentions", 
							        "values": [ 
							            [ 0, 100], 
							            [ 1, 140], 
							            [ 2, 210], 
							            [ 3, 50], 
							            [ 4, 180], 
							            [ 5, 240], 
							            [ 6, 80]
							        ]
							    }, 
							    { 
							        "key": "Authors" , 
							        "values": [ 
							            [ 0, 80], 
							            [ 1, 20], 
							            [ 2, 10], 
							            [ 3, 30], 
							            [ 4, 40], 
							            [ 5, 10], 
							            [ 6, 60]
							        ]
							    }
							]
						},
						{
							"month": [
							    { 
							        "key": "Mentions", 
							        "values": [ 
							            [ 0, 200], 
							            [ 1, 30], 
							            [ 2, 120], 
							            [ 3, 80]
							        ]
							    }, 
							    { 
							        "key": "Authors" , 
							        "values": [ 
							            [ 0, 10], 
							            [ 1, 60], 
							            [ 2, 20], 
							            [ 3, 30]
							        ]
							    }
							]
						},
						{
							"year": [
							    { 
							        "key": "Mentions", 
							        "values": [ 
							            [ 0, 160], 
							            [ 1, 80], 
							            [ 2, 100], 
							            [ 3, 120],
							            [ 4, 140], 
							            [ 5, 60], 
							            [ 6, 200], 
							            [ 7, 180],
							            [ 8, 160], 
							            [ 9, 40], 
							            [ 10, 100], 
							            [ 11, 120]

							        ]
							    }, 
							    { 
							        "key": "Authors" , 
							        "values": [ 
							            [ 0, 20], 
							            [ 1, 80], 
							            [ 2, 20], 
							            [ 3, 30],
							            [ 4, 20], 
							            [ 5, 40], 
							            [ 6, 20], 
							            [ 7, 10],
							            [ 8, 10], 
							            [ 9, 10], 
							            [ 10, 10], 
							            [ 11, 30]
							        ]
							    }
							]
						}
					],
				
					"emergingNow": [
						{ "insight": "TACO CLUB",		"value": 75 },
						{ "insight": "ESPRESSO",		"value": 45 },
						{ "insight": "CRISPY FRIES",	"value": 100 }
					],

					"recentTweets": [
						{ "name": "Jim Watson", 			"handle": "@ilovecoffee88", 		"followers": 8434133, 	"retweets": 4344904, 	"image": "avatar-m4.png", 	"tweet": "The new bacon club at Taco Bell is awesome!" },
						{ "name": "Olivia Chow", 			"handle": "@OliviaChow", 			"followers": 486293, 	"retweets": 235084, 	"image": "avatar-f4.png", 	"tweet": "The Chili at Subway warmed me up, time to head back out into the cold." },
						{ "name": "Patricia Summers Right", "handle": "@PSummers", 				"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
						{ "name": "Steve Ballintine", 		"handle": "@spaceInvader_349", 		"followers": 44490, 	"retweets": 10334, 		"image": "avatar-m6.png", 	"tweet": "I tried making burritos, but Chipoltes is way better." },
						{ "name": "Mick Richardson", 		"handle": "@MickeyRickey_3384", 	"followers": 1325655, 	"retweets": 4899325, 	"image": "avatar-m2.png", 	"tweet": "Anyone else addicted to the coffee at Macdonalds?" },
						{ "name": "Kam Jefferson", 			"handle": "@KamJefferson", 			"followers": 11725920, 	"retweets": 7987324, 	"image": "avatar-m1.png",	"tweet": "Late night munchies at Taco Bell." },
						{ "name": "Sue Piper", 				"handle": "@SuePiper05", 			"followers": 8832, 		"retweets": 6444, 		"image": "avatar-f2.png", 	"tweet": "Finally got my Caffe Latte at Star Bucks, time to wake up." },
						{ "name": "Alfred Robertson", 		"handle": "@alfred_robertson_111", 	"followers": 156903, 	"retweets": 766466, 	"image": "avatar-m5.png", 	"tweet": "Have a craving for Crispy Tacos at Chipoltes tonight." },
						{ "name": "Kim Blanchet", 			"handle": "@KimBlanchet_1973", 		"followers": 7343, 		"retweets": 1432, 		"image": "avatar-f5.png", 	"tweet": "Anyone else for dinner at Subway tonight?" },
						{ "name": "Jennifer McKenna", 		"handle": "@Jennifer_sales14", 		"followers": 54984, 	"retweets": 67424, 		"image": "avatar-f6.png", 	"tweet": "Taco Bell serving healthier foods!?" },
						{ "name": "Simon Green", 			"handle": "@SGreen", 				"followers": 9343, 		"retweets": 3130, 		"image": "avatar-m3.png",	"tweet": "Nothing like crispy fries at Macdonalds." },
						{ "name": "Tracey Sing", 			"handle": "@tracey_sing12312", 		"followers": 98654, 	"retweets": 25693, 		"image": "avatar-f3.png", 	"tweet": "I need my coffee fix, off to Starbucks!" }
					]

				},
				{
 					"categoryId": 1,
					"image": "insightsTrends2.png",
					"description": "Excepteur dolor Ut commodo labore laboris veniam sit cupidatat ex laboris irure quis aliquip. Lorem ipsum Est ullamco commodo fugiat irure aliquip ut consectetur esse laborum magna aliquip do sit qui eiusmod eu aute Duis id do sit dolore Duis.",
					"date": "Last Week",
					
					"insights": [
						{
							"measure": "Authors",
							"count": 2895,
							"multiplier": 1.8
						},
						{
							"measure": "Mentions",
							"count": 59898,
							"multiplier": 2.1
						},
						{
							"measure": "Sentiment",
							"count": 28,
							"multiplier": 21
						}
					],

					"influencers": [
						{ "name": "Steve Ballintine", 		"handle": "@spaceInvader_349", 		"followers": 44490, 	"retweets": 10334, 		"image": "avatar-m6.png" },
						{ "name": "Jim Watson", 			"handle": "@ilovecoffee88", 		"followers": 8434133, 	"retweets": 4344904, 	"image": "avatar-m4.png" },
						{ "name": "Tracey Sing", 			"handle": "@tracey_sing12312", 		"followers": 98654, 	"retweets": 25693, 		"image": "avatar-f3.png" },
						{ "name": "Mick Richardson", 		"handle": "@MickeyRickey_3384", 	"followers": 1325655, 	"retweets": 4899325, 	"image": "avatar-m2.png" },
						{ "name": "Patricia Summers Right", "handle": "@PSummers", 				"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png" },
						{ "name": "Kim Blanchet", 			"handle": "@KimBlanchet_1973", 		"followers": 7343, 		"retweets": 1432, 		"image": "avatar-f5.png" },
						{ "name": "Sue Piper", 				"handle": "@SuePiper05", 			"followers": 8832, 		"retweets": 6444, 		"image": "avatar-f2.png" },
						{ "name": "Alfred Robertson", 		"handle": "@alfred_robertson_111", 	"followers": 156903, 	"retweets": 766466, 	"image": "avatar-m5.png" },
						{ "name": "Olivia Chow", 			"handle": "@OliviaChow", 			"followers": 486293, 	"retweets": 235084, 	"image": "avatar-f4.png" },
						{ "name": "Jennifer McKenna", 		"handle": "@Jennifer_sales14", 		"followers": 54984, 	"retweets": 67424, 		"image": "avatar-f6.png" },
						{ "name": "Simon Green", 			"handle": "@SGreen", 				"followers": 9343, 		"retweets": 3130, 		"image": "avatar-m3.png" },
						{ "name": "Kam Jefferson", 			"handle": "@KamJefferson", 			"followers": 11725920, 	"retweets": 7987324, 	"image": "avatar-m1.png" }
					],

					"postsOverTime": [
						{  
							"day": [
							    { 
							        "key": "Mentions", 
							        "values": [ 
							            [ 0, 100], 
							            [ 1, 110], 
							            [ 2, 120], 
							            [ 3, 130], 
							            [ 4, 140], 
							            [ 5, 150], 
							            [ 6, 160]
							        ]
							    }, 
							    { 
							        "key": "Authors" , 
							        "values": [ 
							            [ 0, 10], 
							            [ 1, 10], 
							            [ 2, 20], 
							            [ 3, 20], 
							            [ 4, 30], 
							            [ 5, 40], 
							            [ 6, 50]
							        ]
							    }
							]
						},
						{
							"month": [
							    { 
							        "key": "Mentions", 
							        "values": [ 
							            [ 0, 200], 
							            [ 1, 210], 
							            [ 2, 220], 
							            [ 3, 230]
							        ]
							    }, 
							    { 
							        "key": "Authors" , 
							        "values": [ 
							            [ 0, 20], 
							            [ 1, 20], 
							            [ 2, 30], 
							            [ 3, 30]
							        ]
							    }
							]
						},
						{
							"year": [
							    { 
							        "key": "Mentions", 
							        "values": [ 
							            [ 0, 310], 
							            [ 1, 320], 
							            [ 2, 330], 
							            [ 3, 340],
							            [ 4, 350], 
							            [ 5, 360], 
							            [ 6, 370], 
							            [ 7, 380],
							            [ 8, 390], 
							            [ 9, 400], 
							            [ 10, 410], 
							            [ 11, 420]

							        ]
							    }, 
							    { 
							        "key": "Authors" , 
							        "values": [ 
							            [ 0, 10], 
							            [ 1, 10], 
							            [ 2, 20], 
							            [ 3, 20],
							            [ 4, 30], 
							            [ 5, 30], 
							            [ 6, 40], 
							            [ 7, 40],
							            [ 8, 50], 
							            [ 9, 50], 
							            [ 10, 60], 
							            [ 11, 60]
							        ]
							    }
							]
						}
					],
				
					"emergingNow": [
						{ "insight": "CHILPOTE",		"value": 60 },
						{ "insight": "STAR BUCKS",		"value": 70 },
						{ "insight": "MACDONALDS",		"value": 80 }
					],

					"recentTweets": [
						{ "name": "Jim Watson", 			"handle": "@ilovecoffee88", 		"followers": 8434133, 	"retweets": 4344904, 	"image": "avatar-m4.png", 	"tweet": "The new bacon club at Taco Bell is awesome!" },
						{ "name": "Mick Richardson", 		"handle": "@MickeyRickey_3384", 	"followers": 1325655, 	"retweets": 4899325, 	"image": "avatar-m2.png", 	"tweet": "Anyone else addicted to the coffee at Macdonalds?" },
						{ "name": "Olivia Chow", 			"handle": "@OliviaChow", 			"followers": 486293, 	"retweets": 235084, 	"image": "avatar-f4.png", 	"tweet": "The Chili at Subway warmed me up, time to head back out into the cold." },
						{ "name": "Kam Jefferson", 			"handle": "@KamJefferson", 			"followers": 11725920, 	"retweets": 7987324, 	"image": "avatar-m1.png",	"tweet": "Late night munchies at Taco Bell." },
						{ "name": "Sue Piper", 				"handle": "@SuePiper05", 			"followers": 8832, 		"retweets": 6444, 		"image": "avatar-f2.png", 	"tweet": "Finally got my Caffe Latte at Star Bucks, time to wake up." },
						{ "name": "Patricia Summers Right", "handle": "@PSummers", 				"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
						{ "name": "Alfred Robertson", 		"handle": "@alfred_robertson_111", 	"followers": 156903, 	"retweets": 766466, 	"image": "avatar-m5.png", 	"tweet": "Have a craving for Crispy Tacos at Chipoltes tonight." },
						{ "name": "Simon Green", 			"handle": "@SGreen", 				"followers": 9343, 		"retweets": 3130, 		"image": "avatar-m3.png",	"tweet": "Nothing like crispy fries at Macdonalds." },
						{ "name": "Kim Blanchet", 			"handle": "@KimBlanchet_1973", 		"followers": 7343, 		"retweets": 1432, 		"image": "avatar-f5.png", 	"tweet": "Anyone else for dinner at Subway tonight?" },
						{ "name": "Jennifer McKenna", 		"handle": "@Jennifer_sales14", 		"followers": 54984, 	"retweets": 67424, 		"image": "avatar-f6.png", 	"tweet": "Taco Bell serving healthier foods!?" },
						{ "name": "Steve Ballintine", 		"handle": "@spaceInvader_349", 		"followers": 44490, 	"retweets": 10334, 		"image": "avatar-m6.png", 	"tweet": "I tried making burritos, but Chipoltes is way better." },
						{ "name": "Tracey Sing", 			"handle": "@tracey_sing12312", 		"followers": 98654, 	"retweets": 25693, 		"image": "avatar-f3.png", 	"tweet": "I need my coffee fix, off to Starbucks!" },
						{ "name": "Patricia Summers Right", "handle": "@PSummers", 				"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
						{ "name": "Alfred Robertson", 		"handle": "@alfred_robertson_111", 	"followers": 156903, 	"retweets": 766466, 	"image": "avatar-m5.png", 	"tweet": "Have a craving for Crispy Tacos at Chipoltes tonight." }
					]

				}
			]
		}

	},

	{
		"id": 				32445,

		"name": 			"Chipotle",

		"logo": 			"audience-chipotle.png",

		"size": 			500000,

		"description": 		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

		// loop through these numbers every 20-30 seconds to simulate real time data - 3% increase between counts
		"totalPosts": 		[39212841, 40389226, 41600903],

		// loop through these numbers every 20-30 seconds to simulate real time data - 3% increase between counts
		"postsVelocity": 	[4476, 4611, 4749],

		// audience highlights for demographics, psychographics (aka Usage and Attitudes) and marketing info
		"keyInsights": [			
			/* { "id": 1, "type": "Demographics",	"icon": "fa-crosshairs", 	"name": "Age & Gender", 				"value": "35+ - 85% female"	},
			{ "id": 2, "type": "Discussion", 	"icon": "fa-comment", 		"name": "Health & Family", 				"value": "Focus on being fit, and happy and enjoys delicious guilty pleasures - chocolate, girl scout cookies, etc."	},
			{ "id": 3, "type": "Mentions", 		"icon": "fa-pie-chart",		"name": "In Tune with Pop-Culture", 	"value": "Follows and talks about all major events - Movies, Sports, Music and Politics - leaning towards the Democratic party"	} */
		],

		// data for demographics charts
		"demographics": [{
			chart1_title: 		 "Age",
		    chart1_outer_values: [13, 17, 20, 15, 14, 13, 8],
		    chart1_outer_labels: ['Under 18','18-24', '25-34','35-44','45-54', '55-64','65+'],
		    chart1_inner_values: [15, 19, 22, 15, 13, 11, 5],
		    
			chart2_title: 		 "Gender",
		    chart2_outer_values: [47, 53],
		    chart2_outer_labels: ['Male','Female'],
		    chart2_inner_values: [44, 56],
		    
		    chart3_title: 		 "Location",
		    chart3_outer_values: [],
		    chart3_outer_labels: ['Ohio','Minnesota', 'Kansas', 'Illinois', 'New York'],
		    chart3_inner_values: [27, 20, 18, 18, 18],
		    
			chart4_title: 		 "Ethnicity",
		    chart4_outer_values: [66, 9, 9, 13, 1, 2],
		    chart4_outer_labels: ['Caucasian','Hispanic','Asian','African American','American Indian', 'Other'],
		    chart4_inner_values: [67, 11, 7, 2, 1, 12]
		}],

		// psychographics highlighted in Interests and Passions section
		"psychographics": {
			"categoriesSelector": [
				{ "categoryId": 0, "type": "Values", 		"shareValue": 'N/A',  	"indexValue": 'N/A' },
				{ "categoryId": 1, "type": "Food/Eating", 	"shareValue": 'N/A',  	"indexValue": 'N/A' },
				{ "categoryId": 2, "type": "Celebrities", 	"shareValue": 'N/A',  	"indexValue": 'N/A' }
			],

			"categoriesData": [
				{
 					"categoryId": 0,
					"analyses": [
						{
							"date": "Last Day",

							"chatter": [
								{ 
									"insightType": "By Brands", 
									"insightGroups": [
										{ 
											"analysisType": "Popular", 
											"insights": [
												{ "insight": "The Walking Dead",	"value": 190 },
												{ "insight": "Amazon", 				"value": 114 },
												{ "insight": "A4", 					"value": 65 },
												{ "insight": "Apple", 				"value": 51 },
												{ "insight": "NFL", 				"value": 46 }
											]
										},
										{ 
											"analysisType": "Indexing",
											"insights": [
												{ "insight": "@Walmart",			"value": 35.46 },
												{ "insight": "#Thrifty Nifty", 		"value": 31.52 },
												{ "insight": "A4", 					"value": 28.46 },
												{ "insight": "Amazon", 				"value": 4.99 },
												{ "insight": "Victoria's Secret", 	"value": 3.82 }
											]
										},
										{ 
											"analysisType": "Trending", 
											"insights": [
												{ "insight": "#Oscar Mayer",		"value": 400 },
												{ "insight": "Breaking Bad", 		"value": 365 },
												{ "insight": "Supreme Court", 		"value": 317 },
												{ "insight": "@DailyBurn #DB365", 	"value": 275 },
												{ "insight": "Victoria's Secret", 	"value": 203 }
											]
										}			
									]
								},
								{ 
									"insightType": "People", 
									"insightGroups": [
										{ 
											"analysisType": "Popular", 
											"insights": [
												{ "insight": "Jesus",			"value": 1460 },
												{ "insight": "Son", 			"value": 210 },
												{ "insight": "Obama", 			"value": 131 },
												{ "insight": "Donald Trump", 	"value": 112 },
												{ "insight": "Hillary", 		"value": 87 }
											]
										},
										{ 
											"analysisType": "Indexing", 
											"insights": [
												{ "insight": "Sarah Palin",		"value": 3.55 },
												{ "insight": "#Jesus", 			"value": 1.99 },
												{ "insight": "Isaiah", 			"value": 1.9 },
												{ "insight": "Trump", 			"value": 1.86 },
												{ "insight": "Cruz", 			"value": 1.82 }
											]
										},
										{ 
											"analysisType": "Trending", 
											"insights": [
												{ "insight": "St. Patrick",		"value": 400 },
												{ "insight": "Tony Horton", 	"value": 329 },
												{ "insight": "#Hillary", 		"value": 300 },
												{ "insight": "Chris Rock", 		"value": 289 },
												{ "insight": "Romney", 			"value": 268 }
											]
										}			
									]
								},
								{ 
									"insightType": "Hashtags", 
									"insightGroups": [
										{ 
											"analysisType": "Popular", 
											"insights": [
												{ "insight": "#healthy",		"value": 1088 },
												{ "insight": "#fitness",	 	"value": 634 },
												{ "insight": "#workout", 		"value": 597 },
												{ "insight": "#win", 			"value": 528 },
												{ "insight": "#running", 		"value": 444 }
											]
										},
										{ 
											"analysisType": "Indexing", 
											"insights": [
												{ "insight": "#mommymonday",	"value": 50 },
												{ "insight": "#sweepstakes", 	"value": 30.09 },
												{ "insight": "#myfitnesspal", 	"value": 16.14 },
												{ "insight": "#weightloss", 	"value": 15.65 },
												{ "insight": "#exercise", 		"value": 9.05 }
											]
										},
										{ 
											"analysisType": "Trending", 
											"insights": [
												{ "insight": "#kelloggsraisinbran",		"value": 400 },
												{ "insight": "#oscarmayernatural", 		"value": 375 },
												{ "insight": "#grammys", 				"value": 360 },
												{ "insight": "#nevertrump", 			"value": 333 },
												{ "insight": "#oscars", 				"value": 329 }
											]
										}	
									]
								},
								{ 
									"insightType": "Things", 
									"insightGroups": [
										{ 
											"analysisType": "Popular", 
											"insights": [
												{ "insight": "God",				"value": 2029 },
												{ "insight": "Healthy", 		"value": 1555 },
												{ "insight": "mom", 			"value": 1287 },
												{ "insight": "workout", 		"value": 794 },
												{ "insight": "happy", 			"value": 715 }
											]
										},
										{ 
											"analysisType": "Indexing", 
											"insights": [
												{ "insight": "#MommyMonday",	"value": 50 },
												{ "insight": "@MathCelebrity", 	"value": 13.26 },
												{ "insight": "Healthy", 		"value": 4.41 },
												{ "insight": "workout", 		"value": 2.56 },
												{ "insight": "#God", 			"value": 2.38 }
											]
										},
										{ 
											"analysisType": "Trending", 
											"insights": [
												{ "insight": "Mitt Romney",		"value": 400 },
												{ "insight": "@MathCelebrity", 	"value": 347 },
												{ "insight": "Valentine", 		"value": 275 },
												{ "insight": "Lauren Carr's exciting new #mystery rope", 		"value": 127 },
												{ "insight": "successful healthy #crowdfund @kickstarter", 		"value": 119 }
											]
										}			
									]
								}	
							],

							"postActivity": [
								{  
									"day": [
									    { name: "Monday",    value:  108 },
									    { name: "Tuesday",   value:  306 },
									    { name: "Wednesday", value:  504 },
									    { name: "Thursday",  value:  702 },
									    { name: "Friday",    value:  405 },
									    { name: "Saturday",  value:  306 },
									    { name: "Sunday",    value:  207 }
									]
								},
								{
									"month": [
									    { name: "1st",      value:  306 },
									    { name: "2nd",      value:  504 },
									    { name: "3rd",      value:  702 },
									    { name: "4th",      value:  411 }
									]
								},
								{
									"year": [
									    { name: "Jan",      value:  106 },
									    { name: "Feb",      value:  304 },
									    { name: "Mar",      value:  411 },
									    { name: "Apr",      value:  589 },
									    { name: "May",      value:  674 },
									    { name: "Jun",      value:  963 },
									    { name: "Jul",      value:  864 },
									    { name: "Aug",      value:  456 },
									    { name: "Sep",      value:  341 },
									    { name: "Oct",      value:  211 },
									    { name: "Nov",      value:  140 },
									    { name: "Dec",      value:  90  }
									]
								}
							],

							"influencers": [
								{ "name": "Marck Sweney", 			"handle": "@marksweney", 			"followers": "11.7K", 	"retweets": "N/A", 		"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Sandi Krakowski", 		"handle": "@sandikrakowski", 		"followers": "30.7K", 	"retweets": "N/A", 		"image": "avatar-f1.png" },
								{ "name": "Natasha Mairs", 			"handle": "@SerenityYou", 			"followers": "10.1K", 	"retweets": "N/A", 		"image": "avatar-f1.png" },
								{ "name": "Megan Calhoun", 			"handle": "@socialmoms", 			"followers": "446K", 	"retweets": "N/A", 		"image": "avatar-f1.png" },
								{ "name": "Jennifer Thompson", 		"handle": "@rawfoodbliss", 			"followers": "62.6K", 	"retweets": "N/A", 		"image": "avatar-f1.png" },
								{ "name": "Caitlin Beadles", 		"handle": "@godsgirl8494", 			"followers": "928K", 	"retweets": "N/A", 		"image": "avatar-f1.png" },
								{ "name": "Geoff De Weaver", 		"handle": "@geoff_deweaver", 		"followers": "1M", 		"retweets": "N/A", 		"image": "avatar-f1.png" },
								{ "name": "Jennifer Hudson", 		"handle": "@IAMJHUD", 				"followers": "3.82M", 	"retweets": "N/A", 		"image": "avatar-f1.png" }
							],
						
							"emergingNow": [
								{ "insight": "Lorem Ipsum...",		"value": 100 },
								{ "insight": "Lorem Ipsum...",		"value": 40 },
								{ "insight": "Lorem Ipsum...",		"value": 65 }
							],

							"recentTweets": [
								// { "name": "Simon Green", 			"handle": "@SGreen", 				"followers": 9343, 		"retweets": 3130, 		"image": "avatar-m3.png",	"tweet": "Nothing like crispy fries at Macdonalds." },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" }
							]
						}
					]
				},
				
				{
 					"categoryId": 1,
					"analyses": [
						{
							"date": "Last Day",

							"chatter": [
								{ 
									"insightType": "By Brands", 
									"insightGroups": [
										{ 
											"analysisType": "Popular", 
											"insights": [
												{ "insight": "Starbucks",			"value": 1125 },
												{ "insight": "Coke", 				"value": 506 },
												{ "insight": "McDonald's", 			"value": 481 },
												{ "insight": "Chipotle", 			"value": 312 },
												{ "insight": "Subway", 				"value": 245 }
											]
										},
										{ 
											"analysisType": "Indexing",
											"insights": [
												{ "insight": "FIJI Water",			"value": 22.08 },
												{ "insight": "Walmart", 			"value": 13.73 },
												{ "insight": "Starbucks", 			"value": 3.66 },
												{ "insight": "McDonald's", 			"value": 2.1 },
												{ "insight": "Diet Coke", 			"value": 2.06 }
											]
										},
										{ 
											"analysisType": "Trending", 
											"insights": [
												{ "insight": "@Subway Classic Footlongs",		"value": 388 },
												{ "insight": "@Lays Cheddar", 		"value": 328 },
												{ "insight": "FIJI Water", 			"value": 319 },
												{ "insight": "Nature Valley",	 	"value": 261 },
												{ "insight": "Girl Scouts", 		"value": 227 }
											]
										}			
									]
								},
								{ 
									"insightType": "People", 
									"insightGroups": [
										{ 
											"analysisType": "Popular", 
											"insights": [
												{ "insight": "Honey",			"value": 1460 },
												{ "insight": "Candy", 			"value": 210 },
												{ "insight": "Obama", 			"value": 131 },
												{ "insight": "Jesus", 			"value": 112 },
												{ "insight": "Joy", 			"value": 87 }
											]
										},
										{ 
											"analysisType": "Indexing", 
											"insights": [
												{ "insight": "Lily O'Brien",	"value": 16.32 },
												{ "insight": "Jimmy Wayne",		"value": 3.84 },
												{ "insight": "Chris Rock", 		"value": 3.63 },
												{ "insight": "Jamie Oliver", 	"value": 3.47 },
												{ "insight": "David Bowie", 	"value": 2.24 }
											]
										},
										{ 
											"analysisType": "Trending", 
											"insights": [
												{ "insight": "St. Patrick",		"value": 400 },
												{ "insight": "David Rocco", 	"value": 366 },
												{ "insight": "Mitt Romney", 	"value": 325 },
												{ "insight": "Tyler Ulis", 		"value": 305 },
												{ "insight": "Bunny Family", 	"value": 275 }
											]
										}			
									]
								},
								{ 
									"insightType": "Hashtags", 
									"insightGroups": [
										{ 
											"analysisType": "Popular", 
											"insights": [
												{ "insight": "#giveaway",		"value": 890 },
												{ "insight": "#coffee",		 	"value": 811 },
												{ "insight": "#recipe", 		"value": 615 },
												{ "insight": "#chocolate", 		"value": 539 },
												{ "insight": "#healthy", 		"value": 421 }
											]
										},
										{ 
											"analysisType": "Indexing", 
											"insights": [
												{ "insight": "#glutenfree",		"value": 11.78 },
												{ "insight": "#competition", 	"value": 11.65 },
												{ "insight": "#diet",		 	"value": 10.68 },
												{ "insight": "#recipes",	 	"value": 10.58 },
												{ "insight": "#healthy", 		"value": 7.79 }
											]
										},
										{ 
											"analysisType": "Trending", 
											"insights": [
												{ "insight": "#shrimpitup",		"value": 385 },
												{ "insight": "#teambreakfast", 	"value": 322 },
												{ "insight": "#flavorswapentry", 				"value": 301 },
												{ "insight": "#randomactsofkindnessday", 		"value": 270 },
												{ "insight": "#oscarmayernatural", 				"value": 248 }
											]
										}			
									]
								},
								{ 
									"insightType": "Things", 
									"insightGroups": [
										{ 
											"analysisType": "Popular", 
											"insights": [
												{ "insight": "coffee",			"value": 1451 },
												{ "insight": "chocolate", 		"value": 1289 },
												{ "insight": "water", 			"value": 994 },
												{ "insight": "Apple", 			"value": 957 },
												{ "insight": "tea", 			"value": 890 }
											]
										},
										{ 
											"analysisType": "Indexing", 
											"insights": [
												{ "insight": "recipe",			"value": 8.74 },
												{ "insight": "Friday",		 	"value": 4.08 },
												{ "insight": "snack", 			"value": 3.7 },
												{ "insight": "soup",	 		"value": 3.07 },
												{ "insight": "avocado", 		"value": 2.71 }
											]
										},
										{ 
											"analysisType": "Trending", 
											"insights": [
												{ "insight": "@Subway Classic Footlongs",	"value": 395 },
												{ "insight": "new Quesalupa", 				"value": 342 },
												{ "insight": "Coca-Cola polar bear", 		"value": 327 },
												{ "insight": "Mother's Day", 				"value": 274 },
												{ "insight": "#mondaymotivation", 			"value": 238 }
											]
										}			
									]
								}	
							],

							"postActivity": [
								{  
									"day": [
									    { name: "Monday",    value:  110 },
									    { name: "Tuesday",   value:  120 },
									    { name: "Wednesday", value:  130 },
									    { name: "Thursday",  value:  140 },
									    { name: "Friday",    value:  150 },
									    { name: "Saturday",  value:  160 },
									    { name: "Sunday",    value:  170 }
									]
								},
								{
									"month": [
									    { name: "1st",      value:  210 },
									    { name: "2nd",      value:  220 },
									    { name: "3rd",      value:  230 },
									    { name: "4th",      value:  240 }
									]
								},
								{
									"year": [
									    { name: "Jan",      value:  310 },
									    { name: "Feb",      value:  320 },
									    { name: "Mar",      value:  330 },
									    { name: "Apr",      value:  340 },
									    { name: "May",      value:  350 },
									    { name: "Jun",      value:  360 },
									    { name: "Jul",      value:  370 },
									    { name: "Aug",      value:  380 },
									    { name: "Sep",      value:  390 },
									    { name: "Oct",      value:  400 },
									    { name: "Nov",      value:  410 },
									    { name: "Dec",      value:  420 }
									]
								}
							],

							"influencers": [
								{ "name": "Everyday Health", 		"handle": "@EverydayHealth", 		"followers": "385K", 	"retweets": "N/A", 		"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Angel Howansky", 		"handle": "@Angelshouse", 			"followers": "263K", 	"retweets": "N/A", 		"image": "avatar-f1.png" },
								{ "name": "Cooking Light", 			"handle": "@Cooking_Light", 		"followers": "178K", 	"retweets": "N/A", 		"image": "avatar-f1.png" },
								{ "name": "Kim & Steve Starry", 	"handle": "@KStarry", 				"followers": "103K", 	"retweets": "N/A", 		"image": "avatar-f1.png" },
								{ "name": "Anne-Marie Nichols", 	"handle": "@amnichols", 			"followers": "30K", 	"retweets": "N/A", 		"image": "avatar-f1.png" },
								{ "name": "Suzanne Rudge", 			"handle": "@MapleMouseMama", 		"followers": 7952, 		"retweets": "N/A", 		"image": "avatar-f1.png" },
								{ "name": "The Holderness Fam", 	"handle": "@KimDHolderness", 		"followers": 6889, 		"retweets": "N/A", 		"image": "avatar-f1.png" },
								{ "name": "BlkWomenLosingWeight", 	"handle": "@blackweightloss", 		"followers": 5764, 		"retweets": "N/A", 		"image": "avatar-f1.png" }
							],
						
							"emergingNow": [
								{ "insight": "Lorem Ipsum...",		"value": 100 },
								{ "insight": "Lorem Ipsum...",		"value": 40 },
								{ "insight": "Lorem Ipsum...",		"value": 65 }
							],

							"recentTweets": [
								// { "name": "Simon Green", 			"handle": "@SGreen", 				"followers": 9343, 		"retweets": 3130, 		"image": "avatar-m3.png",	"tweet": "Nothing like crispy fries at Macdonalds." },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" }
							]
						}
					]
				},
				
				{
 					"categoryId": 2,
					"analyses": [
						{
							"date": "Last Day",

							"chatter": [
								{ 
									"insightType": "By Brands", 
									"insightGroups": [
										{ 
											"analysisType": "Popular", 
											"insights": [
												{ "insight": "Ford",				"value": 70 },
												{ "insight": "iPhone", 				"value": 28 },
												{ "insight": "NFL",					"value": 27 },
												{ "insight": "NBC", 				"value": 25 },
												{ "insight": "Weight Watchers",		"value": 25 }
											]
										},
										{ 
											"analysisType": "Indexing",
											"insights": [
												{ "insight": "Weight Watchers",		"value": 21.56 },
												{ "insight": "@CNN",		 		"value": 6.47 },
												{ "insight": "@eBay", 				"value": 4.7 },
												{ "insight": "Amazon", 				"value": 4.31 },
												{ "insight": "NBC", 				"value": 2.84 }
											]
										},
										{ 
											"analysisType": "Trending", 
											"insights": [
												{ "insight": "MasterCard",			"value": 400 },
												{ "insight": "Experian", 			"value": 365 },
												{ "insight": "Ford Field", 			"value": 330 },
												{ "insight": "Girl Scout Cookies", 	"value": 300 },
												{ "insight": "Hyundai",			 	"value": 295 }
											]
										}			
									]
								},
								{ 
									"insightType": "People", 
									"insightGroups": [
										{ 
											"analysisType": "Popular", 
											"insights": [
												{ "insight": "Adele",			"value": 1036 },
												{ "insight": "Hillary Clinton", "value": 552 },
												{ "insight": "Taylor Swift", 	"value": 262 },
												{ "insight": "Lady Gaga", 		"value": 250 },
												{ "insight": "Oprah Winfrey", 	"value": 69 }
											]
										},
										{ 
											"analysisType": "Indexing", 
											"insights": [
												{ "insight": "Rachael Ray",		"value": 11.38 },
												{ "insight": "#Adele", 			"value": 3.8 },
												{ "insight": "Oprah Winfrey",	"value": 3.58 },
												{ "insight": "Kate Winslet", 	"value": 2.97 },
												{ "insight": "Tina Fey", 		"value": 2.45 }
											]
										},
										{ 
											"analysisType": "Trending", 
											"insights": [
												{ "insight": "Chris Rock",		"value": 400 },
												{ "insight": "Kesha",		 	"value": 374 },
												{ "insight": "Bruno",	 		"value": 367 },
												{ "insight": "Sam Hunt", 		"value": 300 },
												{ "insight": "David Bowie", 	"value": 248 }
											]
										}			
									]
								},
								{ 
									"insightType": "Hashtags", 
									"insightGroups": [
										{ 
											"analysisType": "Popular", 
											"insights": [
												{ "insight": "#sb50",			"value": 154 },
												{ "insight": "#grammys",	 	"value": 153 },
												{ "insight": "#adele",	 		"value": 143 },
												{ "insight": "#oscar", 			"value": 138 },
												{ "insight": "#goldenglobes", 	"value": 138 }
											]
										},
										{ 
											"analysisType": "Indexing", 
											"insights": [
												{ "insight": "#giveaway",		"value": 16.2 },
												{ "insight": "#goldenglobe", 	"value": 3.72 },
												{ "insight": "#snl",		 	"value": 3.48 },
												{ "insight": "#greaselive", 	"value": 3.47 },
												{ "insight": "#oscars2016", 	"value": 3.15 }
											]
										},
										{ 
											"analysisType": "Trending", 
											"insights": [
												{ "insight": "#grammys2016",			"value": 350 },
												{ "insight": "#supertuesday", 			"value": 325 },
												{ "insight": "#election2016", 			"value": 300 },
												{ "insight": "#happybirthdayjustinbieber", 			"value": 285 },
												{ "insight": "#youngmindsmatter", 		"value": 250 }
											]
										}			
									]
								},
								{ 
									"insightType": "Things", 
									"insightGroups": [
										{ 
											"analysisType": "Popular", 
											"insights": [
												{ "insight": "Hillary Clinton",	"value": 587 },
												{ "insight": "Adele",	 		"value": 412 },
												{ "insight": "Beyonce", 		"value": 213 },
												{ "insight": "Lady Gaga", 		"value": 183 },
												{ "insight": "Justin Bieber", 	"value": 83 }
											]
										},
										{ 
											"analysisType": "Indexing", 
											"insights": [
												{ "insight": "Kate Winslet",	"value": 3.79 },
												{ "insight": "#Adele", 			"value": 3.49 },
												{ "insight": "Pope", 			"value": 2.4 },
												{ "insight": "Tina Fey", 		"value": 2.21 },
												{ "insight": "Hillary Clinton", "value": 1.89 }
											]
										},
										{ 
											"analysisType": "Trending", 
											"insights": [
												{ "insight": "DANCE BATTLE",	"value": 345 },
												{ "insight": "in n out",	 	"value": 300 },
												{ "insight": "Budweiser", 		"value": 270 },
												{ "insight": "no Trump", 		"value": 240 },
												{ "insight": "Heaven", 			"value": 200 }
											]
										}			
									]
								}	
							],

							"postActivity": [
								{  
									"day": [
									    { name: "Monday",    value:  110 },
									    { name: "Tuesday",   value:  120 },
									    { name: "Wednesday", value:  130 },
									    { name: "Thursday",  value:  140 },
									    { name: "Friday",    value:  150 },
									    { name: "Saturday",  value:  160 },
									    { name: "Sunday",    value:  170 }
									]
								},
								{
									"month": [
									    { name: "1st",      value:  210 },
									    { name: "2nd",      value:  220 },
									    { name: "3rd",      value:  230 },
									    { name: "4th",      value:  240 }
									]
								},
								{
									"year": [
									    { name: "Jan",      value:  310 },
									    { name: "Feb",      value:  320 },
									    { name: "Mar",      value:  330 },
									    { name: "Apr",      value:  340 },
									    { name: "May",      value:  350 },
									    { name: "Jun",      value:  360 },
									    { name: "Jul",      value:  370 },
									    { name: "Aug",      value:  380 },
									    { name: "Sep",      value:  390 },
									    { name: "Oct",      value:  400 },
									    { name: "Nov",      value:  410 },
									    { name: "Dec",      value:  420 }
									]
								}
							],

							"influencers": [
								{ "name": "Jake Quickenden", 		"handle": "@JakeQuickenden", 		"followers": "497K", 	"retweets": "N/A", 		"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Steve Kornacki", 		"handle": "@SteveKornacki", 		"followers": "88.9K", 	"retweets": "N/A", 		"image": "avatar-f1.png" },
								{ "name": "Chris Caggs", 			"handle": "@ChrisCaggs", 			"followers": "111K", 	"retweets": "N/A", 		"image": "avatar-f1.png" },
								{ "name": "Louise Minchin", 		"handle": "@louiseminchin", 		"followers": "83.4K", 	"retweets": "N/A", 		"image": "avatar-f1.png" },
								{ "name": "Lindsey Brooks", 		"handle": "@drgroovy77", 			"followers": "72.2K", 	"retweets": "N/A", 		"image": "avatar-f1.png" },
								{ "name": "Ariel Foxman", 			"handle": "@ArielFoxman", 			"followers": "64K", 	"retweets": "N/A", 		"image": "avatar-f1.png" },
								{ "name": "Betty Buckley",	 		"handle": "@BettyBuckley", 			"followers": "27.4K", 		"retweets": "N/A", 		"image": "avatar-f1.png" },
								{ "name": "Margaret Molloy", 		"handle": "@MargaretMolloy", 				"followers": "28K", 	"retweets": "N/A", 		"image": "avatar-f1.png" }
							],
						
							"emergingNow": [
								{ "insight": "Lorem Ipsum...",		"value": 100 },
								{ "insight": "Lorem Ipsum...",		"value": 40 },
								{ "insight": "Lorem Ipsum...",		"value": 65 }
							],

							"recentTweets": [
								// { "name": "Simon Green", 			"handle": "@SGreen", 				"followers": 9343, 		"retweets": 3130, 		"image": "avatar-m3.png",	"tweet": "Nothing like crispy fries at Macdonalds." },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Lorem Ipsum...", 		"handle": "@Ut enim ad...", 		"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" }
							]
						}
					]
				}
			]
		},


		"insightstrends": {
			"categoriesSelector": [
				{ "categoryId": 0, "type": "Product" },
				{ "categoryId": 1, "type": "Brand" },
				{ "categoryId": 2, "type": "Category" }
			],

			"categoriesData": [
				{
 					"categoryId": 0,
					"image": "insightsTrends1.png",
					"description": "Lorem ipsum Est ullamco commodo fugiat irure aliquip ut consectetur esse laborum magna aliquip do sit qui eiusmod eu aute Duis id do sit dolore Duis Excepteur dolor Ut commodo labore laboris veniam sit cupidatat ex laboris irure quis aliquip.",
					"date": "Last Week",

					"insights": [
						{
							"measure": "Authors",
							"count": 1332,
							"multiplier": 1.5
						},
						{
							"measure": "Mentions",
							"count": 42090,
							"multiplier": 2.5
						},
						{
							"measure": "Sentiment",
							"count": 32,
							"multiplier": 28
						}
					],

					"influencers": [
						{ "name": "Jennifer McKenna", 		"handle": "@Jennifer_sales14", 		"followers": 54984, 	"retweets": 67424, 		"image": "avatar-f6.png" },
						{ "name": "Alfred Robertson", 		"handle": "@alfred_robertson_111", 	"followers": 156903, 	"retweets": 766466, 	"image": "avatar-m5.png" },
						{ "name": "Olivia Chow", 			"handle": "@OliviaChow", 			"followers": 486293, 	"retweets": 235084, 	"image": "avatar-f4.png" },
						{ "name": "Kam Jefferson", 			"handle": "@KamJefferson", 			"followers": 11725920, 	"retweets": 7987324, 	"image": "avatar-m1.png" },
						{ "name": "Kim Blanchet", 			"handle": "@KimBlanchet_1973", 		"followers": 7343, 		"retweets": 1432, 		"image": "avatar-f5.png" },
						{ "name": "Steve Ballintine", 		"handle": "@spaceInvader_349", 		"followers": 44490, 	"retweets": 10334, 		"image": "avatar-m6.png" },
						{ "name": "Jim Watson", 			"handle": "@ilovecoffee88", 		"followers": 8434133, 	"retweets": 4344904, 	"image": "avatar-m4.png" },
						{ "name": "Mick Richardson", 		"handle": "@MickeyRickey_3384", 	"followers": 1325655, 	"retweets": 4899325, 	"image": "avatar-m2.png" },
						{ "name": "Patricia Summers Right", "handle": "@PSummers", 				"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png" },
						{ "name": "Sue Piper", 				"handle": "@SuePiper05", 			"followers": 8832, 		"retweets": 6444, 		"image": "avatar-f2.png" },
						{ "name": "Simon Green", 			"handle": "@SGreen", 				"followers": 9343, 		"retweets": 3130, 		"image": "avatar-m3.png" },
						{ "name": "Tracey Sing", 			"handle": "@tracey_sing12312", 		"followers": 98654, 	"retweets": 25693, 		"image": "avatar-f3.png" }
					],

					"postsOverTime": [
						{  
							"day": [
							    { 
							        "key": "Mentions", 
							        "values": [ 
							            [ 0, 100], 
							            [ 1, 140], 
							            [ 2, 210], 
							            [ 3, 50], 
							            [ 4, 180], 
							            [ 5, 240], 
							            [ 6, 80]
							        ]
							    }, 
							    { 
							        "key": "Authors" , 
							        "values": [ 
							            [ 0, 80], 
							            [ 1, 20], 
							            [ 2, 10], 
							            [ 3, 30], 
							            [ 4, 40], 
							            [ 5, 10], 
							            [ 6, 60]
							        ]
							    }
							]
						},
						{
							"month": [
							    { 
							        "key": "Mentions", 
							        "values": [ 
							            [ 0, 200], 
							            [ 1, 30], 
							            [ 2, 120], 
							            [ 3, 80]
							        ]
							    }, 
							    { 
							        "key": "Authors" , 
							        "values": [ 
							            [ 0, 10], 
							            [ 1, 60], 
							            [ 2, 20], 
							            [ 3, 30]
							        ]
							    }
							]
						},
						{
							"year": [
							    { 
							        "key": "Mentions", 
							        "values": [ 
							            [ 0, 160], 
							            [ 1, 80], 
							            [ 2, 100], 
							            [ 3, 120],
							            [ 4, 140], 
							            [ 5, 60], 
							            [ 6, 200], 
							            [ 7, 180],
							            [ 8, 160], 
							            [ 9, 40], 
							            [ 10, 100], 
							            [ 11, 120]

							        ]
							    }, 
							    { 
							        "key": "Authors" , 
							        "values": [ 
							            [ 0, 20], 
							            [ 1, 80], 
							            [ 2, 20], 
							            [ 3, 30],
							            [ 4, 20], 
							            [ 5, 40], 
							            [ 6, 20], 
							            [ 7, 10],
							            [ 8, 10], 
							            [ 9, 10], 
							            [ 10, 10], 
							            [ 11, 30]
							        ]
							    }
							]
						}
					],
				
					"emergingNow": [
						{ "insight": "TACO CLUB",		"value": 75 },
						{ "insight": "ESPRESSO",		"value": 45 },
						{ "insight": "CRISPY FRIES",	"value": 100 }
					],

					"recentTweets": [
						{ "name": "Jim Watson", 			"handle": "@ilovecoffee88", 		"followers": 8434133, 	"retweets": 4344904, 	"image": "avatar-m4.png", 	"tweet": "The new bacon club at Taco Bell is awesome!" },
						{ "name": "Olivia Chow", 			"handle": "@OliviaChow", 			"followers": 486293, 	"retweets": 235084, 	"image": "avatar-f4.png", 	"tweet": "The Chili at Subway warmed me up, time to head back out into the cold." },
						{ "name": "Patricia Summers Right", "handle": "@PSummers", 				"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
						{ "name": "Steve Ballintine", 		"handle": "@spaceInvader_349", 		"followers": 44490, 	"retweets": 10334, 		"image": "avatar-m6.png", 	"tweet": "I tried making burritos, but Chipoltes is way better." },
						{ "name": "Mick Richardson", 		"handle": "@MickeyRickey_3384", 	"followers": 1325655, 	"retweets": 4899325, 	"image": "avatar-m2.png", 	"tweet": "Anyone else addicted to the coffee at Macdonalds?" },
						{ "name": "Kam Jefferson", 			"handle": "@KamJefferson", 			"followers": 11725920, 	"retweets": 7987324, 	"image": "avatar-m1.png",	"tweet": "Late night munchies at Taco Bell." },
						{ "name": "Sue Piper", 				"handle": "@SuePiper05", 			"followers": 8832, 		"retweets": 6444, 		"image": "avatar-f2.png", 	"tweet": "Finally got my Caffe Latte at Star Bucks, time to wake up." },
						{ "name": "Alfred Robertson", 		"handle": "@alfred_robertson_111", 	"followers": 156903, 	"retweets": 766466, 	"image": "avatar-m5.png", 	"tweet": "Have a craving for Crispy Tacos at Chipoltes tonight." },
						{ "name": "Kim Blanchet", 			"handle": "@KimBlanchet_1973", 		"followers": 7343, 		"retweets": 1432, 		"image": "avatar-f5.png", 	"tweet": "Anyone else for dinner at Subway tonight?" },
						{ "name": "Jennifer McKenna", 		"handle": "@Jennifer_sales14", 		"followers": 54984, 	"retweets": 67424, 		"image": "avatar-f6.png", 	"tweet": "Taco Bell serving healthier foods!?" },
						{ "name": "Simon Green", 			"handle": "@SGreen", 				"followers": 9343, 		"retweets": 3130, 		"image": "avatar-m3.png",	"tweet": "Nothing like crispy fries at Macdonalds." },
						{ "name": "Tracey Sing", 			"handle": "@tracey_sing12312", 		"followers": 98654, 	"retweets": 25693, 		"image": "avatar-f3.png", 	"tweet": "I need my coffee fix, off to Starbucks!" }
					]

				},
				{
 					"categoryId": 1,
					"image": "insightsTrends2.png",
					"description": "Excepteur dolor Ut commodo labore laboris veniam sit cupidatat ex laboris irure quis aliquip. Lorem ipsum Est ullamco commodo fugiat irure aliquip ut consectetur esse laborum magna aliquip do sit qui eiusmod eu aute Duis id do sit dolore Duis.",
					"date": "Last Week",
					
					"insights": [
						{
							"measure": "Authors",
							"count": 2895,
							"multiplier": 1.8
						},
						{
							"measure": "Mentions",
							"count": 59898,
							"multiplier": 2.1
						},
						{
							"measure": "Sentiment",
							"count": 28,
							"multiplier": 21
						}
					],

					"influencers": [
						{ "name": "Steve Ballintine", 		"handle": "@spaceInvader_349", 		"followers": 44490, 	"retweets": 10334, 		"image": "avatar-m6.png" },
						{ "name": "Jim Watson", 			"handle": "@ilovecoffee88", 		"followers": 8434133, 	"retweets": 4344904, 	"image": "avatar-m4.png" },
						{ "name": "Tracey Sing", 			"handle": "@tracey_sing12312", 		"followers": 98654, 	"retweets": 25693, 		"image": "avatar-f3.png" },
						{ "name": "Mick Richardson", 		"handle": "@MickeyRickey_3384", 	"followers": 1325655, 	"retweets": 4899325, 	"image": "avatar-m2.png" },
						{ "name": "Patricia Summers Right", "handle": "@PSummers", 				"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png" },
						{ "name": "Kim Blanchet", 			"handle": "@KimBlanchet_1973", 		"followers": 7343, 		"retweets": 1432, 		"image": "avatar-f5.png" },
						{ "name": "Sue Piper", 				"handle": "@SuePiper05", 			"followers": 8832, 		"retweets": 6444, 		"image": "avatar-f2.png" },
						{ "name": "Alfred Robertson", 		"handle": "@alfred_robertson_111", 	"followers": 156903, 	"retweets": 766466, 	"image": "avatar-m5.png" },
						{ "name": "Olivia Chow", 			"handle": "@OliviaChow", 			"followers": 486293, 	"retweets": 235084, 	"image": "avatar-f4.png" },
						{ "name": "Jennifer McKenna", 		"handle": "@Jennifer_sales14", 		"followers": 54984, 	"retweets": 67424, 		"image": "avatar-f6.png" },
						{ "name": "Simon Green", 			"handle": "@SGreen", 				"followers": 9343, 		"retweets": 3130, 		"image": "avatar-m3.png" },
						{ "name": "Kam Jefferson", 			"handle": "@KamJefferson", 			"followers": 11725920, 	"retweets": 7987324, 	"image": "avatar-m1.png" }
					],

					"postsOverTime": [
						{  
							"day": [
							    { 
							        "key": "Mentions", 
							        "values": [ 
							            [ 0, 100], 
							            [ 1, 110], 
							            [ 2, 120], 
							            [ 3, 130], 
							            [ 4, 140], 
							            [ 5, 150], 
							            [ 6, 160]
							        ]
							    }, 
							    { 
							        "key": "Authors" , 
							        "values": [ 
							            [ 0, 10], 
							            [ 1, 10], 
							            [ 2, 20], 
							            [ 3, 20], 
							            [ 4, 30], 
							            [ 5, 40], 
							            [ 6, 50]
							        ]
							    }
							]
						},
						{
							"month": [
							    { 
							        "key": "Mentions", 
							        "values": [ 
							            [ 0, 200], 
							            [ 1, 210], 
							            [ 2, 220], 
							            [ 3, 230]
							        ]
							    }, 
							    { 
							        "key": "Authors" , 
							        "values": [ 
							            [ 0, 20], 
							            [ 1, 20], 
							            [ 2, 30], 
							            [ 3, 30]
							        ]
							    }
							]
						},
						{
							"year": [
							    { 
							        "key": "Mentions", 
							        "values": [ 
							            [ 0, 310], 
							            [ 1, 320], 
							            [ 2, 330], 
							            [ 3, 340],
							            [ 4, 350], 
							            [ 5, 360], 
							            [ 6, 370], 
							            [ 7, 380],
							            [ 8, 390], 
							            [ 9, 400], 
							            [ 10, 410], 
							            [ 11, 420]

							        ]
							    }, 
							    { 
							        "key": "Authors" , 
							        "values": [ 
							            [ 0, 10], 
							            [ 1, 10], 
							            [ 2, 20], 
							            [ 3, 20],
							            [ 4, 30], 
							            [ 5, 30], 
							            [ 6, 40], 
							            [ 7, 40],
							            [ 8, 50], 
							            [ 9, 50], 
							            [ 10, 60], 
							            [ 11, 60]
							        ]
							    }
							]
						}
					],
				
					"emergingNow": [
						{ "insight": "CHILPOTE",		"value": 60 },
						{ "insight": "STAR BUCKS",		"value": 70 },
						{ "insight": "MACDONALDS",		"value": 80 }
					],

					"recentTweets": [
						{ "name": "Jim Watson", 			"handle": "@ilovecoffee88", 		"followers": 8434133, 	"retweets": 4344904, 	"image": "avatar-m4.png", 	"tweet": "The new bacon club at Taco Bell is awesome!" },
						{ "name": "Mick Richardson", 		"handle": "@MickeyRickey_3384", 	"followers": 1325655, 	"retweets": 4899325, 	"image": "avatar-m2.png", 	"tweet": "Anyone else addicted to the coffee at Macdonalds?" },
						{ "name": "Olivia Chow", 			"handle": "@OliviaChow", 			"followers": 486293, 	"retweets": 235084, 	"image": "avatar-f4.png", 	"tweet": "The Chili at Subway warmed me up, time to head back out into the cold." },
						{ "name": "Kam Jefferson", 			"handle": "@KamJefferson", 			"followers": 11725920, 	"retweets": 7987324, 	"image": "avatar-m1.png",	"tweet": "Late night munchies at Taco Bell." },
						{ "name": "Sue Piper", 				"handle": "@SuePiper05", 			"followers": 8832, 		"retweets": 6444, 		"image": "avatar-f2.png", 	"tweet": "Finally got my Caffe Latte at Star Bucks, time to wake up." },
						{ "name": "Patricia Summers Right", "handle": "@PSummers", 				"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
						{ "name": "Alfred Robertson", 		"handle": "@alfred_robertson_111", 	"followers": 156903, 	"retweets": 766466, 	"image": "avatar-m5.png", 	"tweet": "Have a craving for Crispy Tacos at Chipoltes tonight." },
						{ "name": "Simon Green", 			"handle": "@SGreen", 				"followers": 9343, 		"retweets": 3130, 		"image": "avatar-m3.png",	"tweet": "Nothing like crispy fries at Macdonalds." },
						{ "name": "Kim Blanchet", 			"handle": "@KimBlanchet_1973", 		"followers": 7343, 		"retweets": 1432, 		"image": "avatar-f5.png", 	"tweet": "Anyone else for dinner at Subway tonight?" },
						{ "name": "Jennifer McKenna", 		"handle": "@Jennifer_sales14", 		"followers": 54984, 	"retweets": 67424, 		"image": "avatar-f6.png", 	"tweet": "Taco Bell serving healthier foods!?" },
						{ "name": "Steve Ballintine", 		"handle": "@spaceInvader_349", 		"followers": 44490, 	"retweets": 10334, 		"image": "avatar-m6.png", 	"tweet": "I tried making burritos, but Chipoltes is way better." },
						{ "name": "Tracey Sing", 			"handle": "@tracey_sing12312", 		"followers": 98654, 	"retweets": 25693, 		"image": "avatar-f3.png", 	"tweet": "I need my coffee fix, off to Starbucks!" },
						{ "name": "Patricia Summers Right", "handle": "@PSummers", 				"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
						{ "name": "Alfred Robertson", 		"handle": "@alfred_robertson_111", 	"followers": 156903, 	"retweets": 766466, 	"image": "avatar-m5.png", 	"tweet": "Have a craving for Crispy Tacos at Chipoltes tonight." }
					]

				}
			]
		}

	}
]};