import { useEffect, useState } from "react";
import { SpeakerProfile } from "../../api";
import { useCurrentUser } from "../../components/useCurrentUser";
import speakerService from "../../services/speakersService";

export const useMySpeakerProfile = () => {
  const user = useCurrentUser();
  const [profile, setProfile] = useState<SpeakerProfile>(null);

  useEffect(() => {
    if (!user) {
      return;
    }

    speakerService
      .getOrCreateSpeakerProfile(user.attributes.name)
      .then(setProfile);
  }, [user]);

  return profile;
};
