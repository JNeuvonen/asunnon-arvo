import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const AccordionWrapper = ({ title, text }) => {
  return (
    <Accordion className="accordion">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon style={{ height: 30, width: 30 }} />}
      >
        <h6 className="accordion__title">{title}</h6>
      </AccordionSummary>
      <AccordionDetails>
        <p className="accordion__content">{text}</p>
      </AccordionDetails>
    </Accordion>
  )
}
export default AccordionWrapper
