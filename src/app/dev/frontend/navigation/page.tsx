import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function RoutesDoc() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">Route List</h1>
      <p className="text-muted-foreground">
        Comprehensive navigation structure and route definitions for the Aparte mobile application.
      </p>

      <Accordion type="single" collapsible className="space-y-4">
        {/* Auth */}
        <AccordionItem value="auth">
          <AccordionTrigger className="text-xl font-semibold">1. Auth (Stack)</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-1">
              <li><code>auth/welcome</code> — Intro screen with brand positioning</li>
              <li><code>auth/signup</code> — Create new account</li>
              <li><code>auth/login</code> — Existing user login</li>
              <li><code>auth/otp-verification</code> — Verify phone/email with code</li>
              <li><code>auth/user-type</code> — Choose role (student, corper, professional, traveler)</li>
              <li><code>auth/identity-verification</code> — Upload ID / KYC check</li>
              <li><code>auth/needs-prioritization</code> — Pick housing vs roommate needs</li>
              <li><code>auth/path-selection</code> — Choose Roommate, Housing, or Both flow</li>
              <li><code>auth/kyc-roommate-step1</code> — Roommate flow: basic info</li>
              <li><code>auth/kyc-roommate-step2</code> — Roommate flow: preferences</li>
              <li><code>auth/kyc-housing-step1</code> — Housing flow: budget, location</li>
              <li><code>auth/kyc-housing-step2</code> — Housing flow: ID upload</li>
              <li><code>auth/kyc-combined</code> — Combined roommate + housing flow</li>
              <li><code>auth/trust-community</code> — Highlight safety &amp; trust features</li>
              <li><code>auth/profile-basics</code> — Enter profile basics (name, age, bio)</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Tabs */}
        <AccordionItem value="tabs">
          <AccordionTrigger className="text-xl font-semibold">2. Tabs (Bottom Tab Navigator)</AccordionTrigger>
          <AccordionContent>
            {/* Home */}
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Home (Stack)</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li><code>tabs/home/feed</code> — Main discovery feed (roommates &amp; apartments)</li>
                <li><code>tabs/home/roommate-detail/:userId</code> — View roommate profile</li>
                <li><code>tabs/home/apartment-detail/:listingId</code> — View apartment listing</li>
                <li><code>tabs/home/map</code> — Explore listings on map</li>
                <li><code>tabs/home/landlord/:landlordId</code> — Landlord/agent profile</li>
                <li><code>tabs/home/inspection/booking/:listingId</code> — Book inspection</li>
                <li><code>tabs/home/inspection/payment/:bookingId</code> — Pay for inspection</li>
                <li><code>tabs/home/inspection/status/:bookingId</code> — Check inspection status</li>
              </ul>
            </div>

            {/* Matches */}
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Matches (Stack)</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li><code>tabs/matches/feed</code> — List of matched roommates/apartments</li>
                <li><code>tabs/matches/celebration</code> — &quot;You&apos;ve got a match&quot; celebration screen</li>
                <li><code>tabs/matches/profile/:userId</code> — View matched roommate profile</li>
                <li><code>tabs/matches/apartment/:listingId</code> — View matched apartment</li>
                <li><code>tabs/matches/conversation/:threadId</code> — Start conversation from match</li>
              </ul>
            </div>

            {/* Messages */}
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Messages (Stack)</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li><code>tabs/messages/list</code> — All conversation threads</li>
                <li><code>tabs/messages/thread/:threadId</code> — Specific chat thread</li>
                <li><code>tabs/messages/media/:mediaId</code> — Open shared media (image/video)</li>
              </ul>
            </div>

            {/* Profile */}
            <div>
              <h3 className="font-semibold mb-2">Profile (Stack)</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li><code>tabs/profile/self</code> — View own profile</li>
                <li><code>tabs/profile/edit</code> — Edit profile details</li>
                <li><code>tabs/profile/add-item</code> — Add new listing or preference</li>
                <li><code>tabs/profile/edit-item/:id</code> — Edit existing listing or preference</li>
                <li><code>tabs/profile/delete-item/:id</code> — Delete item confirmation</li>
                <li><code>tabs/profile/settings</code> — Settings main page</li>
                <li><code>tabs/profile/settings/notifications</code> — Notification preferences</li>
                <li><code>tabs/profile/settings/privacy</code> — Privacy and security options</li>
                <li><code>tabs/profile/settings/billing</code> — Billing and payment methods</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Inspection */}
        <AccordionItem value="inspection">
          <AccordionTrigger className="text-xl font-semibold">3. Inspection (Nested Stack)</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-1">
              <li><code>inspection/booking/:listingId</code> — Book inspection for apartment</li>
              <li><code>inspection/payment/:bookingId</code> — Pay for inspection</li>
              <li><code>inspection/status/:bookingId</code> — Check inspection progress</li>
              <li><code>inspection/manage/:listingId</code> — Landlord/agent manages inspections</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Global */}
        <AccordionItem value="global">
          <AccordionTrigger className="text-xl font-semibold">4. Global / Utility</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-1">
              <li><code>not-found</code> — Fallback route for invalid paths</li>
              <li><code>splash</code> — Initial app loading screen</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Deep Links */}
        <AccordionItem value="deeplinks">
          <AccordionTrigger className="text-xl font-semibold">5. Example Deep Links</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-1">
              <li><code>aparte://auth/login</code> → Login screen</li>
              <li><code>aparte://listing/:listingId</code> → Apartment detail</li>
              <li><code>aparte://profile/:userId</code> → Roommate/landlord profile</li>
              <li><code>aparte://messages/:threadId</code> → Conversation thread</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}