def lookAround():
    xgo.execution_action(xgo.action_enum.LOOKING_FOR_FOOD)
    xgo.move_xgo(xgo.direction_enum.FORWARD, 50)
    basic.pause(1500)
    xgo.move_xgo(xgo.direction_enum.BACKWARD, 50)
    basic.pause(500)
    xgo.execution_action(xgo.action_enum.TRIAXIAL_ROTATION)
mustrenth = 0
xgo.init_xgo_serial(SerialPin.P2, SerialPin.P1)
basic.show_icon(IconNames.SURPRISED)
looking = True

def on_forever():
    while looking:
        pass
basic.forever(on_forever)

def on_every_interval():
    global mustrenth
    mustrenth = input.magnetic_force(Dimension.STRENGTH)
    if True:
        pass
    else:
        pass
loops.every_interval(100, on_every_interval)
