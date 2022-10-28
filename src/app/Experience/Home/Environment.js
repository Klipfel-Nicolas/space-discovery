import * as THREE from 'three'

import Experience from "../Experience";

export default class Environment
{
    constructor()
    {
        this.experience = new Experience();
        this.scene = this.experience.scene;

        // Debug
        this.debug = this.experience.debug
        
        if(this.debug.active)
        {
            this.debugFolder = this.debug.ui.addFolder('Light')

            this.debugFolder.close()
        }

        // Setup
        this.setSunLight()
        this.setAmbientLight()
    }

    setSunLight() {
        this.sunLight = new THREE.DirectionalLight('#f1f1f1', 2);
        this.sunLight.castShadow = true;
        this.sunLight.shadow.camera.far = 15;
        this.sunLight.shadow.mapSize.set(1024, 1024);
        this.sunLight.shadow.normalBias = 0.05;
        this.sunLight.position.set(3, 3, - 2.25);
        this.scene.add(this.sunLight);

        // Debug 
        if(this.debug.active)
        {
            this.sunDebugFolder = this.debugFolder.addFolder('Sun')

            this.sunDebugFolder.add(this.sunLight, 'intensity').min(0).max(5).step(0.001).name('intensity')

            this.sunDebugFolder.addColor(this.sunLight, 'color').name('color')

            this.sunDebugFolder.add(this.sunLight.position, 'x').min(-10).max(10).step(0.1).name('position-x')
            this.sunDebugFolder.add(this.sunLight.position, 'y').min(-10).max(10).step(0.1).name('position-y')
            this.sunDebugFolder.add(this.sunLight.position, 'z').min(-10).max(10).step(0.1).name('position-z')

            this.sunDebugFolder.close()
        }
    }

    setAmbientLight() {
        this.ambientLight = new THREE.AmbientLight(0xffffff, .1);
        this.scene.add(this.ambientLight);

        if(this.debug.active)
        {
            this.ambientDebugFolder = this.debugFolder.addFolder('Ambient')
            this.ambientDebugFolder.add(this.ambientLight, 'intensity').min(0).max(5).step(0.001).name('intensity')

            this.ambientDebugFolder.addColor(this.ambientLight, 'color').name('color')

            this.ambientDebugFolder.close()
        }
    }
}