import Facebook from "./platforms/Facebook";
import Twitch from "./platforms/Twitch";
import Youtube from "./platforms/Youtube";
import IPlatform from "./platforms/interfaces/IPlatform";
import AdvancedLive from "./transmissions/AdvancedLive";
import Live from "./transmissions/Live";

function startLive(platform: IPlatform) {
  const live = new Live(platform);

  live.broadcasting();
  live.result();
}

function startAdvancedLive(platform: IPlatform) {
  const live = new AdvancedLive(platform);

  live.broadcasting();
  live.comments();
  live.subtitles();
  live.result();
}

// startLive(new Youtube());
// startLive(new Twitch());
startLive(new Facebook());

// startAdvancedLive(new Youtube());
// startAdvancedLive(new Twitch());
startAdvancedLive(new Facebook());
