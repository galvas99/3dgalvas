// Created with Motiva Layama v1.5 https://www.motivacg.com/layama

function getLayamaCameras()
{
   var layamaCameras = new BABYLON.SmartArray(0);
   layamaCameras.push({n: "demo3dgalvas0000", a: "PhysCamera001", p: new BABYLON.Vector3(176.453, 126.245, -38.639), l: new BABYLON.Vector3(95.8723, 134.669, -97.255)});
   layamaCameras.push({n: "demo3dgalvas0001", a: "PhysCamera002", p: new BABYLON.Vector3(169.414, 126.245, 395.139), l: new BABYLON.Vector3(88.8334, 134.669, 336.523)});
   layamaCameras.push({n: "demo3dgalvas0002", a: "PhysCamera003", p: new BABYLON.Vector3(176.453, 126.245, -393.591), l: new BABYLON.Vector3(95.8723, 134.669, -452.207)});
   layamaCameras.push({n: "demo3dgalvas0003", a: "PhysCamera004", p: new BABYLON.Vector3(-303.42, 126.245, -38.639), l: new BABYLON.Vector3(-384, 134.669, -97.255)});
   layamaCameras.push({n: "demo3dgalvas0004", a: "PhysCamera005", p: new BABYLON.Vector3(571.051, 126.245, -38.639), l: new BABYLON.Vector3(490.471, 134.669, -97.255)});
   return layamaCameras;
}

function getLayamaResolutions()
{
   var layamaResolutions = new BABYLON.SmartArray(0);
   layamaResolutions.push("2048");
   layamaResolutions.push("1024");
   return layamaResolutions;
}

function getOnScreenLogoUsage()
{
   return 6;
}

function getLayamaControls()
{
   return {defMove: false, defRot: 1, altMove: true, altRot: 2};
}

function getLayamaHotspots()
{
   var layamaHotspots = new BABYLON.SmartArray(0);
   layamaHotspots.push({n: "natuzzi", m: 1, u: "https://cglibre.com/producto/natuzzi-couture-armchair/", i: "./hotspots/png-information-information-icon-image-6058-1832.png", p: new BABYLON.Vector3(145.176, 114.743, 535.783), d: 250});
   layamaHotspots.push({n: "sli", m: 1, u: "https://cglibre.com/producto/ecological-stirling-hanging-chair-cactus-skin/", i: "./hotspots/png-information-information-icon-image-6058-1832.png", p: new BABYLON.Vector3(-511.629, 179.218, -59.5332), d: 250});
   layamaHotspots.push({n: "blueth", m: 1, u: "https://cglibre.com/producto/bluetooth-music-player-sofa/", i: "./hotspots/png-information-information-icon-image-6058-1832.png", p: new BABYLON.Vector3(149.828, 114.575, -582.049), d: 250});
   layamaHotspots.push({n: "reclining", m: 1, u: "https://cglibre.com/producto/muji-reclining-foot-stool/", i: "./hotspots/png-information-information-icon-image-6058-1832.png", p: new BABYLON.Vector3(673.722, 126.636, -17.9227), d: 250});
   return layamaHotspots;
}

