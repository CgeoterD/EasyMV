# EasyMV (demo)
EasyMV - easy tool for use google model-viewer


<h3>How to use:</h3>
<ul>
 <li>Connect model-viewer library to your project <br> EasyMV - created with model-viewer version 1.7. In the next model viewer versions can work incorrect</li>
 <li>Copy EasyMV code in your project</li>
 <li>Initialize your model-viewer tag 
  <ul>
   <li> example: let _3d = new EasyMW("model")</li>
   <li> model - id DOM tag model viewer (model-viewer id="model")</li>
  </ul>  
  </li>
<li>Work (｡◕‿◕｡)</li>
</ul>


<h3>Note:</h3>
numMesh - number of 3d model mesh


<h3>Methods:</h3>
<ul>
<li>getAvailableAnimations() - return array with available animation for this 3d model</li>
<li>setAnimation(animationName) - change animation for the 3d model (animation Name - in quotes)</li>
 <li>setModelColor(arrayRGBColor, numMesh) - function for change mesh color. 
  <ul>
   <li>arrayRGBColor - need RGB color in array. (RGB item not like in css - add [0~15], you can use decimal numbers) <br>Last array index - opacity (example: [0,0,0,1]), if opacity = -1 mesh invisible.</li>
  </ul>
 </li>
<li>setModelCameraOrbit(x,y,z) - change camera position</li>
<li>setModelSrc(url) - change 3d model by upload another</li>
<li>setCameraTarget(x,y,z) - set camera target</li>
<li>setMaxCameraOrbit(x,y,z)) - set max camera orbit that camera can take</li>
</ul>

<h3>Recommendation:</h3>
<ul>
 <li>Do all manipulation with a 3d model when it loaded.
  <ul> 
   <li>For this use addEventListener("load"... <br>
   * (example: let _3d = new EasyMW("test_model")
   _3d.model.addEventListener("load", () => {
   ... })
    </li>
   </ul>
 </li>
</ul>
