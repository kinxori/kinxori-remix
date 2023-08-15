import { Form } from "@remix-run/react";
import { useEffect, useState } from "react";
import emailAsset from "~/assets/AboutmeAsset.png";
import Button from "~/components/CustomButton/Button";

export default function InputForm() {
  const [emailInput, setEmailInput] = useState("");
  const [subjectInput, setSubjectInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [randomEmojiGenerated, setRandomEmojiGenerated] = useState("");
  const [popUp, setPopUp] = useState(true);

  const EmojiAPI =
    "https://emoji-api.com/emojis?access_key=0485af6bad82b18a33db25fe3e292cf0e790dc72";

  useEffect(() => {
    const fetchEmojiData = async () => {
      const response = await fetch(EmojiAPI);
      const emojiData = await response.json();
      const randomEmojiIndex = Math.floor(Math.random() * emojiData.length);
      const randomEmojiSelected = emojiData[randomEmojiIndex];
      const emoji = String.fromCodePoint(parseInt(randomEmojiSelected.codePoint, 16));
      setRandomEmojiGenerated(emoji);
    };
    fetchEmojiData();
  }, []);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const { target } = event;
    const form = {
      email: target.email.value,
      message: target.message.value,
      subject: target.subject.value,
      emoji: randomEmojiGenerated,
    };

    const result = await fetch(
      "https://us-central1-myportfolio-70cb1.cloudfunctions.net/formFunction",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...form }),
      }
    );
    handlePopUp(true);
    setEmailInput("");
    setMessageInput("");
    setSubjectInput("");
    setTimeout(() => {
      handlePopUp(false);
    }, 5000);
  };

  const handlePopUp = (boolean: boolean) => {
    setPopUp((current) => (current === boolean ? false : boolean));
  };

  return (
    <section
      className="hover:customShadowMainColor2 hover:scale-[1.01] w-[100%] bg-white p-5 box-border rounded-[10px] border-mainColor border-[2px]
    transition-all duration-35 ease-in-out"
    >
      <Form onSubmit={handleSubmit} className="flex flex-col">
        <div>
          <div className="flex flex-col gap-1">
            <label className="gap-1 flex flex-col font-bold text-bgColor ">
              <span>Email:</span>
              <input
                id="emailSenderEmailID"
                className="focus:outline-none text-[14px] bg-bgColor/10  text-bgColor border-none font-normal font-[inter] pl-2 h-9 rounded-[10px]"
                type="email"
                name="email"
                placeholder="example@email.com"
                value={emailInput}
                onChange={(event) => setEmailInput(event.target.value)}
                required={true}
              />
            </label>
            <label className="gap-1 flex flex-col font-bold text-bgColor">
              <span>Subject:</span>
              <input
                className="focus:outline-none text-[14px] bg-bgColor/10 text-bgColor border-none font-normal font-[inter] pl-2 h-9 rounded-[10px]"
                type="text"
                name="subject"
                placeholder="Enter your subject"
                value={subjectInput}
                onChange={(event) => setSubjectInput(event.target.value)}
                required={true}
                autoComplete="off"
              />
            </label>
          </div>
          <label className="gap-1 flex flex-col font-bold text-bgColor">
            <span>Message:</span>
            <textarea
              className="focus:outline-none resize-none text-[14px] bg-bgColor/10 text-bgColor border-none font-normal font-[inter] p-2 min-h-[100px] rounded-[10px]"
              name="message"
              placeholder="Enter your message here"
              value={messageInput}
              onChange={(event) => setMessageInput(event.target.value)}
              required={true}
            />
          </label>
        </div>
        <Button type="submit" variant="mainButton" className="flex mt-5 justify-center">
          Submit
        </Button>
      </Form>
      {popUp === true && (
        <div className="email-pop-up-root">
          <div className="email-pop-up-content">
            <img
              src={emailAsset}
              alt="purple cup of coffee with a delivery backpack riding a scooter with glasses on its way to deliver something - Kinxori.com"
            ></img>
            <h2>Email sent! 👨‍💻</h2>
            <Button variant="mainButton" onClick={() => handlePopUp(false)}>
              Close
            </Button>
          </div>
          <div className="email-pop-up-background" onClick={() => handlePopUp(false)}></div>
        </div>
      )}
    </section>
  );
}
