// ----------------------------------------------------------------------------------------------------
// DATA - APP
// ----------------------------------------------------------------------------------------------------

var app_dataset = 
{
	companies: [{
		"id": 				32443,

		"name": 			"American Airlines",

		"logo": 			"audience-american-airlines.png",

		"size": 			413546,

		"description": 		"Operating an extensive international and domestic network, American Airlines is the world's largest airline by fleet size and revenue, and the second largest by number of destinations served, after United Airlines.",

		// loop through these numbers every 20-30 seconds to simulate real time data
		"totalPosts": 		[420340, 430540, 450700],

		// loop through these numbers every 20-30 seconds to simulate real time data
		"postsVelocity": 	[4200,4300,4500],

		// audience highlights for demographics, psychographics (aka Usage and Attitudes) and marketing info
		"keyInsights": [
			{ "id": 1, "type": "Demographics",	"icon": "fa-crosshairs", 	"name": "Age + Gender", 		"value": "Females, 25-35 yr old"	},
			{ "id": 2, "type": "Discussion", 	"icon": "fa-comment", 		"name": "Food Discussion", 		"value": "Branch X 50x overindexed"	},
			{ "id": 3, "type": "Posts", 		"icon": "fa-pie-chart",		"name": "Posts Over Time", 		"value": "Lots of discussion at 2-6pm"	}
		],

		// data for demographics charts
		"demographics": [{
			chart1_title: 		 "Age",
		    chart1_outer_values: [53245, 28479, 19697, 24037, 40245],
		    chart1_outer_labels: ['Under 25','25-35','35-50','50-60','60+'],
		    chart1_inner_values: [56245, 25479, 23697, 27037, 36245],
			chart2_title: 		 "Gender",
		    chart2_outer_values: [70, 30],
		    chart2_outer_labels: ['Female','Male'],
		    chart2_inner_values: [95, 5],
			chart3_title: 		 "Income",
		    chart3_outer_values: [20, 10, 18, 24, 28],
		    chart3_outer_labels: ['Under 25','25-35','35-50','50-60','60+'],
		    chart3_inner_values: [18, 11, 19, 26, 26],
			chart4_title: 		 "Location",
		    chart4_outer_values: [60, 40],
		    chart4_outer_labels: ['East','West'],
		    chart4_inner_values: [55, 45]
		}],

		// psychographics highlighted in Interests and Passions section
		"psychographics": {
			"categoriesSelector": [
				{ "categoryId": 0, "type": "Food", 		"shareValue": 18,  	"indexValue": 3.2 },
				{ "categoryId": 1, "type": "Drink", 	"shareValue": 15,  	"indexValue": 2.9 },
				{ "categoryId": 2, "type": "Travel", 	"shareValue": 13,  	"indexValue": 2.6 },
				{ "categoryId": 3, "type": "Movies", 	"shareValue": 10,  	"indexValue": 2.4 },
				{ "categoryId": 4, "type": "Kids", 		"shareValue": 8,  	"indexValue": 2.1 },
				{ "categoryId": 5, "type": "Beer", 		"shareValue": 3,  	"indexValue": 1.9 }
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
												{ "insight": "Chipotle",		"value": 3240 },
												{ "insight": "Macdonalds", 		"value": 2876 },
												{ "insight": "Taco Bell", 		"value": 2486 },
												{ "insight": "Starbucks", 		"value": 2287 },
												{ "insight": "Subway", 			"value": 1876 }
											]
										},
										{ 
											"analysisType": "Indexing", 
											"insights": [
												{ "insight": "Chipotle",		"value": 50 },
												{ "insight": "Macdonalds", 		"value": 23 },
												{ "insight": "Taco Bell", 		"value": 8 },
												{ "insight": "Starbucks", 		"value": 3 },
												{ "insight": "Subway", 			"value": 2 }
											]
										},
										{ 
											"analysisType": "Trending", 
											"insights": [
												{ "insight": "Chipotle",		"value": 300 },
												{ "insight": "Macdonalds", 		"value": 200 },
												{ "insight": "Taco Bell", 		"value": 159 },
												{ "insight": "Starbucks", 		"value": 20 },
												{ "insight": "Subway", 			"value": 15 }
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
												{ "insight": "#Chipotle",		"value": 8745 },
												{ "insight": "#Macdonalds", 	"value": 6893 },
												{ "insight": "#Taco Bell", 		"value": 5948 },
												{ "insight": "#Starbucks", 		"value": 3325 },
												{ "insight": "#Subway", 		"value": 1345 }
											]
										},
										{ 
											"analysisType": "Indexing", 
											"insights": [
												{ "insight": "#Chipotle",		"value": 30 },
												{ "insight": "#Macdonalds", 	"value": 21 },
												{ "insight": "#TacoBell", 		"value": 16 },
												{ "insight": "#Starbucks", 		"value": 13 },
												{ "insight": "#Subway", 		"value": 9 }
											]
										},
										{ 
											"analysisType": "Trending", 
											"insights": [
												{ "insight": "#Chipotle",		"value": 250 },
												{ "insight": "#Macdonalds", 	"value": 175 },
												{ "insight": "#Taco Bell", 		"value": 120 },
												{ "insight": "#Starbucks", 		"value": 76 },
												{ "insight": "#Subway", 		"value": 32 }
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
								{ "name": "Patricia Summers Right", "handle": "@PSummers", 				"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png" },
								{ "name": "Simon Green", 			"handle": "@SGreen", 				"followers": 9343, 		"retweets": 3130, 		"image": "avatar-m3.png" },
								{ "name": "Tracey Sing", 			"handle": "@tracey_sing12312", 		"followers": 98654, 	"retweets": 25693, 		"image": "avatar-f3.png" },
								{ "name": "Kam Jefferson", 			"handle": "@KamJefferson", 			"followers": 11725920, 	"retweets": 7987324, 	"image": "avatar-m1.png" },
								{ "name": "Kim Blanchet", 			"handle": "@KimBlanchet_1973", 		"followers": 7343, 		"retweets": 1432, 		"image": "avatar-f5.png" },
								{ "name": "Steve Ballintine", 		"handle": "@spaceInvader_349", 		"followers": 44490, 	"retweets": 10334, 		"image": "avatar-m6.png" },
								{ "name": "Mick Richardson", 		"handle": "@MickeyRickey_3384", 	"followers": 1325655, 	"retweets": 4899325, 	"image": "avatar-m2.png" },
								{ "name": "Jennifer McKenna", 		"handle": "@Jennifer_sales14", 		"followers": 54984, 	"retweets": 67424, 		"image": "avatar-f6.png" },
								{ "name": "Sue Piper", 				"handle": "@SuePiper05", 			"followers": 8832, 		"retweets": 6444, 		"image": "avatar-f2.png" },
								{ "name": "Alfred Robertson", 		"handle": "@alfred_robertson_111", 	"followers": 156903, 	"retweets": 766466, 	"image": "avatar-m5.png" },
								{ "name": "Jim Watson", 			"handle": "@ilovecoffee88", 		"followers": 8434133, 	"retweets": 4344904, 	"image": "avatar-m4.png" },
								{ "name": "Olivia Chow", 			"handle": "@OliviaChow", 			"followers": 486293, 	"retweets": 235084, 	"image": "avatar-f4.png" }
							],
						
							"emergingNow": [
								{ "insight": "ONION RINGS",			"value": 100 },
								{ "insight": "BREAKFAST SANDWICH",	"value": 80 },
								{ "insight": "BACON",				"value": 55 }
							],

							"recentTweets": [
								{ "name": "Patricia Summers Right", "handle": "@PSummers", 				"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Simon Green", 			"handle": "@SGreen", 				"followers": 9343, 		"retweets": 3130, 		"image": "avatar-m3.png",	"tweet": "Nothing like crispy fries at Macdonalds." },
								{ "name": "Tracey Sing", 			"handle": "@tracey_sing12312", 		"followers": 98654, 	"retweets": 25693, 		"image": "avatar-f3.png", 	"tweet": "I need my coffee fix, off to Starbucks!" },
								{ "name": "Kam Jefferson", 			"handle": "@KamJefferson", 			"followers": 11725920, 	"retweets": 7987324, 	"image": "avatar-m1.png",	"tweet": "Late night munchies at Taco Bell." },
								{ "name": "Kim Blanchet", 			"handle": "@KimBlanchet_1973", 		"followers": 7343, 		"retweets": 1432, 		"image": "avatar-f5.png", 	"tweet": "Anyone else for dinner at Subway tonight?" },
								{ "name": "Steve Ballintine", 		"handle": "@spaceInvader_349", 		"followers": 44490, 	"retweets": 10334, 		"image": "avatar-m6.png", 	"tweet": "I tried making burritos, but Chipoltes is way better." },
								{ "name": "Mick Richardson", 		"handle": "@MickeyRickey_3384", 	"followers": 1325655, 	"retweets": 4899325, 	"image": "avatar-m2.png", 	"tweet": "Anyone else addicted to the coffee at Macdonalds?" },
								{ "name": "Jennifer McKenna", 		"handle": "@Jennifer_sales14", 		"followers": 54984, 	"retweets": 67424, 		"image": "avatar-f6.png", 	"tweet": "Taco Bell serving healthier foods!?" },
								{ "name": "Sue Piper", 				"handle": "@SuePiper05", 			"followers": 8832, 		"retweets": 6444, 		"image": "avatar-f2.png", 	"tweet": "Finally got my Caffe Latte at Star Bucks, time to wake up." },
								{ "name": "Alfred Robertson", 		"handle": "@alfred_robertson_111", 	"followers": 156903, 	"retweets": 766466, 	"image": "avatar-m5.png", 	"tweet": "Have a craving for Crispy Tacos at Chipoltes tonight." },
								{ "name": "Jim Watson", 			"handle": "@ilovecoffee88", 		"followers": 8434133, 	"retweets": 4344904, 	"image": "avatar-m4.png", 	"tweet": "The new bacon club at Taco Bell is awesome!" },
								{ "name": "Olivia Chow", 			"handle": "@OliviaChow", 			"followers": 486293, 	"retweets": 235084, 	"image": "avatar-f4.png", 	"tweet": "The Chili at Subway warmed me up, time to head back out into the cold." }
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
												{ "insight": "Coka Cola",		"value": 6475 },
												{ "insight": "Gatorade", 		"value": 4756 },
												{ "insight": "Nestle", 			"value": 3782 },
												{ "insight": "Pepsi", 			"value": 1646 },
												{ "insight": "7-Up", 			"value": 967 }
											]
										},
										{ 
											"analysisType": "Indexing", 
											"insights": [
												{ "insight": "Coka Cola",		"value": 53 },
												{ "insight": "Gatorade", 		"value": 28 },
												{ "insight": "Nestle", 			"value": 11 },
												{ "insight": "Pepsi", 			"value": 6 },
												{ "insight": "7-Up", 			"value": 1 }
											]
										},
										{ 
											"analysisType": "Trending", 
											"insights": [
												{ "insight": "Coka Cola",		"value": 310 },
												{ "insight": "Gatorade", 		"value": 180 },
												{ "insight": "Nestle", 			"value": 140 },
												{ "insight": "Pepsi", 			"value": 80 },
												{ "insight": "7-Up", 			"value": 10 }
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
												{ "insight": "#CokaCola",		"value": 8567 },
												{ "insight": "#Gatorade", 		"value": 5456 },
												{ "insight": "#Nestle", 		"value": 2343 },
												{ "insight": "#Pepsi", 			"value": 1343 },
												{ "insight": "#7-Up", 			"value": 942 }
											]
										},
										{ 
											"analysisType": "Indexing", 
											"insights": [
												{ "insight": "#CokaCola",		"value": 46 },
												{ "insight": "#Gatorade", 		"value": 28 },
												{ "insight": "#Nestle", 		"value": 20 },
												{ "insight": "#Pepsi", 			"value": 16 },
												{ "insight": "#7-Up", 			"value": 8 }
											]
										},
										{ 
											"analysisType": "Trending", 
											"insights": [
												{ "insight": "#CokaCola",		"value": 301 },
												{ "insight": "#Macdonalds", 	"value": 164 },
												{ "insight": "#Nestle", 		"value": 113 },
												{ "insight": "#Pepsi", 			"value": 92 },
												{ "insight": "#7-Up", 			"value": 27 }
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
						
							"emergingNow": [
								{ "insight": "COCA COLA",	"value": 100 },
								{ "insight": "7-UP",		"value": 40 },
								{ "insight": "GATORADE",	"value": 65 }
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
							"measure": "Posts",
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
							        "key": "Posts", 
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
							        "key": "Posts", 
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
							        "key": "Posts", 
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
							"measure": "Posts",
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
							        "key": "Posts", 
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
							        "key": "Posts", 
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
							        "key": "Posts", 
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
		"id": 				12312,

		"name": 			"Coca Cola",

		"logo": 			"audience-coca-cola.png",

		"size": 			743023,

		"description": 		"The Coca-Cola Company is an American historical multinational beverage corporation and manufacturer, retailer, and marketer of nonalcoholic beverage concentrates and syrups.",

		// loop through these numbers every 20-30 seconds to simulate real time data
		"totalPosts": 		[760500, 760800, 761300],

		// loop through these numbers every 20-30 seconds to simulate real time data
		"postsVelocity": 	[5100,5400,5700],

		// audience highlights for demographics, psychographics (aka Usage and Attitudes) and marketing info
		"keyInsights": [
			{ "id": 1, "type": "Demographics",	"icon": "fa-crosshairs", 	"name": "Age + Gender", 		"value": "Females, 19-35 yr old"	},
			{ "id": 2, "type": "Discussion", 	"icon": "fa-comment", 		"name": "Food Discussion", 		"value": "Branch X 45x overindexed"	},
			{ "id": 3, "type": "Posts", 		"icon": "fa-pie-chart",		"name": "Posts Over Time", 		"value": "Lots of discussion at 6-10pm"	}
		],

		// data for demographics charts
		"demographics": [{
			chart1_title: 		 "Age",
		    chart1_outer_values: [34534, 45656, 73836, 48625, 65746],
		    chart1_outer_labels: ['Under 25','25-35','35-50','50-60','60+'],
		    chart1_inner_values: [21353, 45634, 78978, 94778, 37676],
			chart2_title: 		 "Gender",
		    chart2_outer_values: [60, 40],
		    chart2_outer_labels: ['Female','Male'],
		    chart2_inner_values: [70, 30],
			chart3_title: 		 "Income",
		    chart3_outer_values: [18, 12, 14, 28, 28],
		    chart3_outer_labels: ['Under 25','25-35','35-50','50-60','60+'],
		    chart3_inner_values: [16, 13, 15, 30, 26],
			chart4_title: 		 "Location",
		    chart4_outer_values: [33, 67],
		    chart4_outer_labels: ['East','West'],
		    chart4_inner_values: [30, 70]
		}],

		// psychographics highlighted in Interests and Passions section
		"psychographics": {
			"categoriesSelector": [
				{ "categoryId": 0, "type": "Food", 		"shareValue": 18,  	"indexValue": 3.2 },
				{ "categoryId": 1, "type": "Drink", 	"shareValue": 15,  	"indexValue": 2.9 },
				{ "categoryId": 2, "type": "Travel", 	"shareValue": 13,  	"indexValue": 2.6 },
				{ "categoryId": 3, "type": "Movies", 	"shareValue": 10,  	"indexValue": 2.4 },
				{ "categoryId": 4, "type": "Kids", 		"shareValue": 8,  	"indexValue": 2.1 },
				{ "categoryId": 5, "type": "Beer", 		"shareValue": 3,  	"indexValue": 1.9 }
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
												{ "insight": "Chipotle",		"value": 3240 },
												{ "insight": "Macdonalds", 		"value": 2876 },
												{ "insight": "Taco Bell", 		"value": 2486 },
												{ "insight": "Starbucks", 		"value": 2287 },
												{ "insight": "Subway", 			"value": 1876 }
											]
										},
										{ 
											"analysisType": "Indexing", 
											"insights": [
												{ "insight": "Chipotle",		"value": 50 },
												{ "insight": "Macdonalds", 		"value": 23 },
												{ "insight": "Taco Bell", 		"value": 8 },
												{ "insight": "Starbucks", 		"value": 3 },
												{ "insight": "Subway", 			"value": 2 }
											]
										},
										{ 
											"analysisType": "Trending", 
											"insights": [
												{ "insight": "Chipotle",		"value": 300 },
												{ "insight": "Macdonalds", 		"value": 200 },
												{ "insight": "Taco Bell", 		"value": 159 },
												{ "insight": "Starbucks", 		"value": 20 },
												{ "insight": "Subway", 			"value": 15 }
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
												{ "insight": "#Chipotle",		"value": 8745 },
												{ "insight": "#Macdonalds", 	"value": 6893 },
												{ "insight": "#Taco Bell", 		"value": 5948 },
												{ "insight": "#Starbucks", 		"value": 3325 },
												{ "insight": "#Subway", 		"value": 1345 }
											]
										},
										{ 
											"analysisType": "Indexing", 
											"insights": [
												{ "insight": "#Chipotle",		"value": 30 },
												{ "insight": "#Macdonalds", 	"value": 21 },
												{ "insight": "#TacoBell", 		"value": 16 },
												{ "insight": "#Starbucks", 		"value": 13 },
												{ "insight": "#Subway", 		"value": 9 }
											]
										},
										{ 
											"analysisType": "Trending", 
											"insights": [
												{ "insight": "#Chipotle",		"value": 250 },
												{ "insight": "#Macdonalds", 	"value": 175 },
												{ "insight": "#Taco Bell", 		"value": 120 },
												{ "insight": "#Starbucks", 		"value": 76 },
												{ "insight": "#Subway", 		"value": 32 }
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
								{ "name": "Patricia Summers Right", "handle": "@PSummers", 				"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png" },
								{ "name": "Simon Green", 			"handle": "@SGreen", 				"followers": 9343, 		"retweets": 3130, 		"image": "avatar-m3.png" },
								{ "name": "Tracey Sing", 			"handle": "@tracey_sing12312", 		"followers": 98654, 	"retweets": 25693, 		"image": "avatar-f3.png" },
								{ "name": "Kam Jefferson", 			"handle": "@KamJefferson", 			"followers": 11725920, 	"retweets": 7987324, 	"image": "avatar-m1.png" },
								{ "name": "Kim Blanchet", 			"handle": "@KimBlanchet_1973", 		"followers": 7343, 		"retweets": 1432, 		"image": "avatar-f5.png" },
								{ "name": "Steve Ballintine", 		"handle": "@spaceInvader_349", 		"followers": 44490, 	"retweets": 10334, 		"image": "avatar-m6.png" },
								{ "name": "Mick Richardson", 		"handle": "@MickeyRickey_3384", 	"followers": 1325655, 	"retweets": 4899325, 	"image": "avatar-m2.png" },
								{ "name": "Jennifer McKenna", 		"handle": "@Jennifer_sales14", 		"followers": 54984, 	"retweets": 67424, 		"image": "avatar-f6.png" },
								{ "name": "Sue Piper", 				"handle": "@SuePiper05", 			"followers": 8832, 		"retweets": 6444, 		"image": "avatar-f2.png" },
								{ "name": "Alfred Robertson", 		"handle": "@alfred_robertson_111", 	"followers": 156903, 	"retweets": 766466, 	"image": "avatar-m5.png" },
								{ "name": "Jim Watson", 			"handle": "@ilovecoffee88", 		"followers": 8434133, 	"retweets": 4344904, 	"image": "avatar-m4.png" },
								{ "name": "Olivia Chow", 			"handle": "@OliviaChow", 			"followers": 486293, 	"retweets": 235084, 	"image": "avatar-f4.png" }
							],
						
							"emergingNow": [
								{ "insight": "ONION RINGS",			"value": 100 },
								{ "insight": "BREAKFAST SANDWICH",	"value": 80 },
								{ "insight": "BACON",				"value": 55 }
							],

							"recentTweets": [
								{ "name": "Patricia Summers Right", "handle": "@PSummers", 				"followers": 1335543, 	"retweets": 2545835, 	"image": "avatar-f1.png", 	"tweet": "Burritos at Chipotle for lunch, nom nom!" },
								{ "name": "Simon Green", 			"handle": "@SGreen", 				"followers": 9343, 		"retweets": 3130, 		"image": "avatar-m3.png",	"tweet": "Nothing like crispy fries at Macdonalds." },
								{ "name": "Tracey Sing", 			"handle": "@tracey_sing12312", 		"followers": 98654, 	"retweets": 25693, 		"image": "avatar-f3.png", 	"tweet": "I need my coffee fix, off to Starbucks!" },
								{ "name": "Kam Jefferson", 			"handle": "@KamJefferson", 			"followers": 11725920, 	"retweets": 7987324, 	"image": "avatar-m1.png",	"tweet": "Late night munchies at Taco Bell." },
								{ "name": "Kim Blanchet", 			"handle": "@KimBlanchet_1973", 		"followers": 7343, 		"retweets": 1432, 		"image": "avatar-f5.png", 	"tweet": "Anyone else for dinner at Subway tonight?" },
								{ "name": "Steve Ballintine", 		"handle": "@spaceInvader_349", 		"followers": 44490, 	"retweets": 10334, 		"image": "avatar-m6.png", 	"tweet": "I tried making burritos, but Chipoltes is way better." },
								{ "name": "Mick Richardson", 		"handle": "@MickeyRickey_3384", 	"followers": 1325655, 	"retweets": 4899325, 	"image": "avatar-m2.png", 	"tweet": "Anyone else addicted to the coffee at Macdonalds?" },
								{ "name": "Jennifer McKenna", 		"handle": "@Jennifer_sales14", 		"followers": 54984, 	"retweets": 67424, 		"image": "avatar-f6.png", 	"tweet": "Taco Bell serving healthier foods!?" },
								{ "name": "Sue Piper", 				"handle": "@SuePiper05", 			"followers": 8832, 		"retweets": 6444, 		"image": "avatar-f2.png", 	"tweet": "Finally got my Caffe Latte at Star Bucks, time to wake up." },
								{ "name": "Alfred Robertson", 		"handle": "@alfred_robertson_111", 	"followers": 156903, 	"retweets": 766466, 	"image": "avatar-m5.png", 	"tweet": "Have a craving for Crispy Tacos at Chipoltes tonight." },
								{ "name": "Jim Watson", 			"handle": "@ilovecoffee88", 		"followers": 8434133, 	"retweets": 4344904, 	"image": "avatar-m4.png", 	"tweet": "The new bacon club at Taco Bell is awesome!" },
								{ "name": "Olivia Chow", 			"handle": "@OliviaChow", 			"followers": 486293, 	"retweets": 235084, 	"image": "avatar-f4.png", 	"tweet": "The Chili at Subway warmed me up, time to head back out into the cold." }
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
												{ "insight": "Coka Cola",		"value": 6475 },
												{ "insight": "Gatorade", 		"value": 4756 },
												{ "insight": "Nestle", 			"value": 3782 },
												{ "insight": "Pepsi", 			"value": 1646 },
												{ "insight": "7-Up", 			"value": 967 }
											]
										},
										{ 
											"analysisType": "Indexing", 
											"insights": [
												{ "insight": "Coka Cola",		"value": 53 },
												{ "insight": "Gatorade", 		"value": 28 },
												{ "insight": "Nestle", 			"value": 11 },
												{ "insight": "Pepsi", 			"value": 6 },
												{ "insight": "7-Up", 			"value": 1 }
											]
										},
										{ 
											"analysisType": "Trending", 
											"insights": [
												{ "insight": "Coka Cola",		"value": 310 },
												{ "insight": "Gatorade", 		"value": 180 },
												{ "insight": "Nestle", 			"value": 140 },
												{ "insight": "Pepsi", 			"value": 80 },
												{ "insight": "7-Up", 			"value": 10 }
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
												{ "insight": "#CokaCola",		"value": 8567 },
												{ "insight": "#Gatorade", 		"value": 5456 },
												{ "insight": "#Nestle", 		"value": 2343 },
												{ "insight": "#Pepsi", 			"value": 1343 },
												{ "insight": "#7-Up", 			"value": 942 }
											]
										},
										{ 
											"analysisType": "Indexing", 
											"insights": [
												{ "insight": "#CokaCola",		"value": 46 },
												{ "insight": "#Gatorade", 		"value": 28 },
												{ "insight": "#Nestle", 		"value": 20 },
												{ "insight": "#Pepsi", 			"value": 16 },
												{ "insight": "#7-Up", 			"value": 8 }
											]
										},
										{ 
											"analysisType": "Trending", 
											"insights": [
												{ "insight": "#CokaCola",		"value": 301 },
												{ "insight": "#Macdonalds", 	"value": 164 },
												{ "insight": "#Nestle", 		"value": 113 },
												{ "insight": "#Pepsi", 			"value": 92 },
												{ "insight": "#7-Up", 			"value": 27 }
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
						
							"emergingNow": [
								{ "insight": "COCA COLA",	"value": 100 },
								{ "insight": "7-UP",		"value": 40 },
								{ "insight": "GATORADE",	"value": 65 }
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
							"measure": "Posts",
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
							        "key": "Posts", 
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
							        "key": "Posts", 
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
							        "key": "Posts", 
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
							"measure": "Posts",
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
							        "key": "Posts", 
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
							        "key": "Posts", 
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
							        "key": "Posts", 
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