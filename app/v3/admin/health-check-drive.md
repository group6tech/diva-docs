---
title: Health check a drive
category: admin
topic: drives
sortOrder: 1000
---

A health check will clean up permissions and will re-enable the drive. If anyone has the drive mounted, it cannot be checked. A health check can take anything from seconds to hours to complete depending the amount of data on the drive. Please allow up to an hour on average.

The health check takes about 1 minute per TB, or 1 minute per 10,000 files, whichever is higher. For example:

  - for a 5 terabyte drive with 2,000 files, allow 5 minutes, and
  - for a 3 terabyte drive with 80,000 files, allow 8 minutes.

<p class="tip">
  <strong>Tip</strong>:
  Only perform a health check on a drive when you are certain your users have no need to use the drive. When a health check is in progress, the drive cannot be mounted and other jobs on the node, e.g., adding drives to the same node, cannot be initiated.
</p>

### Before You Begin

Before performing a health check, ensure no users have the drive mounted.

## Perform a health check immediately:

1. On DIVA Fusion's menu, click **Drives**.

2. Locate and click the relevant **drive**.

3. At the bottom of the page click **Health Check**.
Result: The health check begins.

### Schedule a health check

You cannot normally run a health check while users have the drive mounted. There are two methods to schedule a health check for later.

Click the dropdown arrow next to the **Health Check** button to access these options.

<ul>

  <li>
    <strong>During maintenance window</strong> will check the drive when the maintenance window starts, no matter what users have the drive mounted.
    <p class="note">Note</strong>: Any users who have the drive mounted will probably be disconnected when the job runs.</p>
  </li>

  <li><strong>When all users unmount</strong> will start a health check approximately one minute after the last connected user unmounts that drive. If no users have the drive mounted the health check will start immediately.</li>

</ul>

As per a normal health check, while the job is running no users will be able to mount the drive.
