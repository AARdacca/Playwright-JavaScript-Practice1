import { test, expect } from "@playwright/test";
import ResetPasswordPage from "../pages/ResetPasswordPage.js";
import { ReadGmail, readMail, eraseEnv } from "../pages/ReadGmail.js";
import jsonData from "../utils/userData.json";
import fs from "fs";
import dotenv from 'dotenv';

dotenv.config();

test("User can reset password successfully", async ({ page }) => {

    const newUser = jsonData[jsonData.length - 1];

    await page.goto("/");

    const forget = new ResetPasswordPage(page);
    await forget.forgetPassword(newUser.email);

    await page.waitForTimeout(10000);

let mailId = process.env.MAIL_ID?.trim();
if (!mailId) {
    console.log("Fetching mail ID...");
    mailId = await ReadGmail();
}
if (!mailId) {
    throw new Error("Failed to fetch Gmail list.");
}

let mailBody = process.env.MAIL_BODY?.trim();
if (!mailBody) {
    console.log("Reading mail content...");
    mailBody = await readMail(mailId);
}
if (!mailBody) {
    throw new Error("Failed to read reset password email.");
}



    const resetLink = mailBody.match(/https?:\/\/[^\s]+/)[0];


    await page.waitForTimeout(5000);
    await page.goto(resetLink);

    const reset = new ResetPasswordPage(page);

    const newPassword = "012345";

    newUser.password = newPassword;
    await reset.resetPassword(newPassword);

    eraseEnv();



    fs.writeFileSync("./utils/userData.json", JSON.stringify(jsonData, null, 2));

});