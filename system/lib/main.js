$(document).ready(function () {
  //window.onresize = updateWindow;
  width = $("#col1").width();
  height = $("#col1").height();
  origin_X = width / 2;
  origin_Y = 0;
  result_X = (width) * 3 / 2;
  result_Y = height / 2;
  below_y = 0
  rule1();
});

var width;
var height;
var origin_X;
var origin_Y;
var result_X;
var result_Y;
var unit_x = 50;
var unit_y = 50;
var below_y;
var jsonCircles = [];
var line_row = [];    //Row(left to right, top to bottom). 
var line_col = [];    //Column(top to bottom, left to right).
var Rect = [];
var circles_be;
var circles_af;
var line_op;
var Text = [];      //[0...2] = O, P, TEXT

function rule1() {
  Draw_Animation();
}


function Draw_Animation() {
  var svgContainer_anime = d3.select("#col1").append("svg").attr("width", "100%").attr("height", "100%");

  var defs = svgContainer_anime.append("defs");

  var arrowMarker = defs.append("marker")
    .attr("id", "arrow")
    .attr("markerUnits", "strokeWidth")
    .attr("markerWidth", "12")
    .attr("markerHeight", "12")
    .attr("viewBox", "0 0 12 12")
    .attr("refX", "6")
    .attr("refY", "6")
    .attr("orient", "auto");

  var arrow_path = "M2,2 L10,6 L2,10 L6,6 L2,2";

  arrowMarker.append("path")
    .attr("d", arrow_path)
    .attr("fill", "#000");

  var svg_img = svgContainer_anime.append('image')
    .attr('image-rendering', 'optimizeQuality')
    .attr('id', 'inputimg');

  var img = new Image();
  var inputpic = "data/dog-cycle-car.png";

  img.src = inputpic;
  var picwidth = width;
  //var picheight = ;

  svg_img.attr('width', picwidth).attr('xlink:href', inputpic);



  var svg_img1 = svgContainer_anime.append('image')
    .attr('image-rendering', 'optimizeQuality')
    .attr('id', 'outputimg');
  below_y += $("#col1").height();
  var img1 = new Image();
  var outputpic = "data/predictions.png";

  img1.src = outputpic;
  img1.onload = function () {
    var picheight = this.height * 0.5;
    svg_img1.attr('x', '0')
      .attr('y', $("#col1").height() - picheight)
      .attr('width', picwidth)
      .attr('xlink:href', outputpic)
    //line_col[0] = DrawLine_arrow(svgContainer_anime, origin_X, $('#inputimg').height(), $("#col1").height() - picheight - 10);
    line_col[0] = DrawLine_arrow1(svgContainer_anime,$("#inputimg"),$("#outputimg"));
    console.log($("#col1").height() - picheight - 10 - $('#inputimg').height());
  }


  var sw = true;
  svgContainer_anime.on("mousedown", animate);



  //Rect[0] = init(svgContainer_anime,origin_X,origin_Y,"data/dog-cycle-car.png");




  // line_row[0] = DrawLine_row(svgContainer_anime, origin_Y - unit_y - 10, origin_X - unit_x, origin_X + unit_x);               
  // line_row[1] = DrawLine_row(svgContainer_anime, origin_Y + unit_y + 10, origin_X - unit_x, origin_X + unit_x);
  // line_col[0] = DrawLine_col(svgContainer_anime, origin_X - unit_x - 10, origin_Y - unit_y, origin_Y + unit_y);
  // line_col[1] = DrawLine_col(svgContainer_anime, origin_X + unit_x + 10, origin_Y - unit_y, origin_Y + unit_y);
  //line (物件,終點位置x,起點位置x,終點位置y,起點位置y)

  // Text[i+1] = DrawText(svgContainer_anime, "Convolution", origin_X-65, origin_Y+35+i*70);
  /*for (var i =  0; i < 31; i++) {
      Rect[i] = DrawConvolution(svgContainer_anime,origin_X-75, origin_Y+5+i*120,"#CA5237");
  }*/

  /*for (var i =  0; i < 30; i++) {     
      line_col[i] = DrawLine_arrow(svgContainer_anime, origin_X,55+i*120, 115+i*120);
      //line_col[i] = DrawLine_Branch(svgContainer_anime, origin_X+100,55+i*120, 110+i*120);
  }*/
  //Text[0] = DrawText(svgContainer_anime, "data", origin_X-25, origin_Y+35);

  // for (var i = 1; i <=28; i++) {
  //   if (i!=2&&i!=4&&i!=8&&i!=12&&i!=18&&i!=26) {
  //     Text[i] = DrawText(svgContainer_anime, "Convolution_"+i, origin_X-65, origin_Y+35+i*70);
  //   }else if(i!=26){
  //     Text[i] = DrawText(svgContainer_anime, "Maxpool", origin_X-45, origin_Y+35+i*70);
  //   }
  // }
  // for (var i=0; i<2 ;i++)
  // {
  //   Rect[i] = DrawRect(svgContainer_anime, origin_X - unit_x, origin_Y - unit_y*(1-i));
  // }

  // Rect[2] = DrawRect(svgContainer_anime, origin_X - unit_x*3, origin_Y - unit_y).style("opacity", 0);
  // Rect[3] = DrawRect(svgContainer_anime, origin_X - unit_x*3, origin_Y).style("opacity", 0);
  // Rect[4] = DrawRect(svgContainer_anime, origin_X + unit_x, origin_Y - unit_y).style("opacity", 0);
  // Rect[5] = DrawRect(svgContainer_anime, origin_X + unit_x, origin_Y).style("opacity", 0);


  // jsonCircles[0] = [{ "x": origin_X - unit_x, "y": origin_Y - unit_y},
  //            { "x": origin_X - unit_x, "y": origin_Y},
  //            { "x": origin_X - unit_x, "y": origin_Y + unit_y},
  //            { "x": origin_X + unit_x, "y": origin_Y - unit_y},
  //            { "x": origin_X + unit_x, "y": origin_Y},
  //            { "x": origin_X + unit_x, "y": origin_Y + unit_y}];

  // jsonCircles[1] = [{ "x": origin_X - unit_x*3, "y": origin_Y - unit_y},
  //            { "x": origin_X - unit_x*3, "y": origin_Y},
  //            { "x": origin_X - unit_x*3, "y": origin_Y + unit_y},
  //            { "x": origin_X - unit_x, "y": origin_Y - unit_y},
  //            { "x": origin_X - unit_x, "y": origin_Y},
  //            { "x": origin_X - unit_x, "y": origin_Y + unit_y},
  //            { "x": origin_X + unit_x, "y": origin_Y - unit_y},
  //            { "x": origin_X + unit_x, "y": origin_Y},
  //            { "x": origin_X + unit_x, "y": origin_Y + unit_y},
  //            { "x": origin_X + unit_x*3, "y": origin_Y - unit_y},
  //            { "x": origin_X + unit_x*3, "y": origin_Y},
  //            { "x": origin_X + unit_x*3, "y": origin_Y + unit_y}];

  // circles_be = DrawCircle_F(svgContainer_anime, jsonCircles[0]);

  // circles_af = DrawCircle_F(svgContainer_anime, jsonCircles[1]).style("opacity", 0);

  // line_op = DrawDashline(svgContainer_anime, origin_X, origin_Y - unit_y*2, origin_Y + unit_y*2);//虛線

  // Text[0] = DrawText(svgContainer_anime, "O", origin_X + 5, origin_Y + 20);


  function init(Src, x, y, data) {
    var initinput = Src.append("rect")
      .attr("x", x)
      .attr("y", y)
      .attr("width", 416)
      .attr("height", 416)
      .attr("fill", data)
    return initinput;
  }
  function DrawConvolution(Src, x, y, color, id) {
    var rect_t = Src.append("rect")
      .attr("x", x)
      .attr("y", y)
      .attr("id", id)
      .attr("width", 150)
      .attr("height", 50)
      .attr("fill", color)
      .attr("stroke", "black")
      .attr("stroke-width", 2);
    return rect_t;
  }
  function DrawMaxpool(Src, x, y, color) {
    var rect_t = Src.append("rect")
      .attr("x", x)
      .attr("y", y)
      .attr("width", 150)
      .attr("height", 50)
      .attr("fill", color)
      .attr("stroke", "black")
      .attr("stroke-width", 2);
    return rect_t;
  }
  function DrawReOrg(Src, x, y, color) {
    var rect_t = Src.append("rect")
      .attr("x", x)
      .attr("y", y)
      .attr("width", 150)
      .attr("height", 50)
      .attr("fill", color)
      .attr("stroke", "black")
      .attr("stroke-width", 2);
    return rect_t;
  }

  function DrawLine_arrow(Src, x, y1, y2) {
    var line_col = Src.append("line")
      .attr("x1", x)
      .attr("y1", y1)
      .attr("x2", x)
      .attr("y2", y2)
      .attr("stroke", "black")
      .attr("stroke-width", 3)
      .attr("marker-end", "url(#arrow)");
    return line_col;
  }
  function DrawLine_arrow1(Src, object1, object2) {
    var x1 = parseInt(object1.attr("x")) + object1.width() / 2;
    var x2 = parseInt(object2.attr("x")) + object2.width() / 2;
    var y1 = parseInt(object1.attr("y")) + object1.height();
    var y2 = parseInt(object2.attr("y")) - 13;
    var line_col = Src.append("line")
      .attr("x1", x1)
      .attr("y1", y1)
      .attr("x2", x2)
      .attr("y2", y2)
      .attr("stroke", "black")
      .attr("stroke-width", 3)
      .attr("marker-end", "url(#arrow)");
    return line_col;
  }
  function DrawLine_Branch(Src, x, y1, y2) {
    var line_col = Src.append("line")
      .attr("x1", x)
      .attr("y1", y1)
      .attr("x2", x)
      .attr("y2", y2)
      .attr("stroke", "black")
      .attr("stroke-width", 3)
      .attr("marker-end", "url(#arrow)");
    return line_col;
  }


  function animate() {
    if (sw) {

      for (var i = 0; i < 31; i++) {
        Rect[i] = DrawConvolution(svgContainer_anime, origin_X - 75, $("#inputimg").height() + 30 + 5 + i * 120, "#CA5237", "conv_" + i);
        below_y += 120;
      }
      line_col[0].remove();
      DrawLine_arrow(svgContainer_anime, $("#inputimg").width() / 2, $("#inputimg").height(), $("#inputimg").height() + 23)
      for (var i = 0; i < 30; i++) {
        DrawLine_arrow1(svgContainer_anime, $("#conv_" + i), $('#conv_' + (i + 1)));
      }
      svg_img1.transition().duration(1000).attr('y', below_y - $("#outputimg").height());
      DrawLine_arrow(svgContainer_anime, $("#inputimg").width() / 2, below_y - $("#outputimg").height() - 30, below_y - $("#outputimg").height() + 23);
      $('body').attr({ style: 'height: ' + below_y });
      $('svg').attr({ style: 'height: ' + below_y });
      // Rect[3].transition()
      //   .duration(1000)
      //   .style("opacity", 1);
      // Rect[4].transition()
      //   .duration(1000)
      //   .style("opacity", 1);
      // Rect[5].transition()
      //   .duration(1000)
      //   .style("opacity", 1);
      // line_row[0].transition()
      //   .duration(1000)
      //   .attr("x1", origin_X - unit_x*3)
      //   .attr("x2", origin_X + unit_x*3);
      // line_row[1].transition()
      //   .duration(1000)
      //   .attr("x1", origin_X - unit_x*3)
      //   .attr("x2", origin_X + unit_x*3);
      // line_col[0].transition()
      //   .duration(1000)
      //   .attr("x1", origin_X - unit_x*3 - 10)
      //   .attr("x2", origin_X - unit_x*3 - 10);
      // line_col[1].transition()
      //   .duration(1000)
      //   .attr("x1", origin_X + unit_x*3 + 10)
      //   .attr("x2", origin_X + unit_x*3 + 10);
      // circles_be.transition()
      //   .duration(100)
      //   .style("opacity", 0);
      // circles_af.transition()
      //   .delay(500)
      //   .duration(1000)
      //   .style("opacity", 1);

      sw = false;
    }
    else {
      // Rect[2].transition()
      //   .duration(1000)
      //   .style("opacity", 0);
      // Rect[3].transition()
      //   .duration(1000)
      //   .style("opacity", 0);
      // Rect[4].transition()
      //   .duration(1000)
      //   .style("opacity", 0);
      // Rect[5].transition()
      //   .duration(1000)
      //   .style("opacity", 0);
      // line_row[0].transition()
      //   .duration(1000)
      //   .attr("x1", origin_X - unit_x)
      //   .attr("x2", origin_X + unit_x);
      // line_row[1].transition()
      //   .duration(1000)
      //   .attr("x1", origin_X - unit_x)
      //   .attr("x2", origin_X + unit_x);
      // line_col[0].transition()
      //   .duration(1000)
      //   .attr("x1", origin_X - unit_x - 10)
      //   .attr("x2", origin_X - unit_x - 10);
      // line_col[1].transition()
      //   .duration(1000)
      //   .attr("x1", origin_X + unit_x + 10)
      //   .attr("x2", origin_X + unit_x + 10);
      // circles_be.transition()
      //   .delay(500)
      //   .duration(1000)
      //   .style("opacity", 1);
      // circles_af.transition()
      //   .duration(100)
      //   .style("opacity", 0);

      sw = true;
    }
  };
}


