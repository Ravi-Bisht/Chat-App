import React from "react";
import Messages from "./Messages";
import Input from "./Input";
// import { db } from "../data/data";
import { useParams } from "react-router-dom";

const Chat = ({ db, setDbData }) => {
  const param = useParams();
  const userId = parseInt(param.id);
  // console.log(userId);
  // console.log(db.friends)

  let data = db.friends;

  // data.map((user) => console.log(user.id));

  const chatUser = data.filter((user) => {
    return user.id === userId;
  });
  // console.log(chatUser);
  const [chatFriend] = chatUser;
  // console.log(chatFriend);
  return (
    <div className="chat">
      <div className="chatInfo">
        <div className="contactName">
          <img src={chatFriend.picture} alt="profile" />
          <div>{chatFriend.name}</div>
        </div>
        <div className="chatIcons">
          <img
            src="https://www.citypng.com/public/uploads/preview/video-camera-white-icon-11637047301lqkuqvbbwy.png"
            alt="videocall"
          />
          <img
            src="https://cdn2.iconfinder.com/data/icons/leto-most-searched-mix-3/64/__menu_more-27-512.png"
            alt="more"
          />
        </div>
      </div>

      <Messages chatFriend={chatFriend} />
      <Input chatFriend={chatFriend} db={db} setDbData={setDbData} />
    </div>
  );
};

export default Chat;
