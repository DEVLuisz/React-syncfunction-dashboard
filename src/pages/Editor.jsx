import React from 'react';
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';

import Head from '../Assets/Head'
import { Header } from '../components';
import { EditorData } from '../data/dummy';

const Editor = () => (
  <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Head title="Editor"/>
    <Header category="App" title="Editor" />
    <RichTextEditorComponent>
      {/* <EditorData /> */}
      <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
    </RichTextEditorComponent>
  </div>
);
export default Editor;
