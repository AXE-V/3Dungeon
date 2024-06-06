// const file = 'scene-transformed.glb obj-transformed.glb';
// const outputFileName = 'model';
// console.log(file.match(/\w+-transformed\.glb/i)[0]);

const scenePath = '/models/uploads/scene.gltf';
const sceneLength = scenePath.split('/').length;
const sceneBasename = scenePath.split('/')[sceneLength - 1];
console.log(sceneBasename);
