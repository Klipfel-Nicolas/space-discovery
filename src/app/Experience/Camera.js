import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

import Experience from './Experience'

export default class Camera
{
    constructor()
    {
        this.experience = new Experience()
        this.sizes = this.experience.sizes
        this.canvas = this.experience.canvas
        this.scene = this.experience.scene
        
    }

    /**
     * @param {number} fov
     * @param {number} aspect
     * @param {number} near
     * @param {number} far
     * @param {object} position
     */
    createPerspectiveCamera(fov, aspect, near, far, position)
    {
        this.perspectiveCamera = new THREE.PerspectiveCamera(
            fov,
            aspect,
            near,
            far
        );

        this.perspectiveCamera.position.set(position.x, position.y, position.z);

        this.scene.add(this.perspectiveCamera);
    }

    /**
     * 
     * @param {object} renderer 
     * @param {boolean} enableDamping
     */
    setOrbitControls(renderer, enableDamping)
    {
        this.controls = new OrbitControls(this.perspectiveCamera, renderer)
        this.controls.enableDamping = enableDamping;
    }

    /**
     * 
     * @param {number} minDistance 
     * @param {number} maxDistance 
     * @param {number} zoomSpeed 
     * @param {number} maxPolarAngle 
     */
    orbitControlsSettings(minDistance, maxDistance, zoomSpeed, maxPolarAngle)
    {
        this.controls.minDistance = minDistance;
        this.controls.maxDistance = maxDistance; 
        
        if(zoomSpeed) this.controls.zoomSpeed = zoomSpeed;
        if (maxPolarAngle) this.controls.maxPolarAngle = maxPolarAngle;

    }

    /**
     * Resize event
     */
    resize()
    {
        this.perspectiveCamera.aspect = this.sizes.width / this.sizes.height
        this.perspectiveCamera.updateProjectionMatrix()
    }

    update()
    {
        if(this.controls)
        {
          this.controls.update()  
        }
    }
}