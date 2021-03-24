# Pre-work - _Memory Game_

Simon's Ocarina is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: Michaela Krawczyk

Time spent: 9 hours spent in total

\*\*\*Link to project: (insert your link here, should start with https://glitch.com...)

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [x] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [ ] Computer picks a different pattern each time the game is played
- [x] Player only loses after 3 mistakes (instead of on the first mistake)
- [x] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] There is a "Hear Song" button that allows the player to listen to the song before starting the game
- [x] When the player wings, the "Hear Song" button is replaced by a "Play Song" button,
      which allows the player to see the correct pattern in realtime

## Video Walkthrough

Here's a walkthrough of implemented user stories:
<a href="https://cdn.glitch.com/7ee2976c-7a9d-4aed-a98f-7162e262f3fd%2FtestRecording.gif?v=1616622802195">Gif Test Recording</a>

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
   <br><br>Note Frequencies: <a href="https://www.youtube.com/watch?v=XCVY8eVwfvI&ab_channel=MusicandCoding">link</a>
   <br>Sheet Music: <a href="https://www.pinterest.com/pin/436708495097149427/">link</a>
   <br>General JavaScript Assistance: <a href="https://www.w3schools.com/js/js_intro.asp">link</a>

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
   <br><br>When I first finished the base pre-work (everything before the Optional Features), I had an issue with the game ending prematurely. The loseGame function would run after the third note, even though the user’s guess was correct, and then it would continue to run on the first note until I refreshed the page. After carefully comparing my code to the pre-work tutorial and figuring out that the problem had to be rooted in the guessCounter—I realized that I had re-declared the guessCounter as a variable in the playClueSequence function, instead of just setting it to zero. This had interfered with the progression of the guessCounter and, thus, the timing of the rest of the functions.
   <br><br>Another issue I encountered within my own optional exploration was creating a function that played the entire Song of Storms to the same rhythm as the video game version (i.e.—in a way that followed the timing of the sheet music). I wasn’t familiar with using audio frequencies in JavaScript, so it took some trial and error to convert the material from the provided functions into a new function that iterated through the pattern array and played each note for a specific amount of time. There was a slight learning/remembering curve with the JavaScript, since it has been a while since I last used it; however, I think I was getting back into the swing of it by the end of this project.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)
   <br><br>Most of my experiences with web development have either been centered around displaying information (such as creating an “about me” project or re-vamping the website for a local pottery studio) or centered around creating a short interactive game (such as rock paper scissors, or the light and sound memory game that I developed for this project). Moving forward, I would like to learn more about the intersection of these two categories. It would be interesting to not only explore more ways to engage the user through interactive features, but also ways to combine that interactivity with design in a way that still effectively delivers information.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
   <br><br>There are a couple of things that immediately come to mind.
   <br><br>I would have added a stop tone feature to the Hear/Play Song buttons, so that the user can interrupt the full song once it starts playing.
   <br><br>I would have randomly assigned the note frequencies each time, so that the visual button pattern is different each game.
   <br><br>I would have changed the clueHoldTime of notes throughout the game, so that the note clues are delivered using the same rhythm as the sheet music. Right now, the note clues are delivered at an increasingly faster tempo; however, only the Hear/Play Song buttons play the song with the correct note lengths.
   <br><br>I would have introduced more song options by creating additional note patterns for the user to choose from.

## License

    Copyright [Michaela Krawczyk]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
