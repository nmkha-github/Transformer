import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { FONT_FAMILY } from '../../assets/font/font'
import { FiInfo } from 'react-icons/fi'
import { BiMoviePlay } from 'react-icons/bi'
import heroImage from '../../assets/images/hero-img.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const [showTooltip, setShowTooltip] = useState(false)
  const navigate = useNavigate()

  return (
    <Box style={{ height: '100vh', background: '#37517e' }}>
      <Box style={{ paddingTop: 12, marginLeft: '10%', marginRight: '10%' }}>
        {/* Header */}
        <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography style={{ fontFamily: 'cursive', color: 'white', fontWeight: 'bold' }} variant='h4'>
            TRANSFORMER
          </Typography>

          <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box style={{ position: 'relative', display: 'flex', justifyContent: 'space-between' }}>
              <FiInfo
                size={28}
                style={{ color: 'white' }}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              />
              {showTooltip && (
                <Box
                  style={{
                    position: 'absolute',
                    width: 240,
                    borderRadius: 16,
                    padding: '12px 16px',
                    background: 'white',
                    marginTop: 40,
                    left: -120,
                    zIndex: 99999
                  }}
                >
                  <Box>
                    <Typography style={{ display: 'flex', justifyContent: 'center' }} fontWeight='bold'>
                      Giới thiệu
                    </Typography>
                    <Typography>abc</Typography>
                  </Box>
                </Box>
              )}
            </Box>
            <motion.button
              whileHover={{ background: '#47b2e4' }}
              style={{
                marginLeft: 16,
                padding: '10px 24px 11px 24px',
                fontSize: 16,
                background: 'none',
                fontFamily: FONT_FAMILY,
                fontWeight: 'bold',
                color: 'white',
                border: '2px solid #47b2e4',
                borderRadius: 50,
                cursor: 'pointer'
              }}
              onClick={() => navigate('/question-answering')}
            >
              Bắt Đầu
            </motion.button>
          </Box>
        </Box>
        {/* Body */}
        <motion.div
          animate={{
            opacity: [0, 0.5, 1],
            y: [20, 0]
          }}
          transition={{
            duration: 2,
            ease: 'easeInOut'
          }}
          style={{ height: 'calc(100vh - 54,6px)', display: 'flex' }}
        >
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              flex: 1,
              color: 'white'
            }}
          >
            <Box style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Typography variant='h3' fontWeight='bold'>
                Question Answering With Transformer
              </Typography>
              <Typography variant='h5' color='rgba(255, 255, 255, 0.6)'>
                Mô hình transformers
              </Typography>

              <Box style={{ marginTop: 16, display: 'flex', alignItems: 'center' }}>
                <BiMoviePlay size={32} />
                <Box style={{ width: 8 }} />
                <Box>
                  <motion.button
                    whileHover={{ border: '2px solid #B0E0E6' }}
                    style={{
                      padding: '10px 24px 11px 24px',
                      fontSize: 16,
                      background: 'none',
                      fontFamily: FONT_FAMILY,
                      fontWeight: 'bold',
                      color: 'white',
                      border: '2px solid #47b2e4',
                      borderRadius: 50,
                      cursor: 'pointer'
                    }}
                  >
                    Xem Demo
                  </motion.button>
                </Box>
              </Box>

              <Box style={{ marginTop: 16, display: 'flex' }}>
                <motion.button
                  whileHover={{ background: '#209dd8' }}
                  style={{
                    padding: '16px 28px 16px 28px',
                    fontSize: 24,
                    background: '#47b2e4',
                    fontFamily: FONT_FAMILY,
                    fontWeight: 'bold',
                    color: 'white',
                    border: 'none',
                    borderRadius: 50,
                    cursor: 'pointer'
                  }}
                  onClick={() => navigate('/question-answering')}
                >
                  Bắt Đầu Ngay
                </motion.button>
              </Box>
            </Box>
          </Box>

          <Box
            style={{
              minHeight: 600,
              display: 'flex',
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <motion.div animate={{ y: [-12, 12, -12] }} transition={{ repeat: Infinity, duration: 2 }}>
              <img alt='' src={heroImage} style={{ objectFit: 'cover', width: '100%' }} />
            </motion.div>
          </Box>
        </motion.div>
      </Box>
    </Box>
  )
}

export default HomePage
