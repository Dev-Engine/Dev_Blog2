define(function(require, exports, module) {

   var $          = require('jquery'),
       autoResize = require('autoResize'),
       alerts     = require('alerts'),
       chosen     = require('chosen');

  //********************* autorisize *********************//
	$('textarea.resize-text').autoResize();

  $("input[type=file]").change(function(){
    $(this).parents(".uploader").find(".filename").val($(this).val());
  });

	$("input[type=file]").each(function(){
    if($(this).val()==""){
      $(this).parents(".uploader").find(".filename").val("No file selected...");
    }
	});

  //*********************  FORMS   *********************//
  $(".chzn-select").chosen(); $(".chzn-select-deselect").chosen({allow_single_deselect:true});

  //*******************  TAGS  *******************//
  var str = $('input[name="tags"]').val(); str = str.replace(/\,$/, '');
  $('input[name="tags"]').val(str);

  //*******************  CATEGORIES  *******************//
  $('#categories_select').change(function(){
    var self = $(this);
    if(self.val() === '创建新分类'){
      jPrompt('新分类名称:', '', '添加新分类', function(r) {
      });
    }
  });

});