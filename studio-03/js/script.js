
console.clear();

var synths = [new Tone.Synth(), new Tone.Synth(), new Tone.Synth()];

synths[0].oscillator.type = 'sine';
synths[1].oscillator.type = 'sine';
synths[2].oscillator.type = 'sine';

var gain = new Tone.Gain(2);
gain.toMaster();

synths.forEach(function (synth) {
  return synth.connect(gain);
});

var $rows = document.querySelectorAll('div > div'),
    notes = ['B', 'F', 'C'];
var index = 0;

Tone.Transport.scheduleRepeat(repeat, '8n');
Tone.Transport.start();

function repeat(time) {
  var octave = index % 8;
  for (var i = 0; i < $rows.length; i++) {
    var synth = synths[i],
        note = notes[i] + octave,
        $row = $rows[i],
        $input = $row.querySelector('input:nth-child(' + (octave + 1) + ')');
    if ($input.checked) synth.triggerAttackRelease(note, '8n', time);
  }

  index++;
}
