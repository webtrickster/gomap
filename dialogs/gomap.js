(function(){
	
	var mapDialog = function(editor){
		return {
			title : 'Google maps',
			minWidth : '580px',
			minHeight : '550px',
			buttons: [CKEDITOR.dialog.okButton, CKEDITOR.dialog.cancelButton],
			onOk: function() {
				var zoomlevel = jQuery("#imap").contents().find("#mapzoom").val();
				var center = jQuery("#imap").contents().find("#mapcenter").val();
				console.log(center);
				var markercolor = (this.getContentElement("options","markercolor").getValue() != '')?this.getContentElement("options","markercolor").getValue():'blue';
				var width = (this.getContentElement("options","mapwidth").getValue() != '')?this.getContentElement("options","mapwidth").getValue():'380';
				var height = (this.getContentElement("options","mapheight").getValue() != '')?this.getContentElement("options","mapheight").getValue():'280';
				
				
				var url =  "http://maps.google.com/maps/api/staticmap?center="+center+"&markers=color:"+markercolor+"|"+center+"&zoom="+zoomlevel+"&size="+width+"x"+height+"&sensor=false";
				console.log(url);
				var img ="<img src=\""+url+"\" alt=\"map\">";  
				
				if(img.length > 0 ) 
					editor.insertHtml(img); 	
			} ,
			onLoad: function() {
				
					CKEDITOR.scriptLoader.load('https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js');
				},
			onShow: function() {
				var mapDiv = document.getElementById("map");
				var url = CKEDITOR.basePath+"plugins/gomap/map.html";
				mapDiv.innerHTML = "<iframe name=\"mapframe\" id=\"imap\" src=\""+url+"\"  style='width:380px;height:300px;' scroll=\"none\" />";	
				},
			onHide: function() {},
			onCancel: function() {},
			resizable: 'both',
			contents: [{
        id: 'map',  /* not CSS ID attribute! */
        label: 'Map',
        accessKey: 'M',
        elements:[
		{
			type: 'html',
			html:'<div>Location</div>',
				
		},{
			type: 'text',
			id: 'address',
			setup: function(element) {
				
			}
				
		}, {
			type: 'button',
			id: 'search',
			label: 'Search',
			labelLayout: 'horizontal',
			onClick: function() {
				var mapDiv = document.getElementById("imap");
				var loc = this.getDialog().getContentElement("map","address").getValue();
				mapDiv.src = CKEDITOR.basePath+"plugins/gomap/map.html?location="+loc;
				},
			setup: function(element) {
				
			},
			
		},{
			type: 'html',
			html:'<div id="map" style="width:380px;height:300px;"></div>',
				
		}]
    }, {
        id:'options',
        label:'options', 
        accessKey: 'O',
        elements:[
		   {
			type: 'text',
			id: 'markercolor',
			label: 'Marker Color: (e.g)(blue,green,yellow,orange)',
			labelLayout: 'vertical',
			setup: function(element) {
				//this.setValue(element.getAttribute('width'));	
			}
				
		},{
			type: 'text',
			id: 'mapwidth',
			label: 'Map Width: (e.g)(100,200)',
			labelLayout: 'vertical',
			setup: function(element) {
				//this.setValue(element.getAttribute('width'));	
			}		
		},{
			type: 'text',
			id: 'mapheight',
			label: 'Map Height: (e.g)(100,200)',
			labelLayout: 'vertical',
			setup: function(element) {
				//this.setValue(element.getAttribute('width'));	
			}
				
		}
		]
    }]
		}
	}
	
	CKEDITOR.dialog.add('gomap', function(editor) {
		return mapDialog(editor);
	});
		
})();