// Array for rows of synths

var synths = [new Tone.Synth(), new Tone.Synth(), new Tone.Synth()];

// Declaring an oscillator type for each synth for a frequency wave

synths[0].oscillator.type = 'sine';
synths[1].oscillator.type = 'sine';
synths[2].oscillator.type = 'sine';

// Adjusting volume level(gain) to speakers(toMaster)

var gain = new Tone.Gain(2);
gain.toMaster();

// Connecting synths output to adjusted volume level

synths.forEach(function (synth) {
  return synth.connect(gain);
});

// Assigning notes to array of rows (synths) by selecting nested divs

var $rows = document.querySelectorAll('div > div'),
    notes = ['C', 'E', 'G'];
var index = 0;

// Function sound start and for repeat on 8th note

Tone.Transport.scheduleRepeat(repeat, '8n');
Tone.Transport.start();

// Funtion to loop notes with a for loop and if statement with input checked

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
