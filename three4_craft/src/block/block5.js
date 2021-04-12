import * as THREE from '../../../three/build/three.module.js';

export const block5 = (() => {

    let i = 0;
    class block5 {
        constructor() {


            this.LoadModel_();
        }

        LoadModel_() {
            let textureLoader = new THREE.TextureLoader();
            let texture = textureLoader.load('./src/block/img/block5/T_Old_Terracotta_Floor_BC.png');
            let htexture = textureLoader.load('./src/block/img/block5/T_Old_Terracotta_Floor_H.png');
            let ntexture = textureLoader.load('./src/block/img/block5/T_Old_Terracotta_Floor_N.png');
            this.Geo = new THREE.BoxGeometry(6, 6, 6, 20, 20, 20);
            this.Mat = new THREE.MeshPhongMaterial({
                map: texture,
                shininess: 30
            });
            this.Mat.displacementMap = htexture;
            this.Mat.displacementScale = 0.0052;
            this.Mat.normalMap = ntexture;
            this.Mat.normalScale.set(0.5, 0.5)
            this.Mesh = new THREE.Mesh(this.Geo, this.Mat);
            this.Mesh.castShadow = true
        }

        block() {
            return this.Mesh;
        }

    }
    return {
        block5: block5,
    };
})();