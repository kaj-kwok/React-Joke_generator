import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function useRandomJoke() {
  const [value, setValue] = useState('')

  const getJoke = () => {
    axios.get('http://api.icndb.com/jokes/random')
      .then(obj => setValue(obj.data.value.joke))
      .catch()
  }

  useEffect(() => {
    getJoke()

  }, [])

  return { value, getJoke }
}