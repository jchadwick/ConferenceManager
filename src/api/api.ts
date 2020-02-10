/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateEventInput = {
  id?: string | null,
  owner?: string | null,
  organizers?: Array< string | null > | null,
  displayName?: string | null,
  cfpStartTime?: string | null,
  cfpEndTime?: string | null,
  startTime?: string | null,
  endTime?: string | null,
  sessions?: Array< SessionInput | null > | null,
  submissions?: Array< SubmissionInput | null > | null,
  locations?: Array< LocationInput | null > | null,
  timeSlots?: Array< TimeSlotInput | null > | null,
  evaluations?: Array< EvaluationInput | null > | null,
};

export type SessionInput = {
  id?: string | null,
  location?: string | null,
  timeSlot?: string | null,
  owner?: string | null,
  speakers?: Array< string | null > | null,
  labels?: Array< string | null > | null,
  title?: string | null,
  description?: string | null,
  comments?: string | null,
};

export type SubmissionInput = {
  id?: string | null,
  owner?: string | null,
  status?: SubmissionStatus | null,
  submitTime?: string | null,
  speakers?: Array< string | null > | null,
  labels?: Array< string | null > | null,
  title?: string | null,
  description?: string | null,
  comments?: string | null,
};

export enum SubmissionStatus {
  Submitted = "Submitted",
  Declined = "Declined",
  Withdrawn = "Withdrawn",
  Shortlisted = "Shortlisted",
  Accepted = "Accepted",
}


export type LocationInput = {
  id?: string | null,
  name?: string | null,
  ordinal?: number | null,
};

export type TimeSlotInput = {
  id?: string | null,
  startTime?: string | null,
  minutes?: number | null,
};

export type EvaluationInput = {
  id?: string | null,
  ipAddress?: string | null,
  session?: string | null,
  responses?: string | null,
};

