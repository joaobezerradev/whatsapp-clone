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
import React, { useEffect, useRef, useState } from 'react';
import { Chat, useChat } from '../../hooks/chat';
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
  message: string;
}

const ChatWindow: React.FC = () => {
  const [message, setMessage] = useState('');
  const [list, setList] = useState<ListProps[]>([
    {
      author: 'Maria',
      message:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaera placeat, sint illo praesentium doloremque, quas suscipit dolorem exest magnam in nihil? Modi, nostrum consequuntur ipsum dignissimos ab placeat? Architecto.',
    },
    {
      author: 'Joao',
      message:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaera placeat, sint illo praesentium doloremque, quas suscipit dolorem exest magnam in nihil? Modi, nostrum consequuntur ipsum dignissimos ab placeat? Architecto.',
    },
    {
      author: 'Joao',
      message:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaera placeat, sint illo praesentium doloremque, quas suscipit dolorem exest magnam in nihil? Modi, nostrum consequuntur ipsum dignissimos ab placeat? Architecto.',
    },
    {
      author: 'Joao',
      message:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaera placeat, sint illo praesentium doloremque, quas suscipit dolorem exest magnam in nihil? Modi, nostrum consequuntur ipsum dignissimos ab placeat? Architecto.',
    },
    {
      author: 'Joao',
      message:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaera placeat, sint illo praesentium doloremque, quas suscipit dolorem exest magnam in nihil? Modi, nostrum consequuntur ipsum dignissimos ab placeat? Architecto.',
    },
    {
      author: 'Joao',
      message:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaera placeat, sint illo praesentium doloremque, quas suscipit dolorem exest magnam in nihil? Modi, nostrum consequuntur ipsum dignissimos ab placeat? Architecto.',
    },
    {
      author: 'Joao',
      message:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaera placeat, sint illo praesentium doloremque, quas suscipit dolorem exest magnam in nihil? Modi, nostrum consequuntur ipsum dignissimos ab placeat? Architecto.',
    },
    {
      author: 'Joao',
      message:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaera placeat, sint illo praesentium doloremque, quas suscipit dolorem exest magnam in nihil? Modi, nostrum consequuntur ipsum dignissimos ab placeat? Architecto.',
    },
    {
      author: 'Joao',
      message:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaera placeat, sint illo praesentium doloremque, quas suscipit dolorem exest magnam in nihil? Modi, nostrum consequuntur ipsum dignissimos ab placeat? Architecto.',
    },
    {
      author: 'Joao',
      message:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaera placeat, sint illo praesentium doloremque, quas suscipit dolorem exest magnam in nihil? Modi, nostrum consequuntur ipsum dignissimos ab placeat? Architecto.',
    },
    {
      author: 'Joao',
      message:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaera placeat, sint illo praesentium doloremque, quas suscipit dolorem exest magnam in nihil? Modi, nostrum consequuntur ipsum dignissimos ab placeat? Architecto.',
    },
    {
      author: 'Joao',
      message:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaera placeat, sint illo praesentium doloremque, quas suscipit dolorem exest magnam in nihil? Modi, nostrum consequuntur ipsum dignissimos ab placeat? Architecto.',
    },
    {
      author: 'Joao',
      message:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaera placeat, sint illo praesentium doloremque, quas suscipit dolorem exest magnam in nihil? Modi, nostrum consequuntur ipsum dignissimos ab placeat? Architecto.',
    },
    {
      author: 'Joao',
      message:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaera placeat, sint illo praesentium doloremque, quas suscipit dolorem exest magnam in nihil? Modi, nostrum consequuntur ipsum dignissimos ab placeat? Architecto.',
    },
    {
      author: 'Joao',
      message:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaera placeat, sint illo praesentium doloremque, quas suscipit dolorem exest magnam in nihil? Modi, nostrum consequuntur ipsum dignissimos ab placeat? Architecto.',
    },
    {
      author: 'Joao',
      message:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaera placeat, sint illo praesentium doloremque, quas suscipit dolorem exest magnam in nihil? Modi, nostrum consequuntur ipsum dignissimos ab placeat? Architecto.',
    },
    {
      author: 'Joao',
      message:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaera placeat, sint illo praesentium doloremque, quas suscipit dolorem exest magnam in nihil? Modi, nostrum consequuntur ipsum dignissimos ab placeat? Architecto.',
    },
    {
      author: 'Joao',
      message:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaera placeat, sint illo praesentium doloremque, quas suscipit dolorem exest magnam in nihil? Modi, nostrum consequuntur ipsum dignissimos ab placeat? Architecto.',
    },
  ]);
  const [chat, setChat] = useState<Chat>();
  const [openEmoji, setOpenEmoji] = useState(false);
  const [listening, setListening] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  const { activeChat } = useChat();

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

  useEffect(() => {
    if (activeChat) {
      setChat(activeChat);
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
  return (
    <Container>
      <Header>
        <HeaderInfo>
          <img src={chat?.avatar} alt={chat?.name} />
          <div>{chat?.name}</div>
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
      <Footer>
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
            <button type="button">
              <Send style={{ color: '#919191' }} />
            </button>
          )}
        </FooterPos>
      </Footer>
    </Container>
  );
};

export default ChatWindow;
