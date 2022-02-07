let jugada = 0
input.onGesture(Gesture.Shake, function () {
    if (jugada == 1) {
        music.playTone(262, music.beat(BeatFraction.Sixteenth))
        music.playTone(294, music.beat(BeatFraction.Sixteenth))
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (jugada == 2) {
        music.playTone(262, music.beat(BeatFraction.Sixteenth))
        music.playTone(294, music.beat(BeatFraction.Sixteenth))
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # # . # #
            # # . # #
            `)
    } else if (jugada == 3) {
        music.playTone(294, music.beat(BeatFraction.Sixteenth))
        music.playTone(262, music.beat(BeatFraction.Sixteenth))
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
    	
    }
})
basic.forever(function () {
    jugada = randint(1, 3)
})
