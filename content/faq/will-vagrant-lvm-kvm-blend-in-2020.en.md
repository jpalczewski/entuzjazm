---
title: "Will vagrant, KVM and LVM blend in 2020?"
date: 2020-08-22T20:59:07+02:00
draft: true
tags: ["LVM", "KVM", "vagrant"]
categories: ["efforts"]
---

Short answer - _nope_, there will be only smoke instead.[^1]

<!--more--> 

After a long rehab-break[^rehab], I got back to messing around. I wanted to create VM environment that is easy to manage – having in mind how my setup looks like(dell with nvme + HDD) I wanted to utilise hard drive in smart way - first idea came through my past experience with [qubes](https://www.qubes-os.org/) operating system[^qubes], where LVM thin provisioning were used in order to manage virtual drives and snapshots – moreover, in my scenario vagrant would be the tool that speeds up defining and configuring instances.

So, after countless steps like creating LVM pool, installing vagrant-libvirt plugin[^plugin], vagrant doesn't want to cooperate due to `Snapshots of snapshots are not supported.` . Error which is related with a [4-year-old open issue](https://github.com/vagrant-libvirt/vagrant-libvirt/issues/690). If you look closely again into appropriate place  [^plugin] we can notice that there is an option to specify another pool name - just for curiosity I tested if another pool(directory based on ext4 partition) would be a hotfix  - but not this time.  Due to vagrant internals snapshot is created, but this time with ` Invalid path for Logical Volume. `  error while executing `lvcreate`.

So, maybe a ZFS-based pool would be the answer?  :thinking:

[^plugin]: In case if you are asking - yes, their [documentation](https://github.com/vagrant-libvirt/vagrant-libvirt) mentions use case where you would like to specify storage pool name. 



[^1]: [This seems like an old reference](https://www.youtube.com/watch?v=8Sbizs-qAwY)
[^rehab]: It might be a matter of another entry.

[^ qubes]:  In fact I'm rather recreating similar environment but with kvm instead of xen.