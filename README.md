# SLACK-REDIR

Firefox add-on that replaces the slack-redir.net links in Slack with direct links in chat.

You can find the add-on published [here](https://addons.mozilla.org/firefox/addon/slack-redir/).

## Packing

1. Install `web-ext` tool:

```
npm install --global web-ext
```

2. Go to add-on directory, test and pack the add-on:

```
cd add-on
web-ext lint
web-ext build
```

3. Done. The addon is now packed in `web-ext-artifacts` directory located inside the `add-on` directory.