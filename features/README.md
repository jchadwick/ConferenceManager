# Platform Specs

This folder contains the platform's specifications in Gherkin format.

## Features

The platform contains the following high-level features:

- [Attendee Scheduling](./features/AttendeeSchedules/) (aka "My Schedule"): ability for attendees to build a custom view of the schedule (i.e. plan the sessions they wish to attend)
- [Evalutations](./features/Evalutations/): Events, Session, and Speaker evaluations
- [Events](./features/Events/): instances of a given Event (aka Conference)
- [Scheduling](./features/Schedules/): ability to schedule Sessions in an Event
- [Sessions](./features/Sessions/): ability to manage approved/accepted Speaker Submissions
- [Speakers](./features/Speakers/): ability to manage the folks who present Sessions
- [Sponsors](./features/Sponsors/): ability to manage Event Sponsors
- Submissions: ability to track and evaluate Speaker submissions (aka not yet accepted Sessions)
- [Teams](./features/Teams/): ability to manage Teams of Users (aka Organizers of a conference)
- [Users](./features/Users/): ability to manage Users and their Roles

## Users / Roles

- System Admin: the superusers of the system
- Organizer
- Event Administrator
- User: any authenticated user
- Anonymous Viewer: any unauthenticated user

## Concepts

- Event / Conference: an instance of a specific event, e.g. TechBash 2019
- Teams: Groups of people (aka Organizers) that manage a given Event

## Domain Architecture

```mermaid
 classDiagram
    class Event {
        +String id
        +String displayName
        +DateTime cfpStartTime
        +DateTime cfpEndTime
        +DateTime startTime
        +DateTime endTime
        +[User] organizers
        +[Session] sessions
        +[Submission] submissions
        +[Location] locations
        +[TimeSlot] timeSlots
        +[Evaluation] evaluations
    }
    Event -- Session
    Event -- Location
    Event -- Speaker
    Event -- Session
    Event -- Submission

    class SubmissionStatus {
        <<enumeration>>
        Submitted
        Declined
        Withdrawn
        Shortlisted
        Accepted
    }

    class Submission {
        +String id
        +Event event
        +Speaker owner
        +SubmissionStatus status
        +DateTime submitTime
        +[Speaker] speakers
        +[String] labels
        +String title
        +String description
        +String comments
    }
    Submission -- SubmissionStatus
    Submission -- Speaker

    class Speaker {
        +String id
        +String key
        +String userId
        +String name
        +String tagline
        +String biography
        +Image avatar
        +[SocialLink] socialLinks
        +String location
        +[String] topics
        +[Session] sessions
    }
    Speaker -- Session
    Speaker -- Submission

    class Session {
        +String id
        +Location location
        +TimeSlot timeSlot
        +Event event
        +Speaker owner
        +Int submitTime
        +[Speaker] speakers
        +[String] labels
        +String title
        +String description
        +String comments
    }
    Session -- Event
    Session -- Speaker
    Session -- Location
    Session -- TimeSlot

    class Location {
        +String id
        +String name
        +Int ordinal
    }

    class TimeSlot {
        +String id
        +DateTime startTime
        +Int minutes
    }

    class SpeakerProfile {
        +String id
        +String key
        +User user
        +String name
        +String tagline
        +String biography
        +Image avatar
        +[SocialLink] socialLinks
        +String location
        +[String] topics
        +[SessionAbstract] abstracts
    }
    SpeakerProfile -- SessionAbstract
    SpeakerProfile -- SocialLink

    class SocialLink {
        +SocialSite site
        +String url
    }

    class SessionAbstract {
        +[Speaker] speakers
        +[String] labels
        +String title
        +String description
        +String comments
    }

    class User {
        +String id
        +String emailAddress
        +String firstName
        +String lastName
        +Image avatar
        +[Credential] credentials
    }
    User -- Credential

    class Credential {
        +CredentialType type
        +String token
        +DateTime expires
    }
    Credential -- CredentialType

    class CredentialType {
        <<enumeration>>
        Facebook
        GitHub
        Google
        Amazon
    }
```
