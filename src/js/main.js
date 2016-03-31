
(function(window,$){
	var File = function(){

	};
	var file = File.prototype;
		file.__init = function(){
			return true;
		};

	window.file = new File();
})(window, jQuery);