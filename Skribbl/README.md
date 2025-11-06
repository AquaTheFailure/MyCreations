# Skribbl Toggle with Hints and Custom Links

**Author:** Mitsuki Tsukihara (Nickname: Tsukki)
**Description:** A web-based interface for Skribbl.io that allows toggling between the main game, hints, and custom invite links, while preserving session states. Includes a hideable UI for cleaner gameplay.

---

## Features

- **Default Sites Toggle**: Quickly switch between Skribbl.io and a hints page by typing `site` in the input field.
- **Custom Links Support**: Paste any `http://` or `https://` link in the input field to load it in a temporary iframe without affecting the default sessions.
- **Persistent Sessions**: Both default iframes (Skribbl.io and hints) remain loaded in the background to preserve game states.
- **Customizable Defaults**: Change the default URLs for the two main iframes using the built-in settings panel.
- **Hideable UI**: Click the toggle button (☰) in the top-right corner to hide or show the input and settings panel for a cleaner view during gameplay.
- **Responsive Design**: Works fullscreen and keeps iframes properly scaled.

---

## Usage

1. **Open the HTML file** in your browser.
2. **Default Behavior**: Skribbl.io loads automatically in the main iframe.
3. **Toggle Hints**: Type `site` in the input field to switch to the hints page (or back to Skribbl.io).
4. **Load a Custom Link**: Paste a full URL in the input field to open it temporarily in a separate iframe.
5. **Update Default Links**:
   - Use the input fields in the settings panel to update the default sites.
   - The update button updates the default without reloading the currently visible iframe, preserving the session.
6. **Hide UI**: Click the ☰ button in the top-right corner to hide or show the input and settings panel.

---

## File Structure

- `index.html` — Main HTML file with embedded CSS and JavaScript.
- (Optional) Additional assets if required, e.g., logos or icons.

---

## Notes

- Ensure the URLs are accessible and allow embedding in an iframe (some websites prevent it).
- Sessions for default iframes are maintained; however, loading a custom URL will temporarily overlay it.
- The UI toggle does not affect iframe content — it only hides or shows the control panels.

---

## Author

**Mitsuki Tsukihara** (tsukki)  
Engineer / Occasional Coder  

---

## License

Specify your license here, e.g., MIT License, if applicable.
