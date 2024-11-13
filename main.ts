function lookAround () {
    xgo.execution_action(xgo.action_enum.Looking_for_food)
    xgo.move_xgo(xgo.direction_enum.Forward, 50)
    basic.pause(1500)
    xgo.move_xgo(xgo.direction_enum.Backward, 50)
    basic.pause(500)
    xgo.execution_action(xgo.action_enum.Triaxial_rotation)
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    looking = !(looking)
})
let mustrenth = 0
let looking = false
xgo.init_xgo_serial(SerialPin.P2, SerialPin.P1)
basic.showIcon(IconNames.Surprised)
looking = false
basic.forever(function () {
    while (looking) {
        lookAround()
    }
    basic.pause(5000)
    music.setVolume(45)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Ode), music.PlaybackMode.UntilDone)
    if (looking) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.InBackground)
    }
})
loops.everyInterval(200, function () {
    mustrenth = input.magneticForce(Dimension.Strength)
    if (mustrenth < 45) {
        music.play(music.tonePlayable(175, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        if (mustrenth >= 100) {
            music.play(music.tonePlayable(220, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        }
    }
    if (mustrenth >= 100) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        looking = false
        if (mustrenth >= 150) {
            music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(659, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(698, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(784, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            looking = false
            xgo.execution_action(xgo.action_enum.Squat)
            xgo.execution_action(xgo.action_enum.Stretch_oneself)
            xgo.execution_action(xgo.action_enum.Pee)
            xgo.execution_action(xgo.action_enum.Crawl_forward)
        }
    }
})
