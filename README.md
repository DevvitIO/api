# Devvit.io API

## Overview

Via this API, we make some data about our organization publically available. Visit https://devvit.io/ to learn more about the Devvit.io community.

## URI and Versioning

We hope to improve the API over time. The changes won't always be backward compatible, so we're going to use versioning. This first iteration will have URIs prefixed with `https://devvit-api.herokuapp.com/v1/` and is structured as described below.

For versioning purposes, only removal of a non-optional field or alteration of an existing field will be considered incompatible changes. *Clients should gracefully handle additional fields they don't expect, and simply ignore them.*

## Leaderboard
> `/v1/leaderboard`

The leaderboard lists members, sorted by their cookie score. Only members with a cookie score of 1 or higher during the specified time frame are listed.

This endpoint accepts the following optional query parameters:

Parameter | Description | Examples
----------|-------------|---------
`tag` | Regex to limit the leaderboard to specific tags. | `^TestUser#0398$`, `^Test(User)?#`
`after` | Millisecond Unix timestamp marking the start of the specified time frame. | `1520774077550`
`before` | Millisecond Unix timestamp marking the end of the specified time frame. | `1520774077550`
`limit` | Max number of members which should be returned. | `10`

All members have all of the following properties:

Field | Description | Examples
------|-------------|---------
`_id` | The member's unique id. | `119371473775318369`
`username` | The member's username. | `TestUser`
`tag` | The member's Discord tag. | `TestUser#0398`
`avatarURL` | A link to the member's avatar if they have one. Otherwise a link to their default avatar. | `https://cdn.discordapp.com/avatars/119371473775318369/0fabe0dabb423c7a063300f9359dad4d.png?size=2048`
`cookies` | Number of the member's cookies during the specified time frame. | `5`

For example: [`https://devvit-api.herokuapp.com/v1/leaderboard?before=1520774077550&limit=2`](https://devvit-api.herokuapp.com/v1/leaderboard?before=1520774077550&limit=2)

```json
[
	{
		"_id": "169671677725114369",
		"username":"Tor",
		"tag": "Tor#0333",
		"avatarURL": "https://cdn.discordapp.com/avatars/169671677725114369/0ea1e0d9bbb23cea063300f5159dad4d.png?size=2048",
		"cookies": 4
	},
	{
		"_id": "221748889152126976",
		"tag": "SirDrapple#0815",
		"username": "SirDrapple","avatarURL": "https://cdn.discordapp.com/avatars/221748889152126976/bf3fbb8067b53c8a61f6a49bb0b67765.png?size=2048",
		"cookies": 2
	}
]
```
