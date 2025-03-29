# NutritionTrackerSoda

## Getting started
1. open visual studio code
2. click 'Clone Git Repository'
3. copy link to this repo: 'https://github.com/Swimming7birdz/NutritionTrackerSoda.git' 
4. within project, open a terminal
5. install node.js and npm: https://nodejs.org/en/download/ 
6. install necessary npm packages `npm i`
7. run commands in terminal:
    1. `cd nutrition_tracker`
    2. `cd frontend`
    3. `npm start`

## Pushing changes
1. open a terminal in visual studio code
2. check what branch you're in `git status`
3. change branch
    1. create your own branch (if you haven't already) `git checkout -b <branch name>`
    2. otherwise go to desired branch `git checkout <branch name>`
4. run commands in terminal:
    1. optional: see what changes were made `git status` 
    2. add all new and modifed files `git add --all` 
    3. commit message `git commit -am "<message>"` 
    4. push changes to your branch `git push origin -u <branch name>`
5. on github make a pull request to merge into main 

## Pulling changes
1. open a terminal in visual studio code
2. check what branch you're in `git status`
3. go to main branch `git checkout main`
4. pull from main `git pull`
5. run commands in terminal:
    1. go to your branch `git checkout <branch name>` 
    2. merge your branch with main `git merge main` 
6. resolve any merge conflicts
7. install necessary npm packages `npm i`
