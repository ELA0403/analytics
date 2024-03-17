import { Image, LI, UL } from "../../../../../AbstractElements";
import { useAppDispatch, useAppSelector } from "../../../../../ReaduxToolkit/Hooks";
import { changeChat, createNewChatAsync } from "../../../../../ReaduxToolkit/Reducer/ChatSlice";
import { dynamicImage } from "../../../../../Service";
import { ChatProp } from "../../../../../Types/Apps/Chat/ChatTypes";
import CurrentUser from "./CurrentUser";
import SearchChatList from "./SearchChatList";

const ChatStatus = () => {
  const { members, currentUser, selectedUser, chats } = useAppSelector((state) => state.chatData);
  const dispatch = useAppDispatch();
  var activeChat = 0;
  if (selectedUser != null) activeChat = selectedUser.id;
  
  const changeChatClick = (selectedUserId: number) => {
    const currentUserId = currentUser.id;
    const currentChat = chats.find((x: ChatProp) => x.users.includes(currentUser.id) && x.users.includes(selectedUserId));
    if (currentChat) dispatch(changeChat(selectedUserId));
    dispatch(createNewChatAsync({ currentUserId, selectedUserId, chats }));
  };

  return (
    <div className="chat-box">
      <div className="chat-left-aside">
        <CurrentUser />
        <div className="people-list">
          <SearchChatList />
          {members && members.length > 0 ? (
            <UL className="simple-list custom-scrollbar">
              {members
                .filter((x: any) => x.id !== currentUser.id)
                .map((item: any, id: number) => (
                  <LI key={id} className={`clearfix ${activeChat === item.id ? "active" : ""}`} onClick={() => changeChatClick(item.id)}>
                    <div className="d-flex">
                      <Image src={`${dynamicImage(item.thumb)}`} className="rounded-circle user-image" alt={"user"} />
                      <div className={`status-circle ${item.online === true ? "online" : "offline"}`}></div>
                      <div className="about flex-grow-1">
                        <div className="name">{item.name}</div>
                        <div className="status">{item.status}</div>
                      </div>
                    </div>
                  </LI>
                ))}
            </UL>
          ) : (
            <Image className="img-fluid m-auto" src={dynamicImage("search-not-found.png")} alt="search-not-found" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatStatus;
