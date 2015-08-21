---
title: Glossary of Advanced Terms
category: admin
---

Drive Set
---------

Incident
--------

Job
---

<a name="license-key"></a>

License Key
-----------

Your DIVA license key is a USB dongle that is plugged into the computer running DIVA Server.

<figure>
	<img src="/images/v2/license/license-key.png" alt="License key"/>
</figure>

With your license key plugged in, you can:

- add volumes to the license pool
- remove volumes from the license pool
- add, modify and delete drives, and
- modify users' access (permissions) to drives.

Without your license key plugged in, you can't do any of the above. However, users can continue to use the current set of volumes and drives.

License Pool
------------

There are two types of license pool: **Avid**, and **Basic**.
Each type of pool is a specific number of terabytes as recorded on the [license key](#license-key), and is the maximum number of terabytes allowed to be used by your DIVA.

If a volume belongs to the **Avid** pool, then any [type of drive](/v2/articles/glossary-basic.html#drive-types) can be created on it.
If a volume belongs to the **Basic** pool, then only **Basic** drives can be created on it.

Read more about [how licensing works](/v2/articles/how-does-licensing-work.html).

Volume
------

A node consists of one or more volumes.
A computer or server that contains one or more storage devices, is an example of a node.
A hard disk (storage device) is an example of a volume.
If a volume is assigned to a DIVA License Pool, the volume is known as a DIVA Volume.

The following diagram shows how volumes from different nodes can be assigned to a license.

<figure>
	<img src="/images/v2/license/license-pool-partial.png" alt="License example">
</figure>
