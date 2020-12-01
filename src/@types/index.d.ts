declare module '*.jpg';
declare module '*.png';

declare namespace globalThis {
  interface Window {
    webkitSpeechRecognition: string;
  }
}
