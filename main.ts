function Blink () {
    for (let index = 0; index < 3; index++) {
        led.toggle(Position % 5, Position / 5)
        basic.pause(100)
    }
}
function Start () {
    basic.clearScreen()
    Position = 24
    Multiplier = 1
    Total = 0
    Blink()
}
input.onButtonPressed(Button.A, function () {
    Position += 1
    if (Position > 24) {
        Position = 0
    }
    Blink()
})
input.onButtonPressed(Button.AB, function () {
    led.toggle(Position % 5, Position / 5)
})
input.onButtonPressed(Button.B, function () {
    Position += -1
    if (Position < 0) {
        Position = 24
    }
    Blink()
})
input.onGesture(Gesture.Shake, function () {
    Calculate()
})
function Calculate () {
    Total = 0
    Multiplier = 1
    for (let index = 0; index <= 24; index++) {
        Position = 24 - index
        if (led.point(Position % 5, Position / 5)) {
            Total += Multiplier
        }
        index += Multiplier
    }
    basic.clearScreen()
    basic.showNumber(Total)
    basic.pause(1000)
    Start()
}
let Total = 0
let Multiplier = 0
let Position = 0
Start()
