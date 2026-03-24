# Tatzi - Concept Document

> **Source of truth for the Tatzi product vision.**
> This document describes _what_ the app is and _how it should work_ conceptually.
> It is not a technical specification — it defines the product, not the implementation.

---

## 1. Overview

**Tatzi** is a mobile platform that connects people who want tattoos with tattoo artists near them.

- **For clients:** Tatzi is a showcase of tattoo artists near you. It helps you discover new talent easily and express yourself through your body.
- **For artists:** Tatzi is your platform to reach everyone in your local area and let your work speak for yourself.

The name "Tatzi" is a playful derivation of "tattoo" / "tatuar."

---

## 2. Problem Statement

The most common way to find a tattoo artist today is through word-of-mouth recommendations. The internet alternatives are poor:

- Searching "tattoo" on Instagram or Facebook only surfaces artists who happen to include that word in their name or bio. Great artists with creative or unconventional names get buried.
- General-purpose social media search engines are not optimized for this kind of discovery. There is no way to filter by tattoo style, location proximity, or portfolio quality.
- There is no dedicated two-way pipeline between tattoo artists and potential clients.

Tatzi solves this by providing a purpose-built platform where artists are effortlessly discoverable by location and style, and where their work is the primary interface — no algorithmic guesswork, no SEO tricks, just talent on display.

---

## 3. Target Audience

### 3.1 Clients (People Seeking Tattoos)

Anyone who wants to discover tattoo artists, browse portfolios, find inspiration, save ideas, and ultimately connect with an artist to get tattooed. No age or demographic restriction — if you want a tattoo, Tatzi is for you.

### 3.2 Tattoo Artists

