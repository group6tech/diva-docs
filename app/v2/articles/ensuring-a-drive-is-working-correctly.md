---
title: Ensuring a Drive is working correctly with a Health Check
category: admin
topic: drives
sortOrder: 6
---

A health check will clean up permissions and will re-enable the drive.
If anyone has the drive mounted, it cannot be checked.
A health check can take anything from seconds to hours to complete depending the amount of data on the drive.

The health check takes about **1 minute per TB**, or **1 minute per 10,000 files**, whichever is higher. For example:

- for a 5 terabyte drive with 2,000 files, allow 5 minutes, and
- for a 3 terabyte drive with 80,000 files, allow 8 minutes.

<div class="note note--warning">
	<h4 class="note__title"><i class="fa fa-exclamation-triangle"></i> Health Checks</h4>
	<p>Only perform a health check on a drive when you are certain your users have no need to use the drive. When a health check is in progress, the drive cannot be mounted and other jobs on the node, e.g., adding drives to the same node, cannot be initiated.</p>
</div>

## To perform a health check

1. ![Navigate to Drives](/images/v2/drives/drives-menu.png)
	From DIVA Fusion's **Drives** menu, click **Drives**.
2. ![Select the drive](/images/v2/drives/drive-select.png)
	Locate and click the relevant drive.
3. ![Click Health Check from the Tools menu](/images/v2/drives/health-check-btn.png)
	At the bottom of the page, from the **Tools** drop down menu, click **Health Check**.

<div class="note note--success">
	<h4 class="note__title"><i class="fa fa-check-circle"></i> Result</h4>
	<p>The drive is placed into <strong>Maintenance</strong> mode, and can no longer be mounted by users.</p>
	<p>Check the <a href="/v2/articles/managing-the-job-queue.html">Job Queue</a> for the healh check job to complete, which then returns the drive to an <strong>Online</strong> status.</p>
</div>
