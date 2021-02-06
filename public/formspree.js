let form = document.forms[0]
form.addEventListener("submit", function(ev) {
  ev.preventDefault();
  var data = new FormData(form);
  ajax(form.method, form.action, data, success, error);
});
function success() {
  form.reset();
  document.getElementById('email-subscribe').setAttribute('disabled', true)
  document.getElementById('email-subscribe').textContent = "Thanks! You'll be first to know!"
}

function error() {
  console.log("Oops! There was a problem.")
}
function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}