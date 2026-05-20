-- 2026-05-20: Guard against a true fresh-from-scratch apply.
--
-- Migration 002 (and several others) ALTER `profiles` to add columns without
-- ever CREATEing it. The live DB is fine because Supabase Auth created the
-- table once and column adds are idempotent, but a fresh env replaying every
-- migration in order would error.
--
-- This guard simply ensures the table exists with a sensible base shape.
-- All subsequent `add column if not exists` migrations remain idempotent,
-- so this is safe to insert anywhere in the chain.
--
-- Idempotent — safe to re-run.

create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key default gen_random_uuid()
);
