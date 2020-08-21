/* 
  Template: Evolo - StartUp HTML Landing Page Template
  Original Author: Inovatik
  Created: June 2019
  Description: Custom JS file

  Modified for Code The Change YYC
  Changes by: Christian Garrovillo | @cgarrovillo
  Description: This is the original custom JS file included with the website template.
  It has been modified to work alongside ReactJS + Gatsby. 

  The modifications were necessary as the template had many errors, which is typical
  for many HTML/CSS/JS templates that do not use Modern Web Technologies (ReactJS, AngularJS, VueJS etc.)
*/

;(function ($) {
  ;('use strict')

  /* 
  jQuery Preloader Stuff removed.
  Reason: Old template code. Deprecated technologies. Not applicable when website
  is now using ReactJS + Gatsby.
  Replaced by gatsby-anchor-links module.
  */

  /* Navbar Scripts */
  // jQuery to collapse the navbar on scroll
  $(window).on('scroll load', function () {
    if ($('.navbar').offset().top > 60) {
      $('.fixed-top').addClass('top-nav-collapse')
    } else {
      $('.fixed-top').removeClass('top-nav-collapse')
    }
  })

  /* 
  jQuery Easing Stuff removed.
  Reason: Old template code. Better implementations exist for ReactJS.
  Replaced by gatsby-anchor-links module.
  */

  // closes the responsive menu on menu item click
  $('.navbar-nav li a').on('click', function (event) {
    if (!$(this).parent().hasClass('dropdown'))
      $('.navbar-collapse').collapse('hide')
  })

  /* 
  Swiper Stuff removed.
  Reason: Old template code. Better implementations exist for ReactJS.
  Replaced by swiper module.
  */

  /* 
  Popup stuff removed.
  Reason: Old template code. Better implementations exist for ReactJS.
  Replaced by react-modal module.
  */

  /* Move Form Fields Label When User Types */
  // for input and textarea fields
  $('input, textarea').keyup(function () {
    if ($(this).val() != '') {
      $(this).addClass('notEmpty')
    } else {
      $(this).removeClass('notEmpty')
    }
  })

  /* 
  jQuery Form Validation stuff removed.
  Reason: Old template code. Better implementations exist for ReactJS. 
  (To-be) Replaced by Formik module.
  */

  function rsubmitForm() {
    // initiate variables with form content
    var name = $('#rname').val()
    var email = $('#remail').val()
    var phone = $('#rphone').val()
    var select = $('#rselect').val()
    var terms = $('#rterms').val()

    $.ajax({
      type: 'POST',
      url: 'php/requestform-process.php',
      data:
        'name=' +
        name +
        '&email=' +
        email +
        '&phone=' +
        phone +
        '&select=' +
        select +
        '&terms=' +
        terms,
      success: function (text) {
        if (text == 'success') {
          rformSuccess()
        } else {
          rformError()
          rsubmitMSG(false, text)
        }
      },
    })
  }

  function rformSuccess() {
    $('#requestForm')[0].reset()
    rsubmitMSG(true, 'Request Submitted!')
    $('input').removeClass('notEmpty') // resets the field label after submission
  }

  function rformError() {
    $('#requestForm')
      .removeClass()
      .addClass('shake animated')
      .one(
        'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
        function () {
          $(this).removeClass()
        }
      )
  }

  function rsubmitMSG(valid, msg) {
    if (valid) {
      var msgClasses = 'h3 text-center tada animated'
    } else {
      var msgClasses = 'h3 text-center'
    }
    $('#rmsgSubmit').removeClass().addClass(msgClasses).text(msg)
  }

  /* Contact Form */
  $('#contactForm')
    .validator()
    .on('submit', function (event) {
      if (event.isDefaultPrevented()) {
        // handle the invalid form...
        cformError()
        csubmitMSG(false, 'Please fill all fields!')
      } else {
        // everything looks good!
        event.preventDefault()
        csubmitForm()
      }
    })

  function csubmitForm() {
    // initiate variables with form content
    var name = $('#cname').val()
    var email = $('#cemail').val()
    var message = $('#cmessage').val()
    var terms = $('#cterms').val()
    $.ajax({
      type: 'POST',
      url: 'php/contactform-process.php',
      data:
        'name=' +
        name +
        '&email=' +
        email +
        '&message=' +
        message +
        '&terms=' +
        terms,
      success: function (text) {
        if (text == 'success') {
          cformSuccess()
        } else {
          cformError()
          csubmitMSG(false, text)
        }
      },
    })
  }

  function cformSuccess() {
    $('#contactForm')[0].reset()
    csubmitMSG(true, 'Message Submitted!')
    $('input').removeClass('notEmpty') // resets the field label after submission
    $('textarea').removeClass('notEmpty') // resets the field label after submission
  }

  function cformError() {
    $('#contactForm')
      .removeClass()
      .addClass('shake animated')
      .one(
        'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
        function () {
          $(this).removeClass()
        }
      )
  }

  function csubmitMSG(valid, msg) {
    if (valid) {
      var msgClasses = 'h3 text-center tada animated'
    } else {
      var msgClasses = 'h3 text-center'
    }
    $('#cmsgSubmit').removeClass().addClass(msgClasses).text(msg)
  }

  /* Privacy Form */
  $('#privacyForm')
    .validator()
    .on('submit', function (event) {
      if (event.isDefaultPrevented()) {
        // handle the invalid form...
        pformError()
        psubmitMSG(false, 'Please fill all fields!')
      } else {
        // everything looks good!
        event.preventDefault()
        psubmitForm()
      }
    })

  function psubmitForm() {
    // initiate variables with form content
    var name = $('#pname').val()
    var email = $('#pemail').val()
    var select = $('#pselect').val()
    var terms = $('#pterms').val()

    $.ajax({
      type: 'POST',
      url: 'php/privacyform-process.php',
      data:
        'name=' +
        name +
        '&email=' +
        email +
        '&select=' +
        select +
        '&terms=' +
        terms,
      success: function (text) {
        if (text == 'success') {
          pformSuccess()
        } else {
          pformError()
          psubmitMSG(false, text)
        }
      },
    })
  }

  function pformSuccess() {
    $('#privacyForm')[0].reset()
    psubmitMSG(true, 'Request Submitted!')
    $('input').removeClass('notEmpty') // resets the field label after submission
  }

  function pformError() {
    $('#privacyForm')
      .removeClass()
      .addClass('shake animated')
      .one(
        'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
        function () {
          $(this).removeClass()
        }
      )
  }

  function psubmitMSG(valid, msg) {
    if (valid) {
      var msgClasses = 'h3 text-center tada animated'
    } else {
      var msgClasses = 'h3 text-center'
    }
    $('#pmsgSubmit').removeClass().addClass(msgClasses).text(msg)
  }

  /* Back To Top Button */
  // create the back to top button
  $('body').prepend(
    '<a href="#" class="back-to-top page-scroll">Back to Top</a>'
  )
  var amountScrolled = 700
  $(window).scroll(function () {
    if ($(window).scrollTop() > amountScrolled) {
      $('a.back-to-top').fadeIn('500')
    } else {
      $('a.back-to-top').fadeOut('500')
    }
  })

  /* Removes Long Focus On Buttons */
  $('.button, a, button').mouseup(function () {
    $(this).blur()
  })
})(jQuery)
