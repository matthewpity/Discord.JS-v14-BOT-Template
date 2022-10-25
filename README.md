# Discord.JS v14 BOT Template
 Discord bot template for Discord.JS v14

## Features of this template
- Slash commands
- Easy to understand
- Supports the latest discord.js
- Events handler

## How to use it
### Settings up the bot
- Open up your internet browser and go to your [Discord Developer Portal](https://discord.com/developers/applications/).
- There you will create an application.
- After that go to the **Bot** tab.![image](https://user-images.githubusercontent.com/71346318/197791652-14eee6c8-6e81-413b-aa65-fb5c9773ec27.png)
- Click **Add Bot**.![image](https://user-images.githubusercontent.com/71346318/197792253-f709fc2b-7f73-4a40-af43-13954bb75618.png)
- Now your bot is created and you just have to paste in the information from your Discord Developer Portal into the **config.js** file.

### Installing packages
- Once you downloaded the source code make sure to fill in all the information in **config.js**. 
- After that install all the packages using npm: `npm install package.json`.

### Running the bot
You can run the bot on your computer using [Node.js](https://nodejs.org/) like this: `node shards.js`.
#### Make the bot run 24/7 on Ubuntu or Debain
For running the bot 24/7 I recommend using [Tmux](https://github.com/tmux/tmux):
- Install Tmux using `sudo apt-get install tmux`.
- Create a Tmux session like this: `tmux`.
- Now you can just run the bot using `node shards.js` and you are good to go.
