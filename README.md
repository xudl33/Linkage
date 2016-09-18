#Linkage

##Information

<p>
This is a jQuery plugin for linkage select2 elements.<br/>
这是一个使用jQuery和select2的联动插件。
</p>

##Using the Plugin
<p>
Using this plugin before Check:<br/>
1.It needs jQuery;<a href="http://jquery.com/download/">Click for download jQuery</a><br/>
2.It needs select2;<a href="https://github.com/select2/select2/releases">Click for download select2</a><br/>
</p>
<p>
使用插件前需要先检查:<br/>
1.它需要jQuery;<a href="http://jquery.com/download/">点击下载jQuery</a><br/>
2.它需要select2;<a href="https://github.com/select2/select2/releases">点击下载select2</a><br/>
</p>

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


<p>
The details you can see the readme_zh.html or readme_en.html<br/>
详细的内容请查看readme_zh.html 或者 readme_en.html
</p>
