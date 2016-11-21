---
title: Licensing
category: admin
topic: fusion
sortOrder: 100
---

Your DIVA license determines how much drive space you can use.

As an example, the following diagram shows there are two pools to a DIVA License, an Avid Pool and a Basic Pool. Each pool in this example is licensed to a capacity of 48 TB.

![](/images/v2/fusion/license-01.png)

On assigning a node's volume to a pool (below), the available pool's license is reduced.

For example, if on Node 1, Storage Device P: (1 TB) and Storage Device M: (40 TB) are assigned to the Avid Pool (48 TB license), the pool license is reduced by 41 TB and there is 7 TB of available license remaining to which other volumes, e.g., hard disks) can be assigned. Node 2's volume 'Storage Device M: (48 TB)' is assigned to the Basic Pool (Also a 48 TB license), and as a result, the Basic Pool's license is fully allocated.

![](/images/v2/fusion/license-02.png)

<p class="tip">
<strong>Tip</strong>: If one of the node's volumes, e.g., hard disk, is assigned to a pool, the volume is called a 'DIVA Volume'.
</p>

The following diagram illustrates how volumes from different nodes can be assigned to a license.

![](/images/v2/fusion/license-03.png)
