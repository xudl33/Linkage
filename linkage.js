/**
 * 多级联动控件
 * 
 * Created by XuDL(Wisea) on 2016/08/31
 */
;
(function(window, $, undefined) {
	"use strict";

	/** 构造函数 */
	var Linkage = function(element, options) {
		var $that = this;
		this.options = options;
		this.actors = [];
		// 设置联动对象
		$.each(this.options.selectors, function(i, n){
			if(n){
				$that.actors.push($(n));
			}
		});
		if (this.actors.length <= 0) {
			return;
		}
		// 初始显示联动的第一个控件数据
		var opList = this.options.getLinkList(this);
		this.getOptions(opList, this.actors[0].selector);
		
		// 注册联动事件
		$.each(this.actors, function(i, n){
			if(i < $that.actors.length -1){
				n.on('change', function(){
					$that.linkage(n, $that);
				});
			}
		});

		
		// 默认选中
		if(this.options.values && this.options.values.length>0){
			$.each(this.actors, function(i, n){
				if($that.options.values[i]){
					$that.setSelected(n.selector, $that.options.values[i]);
				}
			});
		}
	};
	
	Linkage.prototype = {
		constructor : Linkage,
		getLinkList : function(context, selector, param){
			var html = context.getOptions(null, selector);
			return html;
		},
		getOption : function(n){
			var opt = $("<option/>").attr("value", n.code).text(n.name);
			var hasData = false;
			$.each(n, function(i, name){
				if(i != "code" && i != "name"){
					hasData = true;
					return false;
				}
			});
			if(hasData){
				opt.data("data", n);
			}
			return opt;
		},
		getOptions:function(recordList, selector){
			var that = this;
			var res = [$("<option/>").attr("value", "").text(that.options.nvlOpt)];
			if(recordList){
				$.each(recordList, function(i, n){
					res.push(that.options.getOption(n));
				});
			}
			if(selector){
				$(selector).children().remove();
				$(selector).append(res);
			}
			// 默认请选择
			$(selector).select2("val", "");
			return res;
		},
		linkage : function(actor, context) {
			var actorIndex = 0;
			$.each(context.actors, function(i, n){
				if(n.selector == actor.selector){
					actorIndex = i;
					return false;
				}
			});
			var linkVal = $(actor).select2("val");
			// 如果选中是类似请选择或其他没有value的值，则需要清空联动框
			if(!linkVal){
				// 操作的不能是最后一个
				var cleanIndex = actorIndex + 1;
				if(cleanIndex <= context.actors.length - 1){
					$.each(context.actors, function(i, n){
						if(i >= cleanIndex){
							// 清空options
							$(n).empty();
							$(n).select2("val", "");
						}
					});
				}
				return;
			}
			
			var html = context.options.getLinkList(context, actor, linkVal);
			
			// 操作的不能是最后一个
			var linkIndex = actorIndex + 1;
			if(linkIndex <= context.actors.length - 1){
				$.each(context.actors, function(i, n){
					if(i > linkIndex){
						// 清空options
						$(n).empty();
						// 设置默认请选择
						$(n).select2("val", "");
					} else if(i == linkIndex){
						context.getOptions(html, n);
					}
				});
			}
		},
		setSelected : function(selector, val){
			$(selector).select2("val", val);
			$(selector).trigger('change');
		},
		getSelected : function(domSelector){
			if($(domSelector).length > 0){
				var select = $(domSelector).select2("data");
				if(select){
					var res = {"text" : $(domSelector).select2("data").text, "value" :$(domSelector).select2("val")};
					var data = $(select.element[0]).data("data");
					if(data){
						$.extend(res, {"data" : data});
					}
					return res;
				}
				return null;
			}
			return null;
		},
		getValues : function(){
			var Linkage = this.data("Linkage");
			if(Linkage){
				var res = [];
				$.each(Linkage.actors, function(i, n){
					if($(n).length > 0){
						var sec = Linkage.getSelected(n);
						if(sec){
							res.push(sec);
						}
					}
				});
				return res;
			}
			return null;
		}
	};
	
	/**
	 * 数据字典JQuery拓展
	 * 
	 * 参数：
	 * selectors:选择器
	 * values:默认选中
	 * getOption:制作option标签函数
	 * getLinkList:联动列表函数
	 * 
	 * 函数:
	 * setSelected(selector, val) 选择器,值
	 * getSelected(selector) 选择器
	 * getValues()
	 */
	$.fn.Linkage = function(option) {
		// 得到入参
		var args = arguments;
		// 注册子方法
		this.setSelected = Linkage.prototype.setSelected;
		this.getSelected = Linkage.prototype.getSelected;
		this.getValues = Linkage.prototype.getValues;
		
		// 保持链式
		return this.each(function() {
			// 初始化
			var $this = $(this), myTool = $this.data("Linkage"), options = $
					.extend({}, $.fn.Linkage.defaults,
							typeof option == "object" && option);
			if (!myTool) {
				$this.data("Linkage", (myTool = new Linkage(this, options)));
			}
			// 判断类型
			if (typeof option == "string") {
				// 调用函数
				if (myTool[option]) {
					// return myTool[option](Array.prototype.slice.call(args,
					// 1));//等价下一句的效果
					return myTool[option].apply(myTool, Array.prototype.slice
							.call(args, 1));
				} else {
					$.error("Method " + method + " does not exist on jQuery.Linkage");
				}
			}
		});
	};

	$.fn.Linkage.defaults = {
		"nvlOpt" : "请选择",
		"selectors" : [],
		"values" : [],
		"getOption" : Linkage.prototype.getOption,
		"getLinkList" : Linkage.prototype.getLinkList,
	};
})(window, window.jQuery);
