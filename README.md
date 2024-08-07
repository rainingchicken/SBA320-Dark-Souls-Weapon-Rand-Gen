# SBA 320H - React Web Application Project

https://sba320-dark-souls-weapon-rand-gen.onrender.com

## Dark Souls Remastered Random Weapon Generator

For those wanting a challenge playing Dark Souls Remastered, press the button to get a random weapon. As an extra challenge, the player can adhear to the stats caps provided.

## Requirements

1. Built with HTML, CSS, JavaScript, REACT, and ~~Redux Toolkit~~.
   - yes
2. Hosted on ~~Heroku or Netlify~~ render.com.
   - yes ^^
3. Use AJAX to make a request to an external data source like OMDBapi, and insert some of the data retrieved into the DOM.
   ```js
   const response = await fetch(`https://jgalat.github.io/ds-weapons-api/`);
   const fetchedData = await response.json();
   setData(fetchedData);
   ```

## Sources

- https://github.com/jgalat/ds-weapons-api?tab=readme-ov-file
- https://affanindo.github.io/stats-guide-dark-souls
- https://darksouls.wiki.fextralife.com/Classes
- https://64.media.tumblr.com/eeeb8768d7317f40bcd119655fb2475a/877ebd7b884cd8d7-f2/s1280x1920/9087883ea2732c28375ffc07552ca314f71d7cfc.png
- https://www.color-hex.com/color-palette/106718
- https://fonts.google.com/specimen/Cinzel?preview.text=Dark%20Souls%20Remastered
