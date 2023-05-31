import Lottie from "react-lottie-player";

import errLottie from '../../../public/animation404.json'

export function Animation() {
  return (
    <Lottie
      loop
      animationData={errLottie}
      play
    >
    </Lottie>
  );
}