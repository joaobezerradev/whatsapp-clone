import {
  AttachFile,
  Search,
  MoreVert,
  InsertEmoticon,
  Send,
  Close,
  Mic,
} from '@material-ui/icons';
import EmojiPicker, { IEmojiData } from 'emoji-picker-react';
import React, { FormEvent, useEffect, useRef, useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { Chat, useChat } from '../../hooks/chat';
import api from '../../services/api';
import MessageItem from '../MessageItem';

import {
  Container,
  Header,
  Body,
  Footer,
  HeaderInfo,
  HeaderButtons,
  FooterPre,
  FooterInputArea,
  FooterPos,
  EmojiArea,
} from './styles';

interface ListProps {
  author: string;
  content: string;
  type: string;
  date: string;
}

const ChatWindow: React.FC = () => {
  const { activeChat } = useChat();
  const { user } = useAuth();
  const [message, setMessage] = useState('');
  const [list, setList] = useState<ListProps[]>([]);
  const [openEmoji, setOpenEmoji] = useState(false);
  const [listening, setListening] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeChat) {
      api.onChatContent(activeChat?.id, setList);
    }
  }, [activeChat]);
  useEffect(() => {
    if (chatRef.current?.scrollHeight && chatRef.current.offsetHeight) {
      if (chatRef.current.scrollHeight > chatRef.current.offsetHeight) {
        chatRef.current.scrollTop =
          chatRef.current.scrollHeight - chatRef.current.offsetHeight;
      }
    }
  }, [list]);

  const handleEmoji = (_: MouseEvent, { emoji }: IEmojiData): void => {
    setMessage(`${message}${emoji}`);
  };

  const handleMic = () => {
    let recognition: SpeechRecognition = null as any;
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition !== undefined) {
      recognition = new SpeechRecognition();
    }
    if (recognition !== null) {
      recognition.onstart = () => {
        setListening(true);
      };
      recognition.onend = () => {
        setListening(false);
      };

      recognition.onresult = event => {
        setMessage(event.results[0][0].transcript);
      };

      recognition.start();
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (message !== '') {
      api.sendMessage(activeChat as Chat, user, message);
      setMessage('');
      setOpenEmoji(false);
    }
  };

  return (
    <Container>
      <Header>
        <HeaderInfo>
          <img src={activeChat?.avatar} alt={activeChat?.name} />
          <div>{activeChat?.name}</div>
        </HeaderInfo>

        <HeaderButtons>
          <div>
            <Search style={{ color: '#919191' }} />
          </div>
          <div>
            <AttachFile style={{ color: '#919191' }} />
          </div>
          <div>
            <MoreVert style={{ color: '#919191' }} />
          </div>
        </HeaderButtons>
      </Header>
      <Body ref={chatRef}>
        {list.map((item, key) => (
          <MessageItem key={key} data={item} />
        ))}
      </Body>
      <EmojiArea style={{ height: openEmoji ? '200px' : '0px' }}>
        <EmojiPicker
          onEmojiClick={handleEmoji}
          disableSearchBar
          disableSkinTonePicker
        />
      </EmojiArea>
      <Footer onSubmit={handleSubmit}>
        <FooterPre>
          <button
            type="button"
            style={{ width: openEmoji ? 40 : 0 }}
            onClick={() => setOpenEmoji(false)}
          >
            <Close style={{ color: '#919191' }} />
          </button>
          <button type="button" onClick={() => setOpenEmoji(true)}>
            <InsertEmoticon
              style={{ color: openEmoji ? '#009688' : '#919191' }}
            />
          </button>
        </FooterPre>
        <FooterInputArea>
          <input
            type="text"
            placeholder="Digite uma mensagem"
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
        </FooterInputArea>
        <FooterPos>
          {message === '' ? (
            <button type="button" onClick={handleMic}>
              <Mic style={{ color: listening ? '#126ece' : '#919191' }} />
            </button>
          ) : (
            <button type="submit">
              <Send style={{ color: '#919191' }} />
            </button>
          )}
        </FooterPos>
      </Footer>
    </Container>
  );
};

export default ChatWindow;
