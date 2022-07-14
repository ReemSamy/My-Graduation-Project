var flag = false;
var synth;
onload = function() {
    if ('speechSynthesis' in window) {
        synth = speechSynthesis;
        /* references to the buttons */
        var playEle = document.querySelector('#play');
        var pauseEle = document.querySelector('#pause');
        var stopEle = document.querySelector('#stop');

        /* click event handlers for the buttons */
        playEle.addEventListener('click', onClickPlay);
        pauseEle.addEventListener('click', onClickPause);
        stopEle.addEventListener('click', onClickStop);
    } else {
        alert(" ⚠️ Text to speach is not supported in this browser !!");
    }
}

function onClickPlay() {
    if (!flag) {
        flag = true;
        utterance = new SpeechSynthesisUtterance(
            document.querySelector('body').textContent);
        utterance.voice = synth.getVoices()[0];
        utterance.onend = function() {
            flag = false;
        };
        synth.speak(utterance);
    }
    if (synth.paused) { /* unpause/resume narration */
        synth.resume();
    }
}

function onClickPause() {
    if (synth.speaking && !synth.paused) { /* pause narration */
        synth.pause();
    }
}


function onClickStop() {
    if (synth.speaking) { /* stop narration */
        /* for safari */
        flag = false;
        synth.cancel();
    }
}