//= require jquery
//= require jquery_ujs
//= require_tree .
//= require_tree ./templates
//= require_self

$(function() {
  var $html = JST['templates/test']({value: "Hello from the template"});
  $('#the-div').append($html);
});
