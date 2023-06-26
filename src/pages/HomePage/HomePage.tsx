import { Box, Button, TextField } from '@mui/material'
import axios from 'axios'
import { useState } from 'react'

const HomePage = () => {
  const [text, setText] = useState('')

  //   useEffect(() => {

  //   }, [])
  return (
    <Box>
      <Box className='df aic'>
        <TextField
          fullWidth
          size='small'
          variant='outlined'
          multiline
          value={text}
          onChange={(event) => {
            setText(event.target.value)
          }}
          placeholder={'Nhập đoạn văn...'}
          sx={{
            height: 40,
            fontSize: '1rem',
            fontWeight: 400,
            '*:focus': {
              boxShadow: 'none',
              WebkitBoxShadow: 'none'
            }
          }}
        />
        <Button
          color='primary'
          variant='contained'
          onClick={async () => {
            try {
              const response = await axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/predict',
                data: { content: 'abc' }
              })

              console.log(response.data)
            } catch (error) {
              console.log(error)
            } finally {
              console.log(1)
            }
          }}
        >
          Send
        </Button>
      </Box>
    </Box>
  )
}

export default HomePage