function DrawRect(Src, x, y, id) {
  var rect_t = Src.append("rect")
    .attr("x", x)
    .attr("y", y)
    .attr("id", id)
    .attr("width", 100)
    .attr("height", 50)
    .attr("fill", "white")
    .attr("stroke", "black")
    .attr("stroke-width", 2);
  return rect_t;
}

function DrawRect_T(Src, x, y, width, height) {
  var rect_t = Src.append("rect")
    .attr("x", x)
    .attr("y", y)
    .attr("width", width)
    .attr("height", height)
    .attr("fill", "white")
    .attr("stroke", "black")
    .attr("stroke-width", 2);
  return rect_t;
}

//Filled L to R
function DrawCircle_F(Src, cirData) {
  var circles = Src.selectAll(".circle")
    .data(cirData)
    .enter()
    .append("circle");

  var circleAttributes = circles.attr("cx", function (d) { return d.x; })
    .attr("cy", function (d) { return d.y; })
    .attr("r", 7)
    .style("fill", "black");

  return circles;
}

//Stroke
function DrawCircle_S(Src, cirData) {
  var circles = Src.selectAll(".circle")
    .data(cirData)
    .enter()
    .append("circle");

  var circleAttributes = circles.attr("cx", function (d) { return d.x; })
    .attr("cy", function (d) { return d.y; })
    .attr("r", 5)
    .style("stroke", "black")
    .style("fill", "white")
    .attr("stroke-width", 2);

  return circles;
}

