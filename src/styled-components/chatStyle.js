import styled from 'styled-components';
import chatBack from '../images/chat-back.jpg';

export const ChatBack = styled.div`
  background-image: url(${chatBack});
  width: 45%;
  height: 90vh;
  border-left: 1px solid #fff;
  border-top: none;
  border-bottom: none;
  border-radius: 8px;
  color: #56bab7;
  font-family: Roboto;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 590px) {
    width: 50%;
  }
`;

export const ChatMessages = styled.div`
  width: 98%;
  min-height: 70vh;
  margin-left: 1px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const MessageContainer = styled.div`
  width: 60%;
  min-height: 80px;
  color: #fff;
  font-family: Roboto;
  font-weight: 300;
  font-size: 0.9em;
  margin-left: ${(props) => (props.position === 'right' ? '40%' : '')};
  @media (max-width: 450px) {
    margin-left: 0px;
    width: 100%;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  color: #56bab7;
  align-items: center;
  margin: 7px 0 0 15px;
  font-family: Roboto;
  font-weight: 400;
  font-size: 0.9em;
  @media (max-width: 590px) {
    width: 50%;
  }
`;
export const Message = styled.div`
  min-height: 6vh;
  box-shadow: inset 0px -10px 50px -20px #000, 0px 5px 15px rgba(0, 0, 0, 0.8);
  border-top: none;
  border-bottom: none;
  border-radius: 5px;
  color: #fff;
  font-family: Roboto;
  font-weight: 300;
  font-size: 0.9em;
  line-height: 6vh;
  padding: 2px 6px 2px 6px;
`;

export const Photo = styled.img`
  -webkit-background-size: 30px 30px;
  background-size: 30px 30px;
  margin-right: 5px;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  display: block;
  position: relative;
  height: 25px;
  width: 25x;
  z-index: 0;
`;

export const SendMessageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 0 0 1.4em 0;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

export const ChatTextarea = styled.textarea`
  width: 74%;
  height: 4.5em;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: #fff;
  border-radius: 5px;
  margin: 0 0 0.2em 0.3em;
  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: 0.68em;
    padding: 0.8em 0 0 0.7em;
  }
  @media (max-width: 750px) {
    width: 90%;
  }
`;

export const SendButton = styled.button`
  background: none;
  width: 20%;
  height: 2em;
  margin-left: 4%;
  border: 1px solid #56bab7;
  border-radius: 5px;
  color: #56bab7;
  font-family: Roboto;
  font-weight: 300;
  font-size: 0.9em;
  @media (max-width: 550px) {
    width: 100px;
  }
`;
