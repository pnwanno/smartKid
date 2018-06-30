/*        _/   _   _/_/_/_/_/  _/    _/   _/_/_/_/_/_/        _/        _/_/_/_    _/_/     _/    _/_/_/  _/_/    _/                 _/     _/_/_    _/    _/  _/_/  _/_/  _/_/_/ _/_/_/_/  _/_/_/
	 _/  _/    _/  _/     _/    _/         _/            _/        _/    _/  _/        _/  _/       _/   _/  _/                 _/ _/  _/  _/   _/_/  _/  _/    _/    _/  _/     _/    _/
	_/_/          _/     _/    _/         _/     /--/   _/        _/    _/  _/   _/_/ _/  _/       _/_//_/  _/         /--/    _/_/   _/  _/   _/ _/ _/  _/    _/_/  _/_/_/     _/      _/
       _/  _/        _/     _/    _/         _/            _/        _/    _/  _/    _/  _/  _/       _/   _/  _/                 _/ _/  _/  _/   _/  _/_/  _/    _/    _/         _/       _/
      _/    _/   _/_/_/      _/_/_/         _/            _/_/_/_/   _/_/_/     _/_/_/  _/    _/_/_/ _/   _/  _/_/_/_/           _/   _/  _/_/   _/   _/    _/_/ _/_/  _/         _/   _/_/_/

				  
				  |``````````````)
				  |             -)
	  ________________________|              )
         /			  |```````````````
        /			  |  O  0
       /			  |  |  |<  V____o    
==================================|==^==^========^====================================|
   This file was written by Promise Nwanno O, of KJUT Logical Koncepts----------------|
	mail me at pnwanno@gmail.com--------------------------------------------------|
			on 1:34 PM 4/3/2015  -----------------------------------------|
		last updated on 4:40 PM 12/22/2018 -----------------------------------|
   The use of this file is allowed only when this header is present-------------------|
======================================================================================|
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

(function (){
	var slide_in_names=["leftIn", "rightIn", "upIn", "downIn", "seIn", "nwIn", "neIn", "swIn", "fadeIn", "rotateLeftIn", "rotateRightIn", "zoomIn", "xZoomIn", "rotateXPlusIn", "rotateXMynusIn", "rotateYIn", "shrivelUpIn", "shrivelDownIn", "ngonYLeftIn", "ngonYRightIn", "ngonXTopIn", "ngonXBottomIn", "jumpIn"],
		slide_out_names=["leftOut", "rightOut", "upOut", "downOut", "seOut", "nwOut", "neOut", "swOut", "fadeOut", "rotateLeftOut", "rotateRightOut", "zoomOut", "xZoomOut", "rotateXPlusOut", "rotateXMynusOut", "rotateYOut", "shrivelUpOut", "shrivelDownOut", "ngonYLeftOut", "ngonYRightOut", "ngonXTopOut", "ngonXBottomOut", "jumpOut"];
	var o_O={//slide show
		_timer:"", selector: "", outclass:"", inclass:"", transition_time: "", delay: "", slidecb: function(){}, index:-1, slide4Me: slide4Me, stopShow: stopShow, restartShow: restartShow,
		slide_in_names:slide_in_names, slide_out_names:slide_out_names,
		slide4MeHelper:slide4MeHelper, pauseSlide4Me:false,

		//applies one of the animation names above to the element passed in
		//syntax animaTe(css_selector, animation_name, animation_duration)
		animaTe: animaTe,

		batchSlide:batchSlide, batchSlideHelper: batchSlideHelper, pause_batch_slide:false,

		//widgets
		//1. dropDialog: just like the "drop-down list" (can also be used for one) places a div just below (by default) your target element
		dropDialog: dropDialog, removeDropDialog: removeDropDialog,

		//2. toast-widget
		makeAToast:makeAToast,

		//3. spinner-widget functions
		scrollSpinner: scrollSpinner,
		//4. show-tip-widget
		showTip:showTip,


		//textEditor tool and functions
		textEditor:textEditor,
		action_script: false, img_location: false, get_media_script: false, appends:{}, save_script: false,
		tryClose:tryClose, savePage:savePage, loadHTml: loadHTml,
		beforeSave: function(){return true;}, afterSave: function(){ return true;},
		beforeClose: function(){return true;}, afterClose: function(){ return true;},
		popChars: popChars, realFormat:realFormat, changeFontSize: changeFontSize, changeFontFamily: changeFontFamily, undo: undo, redo: redo,
		insertChar:insertChar, selChar:selChar, 
		popLIOptions: popLIOptions, applyPopLIOptions:applyPopLIOptions,
		popColor:popColor,selColor:selColor,
		addBorder:addBorder, applyBorderOptions: applyBorderOptions,
		popMarginOptions: popMarginOptions, applyMarginOptions: applyMarginOptions,
		popPaddingOptions: popPaddingOptions, applyPaddingOptions: applyPaddingOptions,
		popTableOptions:popTableOptions, applyTableOptions: applyTableOptions,
		insertMedia: insertMedia, attachMedia: attachMedia, helpUpload: helpUpload,
		popHrefForm: popHrefForm, applyHref: applyHref,
		popHoverMenu: popHoverMenu, applyHoverOptions: applyHoverOptions,
		popCursorMenu: popCursorMenu, assignCursor: assignCursor,
		popShowMenu: popShowMenu, addShow: addShow, removeSlide: removeSlide, previewShow: previewShow, add2Scrn: add2Scrn,
		popMapOptions: popMapOptions, applyMapOptions: applyMapOptions,

		//objective test app
		testPlayer: testPlayer,
		test_questions: {}, question_no: 0,
		changeQuestion: changeQuestion, submit_script: "", submit_test: submit_test, test_id:"", submit_warning: "You want to submit your test?",
		test_appends:{}, test_cb: function(){}, beforeSubmit: function(){return true;},

		//timer display app
		timerApp: timerApp, updateTimerAppHandle: updateTimerAppHandle,

		//dom manipulation functions
		scrollToElement: scrollToElement,
		
		onePage:onePage, last_index: 0,
		
		/************************
		**miscellanous functions*
		*************************/
		//joins two objects and returns a single object with properties of both object
		//syntax mergeObj(obj1, obj2)
		mergeObj: mergeObj,
		//converts an object to string
		//syntax obj2Str(obj) returns a string containing the objects properties:value
		obj2Str:obj2Str,
		//converts a string to object
		str2Obj: str2Obj,
		objCreate: objCreate,
		
		//converts a string from its present case to another (specified) and returns the converted string
		//syntax changeTo(kase, str) kase is a string that can take any of the values: lowercase,uppercase,titlecase,sentencecase,camelcase
		changeTo:changeTo,

		//returns a boolean specifying if a string is in an array. Returns true if found and false if not
		//syntax isInArray(needle, haysack, ignorecase)
		//needle is the string to find, haysack is an array of strings to find the needle
		//if ignorecase==true then case is not considered during search else it case considered. When not specified, ignore_case will be considered as true
		isInArray:isInArray, 
		//reverses a string returns cba from abc
		strRev:strRev, 
		//returns a hex color value from an rgb color value
		//syntax is RGBToHex(R,G,B)
		RGBToHex:RGBToHex,
		//returns a lighter color from the hex color passed in
		//syntax lightenColor(hex_color, by) by is a number representing the amount of lightening needed
		lightenColor:lightenColor,
		//returns an rgb object from a raw rgb string
		//syntax rgbStringToObj(rgb_str) //where rgb_str is a raw rgb color string for instance rgb(255,0,255)
		rgbStringToObj:rgbStringToObj,
		//returns an rgb object from a hex color value
		//syntax toRGB(hex)
		toRGB:toRGB,
		//returns a hex value from a decimal input value
		hexVal:hexVal, 
		//returns a decimal value from a hex input value
		decVal:decVal, 
		//returns a padded string 
		//syntax padString(str, pad_with, pad_len) for example padString("1", "0", 3) returns 001
		padString:padString,
		getDescendants:getDescendants, 

		//used to upload a media file
		//syntax loadMedia()
		loadMedia:loadMedia,
		
		//used to validate a set of inputs based on the regular expression passed in the data-alt attribute
		//and data-correct attributes
		//syntax validateInput(input). The inputs should have at least the data-alt attribute and the attribute's value should be a regular expression of the expected value of the input
		//optionally you can also add the data-correct attribute whose value should a semi-colon (;) delimited possible wrongs values the user may enter and response to those wrong values
		//data-correct="[^0-9]:The '$' is an unaccepted character;^abc:Do not begin the input with abc", is an example of how to use data-correct to give intelligent response to user's wrong input. The "$" character present in the response section of the data-correct attribute will be replaced with the faulting characters found in the inputs
		validateInput:validateInput,

		//converts a number to word and returns the word representation
		//for example readNumber(1) returns "one" readNumber(1024) returns "one thousand and twenty four"
		readNumber:readNumber,

		//does the reverse of what readNumber does; converts from words to Number
		// for example word2Num("one") returns 1, ...
		word2Num:word2Num,

		enforceSlider: enforceSlider,
		slide:slide, slider_scroll_length: 100,

		//options for the tab-container switch-tab-process
		tab_inAnimation:"rotateYIn", tab_outAnimation:"leftOut", tab_aniDuration: 1,

		//used to set or retrieve cookie
		setCookieVal: setCookieVal, getCookieVal: getCookieVal
		};
	if(window.o_o){
		o_O= mergeObj(o_O, window.o_o);
	}
	window.o_o=o_O;

	function stopShow(){
		clearInterval(this._timer);
	}
	
	function restartShow(){
		var THIs=this
		if(THIs.selector.length){
			THIs.stopShow();
			setTimeout(function(){
				THIs.slide4Me(THIs.selector, THIs.outclass, THIs.inclass, THIs.transition_time, THIs.delay, true, THIs.cb);
			}, (Number(THIs.transition_time) + Number(THIs.transition_time)) * 1000);
			return true;
		}
		else return false;
	}
	function slide4Me(selector, options){
		var slides=$(selector), slide_parent=slides.parent();
		if(slide_parent.css("position")=="static")slide_parent.css({"position": "relative"});
		slide_parent.css("overflow", "hidden");

		options=options || {};
		if(typeof(options)=="string")options=JSON.parse(options);
		if(!options.delay) options.delay=5
		if(!options.duration) options.duration=3
		if(!options.out) options.out="leftOut";
		if(!options.in) options.in="rightIn";
		
		options.out=options.out.toString().split(",");
		options.in=options.in.toString().split(",");
		
		var highest=0, targ_slide, slide_i=[];
		slides.each(function(k){
			targ_slide= $(this);
			if(targ_slide.innerHeight(true)>highest)highest=targ_slide.innerHeight(true);
			targ_slide.attr("slide4me-index", k).css;
			slide_i.push(k)
		});
		slides.css({position: "absolute", left: "0px", top: "0px", "animation-duration": options.duration.toString().replace(/[^0-9.], ""/) + "s"});
		options.delay= (parseInt(options.delay) + parseInt(options.duration)) * 1000;
		options.slide_i=slide_i		

		$(selector).addClass("o_out");
		this.slide4MeOptions=options;
		this.slide4MeHelper(selector, options);
	}
	function slide4MeHelper(selector, options){
		var dis=this;
		if(!dis.pauseSlide4Me){
			var targ_out=options.out[Math.floor(Math.random() * options.out.length)],
				targ_in=options.in[Math.floor(Math.random() * options.in.length)];
			var go_out=$(selector).filter("[slide4me-index=" + options.slide_i[0] + "]").removeClass("o_oin " + options.out.join(" ") + " " + options.in.join(" ")).addClass("o_out " + targ_out);
			var go_in=$(selector).filter("[slide4me-index=" + options.slide_i[1] + "]").removeClass("o_out " + options.out.join(" ") + " " + options.in.join(" ")).addClass("o_oin " + targ_in);


			var first_si=options.slide_i.shift();
			options.slide_i.push(first_si);
			if(options.cbAfter){
				options.cbAfter(options.slide_i[0], go_in);
			}


			setTimeout(function(){
				if(options.cbB4){
					var go_in_next=$(selector).filter("[slide4me-index=" + options.slide_i[1] + "]");
					options.cbB4(options.slide_i[1], $(selector), go_in_next);
				}
				dis.slide4MeHelper(selector, options);
			}, options.delay);
		}
	}
	function slide4MeX(selector, outclass, inclass, transition_time, delay, restart, cb){
		var targs= $(selector); var kounter=0;
		targs.attr("class", "o_out").filter(":last").attr("class", "o_oin");
		transition_time=parseFloat(transition_time).toString().replace(/\D+/,"");
		delay=parseFloat(delay).toString().replace(/\D+/,"");

		if(restart && this.selector.length){
			targs=this.selector;
			if(targs.length<2) return; //no slide show because we do not have enough elements to create a slide show
			outclass=this.outclass;
			inclass=this.inclass;
			transition_time=this.transition_time;
			delay=this.delay;
			cb= this.slidecb;
			kount=this.index;
		}
		else{
			delay = parseInt(transition_time) + parseInt(delay);
			if(targs.length<2) return; //no slide show because we do not have enough elements to create a slide show
			this.selector=targs;
			this.outclass=outclass;
			this.inclass=inclass;
			this.transition_time=transition_time;
			this.delay=delay;
			this.slidecb=cb;
		}
		
		targs.css({"position":"absolute", display:"block", "top" : "0px", "left" : "0px", width: "100%", height: "100%"}).parent().css({"overflow": "hidden", "position" : "relative", "perspective" : "1200px"});

		if(typeof(outclass)!="object" || typeof(inclass)!="object"){
			return;
		}
		showImg(0);

		this._timer=setInterval(
			function(){
				var pt=movePointer();
				if(cb)
					cb(targs[pt], pt, targs.length, transition_time);
				$(targs[pt]).css({"animation-duration": transition_time + "s"});
				showImg(pt);
			},
			delay * 1000);
		function movePointer(){
			if(kounter==targs.length-1){
				kounter=0;
			}
			else{
				kounter++;
			}	
			this.index= kounter;
			return kounter;
		}
		function showImg(_which){
//			targs.attr("class", "o_o");
			targs.each(
			function(k, ele){
				if(k==_which){ 
					ele.className=inclass[Math.floor(Math.random() * inclass.length)] + " o_oin";
					$(ele).css({"z-index":"2"});
					if(_which == 0){ 
						targs[targs.length-1].className=outclass[Math.floor(Math.random() * outclass.length)] + " o_out";
						$(targs[targs.length-1]).css({"z-index":"1"});
					}
					else{
						targs[_which - 1].className=outclass[Math.floor(Math.random() * outclass.length)] + " o_out";
						$(targs[_which - 1]).css({"z-index":"1"});
					}
				}
				
				//else $(ele).addClass(outclass[Math.floor(Math.random() * outclass.length)]).removeClass(inclass[Math.floor(Math.random() * inclass.length)]);
			});			
		}
	}

	function animaTe(targ, ani_name, dur, cb){
		dur= dur || 1;
		dur= dur.toString().replace(/[^0-9.]/, "") + "s";
		var disp= "", store_overflow=$(targ).parent().css("overflow");
		if(/out/i.test(ani_name)){
			disp="none";
		}
		else{
			disp="inline-block";
			$(targ).css("display", disp);
		}
		$(targ).css({"animation-duration" : dur, "-webkit-animation-duration" : dur, "-moz-animation-duration" : dur}).addClass(ani_name).parent().css({"overflow": "hidden", "perspective" : "1200px"});
		setTimeout(function(){$(targ).removeClass(ani_name).css("display", disp).parent().css("overflow", store_overflow); if(cb)cb();}, dur.toString().replace("s", "") * 1000);
	}

	function batchSlide(targ, options){
		if(!$(targ)[0]){
			if(window.console){
				console.log("Invalid css selector for batchSlide");
			}
			return;
		}
		var cont=$(targ);
		if(!cont.find(">*")[0]){
			if(window.console){
				console.log("No elements to slide");
			}
			return;
		}
		if(!options){
			if(window.console){
				console.log("batchSlide function needs an options object as its second argument");
			}
			return;
		}
		cont.addClass("o-o-batch-slide-container");
		var targ_right=0, tallest=0,
			all_left=[];

		cont.find(">*").each(function(k){ 
			all_left.push(targ_right - $(this).outerWidth(true));
			$(this).css("left",  targ_right + "px");
			targ_right= parseInt($(this).css("left").replace("px", "")) + $(this).outerWidth(true);
			if(parseInt($(this).outerHeight(true))> tallest){
				tallest= parseInt($(this).outerHeight(true));
			}
		});
		cont.height(tallest);
		options.lefts=all_left;
		this.batchSlideHelper(targ, options);
	}
	function batchSlideHelper(targ, options){
		targ= $(targ);
		if(!options.direction){
			options.direction="left";
		}
		if(options.direction.toString().toLowerCase()=="right"){
			var first_l=options.lefts.shift();
			options.lefts.push(first_l);
		}
		else if(options.direction.toString().toLowerCase()=="left"){
			var last_l=options.lefts.pop();
			options.lefts.unshift(last_l);
		}
		var targ_left, move_left,
			last_child= targ.find(">*:last"),
			first_child= targ.find(">*:first");

		targ.find(">*").each(function(k){
			$(this).animate({left: options.lefts[k] + "px"}, 200);
		});
var dis=this;
		if(this.pause_batch_slide===false){
			setTimeout(function(){dis.batchSlideHelper(targ, options)}, options.delay - 200);
		}
	}

