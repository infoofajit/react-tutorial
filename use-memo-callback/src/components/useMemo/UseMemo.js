import React, { useMemo, useState } from 'react'

const UseMemo = () => {
  const [selectedNum, setSelectedNum] = useState(10)
  const [isYellow, setIsYellow] = useState(false)

  const allPrime = useMemo(() => {
    const result = []
    for(let counter = 2; counter <= selectedNum; counter++) {
      if(isPrime(counter)) {
        result.push(counter)
      }
    }
    
    return result
  }, [selectedNum])

  return (
    <div style={{backgroundColor: isYellow ? 'yellow' : ''}}>
      <input
        type="checkbox"
        checked={isYellow}
        onChange={() => {
          setIsYellow(!isYellow)
        }}
      />
      <div className='prime-list'>
        <span>Enter number</span>
        <input
          type="number"
          value={selectedNum}
          onChange={(event) => {
            setSelectedNum(Number(event.target.value))
          }}
        />
        <p>
          There are {allPrime.length} prime(s) between 1 to {selectedNum}:
        </p>
      </div>
    </div>
  )
}

export default UseMemo

// Helper function that calculates whether a given number is prime or not.
function isPrime(n){
  const max = Math.ceil(Math.sqrt(n));
  
  if (n === 2) {
    return true;
  }
  
  for (let counter = 2; counter <= max; counter++) {
    if (n % counter === 0) {
      return false;
    }
  }

  return true;
}