import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FormsDoc() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">Forms & Validation</h1>
      <p className="text-muted-foreground">
        Comprehensive guide to form components, validation patterns, and user input flows across the Aparte platform.
      </p>

      <Accordion type="single" collapsible className="space-y-4">
        {/* Onboarding & Authentication Forms */}
        <AccordionItem value="onboarding-forms">
          <AccordionTrigger className="text-xl font-semibold">1. Onboarding & Authentication Forms</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Signup / Login Form</strong>
                <p className="mb-2">Fields: email, password, confirm password (signup), social login</p>
              </li>
              <li>
                <strong>OTP Verification Form</strong>
                <p className="mb-2">Fields: 6-digit code</p>
              </li>
              <li>
                <strong>User Type Selection Form</strong>
                <p className="mb-2">Single-select cards (Student, Corper, Professional, Traveler)</p>
              </li>
              <li>
                <strong>Identity Verification Form</strong>
                <p className="mb-2">File upload (ID, NIN), text input for NIN number</p>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Prioritization & Preferences */}
        <AccordionItem value="preferences-forms">
          <AccordionTrigger className="text-xl font-semibold">2. Prioritization & Preference Forms</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Needs Prioritization Form</strong>
                <p className="mb-2">Multi-select chips (affordability, verified homes, etc.)</p>
              </li>
              <li>
                <strong>Path Selection Form</strong>
                <p className="mb-2">Single-select cards (Find People, Find Place, Find Both)</p>
              </li>
              <li>
                <strong>Roommate Preferences Form</strong>
                <p className="mb-2">Fields: Age range (slider), gender (radio), lifestyle tags (multi-select), budget range, preferred locations</p>
              </li>
              <li>
                <strong>Housing Preferences Form</strong>
                <p className="mb-2">Fields: City (dropdown), budget range, housing type, optional ID upload</p>
              </li>
              <li>
                <strong>Combined Flow Form</strong>
                <p className="mb-2">Mix of roommate + housing preferences (streamlined)</p>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Inspection & Booking */}
        <AccordionItem value="inspection-forms">
          <AccordionTrigger className="text-xl font-semibold">3. Inspection & Booking Forms</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Inspection Booking Form</strong>
                <p className="mb-2">Calendar date/time picker, payment method selector</p>
              </li>
              <li>
                <strong>Landlord/Agent Availability Form</strong>
                <p className="mb-2">Add/edit time slots (calendar + repeat options)</p>
              </li>
              <li>
                <strong>Inspection Status / Reschedule Form</strong>
                <p className="mb-2">Actions: confirm, reschedule, cancel</p>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Profile & KYC */}
        <AccordionItem value="profile-forms">
          <AccordionTrigger className="text-xl font-semibold">4. Profile & KYC Forms</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Profile Basics Form</strong>
                <p className="mb-2">Fields: Name, Age, Gender, Preferences, Move-in date</p>
              </li>
              <li>
                <strong>Profile Edit Form</strong>
                <p className="mb-2">Editable inputs: Name, Age, Contact Info, Bio</p>
              </li>
              <li>
                <strong>Add Listing Form (Landlord/Agent)</strong>
                <p className="mb-2">Title, Description, Price, Location, Type, Amenities, Media</p>
              </li>
              <li>
                <strong>Edit Listing Form</strong>
                <p className="mb-2">Pre-filled listing fields for CRUD</p>
              </li>
              <li>
                <strong>Add Media Form</strong>
                <p className="mb-2">Upload photos/videos with preview carousel</p>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Messaging & Conversations */}
        <AccordionItem value="messaging-forms">
          <AccordionTrigger className="text-xl font-semibold">5. Messaging & Conversations</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>New Conversation Form</strong>
                <p className="mb-2">Search/select users (multi-select input)</p>
              </li>
              <li>
                <strong>Group Chat Creation Form</strong>
                <p className="mb-2">Group name, member selection</p>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Settings */}
        <AccordionItem value="settings-forms">
          <AccordionTrigger className="text-xl font-semibold">6. Settings Forms</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Change Password Form</strong>
                <p className="mb-2">Current password, new password, confirm password</p>
              </li>
              <li>
                <strong>Discovery Preferences Form</strong>
                <p className="mb-2">Distance (slider), budget, roommate filters</p>
              </li>
              <li>
                <strong>Notification Settings Form</strong>
                <p className="mb-2">Toggle switches (push, email, SMS)</p>
              </li>
              <li>
                <strong>Identity Verification (KYC) Form</strong>
                <p className="mb-2">File upload (ID types), selfie capture</p>
              </li>
              <li>
                <strong>Deactivate / Delete Account Forms</strong>
                <p className="mb-2">Confirmation input, reason optional</p>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Core Dynamic Form Components */}
        <AccordionItem value="components">
          <AccordionTrigger className="text-xl font-semibold">7. Core Dynamic Form Components</AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">Reusable input components for consistency:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>TextInput, TextArea, NumberInput</li>
              <li>RangeSlider, DatePicker, TimePicker</li>
              <li>Select / Dropdown, MultiSelect Chips</li>
              <li>RadioGroup, CheckboxGroup</li>
              <li>FileUploader, MediaUploader</li>
              <li>CardSelect (role/path selection)</li>
              <li>Stepper / Progress Indicator</li>
              <li>ToggleSwitch (preferences, notifications)</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}