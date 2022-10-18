import * as THREE from 'three'
import { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js';

import Experience from './Experience'

export default class Renderer
{
    constructor()
    {
        this.experience = new Experience()
        this.canvas = this.experience.canvas
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.camera = this.experience.camera

        // Debug
        this.debug = this.experience.debug

        if(this.debug.active)
        {
            this.debugFolder = this.debug.ui.addFolder('Renderer')

            this.debugFolder.close()
        }

        this.setRenderer();
        this.setCSSRenderer();
    }

    setRenderer()
    {
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true, 
            alpha: true
        });

        this.renderer.physicallyCorrectLights = true;
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        this.renderer.toneMapping = THREE.CineonToneMapping;
        this.renderer.toneMappingExposure = 1.75;
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFShadowMap;
        this.renderer.setSize(this.sizes.width, this.sizes.height);
        this.renderer.setPixelRatio(this.sizes.pixelRatio, 2);

        // Debug
        if(this.debug.active)
        {
            this.debugFolder
                .add(this.renderer, 'toneMapping', {
                    No: THREE.NoToneMapping,
                    Linear: THREE.LinearToneMapping,
                    Reinhard: THREE.ReinhardToneMapping,
                    Cineon: THREE.CineonToneMapping,
                    ACESFilmic: THREE.ACESFilmicToneMapping
                })
                .onFinishChange(() =>{
                    this.renderer.toneMapping = Number(this.renderer.toneMapping)
                })
    
            this.debugFolder.add(this.renderer, 'toneMappingExposure').min(0).max(10).step(.001)
        }

    }

    setCSSRenderer()
    {
        this.labelRenderer = new CSS2DRenderer();
        this.labelRenderer.setSize(this.sizes.width, this.sizes.height);
        this.labelRenderer.domElement.style.position = 'absolute';
	    this.labelRenderer.domElement.style.top = 0;
        document.body.appendChild( this.labelRenderer.domElement );
    }

    /**
     * Resize event
     */
    resize()
    {
        this.renderer.setSize(this.sizes.width, this.sizes.height);
        this.renderer.setPixelRatio(this.sizes.pixelRatio, 2);

        this.labelRenderer.setSize(this.sizes.width, this.sizes.height);
    }

    /**
     * Update event
     */
    update()
    {
        this.renderer.render(this.scene, this.camera.perspectiveCamera)

        this.labelRenderer.render(this.scene, this.camera.perspectiveCamera);
    }
}