import React from 'react';
import {usePluginData} from '@docusaurus/useGlobalData';

export default function ListOfDocsComponent(pros) {

  const docsPluginData = usePluginData('docusaurus-plugin-content-docs');
  let docs = docsPluginData.versions[0].docs;
  let itemList=[];
  let previousPath="RandomText";
  function formatDocTitle(title) {
      let titleParts=title.split("/");
      if(titleParts.length > 0) {
          title = titleParts[titleParts.length -1];
          return title.replaceAll("-"," ");
      }
      return title;
  };
  docs.forEach((doc,index)=>{
    if(!doc.path.toString().startsWith(previousPath)){
        itemList.push( <li key={index}><a style={{textTransform: "capitalize"}} href={doc.path}>{formatDocTitle(doc.path.toString())}</a></li>);
        previousPath=doc.path.toString();
    }
  });
  return <ul>{itemList}</ul>;
};
