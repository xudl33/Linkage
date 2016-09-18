#Linkage

##Information

This is a jQuery plugin for linkage select2 elements.


##Using the Plugin


Using this plugin before Check:


+It needs jQuery;<a href="http://jquery.com/download/">Click for download jQuery</a>


+It needs select2;<a href="https://github.com/select2/select2/releases">Click for download select2</a>



##API

<pre>
	<code>
		var linkage = $(document).Linkage({
		"selectors" : ["#s1", "#s2"],
		"getLinkList" : function(context, selector, param){
			// return your options data
			}
		});
		linkage.setSelected("#s1", "A"); // set the selector's value
		linkage.getSelected("#s1"); // get the selector's value
		linkage.getValues(); // get all of selected selector's value
	</code>
</pre>



The details you can see the readme_zh.html or readme_en.html
