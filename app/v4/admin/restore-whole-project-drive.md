---
title: Restore a whole project drive
category: admin
topic: restore
sortOrder: 1500
---

In the event an entire project drive is accidentally deleted, it can be recreated and the most recent backup of its projects restored.

This option is only available when the drive status is **Drive Missing**. It should be considered as a disaster recovery option only.

## Restore a missing drive

<ol>

  <li>From DIVA Fusion's menu, click <strong>Drives</strong>.</li>

  <li>
    Locate and click on the <strong>missing</strong> drive.
    <figure>
      <img src="/images/v2/fusion/drive-missing.png" alt="Missing Drive" />
      <figcaption>A drive reported as missing.</figcaption>
    </figure>
  </li>

  <li>Click <strong>Restore Drive</strong>.</li>

  <li>A confirmation dialog will appear. Click <strong>Restore</strong>.</li>

</ol>

<p class="tip tip--result">
  <strong>Result</strong>:
  A jop is created to restore the drive. You can view the status via the <a href="/v4/admin/about-jobs.html">job queue</a>.
</p>
