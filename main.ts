basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 120)
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 15) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 30)
        basic.pause(500)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        basic.pause(1000)
    }
})
