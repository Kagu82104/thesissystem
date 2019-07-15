$(document).ready(function() {
  //window.onresize = updateWindow;
  width = $('#col1').width();
  height = $('#col1').height();
  origin_X = width / 2;
  origin_Y = 0;
  result_X = (width * 3) / 2;
  result_Y = height / 2;
  below_y = 0;
  //rule1();
  rule2();
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
var line_row = []; //Row(left to right, top to bottom).
var line_col = []; //Column(top to bottom, left to right).
var Rect = [];
var circles_be;
var circles_af;
var line_op;
var Text = []; //[0...2] = O, P, TEXT
var cube1 = [
  'm 110.06666,186.93331 0,108.70439 -3.84654,1.36228 0,-107.95695 z',
  'm 110.06666,295.6377 -106.9555294,0 L 6.7089235e-8,296.99998 106.22012,296.99998 Z',
  'm 110.06666,186.93331 -106.9555294,0 0,108.70439 106.9555294,0 z',
  'm 3.1111306,186.93331 0,108.70439 -3.111130532910765,1.36228 7e-15,-107.95695 z',
  'm 110.06666,186.93331 -106.9555294,0 L 6.7089242e-8,189.04303 106.22012,189.04303 Z',
  'm 106.22012,189.04303 -106.220119932910748,0 -7e-15,107.95695 106.220119932910762,0 z'
];
function rule1() {
  Draw_Animation();
}
function rule2() {
  Draw_cube();
}

function Draw_cube() {
  var svgContainer_anime = d3
    .select('#net-group')
    .append('svg')
    .attr('id', 'net-svg')
    .attr('width', '350')
    .attr('height', '8000');

  var defs = svgContainer_anime.append('defs');

  var arrowMarker = defs
    .append('marker')
    .attr('id', 'arrow')
    .attr('markerUnits', 'strokeWidth')
    .attr('markerWidth', '8')
    .attr('markerHeight', '6')
    .attr('viewBox', '0 0 10 10')
    .attr('refX', '9')
    .attr('refY', '5')
    .attr('orient', 'auto');

  var arrow_path = 'M 0 0 L 10 5 L 0 10 L 4 5 z';

  arrowMarker
    .append('path')
    .attr('d', arrow_path)
    .attr('fill', '#554037');

  var pattern1 = defs.append('pattern').attr('id','imgpattern').append('image').attr("x", 0).attr("y", 0).attr('xlink:href','data/img/conv1_0.jpg').attr("width", 400)
  .attr("height", 400)
  .attr("id", "fillImage");
//input
  var svg_img = svgContainer_anime
    .append('image')
    .attr('image-rendering', 'optimizeQuality')
    .attr('id', 'inputimg');

  var img = new Image();
  var inputpic = 'data/dog-cycle-car.png';

  img.src = inputpic;
  var picwidth = width;
  svg_img.attr('width', $('#net-svg').width()).attr('xlink:href', inputpic);

  //output
  var svg_img = svgContainer_anime
  .append('image')
  .attr('image-rendering', 'optimizeQuality')
  .attr('id', 'outputimg').attr('x',50).attr('y','4798');

var img1 = new Image();
var outputpic = 'data/predictions.png';

img1.src = outputpic;
svg_img.attr('width', $('#net-svg').width()).attr('xlink:href', outputpic);

var gtransform = svgContainer_anime
  .append('g')
  .attr('transform', 'translate(40,68.5)');
//
  var goutput = gtransform.append('g').attr('class', 'output');
  DrawPath(goutput, 'M120,194.5 L175,214.5 L175,244.5'); //conv1_32  154.5 42.5
  DrawPath(goutput, 'M100,194.5 L30,214.5 L30,4703 L50,4728.5'); //input_output
  DrawPath(goutput, 'M175,355 L175,397'); //maxpool1
  DrawPath(goutput, 'M175,508 L175,554.5'); //conv2
  DrawPath(goutput, 'M175,665 L175,709'); //Maxpool2
  DrawPath(goutput, 'M175,820 L175,863'); //conv3
  DrawPath(goutput, 'M175,974.5 L175,1018'); //conv4
  DrawPath(goutput, 'M175,1129 L175,1172.5'); //conv5
  DrawPath(goutput, 'M175,1283.5 L175,1326.5'); //Maxpool3
  DrawPath(goutput, 'M175,1438 L175,1481.5'); //conv6
  DrawPath(goutput, 'M175,1592.5 L175,1636'); //conv7
  DrawPath(goutput, 'M175,1747 L175,1790.5'); //conv8
  DrawPath(goutput, 'M175,1901.5 L175,1945'); //Maxpool4
  DrawPath(goutput, 'M175,2056 L175,2099.5'); //conv9
  DrawPath(goutput, 'M175,2210.5 L175,2254'); //conv10
  DrawPath(goutput, 'M175,2365 L175,2408.5'); //conv11
  DrawPath(goutput, 'M175,2519.5 L175,2563'); //conv12
  DrawPath(goutput, 'M175,2674 L175,2717.5'); //conv13
  DrawPath(goutput, 'M150,2828.5 L105,2849.5 L105,2872'); //Maxpool5
  DrawPath(goutput, 'M200,2828.5 L245,2849.5 L245,3953.5'); //reorg
  DrawPath(goutput, 'M105,2983 L105,3026.5'); //conv14
  DrawPath(goutput, 'M105,3137.5 L105,3181'); //conv15
  DrawPath(goutput, 'M105,3292 L105,3335.5'); //conv16
  DrawPath(goutput, 'M105,3446.5 L105,3490'); //conv17
  DrawPath(goutput, 'M105,3601 L105,3644.5'); //conv18
  DrawPath(goutput, 'M105,3755.5 L105,3799'); //conv19
  DrawPath(goutput, 'M105,3910 L105,3953.5'); //conv20
  DrawPath(goutput, 'M105,4064.5 L105,4085.5 L140,4108'); //concat
  DrawPath(goutput, 'M245,4064.5 L245,4085.5 L200,4108'); //concat
  DrawPath(goutput, 'M175,4219 L175,4262.5'); //conv21
  DrawPath(goutput, 'M175,4373.5 L175,4417'); //conv22
  DrawPath(goutput, 'M175,4528 L175,4571.5'); //conv23
  DrawPath(goutput, 'M175,4682 L175,4703 L160,4728.5'); //inputtooutput
  var gcubeinput = goutput
    .append('g')
    .attr('id', 'cubeinput')
    .attr('class', 'nodes');
  //
  DrawNodeConvolution(gcubeinput, '85.75', '24.25', 'tip-1', 'Conv1_32', 'convolution','data/img/conv1_0.jpg');
  DrawNode(gcubeinput, '85.75', '175.75', 'tip-2', 'MaxPool1', 'pooling');
  DrawNodeConvolution(gcubeinput, '85.75', '333.25', 'tip-3', 'Conv2_64', 'convolution','data/img/conv2_0.jpg');
  DrawNode(gcubeinput, '85.75', '487.75', 'tip-4', 'MaxPool2', 'pooling');
  DrawNodeConvolution(gcubeinput, '85.75', '642.25', 'tip-5', 'Conv3_128', 'convolution','data/img/conv3_0.jpg');
  DrawNodeConvolution(gcubeinput, '85.75', '796.75', 'tip-6', 'Conv4_64', 'convolution','data/img/conv4_0.jpg');
  DrawNodeConvolution(gcubeinput, '85.75', '951.25', 'tip-7', 'Conv5_128', 'convolution','data/img/conv5_0.jpg');
  DrawNode(gcubeinput, '85.75', '1105.75', 'tip-8', 'MaxPool3', 'pooling');
  DrawNodeConvolution(gcubeinput, '85.75', '1260.25', 'tip-9', 'Conv6_256', 'convolution','data/img/conv6_0.jpg');
  DrawNodeConvolution(
    gcubeinput,
    '85.75',
    '1414.75',
    'tip-10',
    'Conv7_128',
    'convolution','data/img/conv7_0.jpg'
  );
  DrawNodeConvolution(
    gcubeinput,
    '85.75',
    '1569.25',
    'tip-11',
    'Conv8_256',
    'convolution','data/img/conv8_0.jpg'
  );
  DrawNode(gcubeinput, '85.75', '1723.75', 'tip-12', 'MaxPool4', 'pooling');
  DrawNodeConvolution(
    gcubeinput,
    '85.75',
    '1878.25',
    'tip-13',
    'Conv9_512',
    'convolution','data/img/conv9_0.jpg'
  );
  DrawNodeConvolution(
    gcubeinput,
    '85.75',
    '2032.75',
    'tip-14',
    'Conv10_256',
    'convolution','data/img/conv10_0.jpg'
  );
  DrawNodeConvolution(
    gcubeinput,
    '85.75',
    '2187.25',
    'tip-15',
    'Conv11_512',
    'convolution','data/img/conv11_0.jpg'
  );
  DrawNodeConvolution(
    gcubeinput,
    '85.75',
    '2341.75',
    'tip-16',
    'Conv12_256',
    'convolution','data/img/conv12_0.jpg'
  );
  DrawNodeConvolution(
    gcubeinput,
    '85.75',
    '2496.25',
    'tip-17',
    'Conv13_512',
    'convolution','data/img/conv13_0.jpg'
  );
  DrawNode(gcubeinput, '16.5', '2650.75', 'tip-18', 'MaxPool5', 'pooling');
  DrawNodeConvolution(
    gcubeinput,
    '16.5',
    '2805.25',
    'tip-19',
    'Conv14_1024',
    'convolution','data/img/conv14_0.jpg'
  );
  DrawNodeConvolution(
    gcubeinput,
    '16.5',
    '2959.75',
    'tip-20',
    'Conv15_512',
    'convolution','data/img/conv15_0.jpg'
  );
  DrawNodeConvolution(
    gcubeinput,
    '16.5',
    '3114.25',
    'tip-21',
    'Conv16_1024',
    'convolution','data/img/conv16_0.jpg'
  );
  DrawNodeConvolution(
    gcubeinput,
    '16.5',
    '3268.75',
    'tip-22',
    'Conv17_512',
    'convolution','data/img/conv17_0.jpg'
  );
  DrawNodeConvolution(
    gcubeinput,
    '16.5',
    '3423.25',
    'tip-23',
    'Conv18_1024',
    'convolution','data/img/conv18_0.jpg'
  );
  DrawNodeConvolution(
    gcubeinput,
    '16.5',
    '3577.75',
    'tip-24',
    'Conv19_1024',
    'convolution','data/img/conv19_0.jpg'
  );
  DrawNodeConvolution(
    gcubeinput,
    '16.5',
    '3732.25',
    'tip-25',
    'Conv20_1024',
    'convolution','data/img/conv20_0.jpg'
  );
  DrawNode(
    gcubeinput,
    '155',
    '3732.25',
    'tip-26',
    'reorg',
    'reshap'
  );
  DrawNode2(
    gcubeinput,
    '85.75',
    '3886.75',
    'tip-27',
    'concat',
    'concat'
  );
  DrawNodeConvolution(
    gcubeinput,
    '85.75',
    '4041.25',
    'tip-28',
    'Conv21_1024',
    'convolution',
    'data/img/conv21_0.jpg'
  );
  DrawNodeConvolution(
    gcubeinput,
    '85.75',
    '4195.75',
    'tip-29',
    'Conv22_125',
    'convolution','data/img/conv22_0.jpg'
  );
  DrawNode(
    gcubeinput,
    '85.75',
    '4350.25',
    'tip-30',
    'Region',
    'region'
  );
  //DrawNode(gcubeinput,'50','4504.75','tip-31','Detection','sink');


}

function DrawNode(cubeinput, nodex, nodey, id, txt, nodetype) {
  var gnodetypeconvolution = cubeinput
    .append('g')
    .attr('class', 'node node-type-' + nodetype)
    .attr('transform', 'translate(' + nodex + ',' + nodey + ')') //155.75
    .attr('style', 'opacity:1')
    .attr('id', id); //id
  var glabel1 = gnodetypeconvolution
    .append('g')
    .attr('class', 'label')
    .attr('transform', 'translate(85,185.25)')
    .append('foreignObject')
    .attr('width', '95.2734375')
    .attr('height', '28.5')
    .attr('style', 'display: inline-block; white-space: nowrap;')
    .attr('class', 'cube-label')
    .html(txt);
  var gcube1 = gnodetypeconvolution
    .append('g')
    .attr('transform', 'translate(35,35)');
  DrawCube(gcube1, cube1);
  //
}
function DrawNode2(cubeinput, nodex, nodey, id, txt, nodetype) {
  var gnodetypeconvolution = cubeinput
    .append('g')
    .attr('class', 'node node-type-' + nodetype)
    .attr('transform', 'translate(' + nodex + ',' + nodey + ')') //155.75
    .attr('style', 'opacity:1')
    .attr('id', id); //id
  var glabel1 = gnodetypeconvolution
    .append('g')
    .attr('class', 'label')
    .attr('transform', 'translate(40,185.25)')
    .append('foreignObject')
    .attr('width', '95.2734375')
    .attr('height', '28.5')
    .attr('style', 'display: inline-block; white-space: nowrap;')
    .attr('class', 'cube-label')
    .html(txt);
  var gcube1 = gnodetypeconvolution
    .append('g')
    .attr('transform', 'translate(35,35)');
    DrawCube(gcube1, cube1);
  //
}
function DrawNodeConvolution(cubeinput, nodex, nodey, id, txt, nodetype,image) {
  var gnodetypeconvolution = cubeinput
    .append('g')
    .attr('class', 'node node-type-' + nodetype)
    .attr('transform', 'translate(' + nodex + ',' + nodey + ')') //155.75
    .attr('style', 'opacity:1')
    .attr('id', id); //id
  var glabel1 = gnodetypeconvolution
    .append('g')
    .attr('class', 'label')
    .attr('transform', 'translate(85,185.25)')
    .append('foreignObject')
    .attr('width', '95.2734375')
    .attr('height', '28.5')
    .attr('style', 'display: inline-block; white-space: nowrap;')
    .attr('class', 'cube-label')
    .html(txt);
  var gcube1 = gnodetypeconvolution
    .append('g')
    .attr('transform', 'translate(35,35)');
    DrawCubeConvolution(gcube1, cube1,image);
  //
}
function DrawPath(g, path) {
  g.append('g')
    .attr('class', 'edgePaths')
    .append('g')
    .attr('class', 'edgePath')
    .attr('style', 'opacity:1')
    .append('path')
    .attr('class', 'path')
    .attr('d', path)
    .attr('marker-end', 'url(#arrow)')
    .attr('style', 'fill:none');
}

function DrawCube(g, cube) {
  var cubecolor = [
    '#353564',
    '#afafde',
    '#8686bf',
    '#d7d7ff',
    '#4d4d9f',
    '#e9e9ff'
  ];
  for (var i = 0; i < 6; i++) {
    g.append('path')
      .attr('style', 'fill:' + cubecolor[i] + ';stroke:none;stroke-width:3;')
      .attr('d', cube[i]);
  }
}
function DrawCubeConvolution(g, cube,image) {
  var cubecolor = [
    '#353564',
    '#afafde',
    '#8686bf',
    '#d7d7ff',
    '#4d4d9f',
    '#e9e9ff'
  ];
  for (var i = 0; i < 5; i++) {
    g.append('path')
      .attr('style', 'fill:' + cubecolor[i] + ';stroke:none;stroke-width:3;')
      .attr('d', cube[i]);
  }
  //input
  var svg_img1 = g
    .append('image')
    .attr('image-rendering', 'optimizeQuality')
    .attr('id', 'conv1_0').attr('x','6.7089242e-8').attr('y','189');

  var img = new Image();
  var inputpic = image;

  img.src = inputpic;
  svg_img1.attr('width','106.35').attr('xlink:href', inputpic);
      
}
function Draw_Animation() {
  var svgContainer_anime = d3
    .select('#col1')
    .append('svg')
    .attr('width', '100%')
    .attr('height', '100%');

  var defs = svgContainer_anime.append('defs');

  var arrowMarker = defs
    .append('marker')
    .attr('id', 'arrow')
    .attr('markerUnits', 'strokeWidth')
    .attr('markerWidth', '12')
    .attr('markerHeight', '12')
    .attr('viewBox', '0 0 12 12')
    .attr('refX', '6')
    .attr('refY', '6')
    .attr('orient', 'auto');

  var arrow_path = 'M2,2 L10,6 L2,10 L6,6 L2,2';

  arrowMarker
    .append('path')
    .attr('d', arrow_path)
    .attr('fill', '#000');

  
  var svg_img = svgContainer_anime
    .append('image')
    .attr('image-rendering', 'optimizeQuality')
    .attr('id', 'inputimg');

  var img = new Image();
  var inputpic = 'data/dog-cycle-car.png';

  img.src = inputpic;
  var picwidth = width;
  //var picheight = ;

  svg_img.attr('width', picwidth).attr('xlink:href', inputpic);

  var svg_img1 = svgContainer_anime
    .append('image')
    .attr('image-rendering', 'optimizeQuality')
    .attr('id', 'outputimg');
  below_y += $('#col1').height();
  var img1 = new Image();
  var outputpic = 'data/predictions.png';

  img1.src = outputpic;
  img1.onload = function() {
    var picheight = this.height * 0.5;
    svg_img1
      .attr('x', '0')
      .attr('y', $('#col1').height() - picheight)
      .attr('width', picwidth)
      .attr('xlink:href', outputpic);
    line_col[0] = DrawLine_arrow(
      svgContainer_anime,
      origin_X,
      $('#inputimg').height(),
      $('#col1').height() - picheight - 10
    );
    //line_col[0] = DrawLine_arrow1(svgContainer_anime,$("#inputimg"),$("#outputimg"));
    console.log($('#col1').height() - picheight - 10 - $('#inputimg').height());
  };

  var sw = true;
  svgContainer_anime.on('mousedown', animate);

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
    var initinput = Src.append('rect')
      .attr('x', x)
      .attr('y', y)
      .attr('width', 416)
      .attr('height', 416)
      .attr('fill', data);
    return initinput;
  }
  function DrawConvolution(Src, x, y, color, id) {
    var rect_t = Src.append('rect')
      .attr('x', x)
      .attr('y', y)
      .attr('id', id)
      .attr('width', 150)
      .attr('height', 50)
      .attr('fill', color)
      .attr('stroke', 'black')
      .attr('stroke-width', 2);
    return rect_t;
  }
  function DrawMaxpool(Src, x, y, color) {
    var rect_t = Src.append('rect')
      .attr('x', x)
      .attr('y', y)
      .attr('width', 150)
      .attr('height', 50)
      .attr('fill', color)
      .attr('stroke', 'black')
      .attr('stroke-width', 2);
    return rect_t;
  }
  function DrawReOrg(Src, x, y, color) {
    var rect_t = Src.append('rect')
      .attr('x', x)
      .attr('y', y)
      .attr('width', 150)
      .attr('height', 50)
      .attr('fill', color)
      .attr('stroke', 'black')
      .attr('stroke-width', 2);
    return rect_t;
  }

  function DrawLine_arrow(Src, x, y1, y2) {
    var line_col = Src.append('line')
      .attr('x1', x)
      .attr('y1', y1)
      .attr('x2', x)
      .attr('y2', y2)
      .attr('stroke', 'black')
      .attr('stroke-width', 3)
      .attr('marker-end', 'url(#arrow)');
    return line_col;
  }
  function DrawLine_arrow1(Src, object1, object2) {
    var x1 = parseInt(object1.attr('x')) + object1.width() / 2;
    var x2 = parseInt(object2.attr('x')) + object2.width() / 2;
    var y1 = parseInt(object1.attr('y')) + object1.height();
    var y2 = parseInt(object2.attr('y')) - 13;
    var line_col = Src.append('line')
      .attr('x1', x1)
      .attr('y1', y1)
      .attr('x2', x2)
      .attr('y2', y2)
      .attr('stroke', 'black')
      .attr('stroke-width', 3)
      .attr('marker-end', 'url(#arrow)');
    return line_col;
  }
  function DrawLine_Branch(Src, x, y1, y2) {
    var line_col = Src.append('line')
      .attr('x1', x)
      .attr('y1', y1)
      .attr('x2', x)
      .attr('y2', y2)
      .attr('stroke', 'black')
      .attr('stroke-width', 3)
      .attr('marker-end', 'url(#arrow)');
    return line_col;
  }

  function animate() {
    if (sw) {
      for (var i = 0; i < 31; i++) {
        Rect[i] = DrawConvolution(
          svgContainer_anime,
          origin_X - 75,
          $('#inputimg').height() + 65 + 5 + i * 120,
          '#CA5237',
          'conv_' + i
        );
        below_y += 120;
      }
      line_col[0].remove();
      DrawLine_arrow(
        svgContainer_anime,
        $('#inputimg').width() / 2,
        $('#inputimg').height(),
        $('#inputimg').height() + 57
      );
      for (var i = 0; i < 30; i++) {
        DrawLine_arrow1(
          svgContainer_anime,
          $('#conv_' + i),
          $('#conv_' + (i + 1))
        );
      }
      svg_img1
        .transition()
        .duration(1000)
        .attr('y', below_y - $('#outputimg').height());
      DrawLine_arrow(
        svgContainer_anime,
        $('#inputimg').width() / 2,
        below_y - $('#outputimg').height() - 65,
        below_y - $('#outputimg').height() - 11
      );
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
    } else {
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
  }
}

function DrawRect(Src, x, y, id) {
  var rect_t = Src.append('rect')
    .attr('x', x)
    .attr('y', y)
    .attr('id', id)
    .attr('width', 100)
    .attr('height', 50)
    .attr('fill', 'white')
    .attr('stroke', 'black')
    .attr('stroke-width', 2);
  return rect_t;
}

function DrawRect_T(Src, x, y, width, height) {
  var rect_t = Src.append('rect')
    .attr('x', x)
    .attr('y', y)
    .attr('width', width)
    .attr('height', height)
    .attr('fill', 'white')
    .attr('stroke', 'black')
    .attr('stroke-width', 2);
  return rect_t;
}

//Filled L to R
function DrawCircle_F(Src, cirData) {
  var circles = Src.selectAll('.circle')
    .data(cirData)
    .enter()
    .append('circle');

  var circleAttributes = circles
    .attr('cx', function(d) {
      return d.x;
    })
    .attr('cy', function(d) {
      return d.y;
    })
    .attr('r', 7)
    .style('fill', 'black');

  return circles;
}

//Stroke
function DrawCircle_S(Src, cirData) {
  var circles = Src.selectAll('.circle')
    .data(cirData)
    .enter()
    .append('circle');

  var circleAttributes = circles
    .attr('cx', function(d) {
      return d.x;
    })
    .attr('cy', function(d) {
      return d.y;
    })
    .attr('r', 5)
    .style('stroke', 'black')
    .style('fill', 'white')
    .attr('stroke-width', 2);

  return circles;
}

function DrawLine_col(Src, x, y1, y2) {
  var line_col = Src.append('line')
    .attr('x1', x)
    .attr('y1', y1)
    .attr('x2', x)
    .attr('y2', y2)
    .attr('stroke', 'black')
    .attr('stroke-width', 2);
  return line_col;
}

function DrawLine_row(Src, y, x1, x2) {
  var line_row = Src.append('line')
    .attr('x1', x1)
    .attr('y1', y)
    .attr('x2', x2)
    .attr('y2', y)
    .attr('stroke', 'black')
    .attr('stroke-width', 2);
  return line_row;
}

function DrawDashline(Src, x, y1, y2) {
  var dashline_t = Src.append('line')
    .attr('x1', x)
    .attr('y1', y1)
    .attr('x2', x)
    .attr('y2', y2)
    .attr('stroke-dasharray', '20, 10')
    .attr('stroke', 'black')
    .attr('stroke-width', 2);
  return dashline_t;
}

function DrawDashline_S(Src, x1, x2, y1, y2) {
  var dashline_t = Src.append('line')
    .attr('x1', x1)
    .attr('y1', y1)
    .attr('x2', x2)
    .attr('y2', y2)
    .attr('stroke-dasharray', '5, 3')
    .attr('stroke', 'black')
    .attr('stroke-width', 2);
  return dashline_t;
}

function DrawLineGraph(Src, lineData) {
  //This is the accessor function
  var lineFunction = d3.svg
    .line()
    .x(function(d) {
      return d.x;
    })
    .y(function(d) {
      return d.y;
    })
    .interpolate('linear');

  var lineGraph_t = Src.append('path')
    .attr('d', lineFunction(lineData))
    .attr('stroke', 'black')
    .attr('stroke-width', 2)
    .attr('fill', 'none');

  return lineGraph_t;
}

function DrawText(Src, str, x, y) {
  var text_t = Src.append('text')
    .attr('x', x)
    .attr('y', y)
    .attr('font-family', 'sans-serif')
    .attr('font-size', '24')
    .attr('fill', 'black')
    .text(str);
  return text_t;
}
