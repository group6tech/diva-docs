---
title: Adding a Node Volume to the License Pool
category: admin
topic: nodes
sortOrder: 4
---

The diagram below is an example of a typical license. Each license consists of two pools. These pools are:

- an Avid Pool, and
- a Basic Pool.

When a volume is assigned to a license pool, it is referred to as a **DIVA Volume**, it's capacity is registered against the license pool, and the pool's license capacity is correspondingly reduced.

A volume is essentially a storage device. Examples of volumes are:

- Internal Hard Disks
- RAID Arrays
- High Performance Flash Storage

#### Example

If a 30 TB volume is assigned to a 40 TB license pool, 30 TBs of license is used up, leaving 10 TB of license.
Other volumes totaling 10 TB can be assigned to the available license.

<figure>
	<img src="/images/v2/license/license-breakdown.png" alt="Breakdown of a license"/>
	<figcaption>Licenses, Nodes and Volumes</figcaption>
</figure>

<div class="note note--default note--collapse">
	<h4 class="note__title"><i class="fa fa-hand-stop-o"></i> Before you begin</h4>
	<div class="note__body">
		<p>Before assigning a volume to the DIVA License Pool, ensure you've <a href="/v2/articles/installing-diva-node.html">connected at least one node</a>.</p>
	</div>
</div>

## To assign a volume to the DIVA License Pool

1. ![Click Drives, then Volumes](/images/v2/nodes/volumes-menu.png)
	On DIVA Fusion's **Drives** menu, click **Volumes**.
2. ![Select the volume](/images/v2/nodes/volumes-add-select-volume.png)
	From the first drop down menu, select the relevant node volume.
3. ![Select the pool](/images/v2/nodes/volumes-add-select-pool.png)
	From the second drop down menu, select the relevant license pool type.
4. ![Click Add Volume](/images/v2/nodes/volumes-add-button.png)
	Click **<i class="fa fa-plus"></i> Add Volume**.

<div class="note note--success">
	<h4 class="note__title"><i class="fa fa-check-circle"></i> Result</h4>
	<p>The volume is assigned to the license pool and appears in the list below and the usage graphs are updated. From here on in, it is referred to as a DIVA Volume.</p>
</div>

<div class="note note--info">
	<h4 class="note__title"><i class="fa fa-question-circle"></i> What's next?</h4>
	<p>The DIVA volume is ready for you to <a href="/v2/articles/creating-a-new-drive.html">add drives</a>.</p>
</div>
