import * as THREE from '../three/build/three.module.js';

export const tree3 = (() => {

    let i = 0;
    class tree3 {
        constructor(params) {
            let {
                scene,
                position,
                leafColor,
                TrunkColor,
                object
            } = params;
            this.scene_ = scene;
            this.position_ = position;
            this.leafColor_ = leafColor;
            this.TrunkColor_ = TrunkColor;
            this.velocity_ = 0.0;
            this.object_ = object;
            this.LoadModel_();
        }

        LoadModel_() {

            let tree3 = new THREE.Object3D();

            let trunks = [];
            let trunk_position = [];
            let trunkGeo = new THREE.CylinderGeometry(0.3, 0.5, 6, 5);
            let trunkMat = new THREE.MeshLambertMaterial({
                color: this.random_color(false),
            });
            for (i = 0; i < 5; i++) {
                trunks[i] = new THREE.Mesh(trunkGeo, trunkMat);
                trunk_position[i] = new THREE.Object3D();
                tree3.add(trunk_position[i]);
                trunks[i].position.y = 5;
                trunk_position[i].add(trunks[i]);
            }

            let leafGo = new THREE.IcosahedronGeometry(2);
            let leafMat = null;

            let leafs = [];
            for (i = 0; i < 11; i++) {
                leafMat = new THREE.MeshLambertMaterial({
                    color: this.random_color(true),
                });
                leafs[i] = new THREE.Mesh(leafGo, leafMat);
            }

            trunk_position[0].position.y = 0;
            trunks[0].position.y = 2;
            trunks[0].scale.set(1, 1, 1);

            leafs[1].position.set(1, 3, 0);
            leafs[1].scale.set(0.7, 0.7, 0.7);
            trunk_position[0].add(leafs[1]);

            leafs[2].position.set(0, 4.5, 0);
            leafs[2].scale.set(1, 1, 1);
            trunk_position[0].add(leafs[2]);

            trunk_position[1].position.y = 2;
            trunk_position[1].rotation.z = Math.PI / 3;
            trunk_position[1].rotation.x = Math.PI / 2;
            trunks[1].position.y = 1;
            trunks[1].scale.set(0.3, 0.3, 0.3);

            leafs[3].position.set(0, 2.5, 0);
            leafs[3].scale.set(0.5, 0.5, 0.5);
            leafs[4].position.set(0.5, 2, 0);
            leafs[4].scale.set(0.3, 0.3, 0.3);
            for (i = 3; i < 5; i++) {
                trunk_position[1].add(leafs[i]);
            }

            trunk_position[2].position.y = 1.8;
            trunk_position[2].rotation.y = Math.PI / 0.3;
            trunk_position[2].rotation.z = Math.PI / 2.9;
            trunks[2].position.y = 1;
            trunks[2].scale.set(0.4, 0.4, 0.4);

            leafs[5].position.set(0, 3, 0);
            leafs[5].scale.set(0.7, 0.3, 0.7);
            leafs[6].position.set(0.5, 2, 0.5);
            leafs[6].scale.set(0.5, 0.5, 0.5);
            leafs[7].position.set(-0.5, 3, -0.5);
            leafs[7].scale.set(0.5, 0.5, 0.5);
            for (i = 5; i < 8; i++) {
                trunk_position[2].add(leafs[i]);
            }

            trunk_position[3].position.y = 1.8;
            trunk_position[3].rotation.y = Math.PI / 2;
            trunk_position[3].rotation.z = Math.PI / 2.9;
            trunks[3].position.y = 1;
            trunks[3].scale.set(0.4, 0.4, 0.4);

            leafs[8].position.set(0, 2.5, 0);
            leafs[8].scale.set(0.6, 0.6, 0.6);
            leafs[9].position.set(0.5, 3, 0.5);
            leafs[9].scale.set(0.3, 0.3, 0.3);
            leafs[10].position.set(-0.5, 3.5, -0.5);
            leafs[10].scale.set(0.5, 0.5, 0.5);
            for (i = 8; i < 11; i++) {
                trunk_position[3].add(leafs[i]);
            }
            trunk_position[4].position.y = 1.5;
            trunk_position[4].rotation.y = Math.PI / 1.4;
            trunk_position[4].rotation.z = Math.PI / 3.9;
            trunks[4].position.y = 1;
            trunks[4].scale.set(0.2, 0.2, 0.2);

            this.scene_.add(tree3);
            tree3.position.copy(this.position_);
            tree3.position
                .divideScalar(10)
                .floor()
                .multiplyScalar(10)
                .addScalar(0);
            tree3.rotation.y = this.random_rotation();
            this.random_scale(tree3)
            this.tree_ = tree3;
            tree3.castShadow = true;
            tree3.receiveShadow = true;
            // 위치this.tree_.position.copy(this.position_);
            this.tree_.name = "tree3";
            const rollOverGeo = new THREE.BoxGeometry(5, 5, 5);
            const rollOverMaterial = new THREE.MeshBasicMaterial({
                color: 0xff0000,
                opacity: 0,
                transparent: true,
            });
            this.rollOverMesh = new THREE.Mesh(rollOverGeo, rollOverMaterial);
            this.rollOverMesh.position.copy(this.tree_.position);
            this.scene_.add(this.rollOverMesh);
            this.rollOverMesh.position.y = -2.5;
            this.object_.push(this.rollOverMesh);
            this.rollOverMesh.name = "tree3";
        }



        random_scale(tree) {
            let min = (0.85);
            let max = (1.3);
            let num = (Math.random() * (max - min)) + min;
            tree.scale.set(num, num, num)

        }


        random_color(model) {
            // 위치 변경 함수
            let leafcolor = [0x164406, 0x1C3911, 0x184E04];
            let trunkcolor = [0x6F441B, 0x745231, 0x905011];
            let min = Math.ceil(0);
            let max = Math.floor(2);
            let color = null;
            if (model) { // leaf
                color = leafcolor[Math.floor(Math.random() * (max - min)) + min];
            } else { // trunk
                color = trunkcolor[Math.floor(Math.random() * (max - min)) + min];
            }
            return color;
        }

        random_rotation() {
            // 회전 변경 함수
            let min = Math.ceil(-2);
            let max = Math.floor(2);
            return Math.PI / (Math.floor(Math.random() * (max - min)) + min);
        }

        /* animation */
        Update(timeElapsed) {
            if (this.keys_.space && this.position_.y == 0.0) {
                this.velocity_ = 30;
            }

            const acceleration = -60 * timeElapsed;

            this.position_.y += timeElapsed * (this.velocity_ + acceleration * 0.5);
            this.position_.y = Math.max(this.position_.y, 0.0);

            this.velocity_ += acceleration;
            this.velocity_ = Math.max(this.velocity_, -100);

            if (this.mesh_) {
                this.mesh_.position.copy(this.position_);
            }
        }
    }
    return {
        tree3: tree3,
    };
})();