function DrawLine_col(Src, x, y1, y2) {
  var line_col = Src.append("line")
    .attr("x1", x)
    .attr("y1", y1)
    .attr("x2", x)
    .attr("y2", y2)
    .attr("stroke", "black")
    .attr("stroke-width", 2);
  return line_col;
}

function DrawLine_row(Src, y, x1, x2) {
  var line_row = Src.append("line")
    .attr("x1", x1)
    .attr("y1", y)
    .attr("x2", x2)
    .attr("y2", y)
    .attr("stroke", "black")
    .attr("stroke-width", 2);
  return line_row;
}

function DrawDashline(Src, x, y1, y2) {
  var dashline_t = Src.append("line")
    .attr("x1", x)
    .attr("y1", y1)
    .attr("x2", x)
    .attr("y2", y2)
    .attr("stroke-dasharray", "20, 10")
    .attr("stroke", "black")
    .attr("stroke-width", 2);
  return dashline_t;
}

function DrawDashline_S(Src, x1, x2, y1, y2) {
  var dashline_t = Src.append("line")
    .attr("x1", x1)
    .attr("y1", y1)
    .attr("x2", x2)
    .attr("y2", y2)
    .attr("stroke-dasharray", "5, 3")
    .attr("stroke", "black")
    .attr("stroke-width", 2);
  return dashline_t;
}

function DrawLineGraph(Src, lineData) {
  //This is the accessor function
  var lineFunction = d3.svg.line()
    .x(function (d) { return d.x; })
    .y(function (d) { return d.y; })
    .interpolate("linear");

  var lineGraph_t = Src.append("path")
    .attr("d", lineFunction(lineData))
    .attr("stroke", "black")
    .attr("stroke-width", 2)
    .attr("fill", "none");

  return lineGraph_t;
}

function DrawText(Src, str, x, y) {
  var text_t = Src.append("text")
    .attr("x", x)
    .attr("y", y)
    .attr("font-family", "sans-serif")
    .attr("font-size", "24")
    .attr("fill", "black")
    .text(str);
  return text_t;
}