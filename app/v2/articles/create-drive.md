---
title: Create a drive
category: admin
topic: drives
sortOrder: 100
common: true
---

The following diagram identifies the DIVA drives that can be added to a particular volume.

<figure>
  <img src="/images/v2/fusion/license-05.png" alt="Drives & volumes"/>
  <figcaption>Drives & volumes</figcaption>
</figure>

If the volume is assigned to an Avid Pool, DIVA drives of any type (Basic, Media & Project) can be added to it. If the volume is assigned to a Basic Pool, only Basic Drives can be added to the volume.

<p class="note"><strong>Note</strong>: These drives are not physical storage devices; they are virtual drives that reside on the volume (storage device). When mounted by a user on a Windows PC, the drive is assigned a drive number.</p>

<p class="note"><strong>Note</strong>: On Basic drives and projects drives, using Avid, you cannot create Avid MXF files.</p>

<p class="note"><strong>Note</strong>: You can only add a Project drive to a media or projects volume if it is permitted for that volume. To permit or prevent project drives from being added to a volume, see <a href="/v2/articles/allow-project-drive-on-volume.html">Allow Avid Project drives on a volume</a>.</p>

## Create a DIVA drive

<ol>

  <li>From DIVA Fusion's <strong>Drives</strong> menu, click <strong>Drives</strong>.</li>

  <li>Click <strong>New Drive</strong>.</li>

  <li>From the <strong>Drive Type</strong> drop down menu, select relevant drive type.</li>

  <li>
    In the <strong>Name</strong> field, type the name that you want to call this drive.
    <p class="note"><strong>Note</strong>: You cannot use the characters < > : " / \ | ? * </p>
  </li>

  <li>
    From the <strong>Volume</strong> drop down menu, select the relevant volume.
    <p class="note"><strong>Note</strong>: The available options will changed depending on what Drive Type you selected.</p>
  </li>

  <li>
    Ensure the <strong>Enabled</strong> checkbox is checked.
    <p class="note"><strong>Note</strong>: If you deselect this option, users will not be able to access the drive.</p>
  </li>

  <li>Click <strong>Save Drive</strong>.</li>

</ol>

### What's next?

- [Set drive access](/v2/articles/set-drive-access.html)
- [Set user's drive access](/v2/articles/set-user-drive-access.html)
