import React, { useContext } from "react";
import injectContext, { Context } from "./store/appContext.js";
import MainGame from "./component/MainGame.js";
import SetupMenu from "./component/SetupMenu.js";
import Footer from "./component/footer.js";
import "./styles/index.css"


const Layout = () => {
	const { store } = useContext(Context)
	return (
		<>
		{!store.isPlacementDone ? <SetupMenu /> : <MainGame />}
		< Footer/>
		</>
	);
};

export default injectContext(Layout);
