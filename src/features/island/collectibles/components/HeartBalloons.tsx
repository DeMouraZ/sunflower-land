import React from "react";

import heartBalloons from "assets/events/valentine/sfts/balloons.webp";
import { PIXEL_SCALE } from "features/game/lib/constants";

export const HeartBalloons: React.FC = () => {
  return (
    <div style={{ width: `${PIXEL_SCALE * 18}px` }}>
      <img
        src={heartBalloons}
        style={{
          width: `${PIXEL_SCALE * 18}px`,
          bottom: `${PIXEL_SCALE * 0}px`,
          left: `${PIXEL_SCALE * 0}px`,
        }}
        className="absolute"
        alt="Heart Balloons"
      />
    </div>
  );
};
