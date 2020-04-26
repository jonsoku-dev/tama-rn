import isHotkey from 'is-hotkey';
import React, { useCallback, useMemo, useState } from 'react';
import { createEditor } from 'slate';
import { withHistory } from 'slate-history';
import { Editable, Slate, withReact } from 'slate-react';
import { Leaf, toggleMark } from './button';
import { RenderToolbar } from './button';
import { Element } from './element';

interface IProps {
  onChange?: (value: string) => void;
  content?: string;
  readOnly?: boolean;
}

const HOTKEYS: any = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code',
} as const;

const initialValue = [
  {
    type: 'paragraph',
    children: [{ text: '' }],
  },
] as const;

const SlateEditor = ({ onChange, content, readOnly = false }: IProps) => {
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  const [value, setValue] = useState(
    content ? JSON.parse(content) : JSON.parse(localStorage.getItem('content')!) || initialValue,
  );
  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);

  const handleChange = useCallback(
    (value: any) => {
      if (readOnly) {
        return;
      } else {
        setValue(value);
        const content = JSON.stringify(value);
        localStorage.setItem('content', content);
        if (onChange) {
          onChange(content);
        }
      }
    },
    [readOnly, onChange],
  );

  if (!readOnly) {
    return (
      <Slate editor={editor} value={value} onChange={handleChange}>
        <RenderToolbar />
        <Editable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          placeholder="Enter some rich text…"
          spellCheck
          onKeyDown={(event: any) => {
            for (const hotkey in HOTKEYS) {
              if (isHotkey(hotkey, event)) {
                event.preventDefault();
                const mark = HOTKEYS[hotkey];
                toggleMark(editor, mark);
              }
            }
          }}
          style={{ minHeight: '300px', height: '500px', overflowY: 'auto', marginBottom: '16px' }}
        />
      </Slate>
    );
  } else {
    return (
      <Slate editor={editor} value={value} onChange={handleChange}>
        <Editable readOnly renderElement={renderElement} renderLeaf={renderLeaf} />
      </Slate>
    );
  }
};

export default SlateEditor;
