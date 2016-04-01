
(function(window,$){
	var Fille = function( opcoes ){
		return this.__init( opcoes);
	};

	var file = Fille.prototype;
		file.target = [];
		file.view = [];
		file.opcoes = {
			url:"",
			"path":"/",
			"target": "body"
		};

		file.__init = function( opcoes ){
			this.opcoes = $.extend({}, opcoes, this.opcoes );
			this.target = $(opcoes.target);
			this.createView();
			return this;
		};


		file.createView = function(){
			
			this.view = $("<div></div>",{ class: 'panel box-upload pull-fixed' });
			var barraSuperior = $("<div></div>", { class: "panel-heading" }).html("<p>Imagens<a href='#editar' class=\"pull-right\">x</a> </p> "),
				body = $("<div></div>", { id:"bodyFiles", class: "panel-body"}).height( $(window).height() - 200 );

			this.view.append( barraSuperior );
			this.view.append( body );
			this.target.html( this.view );
		};

		file.op = function( opcao ){
			if( opcao === "show" ){
				this.view.show();
			}
			console.log( this );
		};
	window.Fille = window.fille = Fille;
})(window, jQuery);
