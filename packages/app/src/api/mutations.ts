// tslint:disable
// this is an auto generated file. This will be overwritten

export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
      id
      owner
      organizers
      displayName
      cfpStartTime
      cfpEndTime
      startTime
      endTime
      sessions {
        id
        location
        timeSlot
        owner
        speakers
        labels
        title
        description
        comments
      }
      submissions {
        id
        owner
        status
        submitTime
        speakers
        labels
        title
        description
        comments
      }
      locations {
        id
        name
        ordinal
      }
      timeSlots {
        id
        startTime
        minutes
      }
      evaluations {
        id
        ipAddress
        session
        responses
      }
    }
  }
`;
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
      id
      owner
      organizers
      displayName
      cfpStartTime
      cfpEndTime
      startTime
      endTime
      sessions {
        id
        location
        timeSlot
        owner
        speakers
        labels
        title
        description
        comments
      }
      submissions {
        id
        owner
        status
        submitTime
        speakers
        labels
        title
        description
        comments
      }
      locations {
        id
        name
        ordinal
      }
      timeSlots {
        id
        startTime
        minutes
      }
      evaluations {
        id
        ipAddress
        session
        responses
      }
    }
  }
`;
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
      id
      owner
      organizers
      displayName
      cfpStartTime
      cfpEndTime
      startTime
      endTime
      sessions {
        id
        location
        timeSlot
        owner
        speakers
        labels
        title
        description
        comments
      }
      submissions {
        id
        owner
        status
        submitTime
        speakers
        labels
        title
        description
        comments
      }
      locations {
        id
        name
        ordinal
      }
      timeSlots {
        id
        startTime
        minutes
      }
      evaluations {
        id
        ipAddress
        session
        responses
      }
    }
  }
`;
export const createSpeakerProfile = /* GraphQL */ `
  mutation CreateSpeakerProfile(
    $input: CreateSpeakerProfileInput!
    $condition: ModelSpeakerProfileConditionInput
  ) {
    createSpeakerProfile(input: $input, condition: $condition) {
      id
      owner
      key
      name
      tagline
      biography
      avatar
      socialLinks {
        site
        url
      }
      location
      topics
      abstracts {
        speakers
        labels
        title
        description
        comments
      }
    }
  }
`;
export const updateSpeakerProfile = /* GraphQL */ `
  mutation UpdateSpeakerProfile(
    $input: UpdateSpeakerProfileInput!
    $condition: ModelSpeakerProfileConditionInput
  ) {
    updateSpeakerProfile(input: $input, condition: $condition) {
      id
      owner
      key
      name
      tagline
      biography
      avatar
      socialLinks {
        site
        url
      }
      location
      topics
      abstracts {
        speakers
        labels
        title
        description
        comments
      }
    }
  }
`;
export const deleteSpeakerProfile = /* GraphQL */ `
  mutation DeleteSpeakerProfile(
    $input: DeleteSpeakerProfileInput!
    $condition: ModelSpeakerProfileConditionInput
  ) {
    deleteSpeakerProfile(input: $input, condition: $condition) {
      id
      owner
      key
      name
      tagline
      biography
      avatar
      socialLinks {
        site
        url
      }
      location
      topics
      abstracts {
        speakers
        labels
        title
        description
        comments
      }
    }
  }
`;
