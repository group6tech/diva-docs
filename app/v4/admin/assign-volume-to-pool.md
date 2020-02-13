---
title: Assign a volume to a license pool
category: admin
topic: volumes
sortOrder: 20
---

Before you can create a drive on a volume, it must be assigned to a license pool.

The diagram below is an example of a typical license. Each license consists of two pools. These pools are:

- an Avid Pool, and
- a Basic Pool.

When a volume is assigned to a license pool, it is referred to as a 'DIVA Volume', it's capacity is registered against the license pool, and the pool's license capacity is correspondingly reduced.

A volume is essentially a storage device. Examples of volumes are:

- Internal hard disks
- External hard disks
- RAID arrays
- Solid state disks

<p class="tip">
  <strong>Tip</strong>: Only internal volumes can be configured as DIVA Volumes.
</p>

## Example

If a 30 TB volume is assigned to a 40 TB license pool, 30 TBs of license is used up, leaving 10 TB of license. Other volumes totalling 10 TB can be assigned to the available license.

<figure>
  <img src="/images/v2/fusion/license-04.png" alt="Licenses, Nodes and Volumes"/>
  <figcaption>Licenses, Nodes and Volumes</figcaption>
</figure>

### Before You Begin

Before assigning a volume to the DIVA License Pool, ensure:

- you've [created](/v3/admin/create-node.html) and [configured](/v3/admin/configure-node.html) a Node

## Assign a volume to the DIVA License Pool:

1. On DIVA Fusion's **System** menu, click **Volumes**.

2. From the first drop down menu, select the volume you want to add.

3. From the second drop down menu, select the relevant license pool.

4. Click **+ Add Volume**.

<p class="tip tip--result">
  <strong>Result</strong>: The volume is assigned to the license pool and appears in the list below and the usage graphs are updated. From here on in, it is referred to as a DIVA Volume.
</p>

### What's Next?

The DIVA volume is ready for you to [create drives](/v3/admin/create-drive.html).
