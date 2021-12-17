# Project Overview

## Project Name

Yug.io

## Project Description

My project is going to be a simple game using a Yu-gi-oh Card database. The player will also be able to choose an avatar from another api. Two cards will be drawn at random. The card that's attack points are greater then the other's defensive will win. After a certain amount of wins or loses the game will be over and restart.

## API and Data Sample

API: https://db.ygoprodeck.com/api-guide/

![PostMan screen shot of api data from url: https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Normal Monster , yugioh monster cards ifo](https://i.imgur.com/IUJxthV.png)

API: https://joeschmoe.io/?ref=prototyprio#wtf

![Post man screen shot of the api data from the url: https://joeschmoe.io/?ref=prototyprio#wtf , joe schmoe avatar drawings](https://i.imgur.com/eEIINeI.png)

## Wireframes

Mobile View:
https://whimsical.com/yug-io-mobile-AkR3hNe7hXajgv7TyBWAre

![mobile view wireframe of app design](https://i.imgur.com/EY8yx5D.png)

This wireframe is the conceptual art for how the mobile view of the app will look like. Keeping all the details of a windows view but adjusting it for better usability at this size.

Tablet View:
https://whimsical.com/yug-io-tablet-QsuesmVHkyYeNeZaQyC5pp

![tablet view of app design](https://i.imgur.com/8qWSei7.png)

This wireframe shows how the information and images will be placed on the screen at this size. Made for user comfort without too much negative space.

Window View:
https://whimsical.com/yug-io-window-Ebfi2QXSHz6RGNWMdBPHZM

![window browser view of app](https://i.imgur.com/w1Ugr0M.png)

This wireframe is a showcase of what a player would see in the browser. This viewpoint allows the background image pop out as part of the user experience while keeping all the same functionality and data that the user has access to on smaller sizes.

### MVP/PostMVP

#### MVP

- Randomly generate two photos of monster cards through external API.
- Allow player to set a User Name until end game logic is initiated.
- Have a draw card button that will trigger the display of the two random monster cards.
- Keep score of how many wins and loses a player has.
- Initiate some end game logic when a number of wins or loses is reached.
- Let the user choose their avatar from a small database of pics.

#### PostMVP

- Keep an xp counter that lets the plater level up.
- Add a home link, fight link, profile link, and setting link that actually go somewhere.
- Create game logic that allows the player to win the card they just beat and add it to a deck.
- let the player start with a smaller deck then the larger api data that grows with each win and ends at a cap.
- Give the player access to their deck and let them delete whichever cards they would like too.

## Project Schedule

| Day       | Deliverable                                                | Status     |
| --------- | ---------------------------------------------------------- | ---------- |
| Dec 10-12 | Prompt / Wireframes / Priority Matrix / Timeframes         | Complete   |
| Dec 13    | Project Approval, Begin starter code (HTML, CSS, BASIC JS) | Incomplete |
| Dec 13    | Main App logic. Js code.                                   | Incomplete |
| Dec 14    | Main App logic and js code. Finish up the MVPS             | Incomplete |
| Dec 15    | Style the Existing model with MVPS                         | Incomplete |
| Dec 16    | Add on Post MVPS                                           | Incomplete |
| Dec 17    | Presentations                                              | Incomplete |

## Priority Matrix

![This is a picture of priorities graph:https://i.imgur.com/8bvHeBz.png](https://i.imgur.com/8bvHeBz.png)

## Timeframes

| Component                                                                    | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------------------------------------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| INFRASTRUCTURE:                                                              |          |                |               |             |
| Set up HTML                                                                  |    H     |     0.5hrs     |    0.5hrs     |   0.5hrs    |
| Js code to connect API                                                       |    H     |      2hrs      |     1hrs      |    1hrs     |
| DATA:                                                                        |
| Write logic to select random cards and display on screen                     |    H     |      4hrs      |     20min     |    20min    |
| Connect random card generation to button                                     |    H     |      3hrs      |     10min     |    10min    |
| Create a score counter and logic to see which card wins                      |    H     |      4hrs      |     1hrs      |    1hrs     |
| End game logic, display winner                                               |    M     |      2hrs      |    2.5hrs     |   2.5hrs    |
| Create a restart game button                                                 |    M     |      4hrs      |     1hrs      |    1hrs     |
| User Input like user name and avatar selection and display                   |    M     |      5hrs      |     6hrs      |    6hrs     |
| STYLING:                                                                     |
| background-image set, header and links                                       |    H     |      3hrs      |     4hrs      |    4hrs     |
| style buttons to look nice and cool                                          |    M     |      3hrs      |     1hrs      |    1hrs     |
| create dropdown in mobile app with links, just regular links for other sizes |    M     |      2hrs      |     2hrs      |    2hrs     |
| create some animation for cards when randomized                              |    L     |      5hrs      |     2hrs      |    2hrs     |
| Basic styling and making sure everything looks good at each size and works   |    H     |      6hrs      |     8hrs      |    8hrs     |
| Post MVPS                                                                    |          |                |     3hrs      |    3hrs     |
| Total                                                                        |          |    43.5hrs     |    32.5hrs    |   32.5hrs   |

## Code Snippet

I am most proud of this snippet because it's probably the piece of code I had the most fun writing. Basically making it so at the end of a round, meaning the player has so many wins or loses it shows a message that is dynamic to the cards present in the last draw. As well as rewarding xp points or not. It also has the functionality to change the screen from playing to allowing the player to reset the match as well as seeing if the value of xp the player has gained warrants the leveling up logic to be initiated.

```
const endGame = (nameOne) => {
  if (score > 9) {
    winnerAnnouncement.classList.remove("hidden");
    winnerName.innerText = `You drew ${nameOne} and won!`;
  } else if (loses > 9) {
    loserAnnouncement.classList.remove("hidden");
    winnerName.innerText = `You drew ${nameOne} and lost! Better luck next time.`;
  }
  if (score > 9) {
    score = 0;
    loses = 0;
    randomizerBtn.classList.add("hidden");
    resetBtn.classList.remove("hidden");
    totalScore += 500;
    scoreKeeper.innerText = `Score: ${totalScore}`;
    progressBar.value += 20;
    reachedMaxLevel();

    if (progressBar.value == 100) {
      level++;
      xpCounter.innerText = `Level: ${level}`;
      progressBar.value = 0;
      progressBar.max += 40;
    }
  } else if (loses > 9) {
    score = 0;
    loses = 0;
    totalScore;
    progressBar.value;
    randomizerBtn.classList.add("hidden");
    resetBtn.classList.remove("hidden");
    scoreKeeper.innerText = `Score: ${totalScore}`;
  }
  resetBtn.addEventListener("click", () => {
    winsDisplay.innerText = `Wins: 0`;
    losesDisplay.innerText = `Loses: 0`;
    randomizerBtn.classList.remove("hidden");
    resetBtn.classList.add("hidden");
    winnerAnnouncement.classList.add("hidden");
    loserAnnouncement.classList.add("hidden");
    firstCardSpecs.innerHTML = " ";
    secondCardSpecs.innerHTML = " ";
    winnerName.innerHTML = "";
  });
};
```

## Change Log

Use this section to document what changes were made and the reasoning behind those changes.
