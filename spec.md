# Inspirational Church App

## Current State
New project. No existing code.

## Requested Changes (Diff)

### Add
- Full Bible browsable reader with book/chapter/verse navigation and search
- Bookmarks for favorite Bible verses (persisted in backend)
- Prayer library organized by category (morning, evening, gratitude, healing, strength, protection)
- Save favorite prayers
- Mental Wellness section with anxiety, depression, and stress sub-sections:
  - Scripture-based encouragement cards
  - Guided breathing exercise (animated)
  - Daily check-in mood prompt
  - Devotionals tailored to each emotional need
- Daily Check-In feature: mood selector, verse of the day, personalized encouragement
- Sermon Library with cards (title, description, scripture ref, speaker, date, topic, play/read button)
- Church Finder with cards (name, denomination, address, service times, description)
- App Download landing section with App Store and Google Play badges
- Sign In page: email/password form and Google Sign-In button
- Bottom nav bar (mobile-first), top nav for desktop
- Beautiful hero section with uplifting tagline
- Warm color palette: deep navy blue, gold, soft white, warm cream
- Serif fonts for headings, clean sans for body
- Smooth animations and transitions throughout

### Modify
- Nothing (new project)

### Remove
- Nothing (new project)

## Implementation Plan
1. Backend: store bookmarked Bible verses, saved prayers, daily check-in mood data, and user preferences
2. Frontend pages:
   - Home / Hero landing page
   - Bible Reader (book/chapter/verse nav + search + bookmarks)
   - Prayers (category filter, save favorites)
   - Mental Wellness Hub (anxiety, depression, stress tabs + breathing exercise + devotional)
   - Daily Check-In (mood selector + verse of the day + encouragement)
   - Sermon Library (filter by topic/speaker/date)
   - Church Finder (card grid)
   - Download App section (embedded in home or own page)
   - Sign In page
3. Mock data: Bible verses (sample books), prayers, sermons, churches
4. Bottom nav (mobile) + top nav (desktop)
5. Tailwind custom config for navy/gold/cream palette + serif font (Playfair Display or Georgia)

## UX Notes
- Mobile-first, max-width container for content on desktop
- Bottom nav: Home, Bible, Prayers, Wellness, More (with sermon/church/download/sign-in)
- Smooth page transitions using React Router
- Cards with soft shadows, rounded corners, hover lifts
- Breathing exercise: animated expanding circle with instruction text
- Daily check-in: emoji/icon mood picker, then animated verse reveal
- Sign-in page: centered card, subtle background pattern
- Church finder: map-pin icon, address, service times chip badges
