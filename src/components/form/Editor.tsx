import { useEffect, useState } from 'react';
import { useQuill } from 'react-quilljs';
import BlotFormatter from 'quill-blot-formatter';
import 'quill/dist/quill.snow.css';

// import './styles.css';
const Editor = (props: any) => {
  const { quill, quillRef, Quill } = useQuill({
    modules: { blotFormatter: {} },
  });

  if (Quill && !quill) {
    // const BlotFormatter = require('quill-blot-formatter');
    Quill.register('modules/blotFormatter', BlotFormatter);
  }
 
  useEffect(() => {
    if (quill) {
      quill.on('text-change', () => {
        // console.log(quill.getText()); // Get text only
        // console.log(quill.getContents()); // Get delta contents
        //console.log(quill.root.innerHTML); // Get innerHTML using quill
        props.onChange(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef        

        // let currrentContents = quill.getContents();
        // console.log(currrentContents.diff(oldContents));
      });

//      console.log(props.value);
  //    quill.root.innerHTML = 'hi';
        if(props.value){
          quill.root.innerHTML = props.value;
          /*quill.setContents([
            { insert: props.value },
           ]);*/
        }
            
    }

  }, [quill, Quill]);

  return (
    <div>
      <div ref={quillRef} />
    </div>
  );
};

export default Editor;
