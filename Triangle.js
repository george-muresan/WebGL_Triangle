const canvas = document.getElementById('draw_surface');
let gl = canvas.getContext('webgl2');

function initWebGL() {
    

    let vertices = [
        -0.3, -0.3, 0.0,  
        0.3, -0.3, 0.0,
        0.0, 0.0, 0.0,
    ];

    let vertex_buffer = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER, null);


    let vertCode =
        '#version 300 es \n' +
        'in vec3 coordinates;' +

        'void main(void) { ' +
        ' gl_Position = vec4(coordinates, 1.0); ' +
        '}';

    let vertShader = gl.createShader(gl.VERTEX_SHADER);

    gl.shaderSource(vertShader, vertCode);

    gl.compileShader(vertShader);

    let success = gl.getShaderParameter(vertShader, gl.COMPILE_STATUS);
    if (!success) {
        console.log(gl.getShaderInfoLog(vertShader));
    }

    let fragCode =
        '#version 300 es \n' +
        'precision mediump float; \n' +
        'out vec4 outFragColor;' +
        'void main(void) {' +
        
        ' outFragColor = vec4(0.0, 0.5, 0.3, 1.0);' +
        '}';

    var fragShader = gl.createShader(gl.FRAGMENT_SHADER);

    gl.shaderSource(fragShader, fragCode);

    gl.compileShader(fragShader);

    var shaderProgram = gl.createProgram();

    gl.attachShader(shaderProgram, vertShader);

    gl.attachShader(shaderProgram, fragShader);

    gl.linkProgram(shaderProgram);

    gl.useProgram(shaderProgram);

    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);

    var coord = gl.getAttribLocation(shaderProgram, "coordinates");

    gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);

    gl.enableVertexAttribArray(coord);

    gl.clearColor(0.5, 0.5, 0.5, 0.9);

    gl.enable(gl.DEPTH_TEST);

    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.drawArrays(gl.TRIANGLES, 0, 3);

}


function sliderFunction() {

    let vertices = [
        -0.3, -0.3, 0.0,
        0.3, -0.3, 0.0,
        XSlider.value, YSlider.value, ZSlider.value,
    ];

    let vertex_buffer = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER, null);


    let vertCode =
        '#version 300 es \n' +
        'in vec3 coordinates;' +

        'void main(void) { ' +
        ' gl_Position = vec4(coordinates, 1.0); ' +
        '}';

    let vertShader = gl.createShader(gl.VERTEX_SHADER);

    gl.shaderSource(vertShader, vertCode);

    gl.compileShader(vertShader);

    let success = gl.getShaderParameter(vertShader, gl.COMPILE_STATUS);
    if (!success) {
        console.log(gl.getShaderInfoLog(vertShader));
    }

    let fragCode =
        '#version 300 es \n' +
        'precision mediump float; \n' +
        'out vec4 outFragColor;' +
        'void main(void) {' +
  
        ' outFragColor = vec4(0.0, 0.5, 0.3, 1.0);' +
        '}';

    var fragShader = gl.createShader(gl.FRAGMENT_SHADER);

    gl.shaderSource(fragShader, fragCode);

    gl.compileShader(fragShader);

    var shaderProgram = gl.createProgram();

    gl.attachShader(shaderProgram, vertShader);

    gl.attachShader(shaderProgram, fragShader);

    gl.linkProgram(shaderProgram);

    gl.useProgram(shaderProgram);

    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);

    var coord = gl.getAttribLocation(shaderProgram, "coordinates");

    gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);

    gl.enableVertexAttribArray(coord);

    gl.clearColor(0.5, 0.5, 0.5, 0.9);

    gl.enable(gl.DEPTH_TEST);

    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.drawArrays(gl.TRIANGLES, 0, 3);

}


var XSlider = document.getElementById("Xid");
XSlider.addEventListener('input', function () {
    sliderFunction();
});

var YSlider = document.getElementById("Yid");
YSlider.addEventListener('input', function () {
    sliderFunction();
});

var ZSlider = document.getElementById("Zid");
ZSlider.addEventListener('input', function () {
    sliderFunction();
});
