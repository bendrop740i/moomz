-- Migration 030 — harden function search_path
--
-- The Supabase linter (function_search_path_mutable) flagged 5 functions with
-- no fixed search_path. None are SECURITY DEFINER, but pinning the path makes
-- name resolution deterministic regardless of the caller's session search_path.
-- Each function only references pg_catalog built-ins (always implicitly first)
-- plus public tables/functions, so `public, pg_temp` is sufficient and fully
-- behaviour-preserving.

alter function public.ask_recent_count(uuid, text)   set search_path = public, pg_temp;
alter function public.is_noisy_question(text)        set search_path = public, pg_temp;
alter function public.pick_random_track(uuid[])      set search_path = public, pg_temp;
alter function public.poll_is_noise(text)            set search_path = public, pg_temp;
alter function public.sweep_dead_polls()             set search_path = public, pg_temp;
