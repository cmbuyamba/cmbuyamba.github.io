window.onload = function () {

    let start = document.getElementById("start");
    let stop = document.getElementById("stop");
    let animation = document.getElementById("animation");
    let fontsize = document.getElementById("fontsize");
    let turbo = document.getElementById("turbo");
    let textarea = document.getElementById("text-area");

    textarea.value = ANIMATIONS[animation.value];
    let speed = 250;

    let t = null;
    let text = null;

    start.disabled = false;
    stop.disabled = true;
    textarea.readOnly = true;

    let i = 0;

    start.onclick = function () {
        i = 0;
        if (animation.value) {
            text = ANIMATIONS[animation.value].split('=====');
            if (t == null) {
                t = timer();
            }
            start.disabled = true;
            stop.disabled = false;
            animation.disabled = true;
            fontsize.disabled = true;
        }
    }

    stop.onclick = function () {
        if (t != null) {
            clearInterval(t);
            t = null;
        }
        start.disabled = false;
        stop.disabled = true;
        animation.disabled = false;
        fontsize.disabled = false;
    }

    animation.onchange = function () {
        textarea.value = ANIMATIONS[animation.value];
    }

    fontsize.onchange = function () {
        textarea.style.fontSize = fontsize.value;
    }

    turbo.onchange = function () {
        if (turbo.checked) {
            speed = 50;
        } else {
            speed = 250;
        }

        clearInterval(t);
        t = timer();
    }

    function timer() {
        return setInterval(function () {
            textarea.value = text[i++ % text.length];
        }, speed);
    }
}