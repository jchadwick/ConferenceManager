// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent($owner: String!) {
    onCreateEvent(owner: $owner) {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent($owner: String!, $organizers: String!) {
    onUpdateEvent(owner: $owner, organizers: $organizers) {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent($owner: String!) {
    onDeleteEvent(owner: $owner) {
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
export const onCreateSpeakerProfile = /* GraphQL */ `
  subscription OnCreateSpeakerProfile($owner: String!) {
    onCreateSpeakerProfile(owner: $owner) {
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
export const onUpdateSpeakerProfile = /* GraphQL */ `
  subscription OnUpdateSpeakerProfile($owner: String!) {
    onUpdateSpeakerProfile(owner: $owner) {
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
export const onDeleteSpeakerProfile = /* GraphQL */ `
  subscription OnDeleteSpeakerProfile($owner: String!) {
    onDeleteSpeakerProfile(owner: $owner) {
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
