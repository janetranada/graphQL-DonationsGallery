# Donation Targets

List of Donation Targets with the following information, if available:

- ID
- Name
- Charity Organization
- Description

## Usage

- Click on the "Like" button to mark as favorite/liked.
- List of favorited / liked targets are shown in the "Favorites" page.
- Favorited / Liked target can be unliked by clicking on the "Remove" button.
- Most recent page queried in Gallery List is remembered as long as the session tab is not closed.

## Running Chrome without CORS

Open new instance of Chrome using CMD

### Windows

```bash
"[PATH_TO_CHROME]\chrome.exe" --disable-web-security --disable-gpu --user-data-dir=~/chromeTemp
```

##### Example (Windows 10):

```bash
$ "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --disable-web-security --disable-gpu --user-data-dir=~/chromeTemp
```

### OSX

```bash
open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security
```

### Linux

```bash
google-chrome --disable-web-security
```

## Running Locally

1. Download or clone the repository from https://github.com/janetranada/graphQL-DonationsGallery.git to your local device
2. Open your command line and go to local directory containing the repo files
3. Install dependencies

```bash
$ npm install
```

4. Run the app in development mode

```bash
$ npm start
```

5. To terminate the app, hit `CTRL+C`

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs the dependencies in the local node_modules folder.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
