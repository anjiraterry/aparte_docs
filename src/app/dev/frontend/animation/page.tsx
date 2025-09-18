import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function AnimationsDoc() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">Animations</h1>
      <p className="text-muted-foreground">
        Animation strategy for screens and components. Built with Reanimated 3 (React Native) and Framer Motion (Web).
      </p>

      <Accordion type="single" collapsible className="space-y-4">
        {/* Onboarding & Authentication */}
        <AccordionItem value="onboarding">
          <AccordionTrigger className="text-xl font-semibold">1. Onboarding & Authentication</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Welcome Screen:</strong> Fade-in illustration and copy, logo scale-up.</li>
              <li><strong>Role Selection:</strong> Button press scale micro-interactions.</li>
              <li><strong>KYC Steps:</strong> Smooth step transitions (slide left/right), error shake on failed validation.</li>
              <li><strong>Success Screen:</strong> Confetti celebration (Reanimated / Lottie).</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Home & Discovery */}
        <AccordionItem value="home">
          <AccordionTrigger className="text-xl font-semibold">2. Home & Discovery</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Feed Cards:</strong> Swipe left/right animations for roommates/apartments (Reanimated gestures).</li>
              <li><strong>Filters Modal:</strong> Slide-up modal with spring easing.</li>
              <li><strong>Pull to Refresh:</strong> Smooth spinner fade/rotate.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Matches */}
        <AccordionItem value="matches">
          <AccordionTrigger className="text-xl font-semibold">3. Matches</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Match Celebration:</strong> Confetti burst, card flip animation for profile reveal.</li>
              <li><strong>Connection List:</strong> Fade-in list items as user scrolls.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Messaging */}
        <AccordionItem value="messaging">
          <AccordionTrigger className="text-xl font-semibold">4. Messaging</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Conversation List:</strong> Smooth slide-in of chat previews.</li>
              <li><strong>Message Bubbles:</strong> Scale & fade when sending/receiving messages.</li>
              <li><strong>Voice Notes:</strong> Animated waveforms for recording/playback.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Inspections & Bookings */}
        <AccordionItem value="inspections">
          <AccordionTrigger className="text-xl font-semibold">5. Inspections & Bookings</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Booking Flow:</strong> Step transitions with fade/slide.</li>
              <li><strong>Calendar:</strong> Animated highlight of selected dates.</li>
              <li><strong>Payment Confirmation:</strong> Success checkmark morph animation.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Profile */}
        <AccordionItem value="profile">
          <AccordionTrigger className="text-xl font-semibold">6. Profile</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Profile Picture Upload:</strong> Image preview fade-in, success bounce.</li>
              <li><strong>Preferences:</strong> Toggle switches with smooth transitions.</li>
              <li><strong>Edit Forms:</strong> Autosave indicator pulse animation.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Components */}
        <AccordionItem value="components">
          <AccordionTrigger className="text-xl font-semibold">7. Components (Global)</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Buttons:</strong> Press feedback (scale down + shadow drop).</li>
              <li><strong>Modals:</strong> Slide-up with backdrop fade.</li>
              <li><strong>Cards:</strong> Entrance fade/scale, hover lift (web).</li>
              <li><strong>Tabs:</strong> Smooth underline transition between tabs.</li>
              <li><strong>Notifications:</strong> Toast slide-in/out animations.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}