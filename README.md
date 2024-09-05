# Fullstack Video Streaming Service With Personalized & Targetted Ads
## Overview

This project is a full-stack video streaming platform with user authentication, subscription management, video search and recommendation, video streaming with ads, and video uploading features.

## Features

### 1. User Authentication & Account Management
- **Features:**
  - User registration with additional questions for personalization.
  - Login, logout, and session management.
  - Profile management and account settings.
- **Tech Stack:**
  - **Frontend (React):**
    - Components: Registration Form, Login Form, Profile Page, Account Settings Page.
    - State Management: React's context or Redux.
    - Validation: Formik and Yup.
  - **Backend (Go):**
    - Authentication: JWT for secure session management.
    - Database: Cassandra for storing user credentials and profile information.
    - APIs: GraphQL mutations for registration, login, and profile updates.
  - **GraphQL:**
    - Queries and Mutations: `registerUser`, `login`, `logout`, `updateUserProfile`, `getUserProfile`.
   
### 2. Video Uploading
- **Features:**
  - Content creators can upload videos and metadata.
- **Tech Stack:**
  - **Frontend (React):**
    - Components: Upload button for video uploads.
  - **Backend (Go):**
    - Stores blob data in AWS S3.
    - Stores metadata in Cassandra.
- **Demo:**
![image](https://github.com/user-attachments/assets/d9bfca28-42dd-444e-a6fc-eec9a1c2c53e)

### 3. Subscription Management
- **Features:**
  - Users can subscribe to different tiers (e.g., Basic, Premium).
  - Payment processing for subscriptions.
- **Tech Stack:**
  - **Frontend (React):**
    - Components: Subscription Plans Page, Payment Form, Subscription Management Page.
    - Payment Integration: Stripe with `react-stripe-js`.
  - **Backend (Go):**
    - Subscription Management: Handle different subscription tiers.
    - Payment Processing: Stripe's Go SDK.
    - APIs: GraphQL mutations for payment processing and subscription management.
  - **GraphQL:**
    - Queries and Mutations: `subscribe`, `cancelSubscription`, `getSubscriptionDetails`.

### 4. Video Search & Recommendation
- **Features:**
  - Search for videos based on various criteria.
  - Personalized video recommendations.
- **Tech Stack:**
  - **Frontend (React):**
    - Components: Search Bar, Search Results Page, Recommendation Section.
    - State Management: Redux or React Context.
  - **Backend (Go):**
    - Search Functionality: Search algorithms for video database queries.
    - Recommendation Engine: Machine learning models or external services.
    - APIs: GraphQL queries for searching and recommendations.
  - **GraphQL:**
    - Queries: `searchVideos`, `getRecommendations`.

### 5. Video Streaming with Ads
- **Features:**
  - Stream videos with embedded ads for certain subscription tiers.
  - Personalized ads based on user data and viewing history.
- **Tech Stack:**
  - **Frontend (React):**
    - Components: Video Player with Ad Integration.
    - Video Streaming: `react-player` or custom players with HLS.
  - **Backend (Go):**
    - Ad Management: Algorithms for ad targeting.
    - Content Delivery: CDN for video content.
    - APIs: GraphQL queries for video content and ads.
  - **GraphQL:**
    - Queries: `getVideoContent`, `getAdsForUser`.

## Architecture Overview

- **Frontend (React):**
  - Interacts with the backend through GraphQL.
  - Implements UI/UX, state management, and components.
- **Backend (Go):**
  - Provides GraphQL API for all operations.
  - Manages business logic, including subscription management, ad targeting, and video streaming.
  - Integrates with external services (e.g., Stripe, CDN).
- **GraphQL:**
  - Interface between frontend and backend.
  - Defines schema, queries, and mutations for various operations.

## Database Design

- **Users Table:** Stores user credentials, profile information, and subscription status.
- **Videos Table:** Stores video metadata, URLs, and localization data.
- **Subscriptions Table:** Tracks user subscriptions and payment history.
- **Ads Table:** Contains ads metadata and targeting criteria.

## Security Considerations

- Use HTTPS for all data transmission.
- Implement input validation and sanitization to prevent SQL injection and XSS attacks.
- Securely store passwords using hashing algorithms like bcrypt.
- Ensure secure payment processing with Stripe or equivalent services.
