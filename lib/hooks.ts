import { useState, useEffect } from 'react'
import axios from "axios";

export function useCurrencies() {
  const [currencies, setCurrencies] = useState([])

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/currencies')
      const response = await res.json()
      console.log(response.data)
      console.log("From hook")
      setCurrencies(response.data.data)
    }
    fetchData()
  }, [])

  return currencies
}