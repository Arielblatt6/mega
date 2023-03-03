let light2 = 0
let temp = 0
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    if (Math.randomBoolean()) {
        basic.showIcon(IconNames.Duck)
    } else {
        basic.showIcon(IconNames.Skull)
    }
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
loops.everyInterval(1000, function () {
    light2 = input.lightLevel()
    basic.showNumber(light2)
})
loops.everyInterval(1000, function () {
    temp = input.temperature()
    basic.showNumber(temp)
})
