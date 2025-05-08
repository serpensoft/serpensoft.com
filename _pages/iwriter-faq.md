---
layout: single
title: iWriter | Frequently Asked Questions
permalink: /iwriter/iwriter-faq/
faq:
  - question: What is the difference between iWriter and iWriter Pro?
    answer: "The Pro features, such as: Markdown editing and preview, Math formula support, and many others."
  - question: How can I save my document? I can’t find a save button.
    answer: iWriter implements autosave feature. You should not care about document saving. All changes are saved automatically.
  - question: How can I restore a previous version of a document?
    answer: |
      You can do that for iCloud documents. To browse document’s versions:

      1. Navigate to `iCloud > iWriter`.
      2. Press `Select` and choose the document.
      3. Press the `Versions` button located on the top navigation bar.
  - question: How to discover keyboard shortcuts on iPad?
    answer: |
      1. Attach the external keyboard to iPad.
      2. Tap the editor’s field.
      3. Press and hold the command button (⌘).
  - question: Does iWriter support RTF?
    answer: iWriter doesn’t have RTF support. You can use iWriter Pro for Mac to export your documents as RTF.
  - question: Is there a Mac version?
    answer: iWriter doesn’t have a Mac version. iWriter Pro has both iOS and Mac versions.
  - question: I have another question…
    answer: If you have a question that is not covered here, <script>contact_us("contact us", "iWriter - Feedback")</script> and we’ll answer as best as we can. We take a break on the weekends, but during weekdays we aim to reply within 1–2 business days. Please note that the more detailed your description is, the quicker and better we can answer. The device model, correct app name, OS version, or screenshots will also help a lot.
---

<link href="/assets/styles.css" rel="stylesheet" />
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
