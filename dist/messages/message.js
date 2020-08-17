export const createMessageHandler = (processMessageMap) => (message) => processMessageMap[message.type](message);
