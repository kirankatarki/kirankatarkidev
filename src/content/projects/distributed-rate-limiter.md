---
title: Distributed rate limiter
description: Sliding window rate limiting with Redis backend
techStack: [Redis, Python]
github: https://github.com/kirankatarki/distributed-rate-limiter
featured: true
order: 1
---

## Overview

A distributed rate limiter implementing the sliding window algorithm using Redis as the backend store. Designed to handle high-throughput API traffic across multiple service instances without a single point of failure.

## How it works

The sliding window algorithm tracks request counts within a rolling time window rather than fixed intervals. This eliminates the boundary spike problem common in fixed-window implementations.

Redis is used as the shared state store -- each instance of the service reads and writes to the same Redis keys, making the rate limiting consistent across horizontally scaled deployments.

## Key decisions

- Redis atomic operations (ZADD, ZREMRANGEBYSCORE, ZCARD) keep each request check race-condition free
- TTL on keys ensures automatic cleanup with no background jobs needed
- Configurable window size and request limit per route
