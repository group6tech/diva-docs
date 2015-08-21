---
title: How does licensing work?
category: admin
topic: setup
sortOrder: 3
---

Your DIVA license determines how much drive space you can use.

The maximum size of each pool is stored on the [license key](/v2/articles/glossary-advanced.html#license-key).

As an example, the following diagram shows there are two pools to a DIVA License, an Avid Pool and a Basic Pool.
Each pool in this example is licensed to a capacity of 48 TB.

<figure>
	<img src="/images/v2/license/license-pool-empty.png" alt="Empty license pool"/>
</figure>

On assigning a node's volume to a pool (below), the available pool's license is reduced.

For example, if on Node 1, Storage Device P: (1 TB) and Storage Device M: (40 TB) are assigned to the Avid Pool (48 TB license), the pool license is reduced by 41 TB and there is 7 TB of available license remaining to which other volumes, e.g., hard disks) can be assigned. Node 2's volume 'Storage Device M: (48 TB)' is assigned to the Basic Pool (Also a 48 TB license), and as a result, the Basic Pool's license is fully allocated.

<figure>
	<img src="/images/v2/license/license-pool-partial.png" alt="Partially full license pool"/>
</figure>

<div class="note note--info">
	<h4 class="note__title"><i class="fa fa-info-circle"></i> Info</h4>
	<p>Once a node volume is assigned to a pool, the volume is referred to as a <strong>DIVA Volume</strong>.</p>
</div>

The following diagram illustrates how volumes from different nodes can be assigned to a license.

<figure>
	<img src="/images/v2/license/license-pool-full.png" alt="Full license pool"/>
</figure>
