input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    if (Game) {
        if (X != 0) {
            led.toggle(X, 4)
            X += -1
            led.toggle(X, 4)
        }
        
    }
    
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
    if (Game) {
        
    } else {
        basic.clearScreen()
        Game = 1
        led.toggle(2, 4)
        X = 2
        invX = randint(0, 4)
        led.toggle(invX, 0)
        invY = 0
    }
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    if (Game) {
        if (X != 4) {
            led.toggle(X, 4)
            X += 1
            led.toggle(X, 4)
        }
        
    }
    
})
function Inv() {
    
    invX = randint(0, 4)
    led.toggle(invX, 0)
    invY = 0
}

let Scor = 0
let invY = 0
let invX = 0
let X = 0
let Game = 0
Game = 1
led.toggle(2, 4)
X = 2
Inv()
basic.forever(function on_forever() {
    
    if (invY == 4 && invX == X) {
        Game = 0
        basic.clearScreen()
        basic.showIcon(IconNames.Ghost)
        basic.pause(100)
        game.gameOver()
    }
    
})
loops.everyInterval(200, function on_every_interval() {
    
    if (Game) {
        if (invY != 5) {
            led.toggle(invX, invY)
            invY += 1
            if (invY == 0) {
                led.toggle(invX, invY - 1)
            }
            
            led.toggle(invX, invY)
        } else {
            if (invY == 5) {
                led.toggle(invX, invY)
                Scor += 1
                game.setScore(Scor)
            }
            
            invY = 0
            invX = randint(0, 4)
            led.toggle(invX, invY)
        }
        
    }
    
})
