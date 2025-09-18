import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


interface TableData {
  userType: string;
  publicProfile: string;
  selfViewProfile: string;
}

export default function ScreensDoc() {
  const data: TableData[] = [
    {
      userType: "Renter",
      publicProfile: "Name, Age, Photos/Videos, Lifestyle, Budget, Location Preferences, Verification Badges, Shared Apartments, Mutual Matches",
      selfViewProfile: "Editable version: add/remove photos/videos, update lifestyle, budget, move-in date, location prefs, verification, linked listings"
    },
    {
      userType: "Landlord",
      publicProfile: "Name / Agency, Verified Listings, Contact Info, Location, Profile Picture, Verification Badges",
      selfViewProfile: "Editable version: add/edit listings, update contact info, agency name, ID verification, view metrics (views, inquiries)"
    },
    {
      userType: "Agent",
      publicProfile: "Name / Agency, Listings Managed, Contact Info, Ratings/Reviews, Verification Badges",
      selfViewProfile: "Editable version: manage listings, update profile info, link clients, see proposals & notifications, verification"
    }
  ];
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
     <h1 className="text-4xl font-bold mb-6 text-gray-900">Mobile Screens</h1>
    <p className="text-muted-foreground">
  Detailed breakdown of all mobile screens and user flows across the Aparte application, organized by functional modules.
</p>
      <Accordion type="single" collapsible className="space-y-2 mt-2">

        <AccordionItem value="onboarding">
          <AccordionTrigger className="text-xl font-semibold">
            1. Onboarding & Authentication
          </AccordionTrigger>
          <AccordionContent >
             <p className="mb-2">
              Purpose: Introduce the app, identify user role, collect essential
              preferences (KYC), and guide users into the right flow (Roommate,
              Housing, Both).
            </p>
            <ul className=" pl-6 space-y-2 mt-2">
              <li>
                <strong>Welcome / Intro</strong>
                <p>
                  Purpose: Warm introduction, brand positioning. Copy: &quot;Housing
                  shouldn&apos;t be this hard. With Aparte, finding a home is easier,
                  safer, and more human.&quot;
                </p>
                <p>Visuals:</p>
                <ul className="list-disc pl-6">
                  <li>Illustration of young people moving in</li>
                  <li>Roommates smiling, cozy spaces</li>
                  <li>Gradient background (Aparte brand palette)</li>
                </ul>
                <p>Components:</p>
                <ul className="list-disc pl-6">
                  <li>App logo + tagline</li>
                  <li>Primary CTA: Get Started →</li>
                </ul>
              </li>

              <li>
                <strong>Signup / Login</strong>
                <p>Purpose: Authenticate users into app ecosystem.</p>
                <p>Components:</p>
                <ul className="list-disc pl-6">
                  <li>Email/password input fields</li>
                  <li>Login CTA, Forgot password link</li>
                  <li>Primary/Secondary buttons</li>
                  <li>Navigation to OTP verification after signup</li>
                  <li>Social Sign-in Buttons (Google, Apple)</li>
                </ul>
              </li>

              <li>
                <strong>OTP Verification</strong>
                <p>Purpose: Verify phone number.</p>
                <p>Components:</p>
                <ul className="list-disc pl-6">
                  <li>OTP input fields</li>
                  <li>Resend code link</li>
                  <li>Verification progress indicator</li>
                  <li>Proceed to Identity Verification after success</li>
                </ul>
              </li>

              <li>
                <strong>User Type Selection (&quot;Who Are You?&quot;)</strong>
                <p>Purpose: Identify user type for personalized experience.</p>
                <p>Prompt: &quot;Let&apos;s get you started. Who are you?&quot;</p>
                <p>Options / Visuals:</p>
                <ul className="list-disc pl-6">
                  <li>Cards with icons/illustrations: Student, Corper, Professional, Short-Term Traveler</li>
                </ul>
                <p>Components:</p>
                <ul className="list-disc pl-6">
                  <li>RoleCard component</li>
                  <li>Multi-select input (one card selection only)</li>
                </ul>
              </li>

              <li>
                <strong>Identity Verification (Conditional)</strong>
                <p>Purpose: Validate user identity before onboarding.</p>
                <p>Conditional Based on &quot;Who Are You?&quot; selection:</p>
                <ul className="list-disc pl-6">
                  <li>Students / Corpers → optional NIN upload</li>
                  <li>Professionals / Short-Term Travelers → required NIN or government-issued ID</li>
                </ul>
                <p>Components:</p>
                <ul className="list-disc pl-6">
                  <li>FileUploader component</li>
                  <li>NIN input field</li>
                  <li>Verification progress indicator</li>
                  <li>Continue to Prioritization</li>
                </ul>
              </li>

              <li>
                <strong>Needs Prioritization (&quot;What&apos;s Most Important To You?&quot;)</strong>
                <p>Purpose: Capture search priorities to personalize suggestions.</p>
                <p>Prompt: &quot;What matters most in your search?&quot;</p>
                <p>Options (Multi-select chips/cards):</p>
                <ul className="list-disc pl-6">
                  <li>Affordability</li>
                  <li>Verified Rooms / Safe Homes</li>
                  <li>Finding Roommates</li>
                  <li>Flexible Rent / Payment Plans</li>
                  <li>Short-Term Stays</li>
                </ul>
                <p>Components:</p>
                <ul className="list-disc pl-6">
                  <li>MultiSelect chips/cards</li>
                  <li>ProgressStepper indicator</li>
                </ul>
              </li>

              <li>
                <strong>Path Selection (&quot;Choose Your Path&quot;)</strong>
                <p>Purpose: Guide users into the correct app flow.</p>
                <p>Prompt: &quot;How do you want to start?&quot;</p>
                <p>Options:</p>
                <ol className="list-decimal pl-6">
                  <li>Find Your People → Roommate matching flow</li>
                  <li>Find Your Place → Housing listings flow</li>
                  <li>Find Both → Combined roommate + housing flow</li>
                </ol>
                <p>Components:</p>
                <ul className="list-disc pl-6">
                  <li>OptionCards with microcopy + icon/illustration</li>
                  <li>Navigation to the next step depending on selection</li>
                </ul>
              </li>

              <li>
                <strong>KYC Flows (Conditional on Path)</strong>
                <p>8A. Roommate Flow (Find People)</p>
                <p>Fields / Screens:</p>
                <ul className="list-disc pl-6">
                  <li>Step 1: Basic Info - Age range, Gender preference (same / any)</li>
                  <li>Step 2: Preferences — Budget range (slider), Preferred location(s)</li>
                  <li>Optional: Lifestyle preferences</li>
                </ul>
                <p>Components:</p>
                <ul className="list-disc pl-6">
                  <li>FormFields</li>
                  <li>RangeSlider for budget</li>
                  <li>MultiSelect chips for location</li>
                  <li>ProgressStepper for step navigation</li>
                </ul>
                
                <p>8B. Housing Flow (Find Place)</p>
                <p>Fields / Screens:</p>
                <ul className="list-disc pl-6">
                  <li>Step 1: Location — Preferred city (Lagos, Abuja, PH, Ibadan, etc.)</li>
                  <li>Step 2: Preferences — Budget range, Type (Apartment / Shortlet / Shared Room)</li>
                  <li>Step 3: ID upload (optional now, required before booking)</li>
                </ul>
                <p>Components:</p>
                <ul className="list-disc pl-6">
                  <li>FormFields</li>
                  <li>RangeSlider for budget</li>
                  <li>Radio buttons / dropdown for type</li>
                  <li>FileUploader for ID</li>
                </ul>
                
                <p>8C. Combined Flow (Find Both)</p>
                <p>Fields / Screens:</p>
                <ul className="list-disc pl-6">
                  <li>Streamlined combination of Roommate + Housing fields</li>
                  <li>Suggested sequence: Basic info → Roommate prefs → Housing prefs</li>
                </ul>
                <p>Components:</p>
                <ul className="list-disc pl-6">
                  <li>FormFields, MultiSelect, RangeSlider, FileUploader</li>
                  <li>ProgressStepper</li>
                </ul>
              </li>

              <li>
                <strong>Trust & Community Highlight (&quot;Why Aparte?&quot;)</strong>
                <p>Purpose: Reinforce brand values & build trust before app entry.</p>
                <p>Screens / Components:</p>
                <ul className="list-disc pl-6">
                  <li>3 illustrated slides (swipe or auto-scroll):
                    <ol className="list-decimal pl-6">
                      <li>Community: Find people, not just places</li>
                      <li>Trust: Every listing verified. Every payment safe</li>
                      <li>Simplicity: From search to move-in, stress-free housing</li>
                    </ol>
                  </li>
                  <li>CTA: Continue to App →</li>
                </ul>
              </li>

              <li>
                <strong>KYC (Profile Basics)</strong>
                <p>Purpose: Collect essential personal info for recommendation & matching.</p>
                <p>Screens / Components:</p>
                <ul className="list-disc pl-6">
                  <li>Fields: Name, Age, Preferences</li>
                  <li>Lifestyle / Budget / Move-in date</li>
                  <li>ProgressStepper component</li>
                  <li>Tips / hints modal</li>
                </ul>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Home / Discovery */}
        <AccordionItem value="discovery">
          <AccordionTrigger className="text-xl font-semibold">
            2. Home / Discovery
          </AccordionTrigger>
          <AccordionContent >
             <p className="mb-2">
              Purpose: Give users a quick view of apartments (Apartment tab) or roommates (Apartee tab) with Tinder-style swipe, infinite scroll, and actionable details.
            </p>
            
            <div className="space-y-2 mt-2">
              <p className=" font-semibold">Feed Tabs</p>
              <p>Components / Features:</p>
              <ul className="list-disc pl-6">
                <li>Tabs: &quot;Apartees&quot; → list of roommates, &quot;Apartments&quot; → list of apartments</li>
                <li>InfiniteScrollFeed – stacked cards that load more as user swipes or scrolls</li>
                <li>SwipeActions – swipe left/right to skip or save card (match / shortlist)</li>
                <li>QuickFilterButton – shortcut to filter or sort feed</li>
                <li>SavedSearchIndicator – shows when feed reflects a saved search</li>
                <li>Filter Drawer
                  <ul className="list-disc pl-6">
                    <li>Price range, amenities, move-in date</li>
                    <li>MultiSelect, RangeSlider, SortDropdown</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="space-y-2 mt-2">
              <h3 className=" font-semibold">Apartee Card (Roommate)</h3>
              <p>Purpose: Display roommate&apos;s core info in stacked card, expandable for more details.</p>
              <p>Components / Features:</p>
              <ul className="list-disc pl-6">
                <li>Basic Info (Card Front):
                  <ul className="list-disc pl-6">
                    <li>Name, Age</li>
                    <li>Preferred city / area</li>
                    <li>Budget range</li>
                    <li>MediaCarousel: images & videos of person</li>
                  </ul>
                </li>
                <li>Expandable Info (Slide-Up Panel):
                  <ul className="list-disc pl-6">
                    <li>Lifestyle preferences</li>
                    <li>Move-in date, gender preference, etc.</li>
                  </ul>
                </li>
                <li>Interaction Buttons:
                  <ul className="list-disc pl-6">
                    <li>Swipe left/right for skip/save</li>
                    <li>View Full Profile: tap on name → opens Roommate Profile Screen</li>
                    <li>Quick match / contact CTA</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="space-y-2 mt-2">
              <h3 className=" font-semibold"> Apartment Card</h3>
              <p>Purpose: Display apartment info in stacked card, expandable for more details.</p>
              <p>Components / Features:</p>
              <ul className="list-disc pl-6">
                <li>Basic Info (Card Front):
                  <ul className="list-disc pl-6">
                    <li>Tags: e.g., &quot;1 Bedroom&quot;, &quot;Shared Room&quot;, etc.</li>
                    <li>Short description / headline</li>
                    <li>Price</li>
                    <li>Location (city/area)</li>
                    <li>MediaCarousel: images & videos of apartment</li>
                  </ul>
                </li>
                <li>Expandable Info (Slide-Up Panel):
                  <ul className="list-disc pl-6">
                    <li>Full description</li>
                    <li>Amenities (AmenityIcon list)</li>
                    <li>Landlord / Agent info (name, contact number)</li>
                    <li>Landlord / Agent Reviews</li>
                  </ul>
                </li>
                <li>Interactions:
                  <ul className="list-disc pl-6">
                    <li>Swipe left/right to skip or save</li>
                    <li>Tap on location → opens Map View with pin</li>
                    <li>Tap on landlord/agent → opens Landlord/Agent Profile</li>
                    <li>Quick contact CTA (call/message)</li>
                    <li>Book Inspection CTA → schedule & pay inspection fee</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="space-y-2 mt-2">
              <h3 className=" font-semibold">Feed Behavior</h3>
              <ul className="list-disc pl-6">
                <li>Infinite scroll: keeps loading roommates or apartments based on selected area</li>
                <li>Swipeable cards: Tinder-style gestures for match / skip</li>
                <li>Expandable panel: slides up on button tap for detailed info</li>
                <li>Profile / Map Navigation: name → profile, location → map, landlord → agent profile</li>
                <li>Media interaction: swipeable photos, videos, with autoplay preview</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Matches / Connections */}
        <AccordionItem value="matches">
          <AccordionTrigger className="text-xl font-semibold">
            3. Matches / Connections
          </AccordionTrigger>
          <AccordionContent >
           <p className="mb-2">
              Purpose: Display all users you&apos;ve mutually &quot;matched&quot; with (roommates or landlords/agents) and allow initiating conversations or removing connections.
            </p>

            <div className="space-y-2 mt-2">
              <h3 className=" font-semibold"> Matches Feed</h3>
              <p>Components / Features:</p>
              <ul className="list-disc pl-6">
                <li>Feed Tabs: &quot;Roommates&quot; → matched roommates, &quot;Apartments&quot; → matched apartments / landlords</li>
                <li>Stacked / List Cards: shows all matched connections</li>
                <li>Card Info (Roommate):
                  <ul className="list-disc pl-6">
                    <li>Name, Age</li>
                    <li>Profile picture</li>
                    <li>Shared preferences or match percentage</li>
                  </ul>
                </li>
                <li>Card Info (Apartment / Landlord):
                  <ul className="list-disc pl-6">
                    <li>Apartment name / title</li>
                    <li>Landlord / agent name</li>
                    <li>Thumbnail image</li>
                    <li>Key tags: bedroom count, location, price</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="space-y-2 mt-2">
              <h3 className=" font-semibold">Interaction Buttons (per card)</h3>
              <ul className="list-disc pl-6">
                <li>Start Conversation → opens Messaging Screen</li>
                <li>Remove / Unmatch → removes from matched feed</li>
                <li>View Profile / Apartment Details → tap name or thumbnail</li>
                <li>Quick Actions: favorite/star, short notes (optional)</li>
              </ul>
            </div>

            <div className="space-y-2 mt-2">
              <h3 className=" font-semibold">Feed Behavior</h3>
              <ul className="list-disc pl-6">
                <li>Infinite scroll: shows all matches with lazy load</li>
                <li>Swipe / Tap: optional swipe to remove or quick action buttons</li>
                <li>Mutual connection indicator: shows users who have matched back</li>
                <li>Notifications: real-time update when new match occurs</li>
                <li>Match Celebration Screen</li>
              </ul>
            </div>

            <div className="space-y-2 mt-2">
              <h3 className=" font-semibold">Navigation</h3>
              <ul className="list-disc pl-6">
                <li>Tap on card: → opens Profile / Apartment Detail Screen</li>
                <li>Tap &quot;Message&quot; CTA: → opens Conversation Thread Screen</li>
                <li>Remove / Unmatch: updates backend and removes from feed immediately (optimistic UI)</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Inspection & Booking */}
        <AccordionItem value="inspections">
          <AccordionTrigger className="text-xl font-semibold">
            4. Inspection & Booking Module
          </AccordionTrigger>
          <AccordionContent >
           <p className="mb-2">
              Purpose: Enable seamless scheduling, payment, and management of apartment inspections between Renters, Landlords, and Agents. Ensures trust, transparency, and accountability across all sides.
            </p>

            <div className="space-y-2 mt-2">
              <h3 className=" font-semibold">Renter Flow</h3>
              <p>Entry Points:</p>
              <ul className="list-disc pl-6">
                <li>Apartment Card → Expandable Info → &quot;Book Inspection&quot; CTA</li>
                <li>Matches Feed → Apartment → &quot;Book Inspection&quot;</li>
                <li>Profile → Inspections Tab (history & upcoming)</li>
              </ul>
              <p >Screens / Components:</p>
              <ol className="list-decimal pl-6">
                <li>Inspection Booking Screen
                  <ul className="list-disc pl-6">
                    <li>Calendar picker: available dates & times (pulled from landlord/agent availability)</li>
                    <li>Location info: apartment address + map preview</li>
                    <li>Fee breakdown: inspection fee or booking deposit (if applicable)</li>
                    <li>Payment method selector (Card, Transfer, Wallet)</li>
                    <li>CTA: Confirm & Pay</li>
                  </ul>
                </li>
                <li>Payment Screen (if required)
                  <ul className="list-disc pl-6">
                    <li>Payment gateway integration (Paystack, Flutterwave, etc.)</li>
                    <li>Receipt confirmation modal</li>
                    <li>Auto-send receipt to renter email/app inbox</li>
                  </ul>
                </li>
                <li>Inspection Status Screen (Renter)
                  <ul className="list-disc pl-6">
                    <li>Upcoming inspections: apartment name, landlord/agent contact, date/time</li>
                    <li>Past inspections: completed visits with option to leave review</li>
                    <li>Cancel/Reschedule CTA (subject to landlord/agent rules)</li>
                    <li>Status indicators: Pending / Confirmed / Completed / Cancelled</li>
                  </ul>
                </li>
              </ol>
            </div>

            <div className="space-y-2 mt-2">
              <h3 className=" font-semibold">Landlord / Agent Flow</h3>
              <p>Entry Points:</p>
              <ul className="list-disc pl-6">
                <li>Profile → Inspections Tab</li>
                <li>Apartment Listing → Manage Inspections</li>
              </ul>
              <p>Screens / Components:</p>
              <ol className="list-decimal pl-6">
                <li>Inspection Requests List
                  <ul className="list-disc pl-6">
                    <li>FlatList of incoming requests per apartment</li>
                    <li>Request cards: renter name + profile pic, requested date/time, status (pending/confirmed)</li>
                    <li>Action buttons: Approve / Suggest New Time / Decline</li>
                  </ul>
                </li>
                <li>Schedule Management Screen
                  <ul className="list-disc pl-6">
                    <li>Calendar view: blocked slots, available slots</li>
                    <li>Add availability → date/time picker</li>
                    <li>Sync with Google/Outlook Calendar (optional)</li>
                  </ul>
                </li>
                <li>Inspection Details Screen
                  <ul className="list-disc pl-6">
                    <li>Apartment details (auto-linked)</li>
                    <li>Renter info (profile summary, contact details if confirmed)</li>
                    <li>Status management: Confirm / Mark Completed / Cancel</li>
                    <li>Chat CTA: message renter directly for coordination</li>
                  </ul>
                </li>
                <li>Payment & Tracking (if inspection fees are set)
                  <ul className="list-disc pl-6">
                    <li>See fee collected (inspection fee or booking deposit)</li>
                    <li>Payment status (Paid / Pending / Refunded)</li>
                    <li>Export report (optional for agents with multiple listings)</li>
                  </ul>
                </li>
              </ol>
            </div>

            <div className="space-y-2 mt-2">
              <h3 className=" font-semibold">Shared Features (All Users)</h3>
              <ul className="list-disc pl-6">
                <li>Notifications
                  <ul className="list-disc pl-6">
                    <li>Renter: confirmation, reminders, cancellations</li>
                    <li>Landlord/Agent: new requests, reminders, cancellations</li>
                  </ul>
                </li>
                <li>Inspection Status Badges
                  <ul className="list-disc pl-6">
                    <li>Pending, Confirmed, Completed, Cancelled, No-Show</li>
                  </ul>
                </li>
                <li>Reviews & Feedback
                  <ul className="list-disc pl-6">
                    <li>After completion: renters can rate landlords/agents & apartments, landlords/agents can rate renter reliability</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="space-y-2 mt-2">
              <h3 className=" font-semibold"> Navigation & Integration</h3>
              <ul className="list-disc pl-6">
                <li>From Apartment Card → Inspection Booking CTA → Booking Flow</li>
                <li>From Profile → Inspections Tab → List of upcoming/past inspections</li>
                <li>From Matches → Apartment → Book / Manage Inspection</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Messaging */}
        <AccordionItem value="messaging">
          <AccordionTrigger className="text-xl font-semibold">
            5. Messaging / Conversations
          </AccordionTrigger>
          <AccordionContent >
            <p className="mb-2">
                Purpose: Allow users to communicate with matched roommates or other users, share apartments, profiles, and manage chats individually or in groups.</p>

            <div className="space-y-2 mt-2">
              <h3 className=" font-semibold"> Conversations List Screen</h3>
              <p>Components / Features:</p>
              <ul className="list-disc pl-6">
                <li>Conversation Cards:
                  <ul className="list-disc pl-6">
                    <li>Contact avatar + name</li>
                    <li>Last message preview (text / media / apartment link)</li>
                    <li>Timestamp of last message</li>
                    <li>Unread badge indicator</li>
                  </ul>
                </li>
                <li>Search Bar: filter conversations by name or apartment</li>
                <li>New Message / Compose Button: opens user selection modal</li>
                <li>Filter / Tab Option: &quot;All&quot;, &quot;Unread&quot;, &quot;Groups&quot;</li>
              </ul>
            </div>

            <div className="space-y-2 mt-2">
              <h3 className=" font-semibold"> Conversation Thread Screen</h3>
              <p>Components / Features:</p>
              <ul className="list-disc pl-6">
                <li>Message Bubbles: sent/received distinction</li>
                <li>Typing Indicator: shows when the other person is typing</li>
                <li>Read / Delivered Statuses: small indicators below messages</li>
                <li>Message Input Bar:
                  <ul className="list-disc pl-6">
                    <li>Text input field</li>
                    <li>Attachments: images, videos, documents</li>
                    <li>Share apartment button → attach listing card</li>
                    <li>Share roommate profile button (conditional)</li>
                    <li>Emoji / Sticker picker (optional)</li>
                    <li>Send button</li>
                  </ul>
                </li>
                <li>Voice Notes</li>
                <li>Group Chat Features:
                  <ul className="list-disc pl-6">
                    <li>Add/remove members (if creator / admin)</li>
                    <li>Group name & avatar</li>
                    <li>Notifications toggle per chat</li>
                  </ul>
                </li>
                <li>Swipe Actions:
                  <ul className="list-disc pl-6">
                    <li>Swipe left → reply to specific message</li>
                    <li>Swipe right → quick reaction / like</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="space-y-2 mt-2">
              <h3 className=" font-semibold">Apartment / Roommate Sharing</h3>
              <ul className="list-disc pl-6">
                <li>From conversation input bar or gallery:
                  <ul className="list-disc pl-6">
                    <li>Share apartment listing → card with photo, price, location, and link</li>
                    <li>Share roommate profile → card with basic info, picture, preferences</li>
                    <li>Tap on shared card → navigates to detailed view</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="space-y-2 mt-2">
              <h3 className=" font-semibold">Advanced Features</h3>
              <ul className="list-disc pl-6">
                <li>Message Tags: mark messages with categories like &quot;Important&quot;, &quot;To Visit&quot;, &quot;Payment Pending&quot;</li>
                <li>Pinned Conversations: pin favorite matches / apartments</li>
                <li>Search within Conversation: find keywords or shared listings</li>
                <li>Offline Queue: send messages even without connectivity, auto-send on reconnect</li>
                <li>Notifications: push notifications for new messages / mentions</li>
                <li>Media Viewer: tap on image/video → fullscreen view, swipe between multiple attachments</li>
                <li>Link Previews: show small previews for shared listings or external URLs</li>
              </ul>
            </div>

            <div className="space-y-2 mt-2">
              <h3 className=" font-semibold">Navigation Flow</h3>
              <ul className="list-disc pl-6">
                <li>Conversations List → Thread: tap card</li>
                <li>Thread → Profile / Apartment: tap shared card or avatar</li>
                <li>Thread → Compose Group / Share Listing: via input bar buttons</li>
                <li>Swipe Actions → Reply / React: inline interaction</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

         {/* Profile */}


