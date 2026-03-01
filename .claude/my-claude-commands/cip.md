allowed-tools: Bash(git*,vercel*)
description: Commit, push to main, and deploy to Vercel
---
1. Check status: !git status --short && !git diff --staged

2. Suggest a commit message based on changes, then: !git commit -m "$ARGUMENTS" (use provided message or default "WIP").

3. !git push origin main

4. !vercel --prod

Output the Vercel deployment URL.
