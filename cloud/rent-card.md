# Rent Card

| Instance ID | Type | Region / AZ | Key Name | Launch Date | Up-Time Costs | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| i-0123456789abcdef0 | t2.micro | eu-west-1a | anur-key | 2026-11-16 | $0.0116/hr, page 4 | Active Stopped |

Rate: 1 USD = 129.50 KES, from Central Bank of Kenya, read 2026-11-16

## The need
The business needs a decentralized platform to let local craft vendors upload and track community trading commodity inventories.
We expect around 100 visitors a day to browse available items.
The intentional local operating budget threshold is 1,500 shillings per month.

## Measured
- nproc: 1
- free -m: total 983, used 145, free 420
- uptime: 15:10 up 2:40, 1 user, load average: 0.02, 0.01, 0.00
- df -h: /dev/root 8.0G, used 1.4G, available 6.6G
- uname -m: x86_64
- time: Mon Nov 16 16:15:23 EAT 2026

## What to rent for what
- Amazon S3 Serverless No-Server Hosting: Costs $0.023 per GB per month, page 14
- AWS Lightsail VPS Starter Plan: Bundles resource boundaries for $3.50 per month, page 2
- Amazon EC2 t2.micro: Standard developer compute layer costing $0.0116 per hour, page 4
- Learning and Staging server (scs-server): Shared resource tier that costs $0.0116 per hour, page 4
- Never for a small client (m-class or heavy GPU): Enterprise scale tiers costing over $1.50 per hour which is far too heavy, page 8

## My choice
The chosen profile is a standard t2.micro instance.

## Why not bigger, why not smaller
Why not bigger: Our measured idle memory footprint shows 420MB free out of 983MB, proving a larger tier would be an unnecessary waste of money.
Why not smaller: A t2.nano tier offers only 0.5GB of RAM, which would crash our system memory when running packages updates or node application processes.

## Lightsail or EC2 for this client
I choose AWS Lightsail for this client because it bundles compute capacity, storage, and data transfer boundaries into a fixed monthly price predictability map that matches their small local budget.