<AccordionItem value="profile">
  <AccordionTrigger className="text-xl font-semibold">
    6. Profile 
  </AccordionTrigger>
  <AccordionContent>
    <p className="mb-2">
      Purpose: Allow users to view their own profile, edit it, and view others&apos; profiles. 
      Profiles adapt based on user type and permissions.
    </p>
    
    <div>
      <h3 className=" font-semibold mt-4">User Types & Profile Variations</h3>
      <div className="overflow-x-auto my-4 rounded-md border">
        <Table className="min-w-full">
      <TableHeader>
        <TableRow className="bg-gray-50">
          <TableHead className="w-1/4 px-4 py-3 font-medium text-left">User Type</TableHead>
          <TableHead className="w-1/2 px-4 py-3 font-medium text-left">Public Profile</TableHead>
          <TableHead className="w-1/4 px-4 py-3 font-medium text-left">Self-View Profile</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={index}>
            <TableCell className="px-4 py-3 font-medium whitespace-normal align-top">{item.userType}</TableCell>
            <TableCell className="px-4 py-3 whitespace-normal align-top">{item.publicProfile}</TableCell>
            <TableCell className="px-4 py-3 whitespace-normal align-top">{item.selfViewProfile}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
      </div>
    </div>
    <div>
     <h3 className=" font-semibold mt-4">Profile Screen Components</h3>
      <p className="font-medium">Shared Components (All Users):</p>
      <ul className="list-disc pl-5 mt-2 space-y-1">
        <li>
          <strong>Profile Header:</strong>
          <ul className="list-disc pl-5 mt-1 space-y-1">
            <li>Avatar/Profile photo (circle, tap to update in self-view)</li>
            <li>Name / Role / Agency name</li>
            <li>Verification badge(s)</li>
            <li>Safety &amp; Reporting Buttons → Block / Report visible on public profiles and in chat headers</li>
          </ul>
        </li>
        <li>
          <strong>Stats Section:</strong>
          <ul className="list-disc pl-5 mt-1 space-y-1">
            <li>Number of listings posted (Landlord/Agent)</li>
            <li>Matches / Connections (Renter)</li>
            <li>Views / Inquiries (optional)</li>
          </ul>
        </li>
        <li>
          <strong>Action Buttons:</strong>
          <ul className="list-disc pl-5 mt-1 space-y-1">
            <li>Follow / Connect / Message (public view)</li>
            <li>Edit Profile / Add Listing / Verification (self-view)</li>
          </ul>
        </li>
        <li>
          <strong>Media Gallery:</strong>
          <ul className="list-disc pl-5 mt-1 space-y-1">
            <li>Photos + Videos</li>
            <li>Swipe horizontally (Instagram-style carousel)</li>
          </ul>
        </li>
        <li>
          <strong>Bio / Description Section:</strong>
          <ul className="list-disc pl-5 mt-1 space-y-1">
            <li>Lifestyle, preferences, short intro</li>
            <li>Apartment tags or specialties for landlords/agents</li>
          </ul>
        </li>
      </ul>

      <p className="font-medium mt-4">Renter-Specific Components:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Budget slider visualization</li>
        <li>Preferred location chips</li>
        <li>Roommate compatibility score (optional)</li>
        <li>Swipe-up for more details → full KYC / lifestyle profile</li>
      </ul>

      <p className="font-medium mt-4">Landlord / Agent-Specific Components:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Verified listings grid / carousel</li>
        <li>Contact info: tap to call / email</li>
        <li>Map of listed properties</li>
        <li>Proposal / inquiry tracking</li>
      </ul>
    </div>

    <div>
      <h3 className=" font-semibold mt-4">CRUD Functionality</h3>
      <p className="font-medium">Renter Self-View:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Create:</strong> Upload photos/videos, add lifestyle/bio</li>
        <li><strong>Read:</strong> View full profile, including public view</li>
        <li><strong>Update:</strong> Edit personal info, preferences, budget, move-in date</li>
        <li><strong>Delete:</strong> Remove photos/videos, optionally hide profile</li>
      </ul>

      <p className="font-medium mt-4">Landlord / Agent Self-View:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Create:</strong> Add new listings, upload ID/proof, add agency info</li>
        <li><strong>Read:</strong> View full profile &amp; listings</li>
        <li><strong>Update:</strong> Edit listings, contact info, agency name, verification documents</li>
        <li><strong>Delete:</strong> Remove listings, optionally hide profile</li>
      </ul>

      <p className="font-medium mt-4">Public Profile View (All):</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Only read capability: see info, media, badges, listings (if applicable)</li>
        <li>Actions: Follow, Message, Send Proposal (Renter → Landlord/Agent), Shortlist</li>
      </ul>
    </div>

    <div>
      <h3 className=" font-semibold mt-4">Navigation &amp; Flow</h3>
      <ol className="list-decimal pl-5 space-y-1">
        <li>Public Profiles: Accessed via feed, matches, apartment cards, or search</li>
        <li>Self-Profile: Tap avatar / profile tab → edit mode</li>
        <li>Media Gallery: Tap photo/video → fullscreen carousel → swipe through media</li>
        <li>Contact / Connect Actions:
          <ul className="list-disc pl-5 mt-1 space-y-1">
            <li>Renter → Landlord / Agent (message, inquiry)</li>
            <li>Landlord / Agent → Renter (message, proposal)</li>
          </ul>
        </li>
        <li>Listings / Properties: Tap property thumbnail → navigate to listing detail screen</li>
      </ol>
    </div>

    <div>
      <h3 className=" font-semibold mt-4">Advanced Features</h3>
      <ul className="list-disc pl-5 space-y-1">
        <li>Profile completion progress bar (similar to Tinder / LinkedIn)</li>
        <li>Verification badges for NIN, ID, or property ownership</li>
        <li>Highlighted listings or featured media</li>
        <li>Mutual match / shared apartments indicator</li>
        <li>Activity feed: recent inquiries, proposals, updates</li>
      </ul>
    </div>
  </AccordionContent>
