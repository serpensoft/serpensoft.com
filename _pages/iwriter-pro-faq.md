---
layout: single
title: iWriter Pro | Frequently Asked Questions
permalink: /iwriter-pro/iwriter-pro-faq/
faq:
  - question: What is the difference between iWriter and iWriter Pro?
    answer: "The Pro features, such as: Markdown editing and preview, Math formula support, and many others."
  - question: Does iWriter Pro have an URL scheme?
    answer: For now, x-callback-url schemes are not supported.
  - question: How can I save my document? I can't find a save button.
    answer: iWriter Pro implements autosave. You should not care about document saving. All changes are saved automatically.
  - question: I want to know more about MultiMarkdown.
    answer: Great! Please follow this link to [MultiMarkdown Syntax Guide](/iwriter-pro/mmd-syntax-guide/).
  - question: Does iWriter Pro support RTF?
    answer: You can use iWriter Pro for Mac to export your documents as RTF.
  - question: Is automatic light/dark theme switching supported?
    answer: |
     Yes. Automatic theme switching works in tandem with the system’s appearance settings. iWriter Pro "memorizes" chosen themes for both system appearance modes (Light and Dark). For manual appearance selection please navigate to:
        - On iOS: `Settings > Display & Brightness`.
        - On Mac: `System Preferences > General > Appearance`.
  - question: How can I restore a previous version of a document?
    answer: |
      You can do that for iCloud documents. To browse document versions:
        1. Navigate to `iCloud > iWriter Pro`.
        2. Press `Select` button and choose the document.
        3. Press the `Versions` button located on the top navigation bar.  
  - question: How to discover keyboard shortcuts on iPad?
    answer: |
        1. Attach an external keyboard to the iPad (e.g. Apple Magic Keyboard).
        2. Tap the editor's field.
        3. Press and hold the command button (⌘).
  - question: How to find the Word Counter and Shortcuts menus on iPad?
    answer: |
      Word Counter and Shortcuts are located on the system keyboard.
        1. Enable the `Autocorrection` option in `Settings > Text Editing`.
        2. Begin editing text.
        3. The required buttons will be located in the top right corner.

        ![](/assets/images/help/kb_shortcuts.jpeg){: width="50%" }
 
  - question: How to open a split-screen on iPad?
    answer: |
      iWriter Pro supports the multi-window mode starting with iOS 13. 
      You can use this feature to edit a Markdown document and observe its Preview at the same time.
        1. Open two copies of iWriter Pro on iPad.
        2. Open the same document on the left and on the right.
        3. Activate Preview in any window.
        4. The Preview gets automatically updated when you edit the document.
  
  - question: What about Dropbox support?
    answer: You will need the Dropbox app (on iOS and Mac) to be able to open and edit files stored there. The same goes for Google Drive and other 3rd-party storage providers. Please note, some developers have incomplete support of iOS protocols; therefore, you may be missing some features.
  
  - question: I cannot insert image from the Photo Library on iOS.
    answer: Use iWriter Pro’s folders when inserting images. Importing images from Photo Library or Camera saves them next to the document. iOS sandboxes restrict access to 3rd-party folders. To fix this, copy your document to any iWriter Pro folder (local or iCloud).

  - question: I get an error message when trying to rename a document.
    answer: |
      Files outside iWriter Pro’s folders can’t be renamed from within the editor due to iOS security restrictions. Privacy settings can’t lift this issue. iWriter Pro has full access to its local and iCloud folders, which can be found by the app icon. 

      Rename files from within the Document Menu. Tap and hold a file, then choose `Rename`.

      ![](/assets/images/help/renaming.jpg){: width="50%" }

  - question: Is there a Mac version?
    answer: iWriter Pro for Mac is available [here](https://apps.apple.com/app/iwriter-pro/id893199093).
  
  - question: Where can I find privacy policy for iWriter Pro?
    answer: You can read it [here](/privacy-policy/).

  - question: I have another question…
    answer: If you have a question that is not covered here, <script>contact_us("contact us", "iWriter Pro - Feedback")</script> and we'll answer as best as we can. We take a break on the weekends, but during weekdays we aim to reply within 1-2 business days. Please note that the more detailed your description is, the quicker and better we can answer. The device model, correct app name, OS version, or screenshots will also help a lot.

  - question: I have a feature request…
    answer: You can send your request via e-mail <script>contact_us("here", "iWriter Pro - Feature Request")</script>. Please note that not all features can be added to the final product. Leaving a one-star comment on the App Store while asking for a feature has never helped anyone.
---

<link href="/assets/styles.css" rel="stylesheet">
<section class="content-floating">
<div class="accordion-wrapper" style="margin-bottom: 50px;">
	{% for item in page.faq %}
        <button class="accordion">{{ item.question }}</button>
        <div class="panel">
            <p>{{ item.answer | markdownify }}</p>
        </div>
	{% endfor %}
</div>
</section>

{% include accordion-js.html %}
