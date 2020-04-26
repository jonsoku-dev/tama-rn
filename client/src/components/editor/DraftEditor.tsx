import { convertFromRaw, convertToRaw, EditorState } from 'draft-js';
import React, { useEffect, useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styled from 'styled-components';

interface IProps {
  handleChangeDescription: (content: string) => void;
}

const EditorConvertToMarkdown = ({ handleChangeDescription }: IProps) => {
  const content = window.localStorage.getItem('recent-content');
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    if (content) {
      setEditorState(EditorState.createWithContent(convertFromRaw(JSON.parse(content))));
    }
  }, [content]);

  const onEditorStateChange = (editorState: EditorState) => {
    const getString = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
    handleChangeDescription(getString);
    saveContent(getString);
    setEditorState(editorState);
  };

  const saveContent = (content: string) => {
    localStorage.setItem('recent-content', content);
  };

  return (
    <PresenterWrapper>
      <Editor
        editorClassName="editor-class"
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        toolbar={{
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true },
        }}
      />
    </PresenterWrapper>
  );
};

const PresenterWrapper = styled.div`
  .DraftEditor-root {
    width: 100% !important;
  }
  .editor-class {
    min-height: 500px;
    padding: 16px;
    border-radius: 2px;
    border: 1px solid #f1f1f1;
    display: flex;
    justify-content: flex-start;
    background: white;
    flex-wrap: wrap;
    font-size: 1.5rem;
    -webkit-user-select: none;
    user-select: none;
  }
`;

export default EditorConvertToMarkdown;
