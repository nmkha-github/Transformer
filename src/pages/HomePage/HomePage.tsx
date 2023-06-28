import { Box, TextField } from '@mui/material'
import axios from 'axios'
// import { Pipeline, pipeline } from '@xenova/transformers'
import { useState } from 'react'
import LoadingButton from '../../lib/components/LoadingButton/LoadingButton'
import useAppSnackbar from '../../lib/hooks/useAppSnackBar'

const HomePage = () => {
  const [summarizing, setSummarizing] = useState(false)
  const [text, setText] = useState('')
  const { showSnackbarError } = useAppSnackbar()
  // const [summarizer, setSummarizer] = useState<Pipeline>()

  // useEffect(() => {
  //   const loadModel = async () => {
  //     if (!summarizer) {
  //       const model = await pipeline('summarization', 'Phongle1311/my_awesome_billsum_model')
  //       setSummarizer(model)
  //     }
  //   }

  //   loadModel()
  // }, [summarizer])

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
        <LoadingButton
          loading={summarizing}
          color='primary'
          variant='contained'
          onClick={async () => {
            try {
              setSummarizing(true)
              const response = await axios.post(
                'http://127.0.0.1:5000/api/summarize',
                {
                  content: text
                },
                {
                  headers: {
                    'Content-Type': 'application/json'
                  }
                }
              )
              console.log(response.data)
            } catch (error) {
              showSnackbarError(error)
            } finally {
              setSummarizing(false)
            }
          }}
        >
          Send
        </LoadingButton>
      </Box>
    </Box>
  )
}

export default HomePage
