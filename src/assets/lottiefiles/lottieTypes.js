import moonAnimation from "../../assets/lottiefiles/moon.json";
import EidAnimation from "../../assets/lottiefiles/eidMubarak.json";
import staremojiAnimation from "../../assets/lottiefiles/star-emoji.json";
import celebrationAnimation from "../../assets/lottiefiles/celebration.json";
const lotties = [{
    animationName:"moon",
    animationData:moonAnimation,
    animationConfig:{
        loop: true,
        autoplay: true,
        animationData: moonAnimation,
        rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    }
    }  
  },
  {
      animationName:"Eid",
      animationData:EidAnimation,
      animationConfig:{
        loop: false,
        autoplay: true,
        animationData: EidAnimation,
        rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    }
    }
  },
  {
      animationName:"star-emoji",
      animationData:staremojiAnimation,
      animationConfig:{
        loop: true,
        autoplay: true,
        animationData:staremojiAnimation,
        rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    }
    }  
  },
  {
      animationName:"Celebration",
    animationData:celebrationAnimation,
    animationConfig:{
        loop: true,
        autoplay: true,
        animationData: celebrationAnimation,
        rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    }
    }  
  },];
export default lotties;