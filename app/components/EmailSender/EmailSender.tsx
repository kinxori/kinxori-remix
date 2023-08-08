import {
  FormEvent,
  ReactEventHandler,
  ReactNode,
  SyntheticEvent,
  useEffect,
  useState,
} from "react";
import emailAsset from "~/assets/AboutmeAsset.png";
import Button from "~/components/CustomButton/Button";

export default function InputForm() {
  const [emailInput, setEmailInput] = useState("");
  const [subjectInput, setSubjectInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [randomEmojiGenerated, setRandomEmojiGenerated] = useState("");
  const [popUp, setPopUp] = useState(false);

  const EmojiAPI =
    "https://emoji-api.com/emojis?access_key=0485af6bad82b18a33db25fe3e292cf0e790dc72";

  useEffect(() => {
    const fetchEmojiData = async () => {
      const response = await fetch(EmojiAPI);
      const emojiData = await response.json();
      const randomEmojiIndex = Math.floor(Math.random() * emojiData.length);
      const randomEmojiSelected = emojiData[randomEmojiIndex];
      const emoji = String.fromCodePoint(parseInt(randomEmojiSelected.codePoint, 16));
      console.log(emoji);
      setRandomEmojiGenerated(emoji);
    };
    fetchEmojiData();
  }, [emailInput]);

  const handleSubmit = async (event: SyntheticEvent<HTMLButtonElement, Event>) => {
    event.preventDefault();
    // const { target } = event;
    // const form = {
    //   email: target.email.value,
    //   message: target.message.value,
    //   subject: target.subject.value,
    //   emoji: randomEmojiGenerated,
    // };

    // const result = await fetch(
    //   "https://us-central1-myportfolio-70cb1.cloudfunctions.net/formFunction",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ ...form }),
    //   }
    // );
    handlePopUp(true);
    setTimeout(() => {
      handlePopUp(false);
    }, 5000);
    setEmailInput("");
    setMessageInput("");
    setSubjectInput("");
  };

  const handlePopUp = (boolean: boolean) => {
    setPopUp((current) => (current === boolean ? false : boolean));
  };

  console.log(popUp);

  return (
    <section className="  w-[100%] bg-white p-5 box-border rounded-[10px] border-mainColor border-[2px]">
      <form className="flex flex-col gap-1">
        <div className="flex flex-col gap-1">
          <label className="gap-1 flex flex-col font-bold text-bgColor">
            Email:
            <input
              type="email"
              value={emailInput}
              name="email"
              onChange={(event) => setEmailInput(event.target.value)}
              required
              placeholder="example@email.com"
            />
          </label>
          <label className="gap-1 flex flex-col font-bold text-bgColor">
            Subject
            <input
              type="text"
              value={subjectInput}
              name="subject"
              onChange={(event) => setSubjectInput(event.target.value)}
              required
              placeholder="Enter your subject"
            />
          </label>
        </div>
        <label className="gap-1 flex flex-col font-bold text-bgColor">
          Message:
          <textarea
            required
            value={messageInput}
            name="message"
            onChange={(event) => setMessageInput(event.target.value)}
            placeholder="Enter your message here"
          />
        </label>
      </form>
      <Button
        onClick={handleSubmit}
        type="submit"
        variant="mainButton"
        className="flex mt-5 justify-center"
      >
        Submit
      </Button>
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
