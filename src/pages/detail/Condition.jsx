import React, { useCallback, memo } from 'react'
import { Tag, Select, Button, Form, Input } from 'antd'
const { Item: FormItem } = Form
const { Option } = Select

export const TYPE_MAP = {
  ALL: 'all',
  ANY: 'any',
  EXPRESSION: 'expression',
}

const TYPES = Object.values(TYPE_MAP)

export class ConditionModel {
  constructor({ type, fact='', operator='', value='', subConditions=[] }) {
    this.type = type
    this.id = parseInt(Math.random() * 100000000)
    this.fact = fact
    this.operator = operator
    this.value = value
    this.subConditions = subConditions
  }
}

const All = memo(() => {
  return (
    <div className="all">
      <Tag color="blue">all</Tag>
    </div>
  )
})

const Any = memo(() => {
  return (
    <div className="any">
      <Tag color="purple">purple</Tag>
    </div>
  )
})

const OPERATORS = [
  'equal',
  'notEqual',
  'lessThan',
  'lessThanInclusive',
  'greaterThan',
  'greaterThanInclusive',
  'in',
  'notIn',
  'contains',
  'doesNotContain',
]

const Expression = memo(({ fact, operator, value, onChange }) => {
  const handleFactChange = useCallback((e) => {
    onChange('fact', e.target.value)
  }, [onChange])

  const handleOperatorChange = useCallback((v) => {
    onChange('operator', v)
  }, [onChange])

  const handleValueChange = useCallback((e) => {
    onChange('value', e.target.value)
  }, [onChange])

  /*
    TODO: value 可以为各种数据格式: undefined/null/number/string/boolean/symbol/object
  */

  return (
    <Form layout="inline">
      <FormItem>
        <Input
          placeholder="fact"
          value={fact}
          onChange={handleFactChange}
        />
      </FormItem>
      <FormItem>
        <Select
          value={operator}
          onChange={handleOperatorChange}
        >
          {
            OPERATORS.map((op) => (
              <Option
                key={op}
                value={op}
              >{op}</Option>
            ))
          }
        </Select>
      </FormItem>
      <FormItem>
        <Input
          placeholder="value"
          value={value}
          onChange={handleValueChange}
        />
      </FormItem>
    </Form>
  )
})

const SubComponentMap = {
  [TYPE_MAP.ALL]: All,
  [TYPE_MAP.ANY]: Any,
  [TYPE_MAP.EXPRESSION]: Expression,
}

const Condition = memo(({ index, data, onChange }) => {
  const handlTypeeChange = useCallback((v) => {
    onChange({
      ...data,
      type: v
    }, index)
  }, [data, index, onChange])

  const handleAdd = useCallback(() => {
    onChange({
      ...data,
      subConditions: [
        ...(data.subConditions),
        new ConditionModel({ type: TYPE_MAP.EXPRESSION })
      ]
    }, index)
  }, [data, index, onChange])

  const handleSubChange = useCallback((subData, idx) => {
    onChange({
      ...data,
      subConditions: data.subConditions.map((item, i) => {
        if(i !== idx) {
          return item
        }
        return subData
      })
    }, index)
  }, [data, index, onChange])

  const handleChange = useCallback((key, value) => {
    onChange({
      ...data,
      [key]: value
    }, index)
  }, [data, index, onChange])

  const { type, fact, operator, value, subConditions } = data
  const SubComp = SubComponentMap[type]

  return (

    <div className="condition">
      <div className="content">
        <Select value={type} style={{ width: 120 }} onChange={handlTypeeChange}>
          {
            TYPES.map((item) => {
              return (
                <Option key={item} value={item}>{item}</Option>
              )
            })
          }
        </Select>
        {
          SubComp &&
          <SubComp
            fact={fact}
            operator={operator}
            value={value}
            onChange={handleChange}
          />
        }
        {
          [TYPE_MAP.ALL, TYPE_MAP.ANY].includes(type) &&
          <Button size="small" onClick={handleAdd}>+子条件</Button>
        }
      </div>
      <div className="sub-condition-list">
        {
          !!subConditions.length &&
          subConditions.map((item, i) => {
            return (
              <Condition
                key={item.id}
                index={i}
                data={ item }
                onChange={ handleSubChange }
              />
            )
          })
        }
      </div>
    </div>
  )
})

export default Condition