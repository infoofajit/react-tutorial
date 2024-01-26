import React, {useCallback, useState} from 'react'
import Button from './Button'
import Title from './Title'
import Display from './Display'

const UseCallback = () => {
  const [salary, setSalary] = useState(2000);
  const [age, setAge] = useState(30);

  const incrementAge = useCallback(() => {
    setAge(age + 5);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 100);
  }, [salary]);

  return (
    <div>
      <Title />
      <Display text="age" displayvalue={age} />
      <Button handleClick={incrementAge}>Update Age</Button>
      <Display text="salary" displayvalue={salary} />
      <Button handleClick={incrementSalary}>Update Salary</Button>
    </div>
  )
}

export default UseCallback
