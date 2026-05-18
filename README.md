# moomz

Mini SaaS de vibe check / sondages partageables. Crée un sondage en 10s, partage le lien, vois les votes en live.

## Stack

- Next.js 14 (App Router) + TypeScript + Tailwind
- Supabase (Postgres, free tier)
- Déploiement : Vercel (free tier)
- Domaine : moomz.com

## Déployer en 15 min

### 1. Créer le projet Supabase
1. Va sur https://supabase.com → New project (free tier).
2. Quand c'est prêt, ouvre **SQL Editor** → colle le contenu de `supabase-schema.sql` → Run.
3. **Project Settings → API** : note `Project URL` et `anon public key`.

### 2. Tester en local
```bash
cd moomz
npm install
cp .env.local.example .env.local
# remplis .env.local avec les 2 valeurs Supabase
npm run dev
```
Ouvre http://localhost:3000.

### 3. Push sur GitHub
```bash
git init
git add .
git commit -m "moomz mvp"
gh repo create moomz --public --source=. --push
# ou crée le repo via github.com et:
# git remote add origin https://github.com/<toi>/moomz.git
# git push -u origin main
```

### 4. Déployer sur Vercel
1. https://vercel.com → New Project → import le repo `moomz`.
2. Environment Variables :
   - `NEXT_PUBLIC_SUPABASE_URL` = ton URL Supabase
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = ta clé anon
3. Deploy. (Build automatique ~1 min.)

### 5. Lier moomz.com
1. Vercel → Project → **Settings → Domains** → ajoute `moomz.com` et `www.moomz.com`.
2. Vercel te donne 1-2 enregistrements DNS (A + CNAME, ou nameservers).
3. Va chez ton registrar (Porkbun / OVH / Namecheap…) → modifie le DNS de moomz.com avec ce que Vercel t'a donné.
4. SSL auto en 1-5 min. C'est en ligne.

## Idées V2 (quand t'as 10 utilisateurs)

- Réactions emoji en plus du vote
- Commentaires
- Sondage privé (slug + clé)
- Branding custom (premium)
- Auth Google pour retrouver ses sondages
- Webhook / embed widget
