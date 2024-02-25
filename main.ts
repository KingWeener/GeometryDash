scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    info.changeScoreBy(1)
    sprites.destroy(mySprite, effects.spray, 500)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy += -100
})
let mySprite: Sprite = null
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 11))
info.setScore(0)
mySprite = sprites.create(img`
    f f f f f f f f f f f f f f f f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 f f f 1 1 f f f 1 1 1 f 
    f 1 1 1 f f f 1 1 f f f 1 1 1 f 
    f 1 1 1 f f f 1 1 f f f 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 f f f f f f f f f f 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
let gravity = 100
tiles.setCurrentTilemap(tilemap`level1`)
mySprite.ay = gravity
mySprite.setVelocity(50, 0)
