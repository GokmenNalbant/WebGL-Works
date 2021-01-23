var gl;
var thetaLoc;
var thetaLoct;
var counter = 0;

var xAxis = 0;
var yAxis = 1;
var zAxis = 2;

var rotationSpeed = 2.0;
var axis = 1;
var theta = [0, 0, 0];
var axisT = 0;
var thetat = [0, 0, 0];
var colors = [];
var points = [];
window.onload = function init() {
    const canvas = document.getElementById("glcanvas");
    gl = canvas.getContext("webgl");
    if(!gl) {
        alert("Your browser doen not support WebGl!");
    }
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    
     gl.enable(gl.DEPTH_TEST);

    var program = initShaders(gl, "vertex-shader", "fragment-shader");
    gl.useProgram(program);

    // vertices for letter G
       var verticesG = [
        // front face
        vec4(-.1, .3, .0, 1.0),      // v0
        vec4(-.1, .2, .0, 1.0),      // v1
        vec4(-.7, .3, .0, 1.0),      // v2
        vec4(-.7, .2, .0, 1.0),      // v3
        vec4(-.6, .2, .0, 1.0),      // v4
        vec4(-.7, -.3, .0, 1.0),    // v5
        vec4(-.6, -.3, .0, 1.0),    // v6
        vec4(-.6, -.2, .0, 1.0),    // v7
        vec4(-.1, -.3, .0, 1.0),     // v8
        vec4(-.1, -.2, .0, 1.0),     // v9
        vec4(-.2, -.2, .0, 1.0),     // v10
        vec4(-.1, 0, .0, 1.0),       // v11
        vec4(-.2, 0, .0, 1.0),       // v12
        vec4(-.2, -.1, .0, 1.0),     // v13
        vec4(-.4, 0, .0, 1.0),        // v14
        vec4(-.4, -.1, .0, 1.0),      // v15
        // back face
        vec4(-.1, .3, -.1, 1.0),      // v0
        vec4(-.1, .2, -.1, 1.0),      // v1
        vec4(-.7, .3, -.1, 1.0),      // v2
        vec4(-.7, .2, -.1, 1.0),      // v3
        vec4(-.6, .2, -.1, 1.0),      // v4
        vec4(-.7, -.3, -.1, 1.0),    // v5
        vec4(-.6, -.3, -.1, 1.0),    // v6
        vec4(-.6, -.2, -.1, 1.0),    // v7
        vec4(-.1, -.3, -.1, 1.0),     // v8
        vec4(-.1, -.2, -.1, 1.0),     // v9
        vec4(-.2, -.2, -.1, 1.0),     // v10
        vec4(-.1, 0, -.1, 1.0),       // v11
        vec4(-.2, 0, -.1, 1.0),       // v12
        vec4(-.2, -.1, -.1, 1.0),     // v13
        vec4(-.4, 0, -.1, 1.0),        // v14
        vec4(-.4, -.1, -.1, 1.0),      // v15
        // top corner
        vec4(-.1, .3, .0, 1.0),      // v0
        vec4(-.1, .2, .0, 1.0),      // v1
        vec4(-.1, .3, -.1, 1.0),      // v0
        vec4(-.1, .2, -.1, 1.0),      // v1
        // top-outer
        vec4(-.1, .3, .0, 1.0),      // v0
        vec4(-.7, .3, .0, 1.0),      // v2
        vec4(-.1, .3, -.1, 1.0),      // v0
        vec4(-.7, .3, -.1, 1.0),      // v2
        // back-outer
        vec4(-.7, .3, .0, 1.0),      // v2
        vec4(-.7, -.3, .0, 1.0),    // v5
        vec4(-.7, .3, -.1, 1.0),      // v2
        vec4(-.7, -.3, -.1, 1.0),    // v5
        // bottom-outer
        vec4(-.7, -.3, .0, 1.0),    // v5
        vec4(-.1, -.3, .0, 1.0),     // v8
        vec4(-.7, -.3, -.1, 1.0),    // v5
        vec4(-.1, -.3, -.1, 1.0),     // v8
        //front-outer
        vec4(-.1, -.3, .0, 1.0),     // v8
        vec4(-.1, 0, .0, 1.0),       // v11
        vec4(-.1, -.3, -.1, 1.0),     // v8
        vec4(-.1, 0, -.1, 1.0),       // v11
        //inner-outer
        vec4(-.1, 0, .0, 1.0),       // v11
        vec4(-.4, 0, .0, 1.0),        // v14
        vec4(-.1, 0, -.1, 1.0),       // v11
        vec4(-.4, 0, -.1, 1.0),        // v14
        //inner-corner
        vec4(-.4, 0, .0, 1.0),        // v14
        vec4(-.4, -.1, .0, 1.0),      // v15
        vec4(-.4, 0, -.1, 1.0),        // v14
        vec4(-.4, -.1, -.1, 1.0),      // v15
        //inner-inner
        vec4(-.2, -.1, .0, 1.0),     // v13
        vec4(-.4, -.1, .0, 1.0),      // v15
        vec4(-.2, -.1, -.1, 1.0),     // v13
        vec4(-.4, -.1, -.1, 1.0),      // v15
        //front-inner
        vec4(-.2, -.2, .0, 1.0),     // v10
        vec4(-.2, -.1, .0, 1.0),     // v13
        vec4(-.2, -.2, -.1, 1.0),     // v10
        vec4(-.2, -.1, -.1, 1.0),     // v13
        //bottom-inner  
        vec4(-.6, -.2, .0, 1.0),    // v7
        vec4(-.2, -.2, .0, 1.0),     // v10
        vec4(-.6, -.2, -.1, 1.0),    // v7
        vec4(-.2, -.2, -.1, 1.0),     // v10
        //back-inner
        vec4(-.6, .2, .0, 1.0),      // v4
        vec4(-.6, -.2, .0, 1.0),    // v7 
        vec4(-.6, .2, -.1, 1.0),      // v4
        vec4(-.6, -.2, -.1, 1.0),    // v7 
        //top-inner
        vec4(-.1, .2, .0, 1.0),      // v1
        vec4(-.6, .2, .0, 1.0),      // v4  
        vec4(-.1, .2, -.1, 1.0),      // v1
        vec4(-.6, .2, -.1, 1.0),      // v4  
    ];
    
    
    // assign vertices for letter G
{
    // front face
    for(let i = 0; i < 14; i++) {     
        for (let j = i; j < i+3; j++) {
            points.push(verticesG[j]);
            counter++;
        }     
    }
    // back face
    for(let i = 16; i < 30; i++) {        
        for (let j = i; j < i+3; j++) {
            points.push(verticesG[j]);
            counter++;
        }      
    }
    // All remain of for loops  is for corners
    for (let i = 32; i < verticesG.length-1; i+=4) {  
        for(let k = i; k < i+2; k++) {
            for (let j = k; j < k+3; j++) {
                points.push(verticesG[j]);  
                counter++;
            }          
        }        
    }   
    
}


    // vertices for letter G
    var verticesT  = [
        // front face
        vec4(.8, .3, .0, 1.0),         // v0 
        vec4(.8, .2, .0, 1.0),         // v1
        vec4(.2, .3, .0, 1.0),          // v2
        vec4(.2, .2, .0, 1.0),         // v3
        vec4(.45, .2, .0, 1.0),        // v4
        vec4(.55, .2, .0, 1.0),        // v5
        vec4(.45, -.3, .0, 1.0),       // v6
        vec4(.55, -.3, .0, 1.0),       // v7
        // back face
        vec4(.8, .3, .1, 1.0),        // v0
        vec4(.8, .2, .1, 1.0),        // v1
        vec4(.2, .3, .1, 1.0),        // v2
        vec4(.2, .2, .1, 1.0),        // v3
        vec4(.45, .2, .1, 1.0),       // v4
        vec4(.55, .2, .1, 1.0),       // v5
        vec4(.45, -.3, .1, 1.0),      // v6
        vec4(.55, -.3, .1, 1.0),      // v7
        // top-outer
        vec4(.8, .3, .0, 1.0),         // v0 
        vec4(.2, .3, .0, 1.0),         // v2
        vec4(.8, .3, .1, 1.0),         // v0 
        vec4(.2, .3, .1, 1.0),         // v2
        // top-right-corner
        vec4(.8, .3, .0, 1.0),        // v0
        vec4(.8, .2, .0, 1.0),        // v1
        vec4(.8, .3, .1, 1.0),        // v0
        vec4(.8, .2, .1, 1.0),        // v1
        // top-left-corner
        vec4(.2, .3, .0, 1.0),          // v2
        vec4(.2, .2, .0, 1.0),         // v3
        vec4(.2, .3, .1, 1.0),          // v2
        vec4(.2, .2, .1, 1.0),         // v3
        // top-inner-left
        vec4(.8, .2, .0, 1.0),        // v1
        vec4(.2, .2, .0, 1.0),        // v3
        vec4(.8, .2, .1, 1.0),        // v1
        vec4(.2, .2, .1, 1.0),        // v3
        // middle-left
        vec4(.45, .2, .0, 1.0),       // v4
        vec4(.45, -.3, .0, 1.0),      // v6
        vec4(.45, .2, .1, 1.0),       // v4
        vec4(.45, -.3, .1, 1.0),      // v6
        // middle-right
        vec4(.55, .2, .0, 1.0),       // v5
        vec4(.55, -.3, .0, 1.0),      // v7
        vec4(.55, .2, .1, 1.0),       // v5
        vec4(.55, -.3, .1, 1.0),      // v7
        // bottom
        vec4(.45, -.3, .0, 1.0),      // v6
        vec4(.55, -.3, .0, 1.0),      // v7
        vec4(.45, -.3, .1, 1.0),      // v6
        vec4(.55, -.3, .1, 1.0),      // v7
    ];

    // Assign vertices for letter T
    for (let i = 0; i < verticesT.length-1; i+=4) {
        
        for(let k = i; k < i+2; k++) {
            
            for (let j = k; j < k+3; j++) {
                points.push(verticesT[j]);     
                counter++;
            }         
        }     
    }
    // define Color which are for Colorful Theme
    var vertexColor = [
        vec3(0.0, 0.0, 0.0, 1.0),    //black
        vec3(1.0, 1.0, 0.0, 1.0) ,  // yellow
        vec3(0.0, 1.0, 0.0, 1.0) ,  // green
        vec3(0.0, 0.0, 1.0, 1.0) ,  // blue
        vec3(1.0, 0.0, 1.0, 1.0) ,  // magenta
        vec3(0.0, 1.0, 1.0, 1.0) ,  // cyan
        vec3(1.0, 1.0, 1.0, 1.0)  ,  // white
    ];
     
    // Assign Main Color Theme
     for(let i = 0; i < 84; i++) {
        colors.push(vec3(.5, 0.8, 0.7));
    }
    for(let i = 130; i < 156; i++) {
        colors.push(vec3(.0, 0.0, 0.7));
    }
    
    for(let i = 156; i < 210; i++) {
        colors.push(vec3(.6, 0.0, 0.0));
    }
    for(let i = 210; i < 222; i++) {
        colors.push(vec3(.6, 0.0, 0.0));
    }
   
    // Colorful Theme
    document.getElementById("colorButton2").onclick = function () {
        colors = [];
        var cc = 0;
        for(let i = 0; i< 222; i++) {
        colors.push(vertexColor[cc]);
        if(cc>=6)
            cc = 0;
        else
            cc++;
    }
    var cbuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, cbuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(colors), gl.STATIC_DRAW);

    var vColor = gl.getAttribLocation(program, "vertColor");
    gl.vertexAttribPointer(vColor, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vColor);
}
    // Main Color Theme
    document.getElementById("colorButton1").onclick = function () {
    colors = [];
        for(let i = 0; i < 84; i++) {
        colors.push(vec3(.5, 0.8, 0.7));
    }
    for(let i = 130; i < 156; i++) {
        colors.push(vec3(.0, 0.0, 0.7));
    }
    
    for(let i = 156; i < 210; i++) {
        colors.push(vec3(.6, 0.0, 0.0));
    }
    for(let i = 210; i < 222; i++) {
        colors.push(vec3(.6, 0.0, 0.0));
    }
    var cbuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, cbuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(colors), gl.STATIC_DRAW);

    var vColor = gl.getAttribLocation(program, "vertColor");
    gl.vertexAttribPointer(vColor, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vColor);
    }


    gl.clearColor(.2, .2, .2, 1.0);

    var cbuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, cbuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(colors), gl.STATIC_DRAW);

    var vColor = gl.getAttribLocation(program, "vertColor");
    gl.vertexAttribPointer(vColor, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vColor);


    var vbuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(points), gl.STATIC_DRAW);

    var vPosition = gl.getAttribLocation(program, "vPosition");
    gl.vertexAttribPointer(vPosition, 4, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vPosition);

    thetaLoc = gl.getUniformLocation(program, "thetaG");
    thetaLoct = gl.getUniformLocation(program, "thetaT");
    //Rotation Around X, Y and Z

    document.getElementById( "GRotateX" ).onclick = function() {
        axis = xAxis;
    };
    document.getElementById( "GRotateY" ).onclick = function() {
        axis = yAxis;
    };
    document.getElementById( "GRotateZ" ).onclick = function() {
        axis = zAxis;
    };
    document.getElementById( "TRotateX" ).onclick = function() {
        axisT = xAxis;
    };
    document.getElementById( "TRotateY" ).onclick = function() {
        axisT = yAxis;
    };
    document.getElementById( "TRotateZ" ).onclick = function() {
        axisT = zAxis;
    };

    document.getElementById("increaseSpeed").onclick = function() {
        rotationSpeed += 1.0;
    }
    document.getElementById("decreaseSpeed").onclick = function() {
        if(rotationSpeed <= 0)
            rotationSpeed = 0;
        else
        rotationSpeed -= 1.0;
    }
    
    setInterval(render1, 40);
    
}


function render1() {
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    // rotation and drawing for letter G
    theta[axis] += rotationSpeed;
    gl.uniform3fv(thetaLoc, theta);
    gl.drawArrays(gl.TRIANGLES, 0, 156);
    // rotation and drawing for letter T
    thetat[axisT] += rotationSpeed;
    gl.uniform3fv(thetaLoc, thetat);
    gl.drawArrays(gl.TRIANGLES, 156, 222);
}
