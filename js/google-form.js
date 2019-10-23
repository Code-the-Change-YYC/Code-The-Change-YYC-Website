!function(exports) {
  exports.submitGoogleForm = submitGoogleForm;

  function submitGoogleForm(form) {
    try {
      var data = [].slice.call(form).map(function(control) {
        return 'value' in control && control.name ?
          control.name + '=' + (control.value === undefined ? '' : control.value) :
          '';
      }).join('&');
      var xhr = new XMLHttpRequest();

      /*
       this last 'false' parameter in the open method tells it to make a synchronous request,
       which helped to avoid timing issues with the redirect to the thankyou page.
      */
      xhr.open('POST', form.action + '/formResponse', false); 
      xhr.setRequestHeader('Accept',
          'application/xml, text/xml, */*; q=0.01');
      xhr.setRequestHeader('Content-type',
          'application/x-www-form-urlencoded; charset=UTF-8');
      xhr.send(data);
    } catch(e) {}

    window.location.href = "thankyou.html";

    form.parentNode.className += ' submitted';

    return false;
  }
}(typeof module === 'undefined' ? window : module.exports);
