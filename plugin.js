/*
* @author gopi
*/
CKEDITOR.plugins.add('gomap',   
  {    
    requires: ['dialog'],
    init:function(editor) { 
		var pluginName = 'gomap';
		editor.addCommand(pluginName,new CKEDITOR.dialogCommand(pluginName));
		
		editor.ui.addButton("gomap",{
						label:'Google Map',
						command:pluginName,
						icon:this.path+"gomap.png"
		});
		CKEDITOR.dialog.add(pluginName,this.path+'dialogs/gomap.js');
	}
});