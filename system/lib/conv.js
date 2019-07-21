window.onload = function () {
	for (i = 0; i < 32; i++) {
		var elem = document.createElement("img");
		var div = document.createElement("div");
		div.id = "divcon0_" + i;
		div.className = "ImgInline"
		elem.setAttribute("src", "data/img/conv0_" + i + ".jpg");
		elem.className = "col-xs-6 rounded img-fluid";
		elem.setAttribute("height", "100");
		elem.setAttribute("width", "100");
		elem.id = "img0_" + i;
		document.getElementById('placehere').appendChild(div);
		document.getElementById("divcon0_" + i).appendChild(elem);
	}
	$("img.col-xs-6").hover(
		function () {
			$("#net-group").append($("<div class='air ImgInline' style='top:" + $(this).offset().top + "px;left:'" + $(this).offset().top + "'px ><img src='" + this.src + "'></div>"));
		}, function () {
			$("#net-group").find("div.air:last").remove();
		}
	);

	$("#tip-0").hover(function(){
    $("#qtip-0").show();
    $("#qtip-0").css("top",$(this).offset().top +"px");
    $("#qtip-0").css("left",$(this).offset().left +"px");
},function(){
    $("#qtip-0").hide();
});	

$("#tip-1").hover(function(){
    $("#qtip-1").show();
    $("#qtip-1").css("top",$(this).offset().top +"px");
    $("#qtip-1").css("left",($(this).offset().left+$(this)[0].getBoundingClientRect().width) +"px");
},function(){
    $("#qtip-1").hide();
});	

$("#tip-2").hover(function(){
    $("#qtip-2").show();
    $("#qtip-2").css("top",$(this).offset().top +"px");
    $("#qtip-2").css("left",($(this).offset().left+$(this)[0].getBoundingClientRect().width) +"px");
},function(){
    $("#qtip-2").hide();
});	

$("#tip-3").hover(function(){
    $("#qtip-3").show();
    $("#qtip-3").css("top",$(this).offset().top +"px");
    $("#qtip-3").css("left",($(this).offset().left+$(this)[0].getBoundingClientRect().width) +"px");
},function(){
    $("#qtip-3").hide();
});	

$("#tip-4").hover(function(){
    $("#qtip-4").show();
    $("#qtip-4").css("top",$(this).offset().top +"px");
    $("#qtip-4").css("left",($(this).offset().left+$(this)[0].getBoundingClientRect().width) +"px");
},function(){
    $("#qtip-4").hide();
});

$("#tip-4").hover(function(){
    $("#qtip-4").show();
    $("#qtip-4").css("top",$(this).offset().top +"px");
    $("#qtip-4").css("left",($(this).offset().left+$(this)[0].getBoundingClientRect().width) +"px");
},function(){
    $("#qtip-4").hide();
});

$("#tip-5").hover(function(){
    $("#qtip-5").show();
    $("#qtip-5").css("top",$(this).offset().top +"px");
    $("#qtip-5").css("left",($(this).offset().left+$(this)[0].getBoundingClientRect().width) +"px");
},function(){
    $("#qtip-5").hide();
});	

$("#tip-6").hover(function(){
    $("#qtip-6").show();
    $("#qtip-6").css("top",$(this).offset().top +"px");
    $("#qtip-6").css("left",($(this).offset().left+$(this)[0].getBoundingClientRect().width) +"px");
},function(){
    $("#qtip-6").hide();
});	

$("#tip-7").hover(function(){
    $("#qtip-7").show();
    $("#qtip-7").css("top",$(this).offset().top +"px");
    $("#qtip-7").css("left",($(this).offset().left+$(this)[0].getBoundingClientRect().width) +"px");
},function(){
    $("#qtip-7").hide();
});	

$("#tip-8").hover(function(){
    $("#qtip-8").show();
    $("#qtip-8").css("top",$(this).offset().top +"px");
    $("#qtip-8").css("left",($(this).offset().left+$(this)[0].getBoundingClientRect().width) +"px");
},function(){
    $("#qtip-8").hide();
});	

$("#tip-9").hover(function(){
    $("#qtip-9").show();
    $("#qtip-9").css("top",$(this).offset().top +"px");
    $("#qtip-9").css("left",($(this).offset().left+$(this)[0].getBoundingClientRect().width) +"px");
},function(){
    $("#qtip-9").hide();
});	

$("#tip-10").hover(function(){
    $("#qtip-10").show();
    $("#qtip-10").css("top",$(this).offset().top +"px");
    $("#qtip-10").css("left",($(this).offset().left+$(this)[0].getBoundingClientRect().width) +"px");
},function(){
    $("#qtip-10").hide();
});	

$("#tip-11").hover(function(){
    $("#qtip-11").show();
    $("#qtip-11").css("top",$(this).offset().top +"px");
    $("#qtip-11").css("left",($(this).offset().left+$(this)[0].getBoundingClientRect().width) +"px");
},function(){
    $("#qtip-11").hide();
});	

$("#tip-12").hover(function(){
    $("#qtip-12").show();
    $("#qtip-12").css("top",$(this).offset().top +"px");
    $("#qtip-12").css("left",($(this).offset().left+$(this)[0].getBoundingClientRect().width) +"px");
},function(){
    $("#qtip-12").hide();
});	

$("#tip-13").hover(function(){
    $("#qtip-13").show();
    $("#qtip-13").css("top",$(this).offset().top +"px");
    $("#qtip-13").css("left",($(this).offset().left+$(this)[0].getBoundingClientRect().width) +"px");
},function(){
    $("#qtip-13").hide();
});	

$("#tip-14").hover(function(){
    $("#qtip-14").show();
    $("#qtip-14").css("top",$(this).offset().top +"px");
    $("#qtip-14").css("left",($(this).offset().left+$(this)[0].getBoundingClientRect().width) +"px");
},function(){
    $("#qtip-14").hide();
});	

$("#tip-15").hover(function(){
    $("#qtip-15").show();
    $("#qtip-15").css("top",$(this).offset().top +"px");
    $("#qtip-15").css("left",($(this).offset().left+$(this)[0].getBoundingClientRect().width) +"px");
},function(){
    $("#qtip-15").hide();
});	

$("#tip-16").hover(function(){
    $("#qtip-16").show();
    $("#qtip-16").css("top",$(this).offset().top +"px");
    $("#qtip-16").css("left",($(this).offset().left+$(this)[0].getBoundingClientRect().width) +"px");
},function(){
    $("#qtip-16").hide();
});	

$("#tip-17").hover(function(){
    $("#qtip-17").show();
    $("#qtip-17").css("top",$(this).offset().top +"px");
    $("#qtip-17").css("left",($(this).offset().left+$(this)[0].getBoundingClientRect().width) +"px");
},function(){
    $("#qtip-17").hide();
});	

$("#tip-18").hover(function(){
    $("#qtip-18").show();
    $("#qtip-18").css("top",$(this).offset().top +"px");
    $("#qtip-18").css("left",($(this).offset().left+$(this)[0].getBoundingClientRect().width) +"px");
},function(){
    $("#qtip-18").hide();
});	

$("#tip-19").hover(function(){
    $("#qtip-19").show();
    $("#qtip-19").css("top",$(this).offset().top +"px");
    $("#qtip-19").css("left",($(this).offset().left+$(this)[0].getBoundingClientRect().width) +"px");
},function(){
    $("#qtip-19").hide();
});	

$("#tip-20").hover(function(){
    $("#qtip-20").show();
    $("#qtip-20").css("top",$(this).offset().top +"px");
    $("#qtip-20").css("left",($(this).offset().left+$(this)[0].getBoundingClientRect().width) +"px");
},function(){
    $("#qtip-20").hide();
});	

$("#tip-21").hover(function(){
    $("#qtip-21").show();
    $("#qtip-21").css("top",$(this).offset().top +"px");
    $("#qtip-21").css("left",($(this).offset().left+$(this)[0].getBoundingClientRect().width) +"px");
},function(){
    $("#qtip-21").hide();
});	

$("#tip-22").hover(function(){
    $("#qtip-22").show();
    $("#qtip-22").css("top",$(this).offset().top +"px");
    $("#qtip-22").css("left",($(this).offset().left+$(this)[0].getBoundingClientRect().width) +"px");
},function(){
    $("#qtip-22").hide();
});	

$("#tip-23").hover(function(){
    $("#qtip-23").show();
    $("#qtip-23").css("top",$(this).offset().top +"px");
    $("#qtip-23").css("left",($(this).offset().left+$(this)[0].getBoundingClientRect().width) +"px");
},function(){
    $("#qtip-23").hide();
});	

$("#tip-24").hover(function(){
    $("#qtip-24").show();
    $("#qtip-24").css("top",$(this).offset().top +"px");
    $("#qtip-24").css("left",($(this).offset().left+$(this)[0].getBoundingClientRect().width) +"px");
},function(){
    $("#qtip-24").hide();
});	

$("#tip-25").hover(function(){
    $("#qtip-25").show();
    $("#qtip-25").css("top",$(this).offset().top +"px");
    $("#qtip-25").css("left",($(this).offset().left+$(this)[0].getBoundingClientRect().width) +"px");
},function(){
    $("#qtip-25").hide();
});	

$("#tip-26").hover(function(){
    $("#qtip-26").show();
    $("#qtip-26").css("top",$(this).offset().top +"px");
    $("#qtip-26").css("left",($(this).offset().left+$(this)[0].getBoundingClientRect().width) +"px");
},function(){
    $("#qtip-26").hide();
});	

$("#tip-27").hover(function(){
    $("#qtip-27").show();
    $("#qtip-27").css("top",$(this).offset().top +"px");
    $("#qtip-27").css("left",($(this).offset().left+$(this)[0].getBoundingClientRect().width) +"px");
},function(){
    $("#qtip-27").hide();
});	

$("#tip-28").hover(function(){
    $("#qtip-28").show();
    $("#qtip-28").css("top",$(this).offset().top +"px");
    $("#qtip-28").css("left",($(this).offset().left+$(this)[0].getBoundingClientRect().width) +"px");
},function(){
    $("#qtip-28").hide();
});	

$("#tip-29").hover(function(){
    $("#qtip-29").show();
    $("#qtip-29").css("top",$(this).offset().top +"px");
    $("#qtip-29").css("left",($(this).offset().left+$(this)[0].getBoundingClientRect().width) +"px");
},function(){
    $("#qtip-29").hide();
});	

$("#tip-30").hover(function(){
    $("#qtip-30").show();
    $("#qtip-30").css("top",$(this).offset().top +"px");
    $("#qtip-30").css("left",($(this).offset().left+$(this)[0].getBoundingClientRect().width) +"px");
},function(){
    $("#qtip-30").hide();
});	

$("#tip-31").hover(function(){
    $("#qtip-31").show();
    $("#qtip-31").css("top",$(this).offset().top +"px");
    $("#qtip-31").css("left",($(this).offset().left+$(this)[0].getBoundingClientRect().width) +"px");
},function(){
    $("#qtip-31").hide();
});	

}


