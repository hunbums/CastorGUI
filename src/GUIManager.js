var CASTORGUI = CASTORGUI || {};

var objectCreate = function(proto) { //Alternative aux anciens navigateurs qui ne dispose pas de la methode Object.create()
	function construct() { }
	construct.prototype = proto;
	return new construct();
};
var Extends = function(ChildClass, ParentClass) { // ClassB (child) herite de classA (parent)
	ChildClass.prototype = Object.create(ParentClass.prototype) || objectCreate(ParentClass.prototype);
	ChildClass.prototype.constructor = ChildClass;
};

(function()
{     
	CASTORGUI.GUIManager = function(canvas, css) {	
		this.canvasCss = css;
		this.canvas = canvas;
		this.guiElements = [];
		this.groups = [];
		this.guiVisible = true;
		this.head = document.head || document.getElementsByTagName('head')[0] || null;
		if(this.head == null) {
			this.header = document.createElement('head');
			this.head.appendChild(this.header);
		}				
		this.style = document.createElement('style');
		this.style.type = 'text/css';
		if (this.style.styleSheet){
			this.style.styleSheet.cssText = this.canvasCss;
		} else {
			this.style.appendChild(document.createTextNode(this.canvasCss));
		}
		this.head.appendChild(this.style);
    };
	
	CASTORGUI.GUIManager.prototype.getElementById = function(id) {
		return document.getElementById(id);
    };
	
	CASTORGUI.GUIManager.prototype.getCanvasOrigine = function() {
        var offsets = this.canvas.getBoundingClientRect(),
		offsetsTop = offsets.top || 0,
		offsetsLeft = offsets.left || 0;
		return {top:offsetsTop, left:offsetsLeft};
    };
	
	CASTORGUI.GUIManager.prototype.getCanvasWidth = function() {
		var offsets = this.canvas.getBoundingClientRect(),
		offsetsWidth = offsets.width || 0,
		offsetsHeight = offsets.height || 0;
		return {width:offsetsWidth, height:offsetsHeight};
	};
	
    CASTORGUI.GUIManager.prototype.dispose = function() {
		this.guiElements.forEach(function(e) {	
			var node = this.getElementById(e.id);
			this.html.removeChild(node);
		});
		return;
    };	
   
    CASTORGUI.GUIManager.prototype.setVisible = function(bool) {
		var display;
		if(bool == true) {
			display = "block";
			this.guiVisible = true;
		} else {
			display = "none";
			this.guiVisible = false;
		}
		this.guiElements.forEach(function(e) {	
			this.getElementById(e.id).style.display = display;
		});
		return;
    };
	
	CASTORGUI.GUIManager.prototype.isVisible = function() {
		return this.guiVisible;
    };
	
})();