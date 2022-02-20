class EasyMW {
    constructor(model) {
        this.model = document.querySelector(`#${model}`)
    }
    // Animation
    get getAvailableAnimations() {
        return this.model.availableAnimations
    }
    get getAnimationCurrentTime() {
        return this.model.currentTime
    }
    get getAnimationDuration() {
        return this.model.duration
    }
    setAnimationTime(time) {
        this.model.currentTime = `${time}`
    }
    setAnimation(animationName) {
        this.model.animationName = animationName
    }
    animationStop() {
        this.model.pause()
    }
    animationPlay() {
        this.model.play()
    }
    // Variants
    get getAvailableVariants() {
        return this.model.availableVariants
    }
    setVariant(variantName) {
        this.model.variantName = `${variantName}`
    }
    // Work with mesh
    setModelColor(color, numMesh) {
       let arrayColor = color.split(',').map(numberString => parseFloat(numberString));
        this.model.model.materials[numMesh].pbrMetallicRoughness.setBaseColorFactor(arrayColor)
    }

    // Camera position
    setCameraTarget(value) {
        this.model.cameraTarget = `${value}`
    }
    setModelCameraOrbit(x,y,z) {
        this.model.setAttribute("camera-orbit",`${x}deg ${y}deg ${z}%` )
    }

}