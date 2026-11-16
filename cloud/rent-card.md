# Rent Card

| Instance ID | Type | Region / AZ | Key Name | Launch Date | Up-Time Costs | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| i-0123456789abcdef0 | t2.micro | eu-west-1a | anur-key | 2026-11-16 | $0.0116/hr | Active Stopped |

Rate: 1 USD = 129.50 KES, from Central Bank of Kenya, read 2026-11-16

## The need
Our client needs to host a simple portfolio landing page showcasing local products. The target expectation is around 100 visitors a day, with a dedicated local budget threshold of 1,500 shillings per month.

## Measured
- nproc: 1
- free -m: total 983, used 145, free 420
- uptime: 15:10 up 2:40, 1 user, load average: 0.02, 0.01, 0.00
- df -h: /dev/root 8.0G, used 1.4G, available 6.6G
- uname -m: x86_64
- time: Mon Nov 16 16:15:23 EAT 2026

## What to rent for what
- Instance Type: t2.micro costs $0.0116 per hour on the dated price pack, page 4
- Storage Block: 8GB General Purpose SSD EBS volume costs $0.80 per month on page 12
- Static IP Address: Free while attached to a running instance, otherwise $0.005 per hour on page 18
- Data Transfer: First 100 GB out to the internet is free per month on page 22
- Total Monthly Rent: Approximately $9.15 USD which maps down to 1,185 KES on page 24

## My choice
I recommend this client rent a standard Amazon EC2 t2.micro instance or a basic $3.50 AWS Lightsail plan to host their static assets efficiently.

## Why not bigger, why not smaller
We do not choose a larger instance size because our measured idle memory footprint shows 420MB free out of 983MB, proving a larger tier would be an unnecessary waste of money. We do not choose a smaller instance size because a t2.nano offers only 0.5GB of RAM, which could cause compilation leaks when running system updates or background tasks.

## Lightsail or EC2 for this client
I choose AWS Lightsail for this client because it bundles compute capacity, storage, and data transfer boundaries into a fixed monthly price predictability map that matches their small local budget.
