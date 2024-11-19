import { Composition } from "remotion";
// import { MyComposition } from "./MyComponent";
// import { FadeIn } from "./FadeIn";
// import { IPhone } from "./components/iPhone/IPhone";
// import { CrackTheShutters } from "./components/crack the shutters/CrackTheShutters";
import { LostMyself } from "./components/lost myself/LostMyself";

export const RemotionRoot: React.FC = () => {
	return (
	<>
		{/* <Composition
			id="MyComposition"
			durationInFrames={150}
			fps={30}
			width={1920}
			height={1080}
			component={MyComposition}
		/>
		<Composition
			id="FadeIn"
			durationInFrames={150}
			fps={30}
			width={1920}
			height={1080}
			component={FadeIn}
		/>
		<Composition
			id="iPhone"
			durationInFrames={900}
			fps={30}
			width={1920}
			height={1080}
			component={IPhone}
		/>
		<Composition
			id="CrackTheShutters"
			durationInFrames={6000}
			fps={30}
			width={1920}
			height={1080}
			component={CrackTheShutters}
		/> */}
		<Composition
			id="LostMyself"
			durationInFrames={6390}
			fps={30}
			width={1920}
			height={1080}
			component={LostMyself}
		/>
	</>
	);
  };