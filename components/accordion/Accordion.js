import React, { useState } from 'react';
import { AccordionItem } from './accordionItem';

const Accordion = (props) => {

  const [ activeItem, setActiveItem] = useState(-1)
  const { accordionItems } = props;
  
  return (
    <>
      {
        accordionItems.map((item, idx) =>
        <AccordionItem
          accordionItem={item}
          accordionIndex={idx}
          isActive={activeItem === idx}
          setActiveItem={setActiveItem}
        />)
      }
    </>
  )
  
}

export default Accordion;