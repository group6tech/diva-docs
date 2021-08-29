---
title: Locking and unlocking bins
category: editor
topic: projects
sortOrder: 1000
---

A project on a [DIVFS](/v4/editor/about-divafs.html) enabled Avid Project drive allows for native Avid Media Composer bin locking.

Any user with write access to the drive can make changes to any bin on the drive.



## Locking a bin by opening it

When you open a bin it becomes locked for your exclusive use. Other users will not be able to make a change to that bin while you have it open.

You can tell you have the lock on a bin by the green padlock at the bottom of the bin window.

The name of the computer which has the bin open also appears next to the bin in the project window.
Note this is the name of the **computer** which has the bin open, and not the DIVA or even the computer username.

<figure>
  <img src="/images/v3/open-bin.png" alt="Open bin" />
  <figcaption>A bin open and locked on the computer 'G6-WIN10'.</figcaption>
</figure>



## Opening a locked bin

When a bin is open by a user not yourself, it appears in the project window in bold with the name of the computer which has it open and locked.

If you open the bin a red padlock indicates it is locked and changes cannot be made.

<figure>
  <img src="/images/v3/locked-bin.png" alt="Locked bin" />
  <figcaption>A bin open and locked on a different computer called 'DIVAFS High Sierra'.</figcaption>
</figure>

If you do attempt to save a locked bin you will be prompted to save it as a different name.

<figure>
  <img src="/images/v3/save-locked-bin-as.png" alt="Save locked bin" />
  <figcaption>A prompt to save a locked bin with a new name.</figcaption>
</figure>


## Manually locking a bin

You can lock a bin without having it open. If you do open the bin and close it, it will remain locked.

1. Select the bin in the **project window**.

1. **Right click** the bin.

1. Click **Lock Project Bin**.

You can also **unlock** the bin from the same menu.