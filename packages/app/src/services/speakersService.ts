import { API, graphqlOperation } from "aws-amplify";
import {
  createSpeakerProfile,
  listSpeakerProfiles,
  SpeakerProfile
} from "../api";

export class SpeakerService {
  async getOrCreateSpeakerProfile(key: string): Promise<SpeakerProfile> {
    const {
      data: {
        listSpeakerProfiles: { items: profiles }
      }
    } = await API.graphql(graphqlOperation(listSpeakerProfiles));

    let [profile] = profiles || [];

    if (profile) {
      console.log("found existing profile");
      return profile;
    }

    console.log("creating new profile...");
    const {
      data: { createSpeakerProfile: newProfile }
    } = await API.graphql(
      graphqlOperation(createSpeakerProfile, {
        input: { key }
      })
    );

    if (!newProfile) {
      console.error("Unable to load or create speaker profile");
      return null;
    }

    console.log("created new profile");
    return newProfile;
  }
}

export default new SpeakerService();
