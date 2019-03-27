$( document ).ready(function() {
  //window.onresize = updateWindow;
  width  = $(document).width();
  height = $(document).height();
  origin_X = width/6;
  origin_Y = height/6;
  result_X = (width) * 3/6;
  result_Y = height/6;
    rule1();
});

var width;
var height;
var origin_X;
var origin_Y;
var result_X;
var result_Y;
var unit_x  = 50;
var unit_y  = 50;

function rule1() {
  Draw_Animation();
}


function Draw_Animation() {
  var svgContainer_anime = d3.select("#animation").append("svg")
                      .attr("width", "100%")
                      .attr("height", "100%");
  var sw = true;
  svgContainer_anime.on("mousedown", animate);
                      
  var jsonCircles = [];
  var line_row = [];    //Row(left to right, top to bottom). 
  var line_col = [];    //Column(top to bottom, left to right).
  var Rect = [];
  var circles_be;
  var circles_af;
  var line_op;
  var Text = [];      //[0...2] = O, P, TEXT
  
  line_row[0] = DrawLine_row(svgContainer_anime, origin_Y - unit_y - 10, origin_X - unit_x, origin_X + unit_x);               
  line_row[1] = DrawLine_row(svgContainer_anime, origin_Y + unit_y + 10, origin_X - unit_x, origin_X + unit_x);
  line_col[0] = DrawLine_col(svgContainer_anime, origin_X - unit_x - 10, origin_Y - unit_y, origin_Y + unit_y);
  line_col[1] = DrawLine_col(svgContainer_anime, origin_X + unit_x + 10, origin_Y - unit_y, origin_Y + unit_y);
  
  for (var i=0; i<2 ;i++)
  {
    Rect[i] = DrawRect(svgContainer_anime, origin_X - unit_x, origin_Y - unit_y*(1-i));
  }
  
  Rect[2] = DrawRect(svgContainer_anime, origin_X - unit_x*3, origin_Y - unit_y).style("opacity", 0);
  Rect[3] = DrawRect(svgContainer_anime, origin_X - unit_x*3, origin_Y).style("opacity", 0);
  Rect[4] = DrawRect(svgContainer_anime, origin_X + unit_x, origin_Y - unit_y).style("opacity", 0);
  Rect[5] = DrawRect(svgContainer_anime, origin_X + unit_x, origin_Y).style("opacity", 0);
  
  
  jsonCircles[0] = [{ "x": origin_X - unit_x, "y": origin_Y - unit_y},
             { "x": origin_X - unit_x, "y": origin_Y},
             { "x": origin_X - unit_x, "y": origin_Y + unit_y},
             { "x": origin_X + unit_x, "y": origin_Y - unit_y},
             { "x": origin_X + unit_x, "y": origin_Y},
             { "x": origin_X + unit_x, "y": origin_Y + unit_y}];
             
  jsonCircles[1] = [{ "x": origin_X - unit_x*3, "y": origin_Y - unit_y},
             { "x": origin_X - unit_x*3, "y": origin_Y},
             { "x": origin_X - unit_x*3, "y": origin_Y + unit_y},
             { "x": origin_X - unit_x, "y": origin_Y - unit_y},
             { "x": origin_X - unit_x, "y": origin_Y},
             { "x": origin_X - unit_x, "y": origin_Y + unit_y},
             { "x": origin_X + unit_x, "y": origin_Y - unit_y},
             { "x": origin_X + unit_x, "y": origin_Y},
             { "x": origin_X + unit_x, "y": origin_Y + unit_y},
             { "x": origin_X + unit_x*3, "y": origin_Y - unit_y},
             { "x": origin_X + unit_x*3, "y": origin_Y},
             { "x": origin_X + unit_x*3, "y": origin_Y + unit_y}];
  
  circles_be = DrawCircle_F(svgContainer_anime, jsonCircles[0]);
  
  circles_af = DrawCircle_F(svgContainer_anime, jsonCircles[1]).style("opacity", 0);
  
  line_op = DrawDashline(svgContainer_anime, origin_X, origin_Y - unit_y*2, origin_Y + unit_y*2);
  
  Text[0] = DrawText(svgContainer_anime, "O", origin_X + 5, origin_Y + 20);
  
  function animate() {
    if(sw) {
      Rect[2].transition()
        .duration(1000)
        .style("opacity", 1);
      Rect[3].transition()
        .duration(1000)
        .style("opacity", 1);
      Rect[4].transition()
        .duration(1000)
        .style("opacity", 1);
      Rect[5].transition()
        .duration(1000)
        .style("opacity", 1);
      line_row[0].transition()
        .duration(1000)
        .attr("x1", origin_X - unit_x*3)
        .attr("x2", origin_X + unit_x*3);
      line_row[1].transition()
        .duration(1000)
        .attr("x1", origin_X - unit_x*3)
        .attr("x2", origin_X + unit_x*3);
      line_col[0].transition()
        .duration(1000)
        .attr("x1", origin_X - unit_x*3 - 10)
        .attr("x2", origin_X - unit_x*3 - 10);
      line_col[1].transition()
        .duration(1000)
        .attr("x1", origin_X + unit_x*3 + 10)
        .attr("x2", origin_X + unit_x*3 + 10);
      circles_be.transition()
        .duration(100)
        .style("opacity", 0);
      circles_af.transition()
        .delay(500)
        .duration(1000)
        .style("opacity", 1);
        
      sw = false;
    }
    else {
      Rect[2].transition()
        .duration(1000)
        .style("opacity", 0);
      Rect[3].transition()
        .duration(1000)
        .style("opacity", 0);
      Rect[4].transition()
        .duration(1000)
        .style("opacity", 0);
      Rect[5].transition()
        .duration(1000)
        .style("opacity", 0);
      line_row[0].transition()
        .duration(1000)
        .attr("x1", origin_X - unit_x)
        .attr("x2", origin_X + unit_x);
      line_row[1].transition()
        .duration(1000)
        .attr("x1", origin_X - unit_x)
        .attr("x2", origin_X + unit_x);
      line_col[0].transition()
        .duration(1000)
        .attr("x1", origin_X - unit_x - 10)
        .attr("x2", origin_X - unit_x - 10);
      line_col[1].transition()
        .duration(1000)
        .attr("x1", origin_X + unit_x + 10)
        .attr("x2", origin_X + unit_x + 10);
      circles_be.transition()
        .delay(500)
        .duration(1000)
        .style("opacity", 1);
      circles_af.transition()
        .duration(100)
        .style("opacity", 0);
      
      sw = true;
    }
    };
}


function DrawRect(Src, x, y) {
  var rect_t = Src.append("rect")
          .attr("x", x)
          .attr("y", y)
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

function DrawLine_row(Src, y, x1 ,x2) {
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
            .x(function(d) { return d.x; })
            .y(function(d) { return d.y; })
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