export type ModelEventConditionInput = {
  displayName?: ModelStringInput | null,
  cfpStartTime?: ModelStringInput | null,
  cfpEndTime?: ModelStringInput | null,
  startTime?: ModelStringInput | null,
  endTime?: ModelStringInput | null,
  and?: Array< ModelEventConditionInput | null > | null,
  or?: Array< ModelEventConditionInput | null > | null,
  not?: ModelEventConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateEventInput = {
  id: string,
  owner?: string | null,
  organizers?: Array< string | null > | null,
  displayName?: string | null,
  cfpStartTime?: string | null,
  cfpEndTime?: string | null,
  startTime?: string | null,
  endTime?: string | null,
  sessions?: Array< SessionInput | null > | null,
  submissions?: Array< SubmissionInput | null > | null,
  locations?: Array< LocationInput | null > | null,
  timeSlots?: Array< TimeSlotInput | null > | null,
  evaluations?: Array< EvaluationInput | null > | null,
};

export type DeleteEventInput = {
  id?: string | null,
};

export type CreateSpeakerProfileInput = {
  id?: string | null,
  owner?: string | null,
  key?: string | null,
  name?: string | null,
  tagline?: string | null,
  biography?: string | null,
  avatar?: string | null,
  socialLinks?: Array< SocialLinkInput | null > | null,
  location?: string | null,
  topics?: Array< string | null > | null,
  abstracts?: Array< SessionAbstractInput | null > | null,
};

export type SocialLinkInput = {
  site?: SocialSite | null,
  url?: string | null,
};

export enum SocialSite {
  GitHub = "GitHub",
  LinkedIn = "LinkedIn",
  Facebook = "Facebook",
  Twitter = "Twitter",
}


export type SessionAbstractInput = {
  speakers?: Array< string | null > | null,
  labels?: Array< string | null > | null,
  title?: string | null,
  description?: string | null,
  comments?: string | null,
};

export type ModelSpeakerProfileConditionInput = {
  key?: ModelStringInput | null,
  name?: ModelStringInput | null,
  tagline?: ModelStringInput | null,
  biography?: ModelStringInput | null,
  avatar?: ModelStringInput | null,
  location?: ModelStringInput | null,
  topics?: ModelStringInput | null,
  and?: Array< ModelSpeakerProfileConditionInput | null > | null,
  or?: Array< ModelSpeakerProfileConditionInput | null > | null,
  not?: ModelSpeakerProfileConditionInput | null,
};

export type UpdateSpeakerProfileInput = {
  id: string,
  owner?: string | null,
  key?: string | null,
  name?: string | null,
  tagline?: string | null,
  biography?: string | null,
  avatar?: string | null,
  socialLinks?: Array< SocialLinkInput | null > | null,
  location?: string | null,
  topics?: Array< string | null > | null,
  abstracts?: Array< SessionAbstractInput | null > | null,
};

export type DeleteSpeakerProfileInput = {
  id?: string | null,
};

export type ModelEventFilterInput = {
  id?: ModelIDInput | null,
  owner?: ModelIDInput | null,
  organizers?: ModelIDInput | null,
  displayName?: ModelStringInput | null,
  cfpStartTime?: ModelStringInput | null,
  cfpEndTime?: ModelStringInput | null,
  startTime?: ModelStringInput | null,
  endTime?: ModelStringInput | null,
  and?: Array< ModelEventFilterInput | null > | null,
  or?: Array< ModelEventFilterInput | null > | null,
  not?: ModelEventFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSpeakerProfileFilterInput = {
  id?: ModelIDInput | null,
  owner?: ModelIDInput | null,
  key?: ModelStringInput | null,
  name?: ModelStringInput | null,
  tagline?: ModelStringInput | null,
  biography?: ModelStringInput | null,
  avatar?: ModelStringInput | null,
  location?: ModelStringInput | null,
  topics?: ModelStringInput | null,
  and?: Array< ModelSpeakerProfileFilterInput | null > | null,
  or?: Array< ModelSpeakerProfileFilterInput | null > | null,
  not?: ModelSpeakerProfileFilterInput | null,
};

export type CreateEventMutationVariables = {
  input: CreateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type CreateEventMutation = {
  createEvent:  {
    __typename: "Event",
    id: string | null,
    owner: string | null,
    organizers: Array< string | null > | null,
    displayName: string | null,
    cfpStartTime: string | null,
    cfpEndTime: string | null,
    startTime: string | null,
    endTime: string | null,
    sessions:  Array< {
      __typename: "Session",
      id: string | null,
      location: string | null,
      timeSlot: string | null,
      owner: string | null,
      speakers: Array< string | null > | null,
      labels: Array< string | null > | null,
      title: string | null,
      description: string | null,
      comments: string | null,
    } | null > | null,
    submissions:  Array< {
      __typename: "Submission",
      id: string | null,
      owner: string | null,
      status: SubmissionStatus | null,
      submitTime: string | null,
      speakers: Array< string | null > | null,
      labels: Array< string | null > | null,
      title: string | null,
      description: string | null,
      comments: string | null,
    } | null > | null,
    locations:  Array< {
      __typename: "Location",
      id: string | null,
      name: string | null,
      ordinal: number | null,
    } | null > | null,
    timeSlots:  Array< {
      __typename: "TimeSlot",
      id: string | null,
      startTime: string | null,
      minutes: number | null,
    } | null > | null,
    evaluations:  Array< {
      __typename: "Evaluation",
      id: string | null,
      ipAddress: string | null,
      session: string | null,
      responses: string | null,
    } | null > | null,
  } | null,
};

export type UpdateEventMutationVariables = {
  input: UpdateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type UpdateEventMutation = {
  updateEvent:  {
    __typename: "Event",
    id: string | null,
    owner: string | null,
    organizers: Array< string | null > | null,
    displayName: string | null,
    cfpStartTime: string | null,
    cfpEndTime: string | null,
    startTime: string | null,
    endTime: string | null,
    sessions:  Array< {
      __typename: "Session",
      id: string | null,
      location: string | null,
      timeSlot: string | null,
      owner: string | null,
      speakers: Array< string | null > | null,
      labels: Array< string | null > | null,
      title: string | null,
      description: string | null,
      comments: string | null,
    } | null > | null,
    submissions:  Array< {
      __typename: "Submission",
      id: string | null,
      owner: string | null,
      status: SubmissionStatus | null,
      submitTime: string | null,
      speakers: Array< string | null > | null,
      labels: Array< string | null > | null,
      title: string | null,
      description: string | null,
      comments: string | null,
    } | null > | null,
    locations:  Array< {
      __typename: "Location",
      id: string | null,
      name: string | null,
      ordinal: number | null,
    } | null > | null,
    timeSlots:  Array< {
      __typename: "TimeSlot",
      id: string | null,
      startTime: string | null,
      minutes: number | null,
    } | null > | null,
    evaluations:  Array< {
      __typename: "Evaluation",
      id: string | null,
      ipAddress: string | null,
      session: string | null,
      responses: string | null,
    } | null > | null,
  } | null,
};

export type DeleteEventMutationVariables = {
  input: DeleteEventInput,
  condition?: ModelEventConditionInput | null,
};

export type DeleteEventMutation = {
  deleteEvent:  {
    __typename: "Event",
    id: string | null,
    owner: string | null,
    organizers: Array< string | null > | null,
    displayName: string | null,
    cfpStartTime: string | null,
    cfpEndTime: string | null,
    startTime: string | null,
    endTime: string | null,
    sessions:  Array< {
      __typename: "Session",
      id: string | null,
      location: string | null,
      timeSlot: string | null,
      owner: string | null,
      speakers: Array< string | null > | null,
      labels: Array< string | null > | null,
      title: string | null,
      description: string | null,
      comments: string | null,
    } | null > | null,
    submissions:  Array< {
      __typename: "Submission",
      id: string | null,
      owner: string | null,
      status: SubmissionStatus | null,
      submitTime: string | null,
      speakers: Array< string | null > | null,
      labels: Array< string | null > | null,
      title: string | null,
      description: string | null,
      comments: string | null,
    } | null > | null,
    locations:  Array< {
      __typename: "Location",
      id: string | null,
      name: string | null,
      ordinal: number | null,
    } | null > | null,
    timeSlots:  Array< {
      __typename: "TimeSlot",
      id: string | null,
      startTime: string | null,
      minutes: number | null,
    } | null > | null,
    evaluations:  Array< {
      __typename: "Evaluation",
      id: string | null,
      ipAddress: string | null,
      session: string | null,
      responses: string | null,
    } | null > | null,
  } | null,
};

export type CreateSpeakerProfileMutationVariables = {
  input: CreateSpeakerProfileInput,
  condition?: ModelSpeakerProfileConditionInput | null,
};

export type CreateSpeakerProfileMutation = {
  createSpeakerProfile:  {
    __typename: "SpeakerProfile",
    id: string | null,
    owner: string | null,
    key: string | null,
    name: string | null,
    tagline: string | null,
    biography: string | null,
    avatar: string | null,
    socialLinks:  Array< {
      __typename: "SocialLink",
      site: SocialSite | null,
      url: string | null,
    } | null > | null,
    location: string | null,
    topics: Array< string | null > | null,
    abstracts:  Array< {
      __typename: "SessionAbstract",
      speakers: Array< string | null > | null,
      labels: Array< string | null > | null,
      title: string | null,
      description: string | null,
      comments: string | null,
    } | null > | null,
  } | null,
};

export type UpdateSpeakerProfileMutationVariables = {
  input: UpdateSpeakerProfileInput,
  condition?: ModelSpeakerProfileConditionInput | null,
};

export type UpdateSpeakerProfileMutation = {
  updateSpeakerProfile:  {
    __typename: "SpeakerProfile",
    id: string | null,
    owner: string | null,
    key: string | null,
    name: string | null,
    tagline: string | null,
    biography: string | null,
    avatar: string | null,
    socialLinks:  Array< {
      __typename: "SocialLink",
      site: SocialSite | null,
      url: string | null,
    } | null > | null,
    location: string | null,
    topics: Array< string | null > | null,
    abstracts:  Array< {
      __typename: "SessionAbstract",
      speakers: Array< string | null > | null,
      labels: Array< string | null > | null,
      title: string | null,
      description: string | null,
      comments: string | null,
    } | null > | null,
  } | null,
};

export type DeleteSpeakerProfileMutationVariables = {
  input: DeleteSpeakerProfileInput,
  condition?: ModelSpeakerProfileConditionInput | null,
};

export type DeleteSpeakerProfileMutation = {
  deleteSpeakerProfile:  {
    __typename: "SpeakerProfile",
    id: string | null,
    owner: string | null,
    key: string | null,
    name: string | null,
    tagline: string | null,
    biography: string | null,
    avatar: string | null,
    socialLinks:  Array< {
      __typename: "SocialLink",
      site: SocialSite | null,
      url: string | null,
    } | null > | null,
    location: string | null,
    topics: Array< string | null > | null,
    abstracts:  Array< {
      __typename: "SessionAbstract",
      speakers: Array< string | null > | null,
      labels: Array< string | null > | null,
      title: string | null,
      description: string | null,
      comments: string | null,
    } | null > | null,
  } | null,
};

export type GetEventQueryVariables = {
  id: string,
};

export type GetEventQuery = {
  getEvent:  {
    __typename: "Event",
    id: string | null,
    owner: string | null,
    organizers: Array< string | null > | null,
    displayName: string | null,
    cfpStartTime: string | null,
    cfpEndTime: string | null,
    startTime: string | null,
    endTime: string | null,
    sessions:  Array< {
      __typename: "Session",
      id: string | null,
      location: string | null,
      timeSlot: string | null,
      owner: string | null,
      speakers: Array< string | null > | null,
      labels: Array< string | null > | null,
      title: string | null,
      description: string | null,
      comments: string | null,
    } | null > | null,
    submissions:  Array< {
      __typename: "Submission",
      id: string | null,
      owner: string | null,
      status: SubmissionStatus | null,
      submitTime: string | null,
      speakers: Array< string | null > | null,
      labels: Array< string | null > | null,
      title: string | null,
      description: string | null,
      comments: string | null,
    } | null > | null,
    locations:  Array< {
      __typename: "Location",
      id: string | null,
      name: string | null,
      ordinal: number | null,
    } | null > | null,
    timeSlots:  Array< {
      __typename: "TimeSlot",
      id: string | null,
      startTime: string | null,
      minutes: number | null,
    } | null > | null,
    evaluations:  Array< {
      __typename: "Evaluation",
      id: string | null,
      ipAddress: string | null,
      session: string | null,
      responses: string | null,
    } | null > | null,
  } | null,
};

export type ListEventsQueryVariables = {
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventsQuery = {
  listEvents:  {
    __typename: "ModelEventConnection",
    items:  Array< {
      __typename: "Event",
      id: string | null,
      owner: string | null,
      organizers: Array< string | null > | null,
      displayName: string | null,
      cfpStartTime: string | null,
      cfpEndTime: string | null,
      startTime: string | null,
      endTime: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetSpeakerProfileQueryVariables = {
  id: string,
};

export type GetSpeakerProfileQuery = {
  getSpeakerProfile:  {
    __typename: "SpeakerProfile",
    id: string | null,
    owner: string | null,
    key: string | null,
    name: string | null,
    tagline: string | null,
    biography: string | null,
    avatar: string | null,
    socialLinks:  Array< {
      __typename: "SocialLink",
      site: SocialSite | null,
      url: string | null,
    } | null > | null,
    location: string | null,
    topics: Array< string | null > | null,
    abstracts:  Array< {
      __typename: "SessionAbstract",
      speakers: Array< string | null > | null,
      labels: Array< string | null > | null,
      title: string | null,
      description: string | null,
      comments: string | null,
    } | null > | null,
  } | null,
};

export type ListSpeakerProfilesQueryVariables = {
  filter?: ModelSpeakerProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSpeakerProfilesQuery = {
  listSpeakerProfiles:  {
    __typename: "ModelSpeakerProfileConnection",
    items:  Array< {
      __typename: "SpeakerProfile",
      id: string | null,
      owner: string | null,
      key: string | null,
      name: string | null,
      tagline: string | null,
      biography: string | null,
      avatar: string | null,
      location: string | null,
      topics: Array< string | null > | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateEventSubscriptionVariables = {
  owner: string,
};

export type OnCreateEventSubscription = {
  onCreateEvent:  {
    __typename: "Event",
    id: string | null,
    owner: string | null,
    organizers: Array< string | null > | null,
    displayName: string | null,
    cfpStartTime: string | null,
    cfpEndTime: string | null,
    startTime: string | null,
    endTime: string | null,
    sessions:  Array< {
      __typename: "Session",
      id: string | null,
      location: string | null,
      timeSlot: string | null,
      owner: string | null,
      speakers: Array< string | null > | null,
      labels: Array< string | null > | null,
      title: string | null,
      description: string | null,
      comments: string | null,
    } | null > | null,
    submissions:  Array< {
      __typename: "Submission",
      id: string | null,
      owner: string | null,
      status: SubmissionStatus | null,
      submitTime: string | null,
      speakers: Array< string | null > | null,
      labels: Array< string | null > | null,
      title: string | null,
      description: string | null,
      comments: string | null,
    } | null > | null,
    locations:  Array< {
      __typename: "Location",
      id: string | null,
      name: string | null,
      ordinal: number | null,
    } | null > | null,
    timeSlots:  Array< {
      __typename: "TimeSlot",
      id: string | null,
      startTime: string | null,
      minutes: number | null,
    } | null > | null,
    evaluations:  Array< {
      __typename: "Evaluation",
      id: string | null,
      ipAddress: string | null,
      session: string | null,
      responses: string | null,
    } | null > | null,
  } | null,
};

export type OnUpdateEventSubscriptionVariables = {
  owner: string,
  organizers: string,
};

export type OnUpdateEventSubscription = {
  onUpdateEvent:  {
    __typename: "Event",
    id: string | null,
    owner: string | null,
    organizers: Array< string | null > | null,
    displayName: string | null,
    cfpStartTime: string | null,
    cfpEndTime: string | null,
    startTime: string | null,
    endTime: string | null,
    sessions:  Array< {
      __typename: "Session",
      id: string | null,
      location: string | null,
      timeSlot: string | null,
      owner: string | null,
      speakers: Array< string | null > | null,
      labels: Array< string | null > | null,
      title: string | null,
      description: string | null,
      comments: string | null,
    } | null > | null,
    submissions:  Array< {
      __typename: "Submission",
      id: string | null,
      owner: string | null,
      status: SubmissionStatus | null,
      submitTime: string | null,
      speakers: Array< string | null > | null,
      labels: Array< string | null > | null,
      title: string | null,
      description: string | null,
      comments: string | null,
    } | null > | null,
    locations:  Array< {
      __typename: "Location",
      id: string | null,
      name: string | null,
      ordinal: number | null,
    } | null > | null,
    timeSlots:  Array< {
      __typename: "TimeSlot",
      id: string | null,
      startTime: string | null,
      minutes: number | null,
    } | null > | null,
    evaluations:  Array< {
      __typename: "Evaluation",
      id: string | null,
      ipAddress: string | null,
      session: string | null,
      responses: string | null,
    } | null > | null,
  } | null,
};

export type OnDeleteEventSubscriptionVariables = {
  owner: string,
};

export type OnDeleteEventSubscription = {
  onDeleteEvent:  {
    __typename: "Event",
    id: string | null,
    owner: string | null,
    organizers: Array< string | null > | null,
    displayName: string | null,
    cfpStartTime: string | null,
    cfpEndTime: string | null,
    startTime: string | null,
    endTime: string | null,
    sessions:  Array< {
      __typename: "Session",
      id: string | null,
      location: string | null,
      timeSlot: string | null,
      owner: string | null,
      speakers: Array< string | null > | null,
      labels: Array< string | null > | null,
      title: string | null,
      description: string | null,
      comments: string | null,
    } | null > | null,
    submissions:  Array< {
      __typename: "Submission",
      id: string | null,
      owner: string | null,
      status: SubmissionStatus | null,
      submitTime: string | null,
      speakers: Array< string | null > | null,
      labels: Array< string | null > | null,
      title: string | null,
      description: string | null,
      comments: string | null,
    } | null > | null,
    locations:  Array< {
      __typename: "Location",
      id: string | null,
      name: string | null,
      ordinal: number | null,
    } | null > | null,
    timeSlots:  Array< {
      __typename: "TimeSlot",
      id: string | null,
      startTime: string | null,
      minutes: number | null,
    } | null > | null,
    evaluations:  Array< {
      __typename: "Evaluation",
      id: string | null,
      ipAddress: string | null,
      session: string | null,
      responses: string | null,
    } | null > | null,
  } | null,
};

export type OnCreateSpeakerProfileSubscriptionVariables = {
  owner: string,
};

export type OnCreateSpeakerProfileSubscription = {
  onCreateSpeakerProfile:  {
    __typename: "SpeakerProfile",
    id: string | null,
    owner: string | null,
    key: string | null,
    name: string | null,
    tagline: string | null,
    biography: string | null,
    avatar: string | null,
    socialLinks:  Array< {
      __typename: "SocialLink",
      site: SocialSite | null,
      url: string | null,
    } | null > | null,
    location: string | null,
    topics: Array< string | null > | null,
    abstracts:  Array< {
      __typename: "SessionAbstract",
      speakers: Array< string | null > | null,
      labels: Array< string | null > | null,
      title: string | null,
      description: string | null,
      comments: string | null,
    } | null > | null,
  } | null,
};

export type OnUpdateSpeakerProfileSubscriptionVariables = {
  owner: string,
};

export type OnUpdateSpeakerProfileSubscription = {
  onUpdateSpeakerProfile:  {
    __typename: "SpeakerProfile",
    id: string | null,
    owner: string | null,
    key: string | null,
    name: string | null,
    tagline: string | null,
    biography: string | null,
    avatar: string | null,
    socialLinks:  Array< {
      __typename: "SocialLink",
      site: SocialSite | null,
      url: string | null,
    } | null > | null,
    location: string | null,
    topics: Array< string | null > | null,
    abstracts:  Array< {
      __typename: "SessionAbstract",
      speakers: Array< string | null > | null,
      labels: Array< string | null > | null,
      title: string | null,
      description: string | null,
      comments: string | null,
    } | null > | null,
  } | null,
};

export type OnDeleteSpeakerProfileSubscriptionVariables = {
  owner: string,
};

export type OnDeleteSpeakerProfileSubscription = {
  onDeleteSpeakerProfile:  {
    __typename: "SpeakerProfile",
    id: string | null,
    owner: string | null,
    key: string | null,
    name: string | null,
    tagline: string | null,
    biography: string | null,
    avatar: string | null,
    socialLinks:  Array< {
      __typename: "SocialLink",
      site: SocialSite | null,
      url: string | null,
    } | null > | null,
    location: string | null,
    topics: Array< string | null > | null,
    abstracts:  Array< {
      __typename: "SessionAbstract",
      speakers: Array< string | null > | null,
      labels: Array< string | null > | null,
      title: string | null,
      description: string | null,
      comments: string | null,
    } | null > | null,
  } | null,
};
