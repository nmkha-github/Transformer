import { Box, IconButton, TextField, Typography } from '@mui/material'
import axios from 'axios'
// import { Pipeline, pipeline } from '@xenova/transformers'
import { useEffect, useState, useRef } from 'react'
import useAppSnackbar from '../../lib/hooks/useAppSnackBar'
import ChatBox from '../../modules/question-answering/components/ChatBox/ChatBox'
import { BiSend } from 'react-icons/bi'

const QuestionAnsweringPage = () => {
  const boxchatEndRef = useRef<null | HTMLDivElement>(null)
  const [answering, setAnswering] = useState(false)
  const [context, setContext] = useState('')
  const [question, setQuestion] = useState('')
  const [messages, setMessages] = useState([])
  const { showSnackbarError } = useAppSnackbar()

  useEffect(() => {
    const getAnswer = async () => {
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

        setMessages([...messages, response.data['answer']])
        setQuestion('')
      } catch (error) {
        showSnackbarError(error)
      } finally {
        setAnswering(false)
      }
    }
    if (messages.length % 2) {
      getAnswer()
    }
    boxchatEndRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <Box style={{ height: '100vh', background: '#37517e', padding: '0px 10% 0px 10%' }}>
      <Box className='df aic' style={{ display: 'flex', background: 'white' }}>
        <Box style={{ display: 'flex', flexDirection: 'column', flex: 6 }}>
          <Box
            style={{
              minHeight: 'calc(100vh - 41px)',
              maxHeight: 'calc(100vh - 41px)',
              flex: 9,
              overflowY: 'scroll'
            }}
          >
            {messages.map((message, index) => (
              <Box
                key={index}
                style={{
                  margin: '16px 16px 8px 16px',
                  display: 'flex',
                  justifyContent: index % 2 ? 'start' : 'end'
                }}
              >
                <ChatBox content={message} style={{ background: index % 2 ? 'whitesmoke' : 'pink' }} />
              </Box>
            ))}
            <Box ref={boxchatEndRef} />
          </Box>

          <Box style={{ borderTop: '1px solid gray' }} />
          <Box style={{ display: 'flex', alignItems: 'center', flex: 1, padding: '0px 8px' }}>
            <TextField
              fullWidth
              variant='standard'
              value={question}
              onChange={(event) => {
                setQuestion(event.target.value)
              }}
              onKeyDown={(event) => {
                if (event.key == 'Enter') {
                  setMessages([...messages, question])
                }
              }}
              placeholder={'Nhập câu hỏi...'}
              style={{}}
            />
            <IconButton disabled={answering} onClick={() => setMessages([...messages, question])}>
              <BiSend />
            </IconButton>
          </Box>
        </Box>

        <Box style={{ borderRight: '1px solid gray' }} />

        <Box style={{ flex: 4 }}>
          <Box style={{ padding: 16 }}>
            <TextField
              rows={20}
              fullWidth
              size='small'
              variant='outlined'
              multiline
              value={context}
              onChange={(event) => {
                setContext(event.target.value)
              }}
              placeholder={'Nhập đoạn văn...'}
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
            <Box style={{ height: 4 }} />
            <Typography>
              <strong>Hướng dẫn: </strong> Nhập đoạn văn chứa thông tin và câu hỏi đối với thông tin đó sau đó nhấn
              Enter và nhận được câu trả lời từ máy trong khung chat
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default QuestionAnsweringPage
