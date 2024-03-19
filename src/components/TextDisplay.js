import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const TextDisplay = () => {
  return (
    <div className="text-center mt-4 mb-3">
      <TypeAnimation
        sequence={[
          'I\'m a Programmer!',
          1000,
          'I\'m a Full Stack Developer!',
          1000,
          'I\'m a ML enthusiast!',
          1000,
        ]}
        wrapper="span"
        speed={50}
        className="tracking-wide text-4xl font-bold inline-block" // Apply the styles using className
        repeat={Infinity}
      />
    </div>
  );
};

export default TextDisplay;