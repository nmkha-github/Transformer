import { Box, BoxProps, Typography } from '@mui/material'
import { FONT_FAMILY } from '../../../../assets/font/font'

const ChatBox = ({ content, ...boxProps }: { content: string } & BoxProps) => {
  return (
    <Box {...boxProps} style={{ padding: '4px 8px', borderRadius: 16, maxWidth: '50%', ...boxProps.style }}>
      <Typography fontFamily={FONT_FAMILY}>{content}</Typography>
    </Box>
  )
}

export default ChatBox
