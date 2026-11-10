# OD CRT Contact Directory

A free, static, mobile-friendly district and area contact directory for GitHub Pages.

## Included files
- `index.html` — website, search, district and TI NGO filters, clickable phone numbers.
- `contacts.js` — 80 contact records imported from the supplied Excel file.

## Publish using GitHub Pages
1. Create a **public** GitHub repository (for example, `od-crt-contact-directory`).
2. Upload `index.html` and `contacts.js` to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose branch **main** and folder **/(root)**, then Save.
6. Wait a few minutes. Your site will be published at:
   `https://YOUR-USERNAME.github.io/od-crt-contact-directory/`

## Update contact details
Edit `contacts.js`. It contains a JavaScript array named `CONTACTS`. Each record has:
`sl`, `district`, `area`, `name`, `designation`, `ngo`, `phone1`, and `phone2`.

Use empty string `""` if a second phone number is unavailable. Keep phone numbers in quotes so leading zeroes are preserved. Commit the change to GitHub; Pages will republish automatically.

## Important data checks before public release
The supplied spreadsheet has been imported as provided. Please verify the source data before publishing:
- One phone number appears to contain 11 digits (`70053153543`) and may need correction.
- The district spelling `Kamjing` appears in the source; confirm whether it should be `Kamjong`.
- The source includes repeated serial numbers and repeated/possibly duplicated phone numbers. These have been preserved rather than silently changed.

## Privacy
Phone numbers and contact names will be visible to anyone who can access the public site. Publish only contact details approved for public distribution. If this directory is for restricted staff use, do not assume a public GitHub Pages site is private.
