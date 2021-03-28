import React, { useRef, useEffect } from 'react';
import './tableauEmbed.styles.scss';

const { tableau } = window;

const TableauEmbed = () => {
  const ref = useRef(null)
  const url = "https://prod-uk-a.online.tableau.com/t/ollybolland/views/Dashboard-statsbomb/Dashboard1/info@ollybolland.com/d453723a-41b5-4154-8e50-721d108fc3f8"

  const initViz = () => {
    new tableau.Viz(ref.current, url, options)
  }

  const options = {
    device: 'desktop',

  }

  useEffect(() => {
    initViz();
  }, [])

  return (
    <div className="container">
      <div ref={ref}></div>
    </div>
  )
}

export default TableauEmbed;