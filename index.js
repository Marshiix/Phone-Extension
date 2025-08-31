import { registerExtension, sendExtensionMessage } from "../../../../extensions.js";

let messages = [
    { sender: "Choso", avatar: "https://example.com/choso.png", text: "Where are you?" },
    { sender: "Gojo", avatar: "https://example.com/gojo.png", text: "Yo, let’s meet up later!" },
    { sender: "Geto", avatar: "https://example.com/geto.png", text: "Don’t forget what I told you." }
];

let intervalId;

function startRandomMessages() {
    if (intervalId) clearInterval(intervalId);

    intervalId = setInterval(() => {
        let msg = messages[Math.floor(Math.random() * messages.length)];
        sendExtensionMessage("Phone-Extension", msg);
    }, 60000); // every 60s – adjust as you like
}

registerExtension("Phone-Extension", {
    setup() {
        console.log("Phone-Extension loaded.");
        startRandomMessages();
    },
    unload() {
        clearInterval(intervalId);
    }
});
