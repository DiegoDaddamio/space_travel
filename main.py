def on_button_pressed_a():
    global X
    if Game:
        if X != 0:
            led.toggle(X, 4)
            X += -1
            led.toggle(X, 4)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global Game, X, invX, invY
    if Game:
        pass
    else:
        basic.clear_screen()
        Game = 1
        led.toggle(2, 4)
        X = 2
        invX = randint(0, 4)
        led.toggle(invX, 0)
        invY = 0
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global X
    if Game:
        if X != 4:
            led.toggle(X, 4)
            X += 1
            led.toggle(X, 4)
input.on_button_pressed(Button.B, on_button_pressed_b)

def Inv():
    global invX, invY
    invX = randint(0, 4)
    led.toggle(invX, 0)
    invY = 0
Scor = 0
invY = 0
invX = 0
X = 0
Game = 0
Game = 1
led.toggle(2, 4)
X = 2
Inv()

def on_forever():
    global Game
    if invY == 4 and invX == X:
        Game = 0
        basic.clear_screen()
        basic.show_icon(IconNames.GHOST)
        basic.pause(100)
        game.game_over()
basic.forever(on_forever)

def on_every_interval():
    global invY, Scor, invX
    if Game:
        if invY != 5:
            led.toggle(invX, invY)
            invY += 1
            if invY == 0:
                led.toggle(invX, invY - 1)
            led.toggle(invX, invY)
        else:
            if invY == 5:
                led.toggle(invX, invY)
                Scor += 1
                game.set_score(Scor)
            invY = 0
            invX = randint(0, 4)
            led.toggle(invX, invY)
loops.every_interval(200, on_every_interval)
