import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import CustomAccordion from './CustomAccordion';

const data = [
    {
        title: 'ABC',
        descriptions: ' Lorem ipsum dolor sit amet consectetur adipiscing elit sed d',
    },
    {
        title: 'XYQ',
        descriptions: ' Lorem ipsum dolor sit amet consectetur adipiscing elit sed d',

    },
    {
        title: 'PQR',
        descriptions: ' Lorem ipsum dolor sit amet consectetur adipiscing elit sed d',

    },
    {
        title: 'JHK',
        descriptions: ' Lorem ipsum dolor sit amet consectetur adipiscing elit sed d',

    },
    {
        title: 'LMN',
        descriptions: ' Lorem ipsum dolor sit amet consectetur adipiscing elit sed d',

    },
];

export default function AccordiyantList() {
    return (
        <div>
            <Accordion>

                {data.map((val, key) => {
                    return (<CustomAccordion key={key} title={val.title} descriptions={val.descriptions} id={key} />);
                })}
            </Accordion>
        </div>
    )
}
