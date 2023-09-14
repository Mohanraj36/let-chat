import React from "react";
// import Add from "../img/add-user-3.png";
// import Camera from "../img/video-camera.png";
// import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import { BiMenu } from "react-icons/bi"

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <div className="userDetail">
          <img src={data.user?.photoURL} alt="" />
          <span>{data.user?.displayName}</span>
        </div>
        <div className="chatIcons">
          {/* <img src={Camera} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" /> */}
          < BiMenu className="m-hamburger"/>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
