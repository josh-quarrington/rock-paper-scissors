let Set_tool = 0
input.onGesture(Gesture.Shake, function () {
    Set_tool = randint(0, 2)
    if (Set_tool == 0) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (Set_tool == 1) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
