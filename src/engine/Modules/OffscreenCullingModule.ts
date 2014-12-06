/// <reference path="../Interfaces/IPipelineModule.ts" />

module ex {
   export class OffscreenCullingModule implements IPipelineModule { 
      public update(actor: Actor, engine: Engine, delta: number){
         var eventDispatcher = actor.eventDispatcher;
         var anchor = actor.anchor;
         var globalScale = actor.getGlobalScale();
         var width = globalScale.x * actor.getWidth()/actor.scale.x;
         var height = globalScale.y * actor.getHeight()/actor.scale.y;
         var actorScreenCoords = engine.worldToScreenCoordinates(new Point(actor.getGlobalX()-anchor.x*width, actor.getGlobalY()-anchor.y*height));

         var zoom = 1.0;
         if(actor.scene && actor.scene.camera){
            zoom = actor.scene.camera.getZoom();   
         }
         
         if(!actor.isOffScreen){
            if(actorScreenCoords.x + width * zoom < 0 || 
               actorScreenCoords.y + height * zoom < 0 ||
               actorScreenCoords.x > engine.width ||
               actorScreenCoords.y > engine.height ){
               
               eventDispatcher.publish('exitviewport', new ExitViewPortEvent());
               actor.isOffScreen = true;
            }
         }else{
            if(actorScreenCoords.x + width * zoom > 0 &&
               actorScreenCoords.y + height * zoom > 0 &&
               actorScreenCoords.x < engine.width &&
               actorScreenCoords.y < engine.height){
               
               eventDispatcher.publish('enterviewport', new EnterViewPortEvent());               
               actor.isOffScreen = false;
            }
         }
      }
   }
}