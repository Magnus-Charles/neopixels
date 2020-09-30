let strip: neopixel.Strip = null
let range: neopixel.Strip = null
basic.forever(function () {
    strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
    range = strip.range(0, 1)
    strip.clear()
    strip.showColor(neopixel.colors(NeoPixelColors.Purple))
})
