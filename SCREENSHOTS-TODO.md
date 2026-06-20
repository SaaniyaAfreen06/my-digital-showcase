# Screenshot swap — drop-in checklist

The three projects below now point at clean, descriptively-named image files in
`public/screenshots/`. Each currently holds a **placeholder copy** of the old
image so the live site doesn't show broken images. To finish: take the real
OneInbox screenshot, name it exactly as listed, and overwrite the file in
`public/screenshots/`. No code changes needed — `projects.ts` already references
these names.

Keep PNGs roughly 16:9 (the gallery uses `aspect-video`) for the cleanest crop.

## 1. Onboarding a Voice Agent by Just Talking  (gallery of 3)
- `onboarding-chat.png` — the conversational setup screen (describe-your-agent chat + "magic prompt" suggestions)
- `onboarding-agent.png` — the agent that got auto-configured from the conversation
- `onboarding-review.png` — the editable review screen (showing nothing is locked away)

## 2. Train Your AI Agent Like a Call-Center Rep  (gallery of 2)
- `voice-trainer-interview.png` — the live voice interview with the "trainer" agent
- `voice-trainer-roleplay.png` — the roleplay test call (client plays the customer)
- *(optional 3rd: add `voice-trainer-prompt.png` showing the generated system prompt, then add that path to the `images` array for `cs-voice-interview-agent` in `src/data/projects.ts`)*

## 3. Dial-Ready — Making Uploaded Leads Actually Callable  (single hero)
- `dial-ready.png` — best single shot is the results view with the three buckets (dial-ready / needs country code / no phone)
- *(want a gallery? add e.g. `dial-ready-upload.png` and `dial-ready-buckets.png`, then add an `images: [...]` array to `cs-manus-ai-processor` in `src/data/projects.ts`)*

## After overwriting
The old placeholder source files (`raj-ai-*.png`, `retell-voice*.png`,
`manus-ai.png`) are now unused and can be deleted from `public/screenshots/`.
