## Mini Hackernews

## Features

- [x] Display Top Stories

  - [x] Fetch the IDs of the top 20 stories from the Hacker News API
  - [x] Fetch story details (title, score, URL, author, etc.) for each story
  - [ ] Display stories in a list sorted by score

- [x] Author Details View
  - [x] Show story title
  - [x] Show clickable story URL
  - [x] Show story score
  - [x] Show author's username
  - [x] Show author's karma (fetched from `/user/{username}`)
  - [x] Show author's account creation date

## Decisions & Trade-offs

### Fetch logic

I decided to go with native fetch and have it live in a /services/hacker-news-api.ts helper. I briefly thought of using Axios. But based on the size of the app, i decided that it's smarter to start out simple, and i can easily swap it out later if i want.

### Folder structure

I decided to go with a screens based folder structure, to get around the awkward file based router naming which interferes with how i move in my ide - and yes even though the project is rather simple, it's what i prefer and it lets me move fast.

### Confusion around Author details view

I'm assuming that the title of this feature was mispelled, judging from the requirements this seems like it was meant to be a story detail view. So i've gone that route
