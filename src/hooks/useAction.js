import React, {useState} from 'react'

export default function useAction(action) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const perform = async (body = null) {
        try {
            setLoading(true)
            let data = await action(body)
            setData(data)
            
        } catch(e) {
            setError(true)
        } finally {
            setLoading(false)
        }
    }

    return [{loading, data, error}, perform]
}