/* eslint-disable max-len */
/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const functions = require('firebase-functions');
const admin     = require('firebase-admin');

// Initialize the Admin SDK
admin.initializeApp();
const db = admin.firestore();

/**
 * resetWeeklyWins
 * Runs every Sunday at 00:00 America/Los_Angeles,
 * and zeroes out the `weeklyWins` field on every user doc.
 */
exports.resetWeeklyWins = functions.pubsub
  .schedule('0 0 * * 0')                   // CRON: minute, hour, dom, month, dow (0 = Sunday)
  .timeZone('America/Los_Angeles')         // adjust to your timezone
  .onRun(async (context) => {
    console.log('🔄 Starting weeklyWins reset...');
    const usersSnap = await db.collection('users').get();
    const batch     = db.batch();

    usersSnap.forEach(docSnap => {
      batch.update(docSnap.ref, { weeklyWins: 0 });
    });

    await batch.commit();
    console.log('✅ Reset weeklyWins for', usersSnap.size, 'users');
    return null;
  });