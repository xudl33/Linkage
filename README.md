<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html>
<head>
<title>Linkage Plugin Readme</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<style type="text/css">
BODY {
	font-size: 100%;
}

BODY,TD,TH {
	font-family: tahoma, verdana, arial, helvetica, sans-serif;
	font-size: 0.8em;
}

H2 {
	font-size: 10pt;
	font-weight: bold;
}

A:hover {
	text-decoration: none;
}

H1 {
	font-family: tahoma, arial, helvetica, sans-serif;
	font-size: 1.4em;
	font-weight: bold;
	border-bottom: 1px #ccc solid;
	padding-bottom: 2px;
}

TT {
	font-family: courier new;
	font-weight: bold;
	color: #060;
}

PRE {
	font-family: courier new;
	font-size: 100%;
}
P {
	display:block;
}
</style>
</head>
<body>

	<h1>Linkage Plugin Readme</h1>

	<h2>Information</h2>
	<p>
		This is a jQuery plugin for linkage select2 elements.
	</p>


	<h2>Using the Plugin</h2>
	<p>
		Using this plugin before Check:
		<ol>
			<li>It needs jQuery;<a href="http://jquery.com/download/">Click for download jQuery</a></li>
			<li>It needs select2;<a href="https://github.com/select2/select2/releases">Click for download select2</a></li>
		</ol> 
	</p>
	
	<h2>API</h2>
	<p>
		<p>
			var linkage = $(document).Linkage({ </br>
				"selectors" : ["#s1", "#s2", "#s3"],</br>
				"getLinkList" : function(context, selector, param){</br>
					// return your options data</br>
				}</br>
			});</br>
			<a href="demo/index.html">See demo</a>
		</p>
		<p>
			Options:<br/>
			$.fn.Linkage.defaults = {</br>
				"nvlOpt" : "Make Choice",// this is a label of the value is null,you can overwrite
				"selectors" : [], // select's selectors</br>
		        "values" : [], // default selected values</br>
		        "getOption" : Linkage.prototype.getOption, // you can overwirte this method to make yourself options</br>
		        "getLinkList" : Linkage.prototype.getLinkList, // you must be overwirte this method for your linkage</br>
			}</br>
		</p>
		<p>
			option shape:<br/>
			JSON = {"code":"xx","name":"xx"...} // the code and name is required, the other properties will be make in option's data
		</p>
		<p>
			Method:<br/>
			<table border="1">
				<thead>
					<th>method name</th>
					<th>params</th>
					<th>description</th>
				</thead>
				<tbody>
					<tr>
						<td>setSelected</td>
						<td>selector, val</td>
						<td>set the selector's value</td>
					</tr>
					<tr>
						<td>getSelected</td>
						<td>selector</td>
						<td>get the selector's value</td>
					</tr>
					<tr>
						<td>getValues</td>
						<td>none</td>
						<td>get all of selected selector's value</td>
					</tr>
				</tbody>
			</table>
		</p>
	</p>

	<h2>About author</h2>
	<p>
		[<a href='http://www.wisea.com'>Author: XuDL</a>] - email:
			xudl@wisea.com.cn
	</p>

</body>
</html>
