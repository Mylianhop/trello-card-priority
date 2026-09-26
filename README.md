# Card Priority Power-Up v1

A private Trello Power-Up that recreates a simple card-priority system.

## Priority levels

| Number | Color | Name |
|---|---|---|
| 5 | Blue | Low |
| 4 | Green | Medium |
| 3 | Yellow | High |
| 2 | Orange | Critical |
| 1 | Red | Highest |

The selected number appears as a colored badge on the front of the Trello card.
Cards with no priority have no badge.

## Files

- `index.html` — Trello iframe connector.
- `client.js` — Power-Up logic.
- `icon.svg` — optional Power-Up icon.
- `README.md` — setup notes.

## Hosting

Trello requires the iframe connector and Power-Up assets to be served over HTTPS.

A simple option is GitHub Pages:

1. Create a GitHub repository.
2. Upload these files to the repository root.
3. Enable GitHub Pages for the repository.
4. Your connector URL will be:
   `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`

## Trello setup

1. Open https://trello.com/apps/admin
2. Choose a Workspace where you are an admin.
3. Click New.
4. Create a Power-Up.
5. Use the GitHub Pages URL as the Iframe Connector URL.
6. Save the Power-Up.
7. Open the Capabilities tab.
8. Enable:
   - Card badges
   - Card buttons
9. Save the changes.
10. On a board in that same Workspace, open Power-Ups.
11. Find the custom Power-Up and enable it.

Open a card and use Power-Ups > Priority to select a priority.

## Important

The priority is stored as shared card Power-Up data, so other members who can see the card can see the priority too.

The Power-Up does not use the Trello REST API, OAuth, an external database, cookies, or a backend server.
