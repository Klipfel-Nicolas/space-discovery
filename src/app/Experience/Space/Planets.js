import * as THREE from 'three'

import Experience from '../Experience'

export default class Planets
{
    constructor()
    {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;

        // Debug
        this.debug = this.experience.debug
        
        if(this.debug.active)
        {
            this.debugFolder = this.debug.ui.addFolder('Mars')
            this.debugFolder.close()
        }

        // Setup
        this.setGeometry()
        this.setTextures()
        this.setMaterial()
        this.setMesh()


        // Rover Perseverence
        this.perseveranceRover = this.experience.space.satellites.perseveranceRover
        this.mesh.add(this.perseveranceRover.scene)
    }

    setGeometry()
    {
        this.geometry = new THREE.SphereGeometry( 2, 60, 60 );
    }

    setTextures()
    {
        this.textures = {};

        this.textures.color = this.resources.items.marsColorTexture
        this.textures.color.encoding = THREE.sRGBEncoding
        this.textures.normal = this.resources.items.marsNormalTexture
        this.textures.height = this.resources.items.marsHeightTexture
    }

    setMaterial()
    {
        this.material = new THREE.MeshStandardMaterial({
            map: this.textures.color,
            displacementMap: this.textures.height,
            displacementScale: .3,
            normalMap: this.textures.normal
        })

        // Debug 
        if(this.debug.active)
        {
            this.debugFolder.add(this.material, 'displacementScale').min(0).max(4).step(0.1).name('displacementScale')
        }
    }

    setMesh()
    {
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.scene.add(this.mesh)
    }

    update()
    {
        this.mesh.rotation.y +=  0.003;
    }
}