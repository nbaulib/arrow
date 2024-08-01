namespace SpriteKind {
    export const Arrow = SpriteKind.create()
}
mp.onButtonEvent(mp.MultiplayerButton.Up, ControllerButtonEvent.Pressed, function (player2) {
    mp.getPlayerSprite(player2).setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . 1 1 . 1 . 1 1 . . . . . 
        . . . . 1 . . 1 . . 1 . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    if (arrow.image.equals(arrow_list[0])) {
        mp.changePlayerStateBy(player2, MultiplayerState.score, 1)
    }
})
let arrow: Sprite = null
let arrow_list: Image[] = []
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffff2222222222222222222222222222222222222222222222222222222222222fffffffffffffffff8888888888888888888888888888888888888888888888888888888888888fffffffffff
    ffffffffff2222222222222222222222222222222222222222222222222222222222222fffffffffffffffff8888888888888888888888888888888888888888888888888888888888888fffffffffff
    ffffffffff2222222222222222222222222222222222222222222222222222222222222fffffffffffffffff8888888888888888888888888888888888888888888888888888888888888fffffffffff
    ffffffffff2222222222222222222222222222222222222222222222222222222222222fffffffffffffffff8888888888888888888888888888888888888888888888888888888888888fffffffffff
    ffffffffff2222222222222222222222222222222222222222222222222222222222222fffffffffffffffff8888888888888888888888888888888888888888888888888888888888888fffffffffff
    ffffffffff2222222222222222222222222222222222222222222222222222222222222fffffffffffffffff8888888888888888888888888888888888888888888888888888888888888fffffffffff
    ffffffffff2222222222222222222222222222222222222222222222222222222222222fffffffffffffffff8888888888888888888888888888888888888888888888888888888888888fffffffffff
    ffffffffff2222222222222222222222222222222222222222222222222222222222222fffffffffffffffff8888888888888888888888888888888888888888888888888888888888888fffffffffff
    ffffffffff2222222222222222222222222222222222222222222222222222222222222fffffffffffffffff8888888888888888888888888888888888888888888888888888888888888fffffffffff
    ffffffffff2222222222222222222222222222222222222222222222222222222222222fffffffffffffffff8888888888888888888888888888888888888888888888888888888888888fffffffffff
    ffffffffff2222222222222222222222222222222222222222222222222222222222222fffffffffffffffff8888888888888888888888888888888888888888888888888888888888888fffffffffff
    ffffffffff2222222222222222222222222222222222222222222222222222222222222fffffffffffffffff8888888888888888888888888888888888888888888888888888888888888fffffffffff
    ffffffffff2222222222222222222222222222222222222222222222222222222222222fffffffffffffffff8888888888888888888888888888888888888888888888888888888888888fffffffffff
    ffffffffff2222222222222222222222222222222222222222222222222222222222222fffffffffffffffff8888888888888888888888888888888888888888888888888888888888888fffffffffff
    ffffffffff2222222222222222222222222222222222222222222222222222222222222fffffffffffffffff8888888888888888888888888888888888888888888888888888888888888fffffffffff
    ffffffffff2222222222222222222222222222222222222222222222222222222222222fffffffffffffffff8888888888888888888888888888888888888888888888888888888888888fffffffffff
    ffffffffff2222222222222222222222222222222222222222222222222222222222222fffffffffffffffff8888888888888888888888888888888888888888888888888888888888888fffffffffff
    ffffffffff2222222222222222222222222222222222222222222222222222222222222fffffffffffffffff8888888888888888888888888888888888888888888888888888888888888fffffffffff
    ffffffffff2222222222222222222222222222222222222222222222222222222222222fffffffffffffffff8888888888888888888888888888888888888888888888888888888888888fffffffffff
    ffffffffff2222222222222222222222222222222222222222222222222222222222222fffffffffffffffff8888888888888888888888888888888888888888888888888888888888888fffffffffff
    ffffffffff2222222222222222222222222222222222222222222222222222222222222fffffffffffffffff8888888888888888888888888888888888888888888888888888888888888fffffffffff
    ffffffffff2222222222222222222222222222222222222222222222222222222222222fffffffffffffffff8888888888888888888888888888888888888888888888888888888888888fffffffffff
    ffffffffff2222222222222222222222222222222222222222222222222222222222222fffffffffffffffff8888888888888888888888888888888888888888888888888888888888888fffffffffff
    ffffffffff2222222222222222222222222222222222222222222222222222222222222fffffffffffffffff8888888888888888888888888888888888888888888888888888888888888fffffffffff
    ffffffffff2222222222222222222222222222222222222222222222222222222222222fffffffffffffffff8888888888888888888888888888888888888888888888888888888888888fffffffffff
    ffffffffff2222222222222222222222222222222222222222222222222222222222222fffffffffffffffff8888888888888888888888888888888888888888888888888888888888888fffffffffff
    ffffffffff2222222222222222222222222222222222222222222222222222222222222fffffffffffffffff8888888888888888888888888888888888888888888888888888888888888fffffffffff
    ffffffffff2222222222222222222222222222222222222222222222222222222222222fffffffffffffffff8888888888888888888888888888888888888888888888888888888888888fffffffffff
    ffffffffff2222222222222222222222222222222222222222222222222222222222222fffffffffffffffff8888888888888888888888888888888888888888888888888888888888888fffffffffff
    ffffffffff2222222222222222222222222222222222222222222222222222222222222fffffffffffffffff8888888888888888888888888888888888888888888888888888888888888fffffffffff
    ffffffffff2222222222222222222222222222222222222222222222222222222222222fffffffffffffffff8888888888888888888888888888888888888888888888888888888888888fffffffffff
    ffffffffff2222222222222222222222222222222222222222222222222222222222222fffffffffffffffff8888888888888888888888888888888888888888888888888888888888888fffffffffff
    ffffffffff2222222222222222222222222222222222222222222222222222222222222fffffffffffffffff8888888888888888888888888888888888888888888888888888888888888fffffffffff
    ffffffffff2222222222222222222222222222222222222222222222222222222222222fffffffffffffffff8888888888888888888888888888888888888888888888888888888888888fffffffffff
    ffffffffff2222222222222222222222222222222222222222222222222222222222222fffffffffffffffff8888888888888888888888888888888888888888888888888888888888888fffffffffff
    ffffffffff2222222222222222222222222222222222222222222222222222222222222fffffffffffffffff8888888888888888888888888888888888888888888888888888888888888fffffffffff
    ffffffffff2222222222222222222222222222222222222222222222222222222222222fffffffffffffffff8888888888888888888888888888888888888888888888888888888888888fffffffffff
    ffffffffff2222222222222222222222222222222222222222222222222222222222222fffffffffffffffff8888888888888888888888888888888888888888888888888888888888888fffffffffff
    ffffffffff2222222222222222222222222222222222222222222222222222222222222fffffffffffffffff8888888888888888888888888888888888888888888888888888888888888fffffffffff
    ffffffffff2222222222222222222222222222222222222222222222222222222222222fffffffffffffffff8888888888888888888888888888888888888888888888888888888888888fffffffffff
    ffffffffff2222222222222222222222222222222222222222222222222222222222222fffffffffffffffff8888888888888888888888888888888888888888888888888888888888888fffffffffff
    ffffffffff2222222222222222222222222222222222222222222222222222222222222fffffffffffffffff8888888888888888888888888888888888888888888888888888888888888fffffffffff
    ffffffffff2222222222222222222222222222222222222222222222222222222222222fffffffffffffffff8888888888888888888888888888888888888888888888888888888888888fffffffffff
    ffffffffff2222222222222222222222222222222222222222222222222222222222222fffffffffffffffff8888888888888888888888888888888888888888888888888888888888888fffffffffff
    ffffffffff2222222222222222222222222222222222222222222222222222222222222fffffffffffffffff8888888888888888888888888888888888888888888888888888888888888fffffffffff
    ffffffffff2222222222222222222222222222222222222222222222222222222222222fffffffffffffffff8888888888888888888888888888888888888888888888888888888888888fffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
