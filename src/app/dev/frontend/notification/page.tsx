import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function NotificationsDoc() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">Notifications </h1>
      <p className="text-muted-foreground">
        Comprehensive notification system for user engagement, alerts, and system updates across the Aparte platform.
      </p>

      <Accordion type="single" collapsible className="space-y-4">
        {/* Onboarding & Authentication */}
        <AccordionItem value="onboarding">
          <AccordionTrigger className="text-xl font-semibold">1. Onboarding &amp; Authentication Notifications</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Welcome Notification</strong> → Trigger: new signup. Copy: Welcome to Aparte. Lets find your home together. Delivery: push + in-app banner.</li>
              <li><strong>OTP Reminder</strong> → Trigger: OTP not entered after 60s. Copy: Your code is expiring soon, enter it to continue. Delivery: push.</li>
              <li><strong>KYC Pending</strong> → Trigger: user skipped/paused verification. Copy: Complete your verification to unlock bookings &amp; matches. Delivery: in-app toast.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Matches & Connections */}
        <AccordionItem value="matches">
          <AccordionTrigger className="text-xl font-semibold">2. Matches &amp; Connections Notifications</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>New Match</strong> → Trigger: mutual swipe/save. Copy: &quot;It&apos;s a Match! You and [Name] connected!&quot; Delivery: push + in-app modal.</li>
              <li><strong>Unmatch</strong> → Trigger: user unmatched. Copy: &quot;You&apos;re no longer connected with [Name].&quot; Delivery: in-app toast.</li>
              <li><strong>Apartment Match</strong> → Trigger: user shortlisted + landlord accepted. Copy: &quot;Your interest in [Apartment] was accepted!&quot; Delivery: push.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Messaging */}
        <AccordionItem value="messaging">
          <AccordionTrigger className="text-xl font-semibold">3. Messaging Notifications</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>New Message</strong> → Trigger: incoming chat. Copy: &quot;[Name]: Hey! When can we check the place?&quot; Delivery: push + badge count.</li>
              <li><strong>Missed Voice Note</strong> → Trigger: new voice note, not opened after 5 mins. Copy: &quot;[Name] sent you a voice message.&quot; Delivery: push.</li>
              <li><strong>Group Mention</strong> → Trigger: @mention in group. Copy: &quot;[Name] mentioned you in [Group].&quot; Delivery: push.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Inspections & Bookings */}
        <AccordionItem value="inspections">
          <AccordionTrigger className="text-xl font-semibold">4. Inspection &amp; Booking Notifications</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Booking Confirmed</strong> → Trigger: landlord/agent accepts request. Copy: &quot;Your inspection at [Apartment] is confirmed for [Date].&quot; Delivery: push + in-app banner.</li>
              <li><strong>Upcoming Reminder</strong> → Trigger: 24h before inspection. Copy: &quot;Reminder: You have an inspection tomorrow at [Apartment].&quot; Delivery: push.</li>
              <li><strong>Cancelled Inspection</strong> → Trigger: landlord/agent cancels. Copy: &quot;Your inspection for [Apartment] was cancelled.&quot; Delivery: push + toast.</li>
              <li><strong>Payment Receipt</strong> → Trigger: inspection fee paid. Copy: &quot;Payment received. Receipt available in your inbox.&quot; Delivery: push.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Profile & KYC */}
        <AccordionItem value="profile-kyc">
          <AccordionTrigger className="text-xl font-semibold">5. Profile &amp; KYC Notifications</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Verification Approved</strong> → Trigger: backend confirms ID. Copy: &quot;You&apos;re verified. More trust, more matches.&quot; Delivery: push.</li>
              <li><strong>Verification Failed</strong> → Trigger: mismatch/error. Copy: &quot;Verification failed. Please retry with clear ID.&quot; Delivery: push + in-app banner.</li>
              <li><strong>Profile Completion</strong> → Trigger: profile 70%. Copy: &quot;Add more details to improve your matches.&quot; Delivery: in-app toast.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* System / App */}
        <AccordionItem value="system">
          <AccordionTrigger className="text-xl font-semibold">6. System / App-Level Notifications</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>App Update</strong> → Trigger: new version released. Copy: &quot;A new version of Aparte is available. Update now for the latest features.&quot; Delivery: in-app banner.</li>
              <li><strong>Maintenance</strong> → Trigger: scheduled downtime. Copy: &quot;Heads up: Aparte will be unavailable from [time].&quot; Delivery: push.</li>
              <li><strong>Policy Updates</strong> → Trigger: new T&amp;Cs. Copy: &quot;We&apos;ve updated our Terms of Service.&quot; Delivery: in-app modal.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Settings & Preferences */}
        <AccordionItem value="settings">
          <AccordionTrigger className="text-xl font-semibold">7. Settings &amp; Preferences Notifications</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Notification Settings Changed</strong> → Trigger: user updates preferences. Copy: &quot;Your notification preferences were saved.&quot; Delivery: toast.</li>
              <li><strong>Security Alert</strong> → Trigger: login from new device. Copy: &quot;New login detected on [Device/Location].&quot; Delivery: push.</li>
              <li><strong>Two-Factor Auth</strong> → Trigger: 2FA code sent. Copy: &quot;Your verification code is 123456.&quot; Delivery: push/SMS.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}