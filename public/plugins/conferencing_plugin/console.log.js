if(true)
{
	is_document_ready = false;
	var originallog		= console.log;
	var originalwarn	= console.warn;
	var originalerror	= console.error;
	var originalinfo	= console.info;

	var Old_ConsoleLog_OBJ		= "";
	// console.log("test");
	console_log = function(txt) {
		if(is_document_ready == false)
		{
			alert("console.log :\n  " + txt);
			Old_ConsoleLog_OBJ = "<li style='display:block;'>" + txt + "</li>" + Old_ConsoleLog_OBJ;
		}
		else
		{
			$("#consolelog ul").prepend("<li style='display:block;'>" + txt + "</li>");
		}
		originallog(txt);
		//originallog.apply(console, arguments);
	}
	console_warn = function(txt) {
		if(is_document_ready == false)
		{
			alert("console.warn :\n  " + txt);
			Old_ConsoleLog_OBJ = "<li style='color:#ffff00;display:block;'>" + txt + "</li>" + Old_ConsoleLog_OBJ;
		}
		else
		{
			$("#consolelog ul").prepend("<li style='color:#ffff00;display:block;'>" + txt + "</li>");
		}
		originalwarn(txt);
		//originallog.apply(console, arguments);
	}
	console_error = function(txt) {
		if(is_document_ready == false)
		{
			alert("console.error :\n  " + txt);
			Old_ConsoleLog_OBJ = "<li style='color:#ff0000;display:block;'>" + txt + "</li>" + Old_ConsoleLog_OBJ;
		}
		else
		{
			$("#consolelog ul").prepend("<li style='color:#ff0000;display:block;'>" + txt + "</li>");
		}
		originalerror(txt);
		//originallog.apply(console, arguments);
	}
	console_info = function(txt) {
		if(is_document_ready == false)
		{
			alert("console.error :\n  " + txt);
			Old_ConsoleLog_OBJ = "<li style='color:#00ff00;display:block;'>" + txt + "</li>" + Old_ConsoleLog_OBJ;
		}
		else
		{
			$("#consolelog ul").prepend("<li style='color:#00ff00;display:block;'>" + txt + "</li>");
		}
		originalinfo(txt);
		//originallog.apply(console, arguments);
	}

	$( document ).ready(function() {
		if(!is_document_ready)
		{
			is_document_ready = true;
			$("body").append("<style>#consolelog *{font-size:12px;margin:0;padding:0;outline-style:unset !important;-moz-user-select:element !important;}</style><div style='position: fixed; height: 30%;z-index: 2147483647; left: 0px; bottom: 0px; background: black none repeat scroll 0% 0%; color: white; overflow: auto; width: 100%; text-align: left; direction: ltr; padding: 10px 21px !important;' id='consolelog'><ul>" + Old_ConsoleLog_OBJ + "<li style='display:block;'>Console.Log Initialized;</li><li style='color:#ffff00;display:block;'>786</li></ul></div>");
		}
	});
}


