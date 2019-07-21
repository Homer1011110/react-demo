import React, { useState, useCallback } from 'react'
import { withRouter } from 'react-router'
import { Button } from 'antd'

import ThemeContext from '../../context/theme'
import Condition, { TYPE_MAP, ConditionModel } from './Condition'
import { normalizeConditions, normalizeEvent } from './util'

import './index.scss'

const Page = () => {
  const [data, setData] = useState(new ConditionModel({ type: TYPE_MAP.ALL }))
  const handleChange = useCallback((data) => {
    setData(data)
  }, [])

  const handleSubmit = useCallback(() => {
    console.log(JSON.stringify(data))
    const conditions = normalizeConditions(data)
    const event = normalizeEvent('event1')
    const rule = {
      conditions,
      event,
      priority: 1,
    }
    console.log(JSON.stringify(rule))
  }, [data])

  return (
    <ThemeContext.Consumer>
      {({ theme: { backgroundColor, textColor } }) => (
        <div
          style={{ backgroundColor: backgroundColor, color: textColor }}
        >
          <div className="body">
            <Condition
              data={data}
              onChange={handleChange}
            />
          </div>
          <div className="footer">
            <Button onClick={handleSubmit}>确定</Button>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Page)