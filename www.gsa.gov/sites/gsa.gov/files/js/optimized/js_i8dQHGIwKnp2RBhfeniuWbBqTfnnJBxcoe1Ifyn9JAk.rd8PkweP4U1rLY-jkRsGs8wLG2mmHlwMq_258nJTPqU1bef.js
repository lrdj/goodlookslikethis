/* The Per Diem tool reports custom events using Google Analytics ga() methods, and Google Tag Manager dataLayer objects.

 It seems that some of these have been removed from the script, and others refactored in a way that prevents them from firing:

 1. var "ga" returns undefined, preventing Google Analytics ga() methods from firing.
 2. tests for the object "dataLayer" seem to be confused with other if statements. This is difficult to discern post-compression, but is clearly preventing event objects from reaching the GTM dataLayer.


 */

//const { start } = require("repl");
var perDiemSwiper,
	perDiemSearch = {
		rates: {},
		query: {},
	},

	gaConsoleCSS = 'background: green; color: white',
	// D9P-1125: This is now being handled in config.  Edit this value at https://SITE/admin/config/services/perdiem

	// Prod
	// apiRoot = 'https://api.gsa.gov/travel/perdiem/v2/rates';
	// Test
	// apiRoot = window.location.protocol + '//' + window.location.host + '/api/rs/perdiem';
	apiRoot = '';
  validDatesBegin = '';
  validDatesEnd = '';
