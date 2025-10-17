# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Resilience Compass is a React-based web application for The Oasis Partnership, designed to help neurodivergent learners discover community opportunities, programs, and support services. The application features a filterable directory of opportunities categorized by interest area and comfort level.

## Tech Stack

- **Framework**: Vite + React 18 + TypeScript
- **UI Library**: shadcn/ui (Radix UI components)
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **State Management**: React hooks (useState, useMemo)
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React

## Development Commands

```bash
# Install dependencies
npm i

# Start development server (runs on http://localhost:8080)
npm run dev

# Build for production
npm run build

# Build for development mode
npm run build:dev

# Run linter
npm run lint

# Preview production build
npm run preview
```

## Architecture

### Data Structure

Opportunities are stored in `src/data/opportunities.json`. Each opportunity has:
- `id`, `title`, `summary`, `description`
- `category` (Creative, Skills, Social, Reflective, Innovation)
- `comfort` (Low, Medium, High) - represents social demand level
- `program` - which Resilience program it belongs to
- `location`, `schedule`
- `image` - identifier for image (not currently used with actual images)
- `learnMoreURL` (optional) - external link for more information

### Component Architecture

**Main Page Flow**:
- `App.tsx` sets up routing, React Query, and toast providers
- `pages/Index.tsx` is the main page containing all filtering logic
- Filtering is client-side using `useMemo` for performance

**Key Components**:
- `FilterPanel.tsx` - Badge-based filter UI for categories and comfort levels
- `OpportunityCard.tsx` - Card display with comfort color coding
- `OpportunityModal.tsx` - Detail view modal for opportunities
- `Hero.tsx` - Landing section with branding
- `FeedbackWidget.tsx` - User feedback collection

**UI Components**:
- Located in `src/components/ui/`
- All shadcn/ui components use the `@` alias pointing to `src/`
- Tailwind utility classes for styling

### Filtering Logic

Located in `pages/Index.tsx`:
- Multi-select filters for categories and comfort levels
- Filters use AND logic between filter types (category AND comfort)
- Filters use OR logic within the same type (category A OR category B)
- Empty filter = show all for that filter type
- `useMemo` optimizes re-filtering performance

### Comfort Level System

Three comfort levels with semantic color coding:
- **Low** (Green) - Minimal social demands
- **Medium** (Yellow) - Some interaction required
- **High** (Orange) - Active collaboration needed

Colors implemented in `OpportunityCard.tsx` via `getComfortColor()` function.

### Routing

Simple structure in `App.tsx`:
- `/` - Main Index page
- `*` - Catch-all 404 NotFound page

When adding new routes, add them ABOVE the `*` catch-all route.

## Project-Specific Conventions

### Image Handling
Currently, the `image` field in opportunities.json is an identifier but not connected to actual images. Images are not yet implemented in the UI.

### External Links
Opportunities can have a `learnMoreURL` field for external program information. This is displayed in the OpportunityModal component.

### Lovable Integration
This project is managed via Lovable (lovable.dev). Changes pushed to the repo will sync with the Lovable project at: https://lovable.dev/projects/cf8db01d-0af4-41a7-884d-814558e8c330

## Adding New Opportunities

To add opportunities, edit `src/data/opportunities.json`:
1. Increment the `id` field
2. Ensure `category` matches one of the predefined categories in `FilterPanel.tsx`
3. Set appropriate `comfort` level (Low/Medium/High)
4. Include all required fields
5. Optionally add `learnMoreURL` for external links

## Modifying Filters

Category and comfort level filters are defined in `FilterPanel.tsx`:
- `categories` array (line 11-19)
- `comfortLevels` array (line 21)

To add a new category or comfort level, update these arrays. The filtering logic in `Index.tsx` will automatically support the new values.
