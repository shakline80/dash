(function ($) {
	"use strict";

    jQuery(document).ready(function($){

				$(".ast-btn button").click(function(){
					$(this).toggleClass("active");
				});


				$(".unlock").click(function(){
					$(".smp-single-table, .active").removeClass("active");
				});
				  

		        //===== Scroll To Top Start
		        $(window).on('scroll', function (event) {
		            if ($(this).scrollTop() > 600) {
		                $('.down-button').fadeIn(200)
		            } else {
		                $('.down-button').fadeOut(200)
		            }
		        });
		            //Animate the scroll to yop
		        $('.down-button').on('click', function (event) {
		            event.preventDefault();

		            $('html, body').animate({
		                scrollTop: 0,
		            }, 1500);
		        });

		         //===== Scroll To Top End


				 $('#nav').onePageNav({
					currentClass: 'current',
					changeHash: false,
					scrollSpeed: 750,
					scrollThreshold: 0.5,
					filter: '',
					scrollOffset: 'top_offset',
					easing: 'swing',
					begin: function() {
						//I get fired when the animation is starting
					},
					end: function() {
						//I get fired when the animation is ending
					},
					scrollChange: function($currentListItem) {
						//I get fired when you enter a section and I pass the list item of the section
					}
				});

				



				new Chart(document.getElementById("bar-chart-grouped"), {
					type: 'bar',
					
					data: {
					  labels: ["Q1", "Q1", "Q1", "Q1"],
					  datasets: [
						{
						  backgroundColor: "#CECECE",
						  data: [1100,1100,1100,1100],
						}, {
						  backgroundColor: "#F93C65",
						  data: [400,400,400,400],
						},{
							backgroundColor: "#FFD965",
							data: [600,600,600,600],
						},{
							backgroundColor: "#00B69B",
							data: [820,820,820,820],
						  }
					  ]
					},
					options: {
						
						legends:{
							display:false
						  },
					
						scales: {
							xAxes: [{
								barPercentage: 0.5,
								barThickness: 15,
								maxBarThickness: 15,
								minBarLength: 2,
								categoryPercentage:0.4,
								fontColor: "black",
								ticks: {
									fontColor: "black",
									fontSize: 16,
								}
							}],
							yAxes: [{
								ticks: {
									fontColor: "black",
									fontSize: 12,
									beginAtZero:true
								}
							}],
						},
						legend: {
							display: false,
							fontColor: "black",
							fontSize: 12,
						}
					}
				});
				

		
				new Chart(document.getElementById("bar-chart-grouped-2"), {
					type: 'bar',
					
					data: {
					  labels: [["Networking", "Devices"], "Servers", "Workstations", "loT", "Containers", "Printers", [ "Cameras/Video", "Surveillance", "Equipment"], "Other"],
					  datasets: [
						{
						  backgroundColor: "#F93C65",
						  data: [1100,900,1170,670, 840, 500, 200, 380]
						}, {
						  backgroundColor: "#00B69B",
						  data: [1000,500,675,380, 670, 430, 640, 480],
						}
					  ]
					},
					options: {
						legend: {
							labels: {
								// This more specific font property overrides the global property
								fontColor: "white",
								fontSize: 14,
								FontFamily: ""

							}
						},
						scales: {
							xAxes: [{
								barPercentage: 0.5,
								barThickness: 18,
								maxBarThickness: 18,
								minBarLength: 2,
								categoryPercentage:0.4,
								defaultFontSize: 14,
								ticks: {
									fontColor: "white",
									fontSize: 14,
									labels: {
										rotate: 0
									}
								},
								categories: [
									'Apples',
									'Strawberries',
									'Pineapples',
									['Sugar', 'Baby', 'Watermelon'],
									['Prickly', 'Pear'],
									'Pears',
									['Quararibea', 'cordata'],
									'Pomegranates',
									'Tangerines'
								  ]
							}],
							yAxes: [{
								ticks: {
									fontColor: "white",
									fontSize: 14,
								},
							}],
						},
						legend: {
							display: false
						}
					}
				});		




				new Chart(document.getElementById("bar-chart-grouped-3"), {
					type: 'bar',
					
					data: {
					  labels: ["CRITICAL", "HIGH", "MEDIUM", "LOW", "INFORMATIONAL"],
					  datasets: [
						{
						  backgroundColor: "#F93C65",
						  data: [300,170,280,140, 180]
						}, {
						  backgroundColor: "#00B69B",
						  data: [330,200,390,230, 270],
						}
					  ]
					},
					options: {
						legend: {
							labels: {
								// This more specific font property overrides the global property
								fontColor: "white",
								fontSize: 14,
								display:false
							}
						},
						scales: {
							xAxes: [{
								barPercentage: 0.5,
								barThickness: 15,
								maxBarThickness: 15,
								minBarLength: 2,
								categoryPercentage:0.4,
								ticks: {
									fontColor: "white",
									fontSize: 14,
								}
							}],
							yAxes: [{
								ticks: {
									fontColor: "white",
									fontSize: 14,
								}
							}],
						},
						legend: {
							display: false
						}
					}
				});	






				var ctx = document.getElementById('bar-chart-grouped-4').getContext('2d');
				var myChart = new Chart(ctx, {
					type: 'bar',
					data: {
						labels: ['CRITICAL', 'HIGH', 'MEDIUM', 'LOW', 'INFORMATIONAL'],
						datasets: [{
							labels: "This will be hide",
							data: [400, 240, -200, -400, -300],
							backgroundColor: [
								'#F93C65', 
								'#D9C594', 
								'#86BCB4', 
								'#00B69B', 
								'#C8C8C8', 
							],
							borderColor: [
								'#F93C65', 
								'#D9C594', 
								'#86BCB4', 
								'#00B69B', 
								'#C8C8C8', 
							],
							borderWidth: 1
						}]
					},
					options: {
						scales: {
							yAxes: [{
								ticks: {
									fontColor: "white",
									fontSize: 10,
								}
							}],
							xAxes: [{
								barPercentage: 0.5,
								barThickness: 34,
								maxBarThickness: 34,
								minBarLength: 2,
								ticks: {
									fontColor: "white",
									fontSize: 9,
								}
							}],
						},
						legend: {
							display: false,
							fontColor: "#fff",
							fontSize: 9,
							labels: {
								fontColor: '#fff',
								fontSize: 9,
							}
						}
					}
				});

			




				var ctx = document.getElementById('radar_chart').getContext('2d');
				var myChart = new Chart(ctx, {
					type: 'radar',
					data: {
						labels: ["Assets", "Security", "Compliance", "Threats", "Risks", "Training"],
						display: false,
						datasets: [
						  {
							fill: true,
							backgroundColor: "rgba(179,181,198,0.2)",
							borderColor: "#00B69B",
							pointBorderColor: "#fff",
							pointBackgroundColor: "rgba(179,181,198,1)",
							data: [40,24,32,99,100,50]
						  }, {
							fill: true,
							backgroundColor: "rgba(255,99,132,0.2)",
							borderColor: "#F93C65",
							pointBorderColor: "#fff",
							pointBackgroundColor: "rgba(255,99,132,1)",
							pointBorderColor: "#fff",
							data: [100,54,82,99,61, 80]
						  }
						]
					  },
					options: {
						legend: {
							display: false,
							fontColor: "#fff",
							fontSize: 9,
							labels: {
								fontColor: '#fff',
							}
						},
						scale: {
							ticks: {
								display: false,
							},
							pointLabels: {
							  fontSize: 18,
							  fontColor: '#fff',
							}
						 
						}
					}
				});

			
				

				

				var opts = {
					angle: -0.07, // The span of the gauge arc
					lineWidth: 0.22, // The line thickness
					radiusScale: 1, // Relative radius
					pointer: {
					  length: 0.33, // // Relative to gauge radius
					  strokeWidth: 0.088, // The thickness
					  color: '#fff' // Fill color
					},
					limitMax: false,     // If false, max value increases automatically if value > maxValue
					limitMin: false,     // If true, the min value of the gauge will be fixed
					colorStart: '#6FADCF',   // Colors
					colorStop: '#8FC0DA',    // just experiment with them
					staticZones: [
						{strokeStyle: "#00B69B", min: 0, max: 1000},
						{strokeStyle: "#FFD965", min: 1000, max: 2000},
						{strokeStyle: "#F93C65", min: 2000, max: 3000},
					  ],
					  
					generateGradient: true,
					highDpiSupport: true,     // High resolution support
					// renderTicks is Optional
					renderTicks: {
					  divisions: 0,
					  divWidth: 0.1,
					  divLength: 0.21,
					  divColor: '#FFFFFF',
					  subDivisions: 0,
					  subLength: 0,
					  subWidth: 0.1,
					  subColor: '#FFFFFF'
					}
					
				  };
				  var target = document.getElementById('foo'); // your canvas element
				  var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
				  gauge.maxValue = 3000; // set max gauge value
				  gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
				  gauge.animationSpeed = 16; // set animation speed (32 is default value)
				  gauge.set(1325); // set actual value





				  var opts = {
					angle: -0.07, // The span of the gauge arc
					lineWidth: 0.22, // The line thickness
					radiusScale: 1, // Relative radius
					pointer: {
					  length: 0.33, // // Relative to gauge radius
					  strokeWidth: 0.088, // The thickness
					  color: '#fff' // Fill color
					},
					limitMax: false,     // If false, max value increases automatically if value > maxValue
					limitMin: false,     // If true, the min value of the gauge will be fixed
					colorStart: '#6FADCF',   // Colors
					colorStop: '#8FC0DA',    // just experiment with them
					staticZones: [
						{strokeStyle: "#00B69B", min: 0, max: 1000},
						{strokeStyle: "#FFD965", min: 1000, max: 2000},
						{strokeStyle: "#F93C65", min: 2000, max: 3000},
					  ],
					generateGradient: true,
					highDpiSupport: true,     // High resolution support
					// renderTicks is Optional
					renderTicks: {
					  divisions: 0,
					  divWidth: 0.1,
					  divLength: 0.21,
					  divColor: '#FFFFFF',
					  subDivisions: 0,
					  subLength: 0,
					  subWidth: 0.1,
					  subColor: '#FFFFFF'
					}
					
				  };
				  var target = document.getElementById('foo2'); // your canvas element
				  var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
				  gauge.maxValue = 3000; // set max gauge value
				  gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
				  gauge.animationSpeed = 16; // set animation speed (32 is default value)
				  gauge.set(1325); // set actual value






				  var opts = {
					angle: -0.07, // The span of the gauge arc
					lineWidth: 0.22, // The line thickness
					radiusScale: 1, // Relative radius
					pointer: {
					  length: 0.33, // // Relative to gauge radius
					  strokeWidth: 0.088, // The thickness
					  color: '#fff' // Fill color
					},
					limitMax: false,     // If false, max value increases automatically if value > maxValue
					limitMin: false,     // If true, the min value of the gauge will be fixed
					colorStart: '#6FADCF',   // Colors
					colorStop: '#8FC0DA',    // just experiment with them
					staticZones: [
						{strokeStyle: "#00B69B", min: 0, max: 1000},
						{strokeStyle: "#FFD965", min: 1000, max: 2000},
						{strokeStyle: "#F93C65", min: 2000, max: 3000},
					  ],
					  
					generateGradient: true,
					highDpiSupport: true,     // High resolution support
					// renderTicks is Optional
					renderTicks: {
					  divisions: 0,
					  divWidth: 0.1,
					  divLength: 0.21,
					  divColor: '#FFFFFF',
					  subDivisions: 0,
					  subLength: 0,
					  subWidth: 0.1,
					  subColor: '#FFFFFF'
					}
					
				  };
				  var target = document.getElementById('foo3'); // your canvas element
				  var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
				  gauge.maxValue = 3000; // set max gauge value
				  gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
				  gauge.animationSpeed = 16; // set animation speed (32 is default value)
				  gauge.set(1325); // set actual value








				  var opts = {
					angle: -0.07, // The span of the gauge arc
					lineWidth: 0.22, // The line thickness
					radiusScale: 1, // Relative radius
					pointer: {
					  length: 0.33, // // Relative to gauge radius
					  strokeWidth: 0.088, // The thickness
					  color: '#fff' // Fill color
					},
					limitMax: false,     // If false, max value increases automatically if value > maxValue
					limitMin: false,     // If true, the min value of the gauge will be fixed
					colorStart: '#6FADCF',   // Colors
					colorStop: '#8FC0DA',    // just experiment with them
					staticZones: [
						{strokeStyle: "#00B69B", min: 0, max: 1000},
						{strokeStyle: "#FFD965", min: 1000, max: 2000},
						{strokeStyle: "#F93C65", min: 2000, max: 3000},
					  ],
					  
					generateGradient: true,
					highDpiSupport: true,     // High resolution support
					// renderTicks is Optional
					renderTicks: {
					  divisions: 0,
					  divWidth: 0.1,
					  divLength: 0.21,
					  divColor: '#FFFFFF',
					  subDivisions: 0,
					  subLength: 0,
					  subWidth: 0.1,
					  subColor: '#FFFFFF'
					}
					
				  };
				  var target = document.getElementById('foo4'); // your canvas element
				  var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
				  gauge.maxValue = 3000; // set max gauge value
				  gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
				  gauge.animationSpeed = 16; // set animation speed (32 is default value)
				  gauge.set(1325); // set actual value

				  
				

				  // Nice_select Plugin Active Start
					$(document).ready(function() {
						$('select').niceSelect();
					});
				// Nice_select Plugin Active End


				





	});



	jQuery(window).load(function(){


	});


}(jQuery));	