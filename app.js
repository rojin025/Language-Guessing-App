const franc = require("franc");
const colors = require("colors");
const langs = require("langs");

const input = process.argv[2];
const langCode = franc(input);

if (langCode == "und") {
  console.log(`Sorry, Couldnot Figure it out! Please Try again.`.red);
} else {
  console.log(`Language Code: ${langCode.green}`);
  const language = langs.where("3", langCode);
  console.log(`Language Guess: ${language.name.underline.bgGreen}`);
}

// node app "سه نوع و سطح از پروژه که شما را تبدیل به برنامه نویس میکند"
