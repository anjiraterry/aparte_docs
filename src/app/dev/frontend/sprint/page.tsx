import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function SprintsDoc() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">Frontend Delivery Roadmap</h1>
      <p className="text-muted-foreground">
        Sprint-by-sprint breakdown of all frontend features: screens, flows, notifications, state management, forms, components, data fetching, and animations.
      </p>

      <Accordion type="single" collapsible className="space-y-4">
        {/* Sprint 1 */}
        <AccordionItem value="sprint1">
          <AccordionTrigger className="text-xl font-semibold">1. Sprint 1 — Foundations & Onboarding Path (Oct 1–14)</AccordionTrigger>
          <AccordionContent>
            <p className="mb-2"><strong>Goal:</strong> App shell, onboarding flows, authentication, listing foundations.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Scaffold Expo app + TypeScript, integrate NativeWind.</li>
              <li>Navigation: bottom tabs (Home / Search / Post / Messages / Profile).</li>
              <li>Authentication: signup/login UI, role selection, onboarding KYC forms.</li>
              <li>Forms: reusable input components, validation schemas (React Hook Form + Zod).</li>
              <li>Listing creation stepper UI (local image preview, autosave drafts).</li>
              <li>State management: React Query setup, AsyncStorage for drafts/preferences.</li>
              <li>Components: ListingCard, Button, FormField, Modal basics.</li>
              <li>Storybook boot + initial component stories.</li>
            </ul>
            <p className="mb-2"><strong>Deliverables:</strong> Working navigation + onboarding flow, listing create & list UI wired to mock API, Storybook ≥ 7 components.</p>
            <p className="mb-2"><strong>Acceptance:</strong> End-to-end POST/GET demo with seeded data.</p>
            <p><strong>KPIs:</strong> UI smoke tests pass; onboarding validation inline.</p>
          </AccordionContent>
        </AccordionItem>

        {/* Sprint 2 */}
        <AccordionItem value="sprint2">
          <AccordionTrigger className="text-xl font-semibold">2. Sprint 2 — Roommate Flow + Messaging MVP (Oct 15–28)</AccordionTrigger>
          <AccordionContent>
            <p className="mb-2"><strong>Goal:</strong> Enable roommate profiles, messaging basics, provider skeleton.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Roommate profile create/edit screens (lifestyle, budget, move-in).</li>
              <li>Form enhancements: profile sections (step-based).</li>
              <li>Messaging: conversation list + send UI with optimistic updates.</li>
              <li>Local storage: offline queue for messages (retry on reconnect).</li>
              <li>Notifications: in-app banner/toast for new messages (UI only).</li>
              <li>Provider directory UI + selection in listing create.</li>
              <li>State: query invalidation for profile changes + messages.</li>
              <li>Animations: message bubble fade, button press feedback.</li>
            </ul>
            <p className="mb-2"><strong>Deliverables:</strong> Roommate profile screens, search & filter drawer, messaging MVP with optimistic UI + persistence.</p>
            <p className="mb-2"><strong>Acceptance:</strong> Roommate profile appears in search, messages send instantly (optimistic).</p>
            <p><strong>KPIs:</strong> Form entry &lt;2 mins; message optimistic response &lt;300ms.</p>
          </AccordionContent>
        </AccordionItem>

        {/* Sprint 3 */}
        <AccordionItem value="sprint3">
          <AccordionTrigger className="text-xl font-semibold">3. Sprint 3 — Proposals, Dashboards & Notifications (Oct 29–Nov 11)</AccordionTrigger>
          <AccordionContent>
            <p className="mb-2"><strong>Goal:</strong> Extend app into landlord/agent use cases + richer flows.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Proposal composer screen (select listing + roommate + message).</li>
              <li>Agent dashboard: managed listings, proposals view.</li>
              <li>Landlord dashboard: inquiries panel, stats widget.</li>
              <li>Notifications: drawer + real-time in-app notifications (Supabase Realtime).</li>
              <li>Components: DashboardCard, StatWidget, ProposalForm.</li>
              <li>Data fetching: queries for proposals, invalidate on new submission.</li>
              <li>Animations: proposal sent → confetti burst.</li>
            </ul>
            <p className="mb-2"><strong>Deliverables:</strong> Proposal composer + dashboards, notifications drawer.</p>
            <p className="mb-2"><strong>Acceptance:</strong> Proposal draft saved & editable, can send successfully.</p>
            <p><strong>KPIs:</strong> Proposal flow passes ≥98% integration tests.</p>
          </AccordionContent>
        </AccordionItem>

        {/* Sprint 4 */}
        <AccordionItem value="sprint4">
          <AccordionTrigger className="text-xl font-semibold">4. Sprint 4 — Advanced Filters, Maps & Provider Requests (Nov 12–25)</AccordionTrigger>
          <AccordionContent>
            <p className="mb-2"><strong>Goal:</strong> Upgrade search & provider interaction flows.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>MapView screen + radius selector; lazy loading.</li>
              <li>Advanced filters: amenities multi-select, date range, shareable URL.</li>
              <li>Provider request flow: choose provider, send message.</li>
              <li>State management: hydrate saved filters from AsyncStorage.</li>
              <li>Animations: smooth map panning/zoom; filter modal spring open.</li>
              <li>Components: MapCard, FilterChip, ProviderRequestForm.</li>
              <li>Forms: validation for filter ranges (budget, dates).</li>
            </ul>
            <p className="mb-2"><strong>Deliverables:</strong> Advanced filters + map-based search, provider request UI integrated.</p>
            <p className="mb-2"><strong>Acceptance:</strong> Filter changes update query results; provider requests POST to API.</p>
            <p><strong>KPIs:</strong> Median filter interaction &lt;1s; smooth map FPS &gt;50.</p>
          </AccordionContent>
        </AccordionItem>

        {/* Sprint 5 */}
        <AccordionItem value="sprint5">
          <AccordionTrigger className="text-xl font-semibold">5. Sprint 5 — Verification, Messaging Reliability & Analytics (Nov 26–Dec 9)</AccordionTrigger>
          <AccordionContent>
            <p className="mb-2"><strong>Goal:</strong> Trust & reliability features + telemetry.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Verification center: phone/email verification UI.</li>
              <li>Messaging reliability: delivered/read receipts, unread counts.</li>
              <li>Push notifications: Expo push integration, token registration.</li>
              <li>Analytics: instrument core events (search, view, inquire, send message).</li>
              <li>State: ensure receipts & tokens persist/retry correctly.</li>
              <li>Components: VerificationBadge, NotificationToast.</li>
              <li>Animations: verification badge scale/fade-in.</li>
            </ul>
            <p className="mb-2"><strong>Deliverables:</strong> Verification center UI, reliable messaging indicators, push token flow.</p>
            <p className="mb-2"><strong>Acceptance:</strong> Verification flags sync with backend, message states reliable.</p>
            <p><strong>KPIs:</strong> Push token registration success &gt;95%; read receipts update real-time.</p>
          </AccordionContent>
        </AccordionItem>

        {/* Sprint 6 */}
        <AccordionItem value="sprint6">
          <AccordionTrigger className="text-xl font-semibold">6. Sprint 6 — Final Polish, Accessibility & Release Prep (Dec 10–23)</AccordionTrigger>
          <AccordionContent>
            <p className="mb-2"><strong>Goal:</strong> Stability, accessibility, performance optimization, release readiness.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Accessibility: labels, focus states, contrast fixes.</li>
              <li>UX polish: microcopy, onboarding tooltips, empty/loading states.</li>
              <li>Animations: finalize confetti, modal transitions, subtle screen transitions.</li>
              <li>Performance: bundle splitting, lazy load heavy modules.</li>
              <li>Testing: e2e critical paths (Detox/Cypress).</li>
              <li>Release: build pipelines, TestFlight / Play Console builds.</li>
            </ul>
            <p className="mb-2"><strong>Deliverables:</strong> Production build artifacts, accessibility & performance reports.</p>
            <p className="mb-2"><strong>Acceptance:</strong> ≥95% e2e test pass; cold start &lt;3s.</p>
            <p><strong>KPIs:</strong> Crash-free sessions ≥95%; TTI targets met.</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}