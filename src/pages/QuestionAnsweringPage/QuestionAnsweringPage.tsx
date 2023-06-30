import { Box, TextField, Typography } from '@mui/material'
import axios from 'axios'
// import { Pipeline, pipeline } from '@xenova/transformers'
import { useState } from 'react'
import LoadingButton from '../../lib/components/LoadingButton/LoadingButton'
import useAppSnackbar from '../../lib/hooks/useAppSnackBar'

const QuestionAnsweringPage = () => {
  const [answering, setAnswering] = useState(false)
  const [context, setContext] = useState('')
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const { showSnackbarError } = useAppSnackbar()

  return (
    <Box>
      <Box className='df aic' style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
        <Box style={{ padding: 16 }}>
          <TextField
            rows={6}
            fullWidth
            size='small'
            variant='outlined'
            multiline
            value={context}
            onChange={(event) => {
              setContext(event.target.value)
            }}
            placeholder={'Nhập đoạn ngữ cảnh...'}
            sx={{
              fontSize: '1rem',
              fontWeight: 400,
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'thin',
              '*:focus': {
                boxShadow: 'none',
                WebkitBoxShadow: 'none'
              }
            }}
          />
        </Box>
        <Box style={{ padding: 16 }}>
          <TextField
            fullWidth
            size='small'
            variant='outlined'
            multiline
            value={question}
            onChange={(event) => {
              setQuestion(event.target.value)
            }}
            placeholder={'Nhập câu hỏi...'}
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
        </Box>
        <Box style={{ display: 'flex', justifyContent: 'center' }}>
          <LoadingButton
            loading={answering}
            color='primary'
            variant='contained'
            style={{ padding: '12px 32px 12px 32px' }}
            onClick={async () => {
              try {
                setAnswering(true)
                const response = await axios.post(
                  'http://127.0.0.1:5000/api/question_answering',
                  {
                    context: context,
                    question: question
                  },
                  {
                    headers: {
                      'Content-Type': 'application/json'
                    }
                  }
                )
                console.log(response.data)
                setAnswer(response.data['answer'])
              } catch (error) {
                showSnackbarError(error)
              } finally {
                setAnswering(false)
              }
            }}
          >
            <Typography style={{ fontWeight: 'bold' }}>Trả lời</Typography>
          </LoadingButton>
        </Box>

        <Box style={{ padding: 16 }}>
          <Typography>{answer}</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default QuestionAnsweringPage
