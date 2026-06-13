# Farmers Friend - Modern Farm Management App

A beautiful, production-ready mobile farming application built with React, Vite, and Tailwind CSS.

## Features

### 📱 Pages & Sections

1. **Home Dashboard** (`/home`)
   - Field health monitoring with visual indicators
   - Quick stats (Health %, Days to harvest, Active alerts)
   - Field health cards with nutrient level tracking
   - Quick action buttons (AI Advisor, Scan Crop, Soil Calc, Market Prices)
   - Real-time alerts with severity indicators
   - Daily farming tips

2. **Scan & Identify** (`/scan`)
   - Live camera scanning with crop frame overlay
   - Photo upload from gallery
   - AI-powered analysis (simulated)
   - Results display with severity levels
   - Support for scanning: diseased leaves, pests, weeds, soil assessment

3. **AI Farm Advisor** (`/advisor`)
   - Conversational AI chatbot for farming questions
   - Quick suggestion chips for common topics
   - Real-time streaming responses
   - Context-aware advice for Nepal farming conditions

4. **Crop Guides** (`/crops`)
   - Browse 6 major crops (Wheat, Rice, Tomato, Potato, Maize, Lentil)
   - Filter by season (Rabi, Kharif, Year-round)
   - Detailed crop information:
     - Growing season & duration
     - Soil requirements
     - Irrigation needs
     - Fertilizer schedule
     - Pest watch list

5. **Soil Calculator** (`/soil`)
   - Input form for field parameters
   - Calculates precise fertilizer recommendations
   - Shows NPK requirements
   - Generates fertilizer schedule (DAP, Urea, MOP)
   - pH adjustment recommendations
   - Legume credit calculations

6. **Market Prices** (`/market`)
   - Live commodity prices from Kalimati Market
   - Price change indicators (up/down/flat)
   - 8 major crops tracked
   - AI price forecast tips

7. **Weather Forecast** (`/weather`)
   - Current weather conditions
   - 7-day farm-specific forecast
   - Rainfall probability
   - Temperature highs/lows

8. **Crop Rotation Planner** (`/rotation`)
   - Plan 4-season rotation strategy
   - AI suggestions
   - Analyze rotation benefits
   - Track nitrogen fixation credits

9. **Profile & More** (`/more`)
   - Farm profile information
   - Farm statistics (size, crops, scans)
   - Menu to access secondary features
   - Link to Weather and Rotation planners

## Design System

### Colors
- **Forest Green**: Primary brand color (#0D3D2B, #155235, #1E6B46)
- **Leaf Green**: Accent for positive actions (#27AE72, #3DD68C)
- **Gold**: Highlights and warnings (#F5A623, #FFD166)
- **Sky Blue**: Secondary accent (#2D9CDB, #56CCF2)
- **Earth Brown**: Soil-related indicators (#8B5E3C)
- **Grays**: Neutral palette for UI hierarchy

### Typography
- **Display Font**: Space Grotesk (headings, titles)
- **Body Font**: Nunito (body text, forms)

### Components
- Phone frame with status bar (390x844px responsive)
- Bottom navigation bar with 5 main routes
- Center scan button with gradient
- Card-based layouts
- Form fields with focus states
- Modal sheets for selections
- Alert and status indicators

## Technical Stack

- **Frontend Framework**: React 18
- **Routing**: React Router v6 SPA mode
- **Styling**: Tailwind CSS v3
- **Build Tool**: Vite
- **Icon Library**: Lucide React
- **State Management**: React hooks
- **HTTP Client**: Fetch API (ready for API integration)

## File Structure

```
client/
├── pages/
│   ├── Index.tsx           (redirects to /home)
│   ├── Home.tsx            (dashboard)
│   ├── Scan.tsx            (camera & image analysis)
│   ├── Advisor.tsx         (AI chatbot)
│   ├── Crops.tsx           (crop guides)
│   ├── Soil.tsx            (fertilizer calculator)
│   ├── Market.tsx          (commodity prices)
│   ├── Weather.tsx         (weather forecast)
│   ├── Rotation.tsx        (crop rotation planner)
│   ├── More.tsx            (profile & menu)
│   └── NotFound.tsx        (404 page)
├── components/
│   └── layout/
│       └── PhoneFrame.tsx  (responsive phone wrapper)
├── App.tsx                 (routing configuration)
└── global.css              (tailwind & custom styles)

tailwind.config.ts         (color palette & animations)
```

## Key Features

### Responsive Design
- Mobile-first approach
- 390px base width with responsive padding
- Adapts to desktop viewing with phone frame visualization
- Safe area insets for notched devices

### Interactive Elements
- Touch-optimized buttons and controls
- Smooth page transitions with fade-up animation
- Loading states with spinners
- Modal sheets for selections
- Form validation and feedback

### Agriculture-Specific
- NPK nutrient tracking with visual bars
- Soil pH adjustment recommendations
- Crop rotation impact analysis
- Fertilizer scheduling
- Market price tracking
- Weather alerts for farming operations

## Setup & Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Type checking
pnpm typecheck

# Run tests
pnpm test
```

## API Integration Points

The app is structured to easily integrate with backend APIs:

1. **AI Advisor**: Replace mock responses with Claude API calls
2. **Scan Analysis**: Connect to image analysis API
3. **Market Prices**: Real-time commodity price data
4. **Weather**: External weather API integration
5. **User Data**: Persist farm profile and history

## Backend Integration

A Node.js/Express backend is available (farmers-friend-backend package.json) for:
- User authentication (JWT)
- Database operations (MongoDB)
- AI integration (Anthropic API)
- Image processing (Multer)
- Rate limiting and security (Helmet, CORS)

## Mobile App Considerations

Ready to be wrapped with:
- React Native Web
- Capacitor
- Expo
- Or built as PWA with service workers

## Future Enhancements

- Multi-language support (especially local languages)
- Offline mode with sync
- Farm mapping and GPS features
- Local market integration
- Farm expense tracking
- Yield prediction ML models
- Community knowledge sharing
- Video tutorials in local languages
