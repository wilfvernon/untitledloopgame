# BeatMaker
Beat Maker

https://fatboy.site/ thank u 4 sounds

https://github.com/gleitz/midi-js-soundfonts thank u 4 rendering said sounds

https://github.com/mudcube/MIDI.js thank u 4 playing said sounds

## MVP
[x] get midi.js working -> use live server pls

[ ] 4 samples / 2 instruments

[ ] midi loop over fixed time seconds

[ ] keyboard interaction

[ ] save loops / name loops / open loops / løøps brüdder

## Stretch
[ ] tempo - time/control (all things counting)

[ ] key/sample duration

[ ] up to 16 instruments (use flexbox for the css)

[ ] CSS

## Super Stretch
[ ] midi keyboard functionality.


Loop => [ [{notedata},{notedata}] * (BARS * RESOLUTION)]

Define a loop by the amount of arrays in the loop

```js

noteOn(delay)
noteOff(delay+end)
```