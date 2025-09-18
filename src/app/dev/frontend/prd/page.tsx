"use client";

import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import Link from "next/link";

const FrontendPRDPage = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">Frontend PRD</h1>
      <p className="text-muted-foreground">
        Product Requirements Document outlining the frontend architecture, components, and implementation plan for the Apartna platform.
      </p>

      <Accordion type="single" collapsible className="space-y-4">
        {/* 1. Summary */}
        <AccordionItem value="summary">
          <AccordionTrigger className="text-xl font-semibold">1. Summary & Success Criteria</AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">
              <strong>Purpose:</strong> Define MVP scope and measurable success metrics.
            </p>
            <ul className="list-disc pl-5">
              <li>MVP: Roommate, Apartment, Combined flows; messaging; inspections; profile CRUD; verification; dashboards.</li>
              <li>Success Metrics: Critical path ≥ 95%, cold start &lt; 3s, crash-free ≥ 95%, accessibility score ≥ 90%.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* 2. Tech Stack */}
        <AccordionItem value="tech-stack">
          <AccordionTrigger className="text-xl font-semibold">2. Tech Stack & Documentation</AccordionTrigger>
          <AccordionContent>
            <div className="overflow-x-auto rounded-md border-t">
              <Table className="min-w-full">
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="w-1/4 px-4 py-3 font-medium text-left">Layer</TableHead>
                    <TableHead className="w-1/2 px-4 py-3 font-medium text-left">Stack</TableHead>
                    <TableHead className="w-1/4 px-4 py-3 font-medium text-left">Docs</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {techStackData.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="px-4 py-3 font-medium whitespace-normal align-top">{item.layer}</TableCell>
                      <TableCell className="px-4 py-3 whitespace-normal align-top">{item.stack}</TableCell>
                      <TableCell className="px-4 py-3 whitespace-normal align-top">{item.docs}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* 3. Mobile Screens */}
        <AccordionItem value="screens">
          <AccordionTrigger className="text-xl font-semibold">3. Mobile Screens</AccordionTrigger>
          <AccordionContent id="mobile-screens">
            <div className="overflow-x-auto rounded-md border">
              <Table className="min-w-full">
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="w-1/4 px-4 py-3 font-medium text-left">Module</TableHead>
                    <TableHead className="w-1/2 px-4 py-3 font-medium text-left">Summary</TableHead>
                    <TableHead className="w-1/4 px-4 py-3 font-medium text-left">Key Components</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mobileScreensData.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="px-4 py-3 font-medium whitespace-normal align-top">{item.module}</TableCell>
                      <TableCell className="px-4 py-3 whitespace-normal align-top">{item.summary}</TableCell>
                      <TableCell className="px-4 py-3 whitespace-normal align-top">{item.components}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
         
              <p className="mt-3">
              <strong>Deep Dive:</strong> <Link href="/dev/frontend/screens" className="text-blue-600 underline">Screens →</Link>
            </p>
           
          </AccordionContent>
        </AccordionItem>

        {/* 4. Component Library */}
        <AccordionItem value="components">
          <AccordionTrigger className="text-xl font-semibold">4. Component Library & Patterns</AccordionTrigger>
          <AccordionContent>
            <h3 className="font-semibold mb-2">Reusable UI Elements & Patterns</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Cards:</strong> AparteeCard, ApartmentCard, MatchCard, ConversationCard, StatsCard</li>
              <li><strong>Forms:</strong> TextInput, TextArea, RangeSlider, MultiSelectChips, FileUploader</li>
              <li><strong>Modals:</strong> AddMedia, AddListing, DeleteConfirmation, MatchCelebration</li>
              <li><strong>Lists/Feeds:</strong> InfiniteScrollFeed, ConversationList, ApartmentListingsGrid</li>
              <li><strong>Drawers/Panels:</strong> FilterDrawer, GroupChatPanel</li>
              <li><strong>Media & Galleries:</strong> MediaCarousel, ProfileMediaGallery, FullscreenMediaViewer</li>
              <li><strong>Indicators & States:</strong> ProgressStepper, StatusBadges, Toasts, Skeletons, EmptyStates</li>
            </ul>
            <p className="mt-3">
              <strong>Deep Dive:</strong> <Link href="/dev/frontend/components" className="text-blue-600 underline">Component Inventory → </Link>
            </p>
          </AccordionContent>
        </AccordionItem>

        {/* 5. State & Data Handling */}
        <AccordionItem value="state-data">
          <AccordionTrigger className="text-xl font-semibold">5. State & Data Handling</AccordionTrigger>
          <AccordionContent id="state-data-handling">
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Global State:</strong> Redux Toolkit (auth, user, UI, cache)</li>
              <li><strong>Server State:</strong> RTK Query for normalized API caching</li>
              <li><strong>Local State:</strong> useState / useReducer for transient UI</li>
              <li><strong>Slices & Responsibilities:</strong> Auth, User, Preferences, Roommates, Housing, Matches, Messages, Inspections, Notifications, Settings, UI</li>
              <li><strong>Caching Strategy:</strong> Stale-While-Revalidate, Infinite Queries, Offline queue with retry</li>
            </ul>
            <p className="mt-3">
              <strong>Deep Dive:</strong> <Link href="/dev/frontend/state_management" className="text-blue-600 underline">State & Data → </Link>
            </p>
          </AccordionContent>
        </AccordionItem>

        {/* 6. Forms */}
        <AccordionItem value="forms">
          <AccordionTrigger className="text-xl font-semibold">6. Forms</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Principle:</strong> Reusable dynamic forms via React Hook Form + Zod</li>
              <li><strong>Use Cases:</strong> Onboarding, Preferences, Inspections, Profile, Messaging, Settings</li>
              <li><strong>Components:</strong> TextInput, TextArea, NumberInput, RangeSlider, DatePicker, MultiSelectChips, FileUploader, CardSelect, ProgressStepper</li>
            </ul>
            <p className="mt-3">
              <strong>Deep Dive:</strong> <Link href="/dev/frontend/form" className="text-blue-600 underline">Forms → Full Config</Link>
            </p>
          </AccordionContent>
        </AccordionItem>

        {/* 7. Notifications */}
        <AccordionItem value="notifications">
          <AccordionTrigger className="text-xl font-semibold">7. Notifications</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Push:</strong> matches, messages, inspections, KYC, system alerts</li>
              <li><strong>In-App:</strong> Toasts, banners, badges</li>
              <li>Deep linking & preference management via Settings</li>
            </ul>
            <p className="mt-3">
              <strong>Deep Dive:</strong> <Link href="/dev/frontend/notification" className="text-blue-600 underline">Notifications → </Link>
            </p>
          </AccordionContent>
        </AccordionItem>

        {/* 8. Animations */}
        <AccordionItem value="animations">
          <AccordionTrigger className="text-xl font-semibold">8. Animations</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>RN:</strong> Reanimated 3, <strong>Web:</strong> Framer Motion</li>
              <li><strong>Use Cases:</strong> Onboarding steps, feed interactions, match celebration, modals, buttons, toast notifications</li>
            </ul>
            <p className="mt-3">
              <strong>Deep Dive:</strong> <Link href="/dev/frontend/animation" className="text-blue-600 underline">Animations → </Link>
            </p>
          </AccordionContent>
        </AccordionItem>

        {/* 9. Offline & Reliability */}
        <AccordionItem value="offline">
          <AccordionTrigger className="text-xl font-semibold">9. Offline & Reliability</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-1">
              <li>Queue outgoing actions (messages, bookings, KYC)</li>
              <li>Realtime fallback polling</li>
              <li>Retry with exponential backoff</li>
              <li>Offline indicators for feeds & messaging</li>
            </ul>
            <p className="mt-3">
              <strong>Deep Dive:</strong> <Link href="/dev/frontend/data_fetching" className="text-blue-600 underline">Data Fetching → Offline Strategy</Link>
            </p>
          </AccordionContent>
        </AccordionItem>

        {/* 10. Security */}
        <AccordionItem value="security">
          <AccordionTrigger className="text-xl font-semibold">10. Security & Privacy</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-1">
              <li>Tokens in SecureStore</li>
              <li>Minimal PII in local storage</li>
              <li>Frontend + backend input validation</li>
              <li>Encrypted HTTPS / WSS communication</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* 11. Web / Admin Dashboard */}
        <AccordionItem value="web-dashboard">
          <AccordionTrigger className="text-xl font-semibold">11. Web / Admin Dashboard</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-1">
              <li>Admin Listings Queue, Moderation Panel</li>
              <li>Agent Dashboard</li>
              <li>Metrics & Audit Logs</li>
              <li>Components: DataTable, MetricCard, AuditLogViewer, FilterBar</li>
            </ul>
            <p className="mt-3">
              <strong>Deep Dive:</strong> <Link href="/dev/frontend/screens#web-admin-dashboard" className="text-blue-600 underline">Web Dashboard → Full Flow</Link>
            </p>
          </AccordionContent>
        </AccordionItem>

        {/* 12. Sprint Plan */}
        <AccordionItem value="sprints">
          <AccordionTrigger className="text-xl font-semibold">12. Sprint Plan (Oct–Dec 2025)</AccordionTrigger>
          <AccordionContent>
            <div className="overflow-x-auto rounded-md border">
              <Table className="min-w-full">
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="w-1/6 px-4 py-3 font-medium text-left">Sprint</TableHead>
                    <TableHead className="w-2/3 px-4 py-3 font-medium text-left">Focus</TableHead>
                    <TableHead className="w-1/6 px-4 py-3 font-medium text-left">KPIs</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sprintData.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="px-4 py-3 font-medium whitespace-normal align-top">{item.sprint}</TableCell>
                      <TableCell className="px-4 py-3 whitespace-normal align-top">{item.focus}</TableCell>
                      <TableCell className="px-4 py-3 whitespace-normal align-top">{item.kpis}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <p className="mt-3">
              <strong> Sprint Details:</strong> <Link href="/dev/frontend/sprint" className="text-blue-600 underline"> Sprint Planning →</Link>
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

