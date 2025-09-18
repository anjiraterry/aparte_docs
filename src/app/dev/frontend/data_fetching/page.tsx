import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

export default function DataFetchingCachingDoc() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">Data Fetching & Caching</h1>
      <p className="text-muted-foreground">
  Data fetching, caching, and offline strategy using React Query and Supabase Realtime for the Aparte platform.
</p>

      <Accordion type="single" collapsible className="space-y-4">
        <AccordionItem value="library">
          <AccordionTrigger className="text-xl font-semibold">1. Primary Library</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>React Query</strong> (TanStack) — caching, mutations, stale-while-revalidate</li>
              <li><strong>Supabase Realtime</strong> — live updates for matches and messages</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="onboarding">
          <AccordionTrigger className="text-xl font-semibold">2. Onboarding & Authentication</AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">Mutations for signup, login, OTP. No caching (short-lived/sensitive).</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Invalidate queries on success → bootstrap user session & KYC state</li>
              <li>Needs Prioritization / Path Selection stored in mutation cache before submission</li>
              <li>Offline → queue submissions, retry when online</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="home">
          <AccordionTrigger className="text-xl font-semibold">3. Home / Discovery Feed</AccordionTrigger>
          <AccordionContent>
            <h3 className="font-semibold mb-2">Roommates (Apartees)</h3>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li>Query: <code>GET /roommates?filters…</code></li>
              <li>Cache: staleTime 2m, background refetch</li>
              <li>Infinite scroll with pagination</li>
              <li>Realtime updates via Supabase</li>
            </ul>

            <h3 className="font-semibold mb-2">Apartments</h3>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li>Query: <code>GET /apartments?filters…</code></li>
              <li>Cache: staleTime 5m</li>
              <li>Background refetch every 2m</li>
              <li>Optimistic updates for shortlist/save</li>
            </ul>

            <h3 className="font-semibold mb-2">Filters & Saved Searches</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Persist locally in AsyncStorage</li>
              <li>Hydrate feed queries with saved filter params</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="matches">
          <AccordionTrigger className="text-xl font-semibold">4. Matches / Connections</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-1">
              <li>Query: <code>GET /matches</code> (roommates + apartments)</li>
              <li>Stale-while-revalidate for instant cached display</li>
              <li>Realtime updates on new mutual matches</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="messaging">
          <AccordionTrigger className="text-xl font-semibold">5. Messaging</AccordionTrigger>
          <AccordionContent>
            <h3 className="font-semibold mb-2">Conversations List</h3>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li>Query: <code>GET /conversations</code> with pagination</li>
              <li>Keep old pages when fetching new ones</li>
              <li>Realtime subscription for new messages</li>
            </ul>

            <h3 className="font-semibold mb-2">Thread Messages</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Infinite query for pagination</li>
              <li>Mutation: send message → optimistic update + rollback if fail</li>
              <li>Offline queue for unsent messages → retry on reconnect</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="inspections">
          <AccordionTrigger className="text-xl font-semibold">6. Inspections & Booking</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-1">
              <li>Mutation: <code>POST /inspections</code> (with payment)</li>
              <li>Invalidate inspections + apartments queries</li>
              <li>Query: <code>GET /inspections?role=…</code></li>
              <li>Realtime status updates: confirmed, cancelled</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="profile">
          <AccordionTrigger className="text-xl font-semibold">7. Profile Module</AccordionTrigger>
          <AccordionContent>
            <h3 className="font-semibold mb-2">Self-Profile</h3>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li>Query: <code>GET /users/me</code></li>
              <li>Cache: staleTime Infinity, refetch on window focus</li>
              <li>Mutations invalidate <code>me</code> query</li>
            </ul>

            <h3 className="font-semibold mb-2">Public Profile</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Query: <code>GET /users/:id</code></li>
              <li>Stale-while-revalidate</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="strategy">
          <AccordionTrigger className="text-xl font-semibold">8. Cache Strategy</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-1">
              <li>Stale-While-Revalidate for lists (feeds, matches, profiles)</li>
              <li>Infinite Queries for chats & feeds</li>
              <li>Retry Queue for offline actions (messages, KYC, inspections)</li>
              <li>Selective Persistence → keep feeds & matches, clear auth/payments on logout</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="offline">
          <AccordionTrigger className="text-xl font-semibold">9. Offline Support</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-1">
              <li>Queue outgoing messages, inspections, KYC mutations</li>
              <li>Show cached feeds when offline</li>
              <li>Background sync mutations when network restores</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}