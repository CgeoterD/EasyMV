class EasyMV {
    constructor(model) {
        this.model = document.querySelector(`#${model}`)
    }
    get getAvailableAnimations() {
        return this.model.availableAnimations
    }
    setAnimation(animationName) {
        this.model.animationName = animationName
    }
    setModelColor(arrayRGBColor, numMesh) {
        this.model.model.materials[numMesh].pbrMetallicRoughness.setBaseColorFactor(arrayRGBColor)
    }
    setModelCameraOrbit(x,y,z) {
        this.model.setAttribute("camera-orbit",`${x}deg ${y}deg ${z}%` )
    }
    setModelSrc(url) {
        this.model.src = url
    }
    setCameraTarget(x,y,z) {
        this.model.cameraTarget = `${x} ${y} ${z}`
    }
    setMaxCameraOrbit(x,y,z) {
        this.model.maxCameraOrbit = `${x}, ${y}, ${z}`
    }

}