//widget section of this document
	function removeDropDialog(){
		$(".o_o-dropdlg").remove();
	}
	

	function dropDialog(targ_selector, content, options){
		var targ_ele;
		if(targ_ele=$(targ_selector)[0]){
			var targ_rect=targ_ele.getBoundingClientRect(),
				v_width=$(window).width(), v_height=$(window).height(),
				left_space=v_width - targ_rect.left,
				left_space_down=v_height- targ_rect.top;
			$(".o_o-dropdlg").remove();
			$("<div class='o_o-dropdlg'>" + content + "</div>").appendTo("body");
			var o_o_dlg=$(".o_o-dropdlg"), dlg_rect=o_o_dlg[0].getBoundingClientRect();
		
			if(typeof(options)=="object"){
				if(typeof(options.custom_css)=="object"){
					o_o_dlg.css(options.custom_css);
				}
			}

			if(dlg_rect.width>left_space) o_o_dlg.css("left", targ_rect.right - o_o_dlg.outerWidth(true));
			else o_o_dlg.css("left", targ_rect.left);

			if(dlg_rect.height>left_space_down) o_o_dlg.css("bottom", targ_rect.top);
			else o_o_dlg.css("top", targ_rect.bottom);

			$("html").click(function(evt){
				if(!o_o_dlg.find(evt.target)[0] && !$(evt.target).hasClass("o_o-dropdlg") && evt.target!=targ_ele){
					o_o_dlg.remove();
				}
			});
		}
	}
	
	function makeAToast(toast, dur, custom_css, cb){
		var dev_width=$(window).width();
		var tw=dev_width>640 ? "30%" : "70%", tl= dev_width >640 ? "35%" : "15%";
		var targ_css={position:"fixed", top:"45%", left: tl, width: tw, border: "1px solid beige", "border-radius" : "2px", "background-color": "aliceblue", color: "darkblue", overflow:"auto", "text-align":"center", "z-index" : "9999", padding: "5px 0px", display:"none"};
		
		if(typeof custom_css == "object"){
			targ_css= mergeObj(targ_css, custom_css);
		}
		$("#o_otoast").remove(); //we do not mean to be rude
		$("body").append("<div id='o_otoast'>" + toast + "</div>");
		var toast_ele= $("#o_otoast").css(targ_css).fadeIn("slow");
		dur= dur ? parseFloat(dur.toString().replace(/[^0-9.]/g,"")) : 3;
		window.setTimeout(function(){toast_ele.fadeOut("slow", function(){toast_ele.remove()}); if(cb){cb();}}, dur * 1000);
	}

	function showTip(targ_selector,msg,delay,dur,cb){
		var targ; delay= delay? delay * 1000: 100; dur= dur? dur * 1000 : 3000;
		if(targ=$(targ_selector)[0]){
			var tip_css={"position" : "fixed", "background-color": "ghostwhite", color: "black", border: "1px solid grey", "border-radius": "4px", padding: "7px", "z-index": "9999", display: "none", "font-family": "calibri", "font-size": "18px"},
				pointer_css={width: "0px", height: "0px", border: "12px solid transparent", "border-bottom-color":"black", "position" : "absolute", "bottom": "100%", left:"0%"};
			
			var targ_rect=targ.getBoundingClientRect();
			$("body").append("<div id='o_otip'><span id='o_otippointer'></span>" + msg + "</div>");
			var tip_ele=$("#o_otip").css(tip_css);
			window.setTimeout(function(){
				//are you visible?
				if(targ_rect.top>-1 && targ_rect.bottom<window.innerHeight - tip_ele.height() && targ_rect.left>-1 && targ_rect.right<window.innerWidth){
					activateTip();
				}
				else{
					scrollToElement(targ_selector,true);
					targ_rect=targ.getBoundingClientRect();
					window.setTimeout(activateTip, 400);
				}
				function activateTip(){
					targ_rect=targ.getBoundingClientRect();
					tip_css["top"] = targ_rect.bottom + 12; tip_css["left"]=targ_rect.left;
					tip_ele.css(tip_css).show("slow", function(){
						window.setTimeout(function(){$("#o_otip").fadeOut("slow", function(){$("#o_otip").remove()})}, dur);
					});
					$("#o_otippointer").css(pointer_css);
				}
			}, delay);
		}
	}

	function textEditor(targ, options){
		if(!/^\#[a-z_]+[0-9]*/i.test(targ)){
			throw new Error("textEditor requires one argument which has to be the Id of an element");
			return;
		}
		if(typeof(options)!="object"){
			throw new Error("textEditor requires that the second argument is an object");
		}
		if(!options.action_script){
			if(window.console) console.warn("Please specify a value for the 'action_script' options' property\nThe 'action_script' should have a value indicating the path to a back-end script where uploads would be handled");
		}
		if(!options.img_location){
			if(window.console) console.warn("Please specify a value for the 'img_location' options' property\nThe 'img_location' should have a value indicating the path to where images for display are stored");
		}
		if(!options.get_media_script){
			if(window.console) console.warn("Please specify a value for the 'get_media_script' options' property\nThe 'get_media_script' should have a value indicating the path to a back-end script where image gallery can be retrieved");
		}
		if(!options.save_script){
			if(window.console) console.warn("Please specify a value for the 'save_script' options' property\nThe 'save_script' should have a value indicating the path to a back-end script where the html content of the text editor are saved");
		}
		if(options.action_script) this.action_script=options.action_script;
		if(options.img_location) this.img_location=options.img_location;
		if(options.get_media_script) this.get_media_script= options.get_media_script;
		if(options.appends) this.appends=options.appends;
		if(options.beforeSave) this.beforeSave= options.beforeSave;
		if(options.afterSave) this.afterSave= options.afterSave;
		if(options.beforeClose) this.beforeClose= options.beforeClose;
		if(options.afterClose) this.afterClose= options.afterClose;
		if(options.save_script) this.save_script=options.save_script;
		if(window.o_o_textEditor)
			window.o_o_textEditor.push(this);
		else window.o_o_textEditor=[this];
		var kount= window.o_o_textEditor.length-1;
		var tg=targ;
		targ=$(targ);
		if(targ[0]){
			var tid= targ.attr("id");
			targ.append("<div class='scrn_dlg'></div><div class='col_dlg'></div><div class='img_dlg'></div><style class='page_parser'></style><style class='mobile_rules'>@media only screen and (max-width:640px){}</style>");
			var editor_str= "<div class='tool_bar'>";
			editor_str += "<label for='font_size'>Font size(px)</label> &nbsp; <input type='text' class='font_size' value='16' onblur=\"o_o.changeFontSize('" + tg + "')\" style='width:24px;'>";
			editor_str += "<label for='font_family'>Font family</label> &nbsp; <input type='text' class='font_family' value='times new roman' onblur=\"o_o.changeFontFamily('" + tg + "')\">";
			editor_str += "<label for='file_name'>Note Name</label> &nbsp; <input type='text' class='file_name' value='Note01'>";
			editor_str += "<input type='button' value='Close' data-obj=\"" + kount + "\" onclick=\"o_o_textEditor[$(this).attr('data-obj')].tryClose('" + tg + "');\">";
			editor_str += "<br /><span class='kj-icon kj-save icon-space' title='Saves changes to page' data-obj=\"" + kount + "\" onclick=\"o_o_textEditor[$(this).attr('data-obj')].savePage('" + tg + "')\"></span>";
			editor_str += "<span class='kj-icon kj-chars icon-space' title='Inserts other useful and popular characters not readily available from your keyboard' onclick=\"o_o.popChars('" + tg + "')\"></span>";
			editor_str += "<span class='kj-icon kj-undo icon-space' title='Undoes last action (ctrl Z)' onclick=\"o_o.undo('" + tg + "')\"></span>";
			editor_str += "<span class='kj-icon kj-redo icon-space' title='Redoes last undone action (ctrl R)' onclick=\"o_o.redo('" + tg + "')\"></span>";
			editor_str += "<span class='kj-icon kj-bold icon-space' title='Bolds selection' onclick=\"o_o.realFormat('" + tg + "', 'font-weight: bold', 'font-weight: normal', 'kj-bold')\"></span>";
			editor_str += "<span class='kj-icon kj-underline icon-space' title='Underlines selection' onclick=\"o_o.realFormat('" + tg + "', 'text-decoration: underline', 'text-decoration: none', 'kj-underline')\"></span>";
			editor_str += "<span class='kj-icon kj-italic icon-space' title='Italizes selection' onclick=\"o_o.realFormat('" + tg + "', 'font-style: italic', 'font-style: normal', 'kj-italic')\"></span>";
			editor_str += "<span class='kj-icon kj-left-align icon-space' title='Left-aligns selection' onclick=\"o_o.realFormat('" + tg + "', 'text-align: left', 'text-align: left', 'kj-left-align' ); \"></span>";
			editor_str += "<span class='kj-icon kj-center-align icon-space' title='Center-aligns selection' onclick=\"o_o.realFormat('" + tg + "', 'text-align: center', 'text-align: left', 'kj-center-align' );\"></span>";
			editor_str += "<span class='kj-icon kj-right-align icon-space' title='Right-aligns selection' onclick=\"o_o.realFormat('" + tg + "', 'text-align: right', 'text-align: left', 'kj-right-align' ); \"></span>";
			editor_str += "<span class='kj-icon kj-bullet-list icon-space' title='Inserts a bullet list' onclick=\"o_o.popLIOptions('" + tg + "', 'bullet')\"></span>";
			editor_str += "<span class='kj-icon kj-number-list icon-space' title='Inserts a numbered list' onclick=\"o_o.popLIOptions('" + tg + "', 'numbering')\"></span>";
			editor_str += "<span class='kj-icon kj-text-color icon-space' title='Changes selection text color' onclick=\"o_o.popColor('" + tg + "', 'color')\"></span>";
			editor_str += "<span class='kj-icon kj-bg-color icon-space' title='Changes selection background color' onclick=\"o_o.popColor('" + tg + "', 'background color')\"></span>";
			editor_str += "<span class='kj-icon kj-border icon-space' title='Changes selection border style' onclick=\"o_o.addBorder('" + tg + "')\"></span>";
			editor_str += "<span class='kj-icon kj-margin icon-space' title='Moves selection away from other elements' onclick=\"o_o.popMarginOptions('" + tg + "')\"></span>";
			editor_str += "<span class='kj-icon kj-padding icon-space' title=\"Moves selection's content away from other its borders\" onclick=\"o_o.popPaddingOptions('" + tg + "')\"></span>";
			editor_str += "<span class='kj-icon kj-table icon-space' title='Inserts a table' onclick=\"o_o.popTableOptions('" + tg + "')\"></span>";
			editor_str += "<span class='kj-icon kj-sup-script icon-space' title='Changes selection to super script' onclick=\"o_o.realFormat('" + tg + "', 'vertical-align: super;font-size: smaller', 'vertical-align: unset;font-size: inherit', 'kj-sup-script')\"></span>";
			editor_str += "<span class='kj-icon kj-sub-script icon-space' title='Changes selection to sub script' onclick=\"o_o.realFormat('" + tg + "', 'vertical-align: sub;font-size: smaller', 'vertical-align: unset;font-size: inherit', 'kj-sub-script')\"></span>";
			editor_str += "<span class='kj-icon kj-media icon-space' title='Inserts a new media file' data-obj='" + kount + "' onclick=\"o_o_textEditor[$(this).attr('data-obj')].insertMedia('" + tg + "')\"></span>";
			editor_str += "<span class='kj-icon kj-link icon-space' title='Makes selection a link to another web address' onclick=\"o_o.popHrefForm('" + tg + "')\"></span>";
			editor_str += "<span class='kj-icon kj-hover icon-space' title='Add effects to selection when mouse touches it' onclick=\"o_o.popHoverMenu('" + tg + "')\"></span>";
			editor_str += "<span class='kj-icon kj-cursor icon-space' title='Select a cursor type for the given selection' onclick=\"o_o.popCursorMenu('" + tg + "')\"></span>";
			//<span class='kj-icon kj-help icon-space' title='Help' onclick='popHoverMenu()'></span>
			editor_str += "<span class='kj-icon kj-slide icon-space' title='Insert a slide show' onclick=\"o_o.popShowMenu('" + tg + "')\"></span>";
			editor_str += "<span class='kj-icon kj-map icon-space' title='Add a location map to your page' onclick=\"o_o.popMapOptions('" + tg + "')\"></span>";
			editor_str += "</div>";
		
			editor_str += "<div class='scrn_contain'>";
			editor_str += "<div contenteditable='true' class='note_content' autofocus tabindex='1'>&nbsp;</div>";
			editor_str += "</div>";
			targ.addClass("o-o-scrn").append(editor_str);
			var note_scrn=targ.find(".note_content");
			note_scrn.bind("keydown mouseup", editorFocused).bind("paste", interceptPaste);
			note_scrn[0].onkeyup=textBoxKeyUp;

			$(".kj-icon").bind("mousedown click", preventDefFunction);
		
		
			//register our window shortcuts
			window.onbeforeunload=function(evt){
				if(changes){
					for(var k in changes){
						if(changes[k].start_html){
							if(changes[k].start_html.replace(/["]/g, "'") != $("#" + k + " .note_content").html().replace(/["]/g, "'")){
								var basic_txt=changes[k].start_html.replace(/^\<div[^>]+?\>/, "").replace(/\s\<\/div\>$/, "");
								if(basic_txt==$("#" + k + " .note_content").html().replace(/["]/g, "'")){
									return;
								}
								return true;
							}
						}
					}
				}
			}
			$(window).keydown(function(evt){
				if(active_sel){
					if(active_sel.rangeCount){//make sure we have a focus as in the window selection is on a node to avoid error
					//rangeCount returns the number of ranges in selection. so a value of 0 would mean no node is being focused on  by the window selection
						var range=active_sel.getRangeAt(0),
							pel=range.commonAncestorContainer;
						if(pel.nodeType!=1){
							pel=pel.parentElement;
						}
						var targ, found_targ=false;
						if(targ=$(".note_content").find(pel)[0]){ //in order not to deprive the window of its default duties unnecessarily, we must make sure any of our texteditors currently has the focus
							$(targ).parents().each(function(){
								if(!found_targ){
									if($(this).hasClass("o-o-scrn")){
										found_targ= this;
									}
								}
							});
							if(evt.ctrlKey){
								if(evt.keyCode==90){//ctrl + Z
									evt.preventDefault();
									$(found_targ).find(".kj-undo").trigger("click");
									//return focus back to scrn
									active_sel.removeAllRanges();
									active_sel.addRange(active_range);
									active_sel.collapse(active_range.commonAncestorContainer, 1);
								}
								else if(evt.keyCode==82){//ctrl + R
									evt.preventDefault();
									$(found_targ).find(".kj-redo").trigger("click");
									//return focus back to scrn
									active_sel.removeAllRanges();
									active_sel.addRange(active_range);
									active_sel.collapse(active_range.commonAncestorContainer, 1);
								}
							}
						}
	
					}
				}
			});
		}
	}

 	function scrollToElement(targ_selector, centralise, cb){
		targ_selector= $($(targ_selector)[0]);
		if(!targ_selector[0]){throw new Error("scrollToElement requires a css selector as its first argument. Provide a proper css selector");}
		var targ_p= targ_selector.parents(), overflow_p, use_height, use_width;
		targ_p.each(function(){
			if(!overflow_p){
				if(this.scrollHeight>this.offsetHeight && this.tagName!="BODY" && this.tagName!="HTML") overflow_p=this;
			}
		});
		if(overflow_p){
			overflow_p=$(overflow_p);
			if(overflow_p.css("position")=="static") overflow_p.css("position", "relative");
			overflow_p.scrollTop(targ_selector.position().top).scrollLeft(targ_selector.position().left);
			scrollToElement(overflow_p, centralise, cb);
			return false;
		}
		use_height=$("body")[0].scrollHeight; use_width=$("body")[0].scrollWidth;
		var targ_rect=targ_selector[0].getBoundingClientRect();
		if(centralise==true){
			$("html,body").animate({scrollTop:(use_height/2), scrollLeft:(use_width/2)}, 300, function(){if(cb) cb();});
		}
		else if(typeof centralise=="object"){
			$("html,body").animate({scrollTop:targ_selector.offset().top - centralise[1],scrollLeft:targ_selector.offset().left - centralise[0]}, 300, function(){if(cb) cb();});
		}
		else $("html,body").animate({scrollTop:targ_selector.offset().top, scrollLeft:targ_selector.offset().left}, 300, function(){if (cb)cb();});
	}


//misc
	function o_oforEach(_array_or_node, _do){
		var kount=_array_or_node.length;
		for(var k=0; k<kount; k++){	            	
			_do(_array_or_node[k]);
		}
	}

	 //gets the descendants of the DOM Element passed in as argument
	 function getDescendants(ele){
		 var ret=[];			 
		 var ch=ele.children;			 
		 o_oforEach(ch, function(e){
			 if(e.children[0]){ret.push(e); 
							   var recurse=getDescendants(e);
							  o_oforEach(recurse, function(el){ret.push(el);})}
			 else ret.push(e) ; 
		 });			 
		 return ret;
	 }
	
 /*tries to search for DOM elements using the available css selectors and returns an array(against the nodelist returned by the querySelectorAll) of matched elements or an empty array
 not all css selectors have been covered here but major selectors may have been covered		
 */
		 function findElement(_selector, context){		
			 _selector=trim(_selector.toString().replace(/\s{2,}/g," "));
			 
			 context=context==null? window.document.body : context;
			 var desc=getDescendants(context);
			 	 var pats=[{name: "klass", pat:/^\.\w+/, mtd: function(klass){desc=desc.filter(function(e){return e.classList.contains(klass.substr(1));}); }},
					  {name: "tag", pat:/^\w+/, mtd: function(tag){desc=desc.filter(function(e){return e.tagName.toString().toLowerCase()==tag.toLowerCase();})}},
					  {name: "descendant", pat:/^\s/, mtd: function(){var new_desc=[]; desc.forEach(function(e){var d=getDescendants(e); if(d.length>0)new_desc=new_desc.concat(d); }); desc=new_desc;}},
					  {name: "id", pat:/^\#\w+/, mtd: function(id){desc=desc.filter(function(e){return e.id==id.substr(1);});}},
					  {name: "child", pat:/^\>/, mtd: function(){var new_desc=[]; desc.forEach(function(e){var d=e.children; if(d.length>0){Array.prototype.forEach.call(d, function(el){new_desc.push(el);});} }); desc=new_desc; }},
					  {name: "attribute selector", pat:/^\[(\w+)([~^$* ]?=\s?)['"]?([#-&(-~)!]+)['"]?\]/, mtd: function(attr_sel){desc=desc.filter(function(e){var _attr=e.getAttribute(attr_sel[1]); if(trim(attr_sel[2])=="=") return _attr==attr_sel[3]; else if(trim(attr_sel[2])=="*=") {if(_attr) return _attr.match(new RegExp(attr_sel[3].replace(/(\W)/g, "\\$1")))} else if(trim(attr_sel[2])=="^=") {if(_attr) return _attr.match(new RegExp("^" + attr_sel[3].replace(/(\W)/g, "\\$1")))} if(trim(attr_sel[2])=="$=") {if(_attr) return _attr.match(new RegExp(attr_sel[3].replace(/(\W)/g, "\\$1") + "$")) }  })}},
					  {name: "adjacent", pat:/^\+\w+/, mtd: function(adj){var found=false; var new_desc=[]; desc.forEach(function(e){var d=e.children; found=false; if(d.length>0){Array.prototype.forEach.call(d, function(el){if(el.tagName.toLowerCase()==adj.substr(1).toLowerCase() && found===false){new_desc.push(el); found=true;}});} }); desc=new_desc; }}
					  ];
			 var match;
			 while (_selector){
				 match=null;
				 for(var k=0; k<pats.length; k++){
					 if(match=pats[k].pat.exec(_selector)){
						 if(pats[k].name=="attribute selector") pats[k].mtd(match);
						 else pats[k].mtd(match[0]);						 
						 _selector=_selector.replace(match[0],"");
						 break;
					 }					 
				 }				 
				 if(!match) return [];				 
			 }
			 return desc;
		 }
	
	function scrollSpinner(ev){
		var evt=ev || window.event;
		var targ=evt.target ? $(evt.target) : $(evt.srcElement), nne, txt_box, val_range, targ_index;
		if(targ.hasClass("o-o-spinner-up") || targ.hasClass("o-o-spinner-down")){
			nne=targ.parent(); txt_box= nne.find(".o-o-spinner-text");
			val_range=nne.attr("data-value") ? nne.attr("data-value") : nne.attr("data-from") + "\\#" + nne.attr("data-to");

			if(val_range.indexOf("\n")>-1){//custom spin (word spin)
				val_range=val_range.split("\n");
				if(txt_box.html()){
					targ_index= txt_box.attr("data-index") || val_range.indexOf(txt_box.html()) || 0; //returns the data-index or indexOf the txt_box content if the txt_box() has been initialised by the user or 0 as a fallback
					if(targ.hasClass("o-o-spinner-up")){
						if(targ_index > 0)
							txt_box.html(val_range[--targ_index]);
						else {
							txt_box.html(val_range[val_range.length-1]);
							targ_index=val_range.length-1;
						}	
					}
					else if(targ.hasClass("o-o-spinner-down")){
						if(targ_index < val_range.length - 1)
							txt_box.html(val_range[++targ_index]);
						else{
							txt_box.html(val_range[0]);
							targ_index=0;
						}
					}
					txt_box.attr("data-index", targ_index);
				}
				else{
					txt_box.html(val_range[0]);
					txt_box.attr("data-index", "0");
				}
			}
			else if(val_range.indexOf("\\#")>-1){//regular spin (number spin)
				val_range=val_range.split("\\#");
				if(txt_box.html()){
					if(targ.hasClass("o-o-spinner-up")){//spin up
						if(parseInt(txt_box.html()) < parseInt(val_range[1]) && typeof(nne.attr("data-to")) =="string" ){
							txt_box.html(parseInt(txt_box.html()) + 1);		
						}
						else if(typeof(nne.attr("data-to")) != "string"){ //spin without limit
							txt_box.html(parseInt(txt_box.html()) + 1);
						}
					}
					else{//spin down
						if(parseInt(txt_box.html()) > parseInt(val_range[0]) && typeof(nne.attr("data-from")) == "string"){
							txt_box.html(parseInt(txt_box.html()) - 1);
						}
						else if(typeof(nne.attr("data-from"))!="string"){//spin without limit
							txt_box.html(parseInt(txt_box.html()) - 1);
						}
					}
				}
				else{
					txt_box.html(parseInt(val_range[0]));
				}
			}
		}
	}	

	function mergeObj(obj1, obj2){
		for(var k in obj2){
			obj1[k]=obj2[k];
		}
		return obj1;
	}

	function obj2Str(obj, options){
		options=options || {delimiter: [":", ";"], encode_uri_component:false};
		var delimiter=options.delimiter;
		var ret_str="";
		if(typeof(obj)=="object"){//noting that functions also belongs to this type
			for(var k in obj){
				if(ret_str!="") ret_str += delimiter[1];
				if(options.encode_uri_component) ret_str += k + delimiter[0] + encodeURIComponent(obj[k]);
				else ret_str += k + delimiter[0] + obj[k];
			}
		}
		return ret_str;
	}

	function str2Obj(str){
		var ret_obj={},
			brk_str=str.toString().split(";"),
			kount=brk_str.length,
			loc_brk;
		if(str=="") return ret_obj;
		for(var k=0; k<kount; k++){
			loc_brk=brk_str[k].split(":");
			ret_obj[loc_brk[0]] = loc_brk[1];
		}
		return ret_obj;
	}

	function changeTo(kase, str){	
		str= str.toString().toLowerCase();
		var brk=str.split(" ");
		switch(kase.toString().toLowerCase().replace(/\s/g, "")){
			case "lowercase":
				return str; break;
			case "uppercase" :
				return str.toUpperCase(); break;
			case "sentencecase":				
				brk[0]=brk[0].toString().substr(0,1).toUpperCase() + brk[0].toString().substr(1, brk[0].toString().length-1);
				return brk.join(" "); break;
			case "titlecase":
				$.each(brk, function(k,j){brk[k]=j.toString().substr(0,1).toUpperCase() + j.toString().substr(1, j.toString().length-1);});
				return brk.join(" "); break;
			case "camelcase":
				$.each(brk, function(k,j){if(k>0)brk[k]=j.toString().substr(0,1).toUpperCase() + j.toString().substr(1, j.toString().length-1);});
				return brk.join(" "); break;
		}
	}

	function isInArray(needle, haysack,ignore_case){
		ignore_case= ignore_case===false ? ignore_case : ignore_case=true;
		for(var k=0; k<haysack.length; k++){
			if(ignore_case===true){
				if(needle.toString().toLowerCase()==haysack[k].toString().toLowerCase())
					return true;
			}
			else if(ignore_case===false){						
				if(needle==haysack[k])
					return true;
			}
		}
		return false;
	}

	function RGBToHex(R,G,B){
		return "#" + hexVal(Number(R)) + hexVal(Number(G)) + hexVal(Number(B));
	}

	function lightenColor(hex_color, by){
		var rgb=toRGB(hex_color);
		rgb.R=(Number(rgb.R) + Number(by)) % 255;
		rgb.G=(Number(rgb.G) + Number(by)) % 255;
		rgb.B=(Number(rgb.B) + Number(by)) % 255;
		return rgb;
	}

	function rgbStringToObj(rgb_str){
		var rgb_comp=/\d+/g;
		return rgb_str.match(rgb_comp);
	}

	function toRGB(hex){
		var rgb={R:0, G:0, B:0};	
		hex=hex.toString().replace(/\#?/,"");
		rgb.R=decVal(hex.substr(0,2));
		rgb.G=decVal(hex.substr(2,2));
		rgb.B=decVal(hex.substr(4,2));
		return rgb;
	}

	function decVal(hex){
		hex=hex.toString();
		var len=hex.length;
		var ret_val=0; var dec_equiv=0;
		for(var k=0; k<len; k++){
			dec_equiv=decEquiv(hex[k]);
			ret_val += Number(dec_equiv) *  Math.pow(16, len-k -1);
		}
		function decEquiv(_hex){
			switch(_hex){
				case "a" :return 10 ;
				case "b" : return 11 ;
				case "c" : return 12 ;
				case "d" : return 13 ;
				case "e" : return 14 ;
				case "f" : return 15 ;
				default : return _hex;
			}
		}
		return ret_val;
	}

	function hexVal(dec){	
		dec=Number(dec);	
		var ret_val="";
		while(dec){	
			ret_val += hexEquiv(dec % 16);
			dec=parseInt(dec/16);		
		}
		function hexEquiv(_dec){
			switch(_dec){
				case 10:return "a";
				case 11:return "b";
				case 12:return "c";
				case 13:return "d";
				case 14:return "e";
				case 15:return "f";
				default: return _dec;
			}
		}
		return strRev(ret_val) || "00" ;
	}

	function strRev(str){
		var ret_val="";
		for(var k=str.length-1; k>-1; k--){
			ret_val += str[k]
		}
		return ret_val;
	}
	function padString(str, pad_with, pad_length){
		str=str.toString();
		while(str.length<pad_length){
			str = pad_with + str;
		}
		return str;
	}
	
	function loadMedia(_file, post_address, appends, cb){
		try{
			var fmdata=new FormData();
		}catch(e){
			var err_msg= "Can't upload image, you may need to use a recent version of your browser to do this";
			if(window.console)console.warn(err_msg + ". Unable to create a FormData object");
			return err_msg;
		}
		
		if(appends){//if any other data u want us to send along, then attach the 'appends' object
			if(typeof (appends)=="string") appends= str2Obj(appends)
			else if(typeof(appends)!="object") throw new Error("loadMedia expects its third parameter to be an object or an object-like string");
			for(var k in appends){
				fmdata.append(k, appends[k]);
			}
		}

		fmdata.append("uploads", _file.files[0]);
	
		$.ajax({
			type: "post", dataType: "html",
			data: fmdata,
			contentType:false,
			processData: false,
			url : post_address,
			success:function(resp){
				if(cb) cb(resp);
			},
			error :function(err){
				if(window.console)console.error(err);
				if(cb)cb(err);
			}
		});
	}

	function validateInput(inputs){
		var targ_exp, guide_str, guide_brk, guide_count, brk_sub, loc_exp,loc_match, alt, targ_val, err=false;
		$(inputs).each(function(){
			if(alt=$(this).attr("data-alt")){
				targ_val= $(this).val();
				targ_exp= new RegExp(alt, "i");
				if(!targ_exp.test(targ_val) && (!err)){
					if(guide_str=$(this).attr("data-correct")){
						guide_brk=guide_str.split(";");
						guide_count=guide_brk.length;
						for(var k=0; k<guide_count; k++){
							brk_sub=guide_brk[k].split(":");
							loc_exp= new RegExp(brk_sub[0],"ig");
							if(loc_match=targ_val.match(loc_exp)){
								err=true;
								o_o.showTip(this,"<span class='ui-icon ui-icon-alert'></span> Look for errors here. " + brk_sub[1].replace("$", loc_match.join(", ")), 0.1, 5);
								break;
							}
						}
						if(!err){//no match found in the data-correct attr
							o_o.showTip(this,"<span class='ui-icon ui-icon-alert'></span> Look for errors here");
						}
					}
					else{
						o_o.showTip(this,"<span class='ui-icon ui-icon-alert'></span> Look for errors here");
					}
					err=true;
				}
			}
		});
		if(err) return false;
		else return true;
	}


//support our classes

//scan for our slider classes and support during page load
	$(".o-o-container>.slider").parent().append("<span class='left-slide' onclick='o_o.slide(0,this)'>&lang;</span><span class='right-slide' onclick='o_o.slide(1,this)'>&rang;</span>");
	function slide(dirn,targ_slider){
		var slider=$(targ_slider).siblings(".slider"), scroll_pos=slider.scrollLeft(),
			dist=this.slider_scroll_length;
		if(dirn===0){//left slide
			slider.animate({scrollLeft: scroll_pos - 100});
		}
		else if(dirn===1){//right slide
			slider.animate({scrollLeft: scroll_pos + 100});
		}
	}

//support for our slider class after page load
	function enforceSlider(selector){
		var slider=$(selector);
		if(!slider.hasClass("slider")){
			if(window.console)console.warn("the selector must belong to the 'slider' class");
			return;
		}
		else if(!slider.parent().hasClass("o-o-container")){
			if(window.console)console.warn("the selector must be a direct child of a parent with the 'o-o-container' class");
			return;
		}
		slider.parent().append("<span class='left-slide' onclick='o_o.slide(0,this)'>&lang;</span><span class='right-slide' onclick='o_o.slide(1,this)'>&rang;</span>");
	}


//scan for our .tab-container tab
	$(".tab-nav .navs a[href]").click(function(evt){evt.preventDefault();});
	$(".tab-container .tabs>*").fadeOut("fast").filter(":first").fadeIn("fast");
	$(".tab-nav .navs").click(function(evt){
		var ankor= $(this).find("a[href]").attr("href"),
		active_tab=$(".tab-container .tabs>:visible").css("z-index", "1");
		$(ankor).css("z-index", "2");
		animaTe(active_tab, o_o.tab_outAnimation, o_o.tab_aniDuration);
		animaTe(ankor, o_o.tab_inAnimation, o_o.tab_aniDuration);
		setTimeout(function(){$(".tab-container .tabs").css("overflow", "auto")}, o_o.tab_aniDuration * 1000);
	});

	//form events
	$(".tab-container .tabs form [type=text],.tab-container .tabs form textarea").blur(function(){
		var marker=$(this).siblings(".marker"), dis_val=$(this).val(),targ_exp;
		if((marker[0]) && (targ_exp=$(this).attr("data-alt"))){
			targ_exp= new RegExp(targ_exp, "i");
			if(targ_exp.test(dis_val)){
				marker.html("<span class='ui-icon ui-icon-check'></span> Good").addClass("good").removeClass("wrong animated infinite rubberBand");
			}
			else{
				marker.html("<span class='ui-icon ui-icon-alert'></span> Wrong").addClass("wrong animated infinite rubberBand").removeClass("good");
			}
		}
	});
//end scan for our .tab-container

var scroll_buffer, scrolled_by="";
function onePage(targ_menu, options){
	var ankors= $(targ_menu).find("a[href^=#]"),
		a_indices=[], THis=this, targ_href;
	ankors.each(function(){
		targ_href=$(this).attr("href");
		a_indices.push(targ_href);
	});

//scroll by clicking on an anchor
	ankors.click(function(evt){
		scrolled_by="click";
		evt.preventDefault(); 
		var targ_ele= $(this).attr("href");
		var last_index=THis.last_index, next_index= a_indices.indexOf(targ_ele),dirn=next_index -  last_index;
		if(dirn===0) return; //next index and last index are the same so no motion
		if(/\-/.test(dirn)){
			dirn="up";
		}
		else dirn="down";
		if(options){
			if(typeof(options.onLeave)=="function"){
				options.onLeave(last_index, next_index, dirn);
			}
		}
		if($(targ_ele)[0]){
			scrollToElement(targ_ele);
			THis.last_index=next_index;
		}
	});

//scroll by document scroll
	$(document).scroll(function(){
		clearTimeout(scroll_buffer);
		scroll_buffer=setTimeout(function(){
			if(scrolled_by=="click"){
				scrolled_by="";
				return;
			}
			var scroll_y=window.scrollY, kount=a_indices.length, targ_rect;
			for(var k=0; k<kount; k++){
				if(targ_rect=$(a_indices[k])[0]){
					targ_rect=targ_rect.getBoundingClientRect();
					if(scroll_y>=targ_rect.top && scroll_y<=targ_rect.bottom){
						var last_index=THis.last_index, next_index= k,dirn=next_index -  last_index;
						THis.last_index=k;
						if(/\-/.test(dirn)){
							dirn="up";
						}
						else dirn="down";
						if(options){
							if(typeof(options.onLeave)=="function"){
								options.onLeave(last_index, next_index, dirn);
							}
						}

					}
				}
			}
		}, 1000);
	});
}


//read to word or number now included here as part of smartKid!


function readNumber(numb){
numb=numb.toString().replace(/^0+/,"");
var wrd;
	if(/[^\d]/.test(numb)) throw new Error("You can only pass in a number value into this function");
	if(numb.length>12) throw new Error("You can not pass in a number with more than 12 digits");

	switch(numb.length){
	case 1: wrd= readUnit(numb);break;
	case 2: wrd= read2Digi(numb);break;
	case 3: wrd= read3Digi(numb); break;
	case 4:  wrd= readUnit(numb.charAt(0)) + " thousand " + read3Digi(numb.substr(1)); break;
	case 5: wrd= read2Digi(numb.substr(0,2)) + " thousand " + read3Digi(numb.substr(2)); break;
	case 6:wrd= read3Digi(numb.substr(0,3)) + " thousand " + read3Digi(numb.substr(3)); break;	
	case 7:	wrd=readUnit(numb.charAt(0)) + " million " + readNumber(numb.substr(1)); break;
	case 8:	wrd=read2Digi(numb.substr(0,2)) + " million " + readNumber(numb.substr(2)); break;
	case 9:	wrd=read3Digi(numb.substr(0,3)) + " million " + readNumber(numb.substr(3)); break;
	case 10:wrd=readUnit(numb.charAt(0)) + " billion " + readNumber(numb.substr(1)); break;
	case 11:wrd=read2Digi(numb.substr(0,2)) + " billion " + readNumber(numb.substr(2)); break;
	case 12:wrd=read3Digi(numb.substr(0,3)) + " billion " + readNumber(numb.substr(3)); break;
	default:wrd="" //default basically is intended to return "" in cases where only zeros were passed in as argument // this is beneficial in cases 7 and below of the switch label above
	}

var pat=/\s{2,}/g;
return wrd.replace(pat, " ").replace(/ and\s?$/,"");
}


function read2Digi(ch){
var wrd_rep;
ch=ch.toString();
	if(ch.charAt(0)=="0"){wrd_rep=readUnit(ch.charAt(1)); }
	else if(ch.charAt(1)=="0"){wrd_rep=readTens(ch.charAt(0));
	}
	else if(ch.charAt(0)=="1"){wrd_rep=readTeens(ch);
	}
	else{ wrd_rep=readTens(ch.charAt(0)) + " " + readUnit(ch.charAt(1));}
return wrd_rep;
}

function read3Digi(ch){
var wrd_rep;
ch=ch.toString();
	if(ch.charAt(0)=== "0") return " and " + read2Digi(ch.substr(1));
	else if(ch.charAt(1)=="0" && ch.charAt(2)=="0" ){wrd_rep=readUnit(ch.charAt(0)) + " hundred";
	}
	else if(ch.charAt(1)=="0" && ch.charAt(2)!="0" ){wrd_rep=readUnit(ch.charAt(0)) + " hundred and " + readUnit(ch.charAt(2));
	}
	else{ wrd_rep=readUnit(ch.charAt(0)) + " hundred and " + read2Digi(ch.substring(1,3));}
return wrd_rep;
}

function readUnit(ch){
 return  ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"][Number(ch)];
}
function readTens(ch){
return ["ten", "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"][Number(ch)-1];
}

function readTeens(ch){
return ["eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"][Number(ch)-11];
}


function word2Num(word){word=word.toString().toLowerCase().replace(/\b(and)/g," ").replace(/\s{2,}/," ");
	var wrd={one:1, two:2, three:3, four: 4, five:5, six:6, seven:7, eight: 8, nine:9, ten:10, eleven:11, twelve:12, thirteen: 13, fourteen:14, fifteen:15, sixteen:16, seventeen:17, eighteen:18, nineteen:19, twenty:20, thirty:30,
	fourty:40, fifty:50, sixty:60, seventy:70, eighty:80, ninety:90};
word=word.split(" ");
var ret="";
var map=[];
word.forEach(function(ele, indx){
		if(ele=="hundred"){
		var tmp=Number(ret) || 1;
		ret = tmp * 100;
		}
		else if(ele=="thousand"){
		var tmp=Number(ret) || 1;
		ret = tmp * 1000;
		map.push(ret);
		ret="";
		word2Num((word.slice(indx + 1)).join(" "));
		}
		else if(ele=="million"){
		var tmp=Number(ret) || 1;
		ret = tmp * 1000000;
		map.push(ret);
		ret="";
		word2Num((word.slice(indx + 1)).join(" "));
		}
		else if(ele=="billion"){
		var tmp=Number(ret) || 1;
		ret = tmp * 1000000000;
		map.push(ret);
		ret="";
		word2Num((word.slice(indx + 1)).join(" "));
		}
		else if(ret.toString().match(/0$/)){if(wrd.hasOwnProperty(ele)) ret = Number(ret) + Number(wrd[ele]);
		}
		else{if(wrd.hasOwnProperty(ele)) ret += wrd[ele];
		}
	});
map.push(ret);
ret=0;
map.forEach(function(ele){ret += Number(ele)});
return ret;
}



/******************************
Text editor functions         *
******************************/

function preventDefFunction(evt){//on kj-icon click, prevent the scrn from losing focus
	evt.preventDefault();
	var scrn=$(evt.target).parent().siblings(".scrn_contain").find(".note_content");
	if(!active_range){ //help the user highlight the text editor just in case he didn't and wants to start making edits
		scrn.trigger("mouseup");
		markChange($(evt.target).parent().parent().attr("id"));
	}
	else{
		
	}
}

var active_sel, active_range;
//firefox and co. has its inherent issues that it gladly displays everywhere it goes. Thanks to it-they really have to work on theirselves
//I have really consciously dragged them into the code because I have potential users who may be using their browsers
//in the script, you'd find where I had to use "|| active_range.commonAncestorContainer, or add the optional offset argument to the collapse() function of the active_sel object". I had to do that bcos of firefox which I was testing with
//I'm not even talking about IE, that one needs special focus

var ctrl_down=false;
function editorFocused(evt){
	if(evt.ctrlKey){
		ctrl_down=true;
	}
	 var o_o_scrn= $(this).parent().parent(),
		fid=getFreeId(o_o_scrn.attr("id"));
	if(!$(this).find("div")[0]){//no content in the editor
		$(this).html("<div id='" + fid + "'>&nbsp; </div>");
		window.getSelection().collapse(document.getElementById(fid), 1);//for firefox sake
	}
	var obj_str= o_o_scrn.attr("id");
	if(!changes[obj_str]){
		markChange(obj_str);
	}

	active_sel=window.getSelection() || document.selection.createRange();
	active_range=active_sel.getRangeAt(0);
	var pel=active_sel.baseNode || active_range.commonAncestorContainer; //gives an umbrella element that houses the selection
	if(pel.nodeType!=1){//textnode
		pel= pel.parentElement;
	}
	if(evt.keyCode==13){//the enter key was pressed
		if(pel.tagName=="LI"){//currently in a <li> element
			//an empty LI means the user wants to go up the list tree
			if(pel.innerHTML=="&nbsp;"){
				var targ_node=$(pel).parent().parent()[0];
				if(targ_node.tagName=="LI"){//deep in the list tree, go one step up
					targ_node=$("<li>&nbsp;</li>").insertAfter(targ_node);
					active_sel.collapse(targ_node[0],1);
				}
				else if(targ_node.tagName=="DIV"){//parent list
					var free_id= getFreeId(o_o_scrn);
					targ_node=$("<div id='" + free_id + "'>&nbsp;</div>").insertAfter(targ_node);
					active_sel.collapse(targ_node[0],1);
				}
				$(pel).remove(); //removes the empty list element
				evt.preventDefault();
				return;
			}
			//the list has been typed into so the user wants to add more lists
		
			var base_node=active_sel.baseNode||active_range.commonAncestorContainer, base_node_txtlen= base_node.textContent.replace(/\s*$/, "").length;
			if(active_sel.isCollapsed && base_node_txtlen<=active_sel.anchorOffset){//at the end of the list element
				//create more lists
				var targ_node=$("<li>&nbsp;</li>").insertAfter(pel);
				active_sel.collapse(targ_node[0],1);
			}
			else{ //at the middle of a list element
				var br=document.createElement("br");
				active_range.insertNode(br);
				active_range.collapse(false);
			}
		}
		else{//if not in a list, create a new div or br appropriately
			var base_node=active_sel.baseNode || active_range.commonAncestorContainer, base_node_txtlen= base_node.textContent.replace(/\s*$/, "").length; //remove any space at the end of the string before getting the length
			if(active_sel.isCollapsed && base_node_txtlen<=active_sel.anchorOffset){//at the end of an element
			//no selection coz active_sel iscollapsed. so anchorOffset and focusOffset are at the same position
				var free_id=getFreeId(o_o_scrn), valid_pel=$(pel);
				while(!valid_pel.parent().hasClass("note_content")){
					valid_pel=valid_pel.parent();
				}
				$("<div id='" + free_id + "'>&nbsp;</div>").insertAfter(valid_pel);
				var targ_node=document.getElementById(free_id);
				active_sel.extend(targ_node,1); //shifts the focusNode to this target node
				active_sel.collapse(targ_node,1); //.collapse(node,offset)
			}
			else{//at the middle of an element
				var br=document.createElement("br");
				active_range.insertNode(br);
				active_range.collapse(false);
				active_sel.collapse(br, 1);
			}
		}
		evt.preventDefault(); //prevents the editable from editing itself
	}


	//display appropriate cues to user
	pel=$(pel); 
	//for font-size
	o_o_scrn.find(".font_size").val(pel.css("font-size").replace(/[^0-9.]/g, ""));
	//for font-family
	o_o_scrn.find(".font_family").val(pel.css("font-family").replace(/['"]/g,""));
	//for font-weight
	if(pel.css("font-weight") =="bold" || pel.css("font-weight") >= 700) o_o_scrn.find(".kj-bold").addClass("kj-icon-orange");
	else o_o_scrn.find(".kj-bold").removeClass("kj-icon-orange");
	
	//for text-decoration
	if(pel.css("text-decoration") =="underline" || pel.css("text-decoration-line") =="underline") o_o_scrn.find(".kj-underline").addClass("kj-icon-orange");
	else o_o_scrn.find(".kj-underline").removeClass("kj-icon-orange");
	//for font-style
	if(pel.css("font-style") =="italic")	o_o_scrn.find(".kj-italic").addClass("kj-icon-orange");
	else o_o_scrn.find(".kj-italic").removeClass("kj-icon-orange");
	//for text-align
	if(pel.css("text-align") =="left" || pel.css("text-align") =="start"){
		o_o_scrn.find(".kj-left-align").addClass("kj-icon-orange");
		o_o_scrn.find(".kj-center-align").removeClass("kj-icon-orange");
		o_o_scrn.find(".kj-right-align").removeClass("kj-icon-orange");
	}
	else if(pel.css("text-align") =="center"){
		o_o_scrn.find(".kj-center-align").addClass("kj-icon-orange");
		o_o_scrn.find(".kj-left-align").removeClass("kj-icon-orange");
		o_o_scrn.find(".kj-right-align").removeClass("kj-icon-orange");
	}
	else if(pel.css("text-align") =="right"){
		o_o_scrn.find(".kj-right-align").addClass("kj-icon-orange");
		o_o_scrn.find(".kj-center-align").removeClass("kj-icon-orange");
		o_o_scrn.find(".kj-left-align").removeClass("kj-icon-orange");
	}
	//for super|sub script
	if(pel.css("vertical-align") =="super")	o_o_scrn.find(".kj-sup-script").addClass("kj-icon-orange");
	else if(pel.css("vertical-align") =="sub") o_o_scrn.find(".kj-sub-script").addClass("kj-icon-orange");
	else{
		o_o_scrn.find(".kj-sup-script").removeClass("kj-icon-orange");
		o_o_scrn.find(".kj-sub-script").removeClass("kj-icon-orange");
	}
}
function textBoxKeyUp(evt){
	if(ctrl_down){  return;}
	ctrl_down=false;
	var targ= $(evt.target).parent().parent().attr("id");
	active_range=active_sel.getRangeAt(0);
	if(String.fromCharCode(evt.keyCode).match(/[^a-z0-9]/i)){//save changes when non alpha-numeric chars are entered. Main target is the space char. the essence is to save memory and processing speed though at the cost of "quality" (or users' total feel of enjoyment)
		markChange(targ);
	}
}
function interceptPaste(evt){
	evt.preventDefault();
	 var clpbrd = evt.clipboardData || window.clipboardData || evt.originalEvent.clipboardData,
		text=clpbrd.getData("text");
		targ=$(evt.target).parent().parent();

	if(active_range){
		var fid=getFreeId(targ), span_el=document.createElement("span");
		span_el.innerHTML=text;
		span_el.id=fid;
		active_range.insertNode(span_el);
		var targ_node= document.getElementById(fid);
		active_sel.collapse(targ_node, 0);
	}
}
$("#scrn").dblclick(function(evt){
	var evt_targ=evt.target;
	if(/^obj\d+(img|span)/.test(evt_targ.id)){//ordinary image or image caption
		popImgSet(evt_targ);
	}
	else if(/^obj\d+_show\d+$/.test(evt_targ.id)){//slide child
		popShowMenu($(evt_targ).parent())
	}
});
	
function getFreeId(targ){
	var start_id="obj1", kount=1;
	while($("#" + start_id)[0]){
		start_id= "obj" + (++kount);
	}
	//check if the style has been defined by a previously deleted element
	var style_pat= new RegExp("\#" + start_id + "\{[^}]+?\}"),
		targ_parser=$(targ).find(".page_parser");
	if(style_pat.test(targ_parser.html())){//style was found; Now remove
		targ_parser.html(targ_parser.html().replace(style_pat, ""));
	}
	return start_id;
}
	
	
//formatting options
function changeFontSize(targ){
	var font_size=$(targ).find(".font_size").val().replace(/[^0-9.]/g, "") + "px";
	active_sel.removeAllRanges();
	active_sel.addRange(active_range);
	realFormat(targ, "font-size: " + font_size);
}
	
function changeFontFamily(targ){
	var font_family=$(targ).find(".font_family").val();
	active_sel.removeAllRanges();
	active_sel.addRange(active_range);
	realFormat(targ, "font-family: '" + font_family + "'");
}
	
function realFormat(targ, active_style, default_style, kj_icon){
	var tg=$(targ).find(".note_content"), fid;
	//var pel=active_sel.baseNode||active_range.commonAncestorContainer;
	var pel=active_range.commonAncestorContainer;
	if(pel.nodeType!=1){//textnode
		pel= pel.parentElement;
	}
	if(tg.find(pel)[0]){//within work scope
		if(!active_sel.isCollapsed){//create a new element
			fid=getFreeId(targ); var span_el=document.createElement("span");
			span_el.innerHTML=active_sel.toString();
			span_el.id=fid;
			active_range.deleteContents();
			active_range.insertNode(span_el);
			active_range.collapse(false); //drop selection to avoid unnecessary creation 
		}
		else{//work on existing element
			//get the target element's ID or its "continuous" parent's ID
			while(pel.id==""){//instances would include children of ul,ol,td,th,etc
				pel=pel.parentElement;
			}
			fid=pel.id;
		}
		//give user a cue and apply style effect
		if(kj_icon){//called likely from the .kj-icons
			var ico=$(targ).find("." + kj_icon);
			if(ico.hasClass("kj-icon-orange")){//has formatting already- so remove formatting (or return to default)
				ico.removeClass("kj-icon-orange");
				transferStyle(targ, fid, default_style);
			}
			else{//does not have formatting- so add formatting
				ico.addClass("kj-icon-orange");
				transferStyle(targ, fid, active_style);
			}
		}
		else{//called likely from
			transferStyle(targ, fid, active_style);
		}
	}
		
}
	
function transferStyle(targ, active_id, style, mobile){
	var page_parser= mobile ? $(targ).find(".mobile_rules") : $(targ).find(".page_parser"),
		editor=$(targ).find(".note_content");
	var reg_exp= new RegExp("\#" + active_id + "\{[^}]+?\}","i"),
		matched=page_parser.html().match(reg_exp),
		el_style=style.split(";"), style_count=el_style.length;

	if(matched){//element style is already in the parser
		var targ_style="", targ_exp, matched_str=matched[0].replace("}","");
		for(var k=0; k<style_count; k++){
			targ_style= el_style[k].split(":");
			if(targ_style[0].match(/width/) && !mobile){
				var scrn_w=editor[0].clientWidth,
					style_val= $.trim(targ_style[1]), for_mobile=false;
				if(style_val.match(/\d+px/)){
					if(parseInt(style_val.replace(/px/g, ""))>320) for_mobile=true;
				}
				else if(style_val.match(/\d+\%/)){
					style_val= (style_val.replace(/\%/g, "") / 100) * scrn_w;
					if(style_val>320) for_mobile=true;
				}
				if(for_mobile){
					var mobile_style=el_style[k].replace(/:\s?\d+(px|\%)\;?/, ": 100%") + ";margin-left: 0px";
					removeStyle(targ, active_id, targ_style[0], for_mobile);
					transferStyle(targ, active_id, mobile_style, for_mobile);
				}
				else removeStyle(targ, active_id, targ_style[0], true);
			}
			targ_exp= new RegExp(";" + $.trim(targ_style[0]) + "\:");
				if(targ_exp.test(matched_str) && targ_style[0]){//style has been defined before
					targ_exp= new RegExp(";"+ targ_style[0] + "\:\s?[^;]+?\;");
					matched_str=matched_str.replace(targ_exp,";");
				}
				if(/margin/i.test(targ_style[0])) el_style[k] = targ_style[0] + ": " + targ_style[1] + "!important";
				matched_str += el_style[k] ? el_style[k] + ";" : "";
			}
			page_parser.html(page_parser.html().replace(matched[0], matched_str + "}"));
		}
	else{//define style
		var selector_style="#" + active_id + "{" + style + ";}";
		if(mobile){
			page_parser.html(page_parser.html().replace(/\}$/, selector_style + "}"));
		}
		else{
			var width_match=style.match(/width:\s?([^;]+)?\;/), 
				scrn_w=editor[0].clientWidth, width_val;
			if(width_match){
				if(/px/.test(width_match[1])){
					width_val= parseInt(width_match[1].replace("px", ""));
					if(width_val>320) transferStyle(targ, active_id, width_match[0].replace(/:\s?\d+(px|\%)\;?/, ": 100%") + ";margin-left: 0px", true);
				}
				else if(/\%/.test(width_match[1])){
					width_val= (width_match[1].replace("%", "")/100) * scrn_w;
					if(width_val>320) transferStyle(targ, active_id, width_match[0].replace(/:\s?\d+(px|\%)\;?/, ": 100%") + ";margin-left: 0px", true);
				}
			}
			page_parser.html(page_parser.html() + selector_style);
		}
	} markChange(targ);
	}
	
	function removeStyle(targ, targ_id, stylez, mobile){
		var page_parser= mobile ? $(targ).find(".mobile_rules") : $(targ).find(".page_parser"),
			reg_exp=new RegExp("\#" + targ_id + "\{[^}]+?\}","i"),
			matched=page_parser.html().match(reg_exp);
		if(matched){
			var gbowa_stylez= stylez.split(","), kount=gbowa_stylez.length, removed= matched[0];
			for(var k=0; k<kount; k++){
				removed= removed.replace(new RegExp(gbowa_stylez[k] + "[a-z-]*:[^;]+?;", "ig"), "");
			}
			page_parser.html(page_parser.html().replace(matched, removed));
		}
	}
	
	var changes={position:-1, data: [], start_html:""};
	function markChange(targ){
		//there is a little chance of running out of memory (for a very low memory system) here but we are willing to bet on that chance
		var obj_str=targ.toString().replace(/[^a-z0-9_]/ig, ""),
			scrn=$("#" + obj_str).find(".note_content");
		if(!changes[obj_str]){//changes for this particular textbox have not been initialised
			changes[obj_str]= {position: 1, data: [["","",""]], start_html: ""}
		}


		if(changes[obj_str].data[(changes[obj_str].position)-1][0]!=scrn.html() && changes[obj_str].start_html!=scrn.html()){
			var scrn_data=[scrn.html(),$("#" + obj_str).find(".page_parser").html(), $("#" + obj_str).find(".mobile_rules").html()];
			changes[obj_str].data.push(scrn_data);
			if(changes[obj_str].start_html==""){
				changes[obj_str].start_html=scrn.html();
			}
		}
		changes[obj_str].position=changes[obj_str].data.length;
		unredoCue("#" + obj_str);
	}
	
	function undo(targ){
		var obj_str=targ.toString().replace(/[^a-z_0-9]/gi, "");
		if(changes[obj_str].position>2){
			changes[obj_str].position--;
			$(targ).find(".note_content").html(changes[obj_str].data[changes[obj_str].position][0]);
			$(targ).find(".page_parser").html(changes[obj_str].data[changes[obj_str].position][1]);
			$(targ).find(".mobile_rules").html(changes[obj_str].data[changes[obj_str].position][2]);
			active_sel.removeAllRanges();
			unredoCue(targ);
		}
	}
	function redo(targ){
		var obj_str=targ.toString().replace(/[^a-z_0-9]/gi, "");
		if(changes[obj_str].position< changes[obj_str].data.length-1){
			changes[obj_str].position++;
			$(targ).find(".note_content").html(changes[obj_str].data[changes[obj_str].position][0]);
			$(targ).find(".page_parser").html(changes[obj_str].data[changes[obj_str].position][1]);
			$(targ).find(".mobile_rules").html(changes[obj_str].data[changes[obj_str].position][2]);
			active_sel.removeAllRanges();
			unredoCue(targ);
		}
	}
	function unredoCue(targ){
		var obj_str=targ.toString().replace(/[^a-z0-9_]/gi, "");
		if(changes[obj_str].position>0){
			$(targ).find(".kj-undo").addClass("kj-icon-orange");
		}
		else{
			$(targ).find(".kj-undo").removeClass("kj-icon-orange");
		}
		if(changes[obj_str].position<changes[obj_str].data.length){
			$(targ).find(".kj-redo").addClass("kj-icon-orange");
		}
		else{
			$(targ).find(".kj-redo").removeClass("kj-icon-orange");
		}
	}
	
	
	function popLIOptions(targ, li_type){		
		var close="<div class='dlg_title'> &nbsp; Bullet Options<span class='ui-icon ui-icon-closethick' style='position:absolute;top:10px; right:10px;' title='Close' onclick=\"o_o.applyPopLIOptions('" + targ + "')\"></span></div>";
		var bullet_list="";
		if(li_type=="bullet"){
			bullet_list +="<ul>";
			bullet_list += "<li style='list-style-type: circle;'><label><input type='radio' name='li_type_sample' value='circle' checked> Circle</label></li>";
			bullet_list += "<li style='list-style-type: disc;'><label><input type='radio' name='li_type_sample' value='disc'> Disc</label></li>";
			bullet_list += "<li style='list-style-type: square;'><label><input type='radio' name='li_type_sample' value='square'> Square</label></li>";
			bullet_list += "<li style='list-style-type: none;'><label><input type='radio' name='li_type_sample' value='none'> None</label></li>";
			bullet_list +="</ul>";
		}
		else if(li_type=="numbering"){
			bullet_list +="<ol>";			
			bullet_list += "<li style='list-style-type: decimal;'><label><input type='radio' name='li_type_sample' value='decimal' checked> Decimal</label></li>";
			bullet_list += "<li style='list-style-type: decimal-leading-zero;'><label><input type='radio' name='li_type_sample' value='decimal-leading-zero'> Decimal-leading-zero</label></li>";
			bullet_list += "<li style='list-style-type: lower-alpha;'><label><input type='radio' name='li_type_sample' value='lower-alpha'> Lower Alpha</label></li>";
			bullet_list += "<li style='list-style-type: upper-alpha;'><label><input type='radio' name='li_type_sample' value='upper-alpha'> Upper Alpha</label></li>";
			bullet_list += "<li style='list-style-type: lower-latin;'><label><input type='radio' name='li_type_sample' value='lower-latin'> Lower Latin</label></li>";
			bullet_list += "<li style='list-style-type: upper-latin;'><label><input type='radio' name='li_type_sample' value='upper-latin'> Upper Latin</label></li>";
			bullet_list += "<li style='list-style-type: lower-roman;'><label><input type='radio' name='li_type_sample' value='lower-roman'> Lower Roman</label></li>";
			bullet_list += "<li style='list-style-type: upper-roman;'><label><input type='radio' name='li_type_sample' value='upper-roman'> Upper Roman</label></li>";
			bullet_list += "<li style='list-style-type: lower-greek;'><label><input type='radio' name='li_type_sample' value='lower-greek'> Lower Greek</label></li>";
			bullet_list += "<li style='list-style-type: georgian;'><label><input type='radio' name='li_type_sample' value='georgian'> Georgian</label></li>";
			bullet_list += "<li style='list-style-type: armenian;'><label><input type='radio' name='li_type_sample' value='armenian'> Armenian</label></li>";
			bullet_list +="</ol>";
		}
		$(targ + " .scrn_dlg").html(close + "<div class='dlg-content'><p>Select <span id='dlg_targ'>" + li_type + "</span> type and close<br /(After closed, you can enter new list by pressing 'Enter' from your keyboard)></p>" + bullet_list + "</div>")
		.fadeIn();
		$(targ + " .scrn_dlg>div:first-child").attr({"onmousedown": "$(this).parent().draggable().draggable('enable');", "onmouseup": "$(this).parent().draggable('disable')"});
	}
	function applyPopLIOptions(targ){ $(targ).find(".note_content")[0].focus();
		var li_type= $("#dlg_targ").text()=="bullet" ? "ul" : "ol", style_type="";
		$(targ + " .scrn_dlg [name='li_type_sample']").each(function(){			
			if($(this).attr("checked")) style_type= $(this).val();
		});
		
/*		var free_id= getFreeId(targ), ul_ol=document.createElement(li_type);
		ul_ol.id=free_id;
		ul_ol.innerHTML="<li>type in here, press enter to create more bullets</li>";
		
		//var pel=active_range.commonAncestorContainer;
		//if(pel.nodeType!=1){//textnode
		//	pel= pel.parentElement;
		//}
		//active_range.setStartAfter(pel);
		
		active_range.insertNode(ul_ol);
		active_range.setStart($("#" + free_id + ">li")[0], 0);
*/
		var pel=active_range.commonAncestorContainer,free_id= getFreeId(targ);
		if(pel.nodeType!=1){//textnode
			pel= pel.parentElement;
		}
		var free_id= getFreeId(targ), ul_ol=document.createElement(li_type);
		ul_ol.id=free_id;
		ul_ol.innerHTML="<li>type in here, press enter to create more bullets</li>";
		active_range.insertNode(ul_ol);
//		$("<" + li_type + " id='" + free_id + "'><li>type in here, press enter to create more lists</li></" + li_type + ">").insertAfter(pel);
//		var targ_node=document.getElementById(free_id);
		active_sel.collapse(ul_ol,0);
		active_sel.extend(ul_ol,1);
		transferStyle(targ, free_id, "list-style-type: " + style_type + "!important");
		$(targ + " .scrn_dlg").hide("fast");
	}
	
	
	function popMapOptions(targ){
		var close="<div class='dlg_title'><span class='ui-icon ui-icon-closethick' style='position:absolute;top:10px; right:10px;' title='Close' onclick=\"o_o.applyMapOptions('" + targ + "')\"></span></div>";
		var map_opt="<div>";
		map_opt += "<p><label>Map Adress</label><input type='text' id='map_address' /></p>";
		map_opt += "<p><label>Map Width(px)</label><input type='text' id='map_width' /></p>";
		map_opt += "<p><label>Map Height(px)</label><input type='text' id='map_height' /></p>";
		map_opt+= "</div>";
		$(targ + " .scrn_dlg").html(close + "<div class='dlg-content'><p>Add a well defined address for the location you want to display its map and close to apply</p>" + map_opt + "</div>")
		.fadeIn();
		$(targ + " .scrn_dlg>div:first-child").attr({"onmousedown": "$(this).parent().draggable().draggable('enable');", "onmouseup": "$(this).parent().draggable('disable')"});
	}
	
	function applyMapOptions(targ){
		var free_id= getFreeId(targ), mwidth=$("#map_width").val().replace(/[^0-9.]/,"") + "px", mheight=$("#map_height").val().replace(/[^0-9.]/,"") + "px";
		//return focus on scrn
		active_sel.removeAllRanges(); active_sel.addRange(active_range);
		var embed= document.createElement("div");
		embed.id= free_id; embed.style="width:" + mwidth + ";height:" + mheight;
		embed.innerHTML="<iframe style='width:100%; height:100%' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='https://maps.google.com/maps?&amp;q=" + encodeURIComponent($("#map_address").val()) + "&amp;output=embed'></iframe>";
		active_range.insertNode(embed);
		active_sel.collapse(document.getElementById(free_id),1);
		$(targ + " .scrn_dlg").fadeOut("slow");
	}
	

	
	function popColor(targ, pop_for, call_back, ini_col){
		var color_names=["aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkgrey", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldrenrod", "gray", "green", "greenyellow", "grey", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightgrey", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "transparent", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"], 
			color_names_count= color_names.length, targ_col="";
		var ready_made="<div id='ready_made' style='margin-left:auto; margin-right:auto;'>";
		for (var j=0; j<color_names_count; j++){
			targ_col= color_names[j];
			ready_made += "<span title='" + targ_col + "' style='background-color:" + targ_col + ";' onclick=\"o_o.selColor(event, '"  + targ + "', " + call_back + ")\"></span>";
		}
		ready_made += "</div>";
	var red= $("<div id='red' style='height:25px; width:256px;' onclick=\"o_o.selColor(event, '" + targ + "', " + call_back + ")\"></div>"),
		green= $("<div id='green' style='height:25px; width:256px;' onclick=\"o_o.selColor(event, '" + targ + "', " + call_back + ")\"></div>"),
		blue= $("<div id='blue' style='height:25px; width:256px;' onclick=\"o_o.selColor(event, '" + targ + "', " + call_back + ")\"></div>");
	
		//the string holding the transformation statement required for the linear gradient property
	var bg_val="linear-gradient(90deg",
		bg_val1="linear-gradient(90deg",
		bg_val2="linear-gradient(90deg";
	for (var k=0; k<256; k++){//generate the transformation of each color patch from 0 to 255
		bg_val += ", rgb(" + k + ",0,0)";
		bg_val1 += ", rgb(0," + k + ",0)";
		bg_val2 += ", rgb(0,0," + k + ")";
	}
	bg_val += ")"; bg_val1 += ")"; bg_val2 += ")";
		
	//generate a css obj to accept the linear gradient instruction generated above
	var bgi={"background-image": bg_val},
		bgi1={"background-image": bg_val1},
		bgi2={"background-image": bg_val2};
	
		//adjust for basic browser differences
	red.css(bgi); bgi["background-image"]= "-moz-" + bg_val.replace("90deg","0deg");
	red.css(bgi); bgi["background-image"]= "-webkit-" + bg_val.replace("90deg","0deg");
	red.css(bgi);
	green.css(bgi1); bgi1["background-image"]= "-moz-" + bg_val1.replace("90deg","0deg");
	green.css(bgi1); bgi1["background-image"]= "-webkit-" + bg_val1.replace("90deg","0deg");
	green.css(bgi1);
	
	blue.css(bgi2); bgi2["background-image"]= "-moz-" + bg_val2.replace("90deg","0deg");
	blue.css(bgi2); bgi2["background-image"]= "-webkit-" + bg_val2.replace("90deg","0deg");
	blue.css(bgi2);
	
	var close="<div class='dlg_title'> &nbsp; Set <span id='col_dlg_targ'>" + pop_for + "</span><span id='sample_cue' style='margin-left:5%;'></span><span class='ui-icon ui-icon-closethick' style='position:absolute;top:10px; right:10px;' title='Close' onclick='$(\"" + targ + " .col_dlg\").hide(\"fast\")'></span></div>";
	$(targ + " .col_dlg").html(close + "<div class='dlg-content'><p style='margin-left:5%;'><em>Do you know that there is a color named 'transparent'? :-)<br /></em><em>(Click on already made color samples or create your custom color by clicking on the red, green and blue palettes to mix the colors</em></p>");
	$(targ + " .col_dlg .dlg-content").append("<div id='color_sample' style='margin-left:5%;'></div>")
		.append(ready_made + "<br /><center id='col_pal' ></center></div>");
	$(targ + " .col_dlg").fadeIn();
		$(targ + " .col_dlg>div:first-child").attr({"onmousedown": "$(this).parent().draggable().draggable('enable');", "onmouseup": "$(this).parent().draggable('disable')"});	
		$("#col_pal").append(red).append(green).append(blue);
	
	//colour dialog initialisation	
	var scrn=$(targ).find(".note_content"), pel=active_range.commonAncestorContainer;
	if(pel.nodeType!=1){//textnode
		pel= pel.parentElement;
	}

	if(scrn.attr("id") == pel.id || scrn.find(pel)[0]){//within work scope - if the pel active_range is a direct child of the scrn or is a descendent of the scrn element
		pel=$(pel);
		var b_col=pel.css("border-top-color").match(/rgba?\(\d+, \d+, \d+/);
		var sample=$("#color_sample").text(pel.text()).css({"background-color": pel.css("background-color"),"color": pel.css("color"), border: "1px solid" + b_col[0]});
		
		if(pop_for=="color"){
			var col_arr=rgbStringToObj(sample.css("color"));
			$("#sample_cue").text("Red= " + parseInt((col_arr[0]/255)*100) + "%, Green= " + parseInt((col_arr[1]/255)*100) + "%, Blue= " + parseInt((col_arr[2]/255)*100) + "%")
		}
		else if(pop_for=="background color"){
			var col_arr=rgbStringToObj(sample.css("background-color"));
			$("#sample_cue").text("Red= " + parseInt((col_arr[0]/255)*100) + "%, Green= " + parseInt((col_arr[1]/255)*100) + "%, Blue= " + parseInt((col_arr[2]/255)*100) + "%")
		}
		else if(pop_for=="border color"){
			var col_arr=rgbStringToObj(b_col ? b_col[0] : rgb(0, 0, 0));
			$("#sample_cue").text("Red= " + parseInt((col_arr[0]/255)*100) + "%, Green= " + parseInt((col_arr[1]/255)*100) + "%, Blue= " + parseInt((col_arr[2]/255)*100) + "%")
		}
		else if(call_back){
			sample.text("").css({"background-color": ini_col});
			var col_arr=rgbStringToObj(sample.css("background-color"));
			$("#sample_cue").text("Red= " + parseInt((col_arr[0]/255)*100) + "%, Green= " + parseInt((col_arr[1]/255)*100) + "%, Blue= " + parseInt((col_arr[2]/255)*100) + "%");
			$(targ + " .col_dlg").css({left:"5px", top:"5px"}); //essence of this is to give space for us to see the edit effect on the caller function
		}
	}
}
function selColor(evt, targ, cb){
	var ev=evt || window.event;
	var ele=$(evt.target);
	var c_samp=$("#color_sample");
	var col=parseInt(evt.clientX - ele.offset().left),col_str;
	var dlg_text=$("#col_dlg_targ").text();
	//gets the old color sample, so as to modify on it
	if(dlg_text=="color")
		col_str=c_samp.css("color").match(/\d+/g);
	else if(dlg_text=="background color" || cb)
		col_str=c_samp.css("background-color").match(/\d+/g);
	else if(dlg_text=="border color")
		col_str=c_samp.css("border-top-color").match(/\d+/g);
	
	//modify on the collected sample based on the palette that was clicked
	if(ele.attr("id")=="red"){
		if(dlg_text=="color")
			c_samp.css("color", "rgb(" + col + "," + col_str[1] + "," + col_str[2] + ")");
		else if(dlg_text=="background color" || cb)
			c_samp.css("background-color", "rgb(" + col + "," + col_str[1] + "," + col_str[2] + ")");
		else if(dlg_text=="border color")
			c_samp.css("border-color", "rgb(" + col + "," + col_str[1] + "," + col_str[2] + ")");
	}
	else if(ele.attr("id")=="green"){
		if(dlg_text=="color")
			c_samp.css("color", "rgb(" + col_str[0] + "," + col + "," + col_str[2] + ")");
		else if(dlg_text=="background color" || cb)
			c_samp.css("background-color", "rgb(" + col_str[0] + "," + col + "," + col_str[2] + ")");
		else if(dlg_text=="border color")
			c_samp.css("border-color", "rgb(" + col_str[0] + "," + col + "," + col_str[2] + ")");
	}
	else if(ele.attr("id")=="blue"){
		if(dlg_text=="color")
			c_samp.css("color", "rgb(" + col_str[0] + "," + col_str[1] + "," + col + ")");
		else if(dlg_text=="background color" || cb)
			c_samp.css("background-color", "rgb(" + col_str[0] + "," + col_str[1] + "," + col + ")");
		else if(dlg_text=="border color")
			c_samp.css("border-color", "rgb(" + col_str[0] + "," + col_str[1] + "," + col + ")");
	}
	else if(ele[0].tagName=="SPAN"){
		if(dlg_text=="color")
			c_samp.css("color", ele.css("background-color"));
		else if(dlg_text=="background color" || cb)
			c_samp.css("background-color", ele.css("background-color"));
		else if(dlg_text=="border color")
			c_samp.css("border-color", ele.css("background-color"));
	}
	
	//affect the target element with changes made
	active_sel.removeAllRanges();
	active_sel.addRange(active_range);
	if(dlg_text=="color"){
		var col_arr=rgbStringToObj(c_samp.css("color"));
		$("#sample_cue").text("Red= " + parseInt((col_arr[0]/255)*100) + "%, Green= " + parseInt((col_arr[1]/255)*100) + "%, Blue= " + parseInt((col_arr[2]/255)*100) + "%");
		realFormat(targ, "color: " + c_samp.css("color"));
	}
	else if(dlg_text=="background color"){
		var col_arr=rgbStringToObj(c_samp.css("background-color"));
		$("#sample_cue").text("Red= " + parseInt((col_arr[0]/255)*100) + "%, Green= " + parseInt((col_arr[1]/255)*100) + "%, Blue= " + parseInt((col_arr[2]/255)*100) + "%")	
		realFormat(targ, "background-color: " + c_samp.css("background-color"));
	}
	else if(dlg_text=="border color"){
		var col_arr=rgbStringToObj(c_samp.css("border-top-color"));
		$("#sample_cue").text("Red= " + parseInt((col_arr[0]/255)*100) + "%, Green= " + parseInt((col_arr[1]/255)*100) + "%, Blue= " + parseInt((col_arr[2]/255)*100) + "%")
		$("#border_color").css({"background-color": c_samp.css("border-top-color")});
	}
	if(cb) cb(c_samp.css("background-color"));
}

	
	function popTableOptions(targ){
		var close="<div class='dlg_title'>&nbsp; Table Settings<span class='ui-icon ui-icon-closethick' style='position:absolute;top:10px; right:10px;' title='Close' onclick=\"o_o.applyTableOptions('" + targ + "')\"></span></div>";
		var table_form="<form>";
		table_form += "<p>No. of <br /><label>Rows </label><input type='text' id='table_row' /> <br /><label>Columns </label><input type='text' id='table_col' /></p>";
		table_form +="<p><label><input type='radio' name='col_width' value='autofit' checked />Autofit to contents</label><br /><label><input type='radio' name='col_width' value='auto col' />Autosize column width</label><br /><label><input type='radio' name='col_width' value='fixed col' />Fixed column width</label></p>";
		table_form += "</form>";
		$(targ + " .scrn_dlg").html(close + "<div class='dlg-content'><p>Set table options below and close dialog to apply</p>" + table_form + "</div>")
		.fadeIn();
		$(targ + " .scrn_dlg>div:first-child").attr({"onmousedown": "$(this).parent().draggable().draggable('enable');", "onmouseup": "$(this).parent().draggable('disable')"});
	}
	function applyTableOptions(targ){
		var row=$("#table_row").val(), col=$("#table_col").val(),
			width="auto", width_style="";
		$(targ + " .scrn_dlg [name=col_width]").each(function(){
			if($(this).prop("checked")){
				if($(this).val()=="fixed col")
					width = (100/col) + "%";
				width_style=$(this).val();
			}
		});
		var tid=getFreeId(targ);
		var new_table="";
		for(var k=0; k<Number(row); k++){
			if(k==0){
				new_table += "<thead><tr id='" + tid + "_" + k + "'>";
				for(var j=0; j<Number(col); j++){
					new_table += "<th style='width: " + width + "'>Column Head</th>";
				}
				new_table +="</tr></thead><tbody>";
			}
			else{
				new_table += "<tr id='" + tid + "_" + k + "'>";
				for(var j=0; j<Number(col); j++){
					new_table += "<td style='width: " + width + "'>Enter Value</td>";
				}
				new_table +="</tr>";
			}
		}
		new_table += "</tbody>";
		//return focus on scrn
		active_sel.removeAllRanges(); active_sel.addRange(active_range);
		var table= document.createElement("table");
		table.id= tid; table.innerHTML=new_table;
		active_range.insertNode(table);

		//introducing styling the <th> from the <th> row, so that him go make sense small - without fully breaking the style-it-urself rule I have unconsciously created
		transferStyle(targ, tid + "", "text-align:left;padding-left:3px");
		
		if(width_style=="autofit"){
			transferStyle(targ, tid, "width: auto");
		}
		else{
			transferStyle(targ, tid, "width: 100%");
		}
		$(targ + " .scrn_dlg").hide("fast");
	}
	
	function popHrefForm(targ){
		var close="<div class='dlg_title'>&nbsp; Link Settings<span class='ui-icon ui-icon-closethick' style='position:absolute;top:10px; right:10px;' title='Close' onclick=\"o_o.applyHref('" + targ + "')\"></span></div>";
		var link_form="<form>";
		var scrn=$(targ + " .note_content"), pel=active_range.commonAncestorContainer;
		if(pel.nodeType!=1){//textnode
			pel= pel.parentElement;
		}
		
		if(scrn.attr("id") == pel.id || scrn.find(pel)[0]){//within work scope
			pel=$(pel); var href= pel.attr("href") || "";
			if(href) link_form += "<p><label><input type='checkbox' id='remove_link' value='" + pel.attr("href") + "' /> Break link</label></p>";
			link_form += "<p><label>Link Label:</label> <span> " + pel.text() + "</span></p>";
			link_form +="<p><label>Link Url</label><input type='text' id='link_url' value='" + href + "' /></p>";
			//link_form +="<p>or link to an existing page</p>";
			//link_form += "<select id='avail_url' onchange='$(\"#link_url\").val($(this).val())'>";
			//for(var k=0; k<avail_pages.length; k++){
			//	link_form += "<option>" + avail_pages[k] + "</option>";
			//}
			//link_form += "</select>";
			link_form += "</form>";
			$(targ + " .scrn_dlg").html(close + "<div class='dlg-content'><p>Set link options below and close dialog to apply</p>" + link_form + "</div>")
			.fadeIn();
			$(targ + " .scrn_dlg>div:first-child").attr({"onmousedown": "$(this).parent().draggable().draggable('enable');", "onmouseup": "$(this).parent().draggable('disable')"});
		}
	}
	function applyHref(targ){
		var l_href=$("#link_url").val(),
			g_href="http://" + l_href.replace(/https?:?\/?\/?/g,""), //just incase the user types the 'http thing' wrongly
			avail=$("#avail_url").val();
		
		//return focus to scrn
		active_sel.removeAllRanges(); active_sel.addRange(active_range);
		if(!l_href){$(targ + " .scrn_dlg").hide("fast"); return ;} //return if no link address was specified
		
		var fid="", pel=active_range.commonAncestorContainer;
		if(pel.nodeType != 1){
			pel= pel.parentElement;
		}
		if($("#remove_link")[0]){//if the target element is already a link may be you want to change its address or remove the link
			if($("#remove_link").prop("checked")){//you want to remove the link
				if(pel.tagName=="A"){
					var out_htm=pel.outerHTML, in_htm=pel.innerHTML;
					pel.parentElement.innerHTML= pel.parentElement.innerHTML.replace(out_htm,in_htm);
				}
			}
			else{//you want to change the link's address
				if(l_href==avail)
					$(pel).attr({href: l_href, target:"_self"});
				else{
					$(pel).attr({href: g_href, target:"_blank"});
				}
			}
		}
		else{//a fresh link
			if(active_sel.toString()){//some text were highlighted
				fid=getFreeId(targ); var a_el=document.createElement("a");
				a_el.innerHTML=active_sel.toString();
				a_el.id=fid;
				if(l_href==avail){
					a_el.href= l_href; a_el.target="_self";
				}
				else{
					a_el.href= g_href; a_el.target="_blank";
				}
				active_range.deleteContents();
				active_range.insertNode(a_el);
				active_range.collapse(false); //drop selection to avoid unnecessary creation 
			}
			else{
				fid=getFreeId(targ);
				if(l_href==avail)
					pel.innerHTML= "<a href='" + l_href + "' id='" + fid + "' target='_self'>" + pel.innerHTML + "</a>";
				else
					pel.innerHTML= "<a href='" + g_href + "' id='" + fid + "' target='_blank'>" + pel.innerHTML + "</a>";
			}
			transferStyle(targ, fid, "color: blue;text-decoration: underline");
		}
		$(targ + " .scrn_dlg").hide("fast");
	}
	
	function addBorder(targ){
		var close="<div class='dlg_title'>&nbsp; Border Settings<span class='ui-icon ui-icon-closethick' style='position:absolute;top:10px; right:10px;' title='Close' onclick=\"o_o.applyBorderOptions('" + targ + "')\"></span></div>";
		var b_form="<form>";		
		b_form +="<p><label>Border width(px)</label><input type='text' id='border_width' /></p>";
		b_form += "<p><label><input type='radio' name='all_none' value='all' checked onclick='$(\"[name=some_border]\").prop(\"checked\", false)'/>All borders</label></p>";
		b_form += "<p><label><input type='radio' name='all_none' value='some' /><label onclick='$(this).parent().trigger(\"click\")'><input type='checkbox' name='some_border' />Top border</label><label onclick='$(this).parent().trigger(\"click\")'><input type='checkbox' name='some_border' />Right border</label><label onclick='$(this).parent().trigger(\"click\")'><input type='checkbox' name='some_border' value='bottom' />Bottom border</label><label onclick='$(this).parent().trigger(\"click\")'><input type='checkbox' name='some_border' value='left' />Left border</label></label></p>";
		b_form += "<p><label><input type='radio' name='all_none' value='none' onclick='$(\"[name=some_border]\").removeAttr(\"checked\")' />No borders</label></p>";
		b_form +="<p>Border style <label><input type='radio' name='border_style' value='solid' checked />Solid</label><label><input type='radio' name='border_style' value='dashed' />Dashed</label><label><input type='radio' name='border_style' value='dotted' />Dotted</label><label><input type='radio' name='border_style' value='double' />Double</label></p>";
		b_form +="<div>Border color <div id='border_color' style='width:70px; height:70px; background-color:rgb(0,0,0);' onclick=\"o_o.popColor('" + targ + "', 'border color')\" title='Click to select border color from the color dialog'></div>";
		b_form += "</form>";
		$(targ + " .scrn_dlg").html(close + "<div class='dlg-content'><p>Set border options below and close dialog to apply<br /><em>You can set different style for each border by styling each border one at a time</em></p>" + b_form + "</div>")
		.fadeIn();
		$(targ + " .scrn_dlg>div:first-child").attr({"onmousedown": "$(this).parent().draggable().draggable('enable');", "onmouseup": "$(this).parent().draggable('disable')"});
		
		//the section below initialises the form above with the border attribute of the active element
		var all_none=$(targ + " .scrn_dlg [name=all_none]"), some_border=$(targ + " .scrn_dlg [name=some_border]"),border_styles=$(targ + " .scrn_dlg [name=border_style]");
		if(active_sel.rangeCount){
			var pel=active_range.commonAncestorContainer;
			if(pel.nodeType!=1){
				pel=pel.parentElement;
			}
			pel=$(pel);
			var el_border_width=pel.css("border-width").match(/[0-9]+px/gi) || ["0px"]; //the css should return a single border width or a collection all the border-side's width
			var width_count= el_border_width.length;
			var target_width=el_border_width[0].replace("px",""), targ=0;
			for(var k=0; k<width_count; k++){
				targ=parseInt(el_border_width[k].replace(/[^0-9.]+/ig,""));
				if(targ>0 && width_count>1){
					target_width=targ;
					$(some_border[k]).prop("checked","true");
					$(all_none[1]).prop("checked","true");
				}
			}
			$("#border_width").val(target_width);
			if($("#border_width").val()=="0"){
				$(all_none[2]).attr("checked","true");
			}
			else if($("#border_width").val()!="0" && width_count==1){
				$(all_none[0]).attr("checked","true");
			}
			var border_style=$.trim(pel.css("border-style").replace(/none/g,"")); //the border-style returns a single value or a collection for all its sides
			border_style= border_style || "none";
			border_styles.each(function(){
				if($(this).val()==border_style) $(this).prop("checked","true");
			});
			var b_col=pel.css("border-top-color").match(/\d+/g);
			$("#border_color").css({"background-color": "rgb(" + b_col[0] + ", " + b_col[1] + ", " + b_col[2] + ")"})
		}
	}
	
	function applyBorderOptions(targ){
		var all_none="";
		$(targ + " .scrn_dlg [name=all_none]").each(function(){
			if($(this).prop("checked")){
				all_none=$(this).val();
			}
		});
		var b_width=parseInt($("#border_width").val().replace(/[^0-9.]+/ig,"")) + "px",
			border_col=$("#border_color").css("background-color"),
			border_style="";
		$(targ + " .scrn_dlg [name=border_style]").each(function(){
			if($(this).prop("checked")) border_style=$(this).val();
		});
		
		//set focus back on the editable
		active_sel.removeAllRanges(); active_sel.addRange(active_range);
		//remove previous border styles if set
		var pel=active_range.commonAncestorContainer;
		if(pel.nodeType!=1){
			pel=pel.parentElement;
		}
		removeStyle(targ, pel.id, "border");
		var border=b_width + " " + border_style + " " + border_col;
		
		if(all_none=="all"){
			realFormat(targ, "border:" + border);
		}
		else if(all_none=="none"){
			realFormat(targ, "border: 0px solid transparent");
		}
		else if(all_none=="some"){
			var some_borders=$(targ + " .scrn_dlg [name=some_border]"), borders={};
			if ($(some_borders[0]).prop("checked")) realFormat(targ, "border-top:" + border);
			if ($(some_borders[1]).prop("checked")) realFormat(targ, "border-right:" + border);
			if ($(some_borders[2]).prop("checked")) realFormat(targ, "border-bottom:" + border);
			if ($(some_borders[3]).prop("checked")) realFormat(targ, "border-left:" + border);
		}
		$(targ + " .scrn_dlg").hide("fast");
	}
	
	function popMarginOptions(targ){
		var close="<div class='dlg_title'>&nbsp; Margin Settings<span class='ui-icon ui-icon-closethick' style='position:absolute;top:10px; right:10px;' title='Close' onclick=\"o_o.applyMarginOptions('" + targ + "'); $('" + targ + " .scrn_dlg').fadeOut();\"></span></div>";
		var m_form="<form>";		
		m_form +="<p><label>Margin left(px)</label><input type='text' id='margin_left' onblur=\"o_o.applyMarginOptions('" + targ + "');\" /></p>";
		m_form +="<p><label>Margin top(px)</label><input type='text' id='margin_top' onblur=\"o_o.applyMarginOptions('" + targ + "');\" /></p>";
		m_form +="<p><label>Margin bottom(px)</label><input type='text' id='margin_bottom' onblur=\"o_o.applyMarginOptions('" + targ + "');\" /></p>";
		m_form +="<p><label>Margin Right(px)</label><input type='text' id='margin_right' onblur=\"o_o.applyMarginOptions('" + targ + "');\" /></p>";
		m_form += "</form>";
		$(targ + " .scrn_dlg").html(close + "<div class='dlg-content'><p>Set margin options below and close dialog to apply</p>" + m_form + "</div>")
		.fadeIn();
		$(targ + " .scrn_dlg>div:first-child").attr({"onmousedown": "$(this).parent().draggable().draggable('enable');", "onmouseup": "$(this).parent().draggable('disable')"});
		//the section below initialises the form above with the margin attribute of the active element
		if(active_sel.rangeCount){
			var pel=active_range.commonAncestorContainer;
			if(pel.nodeType!=1){
				pel=pel.parentElement;
			}
			pel=$(pel);
			$("#margin_left").val(parseInt(pel.css("margin-left").replace(/[^0-9.]+/ig,"")));
			$("#margin_top").val(pel.css("margin-top").replace(/[^0-9.]+/g,""));
			$("#margin_bottom").val(pel.css("margin-bottom").replace(/[^0-9.]+/g,""));
			$("#margin_right").val(pel.css("margin-right").replace(/[^0-9.]+/g,""));
		}
	}
	function applyMarginOptions(targ){
		//return focus to scrn
		active_sel.removeAllRanges(); active_sel.addRange(active_range);
		//remove previous margin styles if set
		var pel=active_range.commonAncestorContainer;
		if(pel.nodeType!=1){
			pel=pel.parentElement;
		}
		removeStyle(targ, pel.id, "margin");
		var margin=$("#margin_top").val().replace(/[^0-9.]+/g, "") || "0"; margin += " ";
		margin += $("#margin_right").val().replace(/[^0-9.]+/g, "") || "0"; margin += " ";
		margin += $("#margin_bottom").val().replace(/[^0-9.]+/g, "") || "0"; margin += " ";
		margin += $("#margin_left").val().replace(/[^0-9.]+/g, "") || "0"; margin += " ";
		margin=margin.replace(/\s/g, "px ");
		realFormat(targ, "margin: " + $.trim(margin));
	}
	
	function popPaddingOptions(targ){
		var close="<div class='dlg_title'> &nbsp; Padding Settings<span class='ui-icon ui-icon-closethick' style='position:absolute;top:10px; right:10px;' title='Close' onclick=\"o_o.applyPaddingOptions('" + targ + "'); $('" + targ + " .scrn_dlg').hide('fast');\"></span></div>";
		var m_form="<form>";	
		m_form +="<p><label>Padding left(px)</label><input type='text' id='padding_left' onblur=\"o_o.applyPaddingOptions('" + targ + "');\" /></p>";
		m_form +="<p><label>Padding right(px)</label><input type='text' id='padding_right' onblur=\"o_o.applyPaddingOptions('" + targ + "');\" /></p>";
		m_form +="<p><label>Padding top(px)</label><input type='text' id='padding_top' onblur=\"o_o.applyPaddingOptions('" + targ + "');\" /></p>";
		m_form +="<p><label>Padding bottom(px)</label><input type='text' id='padding_bottom' onblur=\"o_o.applyPaddingOptions('" + targ + "');\" /></p>";
		m_form += "</form>";
		$(targ + " .scrn_dlg").html(close + "<div class='dlg-content'><p>Set padding options below and close dialog to apply</p>" + m_form + "</div>")
		.fadeIn();
		$(targ + " .scrn_dlg>div:first-child").attr({"onmousedown": "$(this).parent().draggable().draggable('enable');", "onmouseup": "$(this).parent().draggable('disable')"});
		//the section below initialises the form above with the margin attribute of the active element
		if(active_sel.rangeCount){
			var pel=active_range.commonAncestorContainer;
			if(pel.nodeType!=1){
				pel=pel.parentElement;
			}
			pel=$(pel);
			$("#padding_left").val(parseInt(pel.css("padding-left").replace(/[^0-9.]+/ig,"")));
			$("#padding_top").val(pel.css("padding-top").replace(/[^0-9.]+/g,""));
			$("#padding_bottom").val(pel.css("padding-bottom").replace(/[^0-9.]+/g,""));
			$("#padding_right").val(pel.css("padding-right").replace(/[^0-9.]+/g,""));
		}
	}
	function applyPaddingOptions(targ){
		//return focus to scrn
		active_sel.removeAllRanges(); active_sel.addRange(active_range);
		//remove previous margin styles if set
		var pel=active_range.commonAncestorContainer;
		if(pel.nodeType!=1){
			pel=pel.parentElement;
		}
		removeStyle(targ, pel.id, "padding");
		var padding=$("#padding_top").val().replace(/[^0-9.]+/g, "") || "0"; padding += " ";
		padding += $("#padding_right").val().replace(/[^0-9.]+/g, "") || "0"; padding += " ";
		padding += $("#padding_bottom").val().replace(/[^0-9.]+/g, "") || "0"; padding += " ";
		padding += $("#padding_left").val().replace(/[^0-9.]+/g, "") || "0"; padding += " ";
		padding=padding.replace(/\s/g, "px ");
		realFormat(targ, "padding: " + $.trim(padding));
	}
	
	function popHoverMenu(targ){
		var close="<div class='dlg_title'>&nbsp; OnHover Settings<span class='ui-icon ui-icon-closethick' style='position:absolute;top:10px; right:10px;' title='Close' onclick=\"o_o.applyHoverOptions('" + targ + "');\"></span></div>";
		var h_form="<form id='hover_options'><p id='targ_ele'></p>";
		h_form += "<p><label><input type='checkbox' onclick='if($(this).prop(\"checked\")){$(\"#targ_ele\").css({\"font-weight\":\"bold\"});}else{$(\"#targ_ele\").css({\"font-weight\":\"normal\"})}' />Embolden</label></p>";
		h_form += "<p><label><input type='checkbox' onclick='if($(this).prop(\"checked\")){$(\"#targ_ele\").css({\"text-decoration-line\":\"underline\"});}else{$(\"#targ_ele\").css({\"text-decoration-line\":\"none\"})}' />Underline</label></p>";
		h_form += "<p><label><input type='checkbox' onclick='if($(this).prop(\"checked\")){$(\"#targ_ele\").css({\"font-style\":\"italic\"});}else{$(\"#targ_ele\").css({\"font-style\":\"normal\"})}' />Italize</label></p>";
		h_form += "<p><input type='button' value='Change font Color' onclick=\"o_o.popColor('" + targ + "', '', function(ret_col){$('#targ_ele').css({'color': ret_col})}, $('targ_ele').css('color'))\" /></p>";
		h_form += "<p><input type='button' value='Change background Color' onclick=\"popColor('" + targ + "', '', function(ret_col){$('#targ_ele').css({'background-color': ret_col})}, $('targ_ele').css('background-color'))\" /></p>";
		h_form += "<p>Hover speed(ms) <input type='text' id='hover_speed' value='400' /></p>";
		h_form += "</form>";
		$(targ + " .scrn_dlg").html(close + "<div class='dlg-content'><p>Set hover options below and close dialog to apply</p>" + h_form + "</div>")
		.fadeIn();
		$(targ + " .scrn_dlg>div:first-child").attr({"onmousedown": "$(this).parent().draggable().draggable('enable');", "onmouseup": "$(this).parent().draggable('disable')"});
		
		//initialise form with targ ele
		var pel=active_range.commonAncestorContainer, scrn=$(targ + " .note_content");
		if(pel.nodeType!=1){
			pel=pel.parentElement;
		}
		if(scrn.attr("id") == pel.id || scrn.find(pel)[0]){//within work scope
			pel=$(pel);
			$("#targ_ele").text(pel.text()).css({color: pel.css("color"), "background-color": pel.css("background-color"), "font-weight" : pel.css("font-weight"), "text-decoration": pel.css("text-decoration")});
			var cboxes=$("#hover_options [type=checkbox]")
			if(pel.css("font-weight")=="bold" || pel.css("font-weight")>=700) $(cboxes[0]).prop("checked","true");
			if(pel.css("text-decoration-line")=="underline" || pel.css("text-decoration")=="underline") $(cboxes[1]).prop("checked","true");
			if(pel.css("font-style")=="italic") $(cboxes[2]).attr("checked","true");
		}
	}
	
	function applyHoverOptions(targ){
		//return focus on scrn
		active_sel.removeAllRanges(); active_sel.addRange(active_range);
		
		var t=$("#targ_ele"), pel=active_range.commonAncestorContainer,fid;
		if(pel.nodeType!=1){
			pel=pel.parentElement;
		}
		while(!pel.id){
			pel=pel.parentElement;
		}
		if(active_sel.toString()){
			fid=getFreeId(targ);
			var span=document.createElement("span");
			span.id=fid;
			span.innerHTML=active_sel.toString();
			active_range.deleteContents();
			active_range.insertNode(span);
			active_sel.collapse(document.getElementById(fid), 1);
		}
		else{
			fid=pel.id;
		}
		var hover_str= "";
		hover_str += "font-weight: " + t.css("font-weight") + ";";
		hover_str += "text-decoration: " + t.css("text-decoration") + ";";
		hover_str += "font-style: " + t.css("font-style") + ";";
		hover_str += "color: " + t.css("color") + ";";
		hover_str += "background-color: " + t.css("background-color");
		$(targ + " .scrn_dlg").hide("fast");
		var spd=$("#hover_speed").val().replace(/[^0-9]/g, "");
		spd /= 1000;

		var trans_str="transition: " + spd + "s ease-in-out all;";
		trans_str +="-moz-transition: " + spd + "s ease-in-out all;";
		trans_str +="-webkit-transition: " + spd + "s ease-in-out all";
		transferStyle(targ, fid, trans_str);
		transferStyle(targ, fid + ":hover", hover_str);
	}
	
	function popCursorMenu(targ){
		var close="<div class='dlg_title'>&nbsp; Cursor Setting<span class='ui-icon ui-icon-closethick' style='position:absolute;top:10px; right:10px;' title='Close' onclick=\"o_o.assignCursor('" + targ + "');\"></span></div>";
		var cur_names=["alias", "all-scroll", "auto", "cell", "col-resize", "context-menu", "copy", "crosshair", "default", "e-resize", "ew-resize", "grab", "grabbing", "help", "move", "n-resize", "nesw-resize", "no-drop", "none", "not-allowed", "ns-resize", "nw-resize", "nwse-resize", "pointer", "progress", "row-resize", "s-resize", "se-resize", "sw-resize", "text", "vertical-text", "w-resize", "wait", "zoom-in", "zoom-out"];
		var c_form="<form id='cursor_options'>";
		c_form += "<ul></ul>";
		c_form += "</form>";
		
		$(targ + " .scrn_dlg").html(close + "<div class='dlg-content'><p>Select a cursor for the selection and close dialog to apply</p>" + c_form + "</div>")
		.fadeIn();
		$(targ + " .scrn_dlg>div:first-child").attr({"onmousedown": "$(this).parent().draggable().draggable('enable');", "onmouseup": "$(this).parent().draggable('disable')"});
		
		var ul=$("#cursor_options ul"), kount=cur_names.length, targ_cur, checked,
			pel=active_range.commonAncestorContainer;
		if(pel.nodeType!=1){
			pel= pel.parentElement;
		}
		while(!pel.id){
			pel= pel.parentElement;
		}
		pel=$(pel);
		for (var k=0; k<kount; k++){
			targ_cur= cur_names[k];
			checked= pel.css("cursor") == targ_cur ? "checked" : ""; //changeTo(kase, str)
			ul.append("<li style='cursor:" + targ_cur + ";'><label><input type='radio' name='sel_cur' " + checked + ">" + o_o.changeTo("TitleCase", targ_cur.replace(/\-/g," ")) + "</label></li>");
		}
	}
	function assignCursor(targ){
		//return focus on scrn
		active_sel.removeAllRanges(); active_sel.addRange(active_range);
		$("#cursor_options input[name=sel_cur]").each(function(){
			if($(this).prop("checked")){
				realFormat(targ, "cursor: " + $(this).parent().parent().css("cursor"));
			}
		});
		$(targ + " .scrn_dlg").hide("fast");
	}
	

	function popShowMenu(targ, targ_obj){
		var pview_show= objCreate(o_o);
		
		var close="<div class='dlg_title'>&nbsp; Slide settings<span class='ui-icon ui-icon-closethick' style='position:absolute;top:10px; right:10px;' title='Close' onclick=\"o_o.addShow('" + targ + "');\"></span></div>";
		
		var s_form="<form id='show_options'>";
		s_form += "<div id='slide_scrn'><div title='Click to remove slide' onclick='o_o.removeSlide(event)'></div></div>";
		
		s_form += "<div id='show_names'><div><p><em>Select slide <b>in</b> show styles you want</em></p></div><div><p><em>Select slide <b>out</b> show styles you want</em></p></div></div>";
		
		s_form += "<p><label>Transition Duration(s) <input type='text' id='transition_duration' value='10' onkeyup='o_o.previewShow()' /></label><label>Transition delay(s) <input type='text' id='delay' value='5' onkeyup='o_o.previewShow()' /><label></label></p>";
		s_form += "<p><label>Slide width(%) <input type='text' id='show_width' value='100' max='100' min='10' /></label><label>Slide height(px) <input type='text' id='show_height' value='400' /><label></label></p>";
		
		s_form += "<div id='add_show_tab'>";
		s_form += "<ul><li><a href='#add_text'>Add text</a></li><li><a href='#add_image'>Add image</a></li></ul>";
		s_form += "<div id='add_text'><p>Type a text message into the box and click on 'Add Show' to add to list</p><div><textarea id='txt_show'></textarea></div></div>";
		s_form += "<div id='add_image'><p>Click on 'Add Image' to select image and 'Add Show' to add to list</p><div><img id='show_sample_img' src='' style='width:100%; height:200px;' /><input type='button' value='Add Image' onclick='' class='add-img-btn' /></div></div>";
		s_form += "<input type='button' value='Add Show' onclick='o_o.add2Scrn()' /></div>";
		
		s_form += "</form>";
		
		$(targ + " .scrn_dlg").html(close + "<div class='dlg-content'><p>Add text or images to the show and set other options available.<br> When satisfied with the show-preview, close the dialog box to apply</p>" + s_form + "</div>")
		.slideDown();
		$(targ + " .scrn_dlg>div:first-child").attr({"onmousedown": "$(this).parent().draggable().draggable('enable');", "onmouseup": "$(this).parent().draggable('disable')"});
		$("#add_show_tab").tabs();
		
		var add_img_str="o_o_textEditor[$('" + targ + " .kj-media').attr('data-obj')].insertMedia('" + targ + "', function(loc){$('#show_sample_img').attr('src', loc);})";
		$("#show_options .add-img-btn").attr("onclick", add_img_str);
		//initialise with argument if one exists
		if(targ_obj){
			var cloned_obj= targ_obj.clone(true);
			$("#slide_scrn").attr("data-instruct", targ_obj.attr("id")).find(">div").html(cloned_obj.html()).find(">*").removeAttr("style").removeAttr("class");
			var cloned_evt=cloned_obj.attr("onkeydown").toString().match(/slide4Me.+(\[.+\]).+(\[.+\]).+?(\d+).+(\d+).+/);
			var targ_out_names=cloned_evt[1].replace(/\[|\]|\'|\"|\s/g,"").split(","),
				targ_in_names=cloned_evt[2].replace(/\[|\]|\'|\"|\s/g,"").split(",");
			$("#transition_duration").val(cloned_evt[3]);
			$("#delay").val(cloned_evt[4]);
			var scrn_w=document.getElementById("scrn").clientWidth, show_width=$(targ_obj).css("width").replace("px","");
			show_width =(show_width/scrn_w) * 100;
			show_width= show_width.toString().replace(/(\.\d{2})\d+/, "$1") + "%";
			$("#show_width").val(show_width);
			$("#show_height").val($(targ_obj).css("height").replace("px", ""));
		}
		var show_kount= pview_show.slide_in_names.length, in_names= $("#show_names>div:first-child"), out_names= $("#show_names>div:nth-child(2)"), 
			checked="";
		for(var k=0; k<show_kount; k++){
			if(targ_obj){
				if(o_o.isInArray(pview_show.slide_in_names[k], targ_in_names, false))
					checked= "checked";
				in_names.append("<label class='list-show-names'><input type='checkbox' onclick='o_o.previewShow()' name='in_names' value='" + pview_show.slide_in_names[k] + "'"  + checked + "/> " + pview_show.slide_in_names[k] + "</label>");
				checked ="";
				if(o_o.isInArray(pview_show.slide_out_names[k], targ_out_names, false))
					checked= "checked";
				out_names.append("<label class='list-show-names'><input type='checkbox' onclick='o_o.previewShow()' name='out_names' value='" + pview_show.slide_out_names[k] + "'" + checked + "/> " + pview_show.slide_out_names[k] + "</label>");
				checked ="";
			}
			else{
				checked = k==0? "checked" : "";
				in_names.append("<label class='list-show-names'><input type='checkbox' onclick='o_o.previewShow()' name='in_names' value='" + pview_show.slide_in_names[k] + "'"  + checked + "/> " + pview_show.slide_in_names[k] + "</label>");
				out_names.append("<label class='list-show-names'><input type='checkbox' onclick='o_o.previewShow()' name='out_names' value='" + pview_show.slide_out_names[k] + "'" + checked + "/> " + pview_show.slide_out_names[k] + "</label>");
			}
		}
		if(targ_obj) o_o.previewShow();
	}
	
	function removeSlide(evt){
		var ev= evt || window.event;
		if(ev.target.tagName=="IMG" || ev.target.tagName=="P"){
			$(ev.target).remove();
		}
	}
	function add2Scrn(){//adds the image or text to the sample show screen for preview
		var show_str="";
		if($("#add_show_tab").tabs("option", "active") == 0 && $("#txt_show").val()){
			show_str= "<p>" + $("#txt_show").val() + "</p>";
			$("#txt_show").val("");
		}
		else if($("#add_show_tab").tabs("option", "active") == 1 && $("#show_sample_img").attr("src")){
			show_str= "<img src='" + $("#show_sample_img").attr("src") + "' />";
			$("#show_sample_img").attr("src","");
		}
		$("#slide_scrn>div:first-child").append(show_str);
		o_o.previewShow();
	}
	function addShow(targ){
		var shows=$("#slide_scrn>div:first-child>*");
		if(o_o.previewShow()){//previewShow() helps us in the required validations
			if($("#slide_scrn").attr("data-instruct")){
				var targ_id=$("#slide_scrn").attr("data-instruct");
				$("#" + targ_id).remove();
			}
			var free_id=getFreeId(), show_str="";
			shows.each(function(k){
				if(this.tagName=="IMG"){
					show_str += "<img src='" + $(this).attr("src") + "' id='" + free_id + "_show" + k + "' />";
				}
				else if(this.tagName=="P"){
					show_str += "<p data-type='text' id='" + free_id + "_show" + k + "'>" + $(this).text() + "</p>";
				}
			});

			var in_names=[], out_names=[],
				show_options={},
				pview_show= objCreate(o_o);
				show_options.duration= $("#transition_duration").val().replace(/[^0-9.]+/g,"");
				show_options.delay=$("#delay").val().replace(/[^0-9.]+/g,"");

			$("#show_names [name=in_names]").each(function(){if($(this).prop("checked")) in_names.push($(this).val())});
			$("#show_names [name=out_names]").each(function(){if($(this).prop("checked")) out_names.push($(this).val())});

			show_options.in=in_names.join(","); show_options.out=out_names.join(",");
			show_options=JSON.stringify(show_options);

			var slide_targ= "'#" + free_id + ">*'";
		
			var on_evt="var " + free_id + "= o_o.objCreate(o_o); " + free_id + ".slide4Me(" + slide_targ + ", "  + show_options + ")";
			var show_width= $("#show_width").val().replace(/[^0-9.]+/g,""),
				show_height=$("#show_height").val().replace(/[^0-9.]+/g,""),
				margin_left= (100 - show_width)/2;
			
			//return focus on scrn
			active_sel.removeAllRanges(); active_sel.addRange(active_range);
			var show_div= document.createElement("div");
			show_div.id= free_id;
			show_div.setAttribute("data-type", "slide show");
			show_div.setAttribute("onkeydown", on_evt);
			show_div.innerHTML=show_str;
			active_range.insertNode(show_div);
			active_range.collapse(true)
			transferStyle(targ, free_id, "width: " + show_width + "%;height: " + show_height + "px;margin-left: " + margin_left + "%");
			$("#" + free_id).trigger("keydown");
			
		}
		$(targ + " .scrn_dlg").html("").slideUp();
	}

	function previewShow(){
		var in_names=[], out_names=[],
			show_options={},
			pview_show= objCreate(o_o);
			show_options.duration= $("#transition_duration").val().replace(/[^0-9.]+/g,"");
			show_options.delay=$("#delay").val().replace(/[^0-9.]+/g,"");
		
		$("#show_names [name=in_names]").each(function(){if($(this).prop("checked")) in_names.push($(this).val())});
		$("#show_names [name=out_names]").each(function(){if($(this).prop("checked")) out_names.push($(this).val())});
		if(!in_names.length || !out_names.length || $("#slide_scrn>div>*").length<2 || show_options.duration=="" || show_options.delay==""){
			return false;
		}
		show_options.in=in_names.join(","); show_options.out=out_names.join(",");
		pview_show.slide4Me("#slide_scrn>div>*", show_options);
		return true;
	}
	
	function popImgSet(targ_img){
		var close="<div class='dlg_title'>&nbsp; Image Settings<span class='ui-icon ui-icon-closethick' style='position:absolute;top:10px; right:10px;' title='Close' onclick='$(targ).find(\".scrn_dlg\").fadeOut();'></span></div>";
		var set_form= "<div id='img_set'>";
		set_form += "<div><label>Scale by</label><span class='o-o-spinner' onclick='o_o.scrollSpinner(event)' data-value='Percent\nPixel'><span class='o-o-spinner-text' id='img_scale'>Percent</span><span class='o-o-spinner-up'></span><span class='o-o-spinner-down'></span></span></div>";
		set_form += "<div><label>Image Width</label><span class='o-o-spinner' onclick='o_o.scrollSpinner(event)' data-from='0'><span class='o-o-spinner-text' id='img_width'></span><span class='o-o-spinner-up'></span><span class='o-o-spinner-down'></span></span></div>";
		//set_form += "<div><label>Image Height</label><span class='o-o-spinner' onclick='o_o.scrollSpinner()' data-from='0'><span class='o-o-spinner-text' id='img_height'></span><span class='o-o-spinner-up'></span><span class='o-o-spinner-down'></span></span></div>";
		set_form += "<div><label>Float by</label><span class='o-o-spinner' onclick='o_o.scrollSpinner(event)' data-value='None\nLeft\nRight\nUnderlay\nOverlay'><span class='o-o-spinner-text' id='img_float'></span><span class='o-o-spinner-up'></span><span class='o-o-spinner-down'></span></span></div>";
		set_form += "<div class='no-display'><label>Left</label><span class='o-o-spinner' onclick='o_o.scrollSpinner(event)' data-from='0'><span class='o-o-spinner-text' id='img_left'></span><span class='o-o-spinner-up'></span><span class='o-o-spinner-down'></span></span></div>";
		set_form += "<div class='no-display'><label>Top</label><span class='o-o-spinner' onclick='o_o.scrollSpinner(event)' data-from='0'><span class='o-o-spinner-text' id='img_top'></span><span class='o-o-spinner-up'></span><span class='o-o-spinner-down'></span></span></div>";
		set_form += "<div><label>Transparency</label><span class='o-o-spinner' onclick='o_o.scrollSpinner(event)' data-from='0' data-to='100'><span class='o-o-spinner-text' id='img_opacity'></span><span class='o-o-spinner-up'></span><span class='o-o-spinner-down'></span></span></div>";
		set_form += "</div>";
		$(targ + " .scrn_dlg").html(close + "<div class='dlg-content'>" + set_form + "</div>").fadeIn("fast");
		$(targ + " .scrn_dlg>div:first-child").attr({"onmousedown": "$(this).parent().draggable().draggable('enable');", "onmouseup": "$(this).parent().draggable('disable')"});
		//initialise form
		var img=$(targ_img).parent(), scrn_w=document.getElementById("scrn").clientWidth,
			img_width= (img.css("width").replace("px", "")/scrn_w) * 100;
		$("#img_width").html(img_width.toString().replace(/(\.\d{2})\d+/, "$1"));
		//$("#img_height").html(img.css("height").replace("px", ""));
		if(img.css("position")=="absolute"){
			$("#img_set .no-display").removeClass("no-display");
			$("#img_left").html(img.css("left").replace("px", ""));
			$("#img_top").html(img.css("top").replace("px", ""));
			if(img.css("z-index")>1) $("#img_float").html("Overlay");
			else $("#img_float").html("Underlay");
		}
		else if(img.css("float")=="right"){
			$("#img_float").html("Right");
			$("#img_left,#img_top").parent().parent().addClass("no-display");
		}
		else if(img.css("float")=="left"){
			$("#img_float").html("Left");
			$("#img_left,#img_top").parent().parent().addClass("no-display");
		}
		else{
			$("#img_float").html("None");
			$("#img_left,#img_top").parent().parent().addClass("no-display");
		}
		$("#img_opacity").html(img.css("opacity") * 100);
		$("#img_set").attr("onclick", "setImage('" + targ_img.id + "', event)");
	}
	function setImage(targ_id, evt){
		var img=$("#" + targ_id), img_style="", img_scale=$("#img_scale").html()=="Percent" ? "%" : "px",
			nne=img.parent(), img_width, wscrn=document.getElementById("scrn").clientWidth;
		var img_float= $("#img_float");
		
		var e= evt || window.event;
		if($(e.target).siblings("#img_scale")[0]){
			if(img_scale=="%")
				img_width= (nne.css("width").replace("px", "")/wscrn) * 100;
			else img_width= nne.css("width").replace("px", "");
		
			$("#img_width").html(img_width.toString().replace(/(\.\d{2})\d+/,"$1"));
			return;
		}
		
		img_width= $("#img_width").html() + img_scale;
		img_style= "width: " + img_width;
		//img_style += ";height: " + $("#img_height").html() + "px";
		if(img_float.html()=="Left"){
			$("#img_left,#img_top").parent().parent().hide();
			img_style +=";float: left";
			removeStyle(nne[0].id, "position,left,top,height");
		}
		else if(img_float.html()=="Right"){
			$("#img_left,#img_top").parent().parent().hide();
			img_style +=";float: right";
			removeStyle(nne[0].id, "position,left,top,height");
		}
		else if(img_float.html()=="Overlay"){
			$("#img_left,#img_top").parent().parent().show();
			img_style +=";Position: absolute;z-index: 2;left: " + $("#img_left").html() + "px;top: " + $("#img_top").html() + "px;height: " + nne.css("height");
			removeStyle(nne[0].id, "float");
		}
		else if(img_float.html()=="Underlay"){
			$("#img_left,#img_top").parent().parent().show();
			img_style +=";Position: absolute;z-index: -1;left: " + $("#img_left").html() + "px;top: " + $("#img_top").html() + "px;height: " + nne.css("height") ;
			removeStyle(nne[0].id, "float");
		}
		else if(img_float.html()=="None"){
			$("#img_left,#img_top").parent().parent().hide();
			removeStyle(nne[0].id, "float,position,left,top");
		}
		img_style += ";opacity: " + $("#img_opacity").html()/100 ;
		transferStyle(targ, nne[0].id, img_style);
	}
	
	function popChars(targ){
		var close="<div class='dlg_title'> &nbsp; Popular (not readily available) Characters<span class='ui-icon ui-icon-closethick' style='position:absolute;top:10px; right:10px;' title='Close' onclick=\"o_o.insertChar('" + targ + "');\"></span></div>";
		var char_names=["&aacute;", "&Aacute;", "&Acirc;", "&acute;", "&AElig;", "&aelig;", "&agrave;", "&Agrave;", "&alefsym;", "&alpha;", "&Alpha;", "&amp;", "&and;", "&ang;", "&aring;", "&Aring;", "&asymp;", "&atilde;", "&auml;", "&bdquo;", "&beta;", "&brvbar;", "&bull;", "&cap;", "&ccedil;", "&cedil;", "&cent;", "&chi;", "&circ;", "&clubs;", "&cong;", "&copy;", "&crarr;", "&cup;", "&curren;", "&dagger;", "&darr;", "&dArr;", "&deg;", "&delta;", "&diams;", "&die;", "&divide;", "&eacute;", "&ecirc;", "&egrave;", "&empty;", "&emsp;", "&ensp;", "&epsilon;", "&equiv;", "&eta;", "&eth;", "&euml;", "&euro;", "&exist;", "&forall;", "&frac12;", "&frac14;", "&frac34;", "&frasl;", "&gamma;", "&ge;", "&gt;", "&harr;", "&hArr;", "&hearts;", "&hellip;", "&iacute;", "&icirc;", "&iexcl;", "&igrave;", "&image;", "&infin;", "&int;", "&iota;", "&iquest;", "&isin;", "&iuml;", "&kappa;", "&lambda;", "&lang;", "&laquo;", "&larr;", "&lArr;", "&lceil;", "&ldquo;", "&le;", "&lfloor;", "&lowast;", "&loz;", "&lrm;", "&lsaquo;", "&lsquo;", "&lt;", "&macr;", "&mdash;", "&micro;", "&middot;", "&minus;", "&mu;", "&nabla;", "&nbsp;", "&ndash;", "&ne;", "&ni;", "&not;", "&notin;", "&nsub;", "&ntilde;", "&nu;", "&oacute;", "&ocirc;", "&ograve;", "&oline;", "&omega;", "&omicron;", "&oplus;", "&or;", "&ordf;", "&ordm;", "&oslash;", "&otilde;", "&otimes;", "&ouml;", "&para;", "&part;", "&permil;", "&perp;", "&phi;", "&pi;", "&piv;", "&plusmn;", "&pound;", "&prime;", "&prod;", "&prop;", "&psi;", "&quot;", "&radic;", "&rang;", "&raquo;", "&rarr;", "&rArr;", "&rceil;", "&rdquo;", "&real;", "&reg;", "&rfloor;", "&rho;", "&rlm;", "&raquo;", "&rsquo;", "&sbquo;", "&scaron;", "&sdot;", "&sect;", "&shy;", "&sigma;", "&sim;", "&spades;", "&sub;", "&sube;", "&sum;", "&sup;", "&sup1;", "&sup2;", "&sup3;", "&supe;", "&szlig;", "&tau;", "&there4;", "&theta;", "&thetasym;", "&thinsp;", "&thorn;", "&tilde;", "&times;", "&trade;", "&uacute;", "&uarr;", "&uArr;", "&ucirc;", "&ugrave;", "&uml;", "&upsih;", "&upsilon;", "&uuml;", "&weierp;", "&xi;", "&yacute;", "&yen;", "&yuml;", "&zeta;"];
		var ch_form="<form id='chars_frm' onclick='o_o.selChar(event)'>";
		ch_form += "</form>";
		
		$(targ + " .scrn_dlg").html(close + "<div class='dlg-content'><p>Select a character to insert and close dialog to apply</p>" + ch_form + "</div>")
		.fadeIn();
		$(targ + " .scrn_dlg>div:first-child").attr({"onmousedown": "$(this).parent().draggable().draggable('enable');", "onmouseup": "$(this).parent().draggable('disable')"});
		
		var kount=char_names.length, targ_char;
		for (var k=0; k<kount; k++){
			targ_char= char_names[k];
			 //changeTo(kase, str)
			$("#chars_frm").append("<span title='" + targ_char.replace(/[&;]/g, "") + "'>" + targ_char + "</span>");
		}
	}
	
	function selChar(evt){
		var ev= evt || window.event;
		if(evt.target.tagName=="SPAN"){
			$(evt.target).addClass("selected").siblings().removeClass("selected");
		}
	}
	
	function insertChar(targ){
		if(active_sel.rangeCount){
			var char_node=document.createTextNode($("#chars_frm .selected").html());
			active_range.deleteContents();
			active_range.insertNode(char_node);
		}
		$(targ + " .scrn_dlg").fadeOut();
	}
	
	function tryClose(targ, cb){
		if(changes){
			var obj_str=targ.toString().replace(/[^a-z0-9_]/ig, "");
			if(changes[obj_str]){
				//run your custom before close function. To continue your function should evaluate to true
				if(typeof(this.beforeClose)=="function"){
					if(!this.beforeClose()) { // your beforeClose should evaluate to true
						return;
					}
				}


				var acf=function(){return true;}
				if(typeof(this.afterClose)=="function"){
					acf= this.afterClose;
				}

				if(changes[obj_str].start_html.replace(/["]/g, "'")!= $("#" + obj_str + " .note_content").html().replace(/["]/g, "'")){
					if(window.confirm("Do you want to close the editor without saving changes?")){
						$(targ + " .note_content").html(""); //clear content so that getfreeid can get a fresh editor to work with
						var fid=getFreeId(targ);
						$(targ + " .note_content").html("<div id='" + fid + "'>&nbsp; </div>");
						$(targ + " .page_parser").html("");
						$(targ + " .mobile_rules").html("@media only screen and (max-width:640px){}");
						changes[obj_str].start_html="<div id='" + fid + "'>&nbsp; </div>";
						acf();
						if(cb) cb(targ);
						return true;
					}
				}
				else{
					$(targ + " .note_content").html(""); //clear content so that getfreeid can get a fresh editor to work with
					var fid=getFreeId(targ);
					$(targ + " .note_content").html("<div id='" + fid + "'>&nbsp; </div>");
					$(targ + " .page_parser").html("");
					$(targ + " .mobile_rules").html("@media only screen and (max-width:640px){}");
					changes[obj_str].start_html="<div id='" + fid + "'>&nbsp; </div>";
					acf();
					if(cb) cb(targ);
					return true;
				}
			}
		}
		return false;
	}
	function savePage(targ, cb){
		if(!this.save_script){
			throw new Error("Please specify an 'save_script' option for the textEditor function.\nThe 'save_option' should be a path pointing to a back-end script where the editor's content can be saved");
		}
		if(typeof(this.beforeSave)=="function"){
			if(!this.beforeSave()) { // your beforeSave should evaluate to true
				return;
			}
		}
		var asf=function(){return true;}
		if(typeof(this.afterSave)=="function"){
			asf= this.afterSave;
		}

		var appends="";
		if(this.appends){
			if(typeof(this.appends)=="object"){
				for(var j in this.appends){
					appends += "&" + j + "=" + encodeURIComponent(this.appends[j]);
				}
			}
		}

		var scrn= $(targ + " .note_content"), parser= $(targ + " .page_parser"), mobile= $(targ + " .mobile_rules"),
			obj_str=targ.toString().replace(/[^a-z0-9_]/ig, ""),
			content="<div class='note_content'>" + scrn.html() + "</div><style class='page_parser'>" + parser.html() + "</style><style class='mobile_rules'>" + mobile.html() + "</style>",
			file_name=$(targ + " .file_name").val();
		$.ajax({
			type: "post", dataType: "html",
			data: "note=" + encodeURIComponent(content) + "&file_name=" + encodeURIComponent(file_name) + appends,
			url: this.save_script,
			success: function(resp){
				if(/success|save/i.test(resp)){
					changes[obj_str].start_html=scrn.html();
				}
				o_o.makeAToast(resp, "5s", {"background-color": "black", color: "white"}, function(){asf(resp); if(cb)cb;});

			}
		});
	}
	function loadHTml(html){
		//var note_page=html.toString().match(/\<div class=\s?["']note_content["']\>(.|\s)+?\<style class=\s?["']page_parser["']\>/);
		//console.log(note_page);
	}
	function objCreate(objt){
		if(window.Object.create){
			return window.Object.create(objt);
		}
		else{
			function fObj(){}
			fObj.prototype= objt;
			return new fObj();
		}
	}


function insertMedia(targ, cb){
	if(!this.action_script){
		throw new Error("Please specify an 'action_script' option for the textEditor function.\nThe 'action_option' should be a path pointing a to back-end script where uploads are handled");
	}
	//loadMedia(_file, post_address, appends, cb)
	var appends_str= obj2Str(this.appends), onchange_str="";
	if(appends_str==""){
		onchange_str= "$('[value=from_disk]:visible').prop('checked', true); o_o.loadMedia($('#upload_file')[0], '" + this.action_script + "', '', o_o.helpUpload)";
	}
	else{
		onchange_str= "$('[value=from_disk]:visible').prop('checked', true); o_o.loadMedia($('#upload_file')[0], '" + this.action_script + "', '" + appends_str + "', o_o.helpUpload)";
	}
	var p_form="<p>Upload or choose a media from your gallery. Close dialogbox to apply</p><form id='gallery_frm'>";
	p_form += "<p><label>Media width(px): <input type='text' id='img_width' /></label><label>Media height(px): <input type='text' id='img_height' /></label><label>Media label: <input type='text' id='img_caption' /></label></p>";
	p_form +="<fieldset><legend>Embed a media from Youtube</legend><label><input name='insert_this' value='from_utube' type='radio' checked /> Youtube media ID <input type='text' id='utube_id' onfocus=\"$('[value=from_utube]:visible').prop('checked', true);\" /></label></fieldset>";
	p_form += "<fieldset><legend>Import a media from disk</legend><p class='o-o-upload'><input type='file' id='upload_file' /><span>Import a media file &nbsp; </span></p>";
	p_form += "<p><label><input type='radio' name='insert_this' value='from_disk' /><br /><img class='sample_upload' src='' data-base='" + this.img_location + "' /><video class='sample_upload' data-base='" + this.img_location + "'></video></label></p></fieldset>";
	p_form += "OR<br /><fieldset id='gallery_array'><legend>Select from your gallery below</legend></fieldset>";
	p_form += "</form>";
	var close="<div class='dlg_title'><span id='media_close' class='ui-icon ui-icon-closethick' style='position:absolute;top:10px; right:10px;' title='Close' ></span></div>";
	$(targ + " .img_dlg").html(close + "<div class='dlg-content'>" + p_form + "</div>").fadeIn("fast");
	$(targ + " .img_dlg>div:first-child").attr({"onmousedown": "$(this).parent().draggable().draggable('enable');", "onmouseup": "$(this).parent().draggable('disable')"});
	$("#media_close").attr("onclick", "o_o.attachMedia('" + targ + "', " + cb + ")");
	$("#upload_file").attr("onchange", onchange_str);
	if(this.get_media_script)
		getGalleries(this.get_media_script, this.img_location);
}
function helpUpload(path){//a helper function passed into the insertMedia file onchange event
	var brk_path= path.split("."), ext= brk_path[brk_path.length-1],
	img_ext=["jpg", "png", "jpeg", "gif"],
	vid_ext=["mp4", "mp3", "wav"];
	if(isInArray(ext, img_ext)){
		var img=$("#gallery_frm img.sample_upload");
		img.attr("src", img.attr("data-base") + path);
	}
	else if(isInArray(ext, vid_ext)){
		var vd=$("#gallery_frm video.sample_upload");
		vd.append("<source src='" + vd.attr("data-base") + path + "' />");
	}
}
	
function getGalleries(path, img_loc){
	img_loc= img_loc.replace(/\/?$/, "/");
	$.ajax({
		dataType:"html", type: "post",
		url: path,
		success: function(resp){
			if(/error|warn/i.test(resp)){
				console.error("Couldn't get gallery from " + path + "\n" + resp);
				return;
			}
			var brk= resp.split(","), imgs="", kount=brk.length, targ_brk, targ_ext,
				img_ext=["jpg", "png", "jpeg", "gif"],
				vid_ext=["mp4", "mp3", "wav"];
			for(var k=0; k<kount; k++){
				targ_brk= brk[k].split("."); targ_ext= targ_brk[targ_brk.length-1];
				if(isInArray(targ_ext, img_ext)){
					imgs += "<label class='media-special'><input type='radio' name='insert_this' /><img src='" + img_loc + brk[k] + "' /></label>";
				}
				else if(isInArray(targ_ext, vid_ext)){
					imgs += "<label class='media-special'><input type='radio' name='insert_this' /><video controls><source src='" + img_loc + brk[k] + "' /></video><br /><span class='src'>" + targ_brk[0] + "</span></label>";
				}
			}
			$("#gallery_array").append(imgs);
		}
	});
}
function attachMedia(targ, cb){
	var targ_src="", iwidth=$("#img_width").val() ? parseInt($("#img_width").val().replace(/\D+/gi,"")) + "px" : "100%", iheight=$("#img_height").val().replace(/\D+/gi,"") + "px", icaption=$("#img_caption").val().replace(/['"]/gi,"");

	$("#gallery_frm [name=insert_this]").each(function(){
		if($(this).prop("checked")){
			if($(this).val()=="from_utube"){
				targ_src=$(this).siblings("[type=text]").val();
			}
			else{
				targ_src=$(this).siblings("img").attr("src");
				if(!targ_src) targ_src=$(this).siblings("video").find("source").attr("src");
			}
		}
	});
	if(targ_src){
		if(cb){
			cb(targ_src, iwidth, iheight, icaption);
			$(targ + " .img_dlg").fadeOut("fast");
			return;
		}
		//for scrn dev.
		if(!/\./.test(targ_src)){//upload from youtube
			var free_id=getFreeId(targ),
				iframe= document.createElement("iframe");
			iframe.id=free_id;
			//return focus on scrn
			active_sel.removeAllRanges(); active_sel.addRange(active_range);
			active_range.insertNode(iframe);
			$("#" + free_id).attr("src","https://www.youtube.com/embed/" + targ_src).css({width: iwidth, height: iheight});
			$(targ + " .img_dlg").fadeOut("fast");
			return;
		}
		var free_id=getFreeId(targ),
			span= document.createElement("span");
			//spc=document.createTextNode("\u00a0");
		span.id=free_id;
		var brk_src=targ_src.split("."), ext=brk_src[brk_src.length-1],
			img_ext=["jpg", "png", "jpeg", "gif"],
			vid_ext=["mp4", "mp3", "wav"];		
		if(isInArray(ext, img_ext))
			span.innerHTML="&nbsp; <img src='" + targ_src + "' id='" + free_id + "img' /><span id='" + free_id + "span'>" + icaption + "</span>";
		else if(isInArray(ext, vid_ext))
			span.innerHTML="&nbsp; <video preload='auto' controls><source src='" + targ_src + "' id='" + free_id + "' /></video><span id='" + free_id + "span'>" + icaption + "</span>";
		else{
			o_o.makeAToast("Can't display the uploaded file type. <br>Supported file types are " + img_ext.join(", ") + ", " + vid_ext.join(", "), "5s");
			return
		}
		//return focus on scrn
		active_sel.removeAllRanges(); active_sel.addRange(active_range);
//		active_range.deleteContents();
//		active_range.insertNode(spc);
		active_range.insertNode(span);
		var container_style,img_style,span_style;
		if(iwidth=="100%")
			container_style="width: 100%;display: block;overflow: auto";
		else
			container_style="width: " + iwidth + ";overflow: auto;display: inline-block";
		img_style="width: 100%;float: left";
		span_style="float: left;width: 100%;display: block;text-align: center;font-style: italic;font-size: small";
		transferStyle(targ, free_id, container_style);
		transferStyle(targ, free_id + "img", img_style);
		transferStyle(targ, free_id + "span", span_style);
		active_sel.collapse(document.getElementById(free_id),0);
	}
	$(targ + " .img_dlg").fadeOut("fast");
}
	

//for my testplayer app

function testPlayer(targ, question, opts){
	if(typeof(question)!="object"){
		if(window.console){
			console.error("Couldn't initialise the testPlayer function\ntestPlayer requires an object in the second parameter\nFound " + typeof(question));
			return;
		}
	}

	//you have to specify the back-end script to handle test submission
	if(!opts.submit_script){
		throw new Error("testPlayer requires an option object with a property 'submit_script' specifying the path to a back-end script to manage test submission");
	}

	//you have to specify the test duration
	if(!opts.duration){
		throw new Error("testPlayer requires an option object with a property 'duration' specifying the test duration");
	}
	
	//you have to specify a unique id to identify this test's duration
	if(!opts.test_id){
		throw new Error("testPlayer requires an option object with a property 'test_id' specifying a unique ID used to identify this test");
	}

	//set and get a cookie to see if the user machine (or user) accepts
	var test_id= opts.test_id;
	var get_my_cookie_back=o_o.getCookieVal(test_id);
	var cookie_opts={}; 
	cookie_opts[test_id]=opts.duration;
	if(!get_my_cookie_back){
		o_o.setCookieVal(cookie_opts, "30");
		return;
	}
	updateTestCookie(test_id); //reduces the duration for the test by 1min every minutes

	$(targ).addClass("o-o-test-player")
		.append("<div class='o-o-test-question'></div>")
		.append("<div class='o-o-test-options'></div>")
		.append("<div class='o-o-test-nav'><span title='Previous question' class='nav prev'>&lang;&lang;</span><span class='nav next' title='Next question'>&rang;&rang;</span><span class='btn submit-btn'>Submit</span></div>")
		.append("<span class='o-o-test-question-no'>1</span>")
		.append("<div class='o-o-test-timer'></div>");
	$(targ).draggable();

	this.question_no=0;
	this.test_id=opts.test_id;
	this.test_questions=question;
	this.submit_script=opts.submit_script;
	if(opts.appends){this.test_appends=opts.appends};
	if(opts.cb){
		if(typeof(opts.cb)=="function"){
			this.test_cb=opts.cb;
		}
	}
	if(opts.beforeSubmit){
		if(typeof(opts.beforeSubmit)=="function"){
			this.beforeSubmit=opts.beforeSubmit;
		}
	}
	if(opts.submit_warning){
		this.submit_warning=opts.submit_warning;
	}

	if(!$("#o_o_testAlert")[0]){//insert a jqueryui dialog placeholder if none is present
		$("body").append("<div id='o_o_testAlert'></div>");
	}

	if(window.testPlayer){
		window.testPlayer[window.testPlayer.length-1]= this;
	}
	else window.testPlayer= [this];
	var kount=window.testPlayer.length-1,
		move_str="window.testPlayer[" + kount + "]",
		move_next= move_str + ".changeQuestion('n', '" + targ + "')",
		move_prev= move_str + ".changeQuestion('p', '" + targ + "')";
		submit= move_str + ".submit_test('" + test_id + "')";
	$(targ).find(".o-o-test-nav .prev").attr("onclick", move_prev);
	$(targ).find(".o-o-test-nav .next").attr("onclick", move_next);
	$(targ).find(".o-o-test-nav .submit-btn").attr("onclick", submit);
	
	$(targ).find(".o-o-test-question").html(this.test_questions[0].question);
	var options=this.test_questions[0].options,
		opt_str="", targ_opt;
	for(var k in options){
		targ_opt=this.test_questions[0].options[k];
		opt_str += "<label><input type='radio' name='o_o_test_option' value='" + targ_opt + "' />" + targ_opt + "</label>";
	}
	$(targ).find(".o-o-test-options").append(opt_str);
	
	//add the timer
	var durn=get_my_cookie_back;
	var unit=durn.match(/\ [a-z.]+$/i);
	if(unit){
		unit= $.trim(unit[0]);
		if(/min/i.test(unit)){
			durn= (durn.toString().replace(unit,"")) * 60000;
		}
		else if(/^[hours.]+$/i.test(unit)){
			durn= (durn.toString().replace(unit,"")) * 60000 * 60;
		}
		else if(/^[days.]+$/i.test(unit)){
			durn= (durn.toString().replace(unit,"")) * 60000 * 60 * 24;
		}
	}
	var dt= new Date();
	this.timerApp(".o-o-test-timer", {date:dt.getTime() + durn,
			 cb: function(){
					$(targ).addClass("submitted").find(".submit-btn").fadeOut().trigger("click");
				}
		});
		
}

function updateTestCookie(test_id){
	var c_val=getCookieVal(test_id);
	var unit=c_val.match(/\ [a-z.]+$/i),
		durn;
	if(unit){
		unit= $.trim(unit[0]);
		if(/min/i.test(unit)){
			durn= (c_val.toString().replace(unit,"")) * 60000;
		}
		else if(/^[hours.]+$/i.test(unit)){
			durn= (c_val.toString().replace(unit,"")) * 60000 * 60;
		}
		else if(/^[days.]+$/i.test(unit)){
			durn= (c_val.toString().replace(unit,"")) * 60000 * 60 * 24;
		}
	}
	var min_rep= (durn/(1000 * 60)) - 1, cookie_opt={};
	cookie_opt[test_id]=min_rep + " min";
	setCookieVal(cookie_opt, "30");

	if(min_rep>1){
		setTimeout(function(){updateTestCookie(test_id)}, 60000);
	}
	else{
		cookie_opt[test_id]= "0 sec";
		setCookieVal(cookie_opt, "30");
	}
}
function changeQuestion(dirn, tg){
	var options=$(tg + " .o-o-test-options>label");
	var selected="", targ;
	
	//save user's selection
	options.each(function(){
		targ=$(this).find("[name=o_o_test_option]");
		if(targ.prop("checked")){
			selected= targ.val();
		}
	});
	this.test_questions[this.question_no].selected=selected;
	
	//do navigation
	if(dirn=="n"){
		if(this.test_questions[this.question_no + 1]){
			this.question_no++;
		}
		else return;
	}
	else if(dirn=="p"){
		if(this.question_no >0){
			this.question_no--;
		}
		else return;
	}
	
	var qn=this.question_no,
		targ_sel=this.test_questions[qn].selected || "",
		is_sel;
	
	$(tg).find(".o-o-test-question-no").html(qn+1);
	$(tg).find(".o-o-test-question").html(this.test_questions[qn].question);
	
	var options=this.test_questions[qn].options,
		opt_str="", targ_opt;
	for(var k in options){
		targ_opt=this.test_questions[qn].options[k];
		if(targ_opt == targ_sel) is_sel="checked";
		opt_str += "<label><input type='radio' name='o_o_test_option' value='" + targ_opt + "'" + is_sel + " />" + targ_opt + "</label>";
		is_sel="";
	}
	$(tg).find(".o-o-test-options").html(opt_str);
}

function submit_test(test_id){
	if(!this.submit_script){
		throw new Error("testPlayer requires an option object with a property 'submit_script' specifying the path to a back-end script to manage test submission");
	}
	if(!this.beforeSubmit()){//your custom beforeSubmit function should return true to permit this script to proceed with test submission
		return false;
	}
	
	var time_remain=o_o.getCookieVal(this.test_id).replace(/[^0-9.]/gi, "");
	
	var THISS=this;

	if(time_remain - 0 > 1){
		$("#o_o_testAlert").dialog().dialog("destroy").html("").attr("title", "");
		$("#o_o_testAlert").attr("title", "Confirm")
			.html(THISS.submit_warning)
			.dialog({width: "300px", buttons:[
						{text: "No", click: function(){
									$("#o_o_testAlert").dialog().dialog("destroy").html("").attr("title", "");
								}
						},
						{text: "Yes", click: function(){
								confirmTestSubmit(THISS);
							}
						}
						]
				});
	}
	else{
		confirmTestSubmit(this);
	}
}

function confirmTestSubmit(test_obj){
	$(".o-o-test-nav .prev").each(function(){$(this).trigger("click")}); // a lazy but simple way of updating the student's last selection
	var path= test_obj.submit_script;
	var _data="test=" + encodeURIComponent(JSON.stringify(test_obj.test_questions));
	var test_id=test_obj.test_id;
	if(test_obj.test_appends){
		for(var k in test_obj.test_appends){
			_data += "&" + encodeURIComponent(k) + "=" + encodeURIComponent(test_obj.test_appends[k]);
		}
	}
	var THis= test_obj;

	$.ajax({
		type:"post", dataType: "html",
		url:path,
		data:_data,
		success: function(resp){
			THis.test_cb(resp);
			var cookie_opt={};
			cookie_opt[test_id]="0 min";
			setCookieVal(cookie_opt, "30");
		}
	});
}

//timer app
function timerApp(targ, options){
	$(targ).addClass("o-o-timer-container");
	var htm_str= "<span class='day'><span class='caption'>Dy</span><span class='content'>24</span></span><span class='hour'><span class='caption'>Hr.</span><span class='content'>10</span></span><span class='min'><span class='caption'>Min.</span><span class='content'>30</span></span><span class='sec'><span class='caption'>Sec.</span><span class='content'>12</span></span>";
	$(targ).html(htm_str);
	this.updateTimerAppHandle(targ, options);
}

//this is a helper function for the timerApp function
function updateTimerAppHandle(targ, options){
	var cdt=new Date(options.date).getTime(),
		now=new Date().getTime(),
		dist=cdt - now,
		dy= Math.floor(dist/(60 * 60 * 24 * 1000)),
		hr= Math.floor((dist % (60 * 60 * 24 * 1000))/(60 * 60 * 1000)),
		mn=Math.floor((dist % (60 * 60 * 1000))/(60 * 1000)),
		sec=Math.floor((dist % (60 * 1000))/(1000));
	$(targ).find(".day .content").html(dy);
	$(targ).find(".hour .content").html(hr);
	$(targ).find(".min .content").html(mn);
	$(targ).find(".sec .content").html(sec);
	var THis= this;
	if(dist>-1){
		setTimeout(function(){
			THis.updateTimerAppHandle(targ, options);
		}, 1000);
	}
	else{
		if(options.cb){
			options.cb();
		}
		$(targ).find(".day .content").html("0");
		$(targ).find(".hour .content").html("0");
		$(targ).find(".min .content").html("0");
		$(targ).find(".sec .content").html("0");
	}
}

function setCookieVal(name_val, dayz){
	if(typeof(name_val)!="object"){
		try{
			name_val= JSON.parse(name_val);
		}
		catch(e){
			throw new Error(e);
		}
	}
	if(!o_o.getCookieVal("o_o_registered") && name_val.o_o_registered!="yes"){
		if(!$(".o_o_cookie_div")[0]){
			name_val["o_o_registered"]="yes";
			var json= JSON.stringify(name_val),
			yes_click="o_o.setCookieVal('" + json + "', '" +  dayz + "'); $('.o_o_cookie_div').remove();"
			$("body").append("<div class='o_o_cookie_div'><div class='content'>This site uses cookie. Cookies helps us remember what you were doing on our site before you left; so that you can continue from where you left off. Click 'Yes' to allow us store cookies on your p.c</div><button class='yes'>Yes</button><button onclick=\"$('.o_o_cookie_div').remove();\">No</button></div>");
			$(".o_o_cookie_div").draggable();
			$(".o_o_cookie_div .yes").attr("onclick", yes_click);
		}
		return;
	}
	var dt = new Date();
	dayz= dayz.toString().replace(/[^0-9]/g, "");
	dt.setTime(dt.getTime() + (dayz * 24 * 3600 * 1000));
	var expires = "expires=" + dt.toUTCString();
	for (var k in name_val){
		document.cookie = k + "=" + name_val[k] + ";" + expires;

	}
}

function getCookieVal(cookie_name){
	var c = document.cookie;
	var pat=new RegExp(cookie_name + "=" + "([^;]+)");
	var matches=c.match(pat);
	return matches ? matches[1] : "";
}


})();