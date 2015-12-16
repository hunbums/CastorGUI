var CASTORGUI = CASTORGUI || {};

(function() {
   
	CASTORGUI.GUIColor = function (id, options, guimanager, callback, append) {
    
		CASTORGUI.GUIManager.call(this, guimanager.canvas, guimanager.canvasCss);
		
		if(append == null || append == undefined) { append = true; }
		
		this.id = id;	
		this.class = options.class || "GUIColor";
		this.html = document.body || document.getElementsByTagName('body')[0];
		this.colorPosition = {x:options.x, y:options.y};
		this.colorSize = {width:options.w, height:options.h};			
		
		this.value = options.value || "red";
		this.zIndex = options.zIndex || 1;
		this.colorVisible = true;
		this.onchangeColor = callback || false;
		this.tabindex = options.tabindex || 0;
		
		if(append == true) {
			this.addElement(append);
		}	
	};

	Extends(CASTORGUI.GUIColor, CASTORGUI.GUIManager);
	
	CASTORGUI.GUIColor.prototype.addElement = function(append, element)  {
		var color = document.createElement("input");
		color.type= "color";		
		color.value= this.value;
		color.class = this.class;
		color.tabindex = this.tabindex;
		color.style.width = this.colorSize.width+"px";
		color.style.height = this.colorSize.height+"px";	
		if(append == true) {				
			color.style.top = (this.colorPosition.y + this.getCanvasOrigine().top)+"px";
			color.style.left = (this.colorPosition.x + this.getCanvasOrigine().left)+"px";
		} else {
			color.style.top = this.colorPosition.y+"px";
			color.style.left = this.colorPosition.x+"px";
		}
		color.style.position = "absolute";
		color.id = this.id;	
		color.name = this.id;	
		color.style.zIndex = this.zIndex;		
		color.oninput = this.onchangeColor;
		color.onchange = this.onchangeColor;
		
		if(append == true) {
			this.html.appendChild(color);
		} else {
			element.appendChild(color);
		}
		this.addGuiElements(color);
    };	

	CASTORGUI.GUIColor.prototype.dispose = function() {
		return this.html.removeChild(this.getElementById(this.id));
    };
   
    CASTORGUI.GUIColor.prototype.setVisible = function(bool, fade) {
		var display;
		if(fade == undefined) fade = true;
		var element = this.getElementById(this.id);
		if(bool == true) {
			display = "block";
			this.colorVisible = true;
			if(fade == true) { this.fadeIn(element); }
		} else {
			display = "none";
			this.colorVisible = false;
			if(fade == true) { this.fadeOut(element);}
		}
		if(fade == false) { element.style.display = display; }
    };

    CASTORGUI.GUIColor.prototype.isVisible = function() {
		return this.colorVisible;
    };

})();