//doc ready
(function ($) {

	Drupal.behaviors.perdiem = {
		attach: function (context, settings) {
      first_year = settings.perdiem_first_year;
      last_year = settings.perdiem_last_year;
			apiRoot = settings.perdiem_api_root;
      validDatesBegin = '10/1/' + first_year.substring(0, first_year.indexOf('-')),
      validDatesEnd = '09/30/' + last_year.substring(0, last_year.indexOf('-'));
		}
	};

	$(document).ready(function () {
		//force fields to reset values on load
		$("input[type=text]").val('');
		$('.perdiem-step-1 .usa-select').prop("selectedIndex", 0).val();
		SetUp_Perdiem_Tool();
	});


	function SetUp_Perdiem_Tool() {


	// validDatesBegin = '10/1/2012',
	// 	validDatesEnd = '09/30/2022';

		//set valid search dates to moment objs
		validDatesBegin = moment(validDatesBegin, 'MM/DD/YYYY');
		validDatesEnd = moment(validDatesEnd, 'MM/DD/YYYY');

		//global ajax settings
		$.ajaxSetup({
			timeout: 30000
		});
		//test for IE11, print userAgent
		var isIE11 = !!navigator.userAgent.match(/Trident\/7.0;(.*)rv(:*)11/);

		if (!navigator.geolocation) {
			$('#perdiem-current-location').hide();
		}
		//geolocation
		$('.get-location').on('click', useMyCurrentLocation);

		//clear location form
		$('#perdiem-clear-location-form').on('click', clearLocationForm);

		//reset search, back to first screen
		$('#perdiem-new-search').on('click', newSearch);

		//perform ajax calls, check for multiple rates
		$('#perdiem-multiple-rates-check').on('click', checkForMultipleRates);

		//validate multiple rate selection
		$('#perdiem-swiper').on('change', '#perdiem-fiscal-year-1,#perdiem-fiscal-year-2', validateMultipleRates);

		//perform calculation with selected rates
		$('#perdiem-swiper').on('click', '#perdiem-rates-selected', ratesSelected);

		//validate location
		$('#perdiem-city,#perdiem-zip').on('keyup', validateLocationParams)
		$('#perdiem-state').on('change', validateLocationParams)
		validateLocationParams();

		//validate dates
		//$(".usa-date-picker").on('click',validateDates);
		$('#perdiem-start-date,#perdiem-end-date').on('keyup', validateDates)

		$('#perdiem-start-date-group').on('change', validateDates)
		$('#perdiem-end-date-group').on('change', validateDates)
		validateDates();

		$("#perdiem-rate-lookup-fiscal-year").on('change', function () {
			$("#perdiem-look-up-rates-submit").removeAttr('disabled');
			$("#perdiem-look-up-rates-submit").removeClass('disabled');
			$("#perdiem-start-date,#perdiem-end-date,.usa-date-picker__button").attr('disabled', 'disabled');
		});
		$('#perdiem-tool-intent').on('click', function () {

			//perDiemSwiper.slideTo(1)
			if (typeof (ga) != "undefined") {
				ga('send', 'event', 'Per Diem Tool Intent', perDiemSearch.locationType);
			}
			//console.log('%cGA SEND EVENT: CATEGORY: Per Diem Tool Intent ACTION: ' + perDiemSearch.locationType, gaConsoleCSS);
			//console.log("#perdiem-tool-intent");

		});

		$('#perdiem-swiper').on('click', '#perdiem-result-print', perDiemResultPrint)

		//launch gsa.gov rate lookup
		$('#perdiem-look-up-rates-submit').on('click', lookUpRatesSubmit);
	}

	function successResults() {

		$('.perdiem-search-container').addClass("success");
		scrollToTargetAdjusted();
	}

	function scrollToTargetAdjusted() {
		var element = document.getElementById('perdiem-swiper');
		var headerOffset = 120;
		var elementPosition = element.offsetTop;
		var offsetPosition = elementPosition - headerOffset;

		window.scrollTo({
			block: 'start',
			top: offsetPosition,
			behavior: "smooth"
		});
	}

	function newSearch() {
		$('.perdiem-search-container').removeClass("success");
		clearLocationForm()
		clearDateForm()
		scrollToTargetAdjusted()
		$('.perdiem-step-1').removeClass("success");
		$('#perdiem-multiple-rates-check, #perdiem-rates-selected').addClass("display-none").attr("disabled");
		$('#perdiem-look-up-rates-submit').removeClass("display-none").attr('disabled');
	}

	function resetErrors() {
		$('.perdiem-error').hide();
	}

	function clearLocationForm() {
    $('#perdiem-multiple-rates-check').addClass("display-none").attr("disabled", "disabled");
		$('#perdiem-look-up-rates-submit').addClass("disabled").removeClass('display-none').attr('disabled', 'disabled');
		$('#perdiem-choose-rates').empty();
    $('.perdiem-step-1 .usa-select').prop("selectedIndex", 0).val();
		$('#perdiem-zip').val('');
		$('#perdiem-city').val('');
		validateLocationParams();
		$('#perdiem-state').focus();
		$('#perdiem-end-date').val('');
		$('#perdiem-start-date').val('');
		disableFY();
		$('#perdiem-city').attr('disabled', 'disabled');
	}

	function clearDateForm() {
		$('#perdiem-start-date').val('');
		$('#perdiem-end-date').val('');
	}

	function disableFY() {
		$("#perdiem-rate-lookup-fiscal-year").attr('disabled', 'disabled');
	}
	function enableFY() {
		$("#perdiem-rate-lookup-fiscal-year").removeAttr('disabled');
	}

	function validateMultipleRates() {

		$('#perdiem-multiple-rates-check').addClass('disabled display-none').attr('disabled', 'disabled');

		if ($('#perdiem-fiscal-year-1').val() === '' && $('#perdiem-fiscal-year-2').val()) {

			$('#perdiem-rates-selected').addClass('display-none disabled').attr('disabled', 'disabled');
		} else {
			$('#perdiem-rates-selected').removeClass('display-none disabled').removeAttr('disabled');
		}
	}

	function disableNext() {
		//$("#perdiem-look-up-rates-submit").removeAttr('disabled');;
		$('#perdiem-multiple-rates-check').addClass('disabled display-none').attr('disabled', 'disabled');
	}

	function enableNext() {
		$("#perdiem-look-up-rates-submit").addClass("display-none");
		$('#perdiem-multiple-rates-check').removeClass('disabled display-none').removeAttr('disabled');
		resetErrors()
	}

	function validateDates() {
		disableFY();
		perDiemSearch.locationType = 'Custom Location'
		resetErrors();
		var valid = /\d{1,2}\/\d{1,2}\/\d{2,4}/;
		var startDateVal = $('#perdiem-start-date').val();
		var endDateVal = $('#perdiem-end-date').val();
		var startDate = moment(startDateVal, 'MM/DD/YYYY');
		var endDate = moment(endDateVal, 'MM/DD/YYYY');


		//text is valid and dates are valid
		if (startDateVal.match(valid) && endDateVal.match(valid) && startDate.isValid() && endDate.isValid()) {
			//dates are in acceptable range (THIS IS NOT INCLUSIVE)
			if ((startDate.isSame(validDatesBegin) || startDate.isBetween(validDatesBegin, validDatesEnd)) && (endDate.isBetween(validDatesBegin, validDatesEnd) || endDate.isSame(validDatesEnd))) {
				//start is before or equal to end
				if (startDate.isBefore(endDate) || startDate.isSame(endDate)) {
					enableNext()
					$('#perdiem-start-date').removeClass('perdiem-invalid')
					$('#perdiem-end-date').removeClass('perdiem-invalid')
				} else {
					$('#perdiem-end-before-start').show();
					disableNext()
				}
			} else {
				disableNext()
			}
		} else {
			disableNext()
			if (!startDateVal.match(valid) || !startDate.isValid()) {
				if (startDateVal !== '') {
					$('#perdiem-start-date').addClass('perdiem-invalid')
				}

			}
			if (!endDateVal.match(valid) || !endDate.isValid()) {
				if (endDateVal !== '') {
					$('#perdiem-end-date').addClass('perdiem-invalid')
				}
			}
		}
	}


	function validateLocationParams() {
		resetErrors();
		perDiemSearch.locationType = 'Custom Location';
		var validZIP = /\d{5}/;

		//if everything is blank

		$('#perdiem-state').on('change', function () {
			$("#perdiem-city").removeClass('disabled').removeAttr('disabled');
		});

		if ($('#perdiem-city').val() === '' && $('#perdiem-state').val() === '' && $('#perdiem-zip').val().length < 5) {
			//disabled
			$('#perdiem-tool-intent').addClass('disabled').attr('disabled', 'disabled');
			//if not everything is blank
		} else {
			//but zip and state are blank (city only)
			if (!$('#perdiem-zip').val().match(validZIP) && $('#perdiem-state').val() === '') {
				//disabled
				$('#perdiem-tool-intent').addClass('disabled').attr('disabled', 'disabled');
			}
			//otherwise
			else {
				//enabled
				$('#perdiem-rate-lookup-fiscal-year, #perdiem-tool-intent, #perdiem-start-date, #perdiem-end-date, .usa-date-picker__button').removeClass('disabled').removeAttr('disabled');

			}

		}

  }

	function checkForMultipleRates() {
		function e(e) {

			if (perDiemSearch.query.zip = $("#perdiem-zip").val(),
				perDiemSearch.query.state = $("#perdiem-state").val(),
				perDiemSearch.query.city = $("#perdiem-city").val(), "" !== perDiemSearch.query.zip) var a = apiRoot + "/zip/" + perDiemSearch.query.zip, t = "zip";
			else if ("" === perDiemSearch.query.city || e) {
				var a = apiRoot + "/state/" + perDiemSearch.query.state;
				varreqType = "state"
			} else var a = apiRoot + "/city/" + perDiemSearch.query.city + "/state/" + perDiemSearch.query.state,
				t = "city-state";
			r(a, t)
		}

		function r(r, t) {
			function o() {
				return $.ajax({
					url: s + "?api_key=bp4LMwzIzfSmKyn3qXoo2t87bb6swBBkWQGryDpW"
				}).done(function (r) {
					if (r.rates && 0 !== r.rates.length) {
						a = !1;
						var o = r.rates[0].rate;
						if (o.length > 1) {
							for (i in o) " " === o[i].county && (o[i].county = "Standard Rate");
							perDiemSearch.rates.fy1 = {
								year: perDiemSearch.startFY,
								multiple: !0,
								rates: o
							}
						} else perDiemSearch.rates.fy1 = {
							year: perDiemSearch.startFY,
							multiple: !1,
							rate: o[0]
						}
					} else "city-state" === t ? e(!0) : locationError(), a = !0
				}).fail(function () {
					$("#perdiem-multiple-rates-check").html("Next"), a = !0, $("#perdiem-api-error").show()
				})
			}

			function n() {
				if (perDiemSearch.startFY !== perDiemSearch.endFY) {
					var o = r + "/year/" + perDiemSearch.endFY + "?api_key=bp4LMwzIzfSmKyn3qXoo2t87bb6swBBkWQGryDpW";
					return $.ajax({
						url: o
					}).done(function (r) {
						if (r.rates && 0 !== r.rates.length) {
							a = !1;
							var o = r.rates[0].rate;
							if (o.length > 1) {
								for (i in o) " " === o[i].county && (o[i].county = "Standard Rate");
								perDiemSearch.rates.fy2 = {
									year: perDiemSearch.endFY,
									multiple: !0,
									rates: o
								}
							} else perDiemSearch.rates.fy2 = {
								year: perDiemSearch.endFY,
								multiple: !1,
								rate: o[0]
							}
						} else "city-state" === t ? e(!0) : locationError(), a = !0
					}).fail(function () {
						$("#perdiem-multiple-rates-check").html("Next"), $("#perdiem-api-error").show(), a = !0
					})
				}
				return !0
			}
			var s = r + "/year/" + perDiemSearch.startFY;
			$.when(o(), n()).done(function () {
				function e() {
					function e(e, r) {
						return e.county > r.county
					}
					perDiemSearch.rates.fy1.multiple && (perDiemSearch.rates.fy1.rates = perDiemSearch.rates.fy1.rates.sort(e)), perDiemSearch.rates.fy2 && perDiemSearch.rates.fy2.multiple && (perDiemSearch.rates.fy2.rates = perDiemSearch.rates.fy2.rates.sort(e));
					var r = template_multiple_rates,
						a = Mustache.render(r, {
							rates: perDiemSearch.rates
						});
					$("#perdiem-choose-rates").html(a)
				}
				a === !0 || (perDiemSearch.rates.fy2 ? perDiemSearch.rates.fy1.multiple || perDiemSearch.rates.fy2.multiple ? e() : calculateRates() : perDiemSearch.rates.fy1.multiple ? e() : calculateRates())
			})
		}
		//$("#perdiem-multiple-rates-check").html('Next <span class="glyphicon glyphicon-refresh spinning"></span>'),
		resetErrors(),
			perDiemSearch.startDate = moment($("#perdiem-start-date").val(), "MM/DD/YYYY"),
			perDiemSearch.startDate.month() > 8 ? perDiemSearch.startFY = perDiemSearch.startDate.year() + 1 : perDiemSearch.startFY = perDiemSearch.startDate.year(),
			perDiemSearch.endDate = moment($("#perdiem-end-date").val(), "MM/DD/YYYY"),
			perDiemSearch.endDate.month() > 8 ? perDiemSearch.endFY = perDiemSearch.endDate.year() + 1 : perDiemSearch.endFY = perDiemSearch.endDate.year(), e();
		var a = !1
	}


	function useMyCurrentLocation() {
		//var $btn = $(this).button('loading')
		var geocodeResult = {
			city: '',
			state: '',
			zip: ''
		};
		//get location
		navigator.geolocation.getCurrentPosition(reverseGeocode, currentPositionError);
		geocoder = new google.maps.Geocoder();

		function reverseGeocode(position) {

			var latitude = position.coords.latitude,
				longitude = position.coords.longitude;

			var latlong = new google.maps.LatLng(latitude, longitude);

			geocoder.geocode({
				'latLng': latlong
			}, function (results, status) {
				if (status == google.maps.GeocoderStatus.OK) {
					var addressComponents = results[0].address_components;
					//ZIP, use postal_code
					for (i in addressComponents) {
						if (addressComponents[i].types[0] === 'postal_code') {
							geocodeResult.zip = addressComponents[i].long_name;
						}
					}
					//CITY, use locality
					for (i in addressComponents) {
						if (addressComponents[i].types.indexOf('locality') > -1) {
							geocodeResult.city = addressComponents[i].long_name;
						}
					}
					//if no locality, use sublocality
					if (geocodeResult.city === '') {
						for (i in addressComponents) {
							if (addressComponents[i].types.indexOf('sublocality') > -1) {
								geocodeResult.city = addressComponents[i].long_name;
							}
						}
					}
					//STATE, use administrative_area_level_1
					for (i in addressComponents) {
						if (addressComponents[i].types.indexOf('administrative_area_level_1') > -1) {
							geocodeResult.state = addressComponents[i].short_name;
						}
					}
					populateForm();
//					$btn.button('reset')
				} else {
					//error

				}
			});
		}

		function populateForm() {

			$('#perdiem-zip').val(geocodeResult.zip)
			$('#perdiem-city').val(geocodeResult.city)
			$('#perdiem-state option').each(function () {
				if ($(this).val() === geocodeResult.state) {
					$(this).prop('selected', true);

				}
			})
			setTimeout(function () {
				validateLocationParams();
				perDiemSearch.locationType = 'Geolocation'
			}, 250)
			$('#perdiem-zip,#perdiem-city,#perdiem-state').addClass('animated flash');
			setTimeout(function () {
				$('#perdiem-zip,#perdiem-city,#perdiem-state').removeClass('animated flash');
			}, 2000)
		}
	}

	function currentPositionError() {
		console.warn('location error')
	}

	function locationError() {
		$('#perdiem-location-error').show()
		$('#perdiem-multiple-rates-check').html('Next')
	}


	function calculateRates() {

		perDiemSearch.results = {
			breakdown: [],
			rateInfo: [],
			lodgingTotal: 0,
			mieTotal: 0,
			total: 0,
			startDate: moment(perDiemSearch.startDate).format("MMMM DD, YYYY"),
			endDate: moment(perDiemSearch.endDate).format("MMMM DD, YYYY")
		};

		var e = moment(perDiemSearch.startDate, "MM/DD/YYYY"),
			r = moment(perDiemSearch.endDate, "MM/DD/YYYY");
		moment(perDiemSearch.startDate, "MM/DD/YYYY"), moment(perDiemSearch.endDate, "MM/DD/YYYY");

		var numberOfDays = 0, tempDayNum = 0;
		for (var startDate = moment(perDiemSearch.startDate).format("MM-DD-YYYY"), endDate = moment(perDiemSearch.endDate).format("MM-DD-YYYY"), fullDate = e; !fullDate.isAfter(r); fullDate.add(1, "days")) {

			var s = fullDate.format("MM") - 1,
				m = fullDate.format("YYYY"),
				dailyRate = 0,
				prevDate = moment(fullDate.toDate()).add(-1, "days"),
				nextDate = moment(fullDate.toDate()).add(1, "days"),
				lastDateOfMonth = moment(fullDate.toDate()).endOf('month').format("MM/DD/YY");

			//Whats the purpose of L508-L519
			if (s > 8) var c = parseFloat(m) + 1;
			else var c = parseFloat(m);
			var l = Object.keys(perDiemSearch.rates);
			for (i in l)
				if (perDiemSearch.rates[l[i]].year === c) var rate = perDiemSearch.rates[l[i]].rate;

			// for all instances of rate[]
			for (i in rate.months.month) {
				if (rate.months.month[i].number === s + 1) {
					var lodgingAmount = rate.months.month[i].value;
				}
			}

			// Format all months
			var fullMonth = fullDate.format("MMMM"), daySchema = '';

			if (fullDate.format("MM-DD-YYYY") === startDate) {
				daySchema = 'First day (' + fullDate.format("MM/DD/YY") + ')*';
				numberOfDays = 1;
				dailyRate = 0.75 * rate.meals;
				var D = !1;
			} else if (fullDate.format("MM-DD-YYYY") === endDate) {
				daySchema = 'Last day (' + fullDate.format("MM/DD/YY") + ')*';
				numberOfDays = 1;
				dailyRate = 0.75 * rate.meals;
				var D = !1;
			} else if (lastDateOfMonth === fullDate.format("MM/DD/YY")) { //when new month starts
				daySchema = 'Full day (' + fullDate.format("MMM") + ')';
				if (fullDate.format("MM-DD-YYYY") === startDate) { //No push in rateInfo if start date is last date of the month
					var D = !0;
				} else {
					numberOfDays = tempDayNum + 1;
					tempDayNum = 1;
					dailyRate = rate.meals;
					var D = !1;
				}
			} else if (nextDate.format("MM-DD-YYYY") === endDate) { //push in rateInfo for Full Day Entry for Last Month
				if (moment(perDiemSearch.startDate).month() === moment(perDiemSearch.endDate).month() && moment(perDiemSearch.startDate).format('YYYY') === moment(perDiemSearch.endDate).format('YYYY'))
					numberOfDays = moment(perDiemSearch.endDate).format("D") - moment(perDiemSearch.startDate).format("D") - 1;
				else
					numberOfDays = fullDate.format("D");
				var D = !1;
				dailyRate = rate.meals;
				daySchema = 'Full day (' + fullDate.format("MMM") + ')';
			} else if (prevDate.format("MMMM") === fullMonth) { //No push in rateInfo for rest of the days of the month
				var D = !0;
				tempDayNum += 1;
			} else {
				var D = !0;
			}

			if (D === !1 && perDiemSearch.results.rateInfo.push({
				fullDate: daySchema,
				lodging: formatCurrency(lodgingAmount),
				mie: formatCurrency(dailyRate),
				numberOfDays: numberOfDays,
				mieRowTotal: formatCurrency(numberOfDays * dailyRate)
			})) {
				var nightCount = '';
				perDiemSearch.results.mieTotal += numberOfDays * dailyRate;
				if (startDate === endDate) {
					nightCount = 0;
				} else if (moment(perDiemSearch.startDate).month() === moment(perDiemSearch.endDate).month() && moment(perDiemSearch.startDate).format('YYYY') === moment(perDiemSearch.endDate).format('YYYY')) {
					nightCount = moment(perDiemSearch.endDate).format("D") - moment(perDiemSearch.startDate).format("D");
				} else if (fullDate.month() === moment(perDiemSearch.startDate).month() && moment(perDiemSearch.startDate).format('YYYY') === moment(fullDate).format('YYYY')) {
					nightCount = moment(fullDate).daysInMonth() - fullDate.format("DD") + 1;
				} else if (fullDate.month() === moment(perDiemSearch.endDate).month() && moment(perDiemSearch.endDate).format('YYYY') === moment(fullDate).format('YYYY')) {
					nightCount = perDiemSearch.endDate.format("DD") - 1;
				} else {
					nightCount = moment(fullDate).daysInMonth();
				}

				var S = perDiemSearch.results.breakdown;
				for (i in S)
					if (S[i].date === fullMonth) {
						var D = !0;
					} else var D = !1;

				if (!D) {
					perDiemSearch.results.lodgingTotal += lodgingAmount * nightCount;
					perDiemSearch.results.breakdown.push({
						date: fullMonth,
						lodging: formatCurrency(lodgingAmount),
						nightCount: nightCount,
						monthTotal: lodgingAmount * nightCount
					})
				}
			}
		}
		var sum = parseFloat(perDiemSearch.results.lodgingTotal) + parseFloat(perDiemSearch.results.mieTotal);
		perDiemSearch.results.lodgingTotal = formatCurrency(perDiemSearch.results.lodgingTotal);
		perDiemSearch.results.mieTotal = formatCurrency(perDiemSearch.results.mieTotal);
		perDiemSearch.results.total = formatCurrency(sum),
			perDiemSearch.rates.fy2 && perDiemSearch.rates.fy1.rate.county === perDiemSearch.rates.fy2.rate.county && (perDiemSearch.ratesAreSame = !0),
			perDiemSearch.query.stateFormatted = USStates[perDiemSearch.query.state.toLowerCase()];

		var g = template_calculator_results,
			Y = Mustache.render(g, {
				perDiemSearch: perDiemSearch,
				sameRate: perDiemSearch.ratesAreSame
			});
		if ($("#perdiem-results").html(Y),
			//perDiemSwiper.slideTo(5),
			successResults(),
			"undefined" != typeof dataLayer) {
			var w = {
				event: "virtualEvent"
			};
			w.eventCategory = "Per Diem Tool Success", w.eventAction = perDiemSearch.searchType, "Look Up" === perDiemSearch.searchType && (w.eventLabel = perDiemSearch.endFY), dataLayer.push(w)
		}
	}

	function formatCurrency(n) {
		n = parseFloat(n);
		if (n % 1 !== 0) {
			var formatted = n.toFixed(2)
		} else {
			var formatted = n
		}
		return formatted;
	}

	function ratesSelected() {
		if (perDiemSearch.rates.fy1.multiple) {
			var e = $("#perdiem-fiscal-year-1 option:selected").index() - 1;
			perDiemSearch.rates.fy1.rate = perDiemSearch.rates.fy1.rates[e]
		}
		if (perDiemSearch.rates.fy2 && perDiemSearch.rates.fy2.multiple) {
			var r = $("#perdiem-fiscal-year-2 option:selected").index() - 1;
			perDiemSearch.rates.fy2.rate = perDiemSearch.rates.fy2.rates[r]
		}
		calculateRates()
	}


	function updateProgress(n) {
		$('.progress-bar').attr('aria-valuenow', n).css('width', n + '%')
	}

  let cityEvaluated = '';
  function cityEvaluate(){

    let regexMatch1 = /['-]/,
        regexMatch2 = /[.]/;

    if ($('#perdiem-city').val().match(regexMatch1)) {
      cityEvaluated = $('#perdiem-city').val().replace(regexMatch1, " ")
    } else if ($('#perdiem-city').val().match(regexMatch2)) {
      cityEvaluated = $('#perdiem-city').val().replace(regexMatch2, "")
    }
    return cityEvaluated;
  }

	function lookUpRatesSubmit() {
    //cityEvaluate();

		var lookUpYear = $('#perdiem-rate-lookup-fiscal-year').val();
    var url = 'https://' + document.location.host + "/travel/plan-book/per-diem-rates/per-diem-rates-results/?action=perdiems_report&fiscal_year=" + lookUpYear + "&city=" + $('#perdiem-city').val() + "&state=" + $('#perdiem-state').val() + "&zip=" + $('#perdiem-zip').val();
    //var url = 'https://' + document.location.host + "/travel/plan-book/per-diem-rates/per-diem-rates-results/?action=perdiems_report&fiscal_year=" + lookUpYear + "&city=" + cityEvaluated + "&state=" + $('#perdiem-state').val() + "&zip=" + $('#perdiem-zip').val();
		if (typeof (ga) != "undefined") {
			ga('send', 'event', 'Per Diem Tool Success', 'Look Up');
		}
		//console.log('%cGA SEND EVENT: CATEGORY: Per Diem Tool Success ACTION: Look Up LABEL: ' + lookUpYear, gaConsoleCSS)
		window.open(url, '_self')
	}

	function perDiemResultPrint() {
		var w = window.open();
		w.document.title = 'Per Diem Rates';
		var template = template_calculator_results_print;
		var rendered = Mustache.render(template, {
			perDiemSearch: perDiemSearch,
			sameRate: perDiemSearch.ratesAreSame
		});
		$(w.document.body).html(rendered);
		setTimeout(function () {
			w.focus();
			w.print();
		}, 1000)

	}

})(jQuery);
var USStates = {
	"al": "Alabama",
	"ak": "Alaska",
	"az": "Arizona",
	"ar": "Arkansas",
	"ca": "California",
	"co": "Colorado",
	"ct": "Connecticut",
	"dc": "District of Columbia",
	"de": "Delaware",
	"fl": "Florida",
	"ga": "Georgia",
	"hi": "Hawaii",
	"id": "Idaho",
	"il": "Illinois",
	"in": "Indiana",
	"ia": "Iowa",
	"ks": "Kansas",
	"ky": "Kentucky",
	"la": "Louisiana",
	"me": "Maine",
	"md": "Maryland",
	"ma": "Massachusetts",
	"mi": "Michigan",
	"mt": "Montana",
	"mn": "Minnesota",
	"ms": "Mississippi",
	"mo": "Missouri",
	"ne": "Nebraska",
	"nv": "Nevada",
	"nh": "New Hampshire",
	"nj": "New Jersey",
	"nm": "New Mexico",
	"ny": "New York",
	"nc": "North Carolina",
	"nd": "North Dakota",
	"oh": "Ohio",
	"ok": "Oklahoma",
	"or": "Oregon",
	"pa": "Pennsylvania",
	"ri": "Rhode Island",
	"sc": "South Carolina",
	"sd": "South Dakota",
	"tn": "Tennessee",
	"tx": "Texas",
	"ut": "Utah",
	"vt": "Vermont",
	"va": "Virginia",
	"wa": "Washington",
	"wv": "West Virginia",
	"wi": "Wisconsin",
	"wy": "Wyoming"
}
