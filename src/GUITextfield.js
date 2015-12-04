﻿var CASTORGUI = CASTORGUI || {};

(function() {
   
    CASTORGUI.GUITextfield = function (id, options, guimanager, callback, append) {
    
		CASTORGUI.GUIManager.call(this, guimanager.canvas, guimanager.canvasCss);
		
		if(append == null || append == undefined) { append = true; }
		
		this.id = id;	
		this.class = options.class || "GUITextfield";
		this.html = document.body || document.getElementsByTagName('body')[0];
		this.textfieldPosition = {x:options.x, y:options.y};
		this.textfieldSize = {width:options.w, height:options.h};
		this.value = options.value || "";
		this.background = options.background || "white";
		this.border	= options.border || "1px solid black";
		this.color = options.color || "black";
		this.placeholder = options.placeholder;
		this.zIndex = options.zIndex || 1;
		this.textfieldVisible = true;
		this.onChangeTextfield = callback || false;
		this.tabindex = options.tabindex || 0;
		
		if(append == true) {
			this.addElement(append);
		}
	};

	Extends(CASTORGUI.GUITextfield, CASTORGUI.GUIManager);
	
	CASTORGUI.GUITextfield.prototype.addElement = function(append, element)  {
		var textfield = document.createElement("input");	
		textfield.type = "text";
		textfield.style.width = this.textfieldSize.width+"px";
		textfield.style.height = this.textfieldSize.height+"px";
		if(append == true) {					
			textfield.style.top = (this.textfieldPosition.y + this.getCanvasOrigine().top)+"px";
			textfield.style.left = (this.textfieldPosition.x + this.getCanvasOrigine().left)+"px";
		} else{
			textfield.style.top = this.textfieldPosition.y+"px";
			textfield.style.left = this.textfieldPosition.x+"px";
		}
		textfield.style.position = "absolute";
		textfield.id = this.id;	
		textfield.name = this.id;
		textfield.class = this.class;
		textfield.tabindex = this.tabindex;
		textfield.value = this.value;
		textfield.placeholder = this.placeholder;
		textfield.style.zIndex = this.zIndex;
		textfield.style.background = this.background;
		textfield.style.border = this.border;
		textfield.style.color = this.color;
		textfield.onchange = this.onChangeTextfield;
		
		if(append == true) {
			this.html.appendChild(textfield);
		} else {
			element.appendChild(textfield);
		}
		this.addGuiElements(textfield);
    };
	
	CASTORGUI.GUITextfield.prototype.getValue = function() {
		return this.getElementById(this.id).value;
	};
	
	CASTORGUI.GUITextfield.prototype.setValue = function(val) {
		this.value = val;
		this.getElementById(this.id).value = val;
	};

	CASTORGUI.GUITextfield.prototype.dispose = function() {
		return this.html.removeChild(this.getElementById(this.id));
    };
   
    CASTORGUI.GUITextfield.prototype.setVisible = function(bool, fade) {
		var display;
		if(fade == undefined) fade = true;
		var element = this.getElementById(this.id);
		if(bool == true) {
			display = "block";
			this.textfieldVisible = true;
			if(fade == true) { this.fadeIn(element); }
		} else {
			display = "none";
			this.textfieldVisible = false;
			if(fade == true) { this.fadeOut(element);}
		}
		if(fade == false) { element.style.display = display; }
    };

    CASTORGUI.GUITextfield.prototype.isVisible = function() {
		return this.textfieldVisible;
    };
	
})();