arrow_list = [
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . 1 1 . 1 . 1 1 . . . . . 
    . . . . 1 . . 1 . . 1 . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 1 1 . . . . . . . . . 
    . . . . 1 1 . . . . . . . . . . 
    . . . 1 1 . . . . . . . . . . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . . 1 1 . . . . . . . . . . . 
    . . . . 1 1 . . . . . . . . . . 
    . . . . . 1 1 . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . 1 1 . . . . . 
    . . . . . . . . . . 1 1 . . . . 
    . . . . . . . . . . . 1 1 . . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . . . . . . . . . . 1 1 . . . 
    . . . . . . . . . . 1 1 . . . . 
    . . . . . . . . . 1 1 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 1 . . . . . . . 
    . . . . . . . . 1 . . . . . . . 
    . . . . . . . . 1 . . . . . . . 
    . . . . . . . . 1 . . . . . . . 
    . . . . . . . . 1 . . . . . . . 
    . . . . . . . . 1 . . . . . . . 
    . . . . . . . . 1 . . . . . . . 
    . . . . . 1 . . 1 . . 1 . . . . 
    . . . . . 1 1 . 1 . 1 1 . . . . 
    . . . . . . 1 1 1 1 1 . . . . . 
    . . . . . . . 1 1 1 . . . . . . 
    . . . . . . . . 1 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `
]
arrow = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Arrow)
arrow.setPosition(80, 30)
sprites.destroyAllSpritesOfKind(SpriteKind.Player)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . 1 1 . 1 . 1 1 . . . . . 
    . . . . 1 . . 1 . . 1 . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . 1 1 . 1 . 1 1 . . . . . 
    . . . . 1 . . 1 . . 1 . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player))
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).changeScale(0.75, ScaleAnchor.Middle)
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).changeScale(0.75, ScaleAnchor.Middle)
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setPosition(40, 90)
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setPosition(120, 90)
game.splash("be quickest to match", "arrow directions to win!")
carnival.startCountdownGame(15, carnival.WinTypes.Multi)
game.onUpdateInterval(500, function () {
    arrow.setImage(arrow_list._pickRandom())
})
