import { TypeAnimation } from "react-type-animation";

const Typer = () => {
  return (
    <div className="typer">
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "a Developer",
          3000, // wait 1s before replacing "Mice" with "Hamsters"
          "a Designer",
          3000,
          "a Creator",
          3000,
          "an Innovator",
          3000,
          "a Thinker",
          3000,
          "a Go-getter",
          3000,
          "a Leader",
          3000,
        ]}
        wrapper="span"
        className="typed"
        speed={30}
        repeat={Infinity}
      />
    </div>
  );
};

export default Typer;
