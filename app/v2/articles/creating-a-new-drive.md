---
title: Creating a new Drive
category: admin
topic: drives
sortOrder: 1
---

The following diagram identifies the drives that can be added to a particular volume.

<figure>
	<img src="/images/v2/drives/drive-types-for-volumes.png" alt="Allowed drive types for each pool"/>
	<figcaption>Drives & Volumes</figcaption>
</figure>

If the volume is assigned to an Avid Pool, drives of any type (Basic, Media & Project) can be added to it.
If the volume is assigned to a Basic Pool, only Basic Drives can be added to the volume.

<div class="note note--info">
	<h4 class="note__title"><i class="fa fa-info-circle"></i> Note</h4>
	<p>These drives are not physical storage devices; they are virtual drives that reside on the volume (storage device). When mounted by a user on a Windows PC, the drive is assigned a drive number.</p>
	<p>On Basic drives and projects drives, using Avid, you cannot create Avid MXF files.</p>
</div>

<div class="note note--default note--collapse">
	<h4 class="note__title"><i class="fa fa-hand-stop-o"></i> Before you begin</h4>
	<div class="note__body">
		<p>Before creating a drive, ensure you've <a href="/v2/articles/adding-a-node-volume-to-the-license-pool.html">added a volume to the license pool</a>.</p>
	</div>
</div>

## To add a drive to a volume

1. ![Click Drives, then Drives](/images/v2/drives/drives-menu.png)
	From DIVA Fusion's **Drives** menu, click **Drives**.
2. ![Click New Drive](/images/v2/drives/create-new-drive-btn.png)
	Click **New Drive**.
3. ![Select a volume](/images/v2/drives/create-select-volume.png)
	From the **Volume** drop down menu, select the relevant volume.
4. ![Enter the drive name](/images/v2/drives/create-drive-name.png)
	In the **Drive Name** field, type the name that you want to call this drive.
	<p class="text-muted">You can use uppercase and lowercase letters, numerals, dashes and underscores. Do not use slashes or any other special characters.</p>
5. ![Set the drive type](/images/v2/drives/create-drive-type.png)
	Select the relevant **Drive Type**.
	<p class="text-muted">The available options will vary based on the selected Volume, and whether or not project drives are allowed on the volume.</p>
6. ![Check enabled](/images/v2/drives/create-enabled.png)
	Ensure **Enabled** is checked.
	<p class="text-muted">If you un-check this option, users will not be able to access the drive.</p>
7. ![Click save](/images/v2/drives/create-save-btn.png)
	Click **Save Drive**.

<div class="note note--success">
	<h4 class="note__title"><i class="fa fa-check-circle"></i> Result</h4>
	<p>It's now time to <a href="/v2/articles/managing-access-to-a-drive.html">grant users access</a> to the drive.</p>
</div>
