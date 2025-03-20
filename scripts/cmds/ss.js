const { GoatWrapper } = require("fca-liane-utils");
const axios = require("axios");

module.exports.config = {
  name: "ss",
  version: "1.0",
  author: "dipto",
  role: 0,
  description: "Take a screenshot of a website",
  category: "IMAGE",
  guide: { en: "screenshot [URL]" },
  coolDowns: 5,
};
exports.onStart = async function ({ api, event, args }) {
  const url = args.join(" ");
  if (!url) {
    return api.sendMessage("Please provide a URL.", event.threadID);
  }
  try {
    api.sendMessage(
      {
        body: "Screenshot Saved <😽",
        attachment: await global.utils.getStreamFromURL(
          `https://haji-mix.up.railway.app/api/screenshot?url=${url}`,
        ),
      },
      event.threadID,
      event.messageID,
    );
  } catch (error) {
    console.error("Error taking screenshot:", error);
    api.sendMessage("Failed to take a screenshot.", event.threadID);
  }
};
const wrapper = new GoatWrapper(module.exports);
wrapper.applyNoPrefix({ allowPrefix: true });