</AccordionItem>

        {/* Settings */}
        <AccordionItem value="settings">
          <AccordionTrigger className="text-xl font-semibold">
           7. Settings Module
          </AccordionTrigger>
          <AccordionContent >
            <div>
              <h3 className=" font-semibold">Main Settings Page</h3>
              <p className="mb-2">Purpose: Central hub for account, app, and privacy settings.</p>
              
              <p className="font-medium mt-4">Components:</p>
              <ul className="list-disc pl-6">
                <li>Profile Header Row (Avatar + Name + Role + Tap → Profile)</li>
                <li>Sections (FlatList style with grouped rows):
                  <ol className="list-decimal pl-6 mt-2">
                    <li><strong>Account</strong>
                      <ul className="list-disc pl-6">
                        <li>Edit Profile → self-profile CRUD screen</li>
                        <li>Change Password</li>
                        <li>Verify Identity (KYC)</li>
                        <li>Manage Linked Accounts (Google, Facebook, Apple)</li>
                      </ul>
                    </li>
                    <li><strong>Preferences</strong>
                      <ul className="list-disc pl-6">
                        <li>Notifications (push, email, SMS toggles)</li>
                        <li>Discovery Preferences (distance, budget, roommate filters)</li>
                        <li>Language &amp; Region</li>
                        <li>Dark Mode / Theme toggle</li>
                      </ul>
                    </li>
                    <li><strong>Security &amp; Privacy</strong>
                      <ul className="list-disc pl-6">
                        <li>Two-Factor Authentication</li>
                        <li>Blocked Users</li>
                        <li>Manage Data Permissions (location, camera, storage)</li>
                        <li>Hide Profile (pause visibility)</li>
                      </ul>
                    </li>
                    <li><strong>Support</strong>
                      <ul className="list-disc pl-6">
                        <li>Help Center / FAQ</li>
                        <li>Report a Problem</li>
                        <li>Contact Support</li>
                        <li>Community Guidelines</li>
                      </ul>
                    </li>
                    <li><strong>Danger Zone</strong>
                      <ul className="list-disc pl-6">
                        <li>Deactivate Account (temporary)</li>
                        <li>Delete Account (permanent, confirmation modal)</li>
                      </ul>
                    </li>
                  </ol>
                </li>
              </ul>
            </div>

            <div>
              <h3 className=" font-semibold mt-4">Sub-Screens</h3>
              <ol className="list-decimal pl-6">
                <li><strong>Verify Identity (KYC Screen)</strong>
                  <ul className="list-disc pl-6">
                    <li>FileUploader for ID (NIN, Passport, Driver&apos;s License)</li>
                    <li>Live selfie capture (optional, like Tinder)</li>
                    <li>Verification status indicator (Pending / Verified / Failed)</li>
                    <li>CTA: Submit for Verification</li>
                  </ul>
                </li>
                <li><strong>Change Password</strong>
                  <ul className="list-disc pl-6">
                    <li>Current password input</li>
                    <li>New password input</li>
                    <li>Confirm new password input</li>
                    <li>CTA: Save</li>
                  </ul>
                </li>
                <li><strong>Preferences (Discovery &amp; App)</strong>
                  <ul className="list-disc pl-6">
                    <li>Distance slider (radius for roommate/apartment search)</li>
                    <li>Budget range slider</li>
                    <li>Roommate filters (gender, lifestyle)</li>
                    <li>Notification toggles (DMs, matches, apartment updates, promos)</li>
                    <li>Language &amp; region dropdown</li>
                    <li>Dark Mode toggle</li>
                  </ul>
                </li>
                <li><strong>Deactivate Account</strong>
                  <ul className="list-disc pl-6">
                    <li>Copy: &quot;Your account will be hidden until you log back in.&quot;</li>
                    <li>Options: Pause visibility for 1 week / 1 month / Indefinitely</li>
                    <li>CTA: Deactivate / Cancel</li>
                  </ul>
                </li>
                <li><strong>Delete Account</strong>
                  <ul className="list-disc pl-6">
                    <li>Warning screen (irreversible action)</li>
                    <li>Checklist of consequences (lose matches, chats, saved listings)</li>
                    <li>Confirmation input (&quot;Type DELETE to confirm&quot;)</li>
                    <li>CTA: Delete / Cancel</li>
                  </ul>
                </li>
                <li><strong>Privacy &amp; Security</strong>
                  <ul className="list-disc pl-6">
                    <li>Two-Factor Authentication toggle</li>
                    <li>List of blocked users (FlatList of avatars + unblock option)</li>
                    <li>Data permissions (toggle camera, location, storage access)</li>
                  </ul>
                </li>
              </ol>
            </div>

            <div>
              <h3 className=" font-semibold mt-4">Common Components (Reusable Across Settings)</h3>
              <ul className="list-disc pl-6">
                <li>FlatList rows: icon + title + arrow (→)</li>
                <li>Toggles: switches for notifications, privacy, theme</li>
                <li>Sliders: budget, distance</li>
                <li>FileUploader: for KYC, documents</li>
                <li>Modal confirmations: for deactivate/delete actions</li>
                <li>ProgressStepper / Status Badge: for verification flow</li>
              </ul>
            </div>

            <div>
              <h3 className=" font-semibold mt-4">Flow &amp; Navigation</h3>
              <ul className="list-disc pl-6">
                <li>Profile Tab → Settings Icon → Settings Main Page</li>
                <li>Row Tap → Sub-screen (e.g., Change Password, Preferences, Verify ID)</li>
                <li>Back Nav returns to Settings Main Page</li>
                <li>Danger Zone actions → Confirmation Modals</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Global Enhancements */}
        <AccordionItem value="global">
          <AccordionTrigger className="text-xl font-semibold">
            9. Global UX Enhancements
          </AccordionTrigger>
          <AccordionContent >
            <ul className="list-disc pl-6">
              <li>Loading States → Skeleton screens / shimmer placeholders while data populates (feeds, profiles, messages)</li>
              <li>Empty States → Illustrations + guidance text for when no matches, no conversations, no listings (encourages next action instead of blank screen)</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}