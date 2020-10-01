let strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
basic.forever(function () {
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    strip.show()
    strip.clear()
    basic.pause(500)
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    strip.show()
    strip.clear()
    basic.pause(500)
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    strip.show()
    strip.clear()
    basic.pause(500)
})
