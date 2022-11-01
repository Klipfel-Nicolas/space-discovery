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

    }

    /**
     * @param {string} color
     * @param {number} intensity
     * @param {boolean} castShadow
     * @param {number} shadowCameraFar
     * @param {number} mapSize
     * @param {number} normalBias
     * @param {object} position
     */
    setSunLight
    (
        color,
        intensity,
        castShadow,
        shadowCameraFar,
        mapSize,
        normalBias, 
        position
    ) 
    {
        this.sunLight = new THREE.DirectionalLight(color, intensity);
        this.sunLight.castShadow = castShadow;
        this.sunLight.shadow.camera.far = shadowCameraFar;
        this.sunLight.shadow.mapSize.set(mapSize, mapSize);
        this.sunLight.shadow.normalBias = normalBias;
        this.sunLight.position.set(position.x, position.y, position.z);
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

    /**
     * @param {string} color
     * @param {number} intensity
     */
    setAmbientLight(color, intensity) {
        this.ambientLight = new THREE.AmbientLight(color, intensity);
        this.scene.add(this.ambientLight);

        if(this.debug.active)
        {
            this.ambientDebugFolder = this.debugFolder.addFolder('Ambient')
            this.ambientDebugFolder.add(this.ambientLight, 'intensity').min(0).max(5).step(0.001).name('intensity')

            this.ambientDebugFolder.addColor(this.ambientLight, 'color').name('color')

            this.ambientDebugFolder.close()
        }
    }

    /**
     * 
     * @param {string} color 
     * @param {number} near 
     * @param {number} far 
     */
    setFog(color, near, far)
    {
        this.scene.fog = new THREE.Fog( color, near, far );
    }
}