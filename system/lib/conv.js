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
			$("#placehere").append($("<div class='air ImgInline' style='top:" + $(this).offset().top + "px;left:'" + $(this).offset().top + "'px ><img src='" + this.src + "'></div>"));
		}, function () {
			$("#placehere").find("div.air:last").remove();
		}
	);
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
				$("#placehere").append($("<div class='air ImgInline' style='top:" + $(this).offset().top + "px;left:'" + $(this).offset().top + "'px' ><img src='" + this.src + "'></div>"));
			}, function () {
				$("#placehere").find("div.air:last").remove();
			}
		);
	});
});
