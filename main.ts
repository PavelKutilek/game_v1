input.onButtonPressed(Button.A, function () {
    hrac.change(LedSpriteProperty.X, -1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    hrac.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.AB, function () {
    hrac.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    hrac.change(LedSpriteProperty.X, 1)
})
let hrac: game.LedSprite = null
hrac = game.createSprite(2, 2)
let zombie = game.createSprite(0, 0)
game.setScore(0)
basic.forever(function () {
    if (hrac.isTouching(zombie)) {
        zombie.set(LedSpriteProperty.X, randint(0, 4))
        zombie.set(LedSpriteProperty.Y, randint(0, 4))
        game.addScore(1)
        basic.showNumber(game.score())
    }
})
