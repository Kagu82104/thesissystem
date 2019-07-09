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

function rule1() {
  Draw_Animation();
}
function rule2() {
  Draw_cube();
}
/*


<svg id="net-svg" width="258" height="2414">
          
          <g transform="translate(15)">
            <g class="output">
              <g class="clusters"></g>
              <g class="edgePaths">
                <g class="edgePath" style="opacity: 1;">
                  <path
                    class="path"
                    d="M118.65149781050955,48.5L135.91015625,63.5L135.91015625,78.5"
                    marker-end="url(#arrow)"
                    style="fill: none;"
                  ></path>
                </g>
                <g class="edgePath" style="opacity: 1;">
                  <path
                    class="path"
                    d="M135.91015625,127L135.91015625,142L135.91015625,157"
                    marker-end="url(#arrow)"
                    style="fill: none;"
                  ></path>
                </g>
                <g class="edgePath" style="opacity: 1;">
                  <path
                    class="path"
                    d="M135.91015625,205.5L135.91015625,220.5L135.91015625,235.5"
                    marker-end="url(#arrow)"
                    style="fill: none;"
                  ></path>
                </g>
                <g class="edgePath" style="opacity: 1;">
                  <path
                    class="path"
                    d="M135.91015625,284L135.91015625,299L135.91015625,314"
                    marker-end="url(#arrow)"
                    style="fill: none;"
                  ></path>
                </g>
                <g class="edgePath" style="opacity: 1;">
                  <path
                    class="path"
                    d="M135.91015625,362.5L135.91015625,377.5L135.91015625,392.5"
                    marker-end="url(#arrow)"
                    style="fill: none;"
                  ></path>
                </g>
                <g class="edgePath" style="opacity: 1;">
                  <path
                    class="path"
                    d="M135.91015625,441L135.91015625,456L135.91015625,471"
                    marker-end="url(#arrow)"
                    style="fill: none;"
                  ></path>
                </g>
                <g class="edgePath" style="opacity: 1;">
                  <path
                    class="path"
                    d="M135.91015625,519.5L135.91015625,534.5L135.91015625,549.5"
                    marker-end="url(#arrow)"
                    style="fill: none;"
                  ></path>
                </g>
                <g class="edgePath" style="opacity: 1;">
                  <path
                    class="path"
                    d="M135.91015625,598L135.91015625,613L135.91015625,628"
                    marker-end="url(#arrow)"
                    style="fill: none;"
                  ></path>
                </g>
                <g class="edgePath" style="opacity: 1;">
                  <path
                    class="path"
                    d="M135.91015625,676.5L135.91015625,691.5L135.91015625,706.5"
                    marker-end="url(#arrow)"
                    style="fill: none;"
                  ></path>
                </g>
                <g class="edgePath" style="opacity: 1;">
                  <path
                    class="path"
                    d="M135.91015625,755L135.91015625,770L135.91015625,785"
                    marker-end="url(#arrow)"
                    style="fill: none;"
                  ></path>
                </g>
                <g class="edgePath" style="opacity: 1;">
                  <path
                    class="path"
                    d="M135.91015625,833.5L135.91015625,848.5L135.91015625,863.5"
                    marker-end="url(#arrow)"
                    style="fill: none;"
                  ></path>
                </g>
                <g class="edgePath" style="opacity: 1;">
                  <path
                    class="path"
                    d="M135.91015625,912L135.91015625,927L135.91015625,942"
                    marker-end="url(#arrow)"
                    style="fill: none;"
                  ></path>
                </g>
                <g class="edgePath" style="opacity: 1;">
                  <path
                    class="path"
                    d="M135.91015625,990.5L135.91015625,1005.5L135.91015625,1020.5"
                    marker-end="url(#arrow)"
                    style="fill: none;"
                  ></path>
                </g>
                <g class="edgePath" style="opacity: 1;">
                  <path
                    class="path"
                    d="M135.91015625,1069L135.91015625,1084L135.91015625,1099"
                    marker-end="url(#arrow)"
                    style="fill: none;"
                  ></path>
                </g>
                <g class="edgePath" style="opacity: 1;">
                  <path
                    class="path"
                    d="M135.91015625,1147.5L135.91015625,1162.5L135.91015625,1177.5"
                    marker-end="url(#arrow)"
                    style="fill: none;"
                  ></path>
                </g>
                <g class="edgePath" style="opacity: 1;">
                  <path
                    class="path"
                    d="M135.91015625,1226L135.91015625,1241L135.91015625,1256"
                    marker-end="url(#arrow)"
                    style="fill: none;"
                  ></path>
                </g>
                <g class="edgePath" style="opacity: 1;">
                  <path
                    class="path"
                    d="M135.91015625,1304.5L135.91015625,1319.5L135.91015625,1334.5"
                    marker-end="url(#arrow)"
                    style="fill: none;"
                  ></path>
                </g>
                <g class="edgePath" style="opacity: 1;">
                  <path
                    class="path"
                    d="M98.47566679936305,1383L75.3203125,1398L75.3203125,1413"
                    marker-end="url(#arrow)"
                    style="fill: none;"
                  ></path>
                </g>
                <g class="edgePath" style="opacity: 1;">
                  <path
                    class="path"
                    d="M75.3203125,1461.5L75.3203125,1476.5L75.3203125,1491.5"
                    marker-end="url(#arrow)"
                    style="fill: none;"
                  ></path>
                </g>
                <g class="edgePath" style="opacity: 1;">
                  <path
                    class="path"
                    d="M75.3203125,1540L75.3203125,1555L75.3203125,1570"
                    marker-end="url(#arrow)"
                    style="fill: none;"
                  ></path>
                </g>
                <g class="edgePath" style="opacity: 1;">
                  <path
                    class="path"
                    d="M75.3203125,1618.5L75.3203125,1633.5L75.3203125,1648.5"
                    marker-end="url(#arrow)"
                    style="fill: none;"
                  ></path>
                </g>
                <g class="edgePath" style="opacity: 1;">
                  <path
                    class="path"
                    d="M75.3203125,1697L75.3203125,1712L75.3203125,1727"
                    marker-end="url(#arrow)"
                    style="fill: none;"
                  ></path>
                </g>
                <g class="edgePath" style="opacity: 1;">
                  <path
                    class="path"
                    d="M75.3203125,1775.5L75.3203125,1790.5L75.3203125,1805.5"
                    marker-end="url(#arrow)"
                    style="fill: none;"
                  ></path>
                </g>
                <g class="edgePath" style="opacity: 1;">
                  <path
                    class="path"
                    d="M75.3203125,1854L75.3203125,1869L75.3203125,1884"
                    marker-end="url(#arrow)"
                    style="fill: none;"
                  ></path>
                </g>
                <g class="edgePath" style="opacity: 1;">
                  <path
                    class="path"
                    d="M75.3203125,1932.5L75.3203125,1947.5L75.3203125,1962.5"
                    marker-end="url(#arrow)"
                    style="fill: none;"
                  ></path>
                </g>
                <g class="edgePath" style="opacity: 1;">
                  <path
                    class="path"
                    d="M173.34464570063693,1383L196.5,1398L196.5,1962.5"
                    marker-end="url(#arrow)"
                    style="fill: none;"
                  ></path>
                </g>
                <g class="edgePath" style="opacity: 1;">
                  <path
                    class="path"
                    d="M75.3203125,2011L75.3203125,2026L98.47566679936305,2041"
                    marker-end="url(#arrow)"
                    style="fill: none;"
                  ></path>
                </g>
                <g class="edgePath" style="opacity: 1;">
                  <path
                    class="path"
                    d="M196.5,2011L196.5,2026L173.34464570063693,2041"
                    marker-end="url(#arrow)"
                    style="fill: none;"
                  ></path>
                </g>
                <g class="edgePath" style="opacity: 1;">
                  <path
                    class="path"
                    d="M135.91015625,2089.5L135.91015625,2104.5L135.91015625,2119.5"
                    marker-end="url(#arrow)"
                    style="fill: none;"
                  ></path>
                </g>
                <g class="edgePath" style="opacity: 1;">
                  <path
                    class="path"
                    d="M135.91015625,2168L135.91015625,2183L135.91015625,2198"
                    marker-end="url(#arrow)"
                    style="fill: none;"
                  ></path>
                </g>
                <g class="edgePath" style="opacity: 1;">
                  <path
                    class="path"
                    d="M135.91015625,2246.5L135.91015625,2261.5L135.91015625,2276.5"
                    marker-end="url(#arrow)"
                    style="fill: none;"
                  ></path>
                </g>
                <g class="edgePath" style="opacity: 1;">
                  <path
                    class="path"
                    d="M58.4765625,36.22855718085106L-14,63.5L-14,2340L50.8828125,2367.7933843085107"
                    marker-end="url(#arrow)"
                    style="fill: none;"
                  ></path>
                </g>
                <g class="edgePath" style="opacity: 1;">
                  <path
                    class="path"
                    d="M135.91015625,2325L135.91015625,2340L118.65149781050955,2354"
                    marker-end="url(#arrow)"
                    style="fill: none;"
                  ></path>
                </g>
              </g>
              <g class="edgeLabels">
                <g class="edgeLabel" style="opacity: 1;">
                  <g class="label">
                    <text>
                      <tspan xml:space="preserve" dy="1em" x="1"></tspan>
                    </text>
                  </g>
                </g>
                <g class="edgeLabel" style="opacity: 1;">
                  <g class="label">
                    <text>
                      <tspan xml:space="preserve" dy="1em" x="1"></tspan>
                    </text>
                  </g>
                </g>
                <g class="edgeLabel" style="opacity: 1;">
                  <g class="label">
                    <text>
                      <tspan xml:space="preserve" dy="1em" x="1"></tspan>
                    </text>
                  </g>
                </g>
                <g class="edgeLabel" style="opacity: 1;">
                  <g class="label">
                    <text>
                      <tspan xml:space="preserve" dy="1em" x="1"></tspan>
                    </text>
                  </g>
                </g>
                <g class="edgeLabel" style="opacity: 1;">
                  <g class="label">
                    <text>
                      <tspan xml:space="preserve" dy="1em" x="1"></tspan>
                    </text>
                  </g>
                </g>
                <g class="edgeLabel" style="opacity: 1;">
                  <g class="label">
                    <text>
                      <tspan xml:space="preserve" dy="1em" x="1"></tspan>
                    </text>
                  </g>
                </g>
                <g class="edgeLabel" style="opacity: 1;">
                  <g class="label">
                    <text>
                      <tspan xml:space="preserve" dy="1em" x="1"></tspan>
                    </text>
                  </g>
                </g>
                <g class="edgeLabel" style="opacity: 1;">
                  <g class="label">
                    <text>
                      <tspan xml:space="preserve" dy="1em" x="1"></tspan>
                    </text>
                  </g>
                </g>
                <g class="edgeLabel" style="opacity: 1;">
                  <g class="label">
                    <text>
                      <tspan xml:space="preserve" dy="1em" x="1"></tspan>
                    </text>
                  </g>
                </g>
                <g class="edgeLabel" style="opacity: 1;">
                  <g class="label">
                    <text>
                      <tspan xml:space="preserve" dy="1em" x="1"></tspan>
                    </text>
                  </g>
                </g>
                <g class="edgeLabel" style="opacity: 1;">
                  <g class="label">
                    <text>
                      <tspan xml:space="preserve" dy="1em" x="1"></tspan>
                    </text>
                  </g>
                </g>
                <g class="edgeLabel" style="opacity: 1;">
                  <g class="label">
                    <text>
                      <tspan xml:space="preserve" dy="1em" x="1"></tspan>
                    </text>
                  </g>
                </g>
                <g class="edgeLabel" style="opacity: 1;">
                  <g class="label">
                    <text>
                      <tspan xml:space="preserve" dy="1em" x="1"></tspan>
                    </text>
                  </g>
                </g>
                <g class="edgeLabel" style="opacity: 1;">
                  <g class="label">
                    <text>
                      <tspan xml:space="preserve" dy="1em" x="1"></tspan>
                    </text>
                  </g>
                </g>
                <g class="edgeLabel" style="opacity: 1;">
                  <g class="label">
                    <text>
                      <tspan xml:space="preserve" dy="1em" x="1"></tspan>
                    </text>
                  </g>
                </g>
                <g class="edgeLabel" style="opacity: 1;">
                  <g class="label">
                    <text>
                      <tspan xml:space="preserve" dy="1em" x="1"></tspan>
                    </text>
                  </g>
                </g>
                <g class="edgeLabel" style="opacity: 1;">
                  <g class="label">
                    <text>
                      <tspan xml:space="preserve" dy="1em" x="1"></tspan>
                    </text>
                  </g>
                </g>
                <g class="edgeLabel" style="opacity: 1;">
                  <g class="label">
                    <text>
                      <tspan xml:space="preserve" dy="1em" x="1"></tspan>
                    </text>
                  </g>
                </g>
                <g class="edgeLabel" style="opacity: 1;">
                  <g class="label">
                    <text>
                      <tspan xml:space="preserve" dy="1em" x="1"></tspan>
                    </text>
                  </g>
                </g>
                <g class="edgeLabel" style="opacity: 1;">
                  <g class="label">
                    <text>
                      <tspan xml:space="preserve" dy="1em" x="1"></tspan>
                    </text>
                  </g>
                </g>
                <g class="edgeLabel" style="opacity: 1;">
                  <g class="label">
                    <text>
                      <tspan xml:space="preserve" dy="1em" x="1"></tspan>
                    </text>
                  </g>
                </g>
                <g class="edgeLabel" style="opacity: 1;">
                  <g class="label">
                    <text>
                      <tspan xml:space="preserve" dy="1em" x="1"></tspan>
                    </text>
                  </g>
                </g>
                <g class="edgeLabel" style="opacity: 1;">
                  <g class="label">
                    <text>
                      <tspan xml:space="preserve" dy="1em" x="1"></tspan>
                    </text>
                  </g>
                </g>
                <g class="edgeLabel" style="opacity: 1;">
                  <g class="label">
                    <text>
                      <tspan xml:space="preserve" dy="1em" x="1"></tspan>
                    </text>
                  </g>
                </g>
                <g class="edgeLabel" style="opacity: 1;">
                  <g class="label">
                    <text>
                      <tspan xml:space="preserve" dy="1em" x="1"></tspan>
                    </text>
                  </g>
                </g>
                <g class="edgeLabel" style="opacity: 1;">
                  <g class="label">
                    <text>
                      <tspan xml:space="preserve" dy="1em" x="1"></tspan>
                    </text>
                  </g>
                </g>
                <g class="edgeLabel" style="opacity: 1;">
                  <g class="label">
                    <text>
                      <tspan xml:space="preserve" dy="1em" x="1"></tspan>
                    </text>
                  </g>
                </g>
                <g class="edgeLabel" style="opacity: 1;">
                  <g class="label">
                    <text>
                      <tspan xml:space="preserve" dy="1em" x="1"></tspan>
                    </text>
                  </g>
                </g>
                <g class="edgeLabel" style="opacity: 1;">
                  <g class="label">
                    <text>
                      <tspan xml:space="preserve" dy="1em" x="1"></tspan>
                    </text>
                  </g>
                </g>
                <g class="edgeLabel" style="opacity: 1;">
                  <g class="label">
                    <text>
                      <tspan xml:space="preserve" dy="1em" x="1"></tspan>
                    </text>
                  </g>
                </g>
                <g class="edgeLabel" style="opacity: 1;">
                  <g class="label">
                    <text>
                      <tspan xml:space="preserve" dy="1em" x="1"></tspan>
                    </text>
                  </g>
                </g>
                <g class="edgeLabel" style="opacity: 1;">
                  <g class="label">
                    <text>
                      <tspan xml:space="preserve" dy="1em" x="1"></tspan>
                    </text>
                  </g>
                </g>
                <g class="edgeLabel" style="opacity: 1;">
                  <g class="label">
                    <text>
                      <tspan xml:space="preserve" dy="1em" x="1"></tspan>
                    </text>
                  </g>
                </g>
              </g>
              <g id="cubeinput" class="nodes">
                <g
                  class="node node-type-source"
                  transform="translate(90.75,24.25)"
                  style="opacity: 1;"
                  id="tip-0"
                >
                  <rect
                    rx="5"
                    ry="5"
                    x="-32.2734375"
                    y="-24.25"
                    width="64.546875"
                    height="48.5"
                  ></rect>
                  <g class="label">
                    <g transform="translate(-22.2734375,-14.25)">
                      <foreignObject width="44.5546875" height="28.5"
                        ><div
                          style="display: inline-block; white-space: nowrap;"
                        >
                          <div class="node-label">Input</div>
                        </div></foreignObject
                      >
                    </g>
                  </g>
                </g>

                <g
                  class="node node-type-convolution"
                  transform="translate(135.91015625,102.75)"
                  style="opacity: 1;"
                  id="tip-1"
                >
                  <rect
                    rx="5"
                    ry="5"
                    x="-57.6328125"
                    y="-24.25"
                    width="115.265625"
                    height="48.5"
                  ></rect>
                  <g class="label">
                    <g transform="translate(-47.6328125,-14.25)">
                      <foreignObject width="95.2734375" height="28.5"
                        ><div
                          style="display: inline-block; white-space: nowrap;"
                        >
                          <div class="node-label">Conv1_32</div>
                        </div></foreignObject
                      >
                    </g>
                  </g>
                </g>
                <g
                  class="node node-type-pooling"
                  transform="translate(135.91015625,181.25)"
                  style="opacity: 1;"
                  id="tip-2"
                >
                  <rect
                    rx="5"
                    ry="5"
                    x="-58.5625"
                    y="-24.25"
                    width="117.125"
                    height="48.5"
                  ></rect>
                  <g class="label">
                    <g transform="translate(-48.5625,-14.25)">
                      <foreignObject width="97.125" height="28.5"
                        ><div
                          style="display: inline-block; white-space: nowrap;"
                        >
                          <div class="node-label">MaxPool1</div>
                        </div></foreignObject
                      >
                    </g>
                  </g>
                </g>
                <g
                  class="node node-type-convolution"
                  transform="translate(135.91015625,259.75)"
                  style="opacity: 1;"
                  id="tip-3"
                >
                  <rect
                    rx="5"
                    ry="5"
                    x="-57.6328125"
                    y="-24.25"
                    width="115.265625"
                    height="48.5"
                  ></rect>
                  <g class="label">
                    <g transform="translate(-47.6328125,-14.25)">
                      <foreignObject width="95.2734375" height="28.5"
                        ><div
                          style="display: inline-block; white-space: nowrap;"
                        >
                          <div class="node-label">Conv2_64</div>
                        </div></foreignObject
                      >
                    </g>
                  </g>
                </g>
                <g
                  class="node node-type-pooling"
                  transform="translate(135.91015625,338.25)"
                  style="opacity: 1;"
                  id="tip-4"
                >
                  <rect
                    rx="5"
                    ry="5"
                    x="-58.5625"
                    y="-24.25"
                    width="117.125"
                    height="48.5"
                  ></rect>
                  <g class="label">
                    <g transform="translate(-48.5625,-14.25)">
                      <foreignObject width="97.125" height="28.5"
                        ><div
                          style="display: inline-block; white-space: nowrap;"
                        >
                          <div class="node-label">MaxPool2</div>
                        </div></foreignObject
                      >
                    </g>
                  </g>
                </g>
                <g
                  class="node node-type-convolution"
                  transform="translate(135.91015625,416.75)"
                  style="opacity: 1;"
                  id="tip-5"
                >
                  <rect
                    rx="5"
                    ry="5"
                    x="-63.53125"
                    y="-24.25"
                    width="127.0625"
                    height="48.5"
                  ></rect>
                  <g class="label">
                    <g transform="translate(-53.53125,-14.25)">
                      <foreignObject width="107.0625" height="28.5"
                        ><div
                          style="display: inline-block; white-space: nowrap;"
                        >
                          <div class="node-label">Conv3_128</div>
                        </div></foreignObject
                      >
                    </g>
                  </g>
                </g>
                <g
                  class="node node-type-convolution"
                  transform="translate(135.91015625,495.25)"
                  style="opacity: 1;"
                  id="tip-6"
                >
                  <rect
                    rx="5"
                    ry="5"
                    x="-57.6328125"
                    y="-24.25"
                    width="115.265625"
                    height="48.5"
                  ></rect>
                  <g class="label">
                    <g transform="translate(-47.6328125,-14.25)">
                      <foreignObject width="95.2734375" height="28.5"
                        ><div
                          style="display: inline-block; white-space: nowrap;"
                        >
                          <div class="node-label">Conv4_64</div>
                        </div></foreignObject
                      >
                    </g>
                  </g>
                </g>
                <g
                  class="node node-type-convolution"
                  transform="translate(135.91015625,573.75)"
                  style="opacity: 1;"
                  id="tip-7"
                >
                  <rect
                    rx="5"
                    ry="5"
                    x="-63.53125"
                    y="-24.25"
                    width="127.0625"
                    height="48.5"
                  ></rect>
                  <g class="label">
                    <g transform="translate(-53.53125,-14.25)">
                      <foreignObject width="107.0625" height="28.5"
                        ><div
                          style="display: inline-block; white-space: nowrap;"
                        >
                          <div class="node-label">Conv5_128</div>
                        </div></foreignObject
                      >
                    </g>
                  </g>
                </g>
                <g
                  class="node node-type-pooling"
                  transform="translate(135.91015625,652.25)"
                  style="opacity: 1;"
                  id="tip-8"
                >
                  <rect
                    rx="5"
                    ry="5"
                    x="-58.5625"
                    y="-24.25"
                    width="117.125"
                    height="48.5"
                  ></rect>
                  <g class="label">
                    <g transform="translate(-48.5625,-14.25)">
                      <foreignObject width="97.125" height="28.5"
                        ><div
                          style="display: inline-block; white-space: nowrap;"
                        >
                          <div class="node-label">MaxPool3</div>
                        </div></foreignObject
                      >
                    </g>
                  </g>
                </g>
                <g
                  class="node node-type-convolution"
                  transform="translate(135.91015625,730.75)"
                  style="opacity: 1;"
                  id="tip-9"
                >
                  <rect
                    rx="5"
                    ry="5"
                    x="-63.53125"
                    y="-24.25"
                    width="127.0625"
                    height="48.5"
                  ></rect>
                  <g class="label">
                    <g transform="translate(-53.53125,-14.25)">
                      <foreignObject width="107.0625" height="28.5"
                        ><div
                          style="display: inline-block; white-space: nowrap;"
                        >
                          <div class="node-label">Conv6_256</div>
                        </div></foreignObject
                      >
                    </g>
                  </g>
                </g>
                <g
                  class="node node-type-convolution"
                  transform="translate(135.91015625,809.25)"
                  style="opacity: 1;"
                  id="tip-10"
                >
                  <rect
                    rx="5"
                    ry="5"
                    x="-63.53125"
                    y="-24.25"
                    width="127.0625"
                    height="48.5"
                  ></rect>
                  <g class="label">
                    <g transform="translate(-53.53125,-14.25)">
                      <foreignObject width="107.0625" height="28.5"
                        ><div
                          style="display: inline-block; white-space: nowrap;"
                        >
                          <div class="node-label">Conv7_128</div>
                        </div></foreignObject
                      >
                    </g>
                  </g>
                </g>
                <g
                  class="node node-type-convolution"
                  transform="translate(135.91015625,887.75)"
                  style="opacity: 1;"
                  id="tip-11"
                >
                  <rect
                    rx="5"
                    ry="5"
                    x="-63.53125"
                    y="-24.25"
                    width="127.0625"
                    height="48.5"
                  ></rect>
                  <g class="label">
                    <g transform="translate(-53.53125,-14.25)">
                      <foreignObject width="107.0625" height="28.5"
                        ><div
                          style="display: inline-block; white-space: nowrap;"
                        >
                          <div class="node-label">Conv8_256</div>
                        </div></foreignObject
                      >
                    </g>
                  </g>
                </g>
                <g
                  class="node node-type-pooling"
                  transform="translate(135.91015625,966.25)"
                  style="opacity: 1;"
                  id="tip-12"
                >
                  <rect
                    rx="5"
                    ry="5"
                    x="-58.5625"
                    y="-24.25"
                    width="117.125"
                    height="48.5"
                  ></rect>
                  <g class="label">
                    <g transform="translate(-48.5625,-14.25)">
                      <foreignObject width="97.125" height="28.5"
                        ><div
                          style="display: inline-block; white-space: nowrap;"
                        >
                          <div class="node-label">MaxPool4</div>
                        </div></foreignObject
                      >
                    </g>
                  </g>
                </g>
                <g
                  class="node node-type-convolution"
                  transform="translate(135.91015625,1044.75)"
                  style="opacity: 1;"
                  id="tip-13"
                >
                  <rect
                    rx="5"
                    ry="5"
                    x="-63.53125"
                    y="-24.25"
                    width="127.0625"
                    height="48.5"
                  ></rect>
                  <g class="label">
                    <g transform="translate(-53.53125,-14.25)">
                      <foreignObject width="107.0625" height="28.5"
                        ><div
                          style="display: inline-block; white-space: nowrap;"
                        >
                          <div class="node-label">Conv9_512</div>
                        </div></foreignObject
                      >
                    </g>
                  </g>
                </g>
                <g
                  class="node node-type-convolution"
                  transform="translate(135.91015625,1123.25)"
                  style="opacity: 1;"
                  id="tip-14"
                >
                  <rect
                    rx="5"
                    ry="5"
                    x="-69.421875"
                    y="-24.25"
                    width="138.84375"
                    height="48.5"
                  ></rect>
                  <g class="label">
                    <g transform="translate(-59.421875,-14.25)">
                      <foreignObject width="118.8515625" height="28.5"
                        ><div
                          style="display: inline-block; white-space: nowrap;"
                        >
                          <div class="node-label">Conv10_256</div>
                        </div></foreignObject
                      >
                    </g>
                  </g>
                </g>
                <g
                  class="node node-type-convolution"
                  transform="translate(135.91015625,1201.75)"
                  style="opacity: 1;"
                  id="tip-15"
                >
                  <rect
                    rx="5"
                    ry="5"
                    x="-69.421875"
                    y="-24.25"
                    width="138.84375"
                    height="48.5"
                  ></rect>
                  <g class="label">
                    <g transform="translate(-59.421875,-14.25)">
                      <foreignObject width="118.8515625" height="28.5"
                        ><div
                          style="display: inline-block; white-space: nowrap;"
                        >
                          <div class="node-label">Conv11_512</div>
                        </div></foreignObject
                      >
                    </g>
                  </g>
                </g>
                <g
                  class="node node-type-convolution"
                  transform="translate(135.91015625,1280.25)"
                  style="opacity: 1;"
                  id="tip-16"
                >
                  <rect
                    rx="5"
                    ry="5"
                    x="-69.421875"
                    y="-24.25"
                    width="138.84375"
                    height="48.5"
                  ></rect>
                  <g class="label">
                    <g transform="translate(-59.421875,-14.25)">
                      <foreignObject width="118.8515625" height="28.5"
                        ><div
                          style="display: inline-block; white-space: nowrap;"
                        >
                          <div class="node-label">Conv12_256</div>
                        </div></foreignObject
                      >
                    </g>
                  </g>
                </g>
                <g
                  class="node node-type-convolution"
                  transform="translate(135.91015625,1358.75)"
                  style="opacity: 1;"
                  id="tip-17"
                >
                  <rect
                    rx="5"
                    ry="5"
                    x="-69.421875"
                    y="-24.25"
                    width="138.84375"
                    height="48.5"
                  ></rect>
                  <g class="label">
                    <g transform="translate(-59.421875,-14.25)">
                      <foreignObject width="118.8515625" height="28.5"
                        ><div
                          style="display: inline-block; white-space: nowrap;"
                        >
                          <div class="node-label">Conv13_512</div>
                        </div></foreignObject
                      >
                    </g>
                  </g>
                </g>
                <g
                  class="node node-type-pooling"
                  transform="translate(75.3203125,1437.25)"
                  style="opacity: 1;"
                  id="tip-18"
                >
                  <rect
                    rx="5"
                    ry="5"
                    x="-58.5625"
                    y="-24.25"
                    width="117.125"
                    height="48.5"
                  ></rect>
                  <g class="label">
                    <g transform="translate(-48.5625,-14.25)">
                      <foreignObject width="97.125" height="28.5"
                        ><div
                          style="display: inline-block; white-space: nowrap;"
                        >
                          <div class="node-label">MaxPool5</div>
                        </div></foreignObject
                      >
                    </g>
                  </g>
                </g>
                <g
                  class="node node-type-convolution"
                  transform="translate(75.3203125,1515.75)"
                  style="opacity: 1;"
                  id="tip-19"
                >
                  <rect
                    rx="5"
                    ry="5"
                    x="-75.3203125"
                    y="-24.25"
                    width="150.640625"
                    height="48.5"
                  ></rect>
                  <g class="label">
                    <g transform="translate(-65.3203125,-14.25)">
                      <foreignObject width="130.640625" height="28.5"
                        ><div
                          style="display: inline-block; white-space: nowrap;"
                        >
                          <div class="node-label">Conv14_1024</div>
                        </div></foreignObject
                      >
                    </g>
                  </g>
                </g>
                <g
                  class="node node-type-convolution"
                  transform="translate(75.3203125,1594.25)"
                  style="opacity: 1;"
                  id="tip-20"
                >
                  <rect
                    rx="5"
                    ry="5"
                    x="-69.421875"
                    y="-24.25"
                    width="138.84375"
                    height="48.5"
                  ></rect>
                  <g class="label">
                    <g transform="translate(-59.421875,-14.25)">
                      <foreignObject width="118.8515625" height="28.5"
                        ><div
                          style="display: inline-block; white-space: nowrap;"
                        >
                          <div class="node-label">Conv15_512</div>
                        </div></foreignObject
                      >
                    </g>
                  </g>
                </g>
                <g
                  class="node node-type-convolution"
                  transform="translate(75.3203125,1672.75)"
                  style="opacity: 1;"
                  id="tip-21"
                >
                  <rect
                    rx="5"
                    ry="5"
                    x="-75.3203125"
                    y="-24.25"
                    width="150.640625"
                    height="48.5"
                  ></rect>
                  <g class="label">
                    <g transform="translate(-65.3203125,-14.25)">
                      <foreignObject width="130.640625" height="28.5"
                        ><div
                          style="display: inline-block; white-space: nowrap;"
                        >
                          <div class="node-label">Conv16_1024</div>
                        </div></foreignObject
                      >
                    </g>
                  </g>
                </g>
                <g
                  class="node node-type-convolution"
                  transform="translate(75.3203125,1751.25)"
                  style="opacity: 1;"
                  id="tip-22"
                >
                  <rect
                    rx="5"
                    ry="5"
                    x="-69.421875"
                    y="-24.25"
                    width="138.84375"
                    height="48.5"
                  ></rect>
                  <g class="label">
                    <g transform="translate(-59.421875,-14.25)">
                      <foreignObject width="118.8515625" height="28.5"
                        ><div
                          style="display: inline-block; white-space: nowrap;"
                        >
                          <div class="node-label">Conv17_512</div>
                        </div></foreignObject
                      >
                    </g>
                  </g>
                </g>
                <g
                  class="node node-type-convolution"
                  transform="translate(75.3203125,1829.75)"
                  style="opacity: 1;"
                  id="tip-23"
                >
                  <rect
                    rx="5"
                    ry="5"
                    x="-75.3203125"
                    y="-24.25"
                    width="150.640625"
                    height="48.5"
                  ></rect>
                  <g class="label">
                    <g transform="translate(-65.3203125,-14.25)">
                      <foreignObject width="130.640625" height="28.5"
                        ><div
                          style="display: inline-block; white-space: nowrap;"
                        >
                          <div class="node-label">Conv18_1024</div>
                        </div></foreignObject
                      >
                    </g>
                  </g>
                </g>
                <g
                  class="node node-type-convolution"
                  transform="translate(75.3203125,1908.25)"
                  style="opacity: 1;"
                  id="tip-24"
                >
                  <rect
                    rx="5"
                    ry="5"
                    x="-75.3203125"
                    y="-24.25"
                    width="150.640625"
                    height="48.5"
                  ></rect>
                  <g class="label">
                    <g transform="translate(-65.3203125,-14.25)">
                      <foreignObject width="130.640625" height="28.5"
                        ><div
                          style="display: inline-block; white-space: nowrap;"
                        >
                          <div class="node-label">Conv19_1024</div>
                        </div></foreignObject
                      >
                    </g>
                  </g>
                </g>
                <g
                  class="node node-type-convolution"
                  transform="translate(75.3203125,1986.75)"
                  style="opacity: 1;"
                  id="tip-25"
                >
                  <rect
                    rx="5"
                    ry="5"
                    x="-75.3203125"
                    y="-24.25"
                    width="150.640625"
                    height="48.5"
                  ></rect>
                  <g class="label">
                    <g transform="translate(-65.3203125,-14.25)">
                      <foreignObject width="130.640625" height="28.5"
                        ><div
                          style="display: inline-block; white-space: nowrap;"
                        >
                          <div class="node-label">Conv20_1024</div>
                        </div></foreignObject
                      >
                    </g>
                  </g>
                </g>
                <g
                  class="node node-type-reshape"
                  transform="translate(196.5,1986.75)"
                  style="opacity: 1;"
                  id="tip-26"
                >
                  <rect
                    rx="5"
                    ry="5"
                    x="-35.859375"
                    y="-24.25"
                    width="71.71875"
                    height="48.5"
                  ></rect>
                  <g class="label">
                    <g transform="translate(-25.859375,-14.25)">
                      <foreignObject width="51.7265625" height="28.5"
                        ><div
                          style="display: inline-block; white-space: nowrap;"
                        >
                          <div class="node-label">reorg</div>
                        </div></foreignObject
                      >
                    </g>
                  </g>
                </g>
                <g
                  class="node node-type-concat"
                  transform="translate(135.91015625,2065.25)"
                  style="opacity: 1;"
                  id="tip-27"
                >
                  <rect
                    rx="5"
                    ry="5"
                    x="-43.421875"
                    y="-24.25"
                    width="86.84375"
                    height="48.5"
                  ></rect>
                  <g class="label">
                    <g transform="translate(-33.421875,-14.25)">
                      <foreignObject width="66.84375" height="28.5"
                        ><div
                          style="display: inline-block; white-space: nowrap;"
                        >
                          <div class="node-label">concat</div>
                        </div></foreignObject
                      >
                    </g>
                  </g>
                </g>
                <g
                  class="node node-type-convolution"
                  transform="translate(135.91015625,2143.75)"
                  style="opacity: 1;"
                  id="tip-28"
                >
                  <rect
                    rx="5"
                    ry="5"
                    x="-75.3203125"
                    y="-24.25"
                    width="150.640625"
                    height="48.5"
                  ></rect>
                  <g class="label">
                    <g transform="translate(-65.3203125,-14.25)">
                      <foreignObject width="130.640625" height="28.5"
                        ><div
                          style="display: inline-block; white-space: nowrap;"
                        >
                          <div class="node-label">Conv21_1024</div>
                        </div></foreignObject
                      >
                    </g>
                  </g>
                </g>
                <g
                  class="node node-type-convolution"
                  transform="translate(135.91015625,2222.25)"
                  style="opacity: 1;"
                  id="tip-29"
                >
                  <rect
                    rx="5"
                    ry="5"
                    x="-69.421875"
                    y="-24.25"
                    width="138.84375"
                    height="48.5"
                  ></rect>
                  <g class="label">
                    <g transform="translate(-59.421875,-14.25)">
                      <foreignObject width="118.8515625" height="28.5"
                        ><div
                          style="display: inline-block; white-space: nowrap;"
                        >
                          <div class="node-label">Conv22_125</div>
                        </div></foreignObject
                      >
                    </g>
                  </g>
                </g>
                <g
                  class="node node-type-region"
                  transform="translate(135.91015625,2300.75)"
                  style="opacity: 1;"
                  id="tip-30"
                >
                  <rect
                    rx="5"
                    ry="5"
                    x="-43.75"
                    y="-24.25"
                    width="87.5"
                    height="48.5"
                  ></rect>
                  <g class="label">
                    <g transform="translate(-33.75,-14.25)">
                      <foreignObject width="67.5" height="28.5"
                        ><div
                          style="display: inline-block; white-space: nowrap;"
                        >
                          <div class="node-label">Region</div>
                        </div></foreignObject
                      >
                    </g>
                  </g>
                </g>
                <g
                  class="node node-type-sink"
                  transform="translate(90.75,2379.25)"
                  style="opacity: 1;"
                  id="tip-31"
                >
                  <rect
                    rx="5"
                    ry="5"
                    x="-38.8671875"
                    y="-24.25"
                    width="85.734375"
                    height="48.5"
                  ></rect>
                  <g class="label">
                    <g transform="translate(-25.8671875,-14.25)">
                      <foreignObject width="60.7421875" height="28.5"
                        ><div
                          style="display: inline-block; white-space: nowrap;"
                        >
                          <div class="node-label">Detection</div>
                        </div></foreignObject
                      >
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>





*/
function Draw_cube() {
  var svgContainer_anime = d3
    .select('#net-group')
    .append('svg')
    .attr('id', 'net-svg')
    .attr('width', '258')
    .attr('height', '2414');

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

  var svg_img = svgContainer_anime
    .append('image')
    .attr('image-rendering', 'optimizeQuality')
    .attr('id', 'inputimg');

  var img = new Image();
  var inputpic = 'data/dog-cycle-car.png';

  img.src = inputpic;
  var picwidth = width;
  svg_img.attr('width', $('#net-svg').width()).attr('xlink:href', inputpic);

  var gtransform = svgContainer_anime
    .append('g')
    .attr('transform', 'translate(15)');
  var goutput = gtransform.append('g').attr('class', 'output');
  var gedgepaths = goutput.append('g').attr('class', 'edgePaths');
  var gedgepath = gedgepaths
    .append('g')
    .attr('class', 'edgePath')
    .attr('style', 'opacity:1');
  var path1 = gedgepath
    .append('path')
    .attr('class', 'path')
    .attr('d', 'M120,194.5 L175,214.5 L175,244.5')
    .attr('marker-end', 'url(#arrow)')
    .attr('style', 'fill:none');
  // var gedgeLabels = goutput.append('g').attr('class','edgeLabels');
  // var gedgeLabel = gedgeLabels.append('g').attr('style','opacity:1');
  // var glabel = gedgeLabel.append('g').attr('class','label');
  // var text1 = glabel.append('text');
  // var tspan1 = text1.append('tspan').attr('xml:space','preserve').attr('dy','1em').attr('x',1);
  var gcubeinput = goutput
    .append('g')
    .attr('id', 'cubeinput')
    .attr('class', 'nodes');
  var gnodetypeconvolution = gcubeinput
    .append('g')
    .attr('class', 'node node-type-convolution')
    .attr('transform', 'translate(85.75,24.25)')
    .attr('style', 'opacity:1')
    .attr('id', 'tip-1');
  var rect1 = gnodetypeconvolution
    .append('rect')
    .attr('rx', '5')
    .attr('ry', '5')
    .attr('x', '30')
    .attr('y', '222.5')
    .attr('width', '115.265625')
    .attr('height', '48.5');
  var glabel1 = gnodetypeconvolution
    .append('g')
    .attr('id', 'label1')
    .attr('class', 'label');
  var gtransform1 = glabel1
    .append('g')
    .attr('transform', 'translate(35,200.25)');
  var foreignObject1 = gtransform1
    .append('foreignObject')
    .attr('width', '95.2734375')
    .attr('height', '28.5');
  var div1 = foreignObject1
    .append('div')
    .attr('style', 'display: inline-block; white-space: nowrap;');
  var divnodelabel = div1
    .append('div')
    .attr('class', 'node-label')
    .text(function(d) {
      return 'Conv1_32';
    });
  //var cube1 = gnodetypesource.append('path').attr('d','M0 0 L')

  /*
  <g transform="translate(15)">
    <g class="output">
    <g id="cubeinput" class="nodes">
      <g
        class="node node-type-convolution"
        transform="translate(135.91015625,102.75)"
        style="opacity: 1;"
        id="tip-1"
      >
        <rect
          rx="5"
          ry="5"
          x="-57.6328125"
          y="-24.25"
          width="115.265625"
          height="48.5"
        ></rect>
        <g class="label">
          <g transform="translate(-47.6328125,-14.25)">
            <foreignObject width="95.2734375" height="28.5"
              ><div
                style="display: inline-block; white-space: nowrap;"
              >
                <div class="node-label">Conv1_32</div>
              </div></foreignObject
            >
          </g>
        </g>
      </g>
    </g>
  </g>
          </g >
*/
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
