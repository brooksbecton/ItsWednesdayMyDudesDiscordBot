# It's Wednesday My Dudes Discord Bot

[![Build Status](https://travis-ci.org/brooksbecton/ItsWednesdayMyDudesDiscordBot.svg?branch=master)](https://travis-ci.org/brooksbecton/ItsWednesdayMyDudesDiscordBot)
[![codecov](https://codecov.io/gh/brooksbecton/ItsWednesdayMyDudesDiscordBot/branch/master/graph/badge.svg)](https://codecov.io/gh/brooksbecton/ItsWednesdayMyDudesDiscordBot)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Discord Bot that will tell a channel that it is Wednesday and will link a "It's Wednesday my dudes" meme

## Features 

* Listens for "my dude" and
  * "wednesday" and will tell you if it is Wednesday
  * "video" and will post a frog meme video
* Will post that it is Wednesday on Wednesday 

### Examples

#### Checking if Wednesday
**User "bob" Types**: `My dude, is it Wednesday?`

**Response**: `@bob, It is Wednesday my dude! 
 eeeeeeeAAAAAhhhhhahahHAHahAHHAhAHHAhHAhAhHAhHHAAAAAAAAAA 
  https://www.youtube.com/watch?v=fyJGKEswuSc`

#### Asking for Wednesday Video
**User "bob" Types**: `My dude let me get a video`

**Response**: `@bob, https://www.youtube.com/watch?v=szqNmefKXxc`


## Getting Started

### Prerequisites

* NodeJS

### Installing

1. Fork the Repo :fork_and_knife:
1. Clone down your fork
1. Go to root project dir in command line
1. Setup .env file
1. run `npm i`
1. run `npm start`

#### How Setup .env File

You will need an .env file in the root of the project with structure like

```env
token="YOUR_DISCORD_TOKEN"
botname="YOUR_BOTS_NAME"
webhookId="YOUR_WEBHOOK_ID"
webhookToken="YOUR_WEBHOOK_TOKEN"
youtubeApiKey="YOUR_YOUTUBE_API_KEY"
```

##### Keys

* [How to get a Discord token](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token)
* [How to get a Youtube API key](https://developers.google.com/youtube/registering_an_application#Create_API_Keys)

##### Webhook

1. [How to Add a Webhook to Discord Server](https://support.discordapp.com/hc/en-us/articles/228383668-Intro-to-Webhooks)

1. Once added your webhook should look like: `https://discordapp.com/api/webhooks/YOUR_WEBHOOK_ID/YOUR_WEBHOOK_TOKEN`

1. Pull these out and add to the .env file

## Running the tests

`npm test` - This will run the linter and the the tests

## Notes

### Timezone
NodeJS gets time from the server it is running on. So if you want an accurate Wednesday announcement, you must configure the server time to match the audience's timezone.

## Built With

* [NodeJS](https://nodejs.org/)
* [Discord.js](https://discord.js.org/#/)

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/brooksbecton/ItsWednesdayMyDudesDiscordBot/tags).

## Authors


* **Brooks Becton** - *Initial work* - [brooksbecton](https://github.com/brooksbecton)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

* [Discord](https://discordapp.com/) :video_game:
* [ZimoNitrome](https://www.youtube.com/channel/UC99lkbVG8I5hRSZa4FD8zgw) - for video content :frog:
