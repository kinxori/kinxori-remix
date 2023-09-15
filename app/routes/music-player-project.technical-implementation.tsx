export default function MusicTechnicalImplementation() {
  return (
    <article className="flex flex-col gap-5 text-justify">
      <h3 className="text-[20px] font-bold text-left ">
        <b>Technical Implementation</b>
      </h3>
      <p>
        This project was developed using a combination of modern technologies, tools, and
        programming languages to create a functional and interactive music media player application.
      </p>
      <h4 className="text-[16px] font-bold text-left ">Technologies and Tools:</h4>
      <p>
        The project was primarily built using React, a popular JavaScript library for building user
        interfaces.
      </p>
      <p>
        HTML and CSS were used for structuring the content and styling the user interface,
        respectively.
      </p>
      <p>
        JavaScript was utilized to implement the interactive behavior of the application, including
        audio playback controls and user interactions.
      </p>
      <span>
        🛑 Probably let's just add some code snippets with each tech logo. Muted video 16:9 🛑
      </span>
      <h4 className="text-[16px] font-bold text-left ">Frameworks and Libraries:</h4>
      <p>
        The React framework facilitated the creation of reusable UI components and managed the
        application's state efficiently.
      </p>
      <p>
        FontAwesome icons were integrated to enhance the visual appearance of buttons and controls.
      </p>
      <p>
        TypeScript was employed to add static typing to JavaScript, improving code readability and
        catching potential errors.
      </p>
      <span>
        🛑 Probably a screen recording each technology and add hypertext links for each technology.
        Muted video 16:9 🛑
      </span>
      <h4 className="text-[16px] font-bold text-left ">Challenges and Solutions:</h4>
      <p>
        One challenge encountered was managing the synchronization between audio playback and the
        displayed time durations.
      </p>
      <ul className="list-disc pl-5">
        <li>
          Solution: The project employed event listeners to track audio playback progress and update
          time displays accordingly, ensuring accurate representation.
        </li>
      </ul>
      <span>
        🛑 Let's add a close view of progress bar and audio time display. Muted video 16:9 🛑
      </span>
      <p>
        Another challenge was implementing the shuffle feature, which required reordering the
        playlist randomly without duplication.
      </p>
      <ul className="list-disc pl-5">
        <li>
          Solution: A clone of the playlist was created, and the shuffle algorithm sorted the tracks
          randomly while avoiding duplication.
        </li>
      </ul>
      <span>🛑 Probably just a code snippet. Muted video 16:9 🛑</span>
      <p>
        Ensuring a smooth user experience on various devices and screen sizes presented the
        challenge of responsive design.
      </p>
      <ul className="list-disc pl-5">
        <li>
          Solution: Media queries and responsive design techniques were applied to adapt the layout
          and styles for different screen resolutions, ensuring a consistent experience.
        </li>
      </ul>
      <span>🛑 Probably just a code snippet for tailwind modules. Muted video 16:9 🛑</span>
      <p>
        Handling audio events, such as playback end and time updates, required careful event
        management to prevent memory leaks.
      </p>
      <ul className="list-disc pl-5">
        <li>
          Solution: Event listeners were properly attached and removed during component lifecycle
          phases to prevent memory leaks and optimize performance.
        </li>
      </ul>
      <span>
        🛑 Probably just a code snippet for useEffects and event listeners. Muted video 16:9 🛑
      </span>
      <p>
        In summary, this project utilized React, HTML, CSS, and JavaScript, with the support of
        frameworks like FontAwesome and TypeScript. Challenges related to audio synchronization,
        responsive design, and event management were effectively addressed through strategic
        solutions, showcasing problem-solving skills in technical implementation.
      </p>
    </article>
  );
}
