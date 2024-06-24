import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import reactLogo from "~/assets/Logos/react-color-logo.png";
import javascriptLogo from "~/assets/Logos/javascript-color-logo.png";
import htmlLogo from "~/assets/Logos/html-color-logo.png";
import tailwindLogo from "~/assets/Logos/tailwindcss-png-logo-500x500-white.png";
import VideoLoader from "~/components/VideoLoader/VideoLoader";

export default function CallHistoryTechnicalImplementation() {
  const dataProcessingCode = `
    const uniqueContacts = data.reduce((acc, contact) => {
      const existingContact = acc.find((c) => c.phoneNumber === contact.phoneNumber);
      if (!existingContact) {
        // Add a new contact if it doesn't exist.
        // Create new key-value with formatted date.
        // Create object storing history calls per user.
        // ...
      } else {
        // Update call count for existing contact.
        // ...
      }
      return acc;
    }, []);
    `;

  const userInteractionCode = `
    // useState
    const [expandRow, setExpandRow] = useState({});

    // Javascript
    const handleExpandRow = (item) => {
      setExpandRow((prevState) => ({
        ...prevState,
        [item.phoneNumber]: !prevState[item.phoneNumber],
      }));
    };  

    // JSX
    <div className={transition-all duration-[.4s] ease-in overflow-hidden 
      #$#{expandRow[item.phoneNumber] ? "max-h-[300px]" : "max-h-0"}} >
    `;

  return (
    <article id='technical-implementation' className='flex flex-col gap-5 pt-[100px]'>
      <h3 className='text-[20px] font-bold text-left '>
        <b>Technical Implementation</b>
      </h3>
      <h4 className='text-[16px] font-bold text-left '>Technologies and Tools:</h4>
      <ul className='list-disc pl-5 flex flex-col gap-3 '>
        <li className='relative '>
          <span className='font-bold'>
            <img className='absolute bottom-0 top-0 w-[20px]' src={reactLogo} alt='react js logo' />
            &#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;ReactJs:
          </span>{" "}
          The component is developed using the React library, allowing for efficient building of
          user interfaces and dynamic components.
        </li>
        <li className='relative'>
          <span className='font-bold'>
            <img
              className='absolute bottom-0 top-0 w-[20px]'
              src={javascriptLogo}
              alt='javascript logo'
            />
            &#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;JavaScript:
          </span>{" "}
          JavaScript is extensively used to manipulate and process call history data.
        </li>
        <li className='relative'>
          <span className='font-bold'>
            <img className='absolute bottom-0 top-0 w-[20px]' src={htmlLogo} alt='html5 logo' />
            &#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;HTML5:
          </span>{" "}
          HTML is used to structure the content and create a semantic markup.
        </li>
        <li className='relative'>
          <span className='font-bold'>
            <img
              className='absolute bottom-0 top-0 w-[20px]'
              src={tailwindLogo}
              alt='Tailwind logo'
            />
            &#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;TailwindCss:
          </span>{" "}
          TailwindCSS is applied to style and layout the component for a visually appealing
          presentation.
        </li>
      </ul>
      <h4 className='text-[16px] font-bold text-left '>Challenges and Solutions:</h4>
      <ul className='list-disc pl-5 flex flex-col gap-3'>
        <li>
          <span className='font-bold'>Data Processing:</span> One challenge was efficiently
          processing and organizing call history data, including eliminating duplicates and
          calculating call counts. This was overcome by using JavaScript Array Methods and React
          state management.
        </li>
        <div className='border-[2px] border-white my-5 overflow-hidden rounded-[10px]'>
          <SyntaxHighlighter showLineNumbers style={dracula} language='javascript'>
            {dataProcessingCode}
          </SyntaxHighlighter>
        </div>
        <li>
          <span className='font-bold'>User Interaction:</span> Implementing smooth transitions and
          interactive features for expanding and collapsing call history details posed a challenge.
          This was addressed through transitions using TailwindCSS and state management in React.
        </li>
        <div className='border-[2px] border-white my-5 overflow-hidden rounded-[10px]'>
          <SyntaxHighlighter showLineNumbers style={dracula} language='javascript'>
            {userInteractionCode}
          </SyntaxHighlighter>
        </div>
      </ul>
    </article>
  );
}
