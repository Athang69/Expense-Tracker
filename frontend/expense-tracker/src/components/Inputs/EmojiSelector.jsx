import { memo, useState } from 'react';
import EmojiPicker from 'emoji-picker-react';

const EmojiSelector = ({ selectedEmoji, onEmojiSelect }) => {
  const [showPicker, setShowPicker] = useState(false);

  return (
    <div className='relative'>
      <label className='block text-sm font-medium text-gray-700 mb-2'>Icon</label>
      <button
        type='button'
        onClick={() => setShowPicker(!showPicker)}
        className='w-full p-3 border border-gray-300 rounded-lg text-left hover:border-gray-400 transition-colors'
      >
        <span className='text-2xl'>{selectedEmoji || '😀'}</span>
      </button>
      {showPicker && (
        <div className='absolute z-10 mt-2'>
          <EmojiPicker
            onEmojiClick={(emojiData) => {
              onEmojiSelect(emojiData.emoji);
              setShowPicker(false);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default memo(EmojiSelector);
