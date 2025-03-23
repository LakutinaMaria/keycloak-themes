import React from "react";
import "./Background.css";

type BackgroundProps = {};

export const Background: React.FC<BackgroundProps> = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted playsInline>
        <source src={`keycloakify-dev-resources/login/roud.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Background;