const techStackData = [
  {
    layer: "Mobile",
    stack: "React Native + Expo + TypeScript",
    docs: <a href="https://reactnative.dev/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">React Native Docs</a>
  },
  {
    layer: "UI",
    stack: "NativeWind (Tailwind for RN), Storybook",
    docs: <a href="https://www.nativewind.dev/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">NativeWind</a>
  },
  {
    layer: "Web / Dashboard",
    stack: "React (Vite/Next.js), Tailwind, shadcn/ui",
    docs: <><a href="https://nextjs.org/docs" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Next.js</a>,{" "}<a href="https://ui.shadcn.com/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">shadcn/ui</a></>
  },
  {
    layer: "Navigation",
    stack: "React Navigation v6",
    docs: <a href="https://reactnavigation.org/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Docs</a>
  },
  {
    layer: "State",
    stack: "Redux Toolkit + RTK Query",
    docs: <a href="https://redux-toolkit.js.org/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Redux Toolkit</a>
  },
  {
    layer: "Data Fetching",
    stack: "React Query, Supabase Realtime",
    docs: <><a href="https://tanstack.com/query/v4" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">React Query</a>,{" "}<a href="https://supabase.com/docs/guides/realtime" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Supabase Realtime</a></>
  },
  {
    layer: "Forms & Validation",
    stack: "React Hook Form + Zod",
    docs: <><a href="https://react-hook-form.com/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">RHF Docs</a>,{" "}<a href="https://zod.dev/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Zod</a></>
  },
  {
    layer: "Animations",
    stack: "Reanimated 3 (RN), Framer Motion (Web)",
    docs: <><a href="https://docs.swmansion.com/react-native-reanimated/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Reanimated</a>,{" "}<a href="https://www.framer.com/motion/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Framer Motion</a></>
  },
  {
    layer: "Notifications",
    stack: "Expo Push, local toast/badges",
    docs: <a href="https://docs.expo.dev/versions/latest/sdk/notifications/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Expo Notifications</a>
  },
  {
    layer: "Storage",
    stack: "AsyncStorage + SecureStore",
    docs: <><a href="https://react-native-async-storage.github.io/async-storage/docs/usage" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">AsyncStorage</a>,{" "}<a href="https://docs.expo.dev/versions/latest/sdk/securestore/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">SecureStore</a></>
  },
  {
    layer: "Monitoring",
    stack: "Sentry, PostHog/Amplitude, LogRocket",
    docs: <><a href="https://docs.sentry.io/platforms/javascript/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Sentry</a>,{" "}<a href="https://posthog.com/docs/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">PostHog</a>,{" "}<a href="https://docs.logrocket.com/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">LogRocket</a></>
  }
];

