# CastorGUI V1.6

Library to display a GUI game as a layer on top of the canvas HTML/CSS.

* [Demo online of this extension](http://www.babylon.actifgames.com/demoCastorGUI/)
* [Tutorial](https://github.com/dad72/CastorGUI/wiki)
* [Documentation](https://github.com/dad72/CastorGUI/tree/master/doc)

## Features:

Select or create themes.

Create GUI (element html5 and css3):
* texture
* text
* textLink
* label
* window draggable (with title & button close)
* dialog (with button close)
* panel (simple dialog without button close)
* button
* slider
* progress
* meter (jauge de measure)
* select color (with compatitility IE and Edge)
* spinner
* radio button
* checkbox
* textfield
* textarea
* fieldset
* select with options
* systeme of database (localStorage and sessionStorage)

## Quick overview of use GUI

We must create a GUIManager that allows to recover the origin of the canvas and provides other basic thing.
A GUIManager can have a CSS that Formatted anything you want to customize your GUI.
You can also options to add a theme in the third parameter.

```javascript
var canvas = document.getElementById("game");
var css = "button {cursor:pointer;}";
var options = {themeRoot: "../style/", themeGUI: "default"};
var guisystem = new CASTORGUI.GUIManager(canvas, css, options);
```
Then we create interfaces items. eg textures and dialog with text:

```javascript
var myFunction = function() { alert("Yes, this work!"); };
var guiTexture = new CASTORGUI.GUITexture("life", "data/image.png", {w:50,h:50,x:10,y:0}, guisystem, myFunction);

var optionsDialog = {w: (guisystem.getCanvasSize().width - 20), h: 100, x: 8, y: (guisystem.getCanvasSize().height - 110)};
var dialog = new CASTORGUI.GUIDialog("dialog", optionsDialog, guisystem);
dialog.setVisible(true);

var text = new CASTORGUI.GUIText("textDialog", {size:15, text:"Display text here"}, guisystem, false);
dialog.add(text);
```
That's it. Everything works the same way with the same simplicity.

Demo in the playground : http://babylonjs-playground.azurewebsites.net/#12NLGN#41

## For use Database

```javascript
var db = new CASTORGUI.DataBase(false); // true if use sessionStorage else use localStorage (stockage temporary)
db.addTable("user");// create table
db.createField("user", "member", {"pseudo":"dad72"});// create field

db.selectItem("user", "member", "pseudo");// return dad72
db.updateItem("user", "member", "pseudo", "Romeo"); // update pseudo
db.selectItem("user", "member", "pseudo");// return Romeo

//if delete table:
db.deleteTable("member");
// if delete database:
db.deleteDataBase();
```

Demo in the playground : http://babylonjs-playground.azurewebsites.net/#12NLGN%232