$(function () {
	$("#yolo_table tr td").click(function () {
		var title_value = $.trim($(this).parents().eq(0).find("td:eq(0)").text());
		var title_name = $.trim($(this).parents().eq(0).find("td:eq(1)").text());
		var pic_times = $.trim($(this).parents().eq(0).find("td:eq(2)").text());
		if ($.trim($(this).index()) == 4) {
			if (title_name === "Convolutional") {
				$("#placehere").empty();
				var title_h3 = document.createElement("h3");
				title_h3.className = "center";
				var t = document.createTextNode("第" + title_value + "層卷積結果");
				title_h3.appendChild(t);
				document.getElementById('placehere').append(title_h3);
				for (i = 0; i < pic_times; i++) {
					var elem = document.createElement("img");
					var div = document.createElement("div");
					div.id = "divcon" + title_value + "_" + i;
					div.className = "ImgInline"
					elem.setAttribute("src", "data/img/conv" + title_value + "_" + i + ".jpg");
					elem.className = "col-xs-6 rounded img-fluid";
					elem.id = "img" + title_value + "_" + i;
					var img_size = 100;
					if (pic_times == 128) { img_size /= 1.5; }
					else if (pic_times == 256) { img_size /= 2; }
					else if (pic_times == 256 || pic_times == 425) { img_size /= 2.5; }
					else if (pic_times == 512) { img_size /= 3; }
					else if (pic_times == 1024) { img_size /= 4; }
					elem.setAttribute("height", img_size);
					elem.setAttribute("width", img_size);

					document.getElementById('placehere').appendChild(div);
					document.getElementById("divcon" + title_value + "_" + i).appendChild(elem);
				}
			}
			else if (title_name == "Maxpool") {
				$("#placehere").empty();
				var title_h3 = document.createElement("h3");
				title_h3.className = "center";
				var t = document.createTextNode("第" + title_value + "層池化結果");
				title_h3.appendChild(t);
				document.getElementById('placehere').append(title_h3);
			}
		}
		else if ($.trim($(this).index()) == 3) {
			$("#placehere").empty();
			var title_h3 = document.createElement("h3");
			title_h3.className = "center";
			var t = document.createTextNode("第" + title_value + "層濾鏡結果");
			title_h3.appendChild(t);
			document.getElementById('placehere').append(title_h3);
			for (i = 0; i < pic_times; i++) {
				var elem = document.createElement("img");
				var div = document.createElement("div");
				div.id = "divcon" + title_value + "_" + i;
				div.className = "ImgInline"
				elem.setAttribute("src", "data/yolo_v2_generated/layer_vis_l" + title_value + "_f" + i + ".jpg");
				elem.className = "col-xs-6 rounded img-fluid";
				elem.id = "img" + title_value + "_" + i;
				var img_size = 100;
				if (pic_times == 128) { img_size /= 1.5; }
				else if (pic_times == 256) { img_size /= 2; }
				else if (pic_times == 256 || pic_times == 425) { img_size /= 2.5; }
				else if (pic_times == 512) { img_size /= 3; }
				else if (pic_times == 1024) { img_size /= 4; }
				elem.setAttribute("height", img_size);
				elem.setAttribute("width", img_size);

				document.getElementById('placehere').appendChild(div);
				document.getElementById("divcon" + title_value + "_" + i).appendChild(elem);
			}
		};
		$("img.col-xs-6").hover(
			function () {
				$("#net-group").append($("<div class='air ImgInline' style='top:" + $(this).offset().top + "px;left:'" + $(this).offset().top + "px ><img src='" + this.src + "'></div>"));
			}, function () {
				$("#net-group").find("div.air:last").remove();
			}
		);
    });
    
    $("#rect0").click(function(){
        $("#placehere").empty();
        var title_value = 0;
        var pic_times = 32;
        var title_h3 = document.createElement("h3");
        title_h3.className = "center";
        var t = document.createTextNode("第"+title_value+"層卷積結果");
        title_h3.appendChild(t);
        document.getElementById('placehere').append(title_h3);
        for (var j = 0; j < pic_times; j++) {
            var elem = document.createElement("img");
            var div = document.createElement("div");
            div.id = "divcon" + title_value + "_" + j;
            div.className = "ImgInline"
            elem.setAttribute("src", "data/img/conv" + title_value + "_" + j + ".jpg");
            elem.className = "col-xs-6 rounded img-fluid";
            elem.id = "img" + title_value + "_" + j;
            var img_size = 100;
            if (pic_times == 128) { img_size /= 1.5; }
            else if (pic_times == 256) { img_size /= 2; }
            else if (pic_times == 256 || pic_times == 425) { img_size /= 2.5; }
            else if (pic_times == 512) { img_size /= 3; }
            else if (pic_times == 1024) { img_size /= 4; }
            elem.setAttribute("height", 416);
            elem.setAttribute("width", 416);

            document.getElementById('placehere').appendChild(div);
            document.getElementById("divcon" + title_value + "_" + j).appendChild(elem);
        }
    })
    $("#rect1").click(function(){
        $("#placehere").empty();
        var title_value = 1;
        var pic_times = 32;
        var title_h3 = document.createElement("h3");
        title_h3.className = "center";
        var t = document.createTextNode("第1層池化結果");
        title_h3.appendChild(t);
        document.getElementById('placehere').append(title_h3);
        for (var j = 0; j < pic_times; j++) {
            var elem = document.createElement("img");
            var div = document.createElement("div");
            div.id = "divcon" + title_value + "_" + j;
            div.className = "ImgInline"
            elem.setAttribute("src", "data/img/maxpool" + title_value + "_" + j + ".jpg");
            elem.className = "col-xs-6 rounded img-fluid";
            elem.id = "img" + title_value + "_" + j;
            var img_size = 100;
            if (pic_times == 128) { img_size /= 1.5; }
            else if (pic_times == 256) { img_size /= 2; }
            else if (pic_times == 256 || pic_times == 425) { img_size /= 2.5; }
            else if (pic_times == 512) { img_size /= 3; }
            else if (pic_times == 1024) { img_size /= 4; }
            elem.setAttribute("height", 208);
            elem.setAttribute("width", 208);

            document.getElementById('placehere').appendChild(div);
            document.getElementById("divcon" + title_value + "_" + j).appendChild(elem);
        }
    })
    $("#rect2").click(function(){
        $("#placehere").empty();
        var title_value = 2;
        var pic_times = 64;
        var title_h3 = document.createElement("h3");
        title_h3.className = "center";
        var t = document.createTextNode("第"+title_value+"層卷積結果");
        title_h3.appendChild(t);
        document.getElementById('placehere').append(title_h3);
        for (var j = 0; j < pic_times; j++) {
            var elem = document.createElement("img");
            var div = document.createElement("div");
            div.id = "divcon" + title_value + "_" + j;
            div.className = "ImgInline"
            elem.setAttribute("src", "data/img/conv" + title_value + "_" + j + ".jpg");
            elem.className = "col-xs-6 rounded img-fluid";
            elem.id = "img" + title_value + "_" + j;
            var img_size = 100;
            if (pic_times == 128) { img_size /= 1.5; }
            else if (pic_times == 256) { img_size /= 2; }
            else if (pic_times == 256 || pic_times == 425) { img_size /= 2.5; }
            else if (pic_times == 512) { img_size /= 3; }
            else if (pic_times == 1024) { img_size /= 4; }
            elem.setAttribute("height", 208);
            elem.setAttribute("width", 208);

            document.getElementById('placehere').appendChild(div);
            document.getElementById("divcon" + title_value + "_" + j).appendChild(elem);
        }
    })
    $("#rect3").click(function(){
        $("#placehere").empty();
        var title_value = 3;
        var pic_times = 64;
        var title_h3 = document.createElement("h3");
        title_h3.className = "center";
        var t = document.createTextNode("第"+title_value+"層池化結果");
        title_h3.appendChild(t);
        document.getElementById('placehere').append(title_h3);
        for (var j = 0; j < pic_times; j++) {
            var elem = document.createElement("img");
            var div = document.createElement("div");
            div.id = "divcon" + title_value + "_" + j;
            div.className = "ImgInline"
            elem.setAttribute("src", "data/img/maxpool" + title_value + "_" + j + ".jpg");
            elem.className = "col-xs-6 rounded img-fluid";
            elem.id = "img" + title_value + "_" + j;
            var img_size = 100;
            if (pic_times == 128) { img_size /= 1.5; }
            else if (pic_times == 256) { img_size /= 2; }
            else if (pic_times == 256 || pic_times == 425) { img_size /= 2.5; }
            else if (pic_times == 512) { img_size /= 3; }
            else if (pic_times == 1024) { img_size /= 4; }
            elem.setAttribute("height", 104);
            elem.setAttribute("width", 104);

            document.getElementById('placehere').appendChild(div);
            document.getElementById("divcon" + title_value + "_" + j).appendChild(elem);
        }
    })
    $("#rect4").click(function(){
        $("#placehere").empty();
        var title_value = 4;
        var pic_times = 128;
        var title_h3 = document.createElement("h3");
        title_h3.className = "center";
        var t = document.createTextNode("第"+title_value+"層卷積結果");
        title_h3.appendChild(t);
        document.getElementById('placehere').append(title_h3);
        for (var j = 0; j < pic_times; j++) {
            var elem = document.createElement("img");
            var div = document.createElement("div");
            div.id = "divcon" + title_value + "_" + j;
            div.className = "ImgInline"
            elem.setAttribute("src", "data/img/conv" + title_value + "_" + j + ".jpg");
            elem.className = "col-xs-6 rounded img-fluid";
            elem.id = "img" + title_value + "_" + j;
            var img_size = 100;
            if (pic_times == 128) { img_size /= 1.5; }
            else if (pic_times == 256) { img_size /= 2; }
            else if (pic_times == 256 || pic_times == 425) { img_size /= 2.5; }
            else if (pic_times == 512) { img_size /= 3; }
            else if (pic_times == 1024) { img_size /= 4; }
            elem.setAttribute("height", 104);
            elem.setAttribute("width", 104);

            document.getElementById('placehere').appendChild(div);
            document.getElementById("divcon" + title_value + "_" + j).appendChild(elem);
        }
    })
    $("#rect5").click(function(){
        $("#placehere").empty();
        var title_value = 5;
        var pic_times = 64;
        var title_h3 = document.createElement("h3");
        title_h3.className = "center";
        var t = document.createTextNode("第"+title_value+"層卷積結果");
        title_h3.appendChild(t);
        document.getElementById('placehere').append(title_h3);
        for (var j = 0; j < pic_times; j++) {
            var elem = document.createElement("img");
            var div = document.createElement("div");
            div.id = "divcon" + title_value + "_" + j;
            div.className = "ImgInline"
            elem.setAttribute("src", "data/img/conv" + title_value + "_" + j + ".jpg");
            elem.className = "col-xs-6 rounded img-fluid";
            elem.id = "img" + title_value + "_" + j;
            var img_size = 100;
            if (pic_times == 128) { img_size /= 1.5; }
            else if (pic_times == 256) { img_size /= 2; }
            else if (pic_times == 256 || pic_times == 425) { img_size /= 2.5; }
            else if (pic_times == 512) { img_size /= 3; }
            else if (pic_times == 1024) { img_size /= 4; }
            elem.setAttribute("height", 104);
            elem.setAttribute("width", 104);

            document.getElementById('placehere').appendChild(div);
            document.getElementById("divcon" + title_value + "_" + j).appendChild(elem);
        }
    })
    $("#rect6").click(function(){
        $("#placehere").empty();
        var title_value = 6;
        var pic_times = 128;
        var title_h3 = document.createElement("h3");
        title_h3.className = "center";
        var t = document.createTextNode("第"+title_value+"層卷積結果");
        title_h3.appendChild(t);
        document.getElementById('placehere').append(title_h3);
        for (var j = 0; j < pic_times; j++) {
            var elem = document.createElement("img");
            var div = document.createElement("div");
            div.id = "divcon" + title_value + "_" + j;
            div.className = "ImgInline"
            elem.setAttribute("src", "data/img/conv" + title_value + "_" + j + ".jpg");
            elem.className = "col-xs-6 rounded img-fluid";
            elem.id = "img" + title_value + "_" + j;
            var img_size = 100;
            if (pic_times == 128) { img_size /= 1.5; }
            else if (pic_times == 256) { img_size /= 2; }
            else if (pic_times == 256 || pic_times == 425) { img_size /= 2.5; }
            else if (pic_times == 512) { img_size /= 3; }
            else if (pic_times == 1024) { img_size /= 4; }
            elem.setAttribute("height", 104);
            elem.setAttribute("width", 104);

            document.getElementById('placehere').appendChild(div);
            document.getElementById("divcon" + title_value + "_" + j).appendChild(elem);
        }
    })
    $("#rect7").click(function(){
        $("#placehere").empty();
        var title_value = 7;
        var pic_times = 128;
        var title_h3 = document.createElement("h3");
        title_h3.className = "center";
        var t = document.createTextNode("第"+title_value+"層池化結果");
        title_h3.appendChild(t);
        document.getElementById('placehere').append(title_h3);
        for (var j = 0; j < pic_times; j++) {
            var elem = document.createElement("img");
            var div = document.createElement("div");
            div.id = "divcon" + title_value + "_" + j;
            div.className = "ImgInline"
            elem.setAttribute("src", "data/img/maxpool" + title_value + "_" + j + ".jpg");
            elem.className = "col-xs-6 rounded img-fluid";
            elem.id = "img" + title_value + "_" + j;
            var img_size = 100;
            if (pic_times == 128) { img_size /= 1.5; }
            else if (pic_times == 256) { img_size /= 2; }
            else if (pic_times == 256 || pic_times == 425) { img_size /= 2.5; }
            else if (pic_times == 512) { img_size /= 3; }
            else if (pic_times == 1024) { img_size /= 4; }
            elem.setAttribute("height", 52);
            elem.setAttribute("width", 52);

            document.getElementById('placehere').appendChild(div);
            document.getElementById("divcon" + title_value + "_" + j).appendChild(elem);
        }
    })
    $("#rect8").click(function(){
        $("#placehere").empty();
        var title_value = 8;
        var pic_times = 256;
        var title_h3 = document.createElement("h3");
        title_h3.className = "center";
        var t = document.createTextNode("第"+title_value+"層卷積結果");
        title_h3.appendChild(t);
        document.getElementById('placehere').append(title_h3);
        for (var j = 0; j < pic_times; j++) {
            var elem = document.createElement("img");
            var div = document.createElement("div");
            div.id = "divcon" + title_value + "_" + j;
            div.className = "ImgInline"
            elem.setAttribute("src", "data/img/conv" + title_value + "_" + j + ".jpg");
            elem.className = "col-xs-6 rounded img-fluid";
            elem.id = "img" + title_value + "_" + j;
            var img_size = 100;
            if (pic_times == 128) { img_size /= 1.5; }
            else if (pic_times == 256) { img_size /= 2; }
            else if (pic_times == 256 || pic_times == 425) { img_size /= 2.5; }
            else if (pic_times == 512) { img_size /= 3; }
            else if (pic_times == 1024) { img_size /= 4; }
            elem.setAttribute("height", 52);
            elem.setAttribute("width", 52);

            document.getElementById('placehere').appendChild(div);
            document.getElementById("divcon" + title_value + "_" + j).appendChild(elem);
        }
    })
    $("#rect9").click(function(){
        $("#placehere").empty();
        var title_value = 9;
        var pic_times = 128;
        var title_h3 = document.createElement("h3");
        title_h3.className = "center";
        var t = document.createTextNode("第"+title_value+"層卷積結果");
        title_h3.appendChild(t);
        document.getElementById('placehere').append(title_h3);
        for (var j = 0; j < pic_times; j++) {
            var elem = document.createElement("img");
            var div = document.createElement("div");
            div.id = "divcon" + title_value + "_" + j;
            div.className = "ImgInline"
            elem.setAttribute("src", "data/img/conv" + title_value + "_" + j + ".jpg");
            elem.className = "col-xs-6 rounded img-fluid";
            elem.id = "img" + title_value + "_" + j;
            var img_size = 100;
            if (pic_times == 128) { img_size /= 1.5; }
            else if (pic_times == 256) { img_size /= 2; }
            else if (pic_times == 256 || pic_times == 425) { img_size /= 2.5; }
            else if (pic_times == 512) { img_size /= 3; }
            else if (pic_times == 1024) { img_size /= 4; }
            elem.setAttribute("height", 52);
            elem.setAttribute("width", 52);

            document.getElementById('placehere').appendChild(div);
            document.getElementById("divcon" + title_value + "_" + j).appendChild(elem);
        }
    })
    $("#rect10").click(function(){
        $("#placehere").empty();
        var title_value = 10;
        var pic_times = 256;
        var title_h3 = document.createElement("h3");
        title_h3.className = "center";
        var t = document.createTextNode("第"+title_value+"層卷積結果");
        title_h3.appendChild(t);
        document.getElementById('placehere').append(title_h3);
        for (var j = 0; j < pic_times; j++) {
            var elem = document.createElement("img");
            var div = document.createElement("div");
            div.id = "divcon" + title_value + "_" + j;
            div.className = "ImgInline"
            elem.setAttribute("src", "data/img/conv" + title_value + "_" + j + ".jpg");
            elem.className = "col-xs-6 rounded img-fluid";
            elem.id = "img" + title_value + "_" + j;
            var img_size = 100;
            if (pic_times == 128) { img_size /= 1.5; }
            else if (pic_times == 256) { img_size /= 2; }
            else if (pic_times == 256 || pic_times == 425) { img_size /= 2.5; }
            else if (pic_times == 512) { img_size /= 3; }
            else if (pic_times == 1024) { img_size /= 4; }
            elem.setAttribute("height", 52);
            elem.setAttribute("width", 52);

            document.getElementById('placehere').appendChild(div);
            document.getElementById("divcon" + title_value + "_" + j).appendChild(elem);
        }
    })
    $("#rect11").click(function(){
        $("#placehere").empty();
        var title_value = 11;
        var pic_times = 256;
        var title_h3 = document.createElement("h3");
        title_h3.className = "center";
        var t = document.createTextNode("第"+title_value+"層卷積結果");
        title_h3.appendChild(t);
        document.getElementById('placehere').append(title_h3);
        for (var j = 0; j < pic_times; j++) {
            var elem = document.createElement("img");
            var div = document.createElement("div");
            div.id = "divcon" + title_value + "_" + j;
            div.className = "ImgInline"
            elem.setAttribute("src", "data/img/conv" + title_value + "_" + j + ".jpg");
            elem.className = "col-xs-6 rounded img-fluid";
            elem.id = "img" + title_value + "_" + j;
            var img_size = 100;
            if (pic_times == 128) { img_size /= 1.5; }
            else if (pic_times == 256) { img_size /= 2; }
            else if (pic_times == 256 || pic_times == 425) { img_size /= 2.5; }
            else if (pic_times == 512) { img_size /= 3; }
            else if (pic_times == 1024) { img_size /= 4; }
            elem.setAttribute("height", 26);
            elem.setAttribute("width", 26);

            document.getElementById('placehere').appendChild(div);
            document.getElementById("divcon" + title_value + "_" + j).appendChild(elem);
        }
    })
    $("#rect12").click(function(){
        $("#placehere").empty();
        var title_value = 12;
        var pic_times = 512;
        var title_h3 = document.createElement("h3");
        title_h3.className = "center";
        var t = document.createTextNode("第"+title_value+"層卷積結果");
        title_h3.appendChild(t);
        document.getElementById('placehere').append(title_h3);
        for (var j = 0; j < pic_times; j++) {
            var elem = document.createElement("img");
            var div = document.createElement("div");
            div.id = "divcon" + title_value + "_" + j;
            div.className = "ImgInline"
            elem.setAttribute("src", "data/img/conv" + title_value + "_" + j + ".jpg");
            elem.className = "col-xs-6 rounded img-fluid";
            elem.id = "img" + title_value + "_" + j;
            var img_size = 100;
            if (pic_times == 128) { img_size /= 1.5; }
            else if (pic_times == 256) { img_size /= 2; }
            else if (pic_times == 256 || pic_times == 425) { img_size /= 2.5; }
            else if (pic_times == 512) { img_size /= 3; }
            else if (pic_times == 1024) { img_size /= 4; }
            elem.setAttribute("height", 26);
            elem.setAttribute("width", 26);

            document.getElementById('placehere').appendChild(div);
            document.getElementById("divcon" + title_value + "_" + j).appendChild(elem);
        }
    })
    $("#rect13").click(function(){
        $("#placehere").empty();
        var title_value = 13;
        var pic_times = 256;
        var title_h3 = document.createElement("h3");
        title_h3.className = "center";
        var t = document.createTextNode("第"+title_value+"層卷積結果");
        title_h3.appendChild(t);
        document.getElementById('placehere').append(title_h3);
        for (var j = 0; j < pic_times; j++) {
            var elem = document.createElement("img");
            var div = document.createElement("div");
            div.id = "divcon" + title_value + "_" + j;
            div.className = "ImgInline"
            elem.setAttribute("src", "data/img/conv" + title_value + "_" + j + ".jpg");
            elem.className = "col-xs-6 rounded img-fluid";
            elem.id = "img" + title_value + "_" + j;
            var img_size = 100;
            if (pic_times == 128) { img_size /= 1.5; }
            else if (pic_times == 256) { img_size /= 2; }
            else if (pic_times == 256 || pic_times == 425) { img_size /= 2.5; }
            else if (pic_times == 512) { img_size /= 3; }
            else if (pic_times == 1024) { img_size /= 4; }
            elem.setAttribute("height", 26);
            elem.setAttribute("width", 26);

            document.getElementById('placehere').appendChild(div);
            document.getElementById("divcon" + title_value + "_" + j).appendChild(elem);
        }
    })
    $("#rect14").click(function(){
        $("#placehere").empty();
        var title_value = 14;
        var pic_times = 512;
        var title_h3 = document.createElement("h3");
        title_h3.className = "center";
        var t = document.createTextNode("第"+title_value+"層卷積結果");
        title_h3.appendChild(t);
        document.getElementById('placehere').append(title_h3);
        for (var j = 0; j < pic_times; j++) {
            var elem = document.createElement("img");
            var div = document.createElement("div");
            div.id = "divcon" + title_value + "_" + j;
            div.className = "ImgInline"
            elem.setAttribute("src", "data/img/conv" + title_value + "_" + j + ".jpg");
            elem.className = "col-xs-6 rounded img-fluid";
            elem.id = "img" + title_value + "_" + j;
            var img_size = 100;
            if (pic_times == 128) { img_size /= 1.5; }
            else if (pic_times == 256) { img_size /= 2; }
            else if (pic_times == 256 || pic_times == 425) { img_size /= 2.5; }
            else if (pic_times == 512) { img_size /= 3; }
            else if (pic_times == 1024) { img_size /= 4; }
            elem.setAttribute("height", 26);
            elem.setAttribute("width", 26);

            document.getElementById('placehere').appendChild(div);
            document.getElementById("divcon" + title_value + "_" + j).appendChild(elem);
        }
    })
    $("#rect15").click(function(){
        $("#placehere").empty();
        var title_value = 15;
        var pic_times = 256;
        var title_h3 = document.createElement("h3");
        title_h3.className = "center";
        var t = document.createTextNode("第"+title_value+"層卷積結果");
        title_h3.appendChild(t);
        document.getElementById('placehere').append(title_h3);
        for (var j = 0; j < pic_times; j++) {
            var elem = document.createElement("img");
            var div = document.createElement("div");
            div.id = "divcon" + title_value + "_" + j;
            div.className = "ImgInline"
            elem.setAttribute("src", "data/img/conv" + title_value + "_" + j + ".jpg");
            elem.className = "col-xs-6 rounded img-fluid";
            elem.id = "img" + title_value + "_" + j;
            var img_size = 100;
            if (pic_times == 128) { img_size /= 1.5; }
            else if (pic_times == 256) { img_size /= 2; }
            else if (pic_times == 256 || pic_times == 425) { img_size /= 2.5; }
            else if (pic_times == 512) { img_size /= 3; }
            else if (pic_times == 1024) { img_size /= 4; }
            elem.setAttribute("height", 26);
            elem.setAttribute("width", 26);

            document.getElementById('placehere').appendChild(div);
            document.getElementById("divcon" + title_value + "_" + j).appendChild(elem);
        }
    })
    $("#rect16").click(function(){
        $("#placehere").empty();
        var title_value = 16;
        var pic_times = 512;
        var title_h3 = document.createElement("h3");
        title_h3.className = "center";
        var t = document.createTextNode("第"+title_value+"層卷積結果");
        title_h3.appendChild(t);
        document.getElementById('placehere').append(title_h3);
        for (var j = 0; j < pic_times; j++) {
            var elem = document.createElement("img");
            var div = document.createElement("div");
            div.id = "divcon" + title_value + "_" + j;
            div.className = "ImgInline"
            elem.setAttribute("src", "data/img/conv" + title_value + "_" + j + ".jpg");
            elem.className = "col-xs-6 rounded img-fluid";
            elem.id = "img" + title_value + "_" + j;
            var img_size = 100;
            if (pic_times == 128) { img_size /= 1.5; }
            else if (pic_times == 256) { img_size /= 2; }
            else if (pic_times == 256 || pic_times == 425) { img_size /= 2.5; }
            else if (pic_times == 512) { img_size /= 3; }
            else if (pic_times == 1024) { img_size /= 4; }
            elem.setAttribute("height", 26);
            elem.setAttribute("width", 26);

            document.getElementById('placehere').appendChild(div);
            document.getElementById("divcon" + title_value + "_" + j).appendChild(elem);
        }
    })
    $("#rect17").click(function(){
        $("#placehere").empty();
        var title_value = 17;
        var pic_times = 512;
        var title_h3 = document.createElement("h3");
        title_h3.className = "center";
        var t = document.createTextNode("第"+title_value+"層池化結果");
        title_h3.appendChild(t);
        document.getElementById('placehere').append(title_h3);
        for (var j = 0; j < pic_times; j++) {
            var elem = document.createElement("img");
            var div = document.createElement("div");
            div.id = "divcon" + title_value + "_" + j;
            div.className = "ImgInline"
            elem.setAttribute("src", "data/img/maxpool" + title_value + "_" + j + ".jpg");
            elem.className = "col-xs-6 rounded img-fluid";
            elem.id = "img" + title_value + "_" + j;
            var img_size = 100;
            if (pic_times == 128) { img_size /= 1.5; }
            else if (pic_times == 256) { img_size /= 2; }
            else if (pic_times == 256 || pic_times == 425) { img_size /= 2.5; }
            else if (pic_times == 512) { img_size /= 3; }
            else if (pic_times == 1024) { img_size /= 4; }
            elem.setAttribute("height", 13);
            elem.setAttribute("width", 13);

            document.getElementById('placehere').appendChild(div);
            document.getElementById("divcon" + title_value + "_" + j).appendChild(elem);
        }
    })
    $("#rect18").click(function(){
        $("#placehere").empty();
        var title_value = 18;
        var pic_times = 1024;
        var title_h3 = document.createElement("h3");
        title_h3.className = "center";
        var t = document.createTextNode("第"+title_value+"層卷積結果");
        title_h3.appendChild(t);
        document.getElementById('placehere').append(title_h3);
        for (var j = 0; j < pic_times; j++) {
            var elem = document.createElement("img");
            var div = document.createElement("div");
            div.id = "divcon" + title_value + "_" + j;
            div.className = "ImgInline"
            elem.setAttribute("src", "data/img/conv" + title_value + "_" + j + ".jpg");
            elem.className = "col-xs-6 rounded img-fluid";
            elem.id = "img" + title_value + "_" + j;
            var img_size = 100;
            if (pic_times == 128) { img_size /= 1.5; }
            else if (pic_times == 256) { img_size /= 2; }
            else if (pic_times == 256 || pic_times == 425) { img_size /= 2.5; }
            else if (pic_times == 512) { img_size /= 3; }
            else if (pic_times == 1024) { img_size /= 4; }
            elem.setAttribute("height", 13);
            elem.setAttribute("width", 13);

            document.getElementById('placehere').appendChild(div);
            document.getElementById("divcon" + title_value + "_" + j).appendChild(elem);
        }
    })
    $("#rect19").click(function(){
        $("#placehere").empty();
        var title_value = 19;
        var pic_times = 512;
        var title_h3 = document.createElement("h3");
        title_h3.className = "center";
        var t = document.createTextNode("第"+title_value+"層卷積結果");
        title_h3.appendChild(t);
        document.getElementById('placehere').append(title_h3);
        for (var j = 0; j < pic_times; j++) {
            var elem = document.createElement("img");
            var div = document.createElement("div");
            div.id = "divcon" + title_value + "_" + j;
            div.className = "ImgInline"
            elem.setAttribute("src", "data/img/conv" + title_value + "_" + j + ".jpg");
            elem.className = "col-xs-6 rounded img-fluid";
            elem.id = "img" + title_value + "_" + j;
            var img_size = 100;
            if (pic_times == 128) { img_size /= 1.5; }
            else if (pic_times == 256) { img_size /= 2; }
            else if (pic_times == 256 || pic_times == 425) { img_size /= 2.5; }
            else if (pic_times == 512) { img_size /= 3; }
            else if (pic_times == 1024) { img_size /= 4; }
            elem.setAttribute("height", 13);
            elem.setAttribute("width", 13);

            document.getElementById('placehere').appendChild(div);
            document.getElementById("divcon" + title_value + "_" + j).appendChild(elem);
        }
    })
    $("#rect20").click(function(){
        $("#placehere").empty();
        var title_value = 20;
        var pic_times = 1024;
        var title_h3 = document.createElement("h3");
        title_h3.className = "center";
        var t = document.createTextNode("第"+title_value+"層卷積結果");
        title_h3.appendChild(t);
        document.getElementById('placehere').append(title_h3);
        for (var j = 0; j < pic_times; j++) {
            var elem = document.createElement("img");
            var div = document.createElement("div");
            div.id = "divcon" + title_value + "_" + j;
            div.className = "ImgInline"
            elem.setAttribute("src", "data/img/conv" + title_value + "_" + j + ".jpg");
            elem.className = "col-xs-6 rounded img-fluid";
            elem.id = "img" + title_value + "_" + j;
            var img_size = 100;
            if (pic_times == 128) { img_size /= 1.5; }
            else if (pic_times == 256) { img_size /= 2; }
            else if (pic_times == 256 || pic_times == 425) { img_size /= 2.5; }
            else if (pic_times == 512) { img_size /= 3; }
            else if (pic_times == 1024) { img_size /= 4; }
            elem.setAttribute("height", 13);
            elem.setAttribute("width", 13);

            document.getElementById('placehere').appendChild(div);
            document.getElementById("divcon" + title_value + "_" + j).appendChild(elem);
        }
    })
    $("#rect21").click(function(){
        $("#placehere").empty();
        var title_value = 21;
        var pic_times = 512;
        var title_h3 = document.createElement("h3");
        title_h3.className = "center";
        var t = document.createTextNode("第"+title_value+"層卷積結果");
        title_h3.appendChild(t);
        document.getElementById('placehere').append(title_h3);
        for (var j = 0; j < pic_times; j++) {
            var elem = document.createElement("img");
            var div = document.createElement("div");
            div.id = "divcon" + title_value + "_" + j;
            div.className = "ImgInline"
            elem.setAttribute("src", "data/img/conv" + title_value + "_" + j + ".jpg");
            elem.className = "col-xs-6 rounded img-fluid";
            elem.id = "img" + title_value + "_" + j;
            var img_size = 100;
            if (pic_times == 128) { img_size /= 1.5; }
            else if (pic_times == 256) { img_size /= 2; }
            else if (pic_times == 256 || pic_times == 425) { img_size /= 2.5; }
            else if (pic_times == 512) { img_size /= 3; }
            else if (pic_times == 1024) { img_size /= 4; }
            elem.setAttribute("height", 13);
            elem.setAttribute("width", 13);

            document.getElementById('placehere').appendChild(div);
            document.getElementById("divcon" + title_value + "_" + j).appendChild(elem);
        }
    })
    $("#rect22").click(function(){
        $("#placehere").empty();
        var title_value = 22;
        var pic_times = 1024;
        var title_h3 = document.createElement("h3");
        title_h3.className = "center";
        var t = document.createTextNode("第"+title_value+"層卷積結果");
        title_h3.appendChild(t);
        document.getElementById('placehere').append(title_h3);
        for (var j = 0; j < pic_times; j++) {
            var elem = document.createElement("img");
            var div = document.createElement("div");
            div.id = "divcon" + title_value + "_" + j;
            div.className = "ImgInline"
            elem.setAttribute("src", "data/img/conv" + title_value + "_" + j + ".jpg");
            elem.className = "col-xs-6 rounded img-fluid";
            elem.id = "img" + title_value + "_" + j;
            var img_size = 100;
            if (pic_times == 128) { img_size /= 1.5; }
            else if (pic_times == 256) { img_size /= 2; }
            else if (pic_times == 256 || pic_times == 425) { img_size /= 2.5; }
            else if (pic_times == 512) { img_size /= 3; }
            else if (pic_times == 1024) { img_size /= 4; }
            elem.setAttribute("height", 13);
            elem.setAttribute("width", 13);

            document.getElementById('placehere').appendChild(div);
            document.getElementById("divcon" + title_value + "_" + j).appendChild(elem);
        }
    })
    $("#rect23").click(function(){
        $("#placehere").empty();
        var title_value = 23;
        var pic_times = 1024;
        var title_h3 = document.createElement("h3");
        title_h3.className = "center";
        var t = document.createTextNode("第"+title_value+"層卷積結果");
        title_h3.appendChild(t);
        document.getElementById('placehere').append(title_h3);
        for (var j = 0; j < pic_times; j++) {
            var elem = document.createElement("img");
            var div = document.createElement("div");
            div.id = "divcon" + title_value + "_" + j;
            div.className = "ImgInline"
            elem.setAttribute("src", "data/img/conv" + title_value + "_" + j + ".jpg");
            elem.className = "col-xs-6 rounded img-fluid";
            elem.id = "img" + title_value + "_" + j;
            var img_size = 100;
            if (pic_times == 128) { img_size /= 1.5; }
            else if (pic_times == 256) { img_size /= 2; }
            else if (pic_times == 256 || pic_times == 425) { img_size /= 2.5; }
            else if (pic_times == 512) { img_size /= 3; }
            else if (pic_times == 1024) { img_size /= 4; }
            elem.setAttribute("height", 13);
            elem.setAttribute("width", 13);

            document.getElementById('placehere').appendChild(div);
            document.getElementById("divcon" + title_value + "_" + j).appendChild(elem);
        }
    })
    $("#rect24").click(function(){
        $("#placehere").empty();
        var title_value = 24;
        var pic_times = 1024;
        var title_h3 = document.createElement("h3");
        title_h3.className = "center";
        var t = document.createTextNode("第"+title_value+"層卷積結果");
        title_h3.appendChild(t);
        document.getElementById('placehere').append(title_h3);
        for (var j = 0; j < pic_times; j++) {
            var elem = document.createElement("img");
            var div = document.createElement("div");
            div.id = "divcon" + title_value + "_" + j;
            div.className = "ImgInline"
            elem.setAttribute("src", "data/img/conv" + title_value + "_" + j + ".jpg");
            elem.className = "col-xs-6 rounded img-fluid";
            elem.id = "img" + title_value + "_" + j;
            var img_size = 100;
            if (pic_times == 128) { img_size /= 1.5; }
            else if (pic_times == 256) { img_size /= 2; }
            else if (pic_times == 256 || pic_times == 425) { img_size /= 2.5; }
            else if (pic_times == 512) { img_size /= 3; }
            else if (pic_times == 1024) { img_size /= 4; }
            elem.setAttribute("height", 13);
            elem.setAttribute("width", 13);

            document.getElementById('placehere').appendChild(div);
            document.getElementById("divcon" + title_value + "_" + j).appendChild(elem);
        }
    })
    $("#rect25").click(function(){
        $("#placehere").empty();
        var title_value = 28;
        var pic_times = 1024;
        var title_h3 = document.createElement("h3");
        title_h3.className = "center";
        var t = document.createTextNode("第"+title_value+"層卷積結果");
        title_h3.appendChild(t);
        document.getElementById('placehere').append(title_h3);
        for (var j = 0; j < pic_times; j++) {
            var elem = document.createElement("img");
            var div = document.createElement("div");
            div.id = "divcon" + title_value + "_" + j;
            div.className = "ImgInline"
            elem.setAttribute("src", "data/img/conv" + title_value + "_" + j + ".jpg");
            elem.className = "col-xs-6 rounded img-fluid";
            elem.id = "img" + title_value + "_" + j;
            var img_size = 100;
            if (pic_times == 128) { img_size /= 1.5; }
            else if (pic_times == 256) { img_size /= 2; }
            else if (pic_times == 256 || pic_times == 425) { img_size /= 2.5; }
            else if (pic_times == 512) { img_size /= 3; }
            else if (pic_times == 1024) { img_size /= 4; }
            elem.setAttribute("height", 13);
            elem.setAttribute("width", 13);

            document.getElementById('placehere').appendChild(div);
            document.getElementById("divcon" + title_value + "_" + j).appendChild(elem);
        }
    })
    $("#rect26").click(function(){
        $("#placehere").empty();
        var title_value = 29;
        var pic_times = 125;
        var title_h3 = document.createElement("h3");
        title_h3.className = "center";
        var t = document.createTextNode("第"+title_value+"層卷積結果");
        title_h3.appendChild(t);
        document.getElementById('placehere').append(title_h3);
        for (var j = 0; j < pic_times; j++) {
            var elem = document.createElement("img");
            var div = document.createElement("div");
            div.id = "divcon" + title_value + "_" + j;
            div.className = "ImgInline"
            elem.setAttribute("src", "data/img/conv" + title_value + "_" + j + ".jpg");
            elem.className = "col-xs-6 rounded img-fluid";
            elem.id = "img" + title_value + "_" + j;
            var img_size = 100;
            if (pic_times == 128) { img_size /= 1.5; }
            else if (pic_times == 256) { img_size /= 2; }
            else if (pic_times == 256 || pic_times == 425) { img_size /= 2.5; }
            else if (pic_times == 512) { img_size /= 3; }
            else if (pic_times == 1024) { img_size /= 4; }
            elem.setAttribute("height", 13);
            elem.setAttribute("width", 13);

            document.getElementById('placehere').appendChild(div);
            document.getElementById("divcon" + title_value + "_" + j).appendChild(elem);
        }
    })
});