const mobileScreensData = [
  {
    module: "Onboarding & Authentication",
    summary: "Signup/login, OTP, role selection, KYC, preferences",
    components: "TextInput, PrimaryButton, OTPInput, ProgressStepper, RoleCard, MultiSelectChips, FileUploader, RangeSlider"
  },
  {
    module: "Home / Discovery",
    summary: "Feed tabs, swipe cards, infinite scroll, filters",
    components: "AparteeCard, ApartmentCard, FilterDrawer, MediaCarousel, SkeletonCard, EmptyState"
  },
  {
    module: "Matches / Connections",
    summary: "Matched roommates/apartments, conversations, match celebration",
    components: "MatchCard, ConnectionList, NotificationBadge"
  },
  {
    module: "Inspection & Booking",
    summary: "Booking, landlord/agent schedule, payment, status updates",
    components: "CalendarPicker, PaymentSelector, StatusBadge, RequestCard, AvailabilityCalendar"
  },
  {
    module: "Messaging / Conversations",
    summary: "Direct & group chat, share apartments/roommates, offline queue",
    components: "MessageBubble, TypingIndicator, AttachmentPreview, VoiceNoteButton"
  },
  {
    module: "Profile Module",
    summary: "Public/self-profile, CRUD media/listings/preferences, verification",
    components: "ProfileHeader, AvatarUploader, VerificationBadge, BioTextArea, ListingGrid"
  },
  {
    module: "Settings Module",
    summary: "Account, preferences, security/privacy, danger zone",
    components: "ToggleSwitch, FlatListRow, Slider, ModalConfirm, FileUploader"
  }
];

const sprintData = [
  {
    sprint: "1",
    focus: "App shell, onboarding screens, Redux store, feed skeleton",
    kpis: "Storybook ≥ 90%, crash-free ≥ 95%"
  },
  {
    sprint: "2",
    focus: "Roommate path, messaging basics",
    kpis: "Time-to-interactive < 3s"
  },
  {
    sprint: "3",
    focus: "Inspection booking flows, landlord dashboard",
    kpis: "-"
  },
  {
    sprint: "4",
    focus: "Advanced filters, map search, agent dashboards",
    kpis: "-"
  },
  {
    sprint: "5",
    focus: "Profile CRUD, verification (KYC), push notifications",
    kpis: "-"
  },
  {
    sprint: "6",
    focus: "Accessibility QA, polish, error states, release prep",
    kpis: "-"
  }
];

export default FrontendPRDPage;