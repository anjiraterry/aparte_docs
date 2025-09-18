import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ComponentsDoc() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">Components</h1>
      <p className="text-muted-foreground">
        A categorized breakdown of reusable components across the app, organized by Cards, Forms, Modals, Lists, Drawers, Media, and Indicators.
      </p>

      <Accordion type="single" collapsible className="space-y-4">
        {/* Cards */}
        <AccordionItem value="cards">
          <AccordionTrigger className="text-xl font-semibold">1. Cards</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Discovery / Feed</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>AparteeCard (roommate summary + expandable)</li>
                  <li>ApartmentCard (listing summary + expandable)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Matches</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>MatchCardRoommate</li>
                  <li>MatchCardApartment</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Messaging</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>ConversationCard (preview of chat)</li>
                  <li>MessageBubble (chat message, text/media)</li>
                  <li>SharedListingCard (apartment/roommate shared inside chat)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Inspections</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>InspectionRequestCard (landlord view)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Profile</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Landlord/AgentCard (profile + listings)</li>
                  <li>StatsCard (matches, views, etc.)</li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Forms */}
        <AccordionItem value="forms">
          <AccordionTrigger className="text-xl font-semibold">2. Forms</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Authentication & Onboarding</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>LoginForm (email/password/social login)</li>
                  <li>SignupForm</li>
                  <li>OTPVerificationForm</li>
                  <li>KYCForm (NINInput, IDUpload, SelfieCapture)</li>
                  <li>UserTypeSelectionForm</li>
                  <li>PreferencesForm (budget slider, location multi-select, lifestyle chips)</li>
                  <li>NeedsPrioritizationForm</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Profile</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>EditProfileForm (bio, avatar, preferences)</li>
                  <li>EditPreferencesForm</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Inspection</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>InspectionBookingForm (calendar, location, payment)</li>
                  <li>InspectionScheduleForm (landlord availability)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Settings</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>ChangePasswordForm</li>
                  <li>VerifyIdentityForm</li>
                  <li>PreferencesSettingsForm</li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Modals */}
        <AccordionItem value="modals">
          <AccordionTrigger className="text-xl font-semibold">3. Modals</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-1">
              <li>AddPhotoModal</li>
              <li>AddListingModal</li>
              <li>AddPreferenceModal</li>
              <li>EditMediaModal</li>
              <li>DeleteConfirmationModal</li>
              <li>ReceiptModal (after payment success)</li>
              <li>MatchCelebrationModal </li>
              <li>ReportUserModal</li>
              <li>BlockUserModal</li>
              <li>DeactivateAccountModal</li>
              <li>PaymentModal</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Lists & Feeds */}
        <AccordionItem value="lists">
          <AccordionTrigger className="text-xl font-semibold">4. Lists & Feeds</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-1">
              <li>InfiniteScrollFeed (apartments/roommates)</li>
              <li>MatchesFeed (roommates/apartments)</li>
              <li>ConversationList (chats preview)</li>
              <li>InspectionStatusList (upcoming, past, cancelled)</li>
              <li>ApartmentListingsGrid (landlord profile)</li>
              <li>BlockedUsersList</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Drawers / Panels */}
        <AccordionItem value="drawers">
          <AccordionTrigger className="text-xl font-semibold">5. Drawers / Panels</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-1">
              <li>FilterDrawer (price, amenities, sort)</li>
              <li>GroupChatPanel (members, settings)</li>
              <li>ProfileActionPanel</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Media & Galleries */}
        <AccordionItem value="media">
          <AccordionTrigger className="text-xl font-semibold">6. Media & Galleries</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-1">
              <li>MediaCarousel (feed cards)</li>
              <li>ProfileMediaGallery (upload/edit)</li>
              <li>FullscreenMediaViewer</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Indicators & States */}
        <AccordionItem value="indicators">
          <AccordionTrigger className="text-xl font-semibold">7. Indicators & States</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-1">
              <li>ProgressStepper (onboarding, KYC)</li>
              <li>StatusBadges (Pending, Confirmed, Completed, Cancelled)</li>
              <li>Toasts / Snackbars (notifications, success/error)</li>
              <li>LoadingSkeletons (feed, profile, chat)</li>
              <li>EmptyStates (no matches, no messages, no listings)</li>
              <li>ErrorStates (retry screen)</li>
              <li>TypingIndicator (chat)</li>
            </ul>
          </AccordionContent>
        </AccordionItem>


            <AccordionItem value="crud">
          <AccordionTrigger className="text-xl font-semibold">
            8. Profile 
          </AccordionTrigger>
          <AccordionContent>
            <div>
              <h3 className=" font-semibold">1. Add / Create Modals</h3>
              <p className="mb-2">Purpose: Lightweight modals for quickly adding profile content.</p>
              
              <ol className="list-decimal pl-6 mt-2">
                <li><strong>Add Photo / Video Modal</strong>
                  <ul className="list-disc pl-6">
                    <li>MediaUploader (camera roll, camera, video)</li>
                    <li>Preview carousel</li>
                    <li>CTA: Upload / Cancel</li>
                  </ul>
                </li>
                <li><strong>Add Bio / Lifestyle Modal</strong>
                  <ul className="list-disc pl-6">
                    <li>TextArea input (multi-line)</li>
                    <li>Character counter</li>
                    <li>CTA: Save / Cancel</li>
                  </ul>
                </li>
                <li><strong>Add Preference Modal (Renter only)</strong>
                  <ul className="list-disc pl-6">
                    <li>Budget: RangeSlider</li>
                    <li>Location: MultiSelect Chips (cities/areas)</li>
                    <li>Lifestyle tags (quiet, outgoing, smoker/non-smoker)</li>
                    <li>CTA: Save</li>
                  </ul>
                </li>
                <li><strong>Add Listing Modal (Landlord/Agent only)</strong>
                  <ul className="list-disc pl-6">
                    <li>FormFields: Title, Description, Price, Location, Type (apartment/shortlet/shared room)</li>
                    <li>Amenity checklist (WiFi, power, water, etc.)</li>
                    <li>MediaUploader for apartment photos/videos</li>
                    <li>CTA: Publish / Save Draft</li>
                  </ul>
                </li>
              </ol>
            </div>

            <div>
              <h3 className=" font-semibold mt-4">2. Edit / Update Screens</h3>
              <p>Purpose: Inline edits or full-screen forms for updating profile sections.</p>
              
              <ol className="list-decimal pl-6 mt-2">
                <li><strong>Edit Profile Screen (All Users)</strong>
                  <ul className="list-disc pl-6">
                    <li>Avatar: tap → open photo picker</li>
                    <li>Name, Age, Contact Info (inputs)</li>
                    <li>Bio / Lifestyle (TextArea)</li>
                    <li>Verification status (ID uploader if missing)</li>
                    <li>CTA: Save Changes</li>
                  </ul>
                </li>
                <li><strong>Edit Preferences (Renter)</strong>
                  <ul className="list-disc pl-6">
                    <li>FlatList of preferences with toggle/edit</li>
                    <li>Budget RangeSlider (editable)</li>
                    <li>Location chips (editable)</li>
                    <li>CTA: Save</li>
                  </ul>
                </li>
                <li><strong>Edit Listings (Landlord/Agent)</strong>
                  <ul className="list-disc pl-6">
                    <li>FlatList of user&apos;s listings (cards with edit/delete icons)</li>
                    <li>Tap listing → Edit Listing Form (same as Add Listing, pre-filled with data)</li>
                    <li>CTA: Update</li>
                  </ul>
                </li>
                <li><strong>Edit Media (All Users)</strong>
                  <ul className="list-disc pl-6">
                    <li>FlatList of uploaded photos/videos</li>
                    <li>Options: Reorder, Replace, Delete</li>
                    <li>CTA: Done</li>
                  </ul>
                </li>
              </ol>
            </div>

            <div>
              <h3 className=" font-semibold mt-4">3. Delete / Remove Modals</h3>
              <p>Purpose: Confirm destructive actions before removal.</p>
              
              <ol className="list-decimal pl-6 mt-2">
                <li><strong>Delete Media Modal</strong>
                  <ul className="list-disc pl-6">
                    <li>Preview of selected photo/video</li>
                    <li>Copy: &quot;Remove this from your profile?&quot;</li>
                    <li>Buttons: Cancel / Delete</li>
                  </ul>
                </li>
                <li><strong>Delete Listing Modal (Landlord/Agent)</strong>
                  <ul className="list-disc pl-6">
                    <li>Listing title + thumbnail</li>
                    <li>Copy: &quot;This listing will no longer appear to renters.&quot;</li>
                    <li>Buttons: Cancel / Delete</li>
                  </ul>
                </li>
                <li><strong>Unmatch / Remove Connection (Renter only)</strong>
                  <ul className="list-disc pl-6">
                    <li>Roommate/Match avatar + name</li>
                    <li>Copy: &quot;You won&apos;t be able to message [Name] anymore.&quot;</li>
                    <li>Buttons: Cancel / Unmatch</li>
                  </ul>
                </li>
              </ol>
            </div>

            <div>
              <h3 className=" font-semibold mt-4">4. FlatList Modals (Reusable Across CRUD Flows)</h3>
              <p>These are consistent UI patterns we&apos;ve already implied in previous flows:</p>
              <ul className="list-disc pl-6">
                <li>Media FlatList: horizontal scroll for images/videos with add/remove buttons</li>
                <li>Preference FlatList: chips/tags (budget, location, lifestyle)</li>
                <li>Listing FlatList: cards for each listing with quick edit/delete icons</li>
                <li>Matches FlatList: avatars/cards with quick actions (message, unmatch)</li>
              </ul>
            </div>

            <div>
              <h3 className=" font-semibold mt-4">5. Navigation Flow</h3>
              <ul className="list-disc pl-6">
                <li>Self-Profile → Edit CTA → Edit Profile Screen</li>
                <li>Self-Profile → Add CTA → Add Photo / Add Bio / Add Listing Modal</li>
                <li>Self-Profile → Manage Listings (for Landlords/Agents) → FlatList of listings → Edit/Delete</li>
                <li>Any Content Long Press / Swipe → Delete Modal</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}