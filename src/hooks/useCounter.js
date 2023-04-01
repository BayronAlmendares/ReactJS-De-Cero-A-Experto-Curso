

import React, { useState } from 'react'

export const useCounter = ( initialValue = 10) => {
  const [counter, setCounter] =  useState(initialValue);

  //here I am sending an object
    return {
        counter : counter,
    }
}