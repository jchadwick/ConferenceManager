type DateTime = number;

export interface Event {
  id: string;
  name: string;
  startTime?: DateTime;
  endTime?: DateTime;
  callForSpeakersStartTime?: DateTime;
  callForSpeakersEndTime?: DateTime;
}
