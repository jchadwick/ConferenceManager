// tslint:disable
// this is an auto generated file. This will be overwritten

export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
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
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner
        organizers
        displayName
        cfpStartTime
        cfpEndTime
        startTime
        endTime
      }
      nextToken
    }
  }
`;
export const getSpeakerProfile = /* GraphQL */ `
  query GetSpeakerProfile($id: ID!) {
    getSpeakerProfile(id: $id) {
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
export const listSpeakerProfiles = /* GraphQL */ `
  query ListSpeakerProfiles(
    $filter: ModelSpeakerProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSpeakerProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner
        key
        name
        tagline
        biography
        avatar
        location
        topics
      }
      nextToken
    }
  }
`;
