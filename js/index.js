var efectos = null;
function playSound(src) {
var sv = SugarCube.State.variables;
if (!efectos) {
SugarCube.SimpleAudio.tracks.add("effects","sounds/"+src+".mp3");
efectos=SugarCube.SimpleAudio.tracks.get("effects");
efectos.play();
}
else {
stopSound();
playSound(src);}}
function stopSound() {
    var sv = SugarCube.State.variables;
        if (efectos) {
        efectos.stop();
        efectos.unload();
        SugarCube.SimpleAudio.tracks.delete("effects");
        efectos = null;
    }
}
