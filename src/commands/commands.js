/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

/* global global, Office, self, window */

Office.onReady(() => {
  // If needed, Office.js is ready to be called
  // Determine if the user's version of Office supports all the Office.js APIs that are used in the tutorial.
  if (!Office.context.requirements.isSetSupported("WordApi", "1.3")) {
    console.log("Sorry. The tutorial add-in uses Word.js APIs that are not available in your version of Office.");
  }

});

function insertParagraph() {
  Word.run(function (context) {
    alert("YES");
    var docBody = context.document.body;
    docBody.insertParagraph("Let's go!",
                            "Start");

      return context.sync();
  })
  .catch(function (error) {
      console.log("Error: " + error);
      if (error instanceof OfficeExtension.Error) {
          console.log("Debug info: " + JSON.stringify(error.debugInfo));
      }
  });
}

/**
 * Shows a notification when the add-in command is executed.
 * @param event {Office.AddinCommands.Event}
 */
function action(event) {
  const message = {
    type: Office.MailboxEnums.ItemNotificationMessageType.InformationalMessage,
    message: "Performed action.",
    icon: "Icon.80x80",
    persistent: true
  };

  // Show a notification message
  Office.context.mailbox.item.notificationMessages.replaceAsync("action", message);

  // Be sure to indicate when the add-in command function is complete
  event.completed();
}

function getGlobal() {
  return typeof self !== "undefined"
    ? self
    : typeof window !== "undefined"
    ? window
    : typeof global !== "undefined"
    ? global
    : undefined;
}

const g = getGlobal();



// the add-in command functions need to be available in global scope
g.action = action;
