import React, { useEffect, useRef } from "react";
import TagCloud from "TagCloud";

const SkillCloud = () => {
  const isInitializedRef = useRef(false);

  useEffect(() => {
    if (!isInitializedRef.current) {
      const container = ".content";
      const texts = [
        "PHP",
        "ReactJS",
        "React Native",
        "ML",
        "Expo",
        "Redux",
        "HTML5",
        "CSS3",
        "JS",
        "NumPy",
        "TensorFlow",
        "Scikit-Learn",
        "FireBase",
        "MySQl",
        "C++",
        "C",
        "Python",
        "Pandas",
        "Git",
        "Ubuntu",
      ];
      const options = {
        radius: 350,
        maxSpeed: "fast",
        initSpeed: "medium",
        direction: 135,
        keep: true,
      };

      TagCloud(container, texts, options);
      console.log("TagCloud initialized");

      isInitializedRef.current = true;
    }
  }, []);

  return (
    <div className="main">
      <span className="content"></span>
    </div>
  );
};

export default SkillCloud;
