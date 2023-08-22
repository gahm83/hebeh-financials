import React, { useState } from 'react';

export const AccordionItem = (props) => {

  const { title, content } = props.accordionItem;

  return (
    <div className={props.isActive ? 'accordion-item item-active' : 'accordion-item'}>
      <div className="accordion-title" onClick={() => props.setActiveItem(props.accordionIndex)}>
        <span></span>
        <p>{title}</p>
      </div>
      {
        props.isActive &&
        <div className="accordion-content">{content}</div>
      }
    </div>
  );
};
