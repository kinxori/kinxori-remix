import { Form } from "@remix-run/react";
import { useEffect, useRef, useState } from "react";
import emailPopUpAsset from "~/assets/AboutmeAsset.png";
import Button from "~/components/CustomButton/Button";

export default function InputForm() {
  const [emailInput, setEmailInput] = useState("");
  const [subjectInput, setSubjectInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [randomEmojiGenerated, setRandomEmojiGenerated] = useState("");
  const [isPopUp, setPopUp] = useState(false);

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

  // escape keydown to close pop-up
  useEffect(() => {
    const exitEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handlePopUp(false);
      }
    };
    document.addEventListener("keydown", exitEsc);
    return () => document.removeEventListener("keydown", exitEsc);
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

  const popUpRef = useRef(null);

  return (
    <>
      <article
        className={`${
          isPopUp && "pointer-events-none"
        } hover:customShadowMainColor2 hover:scale-[1.01] w-[100%] bg-white p-5 box-border rounded-[10px] border-mainColor border-[2px] overflow-hidden
        ms:p-10 ls:w-[50%]
      transition-all duration-[.3s] ease-in-out`}
      >
        <Form onSubmit={handleSubmit} className="flex flex-col font-[inter] ">
          <div className="flex flex-col gap-2 ms:gap-3 ls:gap-5">
            <div className="flex flex-col gap-2 ms:gap-3 ls:flex-row ls:gap-5 ls:justify-between ">
              <label className="gap-1 flex flex-col font-bold text-bgColor ls:w-[50%]">
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
              <label className="gap-1 flex flex-col font-bold text-bgColor ls:w-[50%]">
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
          <Button type="submit" variant="mainButton" className="flex mt-5 justify-center ms:mt-10 ">
            Submit
          </Button>
        </Form>
      </article>
      {isPopUp === true && (
        <article
          ref={popUpRef}
          onClick={(event) => {
            if (event.target === popUpRef.current) handlePopUp(false);
          }}
          className=" z-[2000] top-0 left-0 fixed bg-bgColor/80 h-screen w-screen flex justify-center items-center "
        >
          <div
            className="box-border p-5 gap-5 justify-evenly items-center flex flex-col overflow-hidden w-[50%] h-min bg-white rounded-[10px] border-[2px] border-mainColor 
           ms:p-10 ls:w-[35%]
          "
          >
            <img
              src={emailPopUpAsset}
              className="object-contain w-[50%] hover:scale-[1.02] ms:w-[40%]
              transition-all duration-35 ease-in-out"
              alt="A purple cup of coffee riding a scooter with a backpack delivering emails"
            ></img>
            <h2 className="text-[20px] font-bold text-bgColor text-center ">
              Message sent succesfully. <br />
              Kinxori will be in touch with you very soon! 👨‍💻
            </h2>
            <Button variant="mainButton" onClick={() => handlePopUp(false)}>
              Close
            </Button>
          </div>
        </article>
      )}
    </>
  );
}
