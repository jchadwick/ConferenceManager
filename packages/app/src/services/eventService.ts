import { EventSummary } from "../api";

const events: (EventSummary & { organizers: string[] })[] = Array(5)
  .fill(0)
  .map((x, id) => ({
    id: String(id + 1),
    displayName: `Event #${id + 1}`,
    startTime: Date.now().toLocaleString(),
    endTime: Date.now().toLocaleString(),
    organizers: ["jchadwick", "dudemeister"]
  }));

export class EventService {
  async getEvent(eventId: string): Promise<EventSummary> {
    return Promise.resolve(events.find(x => x.id === eventId));
  }

  async getEventsOrganizedBy(organizerId: string): Promise<EventSummary[]> {
    return Promise.resolve(
      events.filter(x => x.organizers.includes(organizerId))
    );
  }
}

export default new EventService();
