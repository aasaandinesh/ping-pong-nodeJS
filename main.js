var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );

var batGeometry = new THREE.BoxGeometry( 2, 2, 0.1 );
var batMaterial = new THREE.MeshNormalMaterial( { transparent:true, opacity:0.5,color: 0xff0000 } );

var bat = new THREE.Mesh(batGeometry, batMaterial);
scene.add( cube );


scene.add(bat);
bat.translateZ(2);


camera.position.z = 5;
var t = 0;
var Vy = 0.5;
var Vz = 1;
var clock = new THREE.Clock();
clock.start();
function render() {
	requestAnimationFrame( render );
	renderer.render( scene, camera );
	t = clock.getDelta();
Vy = Vy - 0.3*t;



if(cube.position.y<0){
	Vy *=-1;
}

if(cube.position.z>=2){
	Vz *=-1;
}

if(cube.position.z<=-2){
	Vz *=-1;
}
cube.translateZ(Vz*t);	
cube.translateY(Vy*t);
//cube.translateY()
}
render();

