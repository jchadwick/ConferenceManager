import { GetEventQuery, GetSpeakerProfileQuery } from ".";

export type Event = GetEventQuery["getEvent"];
export type EventSubmission = Event["submissions"][0];
export type EventTimeSlot = Event["timeSlots"][0];
export type EventLocation = Event["locations"][0];
export type EventEvaluation = Event["evaluations"][0];

export type SpeakerProfile = GetSpeakerProfileQuery["getSpeakerProfile"];
export type SpeakerAbstract = SpeakerProfile["abstracts"][0];
export type SocialLink = SpeakerProfile["socialLinks"][0];
