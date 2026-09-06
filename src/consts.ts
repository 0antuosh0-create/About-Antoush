export const SITE_TITLE = "The Ashen One";
export const SITE_DESCRIPTION =
  `The Ashen One, is a place that i would tell about myself and my stories or things that are intersting for me`.trim();

export const KNOWN_TECH =
  `Python,CSS,HTML,Photoshop,Basket,I don't know,Dark souls,E=mc^2,Cats,Farhad Mehrad,Sherlock, Mr. Bean, Albert Einstein, Mr.Robot,Poker,Sleep`.split(
    ",",
  );
export const ABOUT_ME =
  `As I said, I am me, and I've been known by many names: Alireza, Seyed, Antoush, An Toush, Samad, Divane, and a few others. But if I had to choose one, I'd like to be known as **Antoush**. I'm almost 20 years old, and right now, I just want to escape the place where I live. I like cats. My favorite game is **Dark Souls**, which is probably obvious. My favorite singer is **Farhad Mehrad**, and I'm also a big fan of **Mr. Bean**. I think that's enough about me for now.`.trim();

// نام کاربری گیت‌هاب خودت
export const GITHUB_USERNAME = "0antuosh0-create";

export const QUOTE = "Long May The Sun Shine! Ha Ha Ha Ha!";

export const NAV_LINKS: Array<{ title: string; href?: string }> = [
  {
    title: "Blog",
  },
  {
    title: "Github",
    href: "https://github.com/0antuosh0-create",
  },
  {
    title: "Source",
    href: "https://github.com/0antuosh0-create/About-Antoush", // ✅ اضافه شدن کامل https://
  },
];

// تنظیمات بخش پیام ناشناس
export const ANONYMOUS_MESSAGE_CONFIG = {
  // ایمیل خود را اینجا وارد کنید (پیام‌ها مستقیماً به این ایمیل فوروارد می‌شوند)
  recipientEmail: "0antuosh0@gmail.com",
  title: "Whisper",
  subtitle: "Hmm, Want to say something to me? ",
  placeholder: "Here is a place to say something if you like...",
  successMessage: "The phantom message has been sent successfully!",
  maxChars: 600,
};