Independent tattoo artists and studios looking to reach local clients and showcase their work. Artists are the supply side of the marketplace and also the paying customers of the platform (see [Business Model](#8-business-model)).

### 3.3 Studios

For the MVP, a studio is treated as a single artist account. The only difference is the name and profile image (which represent the studio rather than an individual). If multiple artists work at a studio, the studio account can specify in individual post descriptions who created each piece.

---

## 4. User Roles & Accounts

### 4.1 Client Account

A client account is free, with no trial or expiration.

**What clients can do:**

- Browse and discover artists by location and style
- View artist profiles and full portfolios
- View the feed of new posts from followed artists
- Follow artists
- Save artists for later
- Like posts (tattoos and designs)
- Message artists (to inquire about pricing, availability, etc.)
- Leave reviews for artists
- Be tagged in a tattoo post by an artist (to show tattoos they received)
- Share artist profiles and posts externally via link

**What clients cannot do without an account:**

- Follow, save, like, message, or review. Browsing is available without authentication, but all interactions require signing in.

**Client profile (visible only to the client themselves):**

- Profile picture
- Tattoos received (posts where the client was tagged by an artist)
- Number and list of followed artists
- Saved artists list
- Reviews they have written

### 4.2 Artist Account

An artist account is subscription-based (see [Business Model](#8-business-model)). New artists receive a **one-month free trial** with no credit card required. After the trial, a paid subscription is required to maintain a presence on the platform.

**What artists can do:**

- Create and manage their profile
- Post artworks (completed tattoos) and designs (flash / available pieces)
- Tag clients in tattoo posts
- Arrange their portfolio order
- Receive and respond to messages from clients
- Schedule dates with clients via Google Calendar integration (from within a chat)
- Receive reviews

**Artist profile (publicly visible):**

- Profile picture
- Name / studio name
- Location (city / area)
- Number of followers
- Number of posts
- Number of times saved by clients
- Portfolio of works and designs (chronological by default, rearrangeable by the artist)
- Workstation pictures (available on Pro tier and above)
- Reviews received
- Links to other social media profiles

### 4.3 Guest (No Account)

Users can browse the app without creating an account. They can view artist profiles, portfolios, and the designs gallery. They cannot follow, save, like, message, or leave reviews.

---

## 5. Core Features

### 5.1 Discovery / Explore

The primary way clients find new artists.

- **Location-based:** All artists that match the client's selected location (or nearby area) are displayed. For the MVP, location matching works by zone — both clients and artists select their location from a list of countries, states, and cities. No GPS or fine-grained geolocation is needed initially.
- **Style filtering:** Clients can browse by tattoo style (e.g., Blackwork, Realism, Traditional, Minimalism, Anime, etc.). Tapping a style navigates to a dedicated results page showing artists who work in that style and posts (tattoos/designs) that match it.
- **Artist cards:** Each artist is represented by a card showing their name, profile image, location, a preview of their work, the styles they work in, their rating, and quick actions (follow, save).

### 5.2 Posts

A post is the fundamental content unit on Tatzi. It is always an image with a description.

**Two types of posts:**

1. **Tattoo (artwork):** A photo of a completed tattoo. The artist can tag the client who received it.
2. **Design (flash):** A drawing or design that is available to be tattooed. The artist can mark a design as either **one-time exclusive** (once claimed/tattooed, it is no longer available) or **reusable** (can be tattooed on multiple clients).

Posts are the only type of content artists can publish. There are no text-only posts, stories, or announcements — Tatzi is exclusively a portfolio and discovery platform. Artists can link to their other social media profiles for everything else.

### 5.3 Feed

A chronological timeline of new posts from artists the client follows. This is how clients stay up to date with artists they already know and like.

- For the MVP, the feed is strictly **chronological** (newest first, no algorithmic ranking).
- **Sponsored posts** from artists on the Ultimate subscription tier appear in the feed of **all users**, not just their followers — functioning as promoted content to attract new clients.

### 5.4 Designs Gallery

A dedicated section (accessible via the bottom navigation) that shows all posts marked as **designs** — available flash tattoo art from all artists. This is a browsing/inspiration experience separate from the main explore or feed.

Clients can scroll through designs and when they find something they like, they can view the full post, see the artist, and take action (like, save, follow, or message).

### 5.5 Post Detail View

When a client taps on any tattoo or design image (from the feed, explore page, designs gallery, or an artist's profile), they see the full post:

- Full-size image
- Description written by the artist
- Number of likes
- Actions available: like the post, save the artist, follow the artist, message the artist
- For designs: indication of whether it is exclusive or reusable, and whether it is still available

### 5.6 Artist Profile Page

When a client taps on an artist card or artist name anywhere in the app, they navigate to the full artist profile:

- Profile picture and name
- Location
- Follower count, post count, saved count
- Workstation pictures (Pro tier and above)
- Full portfolio — all posts in chronological order by default. Artists can rearrange the order.
- Reviews section
- Links to external social media
- Actions: follow, save, message

### 5.7 Messaging

A basic in-app messaging system for clients to contact artists.

- **Only clients can initiate conversations.** Artists can respond but cannot start a conversation with a client.
- The primary purpose is for clients to inquire about pricing, availability, and to discuss tattoo ideas.
- **Pricing is never listed publicly.** It is always communicated through conversation, as it depends on the specific piece, size, placement, and other factors.
- Artists have a **quick-schedule button** within a chat that allows them to set a date and time with the client, integrated with Google Calendar.
- Messages are accessed via the message icon in the top bar (not a separate bottom tab).

### 5.8 Follow System

Clients can follow artists. Following means:

- The artist's new posts appear in the client's feed.
- The follow count on the artist's profile increases.
- The artist appears in the client's "following" list on their profile.

### 5.9 Save System

Clients can save artists for later. Saving is a bookmarking/shortlist feature:

- Saved artists appear in the client's "saved" list on their profile.
- The save count on the artist's profile increases (publicly visible — it builds social proof).
- Saving is distinct from following: you might save an artist you're considering for your next tattoo without necessarily wanting to see all their new posts in your feed.

### 5.10 Likes

Clients can like individual posts (tattoos and designs). The like count is visible on the post. Likes are a lightweight way to interact with content without committing to follow or save.

### 5.11 Reviews

Clients can leave reviews for artists. For the MVP, anyone can leave a review (no restriction to verified clients). Moderation is manual, on request.

**A review consists of:**

- Star rating (1 to 5)
- Written text
- Photos (e.g., of the healed tattoo)

Reviews are displayed on the artist's profile and contribute to their average rating.

### 5.12 Sharing

Clients can share artist profiles and individual posts externally via a link. This enables word-of-mouth spread through WhatsApp, Instagram, and other channels — complementing the organic discovery that Tatzi was built to enhance.

### 5.13 Tagging

When an artist uploads a completed tattoo post, they can tag the client who received it. The tagged tattoo then appears on the client's profile under their "tattoos received" section, building a personal tattoo collection for the client over time.

---

## 6. Screen Structure & Navigation

### 6.1 Top Bar (persistent, visible on all screens)

- **Left:** Location indicator showing the client's selected location. Tappable to change location.
- **Right:** Message icon with a notification badge showing unread message count. Tapping opens the messages list.

### 6.2 Bottom Tab Navigation (4 tabs)

| Tab     | Icon           | Screen          | Purpose                                   |
| ------- | -------------- | --------------- | ----------------------------------------- |
| Feed    | Home           | Feed            | Chronological posts from followed artists |
| Explore | Search/Magnify | Explore         | Discover artists by location and style    |
| Designs | Book/Gallery   | Designs Gallery | Browse all available flash designs        |
| Profile | Person         | Client Profile  | View own profile, follows, saves, reviews |

### 6.3 Screens Accessible via Navigation (not tabs)

- **Style Results Page** — reached by tapping a style on the Explore screen. Shows filtered artists and posts matching that style.
- **Artist Profile Page** — reached by tapping an artist card anywhere.
- **Post Detail View** — reached by tapping a post image anywhere.
- **Messages List** — reached by tapping the message icon in the top bar.
- **Chat Screen** — reached by tapping a conversation or by messaging an artist from their profile / a post.
- **Location Selector** — reached by tapping the location in the top bar.
- **Settings / Account** — reached from the profile screen.

---

## 7. Data Entities (Conceptual)

These are the core concepts in Tatzi, described without implementation details.

### 7.1 Client

A person looking for tattoo artists. Has a profile picture, a selected location, a list of followed artists, saved artists, liked posts, reviews written, and tattoos received (tagged by artists).

### 7.2 Artist

A tattoo artist or studio. Has a profile (picture, name, location, bio, social links), a portfolio of posts, workstation pictures, reviews received, and follower/save/post counts. Operates under a subscription tier.

### 7.3 Post

An image with a description, published by an artist. Categorized as either a **tattoo** (completed work, optionally tagging a client) or a **design** (available flash art, marked as exclusive or reusable). Has a like count.

### 7.4 Tattoo Style

A category of tattoo art (e.g., Blackwork, Realism, Traditional, Minimalism, Anime, Micro-realism). Artists declare which styles they work in. Posts are associated with a style. Clients can filter and browse by style.

### 7.5 Review

A client's evaluation of an artist. Composed of a star rating (1-5), written text, and optional photos. Displayed on the artist's profile.

### 7.6 Conversation

A message thread between a client and an artist. Initiated by the client. Contains text messages and supports a quick-schedule action for the artist to set an appointment date/time via Google Calendar.

### 7.7 Location

A geographic area used for matching clients with nearby artists. For the MVP, this is a hierarchical selection: country > state/province > city/area. Both clients and artists select their location from the same list.

### 7.8 Subscription

An artist's payment tier. Determines what features the artist has access to (see [Business Model](#8-business-model)).

---

## 8. Business Model

Tatzi is free for clients. Revenue comes from **artist subscriptions** (freemium model).

### 8.1 Free Trial

Every new artist account gets **one month free** with no credit card required. During the trial, artists have full access to the Starter tier features. After the trial ends, the artist must subscribe to maintain their presence on the platform.

### 8.2 Subscription Tiers

| Feature                           | Starter          | Pro       | Ultimate   |
| --------------------------------- | ---------------- | --------- | ---------- |
| Post artworks (completed tattoos) | Up to 3 per week | Unlimited | Unlimited  |
| Post designs (flash)              | Up to 3 per week | Unlimited | Unlimited  |
| Workstation pictures              | No               | Yes       | Yes        |
| Promoted post in feed             | No               | No        | 1 per week |
| Receive messages                  | Yes              | Yes       | Yes        |
| Google Calendar scheduling        | Yes              | Yes       | Yes        |
| Profile visibility                | Yes              | Yes       | Yes        |

### 8.3 What Happens After Trial Without Subscribing

If an artist does not subscribe after the one-month free trial, **their account is no longer active on the platform**. Their profile and posts are not visible to clients. They must subscribe to restore their presence.

---

## 9. Authentication

### 9.1 MVP

- **Google SSO (Single Sign-On)** is the only authentication method for the MVP. It is the cleanest and fastest approach for both clients and artists.
- Account type (client or artist) is selected during onboarding after authentication.

### 9.2 Guest Access

- Users can browse the app without signing in.
- All interaction features (follow, save, like, message, review) require authentication.

---

## 10. Language & Localization

- The app's UI text is in **Argentine Spanish** (using voseo forms: "elegi" instead of "elige", "cerca tuyo" instead of "cerca de ti").
- **Internationalization (i18n) support** is planned for the future to expand to other markets.
- The geographic scope is **global** from the start — the location system supports any country — but the initial launch and user base will be centered in Argentina.

---

## 11. Future Roadmap (Post-MVP)

The following features are planned but explicitly **out of scope for the MVP**:

| Feature                      | Description                                                                      |
| ---------------------------- | -------------------------------------------------------------------------------- |
| **Advanced geolocalization** | GPS-based location detection and proximity radius instead of zone-based matching |
| **Search algorithm**         | Intelligent search across artists, styles, and posts with relevance ranking      |
| **Feed algorithm**           | Algorithmic feed ranking beyond simple chronological order                       |
| **Map view**                 | Visual map showing nearby artists and studios                                    |
| **Artist verification**      | Portfolio review, identity verification, and studio checks for quality assurance |
| **Multi-artist studios**     | Studios as distinct entities with multiple artist profiles linked under them     |
| **Advanced filters**         | Filter by availability, portfolio size, rating threshold, and more               |
| **Internationalization**     | Full i18n support for multiple languages                                         |
| **Push notifications**       | Alerts for new posts from followed artists, messages, and reviews                |
| **Additional auth methods**  | Apple Sign-In, email/password, phone number                                      |

---

## 12. Design Principles

These principles guide all product decisions for Tatzi:

1. **Work speaks first.** The artist's portfolio is the primary interface. Everything else is secondary to the art.
2. **Discovery should be effortless.** Finding great artists near you should take seconds, not hours of scrolling through generic search results.
3. **Purpose-built, not repurposed.** Tatzi is not a social network with tattoo features bolted on. Every screen, feature, and interaction is designed specifically for the tattoo discovery use case.
4. **Local by nature.** Tattoos are an in-person service. Location is a first-class concept, not an afterthought.
5. **Simple for clients, valuable for artists.** Clients get a free, frictionless experience. Artists get a dedicated channel to reach local clients that doesn't exist anywhere else.
