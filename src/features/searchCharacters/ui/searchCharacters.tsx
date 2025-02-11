import { Card, TextField, Typography } from '@/components'
import s from './searchCharacters.module.scss'
import { useEffect, useRef, useState } from 'react'
import { BounceLoader } from 'react-spinners'

type Character = {
  id: number
  name: string
  status: 'Alive' | 'Dead' | 'unknown'
  species: string
  type: string
  gender: string
  origin: {
    name: string
    url: string
  }
  location: {
    name: string
    url: string
  }
  image: string
  episode: string[]
  url: string
  created: string
}

type FetchError = {
  error: string
}

export const SearchCharacters = () => {
  const textFieldRef = useRef<HTMLInputElement>(null)
  const [data, setData] = useState<Character[] | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<FetchError | null>(null)

  const getTextFieldValue = (value: string) => {
    setData(null)
    setError(null)
    if (value.length >= 3) {
      fetchData(value)
    }
  }

  const fetchData = async (value: string): Promise<void> => {
    setLoading(true)
    setError(null)

    const apiUri: string = `https://rickandmortyapi.com/api/character/?name=${value}`

    try {
      const res = await fetch(apiUri)

      const data: { results: Character[] } = await res.json()
      if (res.status === 200) {
        setData(data.results)
      } else {
        setError({ error: 'There is nothing here' })
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (textFieldRef.current) {
      textFieldRef.current.focus()
    }
  }, [])

  return (
    <div className={s.searchCharacters}>
      <div className={s.inputBlock}>
        <TextField
          ref={textFieldRef}
          placeholder="Search characters..."
          onValueChange={getTextFieldValue}
        />
        {error && (
          <Typography.BoldText className={s.errorMessage}>error: {error.error}</Typography.BoldText>
        )}
        {data && (
          <Typography.Text1 className={s.subTitle}>
            Found characters: {data.length}
          </Typography.Text1>
        )}
      </div>
      <div className={s.wrapper}>
        {loading && <BounceLoader size={290} color={'#656ec2'} cssOverride={{ margin: 'auto' }} />}
        {data?.map((character, index: number) =>
          index < 2 ? (
            <Card
              url={character.url}
              key={character.id}
              type={'heading'}
              status={character.status}
              created={character.created}
              title={character.name}
              className={s.cardHeading}
            />
          ) : (
            <Card
              url={character.url}
              key={character.id}
              type={'normal'}
              status={character.status}
              created={character.created}
              title={character.name}
            />
          )
        )}
      </div>
    </div>
  )
}
