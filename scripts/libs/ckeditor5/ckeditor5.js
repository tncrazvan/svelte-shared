/*
npm install --save \
    @ckeditor/ckeditor5-dev-utils \
    @ckeditor/ckeditor5-editor-classic \
	 @ckeditor/ckeditor5-editor-inline \
	 @ckeditor/ckeditor5-editor-balloon \
    @ckeditor/ckeditor5-essentials \
    @ckeditor/ckeditor5-paragraph \
    @ckeditor/ckeditor5-basic-styles \
	 @ckeditor/ckeditor5-theme-lark \
*/
import InlineEditor from '@ckeditor/ckeditor5-editor-inline';
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic';
import BalloonEditor from '@ckeditor/ckeditor5-editor-balloon';
import DecoupledEditor from '@ckeditor/ckeditor5-editor-decoupled';

export default ckeditor5 = {
	inline: function(e,options){
		return InlineEditor
			.create(e)
			.catch( error => {
				if(options.onError)
					options.onError(error);
			});
	},
	classic: function(e,options){
		return ClassicEditor
			.create(e)
			.catch( error => {
				if(options.onError)
					options.onError(error);
			});
	},
	balloon: function(e,options){
		return BalloonEditor
			.create(e)
			.catch( error => {
				if(options.onError)
					options.onError(error);
			});
	},
	decoupled: function(e,options){
		if(!options.toolbar){
			console.error("A decoupled editor means that the content and the toolbar of your editor are decoupled, thus you need to specify the DOM element that is supposed to hold your toolbar in the options parameter in order for the editor to properly work. An example of options: ",{toolbar: new Object()});
			return false;
		}
		return DecoupledEditor
			.create(e)
			.then( editor => {
				options.toolbar.appendChild( editor.ui.view.toolbar.element );
		  } )
			.catch( error => {
				if(options.onError)
					options.onError(error);
			});
	},
};
