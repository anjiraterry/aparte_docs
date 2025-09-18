import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function StateManagementDoc() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">State Management</h1>
       <p className="text-muted-foreground">
  Comprehensive guide to the state management architecture using Redux Toolkit with RTK Query.
</p>
      <Accordion type="single" collapsible className="space-y-4">
        {/* Auth Slice */}
        <AccordionItem value="auth">
          <AccordionTrigger className="text-xl font-semibold">
            1. Auth Slice
          </AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">
              Manages login state, onboarding progress, and authentication
              tokens.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>State:</strong>{" "}
                {"{ userType, isAuthenticated, token, onboardingStep }"}
              </li>
              <li>
                <strong>Actions:</strong> loginSuccess, logout, setUserType,
                setOnboardingStep
              </li>
              <li>
                <strong>Thunks/Queries:</strong> signupUser, loginUser,
                verifyOtp, refreshSession, logoutUser
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* User Slice */}
        <AccordionItem value="user">
          <AccordionTrigger className="text-xl font-semibold">
           2. User Slice
          </AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">Manages user profile, verification status, media uploads.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>State:</strong>{" "}
                {"{ profile, verificationStatus, media, preferences }"}
              </li>
              <li>
                <strong>Actions:</strong> setProfile, updateProfile,
                setVerificationStatus, addMedia, removeMedia
              </li>
              <li>
                <strong>Thunks/Queries:</strong> fetchUserProfile,
                updateUserProfile, uploadId, uploadSelfie,
                checkVerificationStatus
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Preferences Slice */}
        <AccordionItem value="preferences">
          <AccordionTrigger className="text-xl font-semibold">
           3. Preferences Slice
          </AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">
              Stores KYC info, housing needs, and roommate preferences for
              filtering and onboarding.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>State:</strong>{" "}
                {"{ priorities, roommatePrefs, housingPrefs }"}
              </li>
              <li>
                <strong>Actions:</strong> setPreferences, updateFilter,
                resetPreferences
              </li>
              <li>
                <strong>Thunks/Queries:</strong> savePreferences,
                fetchPreferences
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Roommates Slice */}
        <AccordionItem value="roommates">
          <AccordionTrigger className="text-xl font-semibold">
           4. Roommates Slice
          </AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">Handles roommate feed, profiles, invites, and blocking.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>State:</strong> {"{ list, detail, filters }"}
              </li>
              <li>
                <strong>Actions:</strong> setRoommates, setRoommateDetail,
                applyFilters
              </li>
              <li>
                <strong>Thunks/Queries:</strong> fetchRoommates,
                fetchRoommateById, sendRoommateInvite, blockRoommate
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Housing Slice */}
        <AccordionItem value="housing">
          <AccordionTrigger className="text-xl font-semibold">
           5. Housing Slice
          </AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">Manages housing listings, landlord details, and favorites.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>State:</strong> {"{ listings, filters, detail, saved }"}
              </li>
              <li>
                <strong>Actions:</strong> setListings, setListingDetail,
                toggleSavedListing
              </li>
              <li>
                <strong>Thunks/Queries:</strong> fetchListings,
                fetchListingById, fetchLandlordById, toggleSaveListing
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Matches Slice */}
        <AccordionItem value="matches">
          <AccordionTrigger className="text-xl font-semibold">
           6. Matches Slice
          </AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">Handles matches feed and match celebration flow.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>State:</strong>{" "}
                {"{ roommates, apartments, celebration }"}
              </li>
              <li>
                <strong>Actions:</strong> setMatches, addMatch, removeMatch,
                triggerCelebration
              </li>
              <li>
                <strong>Thunks/Queries:</strong> fetchMatches, createMatch,
                deleteMatch
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Messages Slice */}
        <AccordionItem value="messages">
          <AccordionTrigger className="text-xl font-semibold">
           7. Messages Slice
          </AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">Manages chat conversations, media, and active thread state.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>State:</strong>{" "}
                {"{ conversations, threads, activeThread }"}
              </li>
              <li>
                <strong>Actions:</strong> setConversations, addMessage,
                deleteMessage, setActiveThread
              </li>
              <li>
                <strong>Thunks/Queries:</strong> fetchConversations,
                fetchThread, sendMessage, sendMedia, markMessageRead
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Inspections Slice */}
        <AccordionItem value="inspections">
          <AccordionTrigger className="text-xl font-semibold">
           8. Inspections Slice
          </AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">
              Handles inspection bookings, payments, and landlord availability.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>State:</strong>{" "}
                {"{ bookings, requests, availability }"}
              </li>
              <li>
                <strong>Actions:</strong> setBookings, setRequests,
                setAvailability, updateStatus
              </li>
              <li>
                <strong>Thunks/Queries:</strong> createBooking, payBooking,
                fetchBookingStatus, fetchBookings, cancelBooking,
                approveInspection, updateAvailability
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Notifications Slice */}
        <AccordionItem value="notifications">
          <AccordionTrigger className="text-xl font-semibold">
           9. Notifications Slice
          </AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">
              Handles push and in-app notifications with unread count tracking.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>State:</strong> {"{ items, unreadCount, pushToken }"}
              </li>
              <li>
                <strong>Actions:</strong> addNotification, markAsRead,
                setPushToken
              </li>
              <li>
                <strong>Thunks/Queries:</strong> fetchNotifications,
                registerPushToken, markNotificationRead
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Settings Slice */}
        <AccordionItem value="settings">
          <AccordionTrigger className="text-xl font-semibold">
           10. Settings Slice
          </AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">Handles account settings, preferences, and billing details.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>State:</strong>{" "}
                {"{ theme, privacy, notifications, billing }"}
              </li>
              <li>
                <strong>Actions:</strong> toggleTheme, updatePrivacy,
                updateBilling
              </li>
              <li>
                <strong>Thunks/Queries:</strong> updateSettings, fetchSettings
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* UI Slice */}
        <AccordionItem value="ui">
          <AccordionTrigger className="text-xl font-semibold">
           11. UI Slice (Utility)
          </AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">
              Handles app-wide transient state like loaders, modals, and toast
              messages.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>State:</strong> {"{ loading, modal, toast }"}
              </li>
              <li>
                <strong>Actions:</strong> showLoader, hideLoader, showToast,
                openModal, closeModal
              </li>
              <li>
                <strong>Used in:</strong> All screens (global helpers)
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}