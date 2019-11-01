
var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera(75,
//                                          window.innerWidth / window.innerHeight,
//                                          0.1,
//                                          1000);
var width = window.innerWidth;
var height = window.innerHeight;
var camera = new THREE.OrthographicCamera(width / -2, width / 2, height / 2, height / -2, 1, 1000);
var renderer = new THREE.WebGLRenderer();
document.body.appendChild( renderer.domElement );

var geometry = new THREE.PlaneBufferGeometry(width, height, 1, 1);
var shaderMaterial = new THREE.ShaderMaterial( {
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        ratio: {
            value: 0.5
        },
        iResolution: {
            value: new THREE.Vector2(width, height)
        }
    }
});
// var material = new THREE.MeshBasicMaterial ( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, shaderMaterial );
scene.add(cube);

camera.position.z = 1;

onWindowResize();
window.addEventListener('resize', onWindowResize, false);

function animate() {
    requestAnimationFrame(animate);
    renderer.render( scene, camera);
}

animate();

function onWindowResize(event) {
    var width = window.innerWidth;
    var height = window.innerHeight;

    renderer.setSize(width, height);
    shaderMaterial.uniforms.iResolution.x = width;
    shaderMaterial.uniforms.iResolution.y = height;
}
